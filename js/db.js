// js/db.js - Updated with error handling
const db = {
    firestore: null,
    isOnline: false,

    init() {
        try {
            this.firestore = firebase.firestore();
            // Enable offline persistence
            this.firestore.enablePersistence({ synchronizeTabs: true })
                .then(() => console.log('[DB] Offline persistence enabled'))
                .catch(err => console.warn('[DB] Persistence failed:', err));
            
            this.isOnline = true;
        } catch (e) {
            console.error('[DB] Init failed:', e);
            this.isOnline = false;
        }
    },

    async sync() {
        if (!this.isOnline) {
            app.showToast('Working offline');
            return;
        }
        // Your sync logic here
    },

    async downloadAll() {
        if (!this.isOnline) {
            app.showToast('Connect to internet to download');
            return;
        }
        // Download logic
    },

    clear() {
        localStorage.clear();
        app.showToast('Local data cleared');
    }
};

// Initialize when Firebase is ready
if (typeof firebase !== 'undefined') {
    db.init();
}