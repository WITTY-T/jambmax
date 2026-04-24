/**
 * JAMB MAX - Database Module
 * Firebase Firestore with offline fallback
 */

const db = {
    firestore: null,
    isOnline: false,
    persistenceEnabled: false,

    init() {
        try {
            // Firestore is already initialized by the Firebase SDK script
            this.firestore = firebase.firestore();

            // Only enable persistence once
            if (!this.persistenceEnabled) {
                this.firestore.enablePersistence({ synchronizeTabs: true })
                    .then(() => {
                        console.log('[DB] Offline persistence enabled');
                        this.persistenceEnabled = true;
                    })
                    .catch(err => {
                        if (err.code === 'failed-precondition') {
                            console.log('[DB] Persistence already enabled in another tab');
                        } else if (err.code === 'unimplemented') {
                            console.warn('[DB] Browser does not support persistence');
                        } else {
                            console.warn('[DB] Persistence failed:', err.message);
                        }
                    });
            }

            this.isOnline = true;
            console.log('[DB] Firestore initialized');

        } catch (e) {
            console.error('[DB] Init error:', e.message);
            this.isOnline = false;
        }
    },

    async sync() {
        if (!this.isOnline || !this.firestore) {
            app.showToast('Working offline — sync when connected');
            return false;
        }

        try {
            const user = firebase.auth().currentUser;
            if (!user) {
                app.showToast('Sign in to sync data');
                return false;
            }

            const data = this.getLocalData();
            await this.firestore.collection('users').doc(user.uid).set(data, { merge: true });

            app.showToast('Data synced to cloud');
            return true;

        } catch (err) {
            console.error('[DB] Sync failed:', err);
            app.showToast('Sync failed — saved locally');
            return false;
        }
    },

    async downloadAll() {
        if (!this.isOnline || !this.firestore) {
            app.showToast('Connect to internet to download');
            return;
        }

        app.showToast('Downloading all questions for offline...');
        // Trigger past questions download
        if (typeof pastQuestions !== 'undefined') {
            await pastQuestions.downloadAllOffline();
        }
    },

    async loadUserData() {
        if (!this.isOnline || !this.firestore) {
            console.log('[DB] Offline — using local data');
            return this.getLocalData();
        }

        try {
            const user = firebase.auth().currentUser;
            if (!user) return this.getLocalData();

            const doc = await this.firestore.collection('users').doc(user.uid).get();
            if (doc.exists) {
                const cloudData = doc.data();
                const localData = this.getLocalData();

                // Merge: use newer timestamp
                if (cloudData.lastUpdated && localData.lastUpdated) {
                    if (cloudData.lastUpdated > localData.lastUpdated) {
                        this.saveLocalData(cloudData);
                        return cloudData;
                    }
                }
                return localData;
            }
            return this.getLocalData();

        } catch (err) {
            console.warn('[DB] Load failed:', err.message);
            return this.getLocalData();
        }
    },

    async saveUserData(data) {
        const fullData = {
            ...data,
            lastUpdated: Date.now()
        };

        // Always save locally
        this.saveLocalData(fullData);

        // Try cloud if online
        if (this.isOnline && this.firestore) {
            try {
                const user = firebase.auth().currentUser;
                if (user) {
                    await this.firestore.collection('users').doc(user.uid).set(fullData, { merge: true });
                }
            } catch (err) {
                console.warn('[DB] Cloud save failed:', err.message);
            }
        }
    },

    getLocalData() {
        try {
            return JSON.parse(localStorage.getItem('jambmax_user_data') || '{}');
        } catch {
            return {};
        }
    },

    saveLocalData(data) {
        localStorage.setItem('jambmax_user_data', JSON.stringify(data));
    },

    clear() {
        if (confirm('Delete all local data? This cannot be undone.')) {
            localStorage.removeItem('jambmax_user_data');
            localStorage.removeItem('jambmax_xp');
            localStorage.removeItem('jambmax_streak');
            localStorage.removeItem('jambmax_questions_solved');
            localStorage.removeItem('jambmax_pastq_history');
            localStorage.removeItem('aloc_api_token');

            // Clear IndexedDB
            const req = indexedDB.deleteDatabase('JAMBMAX_PastQuestions');
            req.onsuccess = () => console.log('[DB] IndexedDB cleared');

            app.showToast('All local data cleared');
            setTimeout(() => location.reload(), 1000);
        }
    }
};

// Auto-init when Firebase loads
if (typeof firebase !== 'undefined' && firebase.firestore) {
    db.init();
} else {
    // Wait for Firebase
    window.addEventListener('load', () => {
        if (typeof firebase !== 'undefined' && firebase.firestore) {
            db.init();
        }
    });
}