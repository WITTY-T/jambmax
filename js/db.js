const db = {
    db: null,
    DB_NAME: 'JAMB_MAX_DB',
    DB_VERSION: 1,
    
    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);
            
            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                resolve();
            };
            
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                
                if (!db.objectStoreNames.contains('questions')) {
                    db.createObjectStore('questions', { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains('progress')) {
                    db.createObjectStore('progress', { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains('exams')) {
                    db.createObjectStore('exams', { keyPath: 'id', autoIncrement: true });
                }
                if (!db.objectStoreNames.contains('bookmarks')) {
                    db.createObjectStore('bookmarks', { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains('user')) {
                    db.createObjectStore('user', { keyPath: 'key' });
                }
                if (!db.objectStoreNames.contains('syncQueue')) {
                    db.createObjectStore('syncQueue', { keyPath: 'id', autoIncrement: true });
                }
            };
        });
    },
    
    // Generic CRUD
    async put(store, data) {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(store, 'readwrite');
            const st = tx.objectStore(store);
            const req = st.put(data);
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    },
    
    async get(store, key) {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(store, 'readonly');
            const st = tx.objectStore(store);
            const req = st.get(key);
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    },
    
    async getAll(store) {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(store, 'readonly');
            const st = tx.objectStore(store);
            const req = st.getAll();
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    },
    
    async delete(store, key) {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(store, 'readwrite');
            const st = tx.objectStore(store);
            const req = st.delete(key);
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    },
    
    // User data
    async saveUser(userData) {
        await this.put('user', { key: 'current', ...userData });
        if (navigator.onLine && auth.currentUser) {
            await this.sync();
        }
    },
    
    async getUser() {
        const user = await this.get('user', 'current');
        return user || {
            xp: 0,
            level: 1,
            streak: 0,
            premium: false,
            progress: {},
            weakAreas: [],
            totalExams: 0,
            totalQuestions: 0,
            studyTime: 0,
            bestScore: 0
        };
    },
    
    // Questions
    async saveQuestions(questions) {
        const tx = this.db.transaction('questions', 'readwrite');
        const store = tx.objectStore('questions');
        for (const q of questions) {
            store.put(q);
        }
        return new Promise((resolve, reject) => {
            tx.oncomplete = () => resolve();
            tx.onerror = () => reject(tx.error);
        });
    },
    
    async getQuestions() {
        const qs = await this.getAll('questions');
        if (qs.length === 0) {
            // Seed with embedded data
            await this.saveQuestions(JAMB_DATA.questions);
            return JAMB_DATA.questions;
        }
        return qs;
    },
    
    // Exams
    async saveExam(examData) {
        const id = Date.now();
        const exam = { id, ...examData, date: new Date().toISOString() };
        await this.put('exams', exam);
        
        // Update user stats
        const user = await this.getUser();
        user.totalExams = (user.totalExams || 0) + 1;
        user.totalQuestions = (user.totalQuestions || 0) + (examData.answers?.length || 0);
        if (examData.score > (user.bestScore || 0)) user.bestScore = examData.score;
        
        // Calculate XP
        const xpGain = Math.round((examData.score / examData.total) * 100);
        user.xp = (user.xp || 0) + xpGain;
        user.level = Math.floor(user.xp / 500) + 1;
        
        await this.saveUser(user);
        
        // Queue for sync
        if (navigator.onLine && auth.currentUser) {
            await this.sync();
        } else {
            await this.queueAction('saveExam', exam);
        }
        
        return id;
    },
    
    async getExams() {
        return await this.getAll('exams');
    },
    
    // Sync
    async queueAction(action, data) {
        await this.put('syncQueue', { action, data, timestamp: Date.now() });
    },
    
    async sync() {
        if (!navigator.onLine || !auth.currentUser) return;
        
        const queue = await this.getAll('syncQueue');
        if (queue.length === 0) return;
        
        try {
            const user = auth.currentUser;
            const userRef = firebase.firestore().collection('users').doc(user.uid);
            
            for (const item of queue) {
                if (item.action === 'saveExam') {
                    await userRef.collection('exams').add(item.data);
                }
            }
            
            // Clear queue
            const tx = this.db.transaction('syncQueue', 'readwrite');
            const store = tx.objectStore('syncQueue');
            store.clear();
            
            // Sync user data to Firestore
            const localUser = await this.getUser();
            await userRef.set(localUser, { merge: true });
            
            app.showToast('Sync complete!', 'success');
            document.getElementById('lastSync').textContent = new Date().toLocaleString();
        } catch (err) {
            console.error('Sync failed:', err);
            app.showToast('Sync failed. Will retry later.', 'error');
        }
    },
    
    async downloadAll() {
        await this.saveQuestions(JAMB_DATA.questions);
        app.showToast('All questions downloaded for offline use!', 'success');
    },
    
    async clear() {
        if (confirm('Are you sure? This will delete all local data.')) {
            const tx = this.db.transaction(['questions', 'progress', 'exams', 'bookmarks', 'user', 'syncQueue'], 'readwrite');
            tx.objectStore('questions').clear();
            tx.objectStore('progress').clear();
            tx.objectStore('exams').clear();
            tx.objectStore('bookmarks').clear();
            tx.objectStore('user').clear();
            tx.objectStore('syncQueue').clear();
            app.showToast('All local data cleared.', 'success');
            setTimeout(() => location.reload(), 1000);
        }
    }
};