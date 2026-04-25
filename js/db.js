/**
 * JAMB MAX - Database Module (v2)
 */

const jmDB = {
    firestore: null,
    isOnline: false,
    persistenceEnabled: false,

    init() {
        console.log('[jmDB] Initializing...');
        try {
            this.firestore = firebase.firestore();

            if (!this.persistenceEnabled) {
                this.firestore.enablePersistence({ synchronizeTabs: true })
                    .then(() => {
                        console.log('[jmDB] Persistence enabled');
                        this.persistenceEnabled = true;
                    })
                    .catch(err => {
                        if (err.code === 'failed-precondition') {
                            console.log('[jmDB] Persistence already active');
                            this.persistenceEnabled = true;
                        } else {
                            console.warn('[jmDB] Persistence error:', err.code);
                        }
                    });
            }

            this.isOnline = true;
            console.log('[jmDB] Ready');

        } catch (e) {
            console.error('[jmDB] Init failed:', e.message);
            this.isOnline = false;
        }
    },

    async sync() {
        if (!this.isOnline) {
            jmApp.showToast('Working offline');
            return false;
        }

        const user = firebase.auth().currentUser;
        if (!user) {
            jmApp.showToast('Sign in to sync');
            return false;
        }

        try {
            const data = this.getLocalData();
            await this.firestore.collection('users').doc(user.uid).set(data, { merge: true });
            jmApp.showToast('Synced to cloud');
            return true;
        } catch (err) {
            console.error('[jmDB] Sync failed:', err.message);
            jmApp.showToast('Sync failed — saved locally');
            return false;
        }
    },

    async loadUserData() {
        if (this.isOnline && this.firestore) {
            try {
                const user = firebase.auth().currentUser;
                if (user) {
                    const doc = await this.firestore.collection('users').doc(user.uid).get();
                    if (doc.exists) {
                        const cloudData = doc.data();
                        this.saveLocalData(cloudData);
                        return cloudData;
                    }
                }
            } catch (err) {
                console.warn('[jmDB] Cloud load failed:', err.message);
            }
        }
        return this.getLocalData();
    },

    async saveUserData(data) {
        const fullData = { ...data, lastUpdated: Date.now() };
        this.saveLocalData(fullData);

        if (this.isOnline && this.firestore) {
            try {
                const user = firebase.auth().currentUser;
                if (user) {
                    await this.firestore.collection('users').doc(user.uid).set(fullData, { merge: true });
                }
            } catch (err) {
                console.warn('[jmDB] Cloud save failed:', err.message);
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
        if (confirm('Delete ALL data? This cannot be undone.')) {
            localStorage.clear();
            const req = indexedDB.deleteDatabase('JAMBMAX_PastQuestions');
            req.onsuccess = () => console.log('[jmDB] Cleared');
            jmApp.showToast('All data cleared');
            setTimeout(() => location.reload(), 1000);
        }
    }
};

if (typeof firebase !== 'undefined' && firebase.firestore) {
    jmDB.init();
} else {
    window.addEventListener('load', () => {
        if (typeof firebase !== 'undefined' && firebase.firestore) {
            jmDB.init();
        }
    });
}