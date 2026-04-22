const exam = {
    questions: [],
    currentIndex: 0,
    answers: {},
    flagged: new Set(),
    timer: null,
    timeRemaining: 7200, // 2 hours in seconds
    subjects: [],
    
    async start() {
        const sub2 = document.getElementById('examSub2').value;
        const sub3 = document.getElementById('examSub3').value;
        const sub4 = document.getElementById('examSub4').value;
        
        this.subjects = ['english', sub2, sub3, sub4];
        
        // Load questions
        const allQs = await db.getQuestions();
        this.questions = [];
        
        // Get 60 questions: 15 per subject (English) + 15 each for others
        // For demo, we'll distribute available questions
        for (const sub of this.subjects) {
            const subQs = allQs.filter(q => q.subject === sub);
            const selected = subQs.slice(0, Math.min(15, subQs.length));
            this.questions.push(...selected);
        }
        
        // Shuffle
        this.questions = this.shuffle(this.questions);
        
        this.currentIndex = 0;
        this.answers = {};
        this.flagged = new Set();
        this.timeRemaining = 7200;
        
        document.getElementById('examSetup').style.display = 'none';
        document.getElementById('examInterface').style.display = 'block';
        document.getElementById('examResults').style.display = 'none';
        
        this.renderQuestion();
        this.renderNavGrid();
        this.startTimer();
        
        // Track study time
        this.studyStart = Date.now();
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
        const box = document.getElementById('examQuestionBox');
        
        document.getElementById('examSubjectLabel').textContent = 
            JAMB_DATA.subjects[q.subject]?.name || q.subject;
        document.getElementById('examProgress').textContent = 
            `${this.currentIndex + 1} / ${this.questions.length}`;
        
        let html = `
            <div class="question-text">
                <strong>Q${this.currentIndex + 1}.</strong> ${q.question}
            </div>
            <div class="options-list">
        `;
        
        ['A', 'B', 'C', 'D'].forEach(opt => {
            const selected = this.answers[q.id] === opt ? 'selected' : '';
            html += `
                <div class="option ${selected}" onclick="exam.selectOption('${opt}')">
                    <div class="option-label">${opt}</div>
                    <div>${q.options[opt]}</div>
                </div>
            `;
        });
        
        html += '</div>';
        box.innerHTML = html;
        
        this.updateNavGrid();
    },
    
    selectOption(opt) {
        const q = this.questions[this.currentIndex];
        this.answers[q.id] = opt;
        this.renderQuestion();
        this.updateNavGrid();
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
    
    flag() {
        const q = this.questions[this.currentIndex];
        if (this.flagged.has(q.id)) {
            this.flagged.delete(q.id);
        } else {
            this.flagged.add(q.id);
        }
        this.updateNavGrid();
        app.showToast(this.flagged.has(q.id) ? 'Question flagged' : 'Flag removed');
    },
    
    jumpTo(index) {
        this.currentIndex = index;
        this.renderQuestion();
    },
    
    renderNavGrid() {
        const grid = document.getElementById('examNavGrid');
        grid.innerHTML = '';
        
        this.questions.forEach((q, i) => {
            const btn = document.createElement('button');
            btn.className = 'nav-item-btn';
            btn.textContent = i + 1;
            btn.onclick = () => this.jumpTo(i);
            grid.appendChild(btn);
        });
        
        this.updateNavGrid();
    },
    
    updateNavGrid() {
        const buttons = document.querySelectorAll('.nav-item-btn');
        buttons.forEach((btn, i) => {
            const q = this.questions[i];
            btn.className = 'nav-item-btn';
            if (i === this.currentIndex) btn.classList.add('current');
            if (this.answers[q.id]) btn.classList.add('answered');
            if (this.flagged.has(q.id)) btn.classList.add('flagged');
        });
    },
    
    startTimer() {
        this.updateTimerDisplay();
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.submit();
            }
        }, 1000);
    },
    
    updateTimerDisplay() {
        const hours = Math.floor(this.timeRemaining / 3600);
        const mins = Math.floor((this.timeRemaining % 3600) / 60);
        const secs = this.timeRemaining % 60;
        
        const display = `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        const timer = document.getElementById('examTimer');
        timer.textContent = display;
        
        timer.className = 'timer';
        if (this.timeRemaining < 300) timer.classList.add('danger');
        else if (this.timeRemaining < 900) timer.classList.add('warning');
    },
    
    submit() {
        clearInterval(this.timer);
        
        let correct = 0;
        const breakdown = {};
        
        this.questions.forEach(q => {
            const sub = q.subject;
            if (!breakdown[sub]) breakdown[sub] = { correct: 0, total: 0 };
            breakdown[sub].total++;
            
            if (this.answers[q.id] === q.answer) {
                correct++;
                breakdown[sub].correct++;
            }
        });
        
        const total = this.questions.length;
        const score = Math.round((correct / total) * 400); // JAMB scores out of 400
        
        // Save exam
        const studyTime = Math.round((Date.now() - this.studyStart) / 60000);
        db.saveExam({
            score,
            total: 400,
            correct,
            wrong: total - correct,
            subjects: this.subjects,
            answers: this.answers,
            breakdown,
            studyTime
        });
        
        // Show results
        document.getElementById('examInterface').style.display = 'none';
        document.getElementById('examResults').style.display = 'block';
        document.getElementById('examScore').textContent = score;
        
        const breakdownHtml = Object.entries(breakdown).map(([sub, data]) => `
            <div class="breakdown-item">
                <div class="breakdown-subject">${JAMB_DATA.subjects[sub]?.name || sub}</div>
                <div class="breakdown-score">${data.correct}/${data.total}</div>
            </div>
        `).join('');
        
        document.getElementById('examBreakdown').innerHTML = breakdownHtml;
        
        // Update weak areas
        this.updateWeakAreas(breakdown);
        
        // Update stats
        app.updateStats();
    },
    
    updateWeakAreas(breakdown) {
        const weakAreas = [];
        Object.entries(breakdown).forEach(([sub, data]) => {
            const pct = data.correct / data.total;
            if (pct < 0.6) {
                weakAreas.push({
                    subject: sub,
                    accuracy: pct,
                    topics: [] // Would track by topic in full implementation
                });
            }
        });
        
        // Save to user
        db.getUser().then(user => {
            user.weakAreas = weakAreas;
            db.saveUser(user);
        });
    },
    
    restart() {
        document.getElementById('examResults').style.display = 'none';
        document.getElementById('examSetup').style.display = 'block';
    },
    
    review() {
        // Implementation for review mode
        app.showToast('Review mode coming soon!');
    }
};