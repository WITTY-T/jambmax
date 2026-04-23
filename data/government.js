const GOVERNMENT_DATA = {
    name: "Government",
    topics: ["Political Systems", "Constitution", "Citizenship", "Nigerian Politics", "Foreign Policy", "Local Government", "Elections", "Political Thought", "Public Administration", "International Organizations"],
    questions: [
        {
            id: "gov_001", topic: "Nigerian Politics", year: "2024",
            question: "The 1999 Constitution of Nigeria is based on which model?",
            options: { A: "Parliamentary", B: "Presidential", C: "Monarchical", D: "Confederal" },
            answer: "B", explanation: "The 1999 Constitution establishes a presidential system of government with separation of powers."
        },
        {
            id: "gov_002", topic: "Constitution", year: "2024",
            question: "Which of the following is a feature of federalism?",
            options: { A: "Unitary legislature", B: "Division of powers", C: "Sovereign local governments", D: "Unicameral legislature" },
            answer: "B", explanation: "Federalism is characterized by the division of powers between central and regional governments."
        },
        {
            id: "gov_003", topic: "Political Systems", year: "2023",
            question: "In a democracy, sovereignty resides with the...",
            options: { A: "Military", B: "People", C: "Monarch", D: "Judiciary" },
            answer: "B", explanation: "Democracy is defined as government of the people, by the people, for the people. Sovereignty belongs to the people."
        },
        {
            id: "gov_004", topic: "Citizenship", year: "2023",
            question: "Which of the following is NOT a condition for acquiring Nigerian citizenship by registration?",
            options: { A: "Good character", B: "Residence for 15 years", C: "Oath of allegiance", D: "Age of majority" },
            answer: "B", explanation: "For registration, one needs residence for 15 years OR marriage to a Nigerian citizen, not necessarily both."
        },
        {
            id: "gov_005", topic: "Foreign Policy", year: "2022",
            question: "Nigeria's foreign policy during the Murtala-Obasanjo era was characterized by...",
            options: { A: "Isolationism", B: "Afrocentrism", C: "Pro-Western alignment", D: "Non-alignment" },
            answer: "B", explanation: "The Murtala-Obasanjo era (1975-1979) was marked by an Afrocentric foreign policy focused on African liberation."
        },
        {
            id: "gov_006", topic: "Local Government", year: "2024",
            question: "The third tier of government in Nigeria is the...",
            options: { A: "State Government", B: "Local Government", C: "Federal Government", D: "Community Government" },
            answer: "B", explanation: "Nigeria operates a three-tier system: Federal, State, and Local Government."
        },
        {
            id: "gov_007", topic: "Elections", year: "2023",
            question: "The body responsible for conducting elections in Nigeria is...",
            options: { A: "NASS", B: "INEC", C: "EFCC", D: "ICPC" },
            answer: "B", explanation: "INEC (Independent National Electoral Commission) conducts elections in Nigeria."
        },
        {
            id: "gov_008", topic: "Constitution", year: "2022",
            question: "The supremacy of the constitution means that...",
            options: { A: "The president is above the law", B: "No one is above the constitution", C: "The military can override it", D: "Traditional rulers can amend it" },
            answer: "B", explanation: "Constitutional supremacy means the constitution is the highest law and no one is above it."
        },
        {
            id: "gov_009", topic: "Nigerian Politics", year: "2024",
            question: "Nigeria gained independence from Britain in...",
            options: { A: "1957", B: "1960", C: "1963", D: "1966" },
            answer: "B", explanation: "Nigeria gained independence from Britain on October 1, 1960."
        },
        {
            id: "gov_010", topic: "Political Systems", year: "2023",
            question: "A government that is ruled by a few wealthy people is called...",
            options: { A: "Democracy", B: "Aristocracy", C: "Plutocracy", D: "Theocracy" },
            answer: "C", explanation: "Plutocracy is government by the wealthy."
        },
        {
            id: "gov_011", topic: "Citizenship", year: "2022",
            question: "A citizen's right to vote and be voted for is called...",
            options: { A: "Right to life", B: "Right to fair hearing", C: "Right to vote", D: "Electoral right" },
            answer: "D", explanation: "The right to vote and be voted for is known as electoral right or suffrage."
        },
        {
            id: "gov_012", topic: "Foreign Policy", year: "2024",
            question: "ECOWAS stands for...",
            options: { A: "Economic Community of West African States", B: "Economic Council of West African States", C: "European Community of West African States", D: "Economic Community of West African Society" },
            answer: "A", explanation: "ECOWAS = Economic Community of West African States, founded in 1975."
        },
        {
            id: "gov_013", topic: "Constitution", year: "2023",
            question: "The arm of government that makes laws is the...",
            options: { A: "Executive", B: "Legislature", C: "Judiciary", D: "Bureaucracy" },
            answer: "B", explanation: "The legislature (National Assembly at federal level) is responsible for making laws."
        },
        {
            id: "gov_014", topic: "Local Government", year: "2022",
            question: "The head of a local government in Nigeria is called the...",
            options: { A: "Governor", B: "Chairman", C: "Councilor", D: "Speaker" },
            answer: "B", explanation: "The executive head of a Local Government Area (LGA) is the Chairman."
        },
        {
            id: "gov_015", topic: "Nigerian Politics", year: "2024",
            question: "The first military coup in Nigeria took place in...",
            options: { A: "1960", B: "1963", C: "1966", D: "1975" },
            answer: "C", explanation: "The first military coup in Nigeria occurred on January 15, 1966."
        },
        {
            id: "gov_016", topic: "Elections", year: "2023",
            question: "Universal Adult Suffrage means...",
            options: { A: "Only men can vote", B: "All adults can vote", C: "Only educated people can vote", D: "Only taxpayers can vote" },
            answer: "B", explanation: "Universal adult suffrage grants voting rights to all adult citizens regardless of gender, race, or status."
        },
        {
            id: "gov_017", topic: "Political Systems", year: "2022",
            question: "A system of government where power is inherited is called...",
            options: { A: "Democracy", B: "Republic", C: "Monarchy", D: "Federation" },
            answer: "C", explanation: "Monarchy is a system where the head of state is inherited, usually through a royal family."
        },
        {
            id: "gov_018", topic: "Constitution", year: "2024",
            question: "The Fundamental Human Rights are enshrined in Chapter _______ of the 1999 Constitution.",
            options: { A: "II", B: "III", C: "IV", D: "V" },
            answer: "C", explanation: "Fundamental Human Rights are in Chapter IV of the 1999 Constitution."
        },
        {
            id: "gov_019", topic: "Foreign Policy", year: "2023",
            question: "The African Union (AU) was formed in...",
            options: { A: "1999", B: "2000", C: "2001", D: "2002" },
            answer: "D", explanation: "The AU was launched on July 9, 2002 in Durban, South Africa, replacing the OAU."
        },
        {
            id: "gov_020", topic: "Nigerian Politics", year: "2022",
            question: "The National Assembly consists of the...",
            options: { A: "President and Senate", B: "Senate and House of Representatives", C: "Governors and House of Assembly", D: "Judges and Ministers" },
            answer: "B", explanation: "The National Assembly is bicameral, consisting of the Senate (upper house) and House of Representatives (lower house)."
        },
        {
            id: "gov_021", topic: "Political Thought", year: "2024",
            question: "Thomas Hobbes is best known for his theory of...",
            options: { A: "Social contract", B: "Divine right", C: "Separation of powers", D: "Popular sovereignty" },
            answer: "A", explanation: "Hobbes developed the social contract theory in his work 'Leviathan'."
        },
        {
            id: "gov_022", topic: "Public Administration", year: "2023",
            question: "The civil service is characterized by...",
            options: { A: "Political appointments", B: "Permanence and neutrality", C: "Temporary employment", D: "Partisan activities" },
            answer: "B", explanation: "The civil service is permanent, neutral, and operates based on merit and rules."
        },
        {
            id: "gov_023", topic: "International Organizations", year: "2022",
            question: "The United Nations was established in...",
            options: { A: "1919", B: "1945", C: "1950", D: "1960" },
            answer: "B", explanation: "The UN was established on October 24, 1945, after World War II."
        },
        {
            id: "gov_024", topic: "Political Systems", year: "2024",
            question: "In a unitary system of government, power is...",
            options: { A: "Divided between central and state governments", B: "Concentrated at the center", C: "Held by local governments", D: "Shared equally among regions" },
            answer: "B", explanation: "In a unitary system, all power is concentrated at the central government."
        },
        {
            id: "gov_025", topic: "Constitution", year: "2023",
            question: "An unwritten constitution is one that...",
            options: { A: "Does not exist", B: "Is not contained in a single document", C: "Is written in invisible ink", D: "Is kept secret" },
            answer: "B", explanation: "An unwritten constitution is derived from multiple sources (statutes, conventions, case law) rather than a single document."
        },
        {
            id: "gov_026", topic: "Nigerian Politics", year: "2022",
            question: "The Nigerian Civil War ended in...",
            options: { A: "1967", B: "1970", C: "1975", D: "1980" },
            answer: "B", explanation: "The Nigerian Civil War (Biafran War) ended on January 15, 1970."
        },
        {
            id: "gov_027", topic: "Local Government", year: "2024",
            question: "The 1976 Local Government Reform in Nigeria introduced...",
            options: { A: "Federal system", B: "Uniform local government system", C: "Parliamentary system", D: "Confederal system" },
            answer: "B", explanation: "The 1976 reform established a uniform system of local government throughout Nigeria."
        },
        {
            id: "gov_028", topic: "Elections", year: "2023",
            question: "Proportional representation is a system where...",
            options: { A: "Winner takes all", B: "Seats are allocated based on votes received", C: "Only two parties contest", D: "President appoints representatives" },
            answer: "B", explanation: "In proportional representation, parties receive seats proportional to their share of votes."
        },
        {
            id: "gov_029", topic: "Foreign Policy", year: "2022",
            question: "The Commonwealth of Nations is headed by...",
            options: { A: "The UN Secretary-General", B: "The British Monarch", C: "An elected president", D: "The AU Chairperson" },
            answer: "B", explanation: "The British Monarch is the ceremonial head of the Commonwealth."
        },
        {
            id: "gov_030", topic: "Political Thought", year: "2024",
            question: "John Locke advocated for...",
            options: { A: "Absolute monarchy", B: "Natural rights and limited government", C: "Dictatorship", D: "Theocracy" },
            answer: "B", explanation: "Locke advocated for natural rights (life, liberty, property) and limited government."
        },
        {
            id: "gov_031", topic: "Public Administration", year: "2023",
            question: "Bureaucracy is characterized by all EXCEPT...",
            options: { A: "Hierarchy", B: "Rules and regulations", C: "Flexibility", D: "Impersonality" },
            answer: "C", explanation: "Bureaucracy is rule-based and formal, not flexible."
        },
        {
            id: "gov_032", topic: "International Organizations", year: "2022",
            question: "The headquarters of the United Nations is in...",
            options: { A: "London", B: "Geneva", C: "New York", D: "Paris" },
            answer: "C", explanation: "The UN headquarters is located in New York City, USA."
        },
        {
            id: "gov_033", topic: "Political Systems", year: "2024",
            question: "A confederal system of government is one in which...",
            options: { A: "States are sovereign and delegate limited powers to the center", B: "Power is concentrated at the center", C: "There is no central government", D: "Only one party exists" },
            answer: "A", explanation: "In a confederation, member states retain sovereignty and the central government has limited powers."
        },
        {
            id: "gov_034", topic: "Constitution", year: "2023",
            question: "Judicial review is the power of the court to...",
            options: { A: "Make laws", B: "Declare laws unconstitutional", C: "Appoint judges", D: "Amend the constitution" },
            answer: "B", explanation: "Judicial review allows courts to examine and invalidate laws that violate the constitution."
        },
        {
            id: "gov_035", topic: "Nigerian Politics", year: "2022",
            question: "The first republic of Nigeria lasted from...",
            options: { A: "1957-1960", B: "1960-1966", C: "1963-1966", D: "1979-1983" },
            answer: "B", explanation: "The First Republic lasted from independence in 1960 until the 1966 coup."
        },
        {
            id: "gov_036", topic: "Citizenship", year: "2024",
            question: "Dual citizenship means...",
            options: { A: "Being a citizen of two countries", B: "Having two passports", C: "Living in two places", D: "Being married to a foreigner" },
            answer: "A", explanation: "Dual citizenship is the status of being a citizen of two countries simultaneously."
        },
        {
            id: "gov_037", topic: "Local Government", year: "2023",
            question: "The functions of local government include all EXCEPT...",
            options: { A: "Collection of rates", B: "Issuance of international passports", C: "Registration of births and deaths", D: "Establishment of markets" },
            answer: "B", explanation: "Issuance of international passports is a federal function, not local government."
        },
        {
            id: "gov_038", topic: "Elections", year: "2022",
            question: "A referendum is...",
            options: { A: "An election of representatives", B: "A direct vote by the electorate on a specific issue", C: "A judicial process", D: "A military takeover" },
            answer: "B", explanation: "A referendum is a direct vote in which the entire electorate is asked to accept or reject a particular proposal."
        },
        {
            id: "gov_039", topic: "Foreign Policy", year: "2024",
            question: "The principle of non-alignment means...",
            options: { A: "Aligning with all nations", B: "Not taking sides with any power bloc", C: "Aligning with the strongest nation", D: "Isolating from all nations" },
            answer: "B", explanation: "Non-alignment means not formally aligning with or against any major power bloc."
        },
        {
            id: "gov_040", topic: "Political Thought", year: "2023",
            question: "Karl Marx is associated with...",
            options: { A: "Capitalism", B: "Communism", C: "Liberalism", D: "Fascism" },
            answer: "B", explanation: "Karl Marx developed the theory of communism and wrote 'The Communist Manifesto'."
        },
        {
            id: "gov_041", topic: "Public Administration", year: "2022",
            question: "The main function of the public service commission is to...",
            options: { A: "Make laws", B: "Recruit and discipline civil servants", C: "Conduct elections", D: "Judge criminal cases" },
            answer: "B", explanation: "The public service commission is responsible for recruitment, promotion, and discipline of civil servants."
        },
        {
            id: "gov_042", topic: "International Organizations", year: "2024",
            question: "NATO stands for...",
            options: { A: "North Atlantic Treaty Organization", B: "National African Trade Organization", C: "New Alliance for Trade Operations", D: "Northern Alliance Treaty Organization" },
            answer: "A", explanation: "NATO = North Atlantic Treaty Organization, a military alliance established in 1949."
        },
        {
            id: "gov_043", topic: "Political Systems", year: "2023",
            question: "A totalitarian government is one that...",
            options: { A: "Respects individual rights", B: "Controls all aspects of public and private life", C: "Shares power with opposition", D: "Holds free elections" },
            answer: "B", explanation: "Totalitarianism is a system where the state holds total authority over all aspects of public and private life."
        },
        {
            id: "gov_044", topic: "Constitution", year: "2022",
            question: "The rule of law means...",
            options: { A: "Lawyers make all decisions", B: "Everyone is subject to the law", C: "Only judges know the law", D: "Laws are made by the people" },
            answer: "B", explanation: "Rule of law means all individuals and institutions are accountable to laws that are fairly applied."
        },
        {
            id: "gov_045", topic: "Nigerian Politics", year: "2024",
            question: "The Fourth Republic began in...",
            options: { A: "1993", B: "1999", C: "2003", D: "2007" },
            answer: "B", explanation: "The Fourth Republic began on May 29, 1999, with the inauguration of President Olusegun Obasanjo."
        },
        {
            id: "gov_046", topic: "Citizenship", year: "2023",
            question: "A stateless person is one who...",
            options: { A: "Has no home", B: "Is not recognized as a citizen by any state", C: "Lives in another country", D: "Has renounced citizenship" },
            answer: "B", explanation: "A stateless person is not considered a national by any state under its law."
        },
        {
            id: "gov_047", topic: "Local Government", year: "2022",
            question: "The number of local government areas in Nigeria is...",
            options: { A: "360", B: "774", C: "812", D: "36" },
            answer: "B", explanation: "Nigeria has 774 Local Government Areas (LGAs)."
        },
        {
            id: "gov_048", topic: "Elections", year: "2024",
            question: "An election petition tribunal is...",
            options: { A: "A campaign office", B: "A court that hears election disputes", C: "A polling station", D: "A political party office" },
            answer: "B", explanation: "Election petition tribunals are special courts established to hear and determine disputes arising from elections."
        },
        {
            id: "gov_049", topic: "Foreign Policy", year: "2023",
            question: "The principle of territorial integrity means...",
            options: { A: "States can invade each other", B: "States should respect each other's borders", C: "Borders are not important", D: "Only strong states have borders" },
            answer: "B", explanation: "Territorial integrity is the principle that states should not attempt to promote secessionist movements or border changes in other states."
        },
        {
            id: "gov_050", topic: "Political Thought", year: "2022",
            question: "Montesquieu is famous for the theory of...",
            options: { A: "Social contract", B: "Separation of powers", C: "Divine right", D: "Popular sovereignty" },
            answer: "B", explanation: "Montesquieu advocated for the separation of powers into executive, legislative, and judicial branches."
        }
    ]
};