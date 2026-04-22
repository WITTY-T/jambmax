const JAMB_DATA = {
    subjects: {
        english: {
            name: "English Language",
            topics: ["Comprehension", "Lexis", "Structure", "Oral Forms", "Essay", "Summary"]
        },
        mathematics: {
            name: "Mathematics",
            topics: ["Algebra", "Calculus", "Geometry", "Trigonometry", "Statistics", "Probability", "Mensuration", "Coordinate Geometry"]
        },
        physics: {
            name: "Physics",
            topics: ["Mechanics", "Heat", "Waves", "Optics", "Electricity", "Modern Physics", "Magnetism", "Nuclear Physics"]
        },
        chemistry: {
            name: "Chemistry",
            topics: ["Organic", "Inorganic", "Physical", "Atomic Structure", "Stoichiometry", "Electrochemistry", "Chemical Equilibrium"]
        },
        biology: {
            name: "Biology",
            topics: ["Ecology", "Genetics", "Cell Biology", "Physiology", "Evolution", "Microbiology", "Plant Biology"]
        },
        government: {
            name: "Government",
            topics: ["Political Systems", "Constitution", "Citizenship", "Nigerian Politics", "Foreign Policy", "Local Government", "Elections"]
        },
        economics: {
            name: "Economics",
            topics: ["Microeconomics", "Macroeconomics", "International Trade", "Development", "Money", "Public Finance", "Agriculture"]
        },
        literature: {
            name: "Literature",
            topics: ["Prose", "Poetry", "Drama", "Literary Terms", "African Writers", "Shakespeare", "Literary Appreciation"]
        },
        crs: {
            name: "CRS",
            topics: ["Synoptic Gospels", "Acts", "Pauline Epistles", "Old Testament", "Christian Living", "Parables", "Miracles"]
        }
    },
    
    questions: [
        // ==================== ENGLISH (20 questions) ====================
        {
            id: "en_001", subject: "english", topic: "Comprehension", year: "2024",
            question: "In the passage, the writer's attitude towards colonial rule can best be described as...",
            options: { A: "Supportive and approving", B: "Critical and resentful", C: "Indifferent and neutral", D: "Ambivalent and uncertain" },
            answer: "B", explanation: "The passage uses words like 'exploitation' and 'oppression' which indicate a critical stance toward colonial rule."
        },
        {
            id: "en_002", subject: "english", topic: "Lexis", year: "2024",
            question: "Choose the word that is nearest in meaning to 'ABERRATION':",
            options: { A: "Normalcy", B: "Deviation", C: "Consistency", D: "Regularity" },
            answer: "B", explanation: "Aberration means a departure from what is normal or expected, making 'deviation' the closest synonym."
        },
        {
            id: "en_003", subject: "english", topic: "Structure", year: "2023",
            question: "The committee has _______ the proposal for the new library.",
            options: { A: "approved of", B: "approved", C: "approve", D: "approving" },
            answer: "B", explanation: "'Approved' is the correct past participle form used with the auxiliary 'has'."
        },
        {
            id: "en_004", subject: "english", topic: "Comprehension", year: "2023",
            question: "From the passage, it can be inferred that the protagonist...",
            options: { A: "Was born into wealth", B: "Struggled against adversity", C: "Had an easy childhood", D: "Was indifferent to success" },
            answer: "B", explanation: "The passage describes numerous challenges the protagonist faced, indicating a struggle against adversity."
        },
        {
            id: "en_005", subject: "english", topic: "Oral Forms", year: "2022",
            question: "The rhyme scheme of the poem is...",
            options: { A: "ABAB", B: "AABB", C: "ABBA", D: "ABCB" },
            answer: "A", explanation: "Analyzing the end rhymes of each line reveals an ABAB pattern throughout the stanza."
        },
        {
            id: "en_006", subject: "english", topic: "Lexis", year: "2024",
            question: "Choose the word opposite in meaning to 'Benevolent':",
            options: { A: "Kind", B: "Malevolent", C: "Generous", D: "Charitable" },
            answer: "B", explanation: "Benevolent means well-meaning and kindly. Malevolent means having or showing a wish to do evil to others."
        },
        {
            id: "en_007", subject: "english", topic: "Structure", year: "2023",
            question: "Neither the teacher nor the students _______ present at the assembly.",
            options: { A: "was", B: "were", C: "are", D: "is" },
            answer: "B", explanation: "With 'neither...nor', the verb agrees with the nearest subject. 'Students' is plural, so use 'were'."
        },
        {
            id: "en_008", subject: "english", topic: "Summary", year: "2022",
            question: "Which of the following best summarizes the passage?",
            options: { A: "The importance of education", B: "The effects of climate change on agriculture", C: "The history of Nigerian literature", D: "The role of government in economy" },
            answer: "B", explanation: "The passage focuses on how changing weather patterns affect farming and food production."
        },
        {
            id: "en_009", subject: "english", topic: "Oral Forms", year: "2024",
            question: "The expression 'He has a heart of stone' is an example of...",
            options: { A: "Simile", B: "Metaphor", C: "Personification", D: "Hyperbole" },
            answer: "B", explanation: "A metaphor directly compares two unlike things without using 'like' or 'as'."
        },
        {
            id: "en_010", subject: "english", topic: "Lexis", year: "2023",
            question: "The word 'Ubiquitous' means...",
            options: { A: "Rare", B: "Everywhere", C: "Unique", D: "Ancient" },
            answer: "B", explanation: "Ubiquitous means present, appearing, or found everywhere."
        },
        {
            id: "en_011", subject: "english", topic: "Structure", year: "2022",
            question: "If I _______ the answer, I would tell you.",
            options: { A: "know", B: "knew", C: "had known", D: "knows" },
            answer: "B", explanation: "This is a Type 2 conditional (unreal present). Use past simple in the if-clause."
        },
        {
            id: "en_012", subject: "english", topic: "Comprehension", year: "2024",
            question: "The tone of the author in the last paragraph is...",
            options: { A: "Humorous", B: "Sarcastic", C: "Optimistic", D: "Pessimistic" },
            answer: "C", explanation: "The author uses words of hope and encouragement, indicating an optimistic tone."
        },
        {
            id: "en_013", subject: "english", topic: "Essay", year: "2023",
            question: "Which of the following is the most appropriate title for an essay about the advantages and disadvantages of social media?",
            options: { A: "Social Media is Bad", B: "The Double-Edged Sword: Social Media", C: "Why I Love Social Media", D: "The Internet" },
            answer: "B", explanation: "A balanced essay title should reflect both sides of the argument."
        },
        {
            id: "en_014", subject: "english", topic: "Lexis", year: "2022",
            question: "A person who writes plays is called a...",
            options: { A: "Poet", B: "Playwright", C: "Novelist", D: "Essayist" },
            answer: "B", explanation: "A playwright is a person who writes plays."
        },
        {
            id: "en_015", subject: "english", topic: "Oral Forms", year: "2024",
            question: "Alliteration is the repetition of...",
            options: { A: "Vowel sounds", B: "Consonant sounds at the beginning of words", C: "Whole words", D: "Rhyming words" },
            answer: "B", explanation: "Alliteration is the occurrence of the same letter or sound at the beginning of adjacent or closely connected words."
        },
        {
            id: "en_016", subject: "english", topic: "Structure", year: "2023",
            question: "The boys prefer playing football _______ watching television.",
            options: { A: "than", B: "to", C: "against", D: "from" },
            answer: "B", explanation: "The correct structure is 'prefer...to' when comparing two gerunds."
        },
        {
            id: "en_017", subject: "english", topic: "Comprehension", year: "2022",
            question: "The passage suggests that the main character is...",
            options: { A: "Dishonest", B: "Ambitious", C: "Lazy", D: "Cowardly" },
            answer: "B", explanation: "The character's actions throughout the passage show determination to achieve goals."
        },
        {
            id: "en_018", subject: "english", topic: "Lexis", year: "2024",
            question: "Choose the correctly spelt word:",
            options: { A: "Accomodate", B: "Accommodate", C: "Acommodate", D: "Accomadate" },
            answer: "B", explanation: "Accommodate is spelled with two c's and two m's."
        },
        {
            id: "en_019", subject: "english", topic: "Summary", year: "2023",
            question: "The passage is mainly about...",
            options: { A: "How to cook", B: "The importance of time management", C: "Nigerian history", D: "Space exploration" },
            answer: "B", explanation: "The passage discusses various strategies for managing time effectively."
        },
        {
            id: "en_020", subject: "english", topic: "Oral Forms", year: "2022",
            question: "A poem of fourteen lines with a specific rhyme scheme is called a...",
            options: { A: "Sonnet", B: "Ode", C: "Elegy", D: "Limerick" },
            answer: "A", explanation: "A sonnet is a 14-line poem with a specific rhyme scheme."
        },

        // ==================== MATHEMATICS (20 questions) ====================
        {
            id: "math_001", subject: "mathematics", topic: "Algebra", year: "2024",
            question: "If 2x + 5 = 13, find the value of x.",
            options: { A: "3", B: "4", C: "5", D: "6" },
            answer: "B", explanation: "2x = 13 - 5 = 8, therefore x = 4."
        },
        {
            id: "math_002", subject: "mathematics", topic: "Calculus", year: "2024",
            question: "Find the derivative of f(x) = 3x² + 2x - 5.",
            options: { A: "6x + 2", B: "3x + 2", C: "6x - 5", D: "6x² + 2" },
            answer: "A", explanation: "Using the power rule: d/dx(3x²) = 6x, d/dx(2x) = 2, d/dx(-5) = 0. So f'(x) = 6x + 2."
        },
        {
            id: "math_003", subject: "mathematics", topic: "Geometry", year: "2023",
            question: "The interior angles of a triangle are in the ratio 2:3:4. Find the largest angle.",
            options: { A: "40°", B: "60°", C: "80°", D: "100°" },
            answer: "C", explanation: "Sum of ratio parts = 9. Largest angle = (4/9) × 180° = 80°."
        },
        {
            id: "math_004", subject: "mathematics", topic: "Statistics", year: "2023",
            question: "Find the mean of the following data: 5, 8, 12, 15, 20.",
            options: { A: "10", B: "12", C: "15", D: "20" },
            answer: "B", explanation: "Mean = (5+8+12+15+20)/5 = 60/5 = 12."
        },
        {
            id: "math_005", subject: "mathematics", topic: "Probability", year: "2022",
            question: "A fair die is thrown once. What is the probability of getting a prime number?",
            options: { A: "1/2", B: "1/3", C: "2/3", D: "1/6" },
            answer: "A", explanation: "Prime numbers on a die: 2, 3, 5. Probability = 3/6 = 1/2."
        },
        {
            id: "math_006", subject: "mathematics", topic: "Trigonometry", year: "2022",
            question: "If sin θ = 3/5 and θ is acute, find cos θ.",
            options: { A: "3/5", B: "4/5", C: "5/4", D: "5/3" },
            answer: "B", explanation: "Using sin²θ + cos²θ = 1: cos²θ = 1 - (9/25) = 16/25. cos θ = 4/5."
        },
        {
            id: "math_007", subject: "mathematics", topic: "Mensuration", year: "2024",
            question: "Find the volume of a cylinder with radius 7cm and height 10cm. (Take π = 22/7)",
            options: { A: "1540 cm³", B: "2200 cm³", C: "154 cm³", D: "3080 cm³" },
            answer: "A", explanation: "V = πr²h = (22/7) × 7² × 10 = (22/7) × 49 × 10 = 22 × 7 × 10 = 1540 cm³."
        },
        {
            id: "math_008", subject: "mathematics", topic: "Algebra", year: "2023",
            question: "Solve for x: x² - 5x + 6 = 0",
            options: { A: "2 or 3", B: "-2 or -3", C: "1 or 6", D: "-1 or -6" },
            answer: "A", explanation: "Factorizing: (x-2)(x-3) = 0, so x = 2 or x = 3."
        },
        {
            id: "math_009", subject: "mathematics", topic: "Coordinate Geometry", year: "2022",
            question: "Find the gradient of the line joining points A(2, 3) and B(5, 9).",
            options: { A: "1", B: "2", C: "3", D: "4" },
            answer: "B", explanation: "Gradient = (9-3)/(5-2) = 6/3 = 2."
        },
        {
            id: "math_010", subject: "mathematics", topic: "Calculus", year: "2024",
            question: "Evaluate ∫(4x³ + 2x)dx",
            options: { A: "x⁴ + x² + C", B: "12x² + 2 + C", C: "x⁴ + x²", D: "4x⁴ + 2x² + C" },
            answer: "A", explanation: "∫4x³dx = x⁴, ∫2xdx = x². So answer is x⁴ + x² + C."
        },
        {
            id: "math_011", subject: "mathematics", topic: "Statistics", year: "2023",
            question: "Find the median of: 4, 7, 2, 9, 5, 1, 8",
            options: { A: "4", B: "5", C: "6", D: "7" },
            answer: "B", explanation: "Arranged: 1, 2, 4, 5, 7, 8, 9. Median (middle value) = 5."
        },
        {
            id: "math_012", subject: "mathematics", topic: "Probability", year: "2022",
            question: "Two coins are tossed once. What is the probability of getting two heads?",
            options: { A: "1/4", B: "1/2", C: "3/4", D: "1/3" },
            answer: "A", explanation: "Sample space: {HH, HT, TH, TT}. P(HH) = 1/4."
        },
        {
            id: "math_013", subject: "mathematics", topic: "Geometry", year: "2024",
            question: "The sum of the interior angles of a hexagon is...",
            options: { A: "540°", B: "720°", C: "900°", D: "1080°" },
            answer: "B", explanation: "Sum = (n-2) × 180° = (6-2) × 180° = 720°."
        },
        {
            id: "math_014", subject: "mathematics", topic: "Algebra", year: "2023",
            question: "If log₁₀2 = 0.3010 and log₁₀3 = 0.4771, find log₁₀6.",
            options: { A: "0.7781", B: "0.1761", C: "0.9030", D: "1.7781" },
            answer: "A", explanation: "log₁₀6 = log₁₀(2×3) = log₁₀2 + log₁₀3 = 0.3010 + 0.4771 = 0.7781."
        },
        {
            id: "math_015", subject: "mathematics", topic: "Mensuration", year: "2022",
            question: "The area of a circle is 154 cm². Find its radius. (Take π = 22/7)",
            options: { A: "3.5 cm", B: "7 cm", C: "14 cm", D: "49 cm" },
            answer: "B", explanation: "πr² = 154, r² = 154 × 7/22 = 49, r = 7 cm."
        },
        {
            id: "math_016", subject: "mathematics", topic: "Trigonometry", year: "2024",
            question: "Evaluate tan 45° + cos 60°",
            options: { A: "1", B: "1.5", C: "2", D: "0.5" },
            answer: "B", explanation: "tan 45° = 1, cos 60° = 0.5. Sum = 1.5."
        },
        {
            id: "math_017", subject: "mathematics", topic: "Coordinate Geometry", year: "2023",
            question: "Find the distance between points P(1, 2) and Q(4, 6).",
            options: { A: "3", B: "4", C: "5", D: "6" },
            answer: "C", explanation: "d = √[(4-1)² + (6-2)²] = √[9 + 16] = √25 = 5."
        },
        {
            id: "math_018", subject: "mathematics", topic: "Statistics", year: "2022",
            question: "The range of the data 5, 8, 12, 15, 20 is...",
            options: { A: "5", B: "12.5", C: "15", D: "20" },
            answer: "C", explanation: "Range = Maximum - Minimum = 20 - 5 = 15."
        },
        {
            id: "math_019", subject: "mathematics", topic: "Algebra", year: "2024",
            question: "Simplify: (2x²y)³",
            options: { A: "6x⁵y³", B: "8x⁶y³", C: "2x⁶y³", D: "8x⁵y³" },
            answer: "B", explanation: "(2x²y)³ = 2³ × x⁶ × y³ = 8x⁶y³."
        },
        {
            id: "math_020", subject: "mathematics", topic: "Probability", year: "2023",
            question: "A bag contains 3 red and 2 blue balls. If a ball is drawn at random, what is the probability that it is not red?",
            options: { A: "2/5", B: "3/5", C: "1/2", D: "1/5" },
            answer: "A", explanation: "P(not red) = P(blue) = 2/5."
        },

        // ==================== PHYSICS (20 questions) ====================
        {
            id: "phy_001", subject: "physics", topic: "Mechanics", year: "2024",
            question: "A body moving with uniform acceleration covers 36m in the 4th second and 48m in the 6th second. Find the acceleration.",
            options: { A: "3 m/s²", B: "4 m/s²", C: "6 m/s²", D: "12 m/s²" },
            answer: "C", explanation: "Using sₙ = u + a(n - 0.5): s₆ - s₄ = 2a = 12, therefore a = 6 m/s²."
        },
        {
            id: "phy_002", subject: "physics", topic: "Electricity", year: "2024",
            question: "Three resistors of 2Ω, 4Ω and 6Ω are connected in parallel. Find the equivalent resistance.",
            options: { A: "12Ω", B: "1.09Ω", C: "0.92Ω", D: "2Ω" },
            answer: "B", explanation: "1/R = 1/2 + 1/4 + 1/6 = 11/12. R = 12/11 ≈ 1.09Ω."
        },
        {
            id: "phy_003", subject: "physics", topic: "Waves", year: "2023",
            question: "The frequency of a wave is 50Hz and its wavelength is 4m. Calculate its velocity.",
            options: { A: "12.5 m/s", B: "54 m/s", C: "200 m/s", D: "400 m/s" },
            answer: "C", explanation: "v = fλ = 50 × 4 = 200 m/s."
        },
        {
            id: "phy_004", subject: "physics", topic: "Heat", year: "2023",
            question: "Calculate the heat required to raise the temperature of 2kg of water from 20°C to 80°C. (Specific heat capacity = 4200 J/kgK)",
            options: { A: "168 kJ", B: "336 kJ", C: "504 kJ", D: "672 kJ" },
            answer: "C", explanation: "Q = mcΔθ = 2 × 4200 × 60 = 504,000 J = 504 kJ."
        },
        {
            id: "phy_005", subject: "physics", topic: "Optics", year: "2022",
            question: "An object is placed 20cm from a concave mirror of focal length 15cm. Find the image distance.",
            options: { A: "30cm", B: "45cm", C: "60cm", D: "75cm" },
            answer: "C", explanation: "Using 1/f = 1/u + 1/v: 1/15 = 1/20 + 1/v. 1/v = 1/15 - 1/20 = 1/60. v = 60cm."
        },
        {
            id: "phy_006", subject: "physics", topic: "Mechanics", year: "2024",
            question: "A force of 20N acts on a mass of 4kg. Calculate the acceleration produced.",
            options: { A: "2 m/s²", B: "4 m/s²", C: "5 m/s²", D: "80 m/s²" },
            answer: "C", explanation: "F = ma, a = F/m = 20/4 = 5 m/s²."
        },
        {
            id: "phy_007", subject: "physics", topic: "Magnetism", year: "2023",
            question: "The region around a magnet where its influence can be felt is called...",
            options: { A: "Magnetic field", B: "Electric field", C: "Gravitational field", D: "Electromagnetic field" },
            answer: "A", explanation: "A magnetic field is the region around a magnet where magnetic forces act."
        },
        {
            id: "phy_008", subject: "physics", topic: "Modern Physics", year: "2022",
            question: "The process by which a heavy nucleus splits into lighter nuclei is called...",
            options: { A: "Fusion", B: "Fission", C: "Radioactivity", D: "Ionization" },
            answer: "B", explanation: "Nuclear fission is the splitting of a heavy nucleus into lighter nuclei."
        },
        {
            id: "phy_009", subject: "physics", topic: "Electricity", year: "2024",
            question: "The SI unit of electric charge is...",
            options: { A: "Volt", B: "Ampere", C: "Coulomb", D: "Ohm" },
            answer: "C", explanation: "The coulomb (C) is the SI unit of electric charge."
        },
        {
            id: "phy_010", subject: "physics", topic: "Waves", year: "2023",
            question: "Echo is caused by...",
            options: { A: "Refraction of sound", B: "Reflection of sound", C: "Diffraction of sound", D: "Interference of sound" },
            answer: "B", explanation: "An echo is the reflection of sound waves from a surface back to the listener."
        },
        {
            id: "phy_011", subject: "physics", topic: "Heat", year: "2022",
            question: "The boiling point of water at standard atmospheric pressure is...",
            options: { A: "0°C", B: "50°C", C: "100°C", D: "212°C" },
            answer: "C", explanation: "Water boils at 100°C at standard atmospheric pressure (1 atm or 101325 Pa)."
        },
        {
            id: "phy_012", subject: "physics", topic: "Mechanics", year: "2024",
            question: "The energy possessed by a body by virtue of its motion is called...",
            options: { A: "Potential energy", B: "Kinetic energy", C: "Thermal energy", D: "Chemical energy" },
            answer: "B", explanation: "Kinetic energy is the energy possessed by a body due to its motion. KE = ½mv²."
        },
        {
            id: "phy_013", subject: "physics", topic: "Optics", year: "2023",
            question: "A lens that is thicker at the center than at the edges is a...",
            options: { A: "Concave lens", B: "Convex lens", C: "Plane lens", D: "Cylindrical lens" },
            answer: "B", explanation: "A convex (converging) lens is thicker at the center than at the edges."
        },
        {
            id: "phy_014", subject: "physics", topic: "Nuclear Physics", year: "2022",
            question: "The half-life of a radioactive substance is the time taken for...",
            options: { A: "All atoms to decay", B: "Half of the atoms to decay", C: "Quarter of the atoms to decay", D: "Activity to double" },
            answer: "B", explanation: "Half-life is the time required for half of the radioactive atoms present to decay."
        },
        {
            id: "phy_015", subject: "physics", topic: "Electricity", year: "2024",
            question: "Ohm's Law states that...",
            options: { A: "V = IR", B: "V = I/R", C: "R = VI", D: "I = VR" },
            answer: "A", explanation: "Ohm's Law: V = IR, where V is voltage, I is current, and R is resistance."
        },
        {
            id: "phy_016", subject: "physics", topic: "Waves", year: "2023",
            question: "The audible frequency range for human hearing is...",
            options: { A: "0-20 Hz", B: "20-20,000 Hz", C: "20,000-40,000 Hz", D: "Above 40,000 Hz" },
            answer: "B", explanation: "Humans can typically hear sounds between 20 Hz and 20,000 Hz."
        },
        {
            id: "phy_017", subject: "physics", topic: "Mechanics", year: "2022",
            question: "The unit of power is...",
            options: { A: "Joule", B: "Watt", C: "Newton", D: "Pascal" },
            answer: "B", explanation: "Power is measured in watts (W). 1 W = 1 J/s."
        },
        {
            id: "phy_018", subject: "physics", topic: "Heat", year: "2024",
            question: "The instrument used to measure temperature is called a...",
            options: { A: "Barometer", B: "Thermometer", C: "Hygrometer", D: "Manometer" },
            answer: "B", explanation: "A thermometer is used to measure temperature."
        },
        {
            id: "phy_019", subject: "physics", topic: "Magnetism", year: "2023",
            question: "The Earth behaves as if it has a giant magnet with its magnetic pole near the...",
            options: { A: "Equator", B: "Geographic North Pole", C: "Geographic South Pole", D: "Tropic of Cancer" },
            answer: "B", explanation: "Earth's magnetic south pole is near the geographic North Pole, which is why compass needles point north."
        },
        {
            id: "phy_020", subject: "physics", topic: "Modern Physics", year: "2022",
            question: "The photoelectric effect demonstrates the...",
            options: { A: "Wave nature of light", B: "Particle nature of light", C: "Dual nature of matter", D: "Electromagnetic nature of light" },
            answer: "B", explanation: "The photoelectric effect supports the particle (photon) theory of light."
        },

        // ==================== CHEMISTRY (20 questions) ====================
        {
            id: "chem_001", subject: "chemistry", topic: "Stoichiometry", year: "2024",
            question: "How many moles of oxygen are required for the complete combustion of 2 moles of propane (C₃H₈)?",
            options: { A: "5 moles", B: "10 moles", C: "15 moles", D: "20 moles" },
            answer: "B", explanation: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. For 2 moles: 2 × 5 = 10 moles O₂."
        },
        {
            id: "chem_002", subject: "chemistry", topic: "Atomic Structure", year: "2024",
            question: "An element with atomic number 17 belongs to which group and period?",
            options: { A: "Group VII, Period 3", B: "Group I, Period 3", C: "Group VII, Period 2", D: "Group III, Period 3" },
            answer: "A", explanation: "Atomic number 17 is Chlorine. Electronic config: 2,8,7. Group VII (7 valence electrons), Period 3 (3 shells)."
        },
        {
            id: "chem_003", subject: "chemistry", topic: "Organic", year: "2023",
            question: "The IUPAC name of CH₃CH₂CH₂OH is...",
            options: { A: "Methanol", B: "Ethanol", C: "Propanol", D: "Butanol" },
            answer: "C", explanation: "3 carbon chain with OH group = propan-1-ol or simply propanol."
        },
        {
            id: "chem_004", subject: "chemistry", topic: "Physical", year: "2023",
            question: "Which of the following is NOT a colligative property?",
            options: { A: "Boiling point elevation", B: "Vapor pressure lowering", C: "Density", D: "Freezing point depression" },
            answer: "C", explanation: "Density is an intensive property of the substance itself, not dependent on the number of solute particles."
        },
        {
            id: "chem_005", subject: "chemistry", topic: "Inorganic", year: "2022",
            question: "Which gas is produced when dilute HCl reacts with zinc metal?",
            options: { A: "Oxygen", B: "Chlorine", C: "Hydrogen", D: "Nitrogen" },
            answer: "C", explanation: "Zn + 2HCl → ZnCl₂ + H₂. Hydrogen gas is evolved."
        },
        {
            id: "chem_006", subject: "chemistry", topic: "Electrochemistry", year: "2024",
            question: "In the electrolysis of dilute H₂SO₄ using platinum electrodes, the gas evolved at the anode is...",
            options: { A: "Hydrogen", B: "Oxygen", C: "Sulphur dioxide", D: "Chlorine" },
            answer: "B", explanation: "At the anode: 4OH⁻ → 2H₂O + O₂ + 4e⁻. Oxygen gas is evolved."
        },
        {
            id: "chem_007", subject: "chemistry", topic: "Chemical Equilibrium", year: "2023",
            question: "Le Chatelier's Principle states that if a dynamic equilibrium is disturbed by changing the conditions, the position of equilibrium moves to...",
            options: { A: "Prevent the change", B: "Counteract the change", C: "Accelerate the change", D: "Ignore the change" },
            answer: "B", explanation: "The system adjusts itself to counteract the disturbance and restore equilibrium."
        },
        {
            id: "chem_008", subject: "chemistry", topic: "Organic", year: "2022",
            question: "The functional group of alkanols is...",
            options: { A: "-COOH", B: "-OH", C: "-CHO", D: "-NH₂" },
            answer: "B", explanation: "Alkanols (alcohols) contain the hydroxyl (-OH) functional group."
        },
        {
            id: "chem_009", subject: "chemistry", topic: "Atomic Structure", year: "2024",
            question: "Isotopes of an element have the same number of...",
            options: { A: "Neutrons but different protons", B: "Protons but different neutrons", C: "Electrons but different protons", D: "Protons and neutrons" },
            answer: "B", explanation: "Isotopes have the same atomic number (protons) but different mass numbers (neutrons)."
        },
        {
            id: "chem_010", subject: "chemistry", topic: "Stoichiometry", year: "2023",
            question: "The relative molecular mass of H₂SO₄ is... (H=1, S=32, O=16)",
            options: { A: "49", B: "64", C: "81", D: "98" },
            answer: "D", explanation: "H₂SO₄ = (2×1) + 32 + (4×16) = 2 + 32 + 64 = 98."
        },
        {
            id: "chem_011", subject: "chemistry", topic: "Inorganic", year: "2022",
            question: "The chemical formula for rust is...",
            options: { A: "FeO", B: "Fe₂O₃", C: "Fe₃O₄", D: "Fe₂O₃·xH₂O" },
            answer: "D", explanation: "Rust is hydrated iron(III) oxide, Fe₂O₃·xH₂O."
        },
        {
            id: "chem_012", subject: "chemistry", topic: "Physical", year: "2024",
            question: "A catalyst increases the rate of a chemical reaction by...",
            options: { A: "Increasing the temperature", B: "Lowering the activation energy", C: "Increasing the concentration", D: "Changing the products" },
            answer: "B", explanation: "A catalyst provides an alternative reaction pathway with lower activation energy."
        },
        {
            id: "chem_013", subject: "chemistry", topic: "Organic", year: "2023",
            question: "The process of converting alkenes to alkanes is called...",
            options: { A: "Oxidation", B: "Hydrogenation", C: "Dehydration", D: "Substitution" },
            answer: "B", explanation: "Hydrogenation adds hydrogen to alkenes to form alkanes."
        },
        {
            id: "chem_014", subject: "chemistry", topic: "Electrochemistry", year: "2022",
            question: "The standard electrode potential of a hydrogen electrode is defined as...",
            options: { A: "1.0V", B: "0.0V", C: "-1.0V", D: "2.0V" },
            answer: "B", explanation: "The standard hydrogen electrode (SHE) has a potential of 0.0V by definition."
        },
        {
            id: "chem_015", subject: "chemistry", topic: "Atomic Structure", year: "2024",
            question: "The maximum number of electrons in the third shell (M-shell) is...",
            options: { A: "2", B: "8", C: "18", D: "32" },
            answer: "C", explanation: "Maximum electrons in a shell = 2n². For n=3: 2×9 = 18."
        },
        {
            id: "chem_016", subject: "chemistry", topic: "Inorganic", year: "2023",
            question: "Chlorine is used in water treatment to...",
            options: { A: "Remove hardness", B: "Kill bacteria", C: "Remove color", D: "Increase pH" },
            answer: "B", explanation: "Chlorine is a disinfectant that kills harmful bacteria in water."
        },
        {
            id: "chem_017", subject: "chemistry", topic: "Physical", year: "2022",
            question: "A solution with pH 7 is...",
            options: { A: "Acidic", B: "Basic", C: "Neutral", D: "Alkaline" },
            answer: "C", explanation: "pH 7 is neutral. Below 7 is acidic, above 7 is basic/alkaline."
        },
        {
            id: "chem_018", subject: "chemistry", topic: "Organic", year: "2024",
            question: "Esters are formed from the reaction between...",
            options: { A: "Alcohol and alkanoic acid", B: "Alkene and hydrogen", C: "Alkane and chlorine", D: "Alcohol and base" },
            answer: "A", explanation: "Esterification: Alcohol + Carboxylic acid → Ester + Water."
        },
        {
            id: "chem_019", subject: "chemistry", topic: "Stoichiometry", year: "2023",
            question: "How many atoms are present in 2 moles of CO₂?",
            options: { A: "3.6 × 10²⁴", B: "1.2 × 10²⁴", C: "6.02 × 10²³", D: "1.8 × 10²⁴" },
            answer: "A", explanation: "1 mole CO₂ = 3 moles atoms. 2 moles = 6 moles atoms = 6 × 6.02×10²³ = 3.6×10²⁴."
        },
        {
            id: "chem_020", subject: "chemistry", topic: "Inorganic", year: "2022",
            question: "The gas that turns moist red litmus paper blue is...",
            options: { A: "CO₂", B: "NH₃", C: "SO₂", D: "Cl₂" },
            answer: "B", explanation: "Ammonia (NH₃) is alkaline and turns red litmus paper blue."
        },

        // ==================== BIOLOGY (20 questions) ====================
        {
            id: "bio_001", subject: "biology", topic: "Cell Biology", year: "2024",
            question: "Which organelle is responsible for protein synthesis in the cell?",
            options: { A: "Mitochondria", B: "Ribosomes", C: "Golgi body", D: "Lysosomes" },
            answer: "B", explanation: "Ribosomes are the sites of protein synthesis, translating mRNA into proteins."
        },
        {
            id: "bio_002", subject: "biology", topic: "Genetics", year: "2024",
            question: "If a heterozygous tall plant (Tt) is crossed with a homozygous short plant (tt), what is the probability of tall offspring?",
            options: { A: "0%", B: "25%", C: "50%", D: "75%" },
            answer: "C", explanation: "Tt × tt gives Tt, Tt, tt, tt. 2 out of 4 are tall = 50%."
        },
        {
            id: "bio_003", subject: "biology", topic: "Ecology", year: "2023",
            question: "Which of the following is a biotic factor in an ecosystem?",
            options: { A: "Temperature", B: "Rainfall", C: "Predators", D: "Soil pH" },
            answer: "C", explanation: "Predators are living organisms, making them a biotic factor. Others are abiotic."
        },
        {
            id: "bio_004", subject: "biology", topic: "Physiology", year: "2023",
            question: "The process by which plants lose water through their leaves is called...",
            options: { A: "Respiration", B: "Transpiration", C: "Photosynthesis", D: "Guttation" },
            answer: "B", explanation: "Transpiration is the loss of water vapor from plant leaves through stomata."
        },
        {
            id: "bio_005", subject: "biology", topic: "Evolution", year: "2022",
            question: "The theory of evolution by natural selection was proposed by...",
            options: { A: "Gregor Mendel", B: "Charles Darwin", C: "Louis Pasteur", D: "Jean Lamarck" },
            answer: "B", explanation: "Charles Darwin proposed the theory of evolution by natural selection in 'On the Origin of Species' (1859)."
        },
        {
            id: "bio_006", subject: "biology", topic: "Microbiology", year: "2024",
            question: "Bacteria that can survive without oxygen are called...",
            options: { A: "Aerobic", B: "Anaerobic", C: "Facultative", D: "Obligate" },
            answer: "B", explanation: "Anaerobic organisms do not require oxygen for growth and may even die in its presence."
        },
        {
            id: "bio_007", subject: "biology", topic: "Plant Biology", year: "2023",
            question: "The tissue responsible for the transport of water in plants is...",
            options: { A: "Phloem", B: "Xylem", C: "Cambium", D: "Epidermis" },
            answer: "B", explanation: "Xylem transports water and minerals from roots to other parts of the plant."
        },
        {
            id: "bio_008", subject: "biology", topic: "Genetics", year: "2022",
            question: "DNA replication occurs during which phase of the cell cycle?",
            options: { A: "G1 phase", B: "S phase", C: "G2 phase", D: "M phase" },
            answer: "B", explanation: "The S (synthesis) phase is when DNA replication occurs."
        },
        {
            id: "bio_009", subject: "biology", topic: "Ecology", year: "2024",
            question: "A food chain always begins with...",
            options: { A: "Herbivores", B: "Carnivores", C: "Producers", D: "Decomposers" },
            answer: "C", explanation: "All food chains begin with producers (plants) that convert sunlight to energy."
        },
        {
            id: "bio_010", subject: "biology", topic: "Physiology", year: "2023",
            question: "The human heart has how many chambers?",
            options: { A: "2", B: "3", C: "4", D: "5" },
            answer: "C", explanation: "The human heart has 4 chambers: 2 atria and 2 ventricles."
        },
        {
            id: "bio_011", subject: "biology", topic: "Cell Biology", year: "2022",
            question: "The powerhouse of the cell is the...",
            options: { A: "Nucleus", B: "Mitochondria", C: "Ribosome", D: "Chloroplast" },
            answer: "B", explanation: "Mitochondria produce ATP through cellular respiration, earning the nickname 'powerhouse'."
        },
        {
            id: "bio_012", subject: "biology", topic: "Genetics", year: "2024",
            question: "A gene is a segment of...",
            options: { A: "Protein", B: "RNA", C: "DNA", D: "Lipid" },
            answer: "C", explanation: "A gene is a segment of DNA that codes for a specific protein or trait."
        },
        {
            id: "bio_013", subject: "biology", topic: "Evolution", year: "2023",
            question: "Fossils are found in...",
            options: { A: "Igneous rocks", B: "Sedimentary rocks", C: "Metamorphic rocks", D: "Magma" },
            answer: "B", explanation: "Fossils are most commonly found in sedimentary rocks which form in layers."
        },
        {
            id: "bio_014", subject: "biology", topic: "Ecology", year: "2022",
            question: "The largest ecosystem on Earth is the...",
            options: { A: "Forest", B: "Ocean", C: "Desert", D: "Grassland" },
            answer: "B", explanation: "The ocean covers about 71% of Earth's surface, making it the largest ecosystem."
        },
        {
            id: "bio_015", subject: "biology", topic: "Physiology", year: "2024",
            question: "The enzyme that digests starch in the mouth is...",
            options: { A: "Pepsin", B: "Amylase", C: "Lipase", D: "Trypsin" },
            answer: "B", explanation: "Salivary amylase (ptyalin) begins starch digestion in the mouth."
        },
        {
            id: "bio_016", subject: "biology", topic: "Plant Biology", year: "2023",
            question: "Photosynthesis occurs mainly in the...",
            options: { A: "Roots", B: "Stem", C: "Leaves", D: "Flowers" },
            answer: "C", explanation: "Leaves contain chloroplasts and are the primary site of photosynthesis."
        },
        {
            id: "bio_017", subject: "biology", topic: "Microbiology", year: "2022",
            question: "Which of the following is NOT a characteristic of living things?",
            options: { A: "Respiration", B: "Growth", C: "Decay", D: "Reproduction" },
            answer: "C", explanation: "Decay is a process that happens to dead organisms, not a characteristic of living things."
        },
        {
            id: "bio_018", subject: "biology", topic: "Genetics", year: "2024",
            question: "A karyotype is used to study...",
            options: { A: "Blood cells", B: "Chromosomes", C: "Bacteria", D: "Viruses" },
            answer: "B", explanation: "A karyotype is a visual profile of an individual's chromosomes."
        },
        {
            id: "bio_019", subject: "biology", topic: "Ecology", year: "2023",
            question: "The relationship between a bee and a flower is an example of...",
            options: { A: "Parasitism", B: "Commensalism", C: "Mutualism", D: "Predation" },
            answer: "C", explanation: "Both benefit: bee gets nectar, flower gets pollinated."
        },
        {
            id: "bio_020", subject: "biology", topic: "Physiology", year: "2022",
            question: "The hormone that regulates blood sugar level is...",
            options: { A: "Adrenaline", B: "Insulin", C: "Thyroxine", D: "Oestrogen" },
            answer: "B", explanation: "Insulin, produced by the pancreas, lowers blood glucose levels."
        },

        // ==================== GOVERNMENT (20 questions) ====================
        {
            id: "gov_001", subject: "government", topic: "Nigerian Politics", year: "2024",
            question: "The 1999 Constitution of Nigeria is based on which model?",
            options: { A: "Parliamentary", B: "Presidential", C: "Monarchical", D: "Confederal" },
            answer: "B", explanation: "The 1999 Constitution establishes a presidential system of government with separation of powers."
        },
        {
            id: "gov_002", subject: "government", topic: "Constitution", year: "2024",
            question: "Which of the following is a feature of federalism?",
            options: { A: "Unitary legislature", B: "Division of powers", C: "Sovereign local governments", D: "Unicameral legislature" },
            answer: "B", explanation: "Federalism is characterized by the division of powers between central and regional governments."
        },
        {
            id: "gov_003", subject: "government", topic: "Political Systems", year: "2023",
            question: "In a democracy, sovereignty resides with the...",
            options: { A: "Military", B: "People", C: "Monarch", D: "Judiciary" },
            answer: "B", explanation: "Democracy is defined as government of the people, by the people, for the people. Sovereignty belongs to the people."
        },
        {
            id: "gov_004", subject: "government", topic: "Citizenship", year: "2023",
            question: "Which of the following is NOT a condition for acquiring Nigerian citizenship by registration?",
            options: { A: "Good character", B: "Residence for 15 years", C: "Oath of allegiance", D: "Age of majority" },
            answer: "B", explanation: "For registration, one needs residence for 15 years OR marriage to a Nigerian citizen, not necessarily both."
        },
        {
            id: "gov_005", subject: "government", topic: "Foreign Policy", year: "2022",
            question: "Nigeria's foreign policy during the Murtala-Obasanjo era was characterized by...",
            options: { A: "Isolationism", B: "Afrocentrism", C: "Pro-Western alignment", D: "Non-alignment" },
            answer: "B", explanation: "The Murtala-Obasanjo era (1975-1979) was marked by an Afrocentric foreign policy focused on African liberation."
        },
        {
            id: "gov_006", subject: "government", topic: "Local Government", year: "2024",
            question: "The third tier of government in Nigeria is the...",
            options: { A: "State Government", B: "Local Government", C: "Federal Government", D: "Community Government" },
            answer: "B", explanation: "Nigeria operates a three-tier system: Federal, State, and Local Government."
        },
        {
            id: "gov_007", subject: "government", topic: "Elections", year: "2023",
            question: "The body responsible for conducting elections in Nigeria is...",
            options: { A: "NASS", B: "INEC", C: "EFCC", D: "ICPC" },
            answer: "B", explanation: "INEC (Independent National Electoral Commission) conducts elections in Nigeria."
        },
        {
            id: "gov_008", subject: "government", topic: "Constitution", year: "2022",
            question: "The supremacy of the constitution means that...",
            options: { A: "The president is above the law", B: "No one is above the constitution", C: "The military can override it", D: "Traditional rulers can amend it" },
            answer: "B", explanation: "Constitutional supremacy means the constitution is the highest law and no one is above it."
        },
        {
            id: "gov_009", subject: "government", topic: "Nigerian Politics", year: "2024",
            question: "Nigeria gained independence from Britain in...",
            options: { A: "1957", B: "1960", C: "1963", D: "1966" },
            answer: "B", explanation: "Nigeria gained independence from Britain on October 1, 1960."
        },
        {
            id: "gov_010", subject: "government", topic: "Political Systems", year: "2023",
            question: "A government that is ruled by a few wealthy people is called...",
            options: { A: "Democracy", B: "Aristocracy", C: "Plutocracy", D: "Theocracy" },
            answer: "C", explanation: "Plutocracy is government by the wealthy."
        },
        {
            id: "gov_011", subject: "government", topic: "Citizenship", year: "2022",
            question: "A citizen's right to vote and be voted for is called...",
            options: { A: "Right to life", B: "Right to fair hearing", C: "Right to vote", D: "Electoral right" },
            answer: "D", explanation: "The right to vote and be voted for is known as electoral right or suffrage."
        },
        {
            id: "gov_012", subject: "government", topic: "Foreign Policy", year: "2024",
            question: "ECOWAS stands for...",
            options: { A: "Economic Community of West African States", B: "Economic Council of West African States", C: "European Community of West African States", D: "Economic Community of West African Society" },
            answer: "A", explanation: "ECOWAS = Economic Community of West African States, founded in 1975."
        },
        {
            id: "gov_013", subject: "government", topic: "Constitution", year: "2023",
            question: "The arm of government that makes laws is the...",
            options: { A: "Executive", B: "Legislature", C: "Judiciary", D: "Bureaucracy" },
            answer: "B", explanation: "The legislature (National Assembly at federal level) is responsible for making laws."
        },
        {
            id: "gov_014", subject: "government", topic: "Local Government", year: "2022",
            question: "The head of a local government in Nigeria is called the...",
            options: { A: "Governor", B: "Chairman", C: "Councilor", D: "Speaker" },
            answer: "B", explanation: "The executive head of a Local Government Area (LGA) is the Chairman."
        },
        {
            id: "gov_015", subject: "government", topic: "Nigerian Politics", year: "2024",
            question: "The first military coup in Nigeria took place in...",
            options: { A: "1960", B: "1963", C: "1966", D: "1975" },
            answer: "C", explanation: "The first military coup in Nigeria occurred on January 15, 1966."
        },
        {
            id: "gov_016", subject: "government", topic: "Elections", year: "2023",
            question: "Universal Adult Suffrage means...",
            options: { A: "Only men can vote", B: "All adults can vote", C: "Only educated people can vote", D: "Only taxpayers can vote" },
            answer: "B", explanation: "Universal adult suffrage grants voting rights to all adult citizens regardless of gender, race, or status."
        },
        {
            id: "gov_017", subject: "government", topic: "Political Systems", year: "2022",
            question: "A system of government where power is inherited is called...",
            options: { A: "Democracy", B: "Republic", C: "Monarchy", D: "Federation" },
            answer: "C", explanation: "Monarchy is a system where the head of state is inherited, usually through a royal family."
        },
        {
            id: "gov_018", subject: "government", topic: "Constitution", year: "2024",
            question: "The Fundamental Human Rights are enshrined in Chapter _______ of the 1999 Constitution.",
            options: { A: "II", B: "III", C: "IV", D: "V" },
            answer: "C", explanation: "Fundamental Human Rights are in Chapter IV of the 1999 Constitution."
        },
        {
            id: "gov_019", subject: "government", topic: "Foreign Policy", year: "2023",
            question: "The African Union (AU) was formed in...",
            options: { A: "1999", B: "2000", C: "2001", D: "2002" },
            answer: "D", explanation: "The AU was launched on July 9, 2002 in Durban, South Africa, replacing the OAU."
        },
        {
            id: "gov_020", subject: "government", topic: "Nigerian Politics", year: "2022",
            question: "The National Assembly consists of the...",
            options: { A: "President and Senate", B: "Senate and House of Representatives", C: "Governors and House of Assembly", D: "Judges and Ministers" },
            answer: "B", explanation: "The National Assembly is bicameral, consisting of the Senate (upper house) and House of Representatives (lower house)."
        },

        // ==================== ECONOMICS (20 questions) ====================
        {
            id: "eco_001", subject: "economics", topic: "Microeconomics", year: "2024",
            question: "If demand increases while supply remains constant, the equilibrium price will...",
            options: { A: "Decrease", B: "Increase", C: "Remain unchanged", D: "Fluctuate" },
            answer: "B", explanation: "Increased demand with constant supply creates excess demand, pushing the equilibrium price up."
        },
        {
            id: "eco_002", subject: "economics", topic: "Macroeconomics", year: "2024",
            question: "The formula for calculating GDP using the expenditure approach is...",
            options: { A: "C + I + G + (X - M)", B: "C + I + G - (X + M)", C: "C - I + G + (X - M)", D: "C + I - G + (X - M)" },
            answer: "A", explanation: "GDP = Consumption + Investment + Government spending + (Exports - Imports)."
        },
        {
            id: "eco_003", subject: "economics", topic: "Money", year: "2023",
            question: "The central bank of Nigeria is responsible for all EXCEPT...",
            options: { A: "Issuing currency", B: "Setting monetary policy", C: "Granting loans to individuals", D: "Banker to the government" },
            answer: "C", explanation: "The CBN does not grant loans to individuals directly; commercial banks do that."
        },
        {
            id: "eco_004", subject: "economics", topic: "International Trade", year: "2023",
            question: "A country has a comparative advantage in producing a good if it...",
            options: { A: "Can produce more of it", B: "Has lower opportunity cost", C: "Has absolute advantage", D: "Has more resources" },
            answer: "B", explanation: "Comparative advantage exists when a country can produce a good at a lower opportunity cost than others."
        },
        {
            id: "eco_005", subject: "economics", topic: "Development", year: "2022",
            question: "Which of the following is a characteristic of a developing economy?",
            options: { A: "High per capita income", B: "Low population growth", C: "High dependence on primary products", D: "Advanced technology" },
            answer: "C", explanation: "Developing economies typically depend heavily on primary product exports with low value addition."
        },
        {
            id: "eco_006", subject: "economics", topic: "Microeconomics", year: "2024",
            question: "Price elasticity of demand measures...",
            options: { A: "Change in price", B: "Responsiveness of demand to price changes", C: "Total revenue", D: "Consumer surplus" },
            answer: "B", explanation: "Price elasticity of demand measures how much quantity demanded responds to a change in price."
        },
        {
            id: "eco_007", subject: "economics", topic: "Macroeconomics", year: "2023",
            question: "Inflation means a sustained increase in...",
            options: { A: "Production", B: "General price level", C: "Employment", D: "Exports" },
            answer: "B", explanation: "Inflation is a sustained increase in the general price level of goods and services."
        },
        {
            id: "eco_008", subject: "economics", topic: "Money", year: "2022",
            question: "The main function of money as a medium of exchange is to...",
            options: { A: "Store value", B: "Eliminate barter", C: "Measure value", D: "Transfer wealth" },
            answer: "B", explanation: "As a medium of exchange, money eliminates the need for barter (double coincidence of wants)."
        },
        {
            id: "eco_009", subject: "economics", topic: "International Trade", year: "2024",
            question: "A tax on imported goods is called...",
            options: { A: "Subsidy", B: "Tariff", C: "Quota", D: "Embargo" },
            answer: "B", explanation: "A tariff is a tax imposed on imported goods to protect domestic industries or raise revenue."
        },
        {
            id: "eco_010", subject: "economics", topic: "Development", year: "2023",
            question: "Human capital development refers to...",
            options: { A: "Building factories", B: "Investing in education and training", C: "Mining natural resources", D: "Constructing roads" },
            answer: "B", explanation: "Human capital development involves improving skills, education, and health of the workforce."
        },
        {
            id: "eco_011", subject: "economics", topic: "Agriculture", year: "2022",
            question: "The main problem of agricultural development in Nigeria is...",
            options: { A: "Too much rainfall", B: "Over-mechanization", C: "Land tenure system", D: "Excess labor" },
            answer: "C", explanation: "The land tenure system in Nigeria often prevents efficient use of agricultural land."
        },
        {
            id: "eco_012", subject: "economics", topic: "Public Finance", year: "2024",
            question: "The main source of government revenue in Nigeria is...",
            options: { A: "Income tax", B: "Petroleum", C: "Tourism", D: "Agriculture" },
            answer: "B", explanation: "Petroleum (oil) exports and royalties constitute the largest source of government revenue in Nigeria."
        },
        {
            id: "eco_013", subject: "economics", topic: "Microeconomics", year: "2023",
            question: "A monopoly is a market structure with...",
            options: { A: "Many sellers", B: "One seller", C: "Few sellers", D: "Two sellers" },
            answer: "B", explanation: "A monopoly exists when there is only one seller of a product with no close substitutes."
        },
        {
            id: "eco_014", subject: "economics", topic: "Macroeconomics", year: "2022",
            question: "Unemployment caused by economic recession is called...",
            options: { A: "Frictional unemployment", B: "Structural unemployment", C: "Cyclical unemployment", D: "Seasonal unemployment" },
            answer: "C", explanation: "Cyclical unemployment occurs due to downturns in the business cycle or recession."
        },
        {
            id: "eco_015", subject: "economics", topic: "Money", year: "2024",
            question: "The process of controlling the money supply to achieve economic objectives is called...",
            options: { A: "Fiscal policy", B: "Monetary policy", C: "Trade policy", D: "Exchange rate policy" },
            answer: "B", explanation: "Monetary policy involves managing interest rates and money supply to control inflation and stabilize currency."
        },
        {
            id: "eco_016", subject: "economics", topic: "International Trade", year: "2023",
            question: "Balance of trade is the difference between...",
            options: { A: "Total exports and total imports", B: "Government revenue and expenditure", C: "Savings and investment", D: "Income and consumption" },
            answer: "A", explanation: "Balance of trade = Value of exports - Value of imports."
        },
        {
            id: "eco_017", subject: "economics", topic: "Development", year: "2022",
            question: "GDP per capita is calculated by...",
            options: { A: "GDP × Population", B: "GDP ÷ Population", C: "GDP + Population", D: "GDP - Population" },
            answer: "B", explanation: "GDP per capita = GDP / Total Population. It measures average economic output per person."
        },
        {
            id: "eco_018", subject: "economics", topic: "Public Finance", year: "2024",
            question: "A budget deficit occurs when...",
            options: { A: "Revenue exceeds expenditure", B: "Expenditure exceeds revenue", C: "Revenue equals expenditure", D: "There is no expenditure" },
            answer: "B", explanation: "A budget deficit occurs when government spending exceeds its revenue."
        },
        {
            id: "eco_019", subject: "economics", topic: "Microeconomics", year: "2023",
            question: "The law of diminishing returns states that...",
            options: { A: "Output always increases", B: "As more variable input is added to fixed input, marginal product eventually decreases", C: "Cost always decreases", D: "Price always falls" },
            answer: "B", explanation: "The law states that adding more of a variable factor to fixed factors will eventually yield decreasing marginal returns."
        },
        {
            id: "eco_020", subject: "economics", topic: "Agriculture", year: "2022",
            question: "The marketing board in Nigeria was established to...",
            options: { A: "Import food", B: "Stabilize prices of agricultural produce", C: "Build houses", D: "Provide loans" },
            answer: "B", explanation: "Marketing boards were set up to stabilize prices and ensure fair returns to farmers."
        },

        // ==================== LITERATURE (20 questions) ====================
        {
            id: "lit_001", subject: "literature", topic: "Prose", year: "2024",
            question: "In Chinua Achebe's 'Things Fall Apart', Okonkwo is best described as...",
            options: { A: "A coward", B: "A tragic hero", C: "A comic character", D: "A static character" },
            answer: "B", explanation: "Okonkwo possesses a tragic flaw (fear of weakness) that leads to his downfall, fitting the tragic hero archetype."
        },
        {
            id: "lit_002", subject: "literature", topic: "Poetry", year: "2024",
            question: "A poem of fourteen lines is called a...",
            options: { A: "Ode", B: "Sonnet", C: "Elegy", D: "Ballad" },
            answer: "B", explanation: "A sonnet is a 14-line poem with a specific rhyme scheme, traditionally iambic pentameter."
        },
        {
            id: "lit_003", subject: "literature", topic: "Drama", year: "2023",
            question: "The central message or insight in a literary work is called the...",
            options: { A: "Plot", B: "Theme", C: "Setting", D: "Conflict" },
            answer: "B", explanation: "Theme is the central idea or message that the author wants to convey through the work."
        },
        {
            id: "lit_004", subject: "literature", topic: "African Writers", year: "2023",
            question: "Wole Soyinka was awarded the Nobel Prize in Literature in which year?",
            options: { A: "1983", B: "1986", C: "1988", D: "1991" },
            answer: "B", explanation: "Wole Soyinka became the first African to win the Nobel Prize in Literature in 1986."
        },
        {
            id: "lit_005", subject: "literature", topic: "Literary Terms", year: "2022",
            question: "A story that explains the origin of natural phenomena is called...",
            options: { A: "Legend", B: "Myth", C: "Folktale", D: "Fable" },
            answer: "B", explanation: "A myth is a traditional story, especially one concerning the early history of a people or explaining a natural phenomenon."
        },
        {
            id: "lit_006", subject: "literature", topic: "Shakespeare", year: "2024",
            question: "Romeo and Juliet is an example of a...",
            options: { A: "Comedy", B: "Tragedy", C: "History", D: "Romance" },
            answer: "B", explanation: "Romeo and Juliet is one of Shakespeare's most famous tragedies."
        },
        {
            id: "lit_007", subject: "literature", topic: "Prose", year: "2023",
            question: "The main character in a novel is called the...",
            options: { A: "Antagonist", B: "Protagonist", C: "Narrator", D: "Foil" },
            answer: "B", explanation: "The protagonist is the main character or hero of a literary work."
        },
        {
            id: "lit_008", subject: "literature", topic: "Poetry", year: "2022",
            question: "The repetition of consonant sounds at the beginning of words is called...",
            options: { A: "Assonance", B: "Alliteration", C: "Consonance", D: "Onomatopoeia" },
            answer: "B", explanation: "Alliteration is the repetition of the same initial consonant sound in nearby words."
        },
        {
            id: "lit_009", subject: "literature", topic: "Drama", year: "2024",
            question: "A long speech by one character in a play is called a...",
            options: { A: "Dialogue", B: "Monologue", C: "Soliloquy", D: "Aside" },
            answer: "B", explanation: "A monologue is a long speech by one actor in a play or movie."
        },
        {
            id: "lit_010", subject: "literature", topic: "Literary Terms", year: "2023",
            question: "The time and place in which a story occurs is called the...",
            options: { A: "Plot", B: "Setting", C: "Atmosphere", D: "Mood" },
            answer: "B", explanation: "Setting refers to where and when a story takes place."
        },
        {
            id: "lit_011", subject: "literature", topic: "African Writers", year: "2022",
            question: "The author of 'The Lion and the Jewel' is...",
            options: { A: "Chinua Achebe", B: "Wole Soyinka", C: "Ngugi wa Thiong'o", D: "Buchi Emecheta" },
            answer: "B", explanation: "The Lion and the Jewel is a play by Wole Soyinka, first performed in 1959."
        },
        {
            id: "lit_012", subject: "literature", topic: "Prose", year: "2024",
            question: "A character that changes throughout the story is called...",
            options: { A: "Static", B: "Dynamic", C: "Flat", D: "Stock" },
            answer: "B", explanation: "A dynamic character undergoes significant internal change throughout the story."
        },
        {
            id: "lit_013", subject: "literature", topic: "Poetry", year: "2023",
            question: "A group of lines in a poem is called a...",
            options: { A: "Verse", B: "Stanza", C: "Couplet", D: "Quatrain" },
            answer: "B", explanation: "A stanza is a grouped set of lines within a poem, usually set off by a blank line."
        },
        {
            id: "lit_014", subject: "literature", topic: "Drama", year: "2022",
            question: "The struggle between opposing forces in a story is called...",
            options: { A: "Climax", B: "Conflict", C: "Resolution", D: "Exposition" },
            answer: "B", explanation: "Conflict is the central struggle or problem that drives the narrative."
        },
        {
            id: "lit_015", subject: "literature", topic: "Shakespeare", year: "2024",
            question: "The tragic flaw of Macbeth is...",
            options: { A: "Cowardice", B: "Excessive ambition", C: "Laziness", D: "Honesty" },
            answer: "B", explanation: "Macbeth's tragic flaw is his 'vaulting ambition' which leads him to murder and tyranny."
        },
        {
            id: "lit_016", subject: "literature", topic: "Literary Terms", year: "2023",
            question: "A comparison using 'like' or 'as' is called...",
            options: { A: "Metaphor", B: "Simile", C: "Personification", D: "Hyperbole" },
            answer: "B", explanation: "A simile compares two things using 'like' or 'as'."
        },
        {
            id: "lit_017", subject: "literature", topic: "African Writers", year: "2022",
            question: "'No Longer at Ease' was written by...",
            options: { A: "Wole Soyinka", B: "Chinua Achebe", C: "Cyprian Ekwensi", D: "Ayi Kwei Armah" },
            answer: "B", explanation: "No Longer at Ease (1960) is a novel by Chinua Achebe, sequel to Things Fall Apart."
        },
        {
            id: "lit_018", subject: "literature", topic: "Prose", year: "2024",
            question: "The highest point of tension in a story is called the...",
            options: { A: "Exposition", B: "Rising action", C: "Climax", D: "Falling action" },
            answer: "C", explanation: "The climax is the turning point or moment of greatest tension in a narrative."
        },
        {
            id: "lit_019", subject: "literature", topic: "Poetry", year: "2023",
            question: "An elegy is a poem written to...",
            options: { A: "Celebrate a wedding", B: "Mourn the dead", C: "Praise a hero", D: "Describe nature" },
            answer: "B", explanation: "An elegy is a mournful, melancholic poem, especially a funeral song or lament for the dead."
        },
        {
            id: "lit_020", subject: "literature", topic: "Drama", year: "2022",
            question: "A play that ends happily is called a...",
            options: { A: "Tragedy", B: "Comedy", C: "Farce", D: "Melodrama" },
            answer: "B", explanation: "A comedy is a play characterized by humor and a happy ending."
        },

        // ==================== CRS (20 questions) ====================
        {
            id: "crs_001", subject: "crs", topic: "Synoptic Gospels", year: "2024",
            question: "The baptism of Jesus took place at the River...",
            options: { A: "Nile", B: "Jordan", C: "Euphrates", D: "Tigris" },
            answer: "B", explanation: "Jesus was baptized by John the Baptist in the River Jordan (Matthew 3:13-17)."
        },
        {
            id: "crs_002", subject: "crs", topic: "Pauline Epistles", year: "2024",
            question: "Paul's missionary journey to Rome was as a...",
            options: { A: "Free man", B: "Prisoner", C: "Missionary", D: "Merchant" },
            answer: "B", explanation: "Paul traveled to Rome as a prisoner to appeal his case to Caesar (Acts 25-28)."
        },
        {
            id: "crs_003", subject: "crs", topic: "Old Testament", year: "2023",
            question: "The Ten Commandments were given to Moses on Mount...",
            options: { A: "Carmel", B: "Sinai", C: "Zion", D: "Olives" },
            answer: "B", explanation: "God gave Moses the Ten Commandments on Mount Sinai (Exodus 19-20)."
        },
        {
            id: "crs_004", subject: "crs", topic: "Acts", year: "2023",
            question: "On the Day of Pentecost, the disciples spoke in...",
            options: { A: "Hebrew only", B: "Greek only", C: "Other tongues", D: "Silence" },
            answer: "C", explanation: "The Holy Spirit enabled the disciples to speak in other tongues (Acts 2:4)."
        },
        {
            id: "crs_005", subject: "crs", topic: "Christian Living", year: "2022",
            question: "The fruit of the Spirit does NOT include...",
            options: { A: "Love", B: "Joy", C: "Envy", D: "Peace" },
            answer: "C", explanation: "Galatians 5:22-23 lists love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control. Envy is a work of the flesh."
        },
        {
            id: "crs_006", subject: "crs", topic: "Parables", year: "2024",
            question: "In the parable of the sower, the seed that fell on good soil represents...",
            options: { A: "Those who hear but don't understand", B: "Those who hear and produce fruit", C: "Those who fall away during persecution", D: "Those choked by worldly cares" },
            answer: "B", explanation: "The good soil represents those who hear the word, understand it, and produce a crop (Matthew 13:23)."
        },
        {
            id: "crs_007", subject: "crs", topic: "Miracles", year: "2023",
            question: "Jesus turned water into wine at the wedding in...",
            options: { A: "Bethany", B: "Cana", C: "Capernaum", D: "Nazareth" },
            answer: "B", explanation: "Jesus' first miracle was turning water into wine at a wedding in Cana of Galilee (John 2:1-11)."
        },
        {
            id: "crs_008", subject: "crs", topic: "Old Testament", year: "2022",
            question: "The first king of Israel was...",
            options: { A: "David", B: "Solomon", C: "Saul", D: "Samuel" },
            answer: "C", explanation: "Saul was anointed by Samuel as the first king of Israel (1 Samuel 10:1)."
        },
        {
            id: "crs_009", subject: "crs", topic: "Pauline Epistles", year: "2024",
            question: "The 'Romans Road' refers to verses from the book of...",
            options: { A: "Romans", B: "Corinthians", C: "Galatians", D: "Ephesians" },
            answer: "A", explanation: "The Romans Road is a collection of verses from Romans that explain the path to salvation."
        },
        {
            id: "crs_010", subject: "crs", topic: "Synoptic Gospels", year: "2023",
            question: "The Sermon on the Mount is found in which Gospel?",
            options: { A: "Mark", B: "Luke", C: "Matthew", D: "John" },
            answer: "C", explanation: "The Sermon on the Mount is recorded in Matthew chapters 5-7."
        },
        {
            id: "crs_011", subject: "crs", topic: "Christian Living", year: "2022",
            question: "The Golden Rule states: 'Do to others what you would have them do to you.' This is found in...",
            options: { A: "Matthew 7:12", B: "John 3:16", C: "Romans 3:23", D: "Genesis 1:1" },
            answer: "A", explanation: "Matthew 7:12 records Jesus teaching the Golden Rule."
        },
        {
            id: "crs_012", subject: "crs", topic: "Acts", year: "2024",
            question: "The first Christian martyr was...",
            options: { A: "Paul", B: "Peter", C: "Stephen", D: "James" },
            answer: "C", explanation: "Stephen was stoned to death, becoming the first Christian martyr (Acts 7:54-60)."
        },
        {
            id: "crs_013", subject: "crs", topic: "Old Testament", year: "2023",
            question: "Joseph was sold into slavery by his...",
            options: { A: "Friends", B: "Brothers", C: "Enemies", D: "Strangers" },
            answer: "B", explanation: "Joseph's jealous brothers sold him to Ishmaelite traders (Genesis 37)."
        },
        {
            id: "crs_014", subject: "crs", topic: "Pauline Epistles", year: "2022",
            question: "Paul was converted on the road to...",
            options: { A: "Rome", B: "Damascus", C: "Jerusalem", D: "Athens" },
            answer: "B", explanation: "Paul encountered Christ on the road to Damascus (Acts 9:1-19)."
        },
        {
            id: "crs_015", subject: "crs", topic: "Synoptic Gospels", year: "2024",
            question: "The Last Supper took place during the feast of...",
            options: { A: "Tabernacles", B: "Passover", C: "Pentecost", D: "Trumpets" },
            answer: "B", explanation: "Jesus instituted the Lord's Supper during the Passover meal (Matthew 26:17-30)."
        },
        {
            id: "crs_016", subject: "crs", topic: "Christian Living", year: "2023",
            question: "The Lord's Prayer begins with...",
            options: { A: "Hail Mary", B: "Our Father", C: "Glory be", D: "Holy God" },
            answer: "B", explanation: "The Lord's Prayer begins 'Our Father in heaven, hallowed be your name' (Matthew 6:9)."
        },
        {
            id: "crs_017", subject: "crs", topic: "Acts", year: "2022",
            question: "Barnabas was known as the 'Son of...'",
            options: { A: "Thunder", B: "Encouragement", C: "Consolation", D: "Prophecy" },
            answer: "B", explanation: "Barnabas means 'son of encouragement' (Acts 4:36)."
        },
        {
            id: "crs_018", subject: "crs", topic: "Old Testament", year: "2024",
            question: "The Israelites wandered in the wilderness for...",
            options: { A: "10 years", B: "20 years", C: "40 years", D: "70 years" },
            answer: "C", explanation: "The Israelites wandered in the wilderness for 40 years (Numbers 14:33-34)."
        },
        {
            id: "crs_019", subject: "crs", topic: "Pauline Epistles", year: "2023",
            question: "The just shall live by faith is found in...",
            options: { A: "Romans 1:17", B: "John 3:16", C: "Psalm 23", D: "Proverbs 3:5" },
            answer: "A", explanation: "Romans 1:17 states 'The righteous will live by faith.'"
        },
        {
            id: "crs_020", subject: "crs", topic: "Christian Living", year: "2022",
            question: "The greatest commandment is to...",
            options: { A: "Love your neighbor", B: "Love the Lord your God with all your heart", C: "Keep the Sabbath", D: "Honor your parents" },
            answer: "B", explanation: "Jesus said the greatest commandment is to love God with all your heart, soul, and mind (Matthew 22:37-38)."
        }
    ]
};

// Helper functions remain the same
JAMB_DATA.getQuestions = function(filters = {}) {
    let qs = this.questions;
    if (filters.subject) qs = qs.filter(q => q.subject === filters.subject);
    if (filters.topic) qs = qs.filter(q => q.topic === filters.topic);
    if (filters.year) qs = qs.filter(q => q.year === filters.year);
    if (filters.count) qs = qs.slice(0, filters.count);
    return qs;
};

JAMB_DATA.getSubjects = function() {
    return Object.keys(this.subjects).map(k => ({
        id: k,
        ...this.subjects[k]
    }));
};

JAMB_DATA.getTopics = function(subjectId) {
    return this.subjects[subjectId]?.topics || [];
};