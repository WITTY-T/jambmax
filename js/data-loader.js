const JAMB_DATA = {
    subjects: {},
    
    init() {
        // Load all subject data
        const subjectModules = [
            { id: 'english', data: ENGLISH_DATA },
            { id: 'mathematics', data: MATHEMATICS_DATA },
            { id: 'physics', data: PHYSICS_DATA },
            { id: 'chemistry', data: CHEMISTRY_DATA },
            { id: 'biology', data: BIOLOGY_DATA },
            { id: 'government', data: GOVERNMENT_DATA },
            { id: 'economics', data: ECONOMICS_DATA },
            { id: 'literature', data: LITERATURE_DATA },
            { id: 'crs', data: CRS_DATA }
        ];
        
        this.questions = [];
        
        subjectModules.forEach(({ id, data }) => {
            this.subjects[id] = {
                name: data.name,
                topics: data.topics
            };
            
            // Add subject ID to each question
            data.questions.forEach(q => {
                q.subject = id;
                this.questions.push(q);
            });
        });
    },
    
    getQuestions(filters = {}) {
        let qs = this.questions;
        if (filters.subject) qs = qs.filter(q => q.subject === filters.subject);
        if (filters.topic) qs = qs.filter(q => q.topic === filters.topic);
        if (filters.year) qs = qs.filter(q => q.year === filters.year);
        if (filters.count) qs = qs.slice(0, filters.count);
        return qs;
    },
    
    getSubjects() {
        return Object.keys(this.subjects).map(k => ({
            id: k,
            ...this.subjects[k]
        }));
    },
    
    getTopics(subjectId) {
        return this.subjects[subjectId]?.topics || [];
    },
    
    getTotalCount() {
        return this.questions.length;
    },
    
    getSubjectCount(subjectId) {
        return this.questions.filter(q => q.subject === subjectId).length;
    }
};

// Initialize immediately
JAMB_DATA.init();