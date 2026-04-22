const flashcards = {
    cards: [],
    currentIndex: 0,
    showingAnswer: false,
    
    async init() {
        // Load or generate flashcards from missed questions
        const stored = await db.get('flashcards', 'deck');
        if (stored && stored.cards) {
            this.cards = stored.cards;
        }
    },
    
    async generateFromWeakAreas() {
        const user = await db.getUser();
        const allQs = await db.getQuestions();
        
        // Get questions from weak subjects/topics
        const weakSubjects = user.weakAreas?.map(w => w.subject) || [];
        const weakQs = allQs.filter(q => weakSubjects.includes(q.subject));
        
        this.cards = weakQs.map(q => ({
            id: q.id,
            front: q.question,
            back: `Correct Answer: ${q.answer}<br><br>${q.explanation}`,
            subject: q.subject,
            topic: q.topic,
            interval: 1,
            repetitions: 0,
            easeFactor: 2.5,
            nextReview: Date.now(),
            lastReview: null
        }));
        
        await this.save();
        app.showToast(`Generated ${this.cards.length} flashcards from weak areas!`);
    },
    
    async save() {
        await db.put('flashcards', { id: 'deck', cards: this.cards });
    },
    
    render() {
        const container = document.getElementById('flashcardContainer');
        if (!container) return;
        
        if (this.cards.length === 0) {
            container.innerHTML = `
                <div class="empty-state" style="padding: 3rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📝</div>
                    <h3>No Flashcards Yet</h3>
                    <p>Generate flashcards from your weak areas or missed questions.</p>
                    <button class="btn btn-primary" onclick="flashcards.generateFromWeakAreas()" style="margin-top: 1rem;">
                        Generate from Weak Areas
                    </button>
                </div>
            `;
            return;
        }
        
        // Get due cards
        const dueCards = this.cards.filter(c => c.nextReview <= Date.now());
        if (dueCards.length === 0) {
            container.innerHTML = `
                <div class="empty-state" style="padding: 3rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
                    <h3>All Caught Up!</h3>
                    <p>No cards due for review. Great job!</p>
                    <button class="btn btn-outline" onclick="flashcards.generateFromWeakAreas()" style="margin-top: 1rem;">
                        Add More Cards
                    </button>
                </div>
            `;
            return;
        }
        
        this.currentIndex = this.cards.indexOf(dueCards[0]);
        const card = dueCards[0];
        
        container.innerHTML = `
            <div class="flashcard-wrapper" style="perspective: 1000px;">
                <div class="flashcard" id="flashcard" onclick="flashcards.flip()" style="
                    background: var(--navy-light);
                    border: 1px solid var(--navy-lighter);
                    border-radius: 16px;
                    padding: 3rem;
                    min-height: 300px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    cursor: pointer;
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                ">
                    <div style="color: var(--gold); font-size: 0.85rem; margin-bottom: 1rem;">
                        ${JAMB_DATA.subjects[card.subject]?.name} • ${card.topic}
                    </div>
                    <div id="cardContent" style="font-size: 1.2rem; line-height: 1.7;">
                        ${card.front}
                    </div>
                    <div style="margin-top: 2rem; color: var(--gray); font-size: 0.85rem;">
                        Click to flip
                    </div>
                </div>
            </div>
            
            <div class="flashcard-controls" style="
                display: flex;
                gap: 1rem;
                justify-content: center;
                margin-top: 2rem;
                opacity: 0;
                transition: opacity 0.3s;
            " id="cardControls">
                <button class="btn btn-danger" onclick="flashcards.rate(0)">Again 😫</button>
                <button class="btn btn-warning" onclick="flashcards.rate(3)">Hard 😐</button>
                <button class="btn btn-primary" onclick="flashcards.rate(4)">Good 🙂</button>
                <button class="btn btn-success" onclick="flashcards.rate(5)">Easy 😎</button>
            </div>
        `;
        
        this.showingAnswer = false;
    },
    
    flip() {
        const content = document.getElementById('cardContent');
        const controls = document.getElementById('cardControls');
        const card = this.cards[this.currentIndex];
        
        if (!this.showingAnswer) {
            content.innerHTML = card.back;
            controls.style.opacity = '1';
            this.showingAnswer = true;
        }
    },
    
    async rate(quality) {
        const card = this.cards[this.currentIndex];
        
        // SM-2 Algorithm simplified
        if (quality < 3) {
            card.repetitions = 0;
            card.interval = 1;
        } else {
            if (card.repetitions === 0) card.interval = 1;
            else if (card.repetitions === 1) card.interval = 6;
            else card.interval = Math.round(card.interval * card.easeFactor);
            
            card.repetitions++;
        }
        
        card.easeFactor = Math.max(1.3, card.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
        card.lastReview = Date.now();
        card.nextReview = Date.now() + (card.interval * 24 * 60 * 60 * 1000);
        
        await this.save();
        this.render();
    },
    
    async addCustomCard(front, back, subject) {
        this.cards.push({
            id: 'custom_' + Date.now(),
            front,
            back,
            subject,
            interval: 1,
            repetitions: 0,
            easeFactor: 2.5,
            nextReview: Date.now(),
            lastReview: null
        });
        await this.save();
        app.showToast('Flashcard added!');
    }
};