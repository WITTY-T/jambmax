const ai = {
    messages: [],
    
    get apiKey() { return window.OPENAI_API_KEY || ''; },
    
    init() {
        this.updateStatus();
        window.addEventListener('online', () => this.updateStatus());
        window.addEventListener('offline', () => this.updateStatus());
        
        const history = localStorage.getItem('ai_chat_history');
        if (history) {
            this.messages = JSON.parse(history);
            this.renderHistory();
        } else {
            this.newChat();
        }
    },
    
    updateStatus() {
        const status = document.getElementById('aiStatus');
        if (!status) return;
        const dot = status.querySelector('.status-dot');
        
        if (navigator.onLine && this.apiKey) {
            status.innerHTML = '<span class="status-dot online"></span> Online (GPT-4)';
        } else if (navigator.onLine) {
            status.innerHTML = '<span class="status-dot online"></span> Online (Rule-Based)';
        } else {
            status.innerHTML = '<span class="status-dot offline"></span> Offline Mode';
        }
    },
    
    newChat() {
        this.messages = [{
            role: 'system',
            content: this.getContext()
        }];
        const container = document.getElementById('chatMessages');
        if (!container) return;
        container.innerHTML = `
            <div class="message ai-message">
                <div class="message-avatar">🤖</div>
                <div class="message-content">
                    Hello! I'm your JAMB AI Tutor. I can explain concepts, solve problems, generate quizzes, and answer your questions. What would you like to learn today?
                </div>
            </div>
        `;
        this.saveHistory();
    },
    
    getContext() {
        let context = 'You are a JAMB tutor for Nigerian secondary school students. Be concise, encouraging, and explain concepts clearly. Use examples where helpful. Use markdown for formatting, and wrap mathematical equations in $ for inline and $$ for block equations.';
        
        try {
            const user = JSON.parse(localStorage.getItem('jambmax_user') || '{}');
            if (user.name) context += `\nThe student's name is ${user.name}. Address them by name occasionally.`;
            
            const stats = JSON.parse(localStorage.getItem('jambmax_stats') || '{}');
            if (stats.weakSubjects && stats.weakSubjects.length > 0) {
                context += `\nThe student is currently weak in: ${stats.weakSubjects.join(', ')}. Provide extra encouragement and simple examples when discussing these subjects.`;
            }
        } catch(e) {}
        
        return context;
    },
    
    saveHistory() {
        localStorage.setItem('ai_chat_history', JSON.stringify(this.messages));
    },
    
    renderHistory() {
        const container = document.getElementById('chatMessages');
        if (!container) return;
        
        let html = `
            <div class="message ai-message">
                <div class="message-avatar">🤖</div>
                <div class="message-content">
                    Welcome back! We can continue our previous conversation.
                </div>
            </div>
        `;
        container.innerHTML = html;
        
        this.messages.forEach(msg => {
            if(msg.role !== 'system') {
                this.addMessageDOM(msg.content, msg.role === 'user' ? 'user' : 'ai');
            }
        });
    },
    
    async send() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        if (!message) return;
        
        // Premium Check: Limit free users to 5 messages/day
        const today = new Date().toDateString();
        const usageKey = 'jambmax_ai_usage_' + today;
        let usage = parseInt(localStorage.getItem(usageKey) || '0');
        
        if (typeof payment !== 'undefined') {
            const isPremium = await payment.checkPremiumStatus();
            if (!isPremium && usage >= 5) {
                if (typeof app !== 'undefined') {
                    app.showToast('🔒 You have reached your 5 free AI messages for today. Upgrade to Premium for unlimited access!');
                    app.upgrade();
                }
                return;
            }
        }
        
        // Increment usage
        localStorage.setItem(usageKey, (usage + 1).toString());
        
        input.value = '';
        this.addMessageDOM(message, 'user');
        
        this.messages.push({ role: 'user', content: message });
        this.saveHistory();
        
        const typingId = this.addTyping();
        let response;
        
        if (navigator.onLine && this.apiKey) {
            try {
                response = await this.callGPT(message);
            } catch (err) {
                console.error(err);
                response = this.getRuleBasedResponse(message);
            }
        } else {
            await new Promise(r => setTimeout(r, 800));
            response = this.getRuleBasedResponse(message);
        }
        
        this.removeTyping(typingId);
        this.addMessageDOM(response, 'ai');
        
        this.messages.push({ role: 'assistant', content: response });
        this.saveHistory();
    },
    
    ask(text) {
        const input = document.getElementById('chatInput');
        if(input) {
            input.value = text;
            this.send();
        }
    },
    
    addMessageDOM(text, sender) {
        const container = document.getElementById('chatMessages');
        if (!container) return;
        
        const div = document.createElement('div');
        div.className = `message ${sender}-message`;
        div.innerHTML = `
            <div class="message-avatar">${sender === 'user' ? '👤' : '🤖'}</div>
            <div class="message-content">${this.formatText(text)}</div>
        `;
        container.appendChild(div);
        
        if (window.MathJax) {
            MathJax.typesetPromise([div]).catch((err) => console.log('MathJax error: ', err.message));
        }
        
        container.scrollTop = container.scrollHeight;
    },
    
    addTyping() {
        const container = document.getElementById('chatMessages');
        if (!container) return null;
        
        const id = 'typing-' + Date.now();
        const div = document.createElement('div');
        div.id = id;
        div.className = 'message ai-message';
        div.innerHTML = `
            <div class="message-avatar">🤖</div>
            <div class="message-content" style="opacity: 0.7;">Typing...</div>
        `;
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
        return id;
    },
    
    removeTyping(id) {
        if (!id) return;
        const el = document.getElementById(id);
        if (el) el.remove();
    },
    
    formatText(text) {
        if (window.marked) {
            return marked.parse(text);
        }
        return text
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/`(.*?)`/g, '<code style="background: rgba(255,215,0,0.1); padding: 2px 6px; border-radius: 4px;">$1</code>');
    },
    
    async callGPT(message) {
        if (this.messages.length === 0 || this.messages[0].role !== 'system') {
            this.messages.unshift({ role: 'system', content: this.getContext() });
        }
        
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4',
                messages: this.messages,
                max_tokens: 800,
                temperature: 0.7
            })
        });
        
        if (!response.ok) {
            throw new Error(`OpenAI API Error: ${response.statusText}`);
        }
        
        const data = await response.json();
        return data.choices[0].message.content;
    },
    
    getRuleBasedResponse(message) {
        const lower = message.toLowerCase();
        
        if (lower.includes('solve') || lower.includes('calculate') || lower.includes('find')) {
            return "I'd be happy to help with that math problem! Since I'm in offline mode, here's a general approach:\n\n1. Identify the type of problem\n2. Recall the relevant formula or rule\n3. Substitute the given values\n4. Solve step by step\n\nPlease connect to the internet for a detailed solution.";
        }
        
        if (lower.includes('photosynthesis')) {
            return "**Photosynthesis** is the process by which green plants use sunlight, water, and carbon dioxide to create oxygen and energy in the form of sugar.\n\n**Equation:**\n$$6CO_2 + 6H_2O + light \\rightarrow C_6H_{12}O_6 + 6O_2$$";
        }
        
        if (lower.includes('quiz') || lower.includes('questions')) {
            if (window.JAMB_DATA && typeof JAMB_DATA.getQuestions === 'function') {
                const subjects = ['english', 'mathematics', 'physics', 'chemistry', 'biology', 'government', 'economics'];
                const subject = subjects.find(s => lower.includes(s)) || 'english';
                const qs = JAMB_DATA.getQuestions({ subject, count: 5 });
                
                if (qs && qs.length > 0) {
                    let response = `Here's a quick **${subject.toUpperCase()}** quiz for you:\n\n`;
                    qs.forEach((q, i) => {
                        response += `**${i + 1}. ${q.question}**\n`;
                        response += `- A. ${q.options.A}\n- B. ${q.options.B}\n- C. ${q.options.C}\n- D. ${q.options.D}\n\n`;
                    });
                    response += "The correct answers are: " + qs.map(q => q.answer).join(', ');
                    return response;
                }
            }
            return "I can generate quizzes for you! But I need to load the question bank first. Try again when fully loaded.";
        }
        
        return "That's a great question! I'm currently in offline mode with preloaded JAMB content. Connect to the internet for full AI tutoring capabilities!";
    }
};

window.ai = ai;

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('ai-page')) {
        ai.init();
    }
});