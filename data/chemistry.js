const CHEMISTRY_DATA = {
    name: "Chemistry",
    topics: ["Organic", "Inorganic", "Physical", "Atomic Structure", "Stoichiometry", "Electrochemistry", "Chemical Equilibrium", "Acids & Bases", "Periodic Table", "Chemical Bonding"],
    questions: [
        {
            id: "chem_001", topic: "Stoichiometry", year: "2024",
            question: "How many moles of oxygen are required for the complete combustion of 2 moles of propane (C₃H₈)?",
            options: { A: "5 moles", B: "10 moles", C: "15 moles", D: "20 moles" },
            answer: "B", explanation: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. For 2 moles: 2 × 5 = 10 moles O₂."
        },
        {
            id: "chem_002", topic: "Atomic Structure", year: "2024",
            question: "An element with atomic number 17 belongs to which group and period?",
            options: { A: "Group VII, Period 3", B: "Group I, Period 3", C: "Group VII, Period 2", D: "Group III, Period 3" },
            answer: "A", explanation: "Atomic number 17 is Chlorine. Electronic config: 2,8,7. Group VII (7 valence electrons), Period 3 (3 shells)."
        },
        {
            id: "chem_003", topic: "Organic", year: "2023",
            question: "The IUPAC name of CH₃CH₂CH₂OH is...",
            options: { A: "Methanol", B: "Ethanol", C: "Propanol", D: "Butanol" },
            answer: "C", explanation: "3 carbon chain with OH group = propan-1-ol or simply propanol."
        },
        {
            id: "chem_004", topic: "Physical", year: "2023",
            question: "Which of the following is NOT a colligative property?",
            options: { A: "Boiling point elevation", B: "Vapor pressure lowering", C: "Density", D: "Freezing point depression" },
            answer: "C", explanation: "Density is an intensive property of the substance itself, not dependent on the number of solute particles."
        },
        {
            id: "chem_005", topic: "Inorganic", year: "2022",
            question: "Which gas is produced when dilute HCl reacts with zinc metal?",
            options: { A: "Oxygen", B: "Chlorine", C: "Hydrogen", D: "Nitrogen" },
            answer: "C", explanation: "Zn + 2HCl → ZnCl₂ + H₂. Hydrogen gas is evolved."
        },
        {
            id: "chem_006", topic: "Electrochemistry", year: "2024",
            question: "In the electrolysis of dilute H₂SO₄ using platinum electrodes, the gas evolved at the anode is...",
            options: { A: "Hydrogen", B: "Oxygen", C: "Sulphur dioxide", D: "Chlorine" },
            answer: "B", explanation: "At the anode: 4OH⁻ → 2H₂O + O₂ + 4e⁻. Oxygen gas is evolved."
        },
        {
            id: "chem_007", topic: "Chemical Equilibrium", year: "2023",
            question: "Le Chatelier's Principle states that if a dynamic equilibrium is disturbed by changing the conditions, the position of equilibrium moves to...",
            options: { A: "Prevent the change", B: "Counteract the change", C: "Accelerate the change", D: "Ignore the change" },
            answer: "B", explanation: "The system adjusts itself to counteract the disturbance and restore equilibrium."
        },
        {
            id: "chem_008", topic: "Organic", year: "2022",
            question: "The functional group of alkanols is...",
            options: { A: "-COOH", B: "-OH", C: "-CHO", D: "-NH₂" },
            answer: "B", explanation: "Alkanols (alcohols) contain the hydroxyl (-OH) functional group."
        },
        {
            id: "chem_009", topic: "Atomic Structure", year: "2024",
            question: "Isotopes of an element have the same number of...",
            options: { A: "Neutrons but different protons", B: "Protons but different neutrons", C: "Electrons but different protons", D: "Protons and neutrons" },
            answer: "B", explanation: "Isotopes have the same atomic number (protons) but different mass numbers (neutrons)."
        },
        {
            id: "chem_010", topic: "Stoichiometry", year: "2023",
            question: "The relative molecular mass of H₂SO₄ is... (H=1, S=32, O=16)",
            options: { A: "49", B: "64", C: "81", D: "98" },
            answer: "D", explanation: "H₂SO₄ = (2×1) + 32 + (4×16) = 2 + 32 + 64 = 98."
        },
        {
            id: "chem_011", topic: "Inorganic", year: "2022",
            question: "The chemical formula for rust is...",
            options: { A: "FeO", B: "Fe₂O₃", C: "Fe₃O₄", D: "Fe₂O₃·xH₂O" },
            answer: "D", explanation: "Rust is hydrated iron(III) oxide, Fe₂O₃·xH₂O."
        },
        {
            id: "chem_012", topic: "Physical", year: "2024",
            question: "A catalyst increases the rate of a chemical reaction by...",
            options: { A: "Increasing the temperature", B: "Lowering the activation energy", C: "Increasing the concentration", D: "Changing the products" },
            answer: "B", explanation: "A catalyst provides an alternative reaction pathway with lower activation energy."
        },
        {
            id: "chem_013", topic: "Organic", year: "2023",
            question: "The process of converting alkenes to alkanes is called...",
            options: { A: "Oxidation", B: "Hydrogenation", C: "Dehydration", D: "Substitution" },
            answer: "B", explanation: "Hydrogenation adds hydrogen to alkenes to form alkanes."
        },
        {
            id: "chem_014", topic: "Electrochemistry", year: "2022",
            question: "The standard electrode potential of a hydrogen electrode is defined as...",
            options: { A: "1.0V", B: "0.0V", C: "-1.0V", D: "2.0V" },
            answer: "B", explanation: "The standard hydrogen electrode (SHE) has a potential of 0.0V by definition."
        },
        {
            id: "chem_015", topic: "Atomic Structure", year: "2024",
            question: "The maximum number of electrons in the third shell (M-shell) is...",
            options: { A: "2", B: "8", C: "18", D: "32" },
            answer: "C", explanation: "Maximum electrons in a shell = 2n². For n=3: 2×9 = 18."
        },
        {
            id: "chem_016", topic: "Inorganic", year: "2023",
            question: "Chlorine is used in water treatment to...",
            options: { A: "Remove hardness", B: "Kill bacteria", C: "Remove color", D: "Increase pH" },
            answer: "B", explanation: "Chlorine is a disinfectant that kills harmful bacteria in water."
        },
        {
            id: "chem_017", topic: "Physical", year: "2022",
            question: "A solution with pH 7 is...",
            options: { A: "Acidic", B: "Basic", C: "Neutral", D: "Alkaline" },
            answer: "C", explanation: "pH 7 is neutral. Below 7 is acidic, above 7 is basic/alkaline."
        },
        {
            id: "chem_018", topic: "Organic", year: "2024",
            question: "Esters are formed from the reaction between...",
            options: { A: "Alcohol and alkanoic acid", B: "Alkene and hydrogen", C: "Alkane and chlorine", D: "Alcohol and base" },
            answer: "A", explanation: "Esterification: Alcohol + Carboxylic acid → Ester + Water."
        },
        {
            id: "chem_019", topic: "Stoichiometry", year: "2023",
            question: "How many atoms are present in 2 moles of CO₂?",
            options: { A: "3.6 × 10²⁴", B: "1.2 × 10²⁴", C: "6.02 × 10²³", D: "1.8 × 10²⁴" },
            answer: "A", explanation: "1 mole CO₂ = 3 moles atoms. 2 moles = 6 moles atoms = 6 × 6.02×10²³ = 3.6×10²⁴."
        },
        {
            id: "chem_020", topic: "Inorganic", year: "2022",
            question: "The gas that turns moist red litmus paper blue is...",
            options: { A: "CO₂", B: "NH₃", C: "SO₂", D: "Cl₂" },
            answer: "B", explanation: "Ammonia (NH₃) is alkaline and turns red litmus paper blue."
        },
        {
            id: "chem_021", topic: "Periodic Table", year: "2024",
            question: "Elements in the same group of the periodic table have the same number of...",
            options: { A: "Protons", B: "Valence electrons", C: "Neutrons", D: "Electron shells" },
            answer: "B", explanation: "Elements in the same group have the same number of valence electrons and similar chemical properties."
        },
        {
            id: "chem_022", topic: "Chemical Bonding", year: "2023",
            question: "A covalent bond is formed by...",
            options: { A: "Transfer of electrons", B: "Sharing of electrons", C: "Attraction between ions", D: "Metallic attraction" },
            answer: "B", explanation: "Covalent bonds involve the sharing of electron pairs between atoms."
        },
        {
            id: "chem_023", topic: "Acids & Bases", year: "2022",
            question: "A substance that changes color in acidic and basic solutions is called a...",
            options: { A: "Catalyst", B: "Indicator", C: "Solvent", D: "Electrolyte" },
            answer: "B", explanation: "Indicators like litmus and phenolphthalein change color depending on pH."
        },
        {
            id: "chem_024", topic: "Organic", year: "2024",
            question: "The general formula for alkanes is...",
            options: { A: "CₙH₂ₙ", B: "CₙH₂ₙ₊₂", C: "CₙH₂ₙ₋₂", D: "CₙHₙ" },
            answer: "B", explanation: "Alkanes are saturated hydrocarbons with general formula CₙH₂ₙ₊₂."
        },
        {
            id: "chem_025", topic: "Physical", year: "2023",
            question: "Boyle's Law states that at constant temperature, the volume of a gas is...",
            options: { A: "Directly proportional to pressure", B: "Inversely proportional to pressure", C: "Independent of pressure", D: "Proportional to temperature" },
            answer: "B", explanation: "Boyle's Law: V ∝ 1/P (at constant T). PV = constant."
        },
        {
            id: "chem_026", topic: "Electrochemistry", year: "2022",
            question: "During the electrolysis of brine, the product at the cathode is...",
            options: { A: "Chlorine", B: "Hydrogen", C: "Oxygen", D: "Sodium" },
            answer: "B", explanation: "At the cathode: 2H⁺ + 2e⁻ → H₂. Hydrogen gas is produced."
        },
        {
            id: "chem_027", topic: "Atomic Structure", year: "2024",
            question: "The mass number of an atom is the sum of...",
            options: { A: "Protons and electrons", B: "Protons and neutrons", C: "Neutrons and electrons", D: "Protons only" },
            answer: "B", explanation: "Mass number (A) = Number of protons + Number of neutrons."
        },
        {
            id: "chem_028", topic: "Inorganic", year: "2023",
            question: "The main constituent of natural gas is...",
            options: { A: "Ethane", B: "Propane", C: "Methane", D: "Butane" },
            answer: "C", explanation: "Natural gas consists primarily of methane (CH₄)."
        },
        {
            id: "chem_029", topic: "Stoichiometry", year: "2022",
            question: "What volume of CO₂ is produced at STP when 12g of carbon is completely burnt? (C=12, molar volume = 22.4 dm³)",
            options: { A: "11.2 dm³", B: "22.4 dm³", C: "44.8 dm³", D: "2.24 dm³" },
            answer: "B", explanation: "C + O₂ → CO₂. 12g C = 1 mole. 1 mole produces 1 mole CO₂ = 22.4 dm³ at STP."
        },
        {
            id: "chem_030", topic: "Chemical Equilibrium", year: "2024",
            question: "For the reaction N₂ + 3H₂ ⇌ 2NH₃ + heat, increasing temperature will...",
            options: { A: "Favor forward reaction", B: "Favor backward reaction", C: "Have no effect", D: "Double the rate" },
            answer: "B", explanation: "The reaction is exothermic. Increasing temperature favors the endothermic (backward) reaction."
        },
        {
            id: "chem_031", topic: "Organic", year: "2023",
            question: "The dehydration of ethanol produces...",
            options: { A: "Ethane", B: "Ethene", C: "Ethanoic acid", D: "Ethanal" },
            answer: "B", explanation: "C₂H₅OH → C₂H₄ + H₂O. Ethanol dehydrates to ethene."
        },
        {
            id: "chem_032", topic: "Periodic Table", year: "2022",
            question: "The most electronegative element is...",
            options: { A: "Oxygen", B: "Nitrogen", C: "Fluorine", D: "Chlorine" },
            answer: "C", explanation: "Fluorine is the most electronegative element on the Pauling scale."
        },
        {
            id: "chem_033", topic: "Chemical Bonding", year: "2024",
            question: "Ionic compounds conduct electricity when...",
            options: { A: "Solid", B: "Molten or in solution", C: "At low temperature", D: "Under pressure" },
            answer: "B", explanation: "Ionic compounds conduct electricity only when their ions are free to move (molten or dissolved)."
        },
        {
            id: "chem_034", topic: "Acids & Bases", year: "2023",
            question: "A strong acid completely...",
            options: { A: "Dissociates in water", B: "Ionizes in water", C: "Reacts with metals", D: "Changes color" },
            answer: "B", explanation: "A strong acid completely ionizes (dissociates) in aqueous solution."
        },
        {
            id: "chem_035", topic: "Physical", year: "2022",
            question: "Charles' Law states that at constant pressure, the volume of a gas is...",
            options: { A: "Inversely proportional to temperature", B: "Directly proportional to temperature", C: "Independent of temperature", D: "Proportional to pressure" },
            answer: "B", explanation: "Charles' Law: V ∝ T (at constant P). V/T = constant."
        },
        {
            id: "chem_036", topic: "Electrochemistry", year: "2024",
            question: "In a galvanic cell, oxidation occurs at the...",
            options: { A: "Cathode", B: "Anode", C: "Salt bridge", D: "External circuit" },
            answer: "B", explanation: "Oxidation (loss of electrons) always occurs at the anode."
        },
        {
            id: "chem_037", topic: "Atomic Structure", year: "2023",
            question: "The number of neutrons in an atom of ²³⁸₉₂U is...",
            options: { A: "92", B: "146", C: "238", D: "330" },
            answer: "B", explanation: "Neutrons = Mass number - Atomic number = 238 - 92 = 146."
        },
        {
            id: "chem_038", topic: "Inorganic", year: "2022",
            question: "The brown ring test is used to detect...",
            options: { A: "Sulphate ions", B: "Nitrate ions", C: "Chloride ions", D: "Carbonate ions" },
            answer: "B", explanation: "The brown ring test detects nitrate ions (NO₃⁻) in solution."
        },
        {
            id: "chem_039", topic: "Stoichiometry", year: "2024",
            question: "How many grams of NaOH are needed to make 500cm³ of 0.1M solution? (Na=23, O=16, H=1)",
            options: { A: "1g", B: "2g", C: "4g", D: "8g" },
            answer: "B", explanation: "Molar mass NaOH = 40 g/mol. Mass = 0.1 × 0.5 × 40 = 2g."
        },
        {
            id: "chem_040", topic: "Chemical Equilibrium", year: "2023",
            question: "A catalyst in a reversible reaction...",
            options: { A: "Shifts equilibrium to the right", B: "Increases rate of both forward and backward reactions equally", C: "Changes the equilibrium constant", D: "Decreases activation energy for forward reaction only" },
            answer: "B", explanation: "A catalyst speeds up both forward and backward reactions equally, so it doesn't shift equilibrium."
        },
        {
            id: "chem_041", topic: "Organic", year: "2022",
            question: "The product of complete combustion of hydrocarbons is...",
            options: { A: "CO and H₂O", B: "CO₂ and H₂O", C: "C and H₂O", D: "CO₂ and H₂" },
            answer: "B", explanation: "Complete combustion: CₓHᵧ + O₂ → CO₂ + H₂O."
        },
        {
            id: "chem_042", topic: "Periodic Table", year: "2024",
            question: "Elements in the d-block are called...",
            options: { A: "Alkali metals", B: "Transition metals", C: "Halogens", D: "Noble gases" },
            answer: "B", explanation: "The d-block elements are known as transition metals."
        },
        {
            id: "chem_043", topic: "Chemical Bonding", year: "2023",
            question: "Metallic bonding involves...",
            options: { A: "Sharing of electrons", B: "Attraction between positive ions and delocalized electrons", C: "Transfer of electrons", D: "Dipole-dipole attraction" },
            answer: "B", explanation: "Metallic bonding is the electrostatic attraction between positive metal ions and delocalized electrons."
        },
        {
            id: "chem_044", topic: "Acids & Bases", year: "2022",
            question: "The pH of a 0.001M HCl solution is...",
            options: { A: "1", B: "2", C: "3", D: "11" },
            answer: "C", explanation: "pH = -log[H⁺] = -log(0.001) = -log(10⁻³) = 3."
        },
        {
            id: "chem_045", topic: "Physical", year: "2024",
            question: "Avogadro's number is...",
            options: { A: "6.02 × 10²²", B: "6.02 × 10²³", C: "6.02 × 10²⁴", D: "6.02 × 10²⁵" },
            answer: "B", explanation: "Avogadro's number = 6.02 × 10²³ particles per mole."
        },
        {
            id: "chem_046", topic: "Electrochemistry", year: "2023",
            question: "The salt bridge in a galvanic cell is used to...",
            options: { A: "Generate electricity", B: "Complete the circuit and maintain electrical neutrality", C: "Increase voltage", D: "Store energy" },
            answer: "B", explanation: "The salt bridge allows ion migration to maintain charge balance in half-cells."
        },
        {
            id: "chem_047", topic: "Atomic Structure", year: "2022",
            question: "The shape of the s-orbital is...",
            options: { A: "Dumbbell", B: "Spherical", C: "Cloverleaf", D: "Linear" },
            answer: "B", explanation: "s-orbitals are spherical in shape."
        },
        {
            id: "chem_048", topic: "Inorganic", year: "2024",
            question: "The gas that relights a glowing splint is...",
            options: { A: "Hydrogen", B: "Oxygen", C: "Nitrogen", D: "Carbon dioxide" },
            answer: "B", explanation: "Oxygen supports combustion and relights a glowing splint."
        },
        {
            id: "chem_049", topic: "Stoichiometry", year: "2023",
            question: "The empirical formula of a compound containing 40% carbon, 6.67% hydrogen, and 53.33% oxygen is...",
            options: { A: "CH₂O", B: "C₂H₄O₂", C: "CH₄O", D: "C₆H₁₂O₆" },
            answer: "A", explanation: "C: 40/12 = 3.33, H: 6.67/1 = 6.67, O: 53.33/16 = 3.33. Ratio = 1:2:1. Empirical formula = CH₂O."
        },
        {
            id: "chem_050", topic: "Chemical Equilibrium", year: "2022",
            question: "For an exothermic reaction, the equilibrium constant K...",
            options: { A: "Increases with temperature", B: "Decreases with temperature", C: "Is independent of temperature", D: "Doubles with temperature" },
            answer: "B", explanation: "For exothermic reactions, increasing temperature shifts equilibrium left, decreasing K."
        }
    ]
};