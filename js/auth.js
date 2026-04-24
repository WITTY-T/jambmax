/**
 * JAMB MAX - Auth Module
 * Firebase Auth with offline fallback
 */

const auth = {
    user: null,
    isOnline: false,

    init() {
        console.log('[Auth] Initializing...');

        // Listen for auth state changes
        firebase.auth().onAuthStateChanged(user => {
            this.user = user;
            console.log('[Auth] State changed:', user ? user.email : 'signed out');

            if (user) {
                // Try to load cloud data, fall back to local
                this.loadUserData().catch(err => {
                    console.warn('[Auth] Cloud load failed:', err.message);
                }).finally(() => {
                    this.updateUI();
                });
            } else {
                this.updateUI();
            }
        });
    },

    async loadUserData() {
        // Use db module if available
        if (typeof db !== 'undefined' && db.loadUserData) {
            return await db.loadUserData();
        }

        // Fallback: direct Firestore access
        try {
            const firestore = firebase.firestore();
            const doc = await firestore.collection('users').doc(this.user.uid).get();

            if (doc.exists) {
                const data = doc.data();
                localStorage.setItem('jambmax_user_data', JSON.stringify(data));
                return data;
            }
        } catch (err) {
            console.warn('[Auth] Direct Firestore failed:', err.message);
        }

        // Final fallback: localStorage
        const local = localStorage.getItem('jambmax_user_data');
        return local ? JSON.parse(local) : {};
    },

    updateUI() {
        const userName = document.getElementById('userName');
        const userAvatar = document.getElementById('userAvatar');
        const profileName = document.getElementById('profileName');
        const profileEmail = document.getElementById('profileEmail');
        const profileAvatar = document.getElementById('profileAvatar');
        const logoutBtn = document.getElementById('logoutBtn');

        if (this.user) {
            const name = this.user.displayName || this.user.email?.split('@')[0] || 'User';
            const initial = name[0].toUpperCase();

            if (userName) userName.textContent = name;
            if (userAvatar) userAvatar.textContent = initial;
            if (profileName) profileName.textContent = name;
            if (profileEmail) profileEmail.textContent = this.user.email || 'Signed in';
            if (profileAvatar) profileAvatar.textContent = initial;
            if (logoutBtn) logoutBtn.style.display = 'block';
        } else {
            if (userName) userName.textContent = 'Guest';
            if (userAvatar) userAvatar.textContent = '?';
            if (profileName) profileName.textContent = 'Guest User';
            if (profileEmail) profileEmail.textContent = 'Not signed in';
            if (profileAvatar) profileAvatar.textContent = '?';
            if (logoutBtn) logoutBtn.style.display = 'none';
        }
    },

    async signIn(email, password) {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            app.showToast('Signed in successfully');
            return true;
        } catch (err) {
            app.showToast(err.message);
            return false;
        }
    },

    async signUp(email, password) {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            app.showToast('Account created');
            return true;
        } catch (err) {
            app.showToast(err.message);
            return false;
        }
    },

    async signOut() {
        try {
            await firebase.auth().signOut();
            app.showToast('Signed out');
        } catch (err) {
            app.showToast(err.message);
        }
    },

    async signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await firebase.auth().signInWithPopup(provider);
            app.showToast('Signed in with Google');
        } catch (err) {
            app.showToast(err.message);
        }
    }
};

// Auto-init
if (typeof firebase !== 'undefined') {
    auth.init();
}