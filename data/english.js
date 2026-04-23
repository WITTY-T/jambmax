const ENGLISH_DATA = {
    name: "English Language",
    topics: ["Comprehension", "Lexis", "Structure", "Oral Forms", "Essay", "Summary", "Phonetics", "Idioms"],
    questions: [
        {
            id: "en_001", topic: "Comprehension", year: "2024",
            question: "In the passage, the writer's attitude towards colonial rule can best be described as...",
            options: { A: "Supportive and approving", B: "Critical and resentful", C: "Indifferent and neutral", D: "Ambivalent and uncertain" },
            answer: "B", explanation: "The passage uses words like 'exploitation' and 'oppression' which indicate a critical stance toward colonial rule."
        },
        {
            id: "en_002", topic: "Lexis", year: "2024",
            question: "Choose the word that is nearest in meaning to 'ABERRATION':",
            options: { A: "Normalcy", B: "Deviation", C: "Consistency", D: "Regularity" },
            answer: "B", explanation: "Aberration means a departure from what is normal or expected, making 'deviation' the closest synonym."
        },
        {
            id: "en_003", topic: "Structure", year: "2023",
            question: "The committee has _______ the proposal for the new library.",
            options: { A: "approved of", B: "approved", C: "approve", D: "approving" },
            answer: "B", explanation: "'Approved' is the correct past participle form used with the auxiliary 'has'."
        },
        {
            id: "en_004", topic: "Comprehension", year: "2023",
            question: "From the passage, it can be inferred that the protagonist...",
            options: { A: "Was born into wealth", B: "Struggled against adversity", C: "Had an easy childhood", D: "Was indifferent to success" },
            answer: "B", explanation: "The passage describes numerous challenges the protagonist faced, indicating a struggle against adversity."
        },
        {
            id: "en_005", topic: "Oral Forms", year: "2022",
            question: "The rhyme scheme of the poem is...",
            options: { A: "ABAB", B: "AABB", C: "ABBA", D: "ABCB" },
            answer: "A", explanation: "Analyzing the end rhymes of each line reveals an ABAB pattern throughout the stanza."
        },
        {
            id: "en_006", topic: "Lexis", year: "2024",
            question: "Choose the word opposite in meaning to 'Benevolent':",
            options: { A: "Kind", B: "Malevolent", C: "Generous", D: "Charitable" },
            answer: "B", explanation: "Benevolent means well-meaning and kindly. Malevolent means having or showing a wish to do evil to others."
        },
        {
            id: "en_007", topic: "Structure", year: "2023",
            question: "Neither the teacher nor the students _______ present at the assembly.",
            options: { A: "was", B: "were", C: "are", D: "is" },
            answer: "B", explanation: "With 'neither...nor', the verb agrees with the nearest subject. 'Students' is plural, so use 'were'."
        },
        {
            id: "en_008", topic: "Summary", year: "2022",
            question: "Which of the following best summarizes the passage?",
            options: { A: "The importance of education", B: "The effects of climate change on agriculture", C: "The history of Nigerian literature", D: "The role of government in economy" },
            answer: "B", explanation: "The passage focuses on how changing weather patterns affect farming and food production."
        },
        {
            id: "en_009", topic: "Oral Forms", year: "2024",
            question: "The expression 'He has a heart of stone' is an example of...",
            options: { A: "Simile", B: "Metaphor", C: "Personification", D: "Hyperbole" },
            answer: "B", explanation: "A metaphor directly compares two unlike things without using 'like' or 'as'."
        },
        {
            id: "en_010", topic: "Lexis", year: "2023",
            question: "The word 'Ubiquitous' means...",
            options: { A: "Rare", B: "Everywhere", C: "Unique", D: "Ancient" },
            answer: "B", explanation: "Ubiquitous means present, appearing, or found everywhere."
        },
        {
            id: "en_011", topic: "Structure", year: "2022",
            question: "If I _______ the answer, I would tell you.",
            options: { A: "know", B: "knew", C: "had known", D: "knows" },
            answer: "B", explanation: "This is a Type 2 conditional (unreal present). Use past simple in the if-clause."
        },
        {
            id: "en_012", topic: "Comprehension", year: "2024",
            question: "The tone of the author in the last paragraph is...",
            options: { A: "Humorous", B: "Sarcastic", C: "Optimistic", D: "Pessimistic" },
            answer: "C", explanation: "The author uses words of hope and encouragement, indicating an optimistic tone."
        },
        {
            id: "en_013", topic: "Essay", year: "2023",
            question: "Which of the following is the most appropriate title for an essay about the advantages and disadvantages of social media?",
            options: { A: "Social Media is Bad", B: "The Double-Edged Sword: Social Media", C: "Why I Love Social Media", D: "The Internet" },
            answer: "B", explanation: "A balanced essay title should reflect both sides of the argument."
        },
        {
            id: "en_014", topic: "Lexis", year: "2022",
            question: "A person who writes plays is called a...",
            options: { A: "Poet", B: "Playwright", C: "Novelist", D: "Essayist" },
            answer: "B", explanation: "A playwright is a person who writes plays."
        },
        {
            id: "en_015", topic: "Oral Forms", year: "2024",
            question: "Alliteration is the repetition of...",
            options: { A: "Vowel sounds", B: "Consonant sounds at the beginning of words", C: "Whole words", D: "Rhyming words" },
            answer: "B", explanation: "Alliteration is the occurrence of the same letter or sound at the beginning of adjacent or closely connected words."
        },
        {
            id: "en_016", topic: "Structure", year: "2023",
            question: "The boys prefer playing football _______ watching television.",
            options: { A: "than", B: "to", C: "against", D: "from" },
            answer: "B", explanation: "The correct structure is 'prefer...to' when comparing two gerunds."
        },
        {
            id: "en_017", topic: "Comprehension", year: "2022",
            question: "The passage suggests that the main character is...",
            options: { A: "Dishonest", B: "Ambitious", C: "Lazy", D: "Cowardly" },
            answer: "B", explanation: "The character's actions throughout the passage show determination to achieve goals."
        },
        {
            id: "en_018", topic: "Lexis", year: "2024",
            question: "Choose the correctly spelt word:",
            options: { A: "Accomodate", B: "Accommodate", C: "Acommodate", D: "Accomadate" },
            answer: "B", explanation: "Accommodate is spelled with two c's and two m's."
        },
        {
            id: "en_019", topic: "Summary", year: "2023",
            question: "The passage is mainly about...",
            options: { A: "How to cook", B: "The importance of time management", C: "Nigerian history", D: "Space exploration" },
            answer: "B", explanation: "The passage discusses various strategies for managing time effectively."
        },
        {
            id: "en_020", topic: "Oral Forms", year: "2022",
            question: "A poem of fourteen lines with a specific rhyme scheme is called a...",
            options: { A: "Sonnet", B: "Ode", C: "Elegy", D: "Limerick" },
            answer: "A", explanation: "A sonnet is a 14-line poem with a specific rhyme scheme."
        },
        {
            id: "en_021", topic: "Phonetics", year: "2024",
            question: "The sound /ʃ/ in 'ship' is a...",
            options: { A: "Plosive", B: "Fricative", C: "Affricate", D: "Nasal" },
            answer: "B", explanation: "/ʃ/ is a voiceless postalveolar fricative."
        },
        {
            id: "en_022", topic: "Idioms", year: "2023",
            question: "The idiom 'to kick the bucket' means...",
            options: { A: "To start a new job", B: "To die", C: "To travel", D: "To save money" },
            answer: "B", explanation: "'Kick the bucket' is an informal idiom meaning to die."
        },
        {
            id: "en_023", topic: "Lexis", year: "2022",
            question: "Choose the word nearest in meaning to 'EPHEMERAL':",
            options: { A: "Eternal", B: "Temporary", C: "Permanent", D: "Stable" },
            answer: "B", explanation: "Ephemeral means lasting for a very short time, temporary."
        },
        {
            id: "en_024", topic: "Structure", year: "2024",
            question: "She _______ to the market when it started raining.",
            options: { A: "goes", B: "went", C: "was going", D: "had gone" },
            answer: "C", explanation: "Past continuous is used for an action interrupted by another past action."
        },
        {
            id: "en_025", topic: "Comprehension", year: "2023",
            question: "The writer's purpose in the passage is to...",
            options: { A: "Entertain", B: "Persuade", C: "Inform", D: "Describe" },
            answer: "C", explanation: "The passage provides factual information about a topic."
        },
        {
            id: "en_026", topic: "Lexis", year: "2022",
            question: "The word 'Cacophony' refers to...",
            options: { A: "Beautiful music", B: "Harsh discordant sound", C: "Silence", D: "Soft whisper" },
            answer: "B", explanation: "Cacophony means a harsh, discordant mixture of sounds."
        },
        {
            id: "en_027", topic: "Oral Forms", year: "2024",
            question: "An ode is a poem written to...",
            options: { A: "Mourn the dead", B: "Celebrate or praise", C: "Tell a story", D: "Express anger" },
            answer: "B", explanation: "An ode is a lyric poem in the form of an address to a particular subject, often elevated in style or manner and written in varied or irregular meter."
        },
        {
            id: "en_028", topic: "Structure", year: "2023",
            question: "By this time tomorrow, I _______ my examination.",
            options: { A: "will finish", B: "will have finished", C: "would finish", D: "am finishing" },
            answer: "B", explanation: "Future perfect is used for actions that will be completed before a specific time in the future."
        },
        {
            id: "en_029", topic: "Phonetics", year: "2022",
            question: "How many syllables are in the word 'beautiful'?",
            options: { A: "2", B: "3", C: "4", D: "5" },
            answer: "B", explanation: "Beau-ti-ful = 3 syllables."
        },
        {
            id: "en_030", topic: "Idioms", year: "2024",
            question: "'To burn the midnight oil' means to...",
            options: { A: "Waste resources", B: "Study or work late into the night", C: "Start a fire", D: "Cook late" },
            answer: "B", explanation: "Burning the midnight oil means working or studying late at night."
        },
        {
            id: "en_031", topic: "Lexis", year: "2023",
            question: "Choose the word opposite in meaning to 'Ostentatious':",
            options: { A: "Showy", B: "Modest", C: "Flashy", D: "Extravagant" },
            answer: "B", explanation: "Ostentatious means characterized by vulgar or pretentious display; designed to impress or attract notice. Modest is the opposite."
        },
        {
            id: "en_032", topic: "Structure", year: "2022",
            question: "The teacher asked the students to _______ their books.",
            options: { A: "put off", B: "put away", C: "put on", D: "put out" },
            answer: "B", explanation: "Put away means to place something in its proper storage place."
        },
        {
            id: "en_033", topic: "Comprehension", year: "2024",
            question: "The word 'paradox' as used in the passage means...",
            options: { A: "A simple statement", B: "A seemingly contradictory statement that may be true", C: "A false statement", D: "A question" },
            answer: "B", explanation: "A paradox is a statement that appears to contradict itself but may be true."
        },
        {
            id: "en_034", topic: "Oral Forms", year: "2023",
            question: "A ballad is a...",
            options: { A: "Love song", B: "Narrative poem", C: "Religious hymn", D: "War cry" },
            answer: "B", explanation: "A ballad is a poem or song narrating a story in short stanzas."
        },
        {
            id: "en_035", topic: "Lexis", year: "2022",
            question: "The word 'Inscrutable' means...",
            options: { A: "Easy to understand", B: "Impossible to understand", C: "Funny", D: "Boring" },
            answer: "B", explanation: "Inscrutable means impossible to understand or interpret."
        },
        {
            id: "en_036", topic: "Structure", year: "2024",
            question: "I wish I _______ taller.",
            options: { A: "am", B: "were", C: "was", D: "be" },
            answer: "B", explanation: "In formal English, 'were' is used for all subjects in hypothetical/subjunctive wishes."
        },
        {
            id: "en_037", topic: "Phonetics", year: "2023",
            question: "The word 'psychology' begins with a silent...",
            options: { A: "s", B: "p", C: "y", D: "h" },
            answer: "B", explanation: "The 'p' in psychology is silent. It is pronounced /saɪˈkɒlədʒi/."
        },
        {
            id: "en_038", topic: "Idioms", year: "2022",
            question: "'To let the cat out of the bag' means to...",
            options: { A: "Buy a pet", B: "Reveal a secret", C: "Start a fight", D: "Go shopping" },
            answer: "B", explanation: "Letting the cat out of the bag means revealing a secret carelessly or by mistake."
        },
        {
            id: "en_039", topic: "Lexis", year: "2024",
            question: "Choose the word nearest in meaning to 'Pragmatic':",
            options: { A: "Idealistic", B: "Practical", C: "Theoretical", D: "Dreamy" },
            answer: "B", explanation: "Pragmatic means dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations."
        },
        {
            id: "en_040", topic: "Structure", year: "2023",
            question: "The company has _______ employees since 2020.",
            options: { A: "grew", B: "grown", C: "grows", D: "growing" },
            answer: "B", explanation: "Present perfect requires the past participle 'grown'."
        },
        {
            id: "en_041", topic: "Comprehension", year: "2022",
            question: "The phrase 'turning point' in the passage refers to...",
            options: { A: "A physical rotation", B: "A critical moment of change", C: "A road intersection", D: "A game strategy" },
            answer: "B", explanation: "A turning point is a time at which a decisive change in a situation occurs, especially one with beneficial results."
        },
        {
            id: "en_042", topic: "Oral Forms", year: "2024",
            question: "An elegy is a poem of...",
            options: { A: "Joy", B: "Mourning", C: "Love", D: "Victory" },
            answer: "B", explanation: "An elegy is a poem of serious reflection, typically a lament for the dead."
        },
        {
            id: "en_043", topic: "Lexis", year: "2023",
            question: "The word 'Mellifluous' describes a sound that is...",
            options: { A: "Harsh", B: "Sweet and musical", C: "Loud", D: "Silent" },
            answer: "B", explanation: "Mellifluous means (of a voice or words) sweet or musical; pleasant to hear."
        },
        {
            id: "en_044", topic: "Structure", year: "2022",
            question: "Not only _______ hard, but he also plays hard.",
            options: { A: "he works", B: "does he work", C: "he working", D: "worked he" },
            answer: "B", explanation: "When 'not only' begins a clause, it triggers inversion: auxiliary + subject + main verb."
        },
        {
            id: "en_045", topic: "Phonetics", year: "2024",
            question: "The diphthong in the word 'house' is...",
            options: { A: "/eɪ/", B: "/aʊ/", C: "/ɔɪ/", D: "/aɪ/" },
            answer: "B", explanation: "The vowel sound in 'house' is the diphthong /aʊ/."
        },
        {
            id: "en_046", topic: "Idioms", year: "2023",
            question: "'To hit the nail on the head' means to...",
            options: { A: "Do carpentry", B: "Describe exactly what is causing a situation", C: "Miss the target", D: "Start a project" },
            answer: "B", explanation: "Hitting the nail on the head means to describe precisely what is causing a situation or problem."
        },
        {
            id: "en_047", topic: "Lexis", year: "2022",
            question: "Choose the word opposite in meaning to 'Paucity':",
            options: { A: "Scarcity", B: "Abundance", C: "Lack", D: "Shortage" },
            answer: "B", explanation: "Paucity means the presence of something only in small or insufficient quantities or amounts. Abundance is the opposite."
        },
        {
            id: "en_048", topic: "Structure", year: "2024",
            question: "The more you practice, _______ you become.",
            options: { A: "the more better", B: "the better", C: "more better", D: "better" },
            answer: "B", explanation: "The comparative correlative structure is 'the + comparative, the + comparative'."
        },
        {
            id: "en_049", topic: "Comprehension", year: "2023",
            question: "The author's use of flashback in the narrative serves to...",
            options: { A: "Confuse the reader", B: "Provide background information", C: "Speed up the plot", D: "Introduce new characters" },
            answer: "B", explanation: "Flashbacks are used to provide background information about events that happened before the current timeline."
        },
        {
            id: "en_050", topic: "Oral Forms", year: "2022",
            question: "A dramatic monologue features...",
            options: { A: "Multiple speakers", B: "A single speaker addressing a silent audience", C: "A chorus", D: "Only dialogue" },
            answer: "B", explanation: "A dramatic monologue is a poem in which a single speaker addresses a silent listener, revealing aspects of their character."
        }
    ]
};