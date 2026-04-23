const ai = {
    messages: [],
    apiKey: "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", // Set your OpenAI API key here or in settings
    
    init() {
        this.updateStatus();
        window.addEventListener('online', () => this.updateStatus());
        window.addEventListener('offline', () => this.updateStatus());
    },
    
    updateStatus() {
        const status = document.getElementById('aiStatus');
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
        this.messages = [];
        const container = document.getElementById('chatMessages');
        container.innerHTML = `
            <div class="message ai-message">
                <div class="message-avatar">🤖</div>
                <div class="message-content">
                    Hello! I'm your JAMB AI Tutor. I can explain concepts, solve problems, generate quizzes, and answer your questions. What would you like to learn today?
                </div>
            </div>
        `;
    },
    
    async send() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        if (!message) return;
        
        input.value = '';
        this.addMessage(message, 'user');
        
        // Show typing indicator
        const typingId = this.addTyping();
        
        let response;
        
        if (navigator.onLine && this.apiKey) {
            try {
                response = await this.callGPT(message);
            } catch (err) {
                response = this.getRuleBasedResponse(message);
            }
        } else {
            // Simulate delay for realism
            await new Promise(r => setTimeout(r, 800));
            response = this.getRuleBasedResponse(message);
        }
        
        this.removeTyping(typingId);
        this.addMessage(response, 'ai');
        
        // Save to history
        this.messages.push({ role: 'user', content: message });
        this.messages.push({ role: 'assistant', content: response });
    },
    
    ask(text) {
        document.getElementById('chatInput').value = text;
        this.send();
    },
    
    addMessage(text, sender) {
        const container = document.getElementById('chatMessages');
        const div = document.createElement('div');
        div.className = `message ${sender}-message`;
        div.innerHTML = `
            <div class="message-avatar">${sender === 'user' ? '👤' : '🤖'}</div>
            <div class="message-content">${this.formatText(text)}</div>
        `;
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    },
    
    addTyping() {
        const container = document.getElementById('chatMessages');
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
        const el = document.getElementById(id);
        if (el) el.remove();
    },
    
    formatText(text) {
        return text
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/`(.*?)`/g, '<code style="background: rgba(255,215,0,0.1); padding: 2px 6px; border-radius: 4px;">$1</code>');
    },
    
    async callGPT(message) {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a JAMB tutor for Nigerian secondary school students. Be concise, encouraging, and explain concepts clearly. Use examples where helpful.'
                    },
                    ...this.messages.slice(-6),
                    { role: 'user', content: message }
                ],
                max_tokens: 500,
                temperature: 0.7
            })
        });
        
        const data = await response.json();
        return data.choices[0].message.content;
    },
    
    getRuleBasedResponse(message) {
        const lower = message.toLowerCase();
        
        // Math patterns
        if (lower.includes('solve') || lower.includes('calculate') || lower.includes('find')) {
            if (lower.includes('log') || lower.includes('derivative') || lower.includes('integral')) {
                return "I'd be happy to help with that math problem! Since I'm in offline mode, here's a general approach:<br><br>1. Identify the type of problem<br>2. Recall the relevant formula or rule<br>3. Substitute the given values<br>4. Solve step by step<br><br>For this specific problem, please connect to the internet for a detailed solution, or check your textbook for similar examples.";
            }
            if (lower.includes('equation') || lower.includes('x') || lower.includes('y')) {
                return "For solving equations:<br><br>1. Simplify both sides<br>2. Collect like terms<br>3. Isolate the variable<br>4. Check your answer by substitution<br><br>Would you like me to explain a specific type of equation?";
            }
        }
        
        // Science patterns
        if (lower.includes('photosynthesis')) {
            return "**Photosynthesis** is the process by which green plants use sunlight, water, and carbon dioxide to create oxygen and energy in the form of sugar.<br><br>**Equation:**<br>6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂<br><br>**Key points for JAMB:**<br>• Occurs in the chloroplasts<br>• Light reaction and dark reaction (Calvin cycle)<br>• Chlorophyll absorbs light energy<br>• Products: glucose and oxygen";
        }
        
        if (lower.includes('cell')) {
            return "The **cell** is the basic unit of life. Key structures to remember for JAMB:<br><br>• **Nucleus** - controls cell activities<br>• **Mitochondria** - power house, produces ATP<br>• **Ribosomes** - protein synthesis<br>• **Golgi body** - packaging and distribution<br>• **Cell membrane** - selective permeability<br><br>Plant cells also have cell walls and chloroplasts!";
        }
        
        // Literature
        if (lower.includes('things fall apart') || lower.includes('achebe')) {
            return "**Things Fall Apart** by Chinua Achebe (1958):<br><br>**Key Themes:**<br>• Clash of cultures (Igbo vs. Colonial)<br>• Tradition vs. Change<br>• Fate and Free will<br>• Masculinity and Pride<br><br>**Okonkwo** - Tragic hero, fears weakness, driven by pride<br>**Nwoye** - Converts to Christianity, represents change<br><br>This is Africa's most widely read novel and a JAMB favorite!";
        }
        
        // Government
        if (lower.includes('government') || lower.includes('constitution') || lower.includes('federalism')) {
            return "For JAMB Government, remember:<br><br>• **Federalism** - Division of powers between central and state governments<br>• **1999 Constitution** - Presidential system, 36 states + FCT<br>• **Separation of Powers** - Executive, Legislative, Judicial<br>• **Citizenship** - By birth, registration, or naturalization<br><br>Would you like me to explain any specific topic in detail?";
        }
        
        // Quiz generation
        if (lower.includes('quiz') || lower.includes('questions') || lower.includes('test me')) {
            const subjects = ['english', 'mathematics', 'physics', 'chemistry', 'biology', 'government', 'economics'];
            const subject = subjects.find(s => lower.includes(s)) || 'general';
            const qs = JAMB_DATA.getQuestions({ subject, count: 5 });
            
            let response = `Here's a quick **${subject.toUpperCase()}** quiz for you:<br><br>`;
            qs.forEach((q, i) => {
                response += `${i + 1}. ${q.question}<br>`;
                response += `A. ${q.options.A} B. ${q.options.B} C. ${q.options.C} D. ${q.options.D}<br><br>`;
            });
            response += "Take your time and check your answers! The correct answers are: " + qs.map(q => q.answer).join(', ');
            return response;
        }
        
        // Default
        return "That's a great question! I'm currently in offline mode with preloaded JAMB content. I can help you with:<br><br>• Past question explanations<br>• Concept summaries (Photosynthesis, Cell Biology, etc.)<br>• Literature analysis (Things Fall Apart, etc.)<br>• Government topics<br>• Quick quizzes<br><br>Connect to the internet and add your OpenAI API key for full AI tutoring capabilities!";
    }
};