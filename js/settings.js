const settings = {
    defaults: {
        theme: 'dark',
        fontSize: 'medium',
        soundEffects: true,
        autoSubmit: true,
        timerWarning: 300, // 5 minutes
        dailyGoal: 20,
        language: 'en'
    },
    
    async load() {
        const stored = await db.get('user', 'settings');
        return { ...this.defaults, ...stored };
    },
    
    async save(key, value) {
        const current = await this.load();
        current[key] = value;
        await db.put('user', { key: 'settings', ...current });
        this.apply(key, value);
    },
    
    apply(key, value) {
        switch(key) {
            case 'fontSize':
                document.documentElement.style.fontSize = 
                    value === 'small' ? '14px' : 
                    value === 'large' ? '18px' : '16px';
                break;
            case 'theme':
                // Theme switching logic
                break;
            case 'soundEffects':
                // Sound toggle
                break;
        }
    },
    
    async initUI() {
        const s = await this.load();
        
        // Populate settings form if exists
        const form = document.getElementById('settingsForm');
        if (form) {
            form.querySelectorAll('[data-setting]').forEach(input => {
                const key = input.dataset.setting;
                if (s[key] !== undefined) {
                    if (input.type === 'checkbox') input.checked = s[key];
                    else input.value = s[key];
                }
            });
        }
    },
    
    async exportData() {
        const data = {
            user: await db.getUser(),
            exams: await db.getExams(),
            questions: await db.getQuestions(),
            flashcards: await db.get('flashcards', 'deck'),
            exportedAt: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `jamb-max-backup-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
        
        app.showToast('Data exported successfully!', 'success');
    },
    
    async importData(file) {
        try {
            const text = await file.text();
            const data = JSON.parse(text);
            
            if (confirm('This will overwrite your current data. Continue?')) {
                if (data.user) await db.saveUser(data.user);
                if (data.questions) await db.saveQuestions(data.questions);
                if (data.exams) {
                    for (const exam of data.exams) {
                        await db.put('exams', exam);
                    }
                }
                if (data.flashcards) await db.put('flashcards', data.flashcards);
                
                app.showToast('Data imported successfully!', 'success');
                setTimeout(() => location.reload(), 1000);
            }
        } catch (err) {
            app.showToast('Failed to import data. Invalid file.', 'error');
        }
    },
    
    printResults(examId) {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
            <head>
                <title>JAMB MAX - Exam Results</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 2rem; max-width: 800px; margin: 0 auto; }
                    .header { text-align: center; border-bottom: 3px solid #0a192f; padding-bottom: 1rem; margin-bottom: 2rem; }
                    .score { font-size: 3rem; color: #ffd700; text-align: center; margin: 2rem 0; }
                    .detail { display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid #eee; }
                    .footer { margin-top: 3rem; text-align: center; color: #666; font-size: 0.9rem; }
                    @media print { .no-print { display: none; } }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>JAMB MAX</h1>
                    <p>Official CBT Practice Result</p>
                </div>
                <div class="score">Score: Loading...</div>
                <div id="details"></div>
                <div class="footer">
                    <p>Generated on ${new Date().toLocaleString()}</p>
                    <p>jambmax.com</p>
                </div>
                <button class="no-print" onclick="window.print()" style="position: fixed; bottom: 2rem; right: 2rem; padding: 1rem 2rem; background: #0a192f; color: #ffd700; border: none; border-radius: 8px; cursor: pointer;">Print</button>
            </body>
            </html>
        `);
        printWindow.document.close();
    }
};