const ECONOMICS_DATA = {
    name: "Economics",
    topics: ["Microeconomics", "Macroeconomics", "International Trade", "Development", "Money", "Public Finance", "Agriculture", "Population", "Labour", "Economic Systems"],
    questions: [
        {
            id: "eco_001", topic: "Microeconomics", year: "2024",
            question: "If demand increases while supply remains constant, the equilibrium price will...",
            options: { A: "Decrease", B: "Increase", C: "Remain unchanged", D: "Fluctuate" },
            answer: "B", explanation: "Increased demand with constant supply creates excess demand, pushing the equilibrium price up."
        },
        {
            id: "eco_002", topic: "Macroeconomics", year: "2024",
            question: "The formula for calculating GDP using the expenditure approach is...",
            options: { A: "C + I + G + (X - M)", B: "C + I + G - (X + M)", C: "C - I + G + (X - M)", D: "C + I - G + (X - M)" },
            answer: "A", explanation: "GDP = Consumption + Investment + Government spending + (Exports - Imports)."
        },
        {
            id: "eco_003", topic: "Money", year: "2023",
            question: "The central bank of Nigeria is responsible for all EXCEPT...",
            options: { A: "Issuing currency", B: "Setting monetary policy", C: "Granting loans to individuals", D: "Banker to the government" },
            answer: "C", explanation: "The CBN does not grant loans to individuals directly; commercial banks do that."
        },
        {
            id: "eco_004", topic: "International Trade", year: "2023",
            question: "A country has a comparative advantage in producing a good if it...",
            options: { A: "Can produce more of it", B: "Has lower opportunity cost", C: "Has absolute advantage", D: "Has more resources" },
            answer: "B", explanation: "Comparative advantage exists when a country can produce a good at a lower opportunity cost than others."
        },
        {
            id: "eco_005", topic: "Development", year: "2022",
            question: "Which of the following is a characteristic of a developing economy?",
            options: { A: "High per capita income", B: "Low population growth", C: "High dependence on primary products", D: "Advanced technology" },
            answer: "C", explanation: "Developing economies typically depend heavily on primary product exports with low value addition."
        },
        {
            id: "eco_006", topic: "Microeconomics", year: "2024",
            question: "Price elasticity of demand measures...",
            options: { A: "Change in price", B: "Responsiveness of demand to price changes", C: "Total revenue", D: "Consumer surplus" },
            answer: "B", explanation: "Price elasticity of demand measures how much quantity demanded responds to a change in price."
        },
        {
            id: "eco_007", topic: "Macroeconomics", year: "2023",
            question: "Inflation means a sustained increase in...",
            options: { A: "Production", B: "General price level", C: "Employment", D: "Exports" },
            answer: "B", explanation: "Inflation is a sustained increase in the general price level of goods and services."
        },
        {
            id: "eco_008", topic: "Money", year: "2022",
            question: "The main function of money as a medium of exchange is to...",
            options: { A: "Store value", B: "Eliminate barter", C: "Measure value", D: "Transfer wealth" },
            answer: "B", explanation: "As a medium of exchange, money eliminates the need for barter (double coincidence of wants)."
        },
        {
            id: "eco_009", topic: "International Trade", year: "2024",
            question: "A tax on imported goods is called...",
            options: { A: "Subsidy", B: "Tariff", C: "Quota", D: "Embargo" },
            answer: "B", explanation: "A tariff is a tax imposed on imported goods to protect domestic industries or raise revenue."
        },
        {
            id: "eco_010", topic: "Development", year: "2023",
            question: "Human capital development refers to...",
            options: { A: "Building factories", B: "Investing in education and training", C: "Mining natural resources", D: "Constructing roads" },
            answer: "B", explanation: "Human capital development involves improving skills, education, and health of the workforce."
        },
        {
            id: "eco_011", topic: "Agriculture", year: "2022",
            question: "The main problem of agricultural development in Nigeria is...",
            options: { A: "Too much rainfall", B: "Over-mechanization", C: "Land tenure system", D: "Excess labor" },
            answer: "C", explanation: "The land tenure system in Nigeria often prevents efficient use of agricultural land."
        },
        {
            id: "eco_012", topic: "Public Finance", year: "2024",
            question: "The main source of government revenue in Nigeria is...",
            options: { A: "Income tax", B: "Petroleum", C: "Tourism", D: "Agriculture" },
            answer: "B", explanation: "Petroleum (oil) exports and royalties constitute the largest source of government revenue in Nigeria."
        },
        {
            id: "eco_013", topic: "Microeconomics", year: "2023",
            question: "A monopoly is a market structure with...",
            options: { A: "Many sellers", B: "One seller", C: "Few sellers", D: "Two sellers" },
            answer: "B", explanation: "A monopoly exists when there is only one seller of a product with no close substitutes."
        },
        {
            id: "eco_014", topic: "Macroeconomics", year: "2022",
            question: "Unemployment caused by economic recession is called...",
            options: { A: "Frictional unemployment", B: "Structural unemployment", C: "Cyclical unemployment", D: "Seasonal unemployment" },
            answer: "C", explanation: "Cyclical unemployment occurs due to downturns in the business cycle or recession."
        },
        {
            id: "eco_015", topic: "Money", year: "2024",
            question: "The process of controlling the money supply to achieve economic objectives is called...",
            options: { A: "Fiscal policy", B: "Monetary policy", C: "Trade policy", D: "Exchange rate policy" },
            answer: "B", explanation: "Monetary policy involves managing interest rates and money supply to control inflation and stabilize currency."
        },
        {
            id: "eco_016", topic: "International Trade", year: "2023",
            question: "Balance of trade is the difference between...",
            options: { A: "Total exports and total imports", B: "Government revenue and expenditure", C: "Savings and investment", D: "Income and consumption" },
            answer: "A", explanation: "Balance of trade = Value of exports - Value of imports."
        },
        {
            id: "eco_017", topic: "Development", year: "2022",
            question: "GDP per capita is calculated by...",
            options: { A: "GDP × Population", B: "GDP ÷ Population", C: "GDP + Population", D: "GDP - Population" },
            answer: "B", explanation: "GDP per capita = GDP / Total Population. It measures average economic output per person."
        },
        {
            id: "eco_018", topic: "Public Finance", year: "2024",
            question: "A budget deficit occurs when...",
            options: { A: "Revenue exceeds expenditure", B: "Expenditure exceeds revenue", C: "Revenue equals expenditure", D: "There is no expenditure" },
            answer: "B", explanation: "A budget deficit occurs when government spending exceeds its revenue."
        },
        {
            id: "eco_019", topic: "Microeconomics", year: "2023",
            question: "The law of diminishing returns states that...",
            options: { A: "Output always increases", B: "As more variable input is added to fixed input, marginal product eventually decreases", C: "Cost always decreases", D: "Price always falls" },
            answer: "B", explanation: "The law states that adding more of a variable factor to fixed factors will eventually yield decreasing marginal returns."
        },
        {
            id: "eco_020", topic: "Agriculture", year: "2022",
            question: "The marketing board in Nigeria was established to...",
            options: { A: "Import food", B: "Stabilize prices of agricultural produce", C: "Build houses", D: "Provide loans" },
            answer: "B", explanation: "Marketing boards were set up to stabilize prices and ensure fair returns to farmers."
        },
        {
            id: "eco_021", topic: "Population", year: "2024",
            question: "A population census is conducted to determine...",
            options: { A: "Only the number of males", B: "The total number of people in a country", C: "Only the number of children", D: "The number of houses" },
            answer: "B", explanation: "A census is an official count of the total population in a given area."
        },
        {
            id: "eco_022", topic: "Labour", year: "2023",
            question: "The labour force consists of...",
            options: { A: "All citizens", B: "Those willing and able to work", C: "Only employed persons", D: "Only civil servants" },
            answer: "B", explanation: "The labour force includes all people who are either employed or actively seeking employment."
        },
        {
            id: "eco_023", topic: "Economic Systems", year: "2022",
            question: "In a capitalist economy, resources are allocated by...",
            options: { A: "Government planning", B: "Market forces of demand and supply", C: "Traditional customs", D: "Religious leaders" },
            answer: "B", explanation: "Capitalism relies on the free market mechanism (demand and supply) to allocate resources."
        },
        {
            id: "eco_024", topic: "Microeconomics", year: "2024",
            question: "Consumer surplus is the difference between...",
            options: { A: "Price paid and price willing to pay", B: "What consumers are willing to pay and what they actually pay", C: "Total revenue and total cost", D: "Supply and demand" },
            answer: "B", explanation: "Consumer surplus = Willingness to pay - Actual price paid."
        },
        {
            id: "eco_025", topic: "Macroeconomics", year: "2023",
            question: "The Phillips curve shows the relationship between...",
            options: { A: "GDP and unemployment", B: "Inflation and unemployment", C: "Interest rates and investment", D: "Exports and imports" },
            answer: "B", explanation: "The Phillips curve illustrates an inverse relationship between inflation and unemployment."
        },
        {
            id: "eco_026", topic: "Money", year: "2022",
            question: "The liquidity preference theory was developed by...",
            options: { A: "Adam Smith", B: "John Maynard Keynes", C: "David Ricardo", D: "Alfred Marshall" },
            answer: "B", explanation: "Keynes developed the liquidity preference theory explaining demand for money."
        },
        {
            id: "eco_027", topic: "International Trade", year: "2024",
            question: "A country has an absolute advantage if it...",
            options: { A: "Has lower opportunity cost", B: "Can produce more of a good with the same resources", C: "Has more labour", D: "Has better technology" },
            answer: "B", explanation: "Absolute advantage means producing more output per unit of input than another country."
        },
        {
            id: "eco_028", topic: "Development", year: "2023",
            question: "The Human Development Index (HDI) measures...",
            options: { A: "Only economic growth", B: "Health, education, and standard of living", C: "Only literacy rate", D: "Only life expectancy" },
            answer: "B", explanation: "HDI combines life expectancy, education, and per capita income indicators."
        },
        {
            id: "eco_029", topic: "Public Finance", year: "2022",
            question: "Progressive taxation means...",
            options: { A: "Everyone pays the same amount", B: "Higher income earners pay a higher percentage", C: "Lower income earners pay more", D: "Only companies pay tax" },
            answer: "B", explanation: "Progressive tax rates increase as taxable income increases."
        },
        {
            id: "eco_030", topic: "Agriculture", year: "2024",
            question: "Subsistence farming is characterized by...",
            options: { A: "Large scale production for export", B: "Production mainly for family consumption", C: "Use of advanced machinery", D: "High capital investment" },
            answer: "B", explanation: "Subsistence farming produces enough food for the farmer's family with little surplus."
        },
        {
            id: "eco_031", topic: "Population", year: "2023",
            question: "The Malthusian theory predicts that...",
            options: { A: "Population grows arithmetically while food grows geometrically", B: "Population grows geometrically while food grows arithmetically", C: "Both grow at the same rate", D: "Food will always exceed population" },
            answer: "B", explanation: "Malthus predicted population grows exponentially while food supply grows linearly."
        },
        {
            id: "eco_032", topic: "Labour", year: "2022",
            question: "A trade union is an organization of...",
            options: { A: "Employers", B: "Workers", C: "Government officials", D: "Consumers" },
            answer: "B", explanation: "Trade unions are organizations of workers formed to protect and advance their interests."
        },
        {
            id: "eco_033", topic: "Economic Systems", year: "2024",
            question: "In a mixed economy, both _______ and _______ play roles in resource allocation.",
            options: { A: "Government and private sector", B: "Rich and poor", C: "Urban and rural", D: "Men and women" },
            answer: "A", explanation: "A mixed economy combines elements of both market (private) and planned (government) economies."
        },
        {
            id: "eco_034", topic: "Microeconomics", year: "2023",
            question: "An oligopoly is a market with...",
            options: { A: "One seller", B: "Few sellers", C: "Many sellers", D: "No sellers" },
            answer: "B", explanation: "An oligopoly is a market dominated by a small number of large sellers."
        },
        {
            id: "eco_035", topic: "Macroeconomics", year: "2022",
            question: "Deflation is...",
            options: { A: "A decrease in general price level", B: "An increase in general price level", C: "Stable prices", D: "Rapid economic growth" },
            answer: "A", explanation: "Deflation is a decrease in the general price level of goods and services."
        },
        {
            id: "eco_036", topic: "Money", year: "2024",
            question: "Fiat money is money that...",
            options: { A: "Is backed by gold", B: "Has value because government declares it legal tender", C: "Is made of silver", D: "Can only be used internationally" },
            answer: "B", explanation: "Fiat money has value because the government maintains it and people have faith in it."
        },
        {
            id: "eco_037", topic: "International Trade", year: "2023",
            question: "A quota is a...",
            options: { A: "Tax on imports", B: "Limit on the quantity of imports", C: "Subsidy for exports", D: "Ban on trade" },
            answer: "B", explanation: "An import quota is a trade restriction that limits the quantity of a good that can be imported."
        },
        {
            id: "eco_038", topic: "Development", year: "2022",
            question: "Foreign aid is a form of...",
            options: { A: "Domestic investment", B: "Capital inflow", C: "Export earnings", D: "Tax revenue" },
            answer: "B", explanation: "Foreign aid represents a transfer of resources from abroad, classified as capital inflow."
        },
        {
            id: "eco_039", topic: "Public Finance", year: "2024",
            question: "Value Added Tax (VAT) is an example of...",
            options: { A: "Direct tax", B: "Indirect tax", C: "Progressive tax", D: "Property tax" },
            answer: "B", explanation: "VAT is an indirect tax because it is levied on goods and services rather than on income."
        },
        {
            id: "eco_040", topic: "Agriculture", year: "2023",
            question: "Cash crops are crops grown for...",
            options: { A: "Family consumption", B: "Sale and export", C: "Animal feed", D: "Soil improvement" },
            answer: "B", explanation: "Cash crops are grown for sale rather than for the farmer's own use."
        },
        {
            id: "eco_041", topic: "Population", year: "2022",
            question: "The dependency ratio measures...",
            options: { A: "Total population", B: "Ratio of dependents to working-age population", C: "Birth rate", D: "Death rate" },
            answer: "B", explanation: "Dependency ratio = (Young + Elderly) / Working-age population."
        },
        {
            id: "eco_042", topic: "Labour", year: "2024",
            question: "The minimum wage is set by...",
            options: { A: "Individual companies", B: "Government legislation", C: "Trade unions only", D: "International organizations" },
            answer: "B", explanation: "Minimum wage is legally mandated by government to protect low-income workers."
        },
        {
            id: "eco_043", topic: "Economic Systems", year: "2023",
            question: "A command economy is one in which...",
            options: { A: "Market forces determine prices", B: "Government makes all economic decisions", C: "Consumers choose everything", D: "Prices are set by competition" },
            answer: "B", explanation: "In a command (planned) economy, the government controls production, investment, and prices."
        },
        {
            id: "eco_044", topic: "Microeconomics", year: "2022",
            question: "Producer surplus is the difference between...",
            options: { A: "Price received and cost of production", B: "Total revenue and total cost", C: "Supply and demand", D: "Fixed and variable costs" },
            answer: "A", explanation: "Producer surplus = Price received - Minimum price willing to accept (cost)."
        },
        {
            id: "eco_045", topic: "Macroeconomics", year: "2024",
            question: "The multiplier effect refers to...",
            options: { A: "Decrease in spending", B: "Magnified impact of initial spending on national income", C: "Reduction in taxes", D: "Increase in imports" },
            answer: "B", explanation: "The multiplier effect shows how an initial change in spending leads to a larger change in national income."
        },
        {
            id: "eco_046", topic: "Money", year: "2023",
            question: "Open market operations involve...",
            options: { A: "Setting interest rates", B: "Buying and selling government securities", C: "Printing money", D: "Regulating banks" },
            answer: "B", explanation: "Central banks conduct monetary policy by buying/selling government securities in open markets."
        },
        {
            id: "eco_047", topic: "International Trade", year: "2022",
            question: "Devaluation of currency makes exports...",
            options: { A: "More expensive", B: "Cheaper", C: "Unchanged", D: "Illegal" },
            answer: "B", explanation: "Devaluation makes domestic goods cheaper for foreign buyers, boosting exports."
        },
        {
            id: "eco_048", topic: "Development", year: "2024",
            question: "Sustainable development means...",
            options: { A: "Rapid industrialization", B: "Meeting present needs without compromising future generations", C: "Maximizing GDP growth", D: "Urbanization" },
            answer: "B", explanation: "Sustainable development balances economic growth with environmental protection for future generations."
        },
        {
            id: "eco_049", topic: "Public Finance", year: "2023",
            question: "Public goods are characterized by...",
            options: { A: "Excludability and rivalry", B: "Non-excludability and non-rivalry", C: "Private ownership", D: "Profit motive" },
            answer: "B", explanation: "Public goods are non-excludable (can't prevent use) and non-rivalrous (one's use doesn't reduce availability)."
        },
        {
            id: "eco_050", topic: "Agriculture", year: "2022",
            question: "Irrigation is important in agriculture because it...",
            options: { A: "Increases rainfall", B: "Provides water during dry periods", C: "Reduces soil fertility", D: "Eliminates pests" },
            answer: "B", explanation: "Irrigation supplies water to crops when natural rainfall is insufficient."
        }
    ]
};