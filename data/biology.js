const BIOLOGY_DATA = {
    name: "Biology",
    topics: ["Ecology", "Genetics", "Cell Biology", "Physiology", "Evolution", "Microbiology", "Plant Biology", "Human Biology", "Reproduction", "Biotechnology"],
    questions: [
        {
            id: "bio_001", topic: "Cell Biology", year: "2024",
            question: "Which organelle is responsible for protein synthesis in the cell?",
            options: { A: "Mitochondria", B: "Ribosomes", C: "Golgi body", D: "Lysosomes" },
            answer: "B", explanation: "Ribosomes are the sites of protein synthesis, translating mRNA into proteins."
        },
        {
            id: "bio_002", topic: "Genetics", year: "2024",
            question: "If a heterozygous tall plant (Tt) is crossed with a homozygous short plant (tt), what is the probability of tall offspring?",
            options: { A: "0%", B: "25%", C: "50%", D: "75%" },
            answer: "C", explanation: "Tt × tt gives Tt, Tt, tt, tt. 2 out of 4 are tall = 50%."
        },
        {
            id: "bio_003", topic: "Ecology", year: "2023",
            question: "Which of the following is a biotic factor in an ecosystem?",
            options: { A: "Temperature", B: "Rainfall", C: "Predators", D: "Soil pH" },
            answer: "C", explanation: "Predators are living organisms, making them a biotic factor. Others are abiotic."
        },
        {
            id: "bio_004", topic: "Physiology", year: "2023",
            question: "The process by which plants lose water through their leaves is called...",
            options: { A: "Respiration", B: "Transpiration", C: "Photosynthesis", D: "Guttation" },
            answer: "B", explanation: "Transpiration is the loss of water vapor from plant leaves through stomata."
        },
        {
            id: "bio_005", topic: "Evolution", year: "2022",
            question: "The theory of evolution by natural selection was proposed by...",
            options: { A: "Gregor Mendel", B: "Charles Darwin", C: "Louis Pasteur", D: "Jean Lamarck" },
            answer: "B", explanation: "Charles Darwin proposed the theory of evolution by natural selection in 'On the Origin of Species' (1859)."
        },
        {
            id: "bio_006", topic: "Microbiology", year: "2024",
            question: "Bacteria that can survive without oxygen are called...",
            options: { A: "Aerobic", B: "Anaerobic", C: "Facultative", D: "Obligate" },
            answer: "B", explanation: "Anaerobic organisms do not require oxygen for growth and may even die in its presence."
        },
        {
            id: "bio_007", topic: "Plant Biology", year: "2023",
            question: "The tissue responsible for the transport of water in plants is...",
            options: { A: "Phloem", B: "Xylem", C: "Cambium", D: "Epidermis" },
            answer: "B", explanation: "Xylem transports water and minerals from roots to other parts of the plant."
        },
        {
            id: "bio_008", topic: "Genetics", year: "2022",
            question: "DNA replication occurs during which phase of the cell cycle?",
            options: { A: "G1 phase", B: "S phase", C: "G2 phase", D: "M phase" },
            answer: "B", explanation: "The S (synthesis) phase is when DNA replication occurs."
        },
        {
            id: "bio_009", topic: "Ecology", year: "2024",
            question: "A food chain always begins with...",
            options: { A: "Herbivores", B: "Carnivores", C: "Producers", D: "Decomposers" },
            answer: "C", explanation: "All food chains begin with producers (plants) that convert sunlight to energy."
        },
        {
            id: "bio_010", topic: "Physiology", year: "2023",
            question: "The human heart has how many chambers?",
            options: { A: "2", B: "3", C: "4", D: "5" },
            answer: "C", explanation: "The human heart has 4 chambers: 2 atria and 2 ventricles."
        },
        {
            id: "bio_011", topic: "Cell Biology", year: "2022",
            question: "The powerhouse of the cell is the...",
            options: { A: "Nucleus", B: "Mitochondria", C: "Ribosome", D: "Chloroplast" },
            answer: "B", explanation: "Mitochondria produce ATP through cellular respiration, earning the nickname 'powerhouse'."
        },
        {
            id: "bio_012", topic: "Genetics", year: "2024",
            question: "A gene is a segment of...",
            options: { A: "Protein", B: "RNA", C: "DNA", D: "Lipid" },
            answer: "C", explanation: "A gene is a segment of DNA that codes for a specific protein or trait."
        },
        {
            id: "bio_013", topic: "Evolution", year: "2023",
            question: "Fossils are found in...",
            options: { A: "Igneous rocks", B: "Sedimentary rocks", C: "Metamorphic rocks", D: "Magma" },
            answer: "B", explanation: "Fossils are most commonly found in sedimentary rocks which form in layers."
        },
        {
            id: "bio_014", topic: "Ecology", year: "2022",
            question: "The largest ecosystem on Earth is the...",
            options: { A: "Forest", B: "Ocean", C: "Desert", D: "Grassland" },
            answer: "B", explanation: "The ocean covers about 71% of Earth's surface, making it the largest ecosystem."
        },
        {
            id: "bio_015", topic: "Physiology", year: "2024",
            question: "The enzyme that digests starch in the mouth is...",
            options: { A: "Pepsin", B: "Amylase", C: "Lipase", D: "Trypsin" },
            answer: "B", explanation: "Salivary amylase (ptyalin) begins starch digestion in the mouth."
        },
        {
            id: "bio_016", topic: "Plant Biology", year: "2023",
            question: "Photosynthesis occurs mainly in the...",
            options: { A: "Roots", B: "Stem", C: "Leaves", D: "Flowers" },
            answer: "C", explanation: "Leaves contain chloroplasts and are the primary site of photosynthesis."
        },
        {
            id: "bio_017", topic: "Microbiology", year: "2022",
            question: "Which of the following is NOT a characteristic of living things?",
            options: { A: "Respiration", B: "Growth", C: "Decay", D: "Reproduction" },
            answer: "C", explanation: "Decay is a process that happens to dead organisms, not a characteristic of living things."
        },
        {
            id: "bio_018", topic: "Genetics", year: "2024",
            question: "A karyotype is used to study...",
            options: { A: "Blood cells", B: "Chromosomes", C: "Bacteria", D: "Viruses" },
            answer: "B", explanation: "A karyotype is a visual profile of an individual's chromosomes."
        },
        {
            id: "bio_019", topic: "Ecology", year: "2023",
            question: "The relationship between a bee and a flower is an example of...",
            options: { A: "Parasitism", B: "Commensalism", C: "Mutualism", D: "Predation" },
            answer: "C", explanation: "Both benefit: bee gets nectar, flower gets pollinated."
        },
        {
            id: "bio_020", topic: "Physiology", year: "2022",
            question: "The hormone that regulates blood sugar level is...",
            options: { A: "Adrenaline", B: "Insulin", C: "Thyroxine", D: "Oestrogen" },
            answer: "B", explanation: "Insulin, produced by the pancreas, lowers blood glucose levels."
        },
        {
            id: "bio_021", topic: "Human Biology", year: "2024",
            question: "The largest organ in the human body is...",
            options: { A: "Liver", B: "Skin", C: "Brain", D: "Heart" },
            answer: "B", explanation: "The skin is the largest organ of the human body."
        },
        {
            id: "bio_022", topic: "Reproduction", year: "2023",
            question: "Fertilization in humans normally occurs in the...",
            options: { A: "Ovary", B: "Fallopian tube", C: "Uterus", D: "Vagina" },
            answer: "B", explanation: "Fertilization typically occurs in the fallopian tube (oviduct)."
        },
        {
            id: "bio_023", topic: "Cell Biology", year: "2022",
            question: "The cell membrane is described as selectively permeable because it...",
            options: { A: "Allows all substances to pass", B: "Allows some substances to pass and prevents others", C: "Prevents all substances from passing", D: "Is made of cellulose" },
            answer: "B", explanation: "Selective permeability means the membrane controls what enters and exits the cell."
        },
        {
            id: "bio_024", topic: "Genetics", year: "2024",
            question: "A recessive trait is expressed when the genotype is...",
            options: { A: "Heterozygous", B: "Homozygous recessive", C: "Homozygous dominant", D: "Either heterozygous or homozygous" },
            answer: "B", explanation: "Recessive traits are only expressed when both alleles are recessive (homozygous recessive)."
        },
        {
            id: "bio_025", topic: "Ecology", year: "2023",
            question: "The pyramid of energy is always...",
            options: { A: "Inverted", B: "Upright", C: "Spindle-shaped", D: "Irregular" },
            answer: "B", explanation: "The pyramid of energy is always upright because energy decreases at each trophic level."
        },
        {
            id: "bio_026", topic: "Physiology", year: "2022",
            question: "The functional unit of the kidney is the...",
            options: { A: "Neuron", B: "Nephron", C: "Alveolus", D: "Villus" },
            answer: "B", explanation: "The nephron is the functional unit of the kidney where filtration occurs."
        },
        {
            id: "bio_027", topic: "Plant Biology", year: "2024",
            question: "The movement of water from the soil into the root hairs is by...",
            options: { A: "Active transport", B: "Osmosis", C: "Diffusion", D: "Transpiration pull" },
            answer: "B", explanation: "Water moves into root hairs by osmosis from a region of lower concentration to higher concentration."
        },
        {
            id: "bio_028", topic: "Microbiology", year: "2023",
            question: "Viruses are considered non-living because they...",
            options: { A: "Cannot reproduce", B: "Cannot reproduce outside a host cell", C: "Have no DNA", D: "Are too small" },
            answer: "B", explanation: "Viruses can only reproduce inside living host cells, which is why they are considered non-living."
        },
        {
            id: "bio_029", topic: "Evolution", year: "2022",
            question: "Homologous structures are evidence of...",
            options: { A: "Convergent evolution", B: "Common ancestry", C: "Genetic drift", D: "Mutation" },
            answer: "B", explanation: "Homologous structures (same origin, different function) indicate common ancestry."
        },
        {
            id: "bio_030", topic: "Human Biology", year: "2024",
            question: "The part of the brain that controls balance and coordination is the...",
            options: { A: "Cerebrum", B: "Cerebellum", C: "Medulla oblongata", D: "Hypothalamus" },
            answer: "B", explanation: "The cerebellum is responsible for balance, coordination, and fine motor control."
        },
        {
            id: "bio_031", topic: "Reproduction", year: "2023",
            question: "Binary fission is a form of reproduction in...",
            options: { A: "Humans", B: "Bacteria", C: "Flowering plants", D: "Birds" },
            answer: "B", explanation: "Binary fission is a form of asexual reproduction used by bacteria and some single-celled organisms."
        },
        {
            id: "bio_032", topic: "Cell Biology", year: "2022",
            question: "The rough endoplasmic reticulum is called 'rough' because it has...",
            options: { A: "Mitochondria attached", B: "Ribosomes attached", C: "Golgi bodies attached", D: "Lysosomes attached" },
            answer: "B", explanation: "Ribosomes attached to the surface give the rough ER its characteristic appearance."
        },
        {
            id: "bio_033", topic: "Genetics", year: "2024",
            question: "A mutation is a change in...",
            options: { A: "Protein structure", B: "DNA sequence", C: "Cell shape", D: "Organ size" },
            answer: "B", explanation: "A mutation is a permanent change in the DNA sequence of a gene or chromosome."
        },
        {
            id: "bio_034", topic: "Ecology", year: "2023",
            question: "The process by which nitrogen is converted to ammonia by bacteria is called...",
            options: { A: "Nitrification", B: "Nitrogen fixation", C: "Denitrification", D: "Ammonification" },
            answer: "B", explanation: "Nitrogen fixation is the conversion of atmospheric nitrogen (N₂) to ammonia (NH₃) by bacteria."
        },
        {
            id: "bio_035", topic: "Physiology", year: "2022",
            question: "The exchange of gases in the lungs occurs in the...",
            options: { A: "Bronchi", B: "Alveoli", C: "Trachea", D: "Bronchioles" },
            answer: "B", explanation: "Gas exchange (O₂ and CO₂) occurs across the thin walls of the alveoli."
        },
        {
            id: "bio_036", topic: "Plant Biology", year: "2024",
            question: "Geotropism is the response of plants to...",
            options: { A: "Light", B: "Gravity", C: "Water", D: "Touch" },
            answer: "B", explanation: "Geotropism (gravitropism) is the growth response of plants to gravity."
        },
        {
            id: "bio_037", topic: "Microbiology", year: "2023",
            question: "Antibiotics are effective against...",
            options: { A: "Viruses", B: "Bacteria", C: "Fungi", D: "All pathogens" },
            answer: "B", explanation: "Antibiotics are substances that kill or inhibit the growth of bacteria."
        },
        {
            id: "bio_038", topic: "Evolution", year: "2022",
            question: "Natural selection acts on...",
            options: { A: "Genotype", B: "Phenotype", C: "Gene pool", D: "Mutation rate" },
            answer: "B", explanation: "Natural selection acts on the phenotype (observable traits) of organisms."
        },
        {
            id: "bio_039", topic: "Human Biology", year: "2024",
            question: "The hormone that triggers ovulation is...",
            options: { A: "FSH", B: "LH", C: "Oestrogen", D: "Progesterone" },
            answer: "B", explanation: "Luteinizing hormone (LH) surge triggers ovulation in the menstrual cycle."
        },
        {
            id: "bio_040", topic: "Reproduction", year: "2023",
            question: "Pollination is the transfer of pollen from...",
            options: { A: "Anther to stigma", B: "Stigma to anther", C: "Ovary to anther", D: "Anther to ovary" },
            answer: "A", explanation: "Pollination is the transfer of pollen grains from the anther to the stigma."
        },
        {
            id: "bio_041", topic: "Cell Biology", year: "2022",
            question: "During mitosis, chromosomes line up at the equator during...",
            options: { A: "Prophase", B: "Metaphase", C: "Anaphase", D: "Telophase" },
            answer: "B", explanation: "During metaphase, chromosomes align at the metaphase plate (equator)."
        },
        {
            id: "bio_042", topic: "Genetics", year: "2024",
            question: "A test cross is used to determine...",
            options: { A: "The genotype of a dominant phenotype", B: "The number of chromosomes", C: "The mutation rate", D: "The DNA sequence" },
            answer: "A", explanation: "A test cross (with homozygous recessive) reveals whether a dominant phenotype is homozygous or heterozygous."
        },
        {
            id: "bio_043", topic: "Ecology", year: "2023",
            question: "The climax community in ecological succession is...",
            options: { A: "The first community", B: "The final stable community", C: "A temporary community", D: "A pioneer community" },
            answer: "B", explanation: "The climax community is the final, stable, self-perpetuating stage of succession."
        },
        {
            id: "bio_044", topic: "Physiology", year: "2022",
            question: "The site of protein digestion in the human body is...",
            options: { A: "Mouth", B: "Stomach and small intestine", C: "Large intestine", D: "Liver" },
            answer: "B", explanation: "Protein digestion begins in the stomach (pepsin) and continues in the small intestine (trypsin, peptidases)."
        },
        {
            id: "bio_045", topic: "Plant Biology", year: "2024",
            question: "The opening and closing of stomata is controlled by...",
            options: { A: "Xylem cells", B: "Guard cells", C: "Mesophyll cells", D: "Epidermal cells" },
            answer: "B", explanation: "Guard cells surrounding the stomata control their opening and closing."
        },
        {
            id: "bio_046", topic: "Microbiology", year: "2023",
            question: "Yeast is used in bread making because it produces...",
            options: { A: "Oxygen", B: "Carbon dioxide", C: "Alcohol", D: "Lactic acid" },
            answer: "B", explanation: "Yeast ferments sugars, producing CO₂ which causes bread to rise."
        },
        {
            id: "bio_047", topic: "Evolution", year: "2022",
            question: "Speciation is the formation of...",
            options: { A: "New cells", B: "New species", C: "New organs", D: "New proteins" },
            answer: "B", explanation: "Speciation is the evolutionary process by which new biological species arise."
        },
        {
            id: "bio_048", topic: "Human Biology", year: "2024",
            question: "The white blood cells that produce antibodies are called...",
            options: { A: "Neutrophils", B: "Lymphocytes", C: "Erythrocytes", D: "Platelets" },
            answer: "B", explanation: "Lymphocytes (B cells) produce antibodies as part of the immune response."
        },
        {
            id: "bio_049", topic: "Reproduction", year: "2023",
            question: "The menstrual cycle is controlled by hormones produced in the...",
            options: { A: "Uterus", B: "Pituitary gland and ovary", C: "Thyroid gland", D: "Adrenal gland" },
            answer: "B", explanation: "The menstrual cycle is regulated by hormones from the pituitary gland (FSH, LH) and ovaries (oestrogen, progesterone)."
        },
        {
            id: "bio_050", topic: "Biotechnology", year: "2022",
            question: "Genetic engineering involves...",
            options: { A: "Breeding animals", B: "Manipulating DNA", C: "Growing plants", D: "Making vaccines" },
            answer: "B", explanation: "Genetic engineering is the direct manipulation of an organism's genes/DNA."
        }
    ]
};