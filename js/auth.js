/**
 * JAMB MAX - Auth Module (v2)
 */

const jmAuth = {
    user: null,

    init() {
        console.log('[jmAuth] Initializing...');

        firebase.auth().onAuthStateChanged(user => {
            this.user = user;
            console.log('[jmAuth] State:', user ? user.email : 'signed out');

            if (user) {
                this.loadData();
            }
            this.updateUI();
        });
    },

    async loadData() {
        try {
            if (typeof jmDB !== 'undefined' && jmDB.loadUserData) {
                await jmDB.loadUserData();
            }
        } catch (err) {
            console.warn('[jmAuth] Load failed:', err.message);
        }
    },

    updateUI() {
        const els = {
            userName: document.getElementById('userName'),
            userAvatar: document.getElementById('userAvatar'),
            profileName: document.getElementById('profileName'),
            profileEmail: document.getElementById('profileEmail'),
            profileAvatar: document.getElementById('profileAvatar'),
            logoutBtn: document.getElementById('logoutBtn')
        };

        if (this.user) {
            const name = this.user.displayName || this.user.email?.split('@')[0] || 'User';
            const initial = name[0].toUpperCase();

            if (els.userName) els.userName.textContent = name;
            if (els.userAvatar) els.userAvatar.textContent = initial;
            if (els.profileName) els.profileName.textContent = name;
            if (els.profileEmail) els.profileEmail.textContent = this.user.email || 'Signed in';
            if (els.profileAvatar) els.profileAvatar.textContent = initial;
            if (els.logoutBtn) els.logoutBtn.style.display = 'block';
        } else {
            if (els.userName) els.userName.textContent = 'Guest';
            if (els.userAvatar) els.userAvatar.textContent = '?';
            if (els.profileName) els.profileName.textContent = 'Guest User';
            if (els.profileEmail) els.profileEmail.textContent = 'Not signed in';
            if (els.profileAvatar) els.profileAvatar.textContent = '?';
            if (els.logoutBtn) els.logoutBtn.style.display = 'none';
        }
    },

    async signIn(email, password) {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            jmApp.showToast('Signed in');
            return true;
        } catch (err) {
            jmApp.showToast(err.message);
            return false;
        }
    },

    async signUp(email, password) {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            jmApp.showToast('Account created');
            return true;
        } catch (err) {
            jmApp.showToast(err.message);
            return false;
        }
    },

    async signOut() {
        try {
            await firebase.auth().signOut();
            jmApp.showToast('Signed out');
        } catch (err) {
            jmApp.showToast(err.message);
        }
    },

    async googleSignIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await firebase.auth().signInWithPopup(provider);
            jmApp.showToast('Signed in with Google');
        } catch (err) {
            jmApp.showToast(err.message);
        }
    }
};

if (typeof firebase !== 'undefined') {
    jmAuth.init();
}