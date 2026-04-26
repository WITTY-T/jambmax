/**
 * JAMB MAX - Past Questions Controller
 * Powered by ALOC API (questions.aloc.com.ng/api/v2)
 * Requires Bearer Token authentication
 * With offline caching via IndexedDB
 */

const pastQuestions = {
    // ALOC API Configuration
    API_BASE: 'https://questions.aloc.com.ng/api/v2',
    
    // 🔑 ALOC API Access Token — REQUIRED
    // Get yours free at: https://questions.aloc.com.ng
    // 7,000 free API calls on the free plan
    ACCESS_TOKEN: localStorage.getItem('aloc_api_token') || '',
    
    // IndexedDB for offline caching
    DB_NAME: 'JAMBMAX_PastQuestions',
    DB_VERSION: 1,
    STORE_NAME: 'cached_questions',
    db: null,

    // Session state
    questions: [],
    currentIndex: 0,
    answers: {},
    submitted: false,
    sessionMeta: {},

    // Subject mapping (ALOC API expects these exact keys)
    SUBJECTS: {
        english: 'English Language',
        mathematics: 'Mathematics',
        commerce: 'Commerce',
        accounting: 'Accounting',
        biology: 'Biology',
        physics: 'Physics',
        chemistry: 'Chemistry',
        englishlit: 'English Literature',
        government: 'Government',
        crk: 'Christian Religious Knowledge',
        geography: 'Geography',
        economics: 'Economics',
        irk: 'Islamic Religious Knowledge',
        civiledu: 'Civic Education',
        insurance: 'Insurance',
        currentaffairs: 'Current Affairs',
        history: 'History'
    },

    // DOM element getters
    get $subject() { return document.getElementById('pastqSubject'); },
    get $year() { return document.getElementById('pastqYear'); },
    get $count() { return document.getElementById('pastqCount'); },
    get $loadBtn() { return document.getElementById('pastqLoadBtn'); },
    get $empty() { return document.getElementById('pastqEmpty'); },
    get $loading() { return document.getElementById('pastqLoading'); },
    get $list() { return document.getElementById('pastqList'); },
    get $questions() { return document.getElementById('pastqQuestions'); },
    get $progress() { return document.getElementById('pastqProgress'); },
    get $counter() { return document.getElementById('pastqCounter'); },
    get $prev() { return document.getElementById('pastqPrev'); },
    get $next() { return document.getElementById('pastqNext'); },
    get $submit() { return document.getElementById('pastqSubmit'); },
    get $results() { return document.getElementById('pastqResults'); },
    get $apiStatus() { return document.getElementById('apiStatus'); },
    get $review() { return document.getElementById('pastqReview'); },

    /**
     * Initialize the controller
     */
    async init() {
        await this.initDB();
        this.checkToken();
        this.bindEvents();
        this.loadCachedCount();
    },

    /**
     * Check if API token is configured
     */
    checkToken() {
        this.ACCESS_TOKEN = localStorage.getItem('aloc_api_token') || '';
        
        if (!this.ACCESS_TOKEN) {
            this.renderTokenPrompt();
            this.setApiStatus(false, '● No API Token');
        } else {
            this.checkApiStatus();
        }
    },

    /**
     * Render token input prompt if no token is set
     */
    renderTokenPrompt() {
        if (!this.$empty) return;
        
        // Check if prompt already exists
        if (document.getElementById('tokenPrompt')) return;

        const promptHtml = `
            <div id="tokenPrompt" style="background: #112240; border: 1px solid #233554; border-radius: 12px; padding: 1.5rem; margin-top: 1.5rem; max-width: 500px; margin-left: auto; margin-right: auto;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔑</div>
                <h4 style="color: #64ffda; margin-bottom: 0.5rem;">ALOC API Token Required</h4>
                <p style="color: #8892b0; font-size: 0.9rem; margin-bottom: 1rem;">
                    The ALOC API now requires an access token. Get yours free at 
                    <a href="https://questions.aloc.com.ng" target="_blank" style="color: #64ffda;">questions.aloc.com.ng</a>
                    (7,000 free calls).
                </p>
                <input type="text" id="alocTokenInput" placeholder="Paste your ALOC access token here..." 
                    style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid #233554; background: #0a192f; color: #ccd6f6; margin-bottom: 0.75rem; font-size: 0.85rem;">
                <button class="btn btn-primary" onclick="pastQuestions.saveToken()" style="width: 100%;">
                    Save Token & Continue
                </button>
                <p style="color: #64748b; font-size: 0.75rem; margin-top: 0.75rem;">
                    Your token is stored locally in your browser. Never share it.
                </p>
            </div>
        `;
        
        this.$empty.insertAdjacentHTML('beforeend', promptHtml);
    },

    /**
     * Save token from input
     */
    saveToken() {
        const input = document.getElementById('alocTokenInput');
        const token = input.value.trim();
        
        if (!token) {
            app.showToast('Please enter a valid token');
            return;
        }
        
        this.ACCESS_TOKEN = token;
        localStorage.setItem('aloc_api_token', token);
        
        // Remove prompt
        const prompt = document.getElementById('tokenPrompt');
        if (prompt) prompt.remove();
        
        app.showToast('Token saved! Testing connection...');
        this.checkApiStatus();
    },

    /**
     * Clear saved token (for logout/reset)
     */
    clearToken() {
        localStorage.removeItem('aloc_api_token');
        this.ACCESS_TOKEN = '';
        app.showToast('Token cleared');
        location.reload();
    },

    /**
     * Initialize IndexedDB for offline caching
     */
    initDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);
            
            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                resolve();
            };
            
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(this.STORE_NAME)) {
                    const store = db.createObjectStore(this.STORE_NAME, { keyPath: 'cacheKey' });
                    store.createIndex('subject', 'subject', { unique: false });
                    store.createIndex('year', 'year', { unique: false });
                    store.createIndex('timestamp', 'timestamp', { unique: false });
                }
            };
        });
    },

    /**
     * Bind UI events
     */
    bindEvents() {
        this.$subject.addEventListener('change', () => {
            const hasSubject = !!this.$subject.value;
            this.$loadBtn.disabled = !hasSubject || !this.ACCESS_TOKEN;
            this.$year.disabled = !hasSubject;
        });
    },

    /**
     * Check if ALOC API is reachable with current token
     */
    async checkApiStatus() {
        if (!this.ACCESS_TOKEN) {
            this.setApiStatus(false, '● No Token');
            return;
        }

        try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 8000);
            
            const testUrl = `${this.API_BASE}/q/1?subject=english`;
            console.log('[PastQuestions] Testing API URL:', testUrl);
            console.log('[PastQuestions] Token:', this.ACCESS_TOKEN.substring(0, 10) + '...');
            
            const response = await fetch(testUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.ACCESS_TOKEN}`
                },
                signal: controller.signal
            });
            
            clearTimeout(timeout);
            
            console.log('[PastQuestions] API Response Status:', response.status);
            
            if (response.ok) {
                this.setApiStatus(true, '● ALOC API Online');
            } else if (response.status === 401) {
                this.setApiStatus(false, '● Invalid Token');
                app.showToast('Invalid API token. Please check your token.');
            } else if (response.status === 406) {
                // Try without any Accept header
                console.warn('[PastQuestions] 406 Error - trying with no Accept header');
                this.setApiStatus(false, '● API Error 406');
            } else {
                this.setApiStatus(false, `● API Error ${response.status}`);
            }
        } catch (e) {
            console.error('[PastQuestions] API check error:', e);
            this.setApiStatus(false, '● Offline Mode');
        }
    },

    setApiStatus(online, text) {
        if (!this.$apiStatus) return;
        this.$apiStatus.className = online ? 'api-status online' : 'api-status offline';
        this.$apiStatus.textContent = text || (online ? '● ALOC API Online' : '● Offline Mode');
    },

    /**
     * Get cache key for a subject/year combination
     */
    getCacheKey(subject, year, count) {
        return `${subject}_${year || 'all'}_${count}`;
    },

    /**
     * Save questions to IndexedDB cache
     */
    async saveToCache(subject, year, count, questions) {
        if (!this.db) return;
        
        const transaction = this.db.transaction([this.STORE_NAME], 'readwrite');
        const store = transaction.objectStore(this.STORE_NAME);
        
        const cacheKey = this.getCacheKey(subject, year, count);
        const data = {
            cacheKey,
            subject,
            year: year || 'all',
            count: parseInt(count),
            questions,
            timestamp: Date.now()
        };
        
        return new Promise((resolve, reject) => {
            const request = store.put(data);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    },

    /**
     * Load questions from IndexedDB cache
     */
    async loadFromCache(subject, year, count) {
        if (!this.db) return null;
        
        const transaction = this.db.transaction([this.STORE_NAME], 'readonly');
        const store = transaction.objectStore(this.STORE_NAME);
        
        const cacheKey = this.getCacheKey(subject, year, count);
        
        return new Promise((resolve, reject) => {
            const request = store.get(cacheKey);
            request.onsuccess = () => {
                const result = request.result;
                // Cache expires after 30 days
                if (result && (Date.now() - result.timestamp) < 30 * 24 * 60 * 60 * 1000) {
                    resolve(result.questions);
                } else {
                    resolve(null);
                }
            };
            request.onerror = () => reject(request.error);
        });
    },

    /**
     * Show how many questions are cached offline
     */
    async loadCachedCount() {
        if (!this.db) return;
        
        const transaction = this.db.transaction([this.STORE_NAME], 'readonly');
        const store = transaction.objectStore(this.STORE_NAME);
        
        const count = await new Promise((resolve) => {
            const request = store.count();
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => resolve(0);
        });
        
        if (count > 0 && this.$empty) {
            const existing = this.$empty.querySelector('.cached-info');
            if (!existing) {
                const info = document.createElement('p');
                info.className = 'cached-info';
                info.style.cssText = 'color: #64ffda; font-size: 0.85rem; margin-top: 1rem;';
                info.innerHTML = `📦 <strong>${count}</strong> question set(s) cached for offline use`;
                this.$empty.appendChild(info);
            }
        }
    },

    /**
     * Main load function - tries API first, falls back to cache
     */
    async load() {
        const subject = this.$subject.value;
        const year = this.$year.value;
        const count = parseInt(this.$count.value);

        if (!subject) {
            app.showToast('Please select a subject');
            return;
        }

        if (!this.ACCESS_TOKEN) {
            app.showToast('Please add your ALOC API token first');
            this.renderTokenPrompt();
            return;
        }

        this.sessionMeta = { subject, year, count, subjectName: this.SUBJECTS[subject] };

        // Show loading state
        this.$empty.style.display = 'none';
        this.$loading.style.display = 'block';
        this.$list.style.display = 'none';
        this.$results.style.display = 'none';

        try {
            // Try API first
            let questions = await this.fetchFromAPI(subject, year, count);
            let fromCache = false;
            
            // Fallback to cache if API fails
            if (!questions) {
                questions = await this.loadFromCache(subject, year, count);
                fromCache = !!questions;
            }
            
            // If still nothing, try cache with different year/count combos
            if (!questions) {
                questions = await this.loadFromCache(subject, '', count) || 
                           await this.loadFromCache(subject, year, 10) ||
                           await this.loadFromCache(subject, '', 10);
                fromCache = !!questions;
            }

            if (!questions || questions.length === 0) {
                throw new Error('No questions available. Check your token or try again later.');
            }

            this.questions = questions;
            this.currentIndex = 0;
            this.answers = {};
            this.submitted = false;

            if (fromCache) {
                app.showToast('Loaded from offline cache');
                this.setApiStatus(false, '● Offline Mode');
            }

            this.render();
            this.$loading.style.display = 'none';
            this.$list.style.display = 'block';
            this.updateProgress();

        } catch (err) {
            console.error('Past Questions Error:', err);
            this.$loading.style.display = 'none';
            this.$empty.style.display = 'block';
            app.showToast(err.message || 'Failed to load questions');
        }
    },

    /**
     * Fetch questions from ALOC API with Bearer token
     */
    async fetchFromAPI(subject, year, count) {
        if (!this.ACCESS_TOKEN) return null;

        try {
            let url = `${this.API_BASE}/q/${count}?subject=${subject}&type=utme`;
            if (year) url += `&year=${year}`;

            console.log('[PastQuestions] Fetching from API:', url);

            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 15000);

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.ACCESS_TOKEN}`
                },
                signal: controller.signal
            });

            clearTimeout(timeout);

            console.log('[PastQuestions] Fetch status:', response.status);

            if (response.status === 401) {
                app.showToast('Invalid or expired API token');
                this.setApiStatus(false, '● Invalid Token');
                return null;
            }

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const data = await response.json();

            if (!data.success || !data.data) {
                throw new Error(data.message || 'Invalid API response');
            }

            // Parse questions - ALOC returns stringified JSON in data.data.questions
            let rawQuestions = data.data.questions || data.data;
            if (typeof rawQuestions === 'string') {
                try {
                    rawQuestions = JSON.parse(rawQuestions);
                } catch (e) {
                    console.warn('Failed to parse questions JSON:', e);
                }
            }

            const questions = Array.isArray(rawQuestions) ? rawQuestions : [rawQuestions];
            
            // Normalize question format
            const normalized = questions.map(q => this.normalizeQuestion(q)).filter(Boolean);
            
            // Cache for offline use
            await this.saveToCache(subject, year, count, normalized);
            
            return normalized;

        } catch (err) {
            console.warn('API fetch failed:', err);
            return null;
        }
    },

    /**
     * Normalize ALOC question format to consistent structure
     */
    normalizeQuestion(q) {
        if (!q) return null;
        
        const questionText = q.question || q.question_text || q.text || '';
        let options = q.option || q.options || {};
        
        if (typeof options === 'string') {
            try {
                options = JSON.parse(options);
            } catch (e) {
                options = {};
            }
        }
        
        const normalizedOptions = {};
        ['a', 'b', 'c', 'd', 'e'].forEach(key => {
            if (options[key]) normalizedOptions[key] = options[key];
        });
        
        if (Object.keys(normalizedOptions).length === 0) {
            ['1', '2', '3', '4', '5'].forEach((key, idx) => {
                const letters = ['a', 'b', 'c', 'd', 'e'];
                if (options[key]) normalizedOptions[letters[idx]] = options[key];
            });
        }

        return {
            id: q.id || q.question_id || Math.random().toString(36).substr(2, 9),
            question: questionText,
            options: normalizedOptions,
            answer: (q.answer || q.correct_answer || '').toString().trim().toLowerCase(),
            explanation: q.explanation || q.solution || q.answer_detail || '',
            year: q.year || q.examyear || '',
            examtype: q.examtype || q.type || 'utme',
            subject: q.subject || ''
        };
    },

    /**
     * Render current question
     */
    render() {
        const q = this.questions[this.currentIndex];
        if (!q) return;

        const optionLabels = { a: 'A', b: 'B', c: 'C', d: 'D', e: 'E' };
        const optionKeys = Object.keys(q.options).filter(k => q.options[k]);
        const userAnswer = this.answers[this.currentIndex];

        let html = `
            <div class="question-card" data-index="${this.currentIndex}">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
                    <span class="question-number">Question ${this.currentIndex + 1} of ${this.questions.length}</span>
                    ${q.year ? `<span class="subject-badge">${q.year}</span>` : ''}
                    ${q.examtype ? `<span class="subject-badge">${q.examtype.toUpperCase()}</span>` : ''}
                </div>
                <div class="question-text">${this.escapeHtml(q.question)}</div>
                <div class="options-list">
        `;

        optionKeys.forEach(key => {
            const label = optionLabels[key] || key.toUpperCase();
            let extraClass = '';
            
            if (this.submitted) {
                if (key === q.answer) {
                    extraClass = 'correct';
                } else if (key === userAnswer && key !== q.answer) {
                    extraClass = 'wrong';
                }
            } else if (key === userAnswer) {
                extraClass = 'selected';
            }

            html += `
                <label class="option-label ${extraClass}" 
                       onclick="${this.submitted ? '' : `pastQuestions.select('${key}')`}"
                       style="${this.submitted ? 'cursor: default;' : ''}">
                    <input type="radio" name="q${this.currentIndex}" value="${key}" 
                        ${key === userAnswer ? 'checked' : ''} 
                        ${this.submitted ? 'disabled' : ''}>
                    <span><strong>${label}.</strong> ${this.escapeHtml(q.options[key])}</span>
                </label>
            `;
        });

        html += `</div>`;

        if (this.submitted) {
            const isCorrect = userAnswer === q.answer;
            html += `
                <div class="explanation-box show">
                    <h4>${isCorrect ? '✅ Correct!' : userAnswer ? '❌ Incorrect' : '⏭️ Skipped'}</h4>
                    <p><strong>Correct Answer:</strong> ${optionLabels[q.answer] || q.answer}</p>
                    ${q.explanation ? `<p><strong>Explanation:</strong> ${this.escapeHtml(q.explanation)}</p>` : ''}
                </div>
            `;
        }

        html += `</div>`;
        this.$questions.innerHTML = html;
        this.updateNav();
    },

    /**
     * Select an answer option
     */
    select(key) {
        if (this.submitted) return;
        this.answers[this.currentIndex] = key;
        
        document.querySelectorAll('.option-label').forEach(el => el.classList.remove('selected'));
        const clicked = event.currentTarget;
        if (clicked) clicked.classList.add('selected');
    },

    /**
     * Navigation
     */
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.render();
            this.updateProgress();
        }
    },

    next() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.render();
            this.updateProgress();
        }
    },

    updateNav() {
        this.$prev.disabled = this.currentIndex === 0;
        this.$next.style.display = this.currentIndex === this.questions.length - 1 ? 'none' : 'inline-block';
        this.$submit.style.display = this.currentIndex === this.questions.length - 1 ? 'inline-block' : 'none';
        this.$counter.textContent = `${this.currentIndex + 1} / ${this.questions.length}`;
    },

    updateProgress() {
        const pct = ((this.currentIndex + 1) / this.questions.length) * 100;
        this.$progress.style.width = pct + '%';
    },

    /**
     * Submit answers and show results
     */
    submit() {
        this.submitted = true;
        
        let correct = 0;
        let answered = 0;
        
        this.questions.forEach((q, i) => {
            if (this.answers[i]) answered++;
            if (this.answers[i] === q.answer) correct++;
        });

        const total = this.questions.length;
        const percent = Math.round((correct / total) * 100);
        const skipped = total - answered;

        this.$list.style.display = 'none';
        this.$results.style.display = 'block';
        
        document.getElementById('pastqScorePercent').textContent = percent + '%';
        document.getElementById('pastqScoreDetail').textContent = 
            `${correct} / ${total} correct • ${skipped} skipped`;

        document.getElementById('pastqBreakdown').innerHTML = `
            <p style="color: #8892b0;">
                <strong style="color: #ccd6f6;">${this.sessionMeta.subjectName}</strong> 
                ${this.sessionMeta.year ? `• ${this.sessionMeta.year}` : ''} 
                • ${total} questions
            </p>
        `;

        this.renderReview();
        this.saveToHistory({ correct, total, percent, skipped, answered });
        this.updateUserStats(correct, total);
    },

    /**
     * Render full review of all questions
     */
    renderReview() {
        const optionLabels = { a: 'A', b: 'B', c: 'C', d: 'D', e: 'E' };
        let html = '<h3 style="margin-bottom: 1rem; color: #ccd6f6;">Review All Questions</h3>';

        this.questions.forEach((q, i) => {
            const userAns = this.answers[i];
            const correctAns = q.answer;
            const isCorrect = userAns === correctAns;
            const isSkipped = !userAns;

            html += `
                <div class="question-card" style="opacity: ${isCorrect ? '0.7' : '1'};">
                    <span class="question-number">
                        ${isCorrect ? '✅' : isSkipped ? '⏭️' : '❌'} Q${i + 1}
                    </span>
                    <div class="question-text" style="font-size: 0.95rem;">${this.escapeHtml(q.question)}</div>
                    <p style="color: #8892b0; font-size: 0.85rem; margin-top: 0.5rem;">
                        Your answer: <strong style="color: ${isCorrect ? '#22c55e' : isSkipped ? '#8892b0' : '#ef4444'};">
                            ${userAns ? (optionLabels[userAns] || userAns) : 'Skipped'}
                        </strong> | 
                        Correct: <strong style="color: #22c55e;">
                            ${optionLabels[correctAns] || correctAns}
                        </strong>
                    </p>
                    ${q.explanation ? `<p style="color: #64ffda; font-size: 0.8rem; margin-top: 0.5rem;">💡 ${this.escapeHtml(q.explanation.substring(0, 150))}${q.explanation.length > 150 ? '...' : ''}</p>` : ''}
                </div>
            `;
        });
        
        this.$review.innerHTML = html;
    },

    /**
     * Save session to local history
     */
    saveToHistory(data) {
        const history = JSON.parse(localStorage.getItem('jambmax_pastq_history') || '[]');
        history.unshift({
            ...data,
            subject: this.sessionMeta.subjectName,
            year: this.sessionMeta.year || 'All Years',
            date: new Date().toISOString(),
            type: 'past-questions'
        });
        localStorage.setItem('jambmax_pastq_history', JSON.stringify(history.slice(0, 100)));
    },

    /**
     * Update user XP and stats
     */
    updateUserStats(correct, total) {
        const xpEarned = Math.round((correct / total) * 50);
        const currentXP = parseInt(localStorage.getItem('jambmax_xp') || '0');
        localStorage.setItem('jambmax_xp', currentXP + xpEarned);
        
        const solved = parseInt(localStorage.getItem('jambmax_questions_solved') || '0');
        localStorage.setItem('jambmax_questions_solved', solved + total);
        
        this.updateStreak();
        
        if (typeof app !== 'undefined' && app.updateStats) {
            app.updateStats();
        }
        
        app.showToast(`+${xpEarned} XP earned!`);
    },

    /**
     * Update study streak
     */
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

    /**
     * Restart same session
     */
    restart() {
        this.answers = {};
        this.submitted = false;
        this.currentIndex = 0;
        this.$results.style.display = 'none';
        this.$list.style.display = 'block';
        this.render();
        this.updateProgress();
    },

    /**
     * Start a completely new session
     */
    newSession() {
        this.questions = [];
        this.answers = {};
        this.submitted = false;
        this.currentIndex = 0;
        this.sessionMeta = {};
        
        this.$results.style.display = 'none';
        this.$list.style.display = 'none';
        this.$empty.style.display = 'block';
        
        this.$subject.value = '';
        this.$year.value = '';
        this.$loadBtn.disabled = true;
        this.$year.disabled = true;
    },

    /**
     * Pre-download questions for offline use
     */
    async downloadForOffline(subject, year, count) {
        if (!this.ACCESS_TOKEN) {
            app.showToast('Please add your API token first');
            return;
        }
        app.showToast(`Downloading ${this.SUBJECTS[subject]} questions...`);
        const questions = await this.fetchFromAPI(subject, year, count);
        if (questions) {
            app.showToast(`${this.SUBJECTS[subject]} cached for offline!`);
        }
        return questions;
    },

    /**
     * Bulk download popular subjects
     */
    async downloadAllOffline() {
        if (!this.ACCESS_TOKEN) {
            app.showToast('Please add your API token first');
            this.renderTokenPrompt();
            return;
        }

        const popularSubjects = ['english', 'mathematics', 'physics', 'chemistry', 'biology'];
        const years = ['2010', '2011', '2012', '2013'];
        
        app.showToast('Starting offline download... This may take a moment.');
        
        for (const subject of popularSubjects) {
            for (const year of years) {
                try {
                    await this.downloadForOffline(subject, year, 20);
                    await new Promise(r => setTimeout(r, 1500)); // Rate limit
                } catch (e) {
                    console.warn(`Failed to cache ${subject} ${year}:`, e);
                }
            }
        }
        
        app.showToast('Offline download complete!');
        this.loadCachedCount();
    },

    /**
     * Utility: Escape HTML to prevent XSS
     */
    escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => pastQuestions.init());
} else {
    pastQuestions.init();
}
