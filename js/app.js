// js/app.js - Safe initialization
const app = {
    pages: {},
    
    init() {
        console.log('[App] Initializing...');
        
        // Safe AI init - only if AI module exists
        if (typeof ai !== 'undefined' && ai.init) {
            try {
                ai.init();
            } catch (e) {
                console.warn('[App] AI init failed:', e);
            }
        }
        
        // Safe auth init
        if (typeof auth !== 'undefined' && auth.init) {
            try {
                auth.init();
            } catch (e) {
                console.warn('[App] Auth init failed:', e);
            }
        }
        
        // Safe DB init
        if (typeof db !== 'undefined' && db.init) {
            try {
                db.init();
            } catch (e) {
                console.warn('[App] DB init failed:', e);
            }
        }
        
        this.setupNavigation();
        this.updateStats();
    },

    setupNavigation() {
        // Sidebar toggle
        const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('sidebar');
        const sidebarClose = document.getElementById('sidebarClose');
        
        if (menuToggle && sidebar) {
            menuToggle.addEventListener('click', () => sidebar.classList.add('open'));
        }
        if (sidebarClose && sidebar) {
            sidebarClose.addEventListener('click', () => sidebar.classList.remove('open'));
        }
    },

    updateStats() {
        // Update XP badge
        const xpBadge = document.getElementById('xpBadge');
        const streakBadge = document.getElementById('streakBadge');
        const xp = localStorage.getItem('jambmax_xp') || '0';
        const streak = localStorage.getItem('jambmax_streak') || '0';
        
        if (xpBadge) xpBadge.textContent = `⭐ ${xp} XP`;
        if (streakBadge) streakBadge.textContent = `🔥 ${streak}`;
    },

    showToast(message) {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3000);
        }
    },

    navigate(page) {
        window.location.href = `${page}.html`;
    },

    upgrade() {
        this.showToast('Premium coming soon!');
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => app.init());
} else {
    app.init();
}