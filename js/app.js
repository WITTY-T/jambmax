const app = {
    async init() {
        await db.init();
        auth.init();
        ai.init();
        
        // Load questions
        await db.getQuestions();
        
        // Navigation
        this.setupNavigation();
        
        // Update stats
        this.updateStats();
        
        // Connection status
        this.updateConnectionStatus();
        window.addEventListener('online', () => this.updateConnectionStatus());
        window.addEventListener('offline', () => this.updateConnectionStatus());
        
        // Sidebar toggle
        document.getElementById('menuToggle')?.addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('open');
        });
        
        document.getElementById('sidebarClose')?.addEventListener('click', () => {
            document.getElementById('sidebar').classList.remove('open');
        });
        
        // Study filters
        this.setupStudyFilters();
        
        // Check streak
        this.checkStreak();
        
        // Load progress page data
        this.loadProgress();
        payment.init();
settings.initUI();

// Request notification permission after 30 seconds
setTimeout(() => {
    notifications.requestPermission();
}, 30000);

// Check streak reminder daily
setInterval(() => {
    notifications.checkStreakReminder();
}, 3600000); // Every hour
    },
    
    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const page = item.dataset.page;
                this.navigate(page);
                
                // Close sidebar on mobile
                document.getElementById('sidebar').classList.remove('open');
            });
        });
    },
    
    navigate(page) {
        // Update nav

        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.querySelector(`[data-page="${page}"]`)?.classList.add('active');
        
        // Update page
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(`${page}-page`)?.classList.add('active');
        
        // Page-specific init
        if (page === 'leaderboard') leaderboard.load();
if (page === 'flashcards') flashcards.render();
        if (page === 'progress') this.loadProgress();
        if (page === 'profile') this.loadProfile();
    },
    
    setupStudyFilters() {
        const subjectSelect = document.getElementById('studySubject');
        const topicSelect = document.getElementById('studyTopic');
        
        subjectSelect?.addEventListener('change', () => {
            const subject = subjectSelect.value;
            topicSelect.innerHTML = '<option value="">All Topics</option>';
            
            if (subject) {
                const topics = JAMB_DATA.getTopics(subject);
                topics.forEach(t => {
                    const opt = document.createElement('option');
                    opt.value = t;
                    opt.textContent = t;
                    topicSelect.appendChild(opt);
                });
            }
        });
    },
    
    async updateStats() {
        const user = await db.getUser();
        const exams = await db.getExams();
        
        document.getElementById('totalExams').textContent = user.totalExams || 0;
        document.getElementById('questionsSolved').textContent = user.totalQuestions || 0;
        document.getElementById('studyTime').textContent = (user.studyTime || 0) + 'h';
        document.getElementById('xpBadge').textContent = `⭐ ${user.xp || 0} XP`;
        document.getElementById('streakBadge').textContent = `🔥 ${user.streak || 0}`;
        
        // Average score
        if (exams.length > 0) {
            const avg = exams.reduce((sum, e) => sum + (e.score / e.total * 100), 0) / exams.length;
            document.getElementById('avgScore').textContent = Math.round(avg) + '%';
        }
        
        // Update profile page if visible
        document.getElementById('profileLevel') && (document.getElementById('profileLevel').textContent = 'Level ' + (user.level || 1));
        document.getElementById('profileXP') && (document.getElementById('profileXP').textContent = user.xp || 0);
        document.getElementById('profileStreak') && (document.getElementById('profileStreak').textContent = user.streak || 0);
        
        // Weak areas
        if (user.weakAreas && user.weakAreas.length > 0) {
            const card = document.getElementById('weakAreasCard');
            const list = document.getElementById('weakAreasList');
            if (card && list) {
                card.style.display = 'block';
                list.innerHTML = user.weakAreas.map(w => 
                    `<span class="weak-area-tag">${JAMB_DATA.subjects[w.subject]?.name || w.subject} (${Math.round(w.accuracy * 100)}%)</span>`
                ).join('');
            }
        }
        
        // Recent activity
        const activityList = document.getElementById('recentActivity');
        if (activityList && exams.length > 0) {
            const recent = exams.slice(-5).reverse();
            activityList.innerHTML = recent.map(e => `
                <div class="activity-item">
                    <div>
                        <div style="font-weight: 600;">Mock Exam</div>
                        <div style="font-size: 0.85rem; color: var(--gray);">${new Date(e.date).toLocaleDateString()}</div>
                    </div>
                    <div style="color: var(--gold); font-weight: 700;">${e.score}/${e.total}</div>
                </div>
            `).join('');
        }
    },
    
    async loadProgress() {
        const user = await db.getUser();
        const exams = await db.getExams();
        
        document.getElementById('progressTotalExams').textContent = user.totalExams || 0;
        document.getElementById('progressBestScore').textContent = user.bestScore || 0;
        document.getElementById('progressStreak').textContent = user.streak || 0;
        
        // Subject performance chart (simple bar chart using divs)
        const subjectCanvas = document.getElementById('subjectCanvas');
        if (subjectCanvas && exams.length > 0) {
            const subjectScores = {};
            exams.forEach(e => {
                Object.entries(e.breakdown || {}).forEach(([sub, data]) => {
                    if (!subjectScores[sub]) subjectScores[sub] = [];
                    subjectScores[sub].push(data.correct / data.total);
                });
            });
            
            // Render simple chart
            const ctx = subjectCanvas.getContext('2d');
            subjectCanvas.width = subjectCanvas.offsetWidth;
            subjectCanvas.height = 250;
            
            ctx.clearRect(0, 0, subjectCanvas.width, subjectCanvas.height);
            const subs = Object.keys(subjectScores);
            const barWidth = (subjectCanvas.width - 40) / subs.length - 10;
            
            subs.forEach((sub, i) => {
                const scores = subjectScores[sub];
                const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
                const height = avg * 200;
                const x = 20 + i * (barWidth + 10);
                const y = 230 - height;
                
                ctx.fillStyle = '#ffd700';
                ctx.fillRect(x, y, barWidth, height);
                
                ctx.fillStyle = '#e6f1ff';
                ctx.font = '12px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText((avg * 100).toFixed(0) + '%', x + barWidth/2, y - 5);
                
                ctx.fillStyle = '#8892b0';
                ctx.fillText(JAMB_DATA.subjects[sub]?.name.substring(0, 8) || sub, x + barWidth/2, 245);
            });
        }
        
        // Trend chart
        const trendCanvas = document.getElementById('trendCanvas');
        if (trendCanvas && exams.length > 1) {
            const ctx = trendCanvas.getContext('2d');
            trendCanvas.width = trendCanvas.offsetWidth;
            trendCanvas.height = 250;
            ctx.clearRect(0, 0, trendCanvas.width, trendCanvas.height);
            
            const scores = exams.map(e => (e.score / e.total) * 100);
            const maxScore = Math.max(...scores, 100);
            const stepX = (trendCanvas.width - 40) / (scores.length - 1);
            
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 2;
            ctx.beginPath();
            
            scores.forEach((score, i) => {
                const x = 20 + i * stepX;
                const y = 230 - (score / maxScore) * 200;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            });
            
            ctx.stroke();
            
            // Points
            scores.forEach((score, i) => {
                const x = 20 + i * stepX;
                const y = 230 - (score / maxScore) * 200;
                ctx.fillStyle = '#ffd700';
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, Math.PI * 2);
                ctx.fill();
            });
        }
        
        // Weak areas
        const weakContainer = document.getElementById('progressWeakAreas');
        if (weakContainer && user.weakAreas && user.weakAreas.length > 0) {
            weakContainer.innerHTML = user.weakAreas.map(w => `
                <div style="display: flex; justify-content: space-between; padding: 0.8rem 0; border-bottom: 1px solid var(--navy-lighter);">
                    <span>${JAMB_DATA.subjects[w.subject]?.name || w.subject}</span>
                    <span style="color: var(--red);">${Math.round(w.accuracy * 100)}% accuracy</span>
                </div>
            `).join('');
        } else if (weakContainer) {
            weakContainer.innerHTML = '<p class="empty-state">Keep taking exams to identify weak areas!</p>';
        }
        
        // History table
        const historyBody = document.getElementById('historyBody');
        if (historyBody) {
            historyBody.innerHTML = exams.slice().reverse().map(e => `
                <tr>
                    <td>${new Date(e.date).toLocaleDateString()}</td>
                    <td>${e.subjects?.map(s => JAMB_DATA.subjects[s]?.name.substring(0, 4)).join(', ') || 'N/A'}</td>
                    <td style="color: var(--gold); font-weight: 600;">${e.score}/${e.total}</td>
                    <td>${e.studyTime || 0}m</td>
                    <td><button class="btn btn-outline" style="padding: 0.3rem 0.8rem; font-size: 0.8rem;">Review</button></td>
                </tr>
            `).join('');
        }
    },
    
    async loadProfile() {
        const user = await db.getUser();
        
        document.getElementById('profileLevel').textContent = user.level || 1;
        document.getElementById('profileXP').textContent = user.xp || 0;
        document.getElementById('profileStreak').textContent = user.streak || 0;
        document.getElementById('premiumStatus').textContent = user.premium ? 'Premium' : 'Free Plan';
        document.getElementById('upgradeBtn').style.display = user.premium ? 'none' : 'inline-flex';
        
        // Badges
        const badges = ['🌱 Beginner'];
        if (user.xp >= 500) badges.push('📚 Scholar');
        if (user.xp >= 2000) badges.push('🧠 Expert');
        if (user.streak >= 7) badges.push('🔥 Streak Master');
        if (user.totalExams >= 10) badges.push('📝 Exam Warrior');
        if (user.bestScore >= 300) badges.push('🎯 High Scorer');
        
        document.getElementById('profileBadges').innerHTML = badges.map(b => 
            `<span class="badge">${b}</span>`
        ).join('');
    },
    
    async checkStreak() {
        const user = await db.getUser();
        const lastActive = user.lastActive;
        const today = new Date().toDateString();
        
        if (lastActive) {
            const last = new Date(lastActive);
            const diff = Math.floor((new Date() - last) / (1000 * 60 * 60 * 24));
            
            if (diff === 1) {
                user.streak = (user.streak || 0) + 1;
            } else if (diff > 1) {
                user.streak = 0;
            }
        }
        
        user.lastActive = today;
        await db.saveUser(user);
    },
    
    updateConnectionStatus() {
        const status = document.getElementById('connectionStatus');
        if (navigator.onLine) {
            status.textContent = '● Online';
            status.classList.add('online');
            db.sync();
        } else {
            status.textContent = '● Offline';
            status.classList.remove('online');
        }
    },
    
    upgrade() {
    payment.showPricingModal();
},
    
    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = `toast ${type} show`;
        setTimeout(() => toast.classList.remove('show'), 4000);
    }
};

// Study module
const study = {
    questions: [],
    currentIndex: 0,
    answers: {},
    mode: 'practice',
    
    async startPractice() {
        const subject = document.getElementById('studySubject').value;
        const topic = document.getElementById('studyTopic').value;
        const year = document.getElementById('studyYear').value;
        const count = parseInt(document.getElementById('studyCount').value);
        
        const allQs = await db.getQuestions();
        let filtered = allQs;
        
        if (subject) filtered = filtered.filter(q => q.subject === subject);
        if (topic) filtered = filtered.filter(q => q.topic === topic);
        if (year) filtered = filtered.filter(q => q.year === year);
        
        this.questions = this.shuffle(filtered).slice(0, count);
        this.currentIndex = 0;
        this.answers = {};
        
        if (this.questions.length === 0) {
            app.showToast('No questions found for these filters.', 'error');
            return;
        }
        
        document.getElementById('studyContainer').style.display = 'block';
        document.getElementById('studyResults').style.display = 'none';
        this.renderQuestion();
    },
    
    shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },
    
    renderQuestion() {
        const q = this.questions[this.currentIndex];
        const container = document.getElementById('studyQuestion');
        const progress = ((this.currentIndex + 1) / this.questions.length) * 100;
        
        document.getElementById('studyProgress').style.width = progress + '%';
        
        let html = `
            <div class="question-text">
                <span style="color: var(--gold); font-size: 0.9rem;">${JAMB_DATA.subjects[q.subject]?.name} • ${q.topic} • ${q.year}</span><br><br>
                <strong>Q${this.currentIndex + 1}.</strong> ${q.question}
            </div>
            <div class="options-list">
        `;
        
        ['A', 'B', 'C', 'D'].forEach(opt => {
            let cls = '';
            if (this.answers[q.id]) {
                if (opt === q.answer) cls = 'correct';
                else if (this.answers[q.id] === opt) cls = 'wrong';
            } else if (this.answers[q.id] === opt) {
                cls = 'selected';
            }
            
            html += `
                <div class="option ${cls}" onclick="study.selectOption('${opt}')">
                    <div class="option-label">${opt}</div>
                    <div>${q.options[opt]}</div>
                </div>
            `;
        });
        
        if (this.answers[q.id]) {
            html += `
                <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(100,255,218,0.05); border-radius: 8px; border-left: 3px solid var(--green);">
                    <strong>Explanation:</strong><br>${q.explanation}
                </div>
            `;
        }
        
        html += '</div>';
        container.innerHTML = html;
        
        // Update buttons
        document.getElementById('studyPrev').style.display = this.currentIndex > 0 ? 'inline-flex' : 'none';
        document.getElementById('studyNext').style.display = this.currentIndex < this.questions.length - 1 ? 'inline-flex' : 'none';
        document.getElementById('studySubmit').style.display = this.currentIndex === this.questions.length - 1 ? 'inline-flex' : 'none';
    },
    
    selectOption(opt) {
        const q = this.questions[this.currentIndex];
        if (this.answers[q.id]) return; // Already answered
        
        this.answers[q.id] = opt;
        this.renderQuestion();
        
        // Auto advance after delay if correct
        if (opt === q.answer && this.currentIndex < this.questions.length - 1) {
            setTimeout(() => this.next(), 1500);
        }
    },
    
    next() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.renderQuestion();
        }
    },
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.renderQuestion();
        }
    },
    
    submit() {
        let correct = 0;
        this.questions.forEach(q => {
            if (this.answers[q.id] === q.answer) correct++;
        });
        
        const score = Math.round((correct / this.questions.length) * 100);
        
        document.getElementById('studyContainer').style.display = 'none';
        document.getElementById('studyResults').style.display = 'block';
        document.getElementById('studyScore').textContent = score + '%';
        
        // Breakdown by subject
        const breakdown = {};
        this.questions.forEach(q => {
            if (!breakdown[q.subject]) breakdown[q.subject] = { correct: 0, total: 0 };
            breakdown[q.subject].total++;
            if (this.answers[q.id] === q.answer) breakdown[q.subject].correct++;
        });
        
        let html = '<div class="score-breakdown" style="margin: 2rem 0;">';
        Object.entries(breakdown).forEach(([sub, data]) => {
            html += `
                <div class="breakdown-item">
                    <div class="breakdown-subject">${JAMB_DATA.subjects[sub]?.name}</div>
                    <div class="breakdown-score">${data.correct}/${data.total}</div>
                </div>
            `;
        });
        html += '</div>';
        
        document.getElementById('studyBreakdown').innerHTML = html;
        
        // Save progress
        db.getUser().then(user => {
            user.totalQuestions = (user.totalQuestions || 0) + this.questions.length;
            const xpGain = Math.round(score / 10);
            user.xp = (user.xp || 0) + xpGain;
            user.level = Math.floor(user.xp / 500) + 1;
            db.saveUser(user);
            app.updateStats();
        });
    },
    
    restart() {
        document.getElementById('studyResults').style.display = 'none';
        this.startPractice();
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => app.init());
