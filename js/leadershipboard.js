const leaderboard = {
    async load() {
        if (!navigator.onLine || !auth.currentUser) {
            this.renderOffline();
            return;
        }
        
        try {
            const snapshot = await firebase.firestore()
                .collection('users')
                .orderBy('xp', 'desc')
                .limit(50)
                .get();
            
            const users = [];
            snapshot.forEach(doc => {
                users.push({ id: doc.id, ...doc.data() });
            });
            
            this.render(users);
        } catch (err) {
            console.error('Failed to load leaderboard:', err);
            this.renderOffline();
        }
    },
    
    render(users) {
        const container = document.getElementById('leaderboardContainer');
        if (!container) return;
        
        if (!users || users.length === 0) {
            container.innerHTML = '<p class="empty-state">No data available.</p>';
            return;
        }
        
        const currentUserId = auth.currentUser?.uid;
        
        let html = `
            <div class="leaderboard-table" style="width: 100%;">
                <div style="display: grid; grid-template-columns: 60px 1fr 100px 100px; gap: 1rem; padding: 1rem; color: var(--gray); font-size: 0.85rem; border-bottom: 1px solid var(--navy-lighter);">
                    <div>Rank</div>
                    <div>Student</div>
                    <div>Level</div>
                    <div style="text-align: right;">XP</div>
                </div>
        `;
        
        users.forEach((user, index) => {
            const isMe = user.id === currentUserId;
            const rank = index + 1;
            let rankEmoji = '';
            if (rank === 1) rankEmoji = '🥇';
            else if (rank === 2) rankEmoji = '🥈';
            else if (rank === 3) rankEmoji = '🥉';
            
            html += `
                <div style="
                    display: grid; 
                    grid-template-columns: 60px 1fr 100px 100px; 
                    gap: 1rem; 
                    padding: 1rem; 
                    border-bottom: 1px solid var(--navy-lighter);
                    ${isMe ? 'background: rgba(255, 215, 0, 0.05);' : ''}
                    border-radius: 8px;
                ">
                    <div style="font-weight: 800; color: var(--gold);">${rankEmoji || rank}</div>
                    <div style="display: flex; align-items: center; gap: 0.8rem;">
                        <div style="
                            width: 32px; 
                            height: 32px; 
                            border-radius: 50%; 
                            background: var(--navy-lighter);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-weight: 700;
                            font-size: 0.85rem;
                        ">${(user.name || 'A').charAt(0).toUpperCase()}</div>
                        <div>
                            <div style="font-weight: 600;">${user.name || 'Anonymous'}</div>
                            ${isMe ? '<div style="font-size: 0.75rem; color: var(--gold);">You</div>' : ''}
                        </div>
                    </div>
                    <div style="display: flex; align-items: center;">${user.level || 1}</div>
                    <div style="text-align: right; color: var(--gold); font-weight: 700;">${user.xp || 0}</div>
                </div>
            `;
        });
        
        html += '</div>';
        container.innerHTML = html;
    },
    
    renderOffline() {
        const container = document.getElementById('leaderboardContainer');
        if (container) {
            container.innerHTML = `
                <div class="empty-state" style="padding: 3rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📡</div>
                    <h3>Leaderboard Offline</h3>
                    <p>Connect to the internet to see global rankings.</p>
                </div>
            `;
        }
    }
};