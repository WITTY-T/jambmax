/**
 * JAMB MAX - Main App Controller (v2)
 */

const app = {
    init() {
        console.log('[app] Initializing...');

        this.setupNavigation();
        this.updateStats();

        if (typeof jmDB !== 'undefined' && !jmDB.firestore) {
            jmDB.init();
        }

        console.log('[app] Ready');
    },

    setupNavigation() {
        const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('sidebar');
        const sidebarClose = document.getElementById('sidebarClose');

        if (menuToggle && sidebar) {
            menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
        }
        if (sidebarClose && sidebar) {
            sidebarClose.addEventListener('click', () => sidebar.classList.remove('open'));
        }

        document.addEventListener('click', (e) => {
            if (sidebar && sidebar.classList.contains('open')) {
                if (!sidebar.contains(e.target) && e.target !== menuToggle) {
                    sidebar.classList.remove('open');
                }
            }
        });
    },

    updateStats() {
        const xp = parseInt(localStorage.getItem('jambmax_xp') || '0');
        const streak = parseInt(localStorage.getItem('jambmax_streak') || '0');
        const solved = parseInt(localStorage.getItem('jambmax_questions_solved') || '0');

        const xpBadge = document.getElementById('xpBadge');
        const streakBadge = document.getElementById('streakBadge');

        if (xpBadge) xpBadge.textContent = '⭐ ' + xp + ' XP';
        if (streakBadge) streakBadge.textContent = '🔥 ' + streak;

        const totalExams = document.getElementById('totalExams');
        const questionsSolved = document.getElementById('questionsSolved');

        if (totalExams) {
            const history = JSON.parse(localStorage.getItem('jambmax_pastq_history') || '[]');
            totalExams.textContent = history.length;
        }
        if (questionsSolved) questionsSolved.textContent = solved;

        const profileXP = document.getElementById('profileXP');
        const profileStreak = document.getElementById('profileStreak');
        const profileLevel = document.getElementById('profileLevel');

        if (profileXP) profileXP.textContent = xp;
        if (profileStreak) profileStreak.textContent = streak;
        if (profileLevel) profileLevel.textContent = Math.floor(xp / 100) + 1;
        
        // Premium Badge Logic
        this.updatePremiumBadge();
    },
    
    async updatePremiumBadge() {
        if (typeof payment === 'undefined') return;
        const isPremium = await payment.checkPremiumStatus();
        const userNameEl = document.getElementById('userName');
        
        if (isPremium && userNameEl && !userNameEl.innerHTML.includes('PRO')) {
            userNameEl.innerHTML += ' <span style="background: var(--gold); color: var(--navy); font-size: 0.6rem; padding: 2px 6px; border-radius: 4px; vertical-align: top; margin-left: 5px; font-weight: 800;">PRO</span>';
        }
    },

    showToast(message, duration) {
        duration = duration || 3000;
        let toast = document.getElementById('toast');

        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            toast.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);background:#64ffda;color:#0a192f;padding:0.75rem 1.5rem;border-radius:8px;font-weight:600;z-index:9999;opacity:0;transition:opacity 0.3s;pointer-events:none;';
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.style.opacity = '1';

        setTimeout(function() {
            toast.style.opacity = '0';
        }, duration);
    },

    navigate(page) {
        window.location.href = page + '.html';
    },

    upgrade() {
        if (typeof payment !== 'undefined') {
            payment.showPricingModal();
        } else {
            this.showToast('Premium coming soon!');
        }
    }
};

window.app = app;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { app.init(); });
} else {
    app.init();
}