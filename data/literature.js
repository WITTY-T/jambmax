const LITERATURE_DATA = {
    name: "Literature",
    topics: ["Prose", "Poetry", "Drama", "Literary Terms", "African Writers", "Shakespeare", "Literary Appreciation", "Non-African Literature", "Oral Literature", "Literary Criticism"],
    questions: [
        {
            id: "lit_001", topic: "Prose", year: "2024",
            question: "In Chinua Achebe's 'Things Fall Apart', Okonkwo is best described as...",
            options: { A: "A coward", B: "A tragic hero", C: "A comic character", D: "A static character" },
            answer: "B", explanation: "Okonkwo possesses a tragic flaw (fear of weakness) that leads to his downfall, fitting the tragic hero archetype."
        },
        {
            id: "lit_002", topic: "Poetry", year: "2024",
            question: "A poem of fourteen lines is called a...",
            options: { A: "Ode", B: "Sonnet", C: "Elegy", D: "Ballad" },
            answer: "B", explanation: "A sonnet is a 14-line poem with a specific rhyme scheme, traditionally iambic pentameter."
        },
        {
            id: "lit_003", topic: "Drama", year: "2023",
            question: "The central message or insight in a literary work is called the...",
            options: { A: "Plot", B: "Theme", C: "Setting", D: "Conflict" },
            answer: "B", explanation: "Theme is the central idea or message that the author wants to convey through the work."
        },
        {
            id: "lit_004", topic: "African Writers", year: "2023",
            question: "Wole Soyinka was awarded the Nobel Prize in Literature in which year?",
            options: { A: "1983", B: "1986", C: "1988", D: "1991" },
            answer: "B", explanation: "Wole Soyinka became the first African to win the Nobel Prize in Literature in 1986."
        },
        {
            id: "lit_005", topic: "Literary Terms", year: "2022",
            question: "A story that explains the origin of natural phenomena is called...",
            options: { A: "Legend", B: "Myth", C: "Folktale", D: "Fable" },
            answer: "B", explanation: "A myth is a traditional story, especially one concerning the early history of a people or explaining a natural phenomenon."
        },
        {
            id: "lit_006", topic: "Shakespeare", year: "2024",
            question: "Romeo and Juliet is an example of a...",
            options: { A: "Comedy", B: "Tragedy", C: "History", D: "Romance" },
            answer: "B", explanation: "Romeo and Juliet is one of Shakespeare's most famous tragedies."
        },
        {
            id: "lit_007", topic: "Prose", year: "2023",
            question: "The main character in a novel is called the...",
            options: { A: "Antagonist", B: "Protagonist", C: "Narrator", D: "Foil" },
            answer: "B", explanation: "The protagonist is the main character or hero of a literary work."
        },
        {
            id: "lit_008", topic: "Poetry", year: "2022",
            question: "The repetition of consonant sounds at the beginning of words is called...",
            options: { A: "Assonance", B: "Alliteration", C: "Consonance", D: "Onomatopoeia" },
            answer: "B", explanation: "Alliteration is the repetition of the same initial consonant sound in nearby words."
        },
        {
            id: "lit_009", topic: "Drama", year: "2024",
            question: "A long speech by one character in a play is called a...",
            options: { A: "Dialogue", B: "Monologue", C: "Soliloquy", D: "Aside" },
            answer: "B", explanation: "A monologue is a long speech by one actor in a play or movie."
        },
        {
            id: "lit_010", topic: "Literary Terms", year: "2023",
            question: "The time and place in which a story occurs is called the...",
            options: { A: "Plot", B: "Setting", C: "Atmosphere", D: "Mood" },
            answer: "B", explanation: "Setting refers to where and when a story takes place."
        },
        {
            id: "lit_011", topic: "African Writers", year: "2022",
            question: "The author of 'The Lion and the Jewel' is...",
            options: { A: "Chinua Achebe", B: "Wole Soyinka", C: "Ngugi wa Thiong'o", D: "Buchi Emecheta" },
            answer: "B", explanation: "The Lion and the Jewel is a play by Wole Soyinka, first performed in 1959."
        },
        {
            id: "lit_012", topic: "Prose", year: "2024",
            question: "A character that changes throughout the story is called...",
            options: { A: "Static", B: "Dynamic", C: "Flat", D: "Stock" },
            answer: "B", explanation: "A dynamic character undergoes significant internal change throughout the story."
        },
        {
            id: "lit_013", topic: "Poetry", year: "2023",
            question: "A group of lines in a poem is called a...",
            options: { A: "Verse", B: "Stanza", C: "Couplet", D: "Quatrain" },
            answer: "B", explanation: "A stanza is a grouped set of lines within a poem, usually set off by a blank line."
        },
        {
            id: "lit_014", topic: "Drama", year: "2022",
            question: "The struggle between opposing forces in a story is called...",
            options: { A: "Climax", B: "Conflict", C: "Resolution", D: "Exposition" },
            answer: "B", explanation: "Conflict is the central struggle or problem that drives the narrative."
        },
        {
            id: "lit_015", topic: "Shakespeare", year: "2024",
            question: "The tragic flaw of Macbeth is...",
            options: { A: "Cowardice", B: "Excessive ambition", C: "Laziness", D: "Honesty" },
            answer: "B", explanation: "Macbeth's tragic flaw is his 'vaulting ambition' which leads him to murder and tyranny."
        },
        {
            id: "lit_016", topic: "Literary Terms", year: "2023",
            question: "A comparison using 'like' or 'as' is called...",
            options: { A: "Metaphor", B: "Simile", C: "Personification", D: "Hyperbole" },
            answer: "B", explanation: "A simile compares two things using 'like' or 'as'."
        },
        {
            id: "lit_017", topic: "African Writers", year: "2022",
            question: "'No Longer at Ease' was written by...",
            options: { A: "Wole Soyinka", B: "Chinua Achebe", C: "Cyprian Ekwensi", D: "Ayi Kwei Armah" },
            answer: "B", explanation: "No Longer at Ease (1960) is a novel by Chinua Achebe, sequel to Things Fall Apart."
        },
        {
            id: "lit_018", topic: "Prose", year: "2024",
            question: "The highest point of tension in a story is called the...",
            options: { A: "Exposition", B: "Rising action", C: "Climax", D: "Falling action" },
            answer: "C", explanation: "The climax is the turning point or moment of greatest tension in a narrative."
        },
        {
            id: "lit_019", topic: "Poetry", year: "2023",
            question: "An elegy is a poem written to...",
            options: { A: "Celebrate a wedding", B: "Mourn the dead", C: "Praise a hero", D: "Describe nature" },
            answer: "B", explanation: "An elegy is a mournful, melancholic poem, especially a funeral song or lament for the dead."
        },
        {
            id: "lit_020", topic: "Drama", year: "2022",
            question: "A play that ends happily is called a...",
            options: { A: "Tragedy", B: "Comedy", C: "Farce", D: "Melodrama" },
            answer: "B", explanation: "A comedy is a play characterized by humor and a happy ending."
        },
        {
            id: "lit_021", topic: "Non-African Literature", year: "2024",
            question: "George Orwell's 'Animal Farm' is an example of...",
            options: { A: "Romance", B: "Political satire", C: "Science fiction", D: "Detective story" },
            answer: "B", explanation: "Animal Farm is a political satire and allegory of the Russian Revolution."
        },
        {
            id: "lit_022", topic: "Oral Literature", year: "2023",
            question: "A praise poem in African oral tradition is called...",
            options: { A: "Dirge", B: "Oriki", C: "Riddle", D: "Proverb" },
            answer: "B", explanation: "Oriki (Yoruba) or praise poetry is a genre of oral literature celebrating individuals or lineages."
        },
        {
            id: "lit_023", topic: "Literary Criticism", year: "2022",
            question: "New Criticism focuses on...",
            options: { A: "Author's biography", B: "The text itself", C: "Historical context", D: "Reader's response" },
            answer: "B", explanation: "New Criticism emphasizes close reading of the text independent of external factors."
        },
        {
            id: "lit_024", topic: "Shakespeare", year: "2024",
            question: "Hamlet's famous soliloquy begins with...",
            options: { A: "To be or not to be", B: "All the world's a stage", C: "Now is the winter of our discontent", D: "Friends, Romans, countrymen" },
            answer: "A", explanation: "Hamlet's most famous soliloquy begins 'To be, or not to be, that is the question.'"
        },
        {
            id: "lit_025", topic: "African Writers", year: "2023",
            question: "'The Beautiful Ones Are Not Yet Born' was written by...",
            options: { A: "Ayi Kwei Armah", B: "Chinua Achebe", C: "Wole Soyinka", D: "Ngugi wa Thiong'o" },
            answer: "A", explanation: "The Beautiful Ones Are Not Yet Born (1968) is a novel by Ghanaian author Ayi Kwei Armah."
        },
        {
            id: "lit_026", topic: "Literary Terms", year: "2022",
            question: "An unreliable narrator is one who...",
            options: { A: "Tells the truth", B: "Cannot be trusted to tell the story accurately", C: "Is a child", D: "Speaks in third person" },
            answer: "B", explanation: "An unreliable narrator's credibility is compromised, making their account questionable."
        },
        {
            id: "lit_027", topic: "Prose", year: "2024",
            question: "A novella is shorter than a...",
            options: { A: "Short story", B: "Novel", C: "Poem", D: "Play" },
            answer: "B", explanation: "A novella is longer than a short story but shorter than a novel."
        },
        {
            id: "lit_028", topic: "Poetry", year: "2023",
            question: "Free verse is poetry that...",
            options: { A: "Has no rhyme or regular meter", B: "Rhymes at the end of every line", C: "Has exactly 14 lines", D: "Uses only one stanza" },
            answer: "A", explanation: "Free verse does not follow regular rhyme scheme or meter patterns."
        },
        {
            id: "lit_029", topic: "Drama", year: "2022",
            question: "The unities of drama (action, time, place) were proposed by...",
            options: { A: "Shakespeare", B: "Aristotle", C: "Sophocles", D: "Plato" },
            answer: "B", explanation: "Aristotle proposed the classical unities in his work 'Poetics'."
        },
        {
            id: "lit_030", topic: "Non-African Literature", year: "2024",
            question: "'Things Fall Apart' was published in...",
            options: { A: "1956", B: "1958", C: "1960", D: "1962" },
            answer: "B", explanation: "Things Fall Apart was published in 1958."
        },
        {
            id: "lit_031", topic: "Oral Literature", year: "2023",
            question: "A trickster figure in African folklore is...",
            options: { A: "Lion", B: "Tortoise", C: "Elephant", D: "Eagle" },
            answer: "B", explanation: "The tortoise is a common trickster figure in West African folklore."
        },
        {
            id: "lit_032", topic: "Literary Criticism", year: "2022",
            question: "Feminist criticism focuses on...",
            options: { A: "Economic themes", B: "Gender and power", C: "Religious symbols", D: "Natural imagery" },
            answer: "B", explanation: "Feminist criticism examines literature through the lens of gender and power relations."
        },
        {
            id: "lit_033", topic: "Shakespeare", year: "2024",
            question: "Othello is driven to murder by...",
            options: { A: "Greed", B: "Jealousy", C: "Ambition", D: "Fear" },
            answer: "B", explanation: "Othello is driven to murder his wife Desdemona by jealousy, manipulated by Iago."
        },
        {
            id: "lit_034", topic: "African Writers", year: "2023",
            question: "Ngugi wa Thiong'o originally wrote in...",
            options: { A: "Swahili", B: "English", C: "Gikuyu", D: "French" },
            answer: "B", explanation: "Ngugi initially wrote in English but later switched to Gikuyu to reach his local audience."
        },
        {
            id: "lit_035", topic: "Literary Terms", year: "2022",
            question: "Foreshadowing is a technique used to...",
            options: { A: "Describe the past", B: "Hint at future events", C: "Introduce characters", D: "Create humor" },
            answer: "B", explanation: "Foreshadowing gives hints or clues about events that will occur later in the story."
        },
        {
            id: "lit_036", topic: "Prose", year: "2024",
            question: "An epistolary novel is written as...",
            options: { A: "A series of letters", B: "A diary", C: "A poem", D: "A play" },
            answer: "A", explanation: "An epistolary novel is written as a series of documents, usually letters."
        },
        {
            id: "lit_037", topic: "Poetry", year: "2023",
            question: "A haiku has how many lines?",
            options: { A: "2", B: "3", C: "4", D: "5" },
            answer: "B", explanation: "A haiku is a Japanese form with 3 lines (5-7-5 syllables)."
        },
        {
            id: "lit_038", topic: "Drama", year: "2022",
            question: "The chorus in Greek drama serves to...",
            options: { A: "Perform action", B: "Comment on the action", C: "Play music", D: "Sell tickets" },
            answer: "B", explanation: "The chorus comments on the action, provides background, and expresses the author's point of view."
        },
        {
            id: "lit_039", topic: "Non-African Literature", year: "2024",
            question: "Pride and Prejudice was written by...",
            options: { A: "Charlotte Brontë", B: "Jane Austen", C: "Emily Brontë", D: "Virginia Woolf" },
            answer: "B", explanation: "Pride and Prejudice (1813) is a novel by Jane Austen."
        },
        {
            id: "lit_040", topic: "Oral Literature", year: "2023",
            question: "A riddle is a form of oral literature that...",
            options: { A: "Tells a long story", B: "Poses a question requiring ingenuity to answer", C: "Praises a king", D: "Mourns the dead" },
            answer: "B", explanation: "A riddle is a statement or question requiring the listener to solve a puzzle."
        },
        {
            id: "lit_041", topic: "Literary Criticism", year: "2022",
            question: "Marxist criticism examines literature in terms of...",
            options: { A: "Class struggle", B: "Psychological conflicts", C: "Religious themes", D: "Natural settings" },
            answer: "A", explanation: "Marxist criticism analyzes literature through the lens of class struggle and economic conditions."
        },
        {
            id: "lit_042", topic: "Shakespeare", year: "2024",
            question: "King Lear has how many daughters?",
            options: { A: "2", B: "3", C: "4", D: "5" },
            answer: "B", explanation: "King Lear has three daughters: Goneril, Regan, and Cordelia."
        },
        {
            id: "lit_043", topic: "African Writers", year: "2023",
            question: "Buchi Emecheta was a Nigerian writer known for her works on...",
            options: { A: "Science fiction", B: "Women's experiences and gender issues", C: "Political history", D: "Children's stories" },
            answer: "B", explanation: "Buchi Emecheta wrote extensively about the experiences of African women and gender inequality."
        },
        {
            id: "lit_044", topic: "Literary Terms", year: "2022",
            question: "Irony is a situation where...",
            options: { A: "Everything is as expected", B: "The opposite of what is expected occurs", C: "Everyone is happy", D: "The story ends well" },
            answer: "B", explanation: "Irony involves a contrast between expectation and reality."
        },
        {
            id: "lit_045", topic: "Prose", year: "2024",
            question: "An autobiography is...",
            options: { A: "A fictional story", B: "An account of one's own life", C: "A biography of another person", D: "A collection of poems" },
            answer: "B", explanation: "An autobiography is a self-written account of the author's own life."
        },
        {
            id: "lit_046", topic: "Poetry", year: "2023",
            question: "Enjambment is when...",
            options: { A: "Lines end with punctuation", B: "A sentence continues beyond the end of a line", C: "Rhymes are perfect", D: "Stanzas are equal length" },
            answer: "B", explanation: "Enjambment is the continuation of a sentence without a pause beyond the end of a line."
        },
        {
            id: "lit_047", topic: "Drama", year: "2022",
            question: "The deus ex machina is a plot device where...",
            options: { A: "A god appears to solve the problem", B: "The hero dies", C: "The villain wins", D: "Love conquers all" },
            answer: "A", explanation: "Deus ex machina ('god from the machine') is an unexpected power or event saving a hopeless situation."
        },
        {
            id: "lit_048", topic: "Non-African Literature", year: "2024",
            question: "The author of '1984' is...",
            options: { A: "Aldous Huxley", B: "George Orwell", C: "Ray Bradbury", D: "H.G. Wells" },
            answer: "B", explanation: "1984 (1949) is a dystopian novel by George Orwell."
        },
        {
            id: "lit_049", topic: "Oral Literature", year: "2023",
            question: "A folktale is typically...",
            options: { A: "Written by one author", B: "Passed down orally through generations", C: "Published in a book", D: "Protected by copyright" },
            answer: "B", explanation: "Folktales are traditional stories passed down orally through generations."
        },
        {
            id: "lit_050", topic: "Literary Criticism", year: "2022",
            question: "Post-colonial criticism examines...",
            options: { A: "Ancient Greek texts", B: "Literature in relation to colonialism and its aftermath", C: "Religious scriptures", D: "Scientific writing" },
            answer: "B", explanation: "Post-colonial criticism studies literature in the context of colonial and imperial power."
        }
    ]
};