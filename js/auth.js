// js/auth.js - Add offline fallback
const auth = {
    user: null,
    isOnline: false,

    init() {
        firebase.auth().onAuthStateChanged(user => {
            this.user = user;
            if (user) {
                this.loadCloudData().catch(e => {
                    console.warn('[Auth] Cloud load failed, using local:', e);
                    this.loadLocalData();
                });
            }
            this.updateUI();
        });
    },

    async loadCloudData() {
        if (!db.isOnline || !db.firestore) {
            throw new Error('Firestore not available');
        }
        const doc = await db.firestore.collection('users').doc(this.user.uid).get();
        if (doc.exists) {
            const data = doc.data();
            // Merge with local data
            localStorage.setItem('jambmax_user_data', JSON.stringify(data));
        }
    },

    loadLocalData() {
        const local = localStorage.getItem('jambmax_user_data');
        if (local) {
            console.log('[Auth] Loaded from localStorage');
        }
    },

    updateUI() {
        // Update UI elements safely
        const nameEl = document.getElementById('userName');
        const avatarEl = document.getElementById('userAvatar');
        const profileName = document.getElementById('profileName');
        
        if (this.user) {
            if (nameEl) nameEl.textContent = this.user.displayName || 'User';
            if (avatarEl) avatarEl.textContent = (this.user.displayName || 'U')[0].toUpperCase();
            if (profileName) profileName.textContent = this.user.displayName || 'User';
        } else {
            if (nameEl) nameEl.textContent = 'Guest';
            if (avatarEl) avatarEl.textContent = '?';
        }
    }
};

// Safe init
if (typeof firebase !== 'undefined') {
    auth.init();
}