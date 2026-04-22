const auth = {
    currentUser: null,
    
    init() {
        firebase.auth().onAuthStateChanged(user => {
            this.currentUser = user;
            this.updateUI(user);
        });
        
        document.getElementById('logoutBtn')?.addEventListener('click', () => this.logout());
    },
    
    updateUI(user) {
        const userName = document.getElementById('userName');
        const userAvatar = document.getElementById('userAvatar');
        const profileName = document.getElementById('profileName');
        const profileEmail = document.getElementById('profileEmail');
        const profileAvatar = document.getElementById('profileAvatar');
        const logoutBtn = document.getElementById('logoutBtn');
        const welcomeText = document.getElementById('welcomeText');
        
        if (user) {
            const name = user.displayName || user.email.split('@')[0];
            const initial = name.charAt(0).toUpperCase();
            
            if (userName) userName.textContent = name;
            if (userAvatar) userAvatar.textContent = initial;
            if (profileName) profileName.textContent = name;
            if (profileEmail) profileEmail.textContent = user.email;
            if (profileAvatar) profileAvatar.textContent = initial;
            if (logoutBtn) logoutBtn.style.display = 'block';
            if (welcomeText) welcomeText.textContent = `Welcome back, ${name}!`;
            
            // Load cloud data
            this.loadCloudData(user.uid);
        } else {
            if (userName) userName.textContent = 'Guest';
            if (userAvatar) userAvatar.textContent = '?';
            if (profileName) profileName.textContent = 'Guest User';
            if (profileEmail) profileEmail.textContent = 'Not signed in';
            if (profileAvatar) profileAvatar.textContent = '?';
            if (logoutBtn) logoutBtn.style.display = 'none';
            if (welcomeText) welcomeText.textContent = 'Welcome to JAMB MAX!';
        }
    },
    
    async loadCloudData(uid) {
        if (!navigator.onLine) return;
        
        try {
            const doc = await firebase.firestore().collection('users').doc(uid).get();
            if (doc.exists) {
                const cloudData = doc.data();
                const localData = await db.getUser();
                // Merge: use higher values
                const merged = {
                    ...localData,
                    ...cloudData,
                    xp: Math.max(localData.xp || 0, cloudData.xp || 0),
                    level: Math.max(localData.level || 1, cloudData.level || 1),
                    streak: Math.max(localData.streak || 0, cloudData.streak || 0),
                    bestScore: Math.max(localData.bestScore || 0, cloudData.bestScore || 0),
                    totalExams: Math.max(localData.totalExams || 0, cloudData.totalExams || 0),
                };
                await db.saveUser(merged);
                app.updateStats();
            }
        } catch (err) {
            console.error('Failed to load cloud data:', err);
        }
    },
    
    logout() {
        firebase.auth().signOut().then(() => {
            app.showToast('Logged out successfully', 'success');
            setTimeout(() => window.location.href = 'index.html', 1000);
        });
    }
};