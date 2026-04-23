const CRS_DATA = {
    name: "CRS",
    topics: ["Synoptic Gospels", "Acts", "Pauline Epistles", "Old Testament", "Christian Living", "Parables", "Miracles", "Church History", "Ethics", "Apocalyptic Literature"],
    questions: [
        {
            id: "crs_001", topic: "Synoptic Gospels", year: "2024",
            question: "The baptism of Jesus took place at the River...",
            options: { A: "Nile", B: "Jordan", C: "Euphrates", D: "Tigris" },
            answer: "B", explanation: "Jesus was baptized by John the Baptist in the River Jordan (Matthew 3:13-17)."
        },
        {
            id: "crs_002", topic: "Pauline Epistles", year: "2024",
            question: "Paul's missionary journey to Rome was as a...",
            options: { A: "Free man", B: "Prisoner", C: "Missionary", D: "Merchant" },
            answer: "B", explanation: "Paul traveled to Rome as a prisoner to appeal his case to Caesar (Acts 25-28)."
        },
        {
            id: "crs_003", topic: "Old Testament", year: "2023",
            question: "The Ten Commandments were given to Moses on Mount...",
            options: { A: "Carmel", B: "Sinai", C: "Zion", D: "Olives" },
            answer: "B", explanation: "God gave Moses the Ten Commandments on Mount Sinai (Exodus 19-20)."
        },
        {
            id: "crs_004", topic: "Acts", year: "2023",
            question: "On the Day of Pentecost, the disciples spoke in...",
            options: { A: "Hebrew only", B: "Greek only", C: "Other tongues", D: "Silence" },
            answer: "C", explanation: "The Holy Spirit enabled the disciples to speak in other tongues (Acts 2:4)."
        },
        {
            id: "crs_005", topic: "Christian Living", year: "2022",
            question: "The fruit of the Spirit does NOT include...",
            options: { A: "Love", B: "Joy", C: "Envy", D: "Peace" },
            answer: "C", explanation: "Galatians 5:22-23 lists love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control. Envy is a work of the flesh."
        },
        {
            id: "crs_006", topic: "Parables", year: "2024",
            question: "In the parable of the sower, the seed that fell on good soil represents...",
            options: { A: "Those who hear but don't understand", B: "Those who hear and produce fruit", C: "Those who fall away during persecution", D: "Those choked by worldly cares" },
            answer: "B", explanation: "The good soil represents those who hear the word, understand it, and produce a crop (Matthew 13:23)."
        },
        {
            id: "crs_007", topic: "Miracles", year: "2023",
            question: "Jesus turned water into wine at the wedding in...",
            options: { A: "Bethany", B: "Cana", C: "Capernaum", D: "Nazareth" },
            answer: "B", explanation: "Jesus' first miracle was turning water into wine at a wedding in Cana of Galilee (John 2:1-11)."
        },
        {
            id: "crs_008", topic: "Old Testament", year: "2022",
            question: "The first king of Israel was...",
            options: { A: "David", B: "Solomon", C: "Saul", D: "Samuel" },
            answer: "C", explanation: "Saul was anointed by Samuel as the first king of Israel (1 Samuel 10:1)."
        },
        {
            id: "crs_009", topic: "Pauline Epistles", year: "2024",
            question: "The 'Romans Road' refers to verses from the book of...",
            options: { A: "Romans", B: "Corinthians", C: "Galatians", D: "Ephesians" },
            answer: "A", explanation: "The Romans Road is a collection of verses from Romans that explain the path to salvation."
        },
        {
            id: "crs_010", topic: "Synoptic Gospels", year: "2023",
            question: "The Sermon on the Mount is found in which Gospel?",
            options: { A: "Mark", B: "Luke", C: "Matthew", D: "John" },
            answer: "C", explanation: "The Sermon on the Mount is recorded in Matthew chapters 5-7."
        },
        {
            id: "crs_011", topic: "Christian Living", year: "2022",
            question: "The Golden Rule states: 'Do to others what you would have them do to you.' This is found in...",
            options: { A: "Matthew 7:12", B: "John 3:16", C: "Romans 3:23", D: "Genesis 1:1" },
            answer: "A", explanation: "Matthew 7:12 records Jesus teaching the Golden Rule."
        },
        {
            id: "crs_012", topic: "Acts", year: "2024",
            question: "The first Christian martyr was...",
            options: { A: "Paul", B: "Peter", C: "Stephen", D: "James" },
            answer: "C", explanation: "Stephen was stoned to death, becoming the first Christian martyr (Acts 7:54-60)."
        },
        {
            id: "crs_013", topic: "Old Testament", year: "2023",
            question: "Joseph was sold into slavery by his...",
            options: { A: "Friends", B: "Brothers", C: "Enemies", D: "Strangers" },
            answer: "B", explanation: "Joseph's jealous brothers sold him to Ishmaelite traders (Genesis 37)."
        },
        {
            id: "crs_014", topic: "Pauline Epistles", year: "2022",
            question: "Paul was converted on the road to...",
            options: { A: "Rome", B: "Damascus", C: "Jerusalem", D: "Athens" },
            answer: "B", explanation: "Paul encountered Christ on the road to Damascus (Acts 9:1-19)."
        },
        {
            id: "crs_015", topic: "Synoptic Gospels", year: "2024",
            question: "The Last Supper took place during the feast of...",
            options: { A: "Tabernacles", B: "Passover", C: "Pentecost", D: "Trumpets" },
            answer: "B", explanation: "Jesus instituted the Lord's Supper during the Passover meal (Matthew 26:17-30)."
        },
        {
            id: "crs_016", topic: "Christian Living", year: "2023",
            question: "The Lord's Prayer begins with...",
            options: { A: "Hail Mary", B: "Our Father", C: "Glory be", D: "Holy God" },
            answer: "B", explanation: "The Lord's Prayer begins 'Our Father in heaven, hallowed be your name' (Matthew 6:9)."
        },
        {
            id: "crs_017", topic: "Acts", year: "2022",
            question: "Barnabas was known as the 'Son of...'",
            options: { A: "Thunder", B: "Encouragement", C: "Consolation", D: "Prophecy" },
            answer: "B", explanation: "Barnabas means 'son of encouragement' (Acts 4:36)."
        },
        {
            id: "crs_018", topic: "Old Testament", year: "2024",
            question: "The Israelites wandered in the wilderness for...",
            options: { A: "10 years", B: "20 years", C: "40 years", D: "70 years" },
            answer: "C", explanation: "The Israelites wandered in the wilderness for 40 years (Numbers 14:33-34)."
        },
        {
            id: "crs_019", topic: "Pauline Epistles", year: "2023",
            question: "The just shall live by faith is found in...",
            options: { A: "Romans 1:17", B: "John 3:16", C: "Psalm 23", D: "Proverbs 3:5" },
            answer: "A", explanation: "Romans 1:17 states 'The righteous will live by faith.'"
        },
        {
            id: "crs_020", topic: "Christian Living", year: "2022",
            question: "The greatest commandment is to...",
            options: { A: "Love your neighbor", B: "Love the Lord your God with all your heart", C: "Keep the Sabbath", D: "Honor your parents" },
            answer: "B", explanation: "Jesus said the greatest commandment is to love God with all your heart, soul, and mind (Matthew 22:37-38)."
        },
        {
            id: "crs_021", topic: "Church History", year: "2024",
            question: "The Reformation was started by...",
            options: { A: "John Calvin", B: "Martin Luther", C: "John Wesley", D: "St. Augustine" },
            answer: "B", explanation: "Martin Luther initiated the Protestant Reformation in 1517 with his 95 Theses."
        },
        {
            id: "crs_022", topic: "Ethics", year: "2023",
            question: "Christian ethics is based on...",
            options: { A: "Human reason alone", B: "The teachings of Jesus and the Bible", C: "Cultural traditions", D: "Government laws" },
            answer: "B", explanation: "Christian ethics derives moral principles from the teachings of Jesus Christ and the Bible."
        },
        {
            id: "crs_023", topic: "Apocalyptic Literature", year: "2022",
            question: "The Book of Revelation was written by...",
            options: { A: "Paul", B: "John", C: "Peter", D: "James" },
            answer: "B", explanation: "The Book of Revelation (Apocalypse) is traditionally attributed to John the Apostle."
        },
        {
            id: "crs_024", topic: "Synoptic Gospels", year: "2024",
            question: "The Transfiguration took place on...",
            options: { A: "Mount Sinai", B: "Mount Tabor", C: "Mount Zion", D: "Mount Carmel" },
            answer: "B", explanation: "The Transfiguration of Jesus occurred on Mount Tabor (or possibly Mount Hermon)."
        },
        {
            id: "crs_025", topic: "Pauline Epistles", year: "2023",
            question: "The 'thorn in the flesh' mentioned by Paul refers to...",
            options: { A: "A physical ailment", B: "A metaphor for suffering", C: "An enemy", D: "A temptation" },
            answer: "B", explanation: "Paul's 'thorn in the flesh' (2 Corinthians 12:7) is generally understood as a persistent suffering or trial."
        },
        {
            id: "crs_026", topic: "Old Testament", year: "2022",
            question: "The Exodus refers to the departure of Israelites from...",
            options: { A: "Babylon", B: "Egypt", C: "Canaan", D: "Assyria" },
            answer: "B", explanation: "The Exodus is the departure of the Israelites from slavery in Egypt under Moses' leadership."
        },
        {
            id: "crs_027", topic: "Acts", year: "2024",
            question: "The Jerusalem Council (Acts 15) decided that Gentile converts did not need to...",
            options: { A: "Believe in Jesus", B: "Be circumcised", C: "Be baptized", D: "Attend church" },
            answer: "B", explanation: "The Council decided Gentile converts did not need to be circumcised or follow all Jewish laws."
        },
        {
            id: "crs_028", topic: "Christian Living", year: "2023",
            question: "The Beatitudes are found in...",
            options: { A: "Matthew 5", B: "John 3", C: "Luke 15", D: "Mark 10" },
            answer: "A", explanation: "The Beatitudes (Blessings) are the opening verses of the Sermon on the Mount in Matthew 5:3-12."
        },
        {
            id: "crs_029", topic: "Parables", year: "2022",
            question: "In the parable of the Good Samaritan, the priest and Levite...",
            options: { A: "Helped the wounded man", B: "Passed by on the other side", C: "Called for help", D: "Paid for the inn" },
            answer: "B", explanation: "The priest and Levite both passed by without helping (Luke 10:25-37)."
        },
        {
            id: "crs_030", topic: "Miracles", year: "2024",
            question: "Jesus fed 5,000 people with...",
            options: { A: "5 loaves and 2 fish", B: "7 loaves and a few fish", C: "12 baskets of bread", D: "Wine and bread" },
            answer: "A", explanation: "Jesus fed 5,000 with five loaves and two fish (Matthew 14:13-21)."
        },
        {
            id: "crs_031", topic: "Church History", year: "2023",
            question: "The Nicene Creed was formulated in...",
            options: { A: "325 AD", B: "451 AD", C: "1054 AD", D: "1517 AD" },
            answer: "A", explanation: "The First Council of Nicaea in 325 AD formulated the Nicene Creed."
        },
        {
            id: "crs_032", topic: "Ethics", year: "2022",
            question: "The sanctity of life means that...",
            options: { A: "Life is cheap", B: "Human life is sacred and should be protected", C: "Only some lives matter", D: "Death is preferable" },
            answer: "B", explanation: "The sanctity of life is the principle that human life is sacred and should be preserved and protected."
        },
        {
            id: "crs_033", topic: "Apocalyptic Literature", year: "2024",
            question: "The number 666 in Revelation is known as...",
            options: { A: "The number of angels", B: "The number of the beast", C: "The number of saints", D: "The number of churches" },
            answer: "B", explanation: "Revelation 13:18 refers to 666 as 'the number of the beast.'"
        },
        {
            id: "crs_034", topic: "Synoptic Gospels", year: "2023",
            question: "The Rich Young Ruler was told by Jesus to...",
            options: { A: "Build a church", B: "Sell all he had and give to the poor", C: "Become a priest", D: "Travel to Rome" },
            answer: "B", explanation: "Jesus told him to sell his possessions, give to the poor, and follow him (Matthew 19:16-22)."
        },
        {
            id: "crs_035", topic: "Pauline Epistles", year: "2022",
            question: "The fruit of the Spirit in Galatians 5:22-23 lists how many qualities?",
            options: { A: "7", B: "8", C: "9", D: "10" },
            answer: "C", explanation: "The nine fruits are: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control."
        },
        {
            id: "crs_036", topic: "Old Testament", year: "2024",
            question: "David defeated Goliath with a...",
            options: { A: "Sword", B: "Spear", C: "Sling and stone", D: "Bow and arrow" },
            answer: "C", explanation: "David defeated Goliath with a sling and a stone (1 Samuel 17)."
        },
        {
            id: "crs_037", topic: "Acts", year: "2023",
            question: "Philip the evangelist baptized the...",
            options: { A: "Roman centurion", B: "Ethiopian eunuch", C: "Samaritan woman", D: "Greek philosopher" },
            answer: "B", explanation: "Philip baptized the Ethiopian eunuch (Acts 8:26-40)."
        },
        {
            id: "crs_038", topic: "Christian Living", year: "2022",
            question: "The Great Commission commands believers to...",
            options: { A: "Build churches", B: "Make disciples of all nations", C: "Keep the Sabbath", D: "Pay tithes" },
            answer: "B", explanation: "The Great Commission (Matthew 28:19-20) commands making disciples of all nations."
        },
        {
            id: "crs_039", topic: "Parables", year: "2024",
            question: "The prodigal son demanded his inheritance and went to a...",
            options: { A: "Near country", B: "Far country", C: "Holy city", D: "Mountain" },
            answer: "B", explanation: "The prodigal son went to a far country and squandered his inheritance (Luke 15:11-32)."
        },
        {
            id: "crs_040", topic: "Miracles", year: "2023",
            question: "Jesus walked on water on the Sea of...",
            options: { A: "Galilee", B: "Dead Sea", C: "Red Sea", D: "Mediterranean" },
            answer: "A", explanation: "Jesus walked on the Sea of Galilee (Matthew 14:22-33)."
        },
        {
            id: "crs_041", topic: "Church History", year: "2022",
            question: "The Great Schism of 1054 divided Christianity into...",
            options: { A: "Catholic and Protestant", B: "Eastern Orthodox and Roman Catholic", C: "Anglican and Methodist", D: "Baptist and Presbyterian" },
            answer: "B", explanation: "The Great Schism split Christianity into Eastern Orthodox and Roman Catholic churches."
        },
        {
            id: "crs_042", topic: "Ethics", year: "2024",
            question: "Stewardship in Christianity means...",
            options: { A: "Owning everything", B: "Managing God's resources responsibly", C: "Giving nothing", D: "Living in poverty" },
            answer: "B", explanation: "Stewardship is the responsible management of resources entrusted by God."
        },
        {
            id: "crs_043", topic: "Apocalyptic Literature", year: "2023",
            question: "The four horsemen in Revelation represent...",
            options: { A: "The gospel writers", B: "Conquest, war, famine, and death", C: "The four seasons", D: "Major prophets" },
            answer: "B", explanation: "The four horsemen represent conquest, war, famine, and death (Revelation 6:1-8)."
        },
        {
            id: "crs_044", topic: "Synoptic Gospels", year: "2022",
            question: "The cleansing of the temple occurred in...",
            options: { A: "Bethlehem", B: "Jerusalem", C: "Nazareth", D: "Capernaum" },
            answer: "B", explanation: "Jesus cleansed the temple in Jerusalem (Matthew 21:12-13)."
        },
        {
            id: "crs_045", topic: "Pauline Epistles", year: "2024",
            question: "Paul wrote most of his epistles while...",
            options: { A: "In Jerusalem", B: "In prison", C: "In Rome as a free man", D: "In Athens" },
            answer: "B", explanation: "Many of Paul's letters (Ephesians, Philippians, Colossians, Philemon) were written from prison."
        },
        {
            id: "crs_046", topic: "Old Testament", year: "2023",
            question: "The Tower of Babel was built because the people wanted to...",
            options: { A: "Reach heaven", B: "Make a name for themselves", C: "Worship God", D: "Escape a flood" },
            answer: "B", explanation: "They built the tower to make a name for themselves and avoid being scattered (Genesis 11:4)."
        },
        {
            id: "crs_047", topic: "Acts", year: "2022",
            question: "Ananias and Sapphira died because they...",
            options: { A: "Did not give anything", B: "Lied about the amount they gave", C: "Stole from the church", D: "Refused to believe" },
            answer: "B", explanation: "Ananias and Sapphira lied to the Holy Spirit about the price of the land they sold (Acts 5:1-11)."
        },
        {
            id: "crs_048", topic: "Christian Living", year: "2024",
            question: "The armor of God includes all EXCEPT...",
            options: { A: "Sword of the Spirit", B: "Shield of faith", C: "Helmet of salvation", D: "Crown of thorns" },
            answer: "D", explanation: "The armor of God (Ephesians 6:10-18) includes belt of truth, breastplate of righteousness, shoes of gospel, shield of faith, helmet of salvation, and sword of the Spirit."
        },
        {
            id: "crs_049", topic: "Parables", year: "2023",
            question: "In the parable of the talents, the master was angry with the servant who...",
            options: { A: "Lost his talent", B: "Buried his talent", C: "Invested his talent", D: "Gave away his talent" },
            answer: "B", explanation: "The master was angry with the servant who buried his talent and did nothing with it (Matthew 25:14-30)."
        },
        {
            id: "crs_050", topic: "Miracles", year: "2022",
            question: "Jesus raised Lazarus from the dead after he had been in the tomb for...",
            options: { A: "1 day", B: "2 days", C: "3 days", D: "4 days" },
            answer: "D", explanation: "Lazarus had been in the tomb for four days when Jesus raised him (John 11:17-44)."
        }
    ]
};