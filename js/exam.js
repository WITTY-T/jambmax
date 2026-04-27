/**
 * JAMB MAX - Mock Exam Controller
 * Handles full CBT exam simulation with timer, subject navigation, and scoring
 */

const exam = {
    // Exam state
    active: false,
    subjects: [],
    currentSubjectIndex: 0,
    currentQuestionIndex: 0,
    answers: {},        // { questionId: selectedOption }
    flagged: new Set(), // { questionId }
    timeRemaining: 7200, // 2 hours in seconds
    timerInterval: null,
    startTime: null,

    // DOM refs
    get $setup() { return document.getElementById('examSetup'); },
    get $interface() { return document.getElementById('examInterface'); },
    get $results() { return document.getElementById('examResults'); },
    get $timer() { return document.getElementById('examTimer'); },
    get $questionBox() { return document.getElementById('examQuestionBox'); },
    get $navGrid() { return document.getElementById('examNavGrid'); },
    get $subjectLabel() { return document.getElementById('examSubjectLabel'); },
    get $progress() { return document.getElementById('examProgress'); },
    get $score() { return document.getElementById('examScore'); },
    get $breakdown() { return document.getElementById('examBreakdown'); },

    // Subject config
    SUBJECT_CONFIG: {
        english: { name: 'Use of English', questions: 60, time: 3600 },
        mathematics: { name: 'Mathematics', questions: 40, time: 3600 },
        physics: { name: 'Physics', questions: 40, time: 3600 },
        chemistry: { name: 'Chemistry', questions: 40, time: 3600 },
        biology: { name: 'Biology', questions: 40, time: 3600 },
        government: { name: 'Government', questions: 40, time: 3600 },
        economics: { name: 'Economics', questions: 40, time: 3600 },
        literature: { name: 'Literature', questions: 40, time: 3600 },
        crs: { name: 'CRS', questions: 40, time: 3600 }
    },

    // Start exam
    start() {
        const sub2 = document.getElementById('examSub2').value;
        const sub3 = document.getElementById('examSub3').value;
        const sub4 = document.getElementById('examSub4').value;

        if (sub2 === sub3 || sub2 === sub4 || sub3 === sub4) {
            this.showToast('Please select 3 different subjects');
            return;
        }

        this.subjects = [
            { id: 'english', ...this.SUBJECT_CONFIG.english },
            { id: sub2, ...this.SUBJECT_CONFIG[sub2] },
            { id: sub3, ...this.SUBJECT_CONFIG[sub3] },
            { id: sub4, ...this.SUBJECT_CONFIG[sub4] }
        ];

        // Load questions for each subject
        this.subjects.forEach(sub => {
            const allQs = JAMB_DATA.getQuestions({ subject: sub.id });
            sub.questionsList = this.shuffleArray(allQs).slice(0, sub.questions);
            sub.questionsList.forEach((q, idx) => {
                q.examIndex = idx;
                q.globalId = `${sub.id}_${idx}`;
            });
        });

        this.active = true;
        this.currentSubjectIndex = 0;
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.flagged.clear();
        this.timeRemaining = 7200; // 2 hours total
        this.startTime = Date.now();

        this.$setup.style.display = 'none';
        this.$interface.style.display = 'block';
        this.$results.style.display = 'none';

        this.startTimer();
        this.render();
        this.renderNavGrid();
    },

    // Timer
    startTimer() {
        this.updateTimerDisplay();
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            if (this.timeRemaining <= 300) { // 5 min warning
                this.$timer.style.color = '#ef4444';
                if (this.timeRemaining % 60 === 0) {
                    this.showToast(`${Math.floor(this.timeRemaining/60)} minutes remaining!`);
                }
            }

            if (this.timeRemaining <= 0) {
                this.submit(true); // auto-submit
            }
        }, 1000);
    },

    updateTimerDisplay() {
        const hrs = Math.floor(this.timeRemaining / 3600);
        const mins = Math.floor((this.timeRemaining % 3600) / 60);
        const secs = this.timeRemaining % 60;
        this.$timer.textContent = 
            `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    },

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    },

    // Navigation between subjects
    getCurrentSubject() {
        return this.subjects[this.currentSubjectIndex];
    },

    getCurrentQuestion() {
        const sub = this.getCurrentSubject();
        return sub.questionsList[this.currentQuestionIndex];
    },

    // Render current question
    render() {
        const sub = this.getCurrentSubject();
        const q = this.getCurrentQuestion();
        const globalId = q.globalId;
        const userAnswer = this.answers[globalId];
        const isFlagged = this.flagged.has(globalId);

        // Update header
        this.$subjectLabel.textContent = sub.name;
        this.$progress.textContent = `Q${this.currentQuestionIndex + 1} / ${sub.questions}`;

        // Build question HTML
        const optionLabels = ['A', 'B', 'C', 'D'];
        const options = q.options || {};
        const optionKeys = Object.keys(options);

        let optionsHtml = '';
        optionKeys.forEach((key, idx) => {
            const label = optionLabels[idx] || key;
            const isSelected = userAnswer === key;
            optionsHtml += `
                <label class="exam-option ${isSelected ? 'selected' : ''}" 
                       onclick="exam.selectAnswer('${key}')">
                    <input type="radio" name="examq" value="${key}" ${isSelected ? 'checked' : ''}>
                    <span class="option-label">${label}</span>
                    <span class="option-text">${this.escapeHtml(options[key])}</span>
                </label>
            `;
        });

        this.$questionBox.innerHTML = `
            <div class="exam-question-header">
                <span class="subject-tag">${sub.name}</span>
                <span class="question-counter">Question ${this.currentQuestionIndex + 1} of ${sub.questions}</span>
            </div>
            <div class="exam-question-text">${this.escapeHtml(q.question)}</div>
            <div class="exam-options">${optionsHtml}</div>
        `;

        // Update flag button
        const flagBtn = document.querySelector('.btn-warning');
        if (flagBtn) {
            flagBtn.textContent = isFlagged ? '🚩 Flagged' : '🚩 Flag';
            flagBtn.style.background = isFlagged ? '#f59e0b' : '';
        }

        // Update nav grid highlight
        this.updateNavHighlight();
    },

    selectAnswer(key) {
        const q = this.getCurrentQuestion();
        this.answers[q.globalId] = key;
        this.render();
        this.updateNavGrid();
    },

    // Navigation
    next() {
        const sub = this.getCurrentSubject();
        if (this.currentQuestionIndex < sub.questions - 1) {
            this.currentQuestionIndex++;
            this.render();
        } else if (this.currentSubjectIndex < this.subjects.length - 1) {
            // Move to next subject
            this.currentSubjectIndex++;
            this.currentQuestionIndex = 0;
            this.render();
            this.showToast(`Starting ${this.getCurrentSubject().name}`);
        } else {
            this.showToast('Last question. Click Submit to finish.');
        }
    },

    prev() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.render();
        } else if (this.currentSubjectIndex > 0) {
            // Move to previous subject (last question)
            this.currentSubjectIndex--;
            this.currentQuestionIndex = this.getCurrentSubject().questions - 1;
            this.render();
            this.showToast(`Back to ${this.getCurrentSubject().name}`);
        }
    },

    // Jump to specific question
    jumpTo(subjectIndex, questionIndex) {
        this.currentSubjectIndex = subjectIndex;
        this.currentQuestionIndex = questionIndex;
        this.render();
    },

    // Flagging
    flag() {
        const q = this.getCurrentQuestion();
        if (this.flagged.has(q.globalId)) {
            this.flagged.delete(q.globalId);
            this.showToast('Question unflagged');
        } else {
            this.flagged.add(q.globalId);
            this.showToast('Question flagged for review');
        }
        this.render();
        this.updateNavGrid();
    },

    // Navigator grid
    renderNavGrid() {
        let html = '';
        this.subjects.forEach((sub, subIdx) => {
            html += `<div class="nav-subject-group">`;
            html += `<div class="nav-subject-title">${sub.name}</div>`;
            html += `<div class="nav-subject-grid">`;
            sub.questionsList.forEach((q, qIdx) => {
                const globalId = q.globalId;
                const isAnswered = !!this.answers[globalId];
                const isFlagged = this.flagged.has(globalId);
                const isCurrent = subIdx === this.currentSubjectIndex && qIdx === this.currentQuestionIndex;

                let classes = 'nav-btn';
                if (isCurrent) classes += ' current';
                if (isAnswered) classes += ' answered';
                if (isFlagged) classes += ' flagged';

                html += `<button class="${classes}" onclick="exam.jumpTo(${subIdx}, ${qIdx})" title="${sub.name} Q${qIdx+1}">${qIdx + 1}</button>`;
            });
            html += `</div></div>`;
        });
        this.$navGrid.innerHTML = html;
    },

    updateNavGrid() {
        this.renderNavGrid();
    },

    updateNavHighlight() {
        // Re-render grid to update current highlight
        this.renderNavGrid();
    },

    // Submit exam
    submit(auto = false) {
        if (!auto && !confirm('Are you sure you want to submit? You cannot undo this.')) {
            return;
        }

        this.stopTimer();
        this.active = false;

        // Calculate scores per subject
        let totalScore = 0;
        let totalAnswered = 0;
        let totalCorrect = 0;
        const breakdown = [];

        this.subjects.forEach(sub => {
            let subCorrect = 0;
            let subAnswered = 0;

            sub.questionsList.forEach(q => {
                const ans = this.answers[q.globalId];
                if (ans) {
                    subAnswered++;
                    totalAnswered++;
                    if (ans === q.answer) {
                        subCorrect++;
                        totalCorrect++;
                    }
                }
            });

            const subScore = Math.round((subCorrect / sub.questions) * 100);
            totalScore += subScore;

            breakdown.push({
                name: sub.name,
                correct: subCorrect,
                total: sub.questions,
                answered: subAnswered,
                score: subScore
            });
        });

        const finalScore = Math.round(totalScore / 4); // Average across 4 subjects
        const timeUsed = Math.floor((Date.now() - this.startTime) / 1000);
        const totalQuestions = this.subjects.reduce((sum, s) => sum + s.questions, 0);

        // Save to history
        this.saveResult({
            score: finalScore,
            breakdown,
            totalCorrect,
            totalAnswered,
            totalQuestions,
            timeUsed,
            date: new Date().toISOString()
        });

        // Show results
        this.$interface.style.display = 'none';
        this.$results.style.display = 'block';
        this.$score.textContent = finalScore;

        // Build breakdown HTML
        let breakdownHtml = '';
        breakdown.forEach(b => {
            const pct = Math.round((b.correct / b.total) * 100);
            breakdownHtml += `
                <div class="breakdown-item">
                    <div class="breakdown-info">
                        <span class="breakdown-name">${b.name}</span>
                        <span class="breakdown-count">${b.correct}/${b.total} correct</span>
                    </div>
                    <div class="breakdown-bar">
                        <div class="breakdown-fill" style="width: ${pct}%;"></div>
                    </div>
                    <span class="breakdown-pct">${pct}%</span>
                </div>
            `;
        });

        const mins = Math.floor(timeUsed / 60);
        const secs = timeUsed % 60;

        this.$breakdown.innerHTML = `
            ${breakdownHtml}
            <div class="breakdown-summary">
                <p>⏱️ Time used: ${mins}m ${secs}s</p>
                <p>✅ ${totalCorrect} correct out of ${totalQuestions}</p>
                <p>📝 ${totalAnswered} answered, ${totalQuestions - totalAnswered} skipped</p>
            </div>
        `;

        // Update XP
        const xpEarned = Math.round((totalCorrect / totalQuestions) * 100);
        const currentXP = parseInt(localStorage.getItem('jambmax_xp') || '0');
        localStorage.setItem('jambmax_xp', currentXP + xpEarned);

        // Update streak
        this.updateStreak();

        // Refresh app stats
        if (typeof jmApp !== 'undefined' && jmApp.updateStats) {
            jmApp.updateStats();
        }

        this.showToast(`Exam complete! +${xpEarned} XP`);
    },

    saveResult(result) {
        const history = JSON.parse(localStorage.getItem('jambmax_exam_history') || '[]');
        history.unshift(result);
        localStorage.setItem('jambmax_exam_history', JSON.stringify(history.slice(0, 50)));
    },

    updateStreak() {
        const today = new Date().toDateString();
        const lastStudy = localStorage.getItem('jambmax_last_study');
        let streak = parseInt(localStorage.getItem('jambmax_streak') || '0');

        if (lastStudy !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (lastStudy === yesterday.toDateString()) {
                streak++;
            } else {
                streak = 1;
            }
            localStorage.setItem('jambmax_streak', streak);
            localStorage.setItem('jambmax_last_study', today);
        }
    },

    // Review mode
    review() {
        this.currentSubjectIndex = 0;
        this.currentQuestionIndex = 0;
        this.$results.style.display = 'none';
        this.$interface.style.display = 'block';
        this.renderReview();
    },

    renderReview() {
        const sub = this.getCurrentSubject();
        const q = this.getCurrentQuestion();
        const globalId = q.globalId;
        const userAnswer = this.answers[globalId];
        const isCorrect = userAnswer === q.answer;

        const optionLabels = ['A', 'B', 'C', 'D'];
        const options = q.options || {};
        const optionKeys = Object.keys(options);

        let optionsHtml = '';
        optionKeys.forEach((key, idx) => {
            const label = optionLabels[idx] || key;
            let classes = 'exam-option';
            if (key === q.answer) classes += ' correct';
            else if (key === userAnswer && !isCorrect) classes += ' wrong';

            optionsHtml += `
                <div class="${classes}">
                    <span class="option-label">${label}</span>
                    <span class="option-text">${this.escapeHtml(options[key])}</span>
                    ${key === q.answer ? '<span class="correct-mark">✓</span>' : ''}
                    ${key === userAnswer && !isCorrect ? '<span class="wrong-mark">✗</span>' : ''}
                </div>
            `;
        });

        this.$questionBox.innerHTML = `
            <div class="exam-question-header">
                <span class="subject-tag">${sub.name}</span>
                <span class="review-badge ${isCorrect ? 'correct' : 'wrong'}">
                    ${isCorrect ? '✅ Correct' : userAnswer ? '❌ Incorrect' : '⏭️ Skipped'}
                </span>
            </div>
            <div class="exam-question-text">${this.escapeHtml(q.question)}</div>
            <div class="exam-options">${optionsHtml}</div>
            ${q.explanation ? `<div class="explanation-box"><strong>Explanation:</strong> ${this.escapeHtml(q.explanation)}</div>` : ''}
        `;

        // Hide flag button in review, show nav
        const flagBtn = document.querySelector('.btn-warning');
        if (flagBtn) flagBtn.style.display = 'none';

        this.$subjectLabel.textContent = sub.name + ' (Review)';
        this.$progress.textContent = `Q${this.currentQuestionIndex + 1} / ${sub.questions}`;
    },

    nextReview() {
        const sub = this.getCurrentSubject();
        if (this.currentQuestionIndex < sub.questions - 1) {
            this.currentQuestionIndex++;
        } else if (this.currentSubjectIndex < this.subjects.length - 1) {
            this.currentSubjectIndex++;
            this.currentQuestionIndex = 0;
        } else {
            this.showToast('End of review');
            return;
        }
        this.renderReview();
    },

    prevReview() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
        } else if (this.currentSubjectIndex > 0) {
            this.currentSubjectIndex--;
            this.currentQuestionIndex = this.getCurrentSubject().questions - 1;
        } else {
            this.showToast('Start of review');
            return;
        }
        this.renderReview();
    },

    // Restart
    restart() {
        this.stopTimer();
        this.active = false;
        this.subjects = [];
        this.answers = {};
        this.flagged.clear();
        this.timeRemaining = 7200;

        this.$results.style.display = 'none';
        this.$interface.style.display = 'none';
        this.$setup.style.display = 'block';
        this.$timer.style.color = '';

        // Reset nav buttons
        const flagBtn = document.querySelector('.btn-warning');
        if (flagBtn) {
            flagBtn.style.display = '';
            flagBtn.textContent = '🚩 Flag';
        }
    },

    // Utilities
    shuffleArray(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    },

    escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    showToast(msg) {
        if (typeof jmApp !== 'undefined' && jmApp.showToast) {
            jmApp.showToast(msg);
        } else {
            console.log('[Exam]', msg);
        }
    }
};

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (!exam.active) return;

    switch(e.key) {
        case 'ArrowRight':
        case 'n':
            e.preventDefault();
            exam.next();
            break;
        case 'ArrowLeft':
        case 'p':
            e.preventDefault();
            exam.prev();
            break;
        case 'f':
            e.preventDefault();
            exam.flag();
            break;
        case '1': case '2': case '3': case '4':
            const opts = ['A', 'B', 'C', 'D'];
            const idx = parseInt(e.key) - 1;
            if (opts[idx]) {
                const q = exam.getCurrentQuestion();
                const keys = Object.keys(q.options || {});
                if (keys[idx]) exam.selectAnswer(keys[idx]);
            }
            break;
    }
});