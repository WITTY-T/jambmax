const notifications = {
    async requestPermission() {
        if (!('Notification' in window)) {
            app.showToast('This browser does not support notifications', 'error');
            return false;
        }
        
        const permission = await Notification.requestPermission();
        return permission === 'granted';
    },
    
    async scheduleDailyReminder() {
        const hasPermission = await this.requestPermission();
        if (!hasPermission) return;
        
        // Schedule daily at 8 PM
        const now = new Date();
        const scheduled = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 0, 0);
        
        if (scheduled < now) {
            scheduled.setDate(scheduled.getDate() + 1);
        }
        
        const delay = scheduled - now;
        
        setTimeout(() => {
            this.send('Study Reminder', 'Time for your daily JAMB practice! Keep the streak alive 🔥');
            this.scheduleDailyReminder(); // Reschedule for next day
        }, delay);
        
        // Also schedule morning reminder at 7 AM
        const morning = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 7, 0, 0);
        if (morning < now) morning.setDate(morning.getDate() + 1);
        
        setTimeout(() => {
            this.send('Good Morning!', 'Start your day with JAMB MAX. Even 15 minutes helps! 📚');
        }, morning - now);
    },
    
    send(title, body) {
        if (Notification.permission === 'granted') {
            new Notification(title, {
                body,
                icon: '/icons/icon-192x192.png',
                badge: '/icons/icon-72x72.png',
                tag: 'jamb-max-reminder',
                requireInteraction: false
            });
        }
    },
    
    async checkStreakReminder() {
        const user = await db.getUser();
        const lastActive = user.lastActive;
        const today = new Date().toDateString();
        
        if (lastActive !== today && new Date().getHours() >= 18) {
            this.send('Streak Alert!', `Your ${user.streak || 0}-day streak is at risk! Study now to keep it alive.`);
        }
    }
};