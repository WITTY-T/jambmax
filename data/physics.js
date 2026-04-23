const PHYSICS_DATA = {
    name: "Physics",
    topics: ["Mechanics", "Heat", "Waves", "Optics", "Electricity", "Modern Physics", "Magnetism", "Nuclear Physics", "Measurements", "Simple Harmonic Motion"],
    questions: [
        {
            id: "phy_001", topic: "Mechanics", year: "2024",
            question: "A body moving with uniform acceleration covers 36m in the 4th second and 48m in the 6th second. Find the acceleration.",
            options: { A: "3 m/s²", B: "4 m/s²", C: "6 m/s²", D: "12 m/s²" },
            answer: "C", explanation: "Using sₙ = u + a(n - 0.5): s₆ - s₄ = 2a = 12, therefore a = 6 m/s²."
        },
        {
            id: "phy_002", topic: "Electricity", year: "2024",
            question: "Three resistors of 2Ω, 4Ω and 6Ω are connected in parallel. Find the equivalent resistance.",
            options: { A: "12Ω", B: "1.09Ω", C: "0.92Ω", D: "2Ω" },
            answer: "B", explanation: "1/R = 1/2 + 1/4 + 1/6 = 11/12. R = 12/11 ≈ 1.09Ω."
        },
        {
            id: "phy_003", topic: "Waves", year: "2023",
            question: "The frequency of a wave is 50Hz and its wavelength is 4m. Calculate its velocity.",
            options: { A: "12.5 m/s", B: "54 m/s", C: "200 m/s", D: "400 m/s" },
            answer: "C", explanation: "v = fλ = 50 × 4 = 200 m/s."
        },
        {
            id: "phy_004", topic: "Heat", year: "2023",
            question: "Calculate the heat required to raise the temperature of 2kg of water from 20°C to 80°C. (Specific heat capacity = 4200 J/kgK)",
            options: { A: "168 kJ", B: "336 kJ", C: "504 kJ", D: "672 kJ" },
            answer: "C", explanation: "Q = mcΔθ = 2 × 4200 × 60 = 504,000 J = 504 kJ."
        },
        {
            id: "phy_005", topic: "Optics", year: "2022",
            question: "An object is placed 20cm from a concave mirror of focal length 15cm. Find the image distance.",
            options: { A: "30cm", B: "45cm", C: "60cm", D: "75cm" },
            answer: "C", explanation: "Using 1/f = 1/u + 1/v: 1/15 = 1/20 + 1/v. 1/v = 1/15 - 1/20 = 1/60. v = 60cm."
        },
        {
            id: "phy_006", topic: "Mechanics", year: "2024",
            question: "A force of 20N acts on a mass of 4kg. Calculate the acceleration produced.",
            options: { A: "2 m/s²", B: "4 m/s²", C: "5 m/s²", D: "80 m/s²" },
            answer: "C", explanation: "F = ma, a = F/m = 20/4 = 5 m/s²."
        },
        {
            id: "phy_007", topic: "Magnetism", year: "2023",
            question: "The region around a magnet where its influence can be felt is called...",
            options: { A: "Magnetic field", B: "Electric field", C: "Gravitational field", D: "Electromagnetic field" },
            answer: "A", explanation: "A magnetic field is the region around a magnet where magnetic forces act."
        },
        {
            id: "phy_008", topic: "Modern Physics", year: "2022",
            question: "The process by which a heavy nucleus splits into lighter nuclei is called...",
            options: { A: "Fusion", B: "Fission", C: "Radioactivity", D: "Ionization" },
            answer: "B", explanation: "Nuclear fission is the splitting of a heavy nucleus into lighter nuclei."
        },
        {
            id: "phy_009", topic: "Electricity", year: "2024",
            question: "The SI unit of electric charge is...",
            options: { A: "Volt", B: "Ampere", C: "Coulomb", D: "Ohm" },
            answer: "C", explanation: "The coulomb (C) is the SI unit of electric charge."
        },
        {
            id: "phy_010", topic: "Waves", year: "2023",
            question: "Echo is caused by...",
            options: { A: "Refraction of sound", B: "Reflection of sound", C: "Diffraction of sound", D: "Interference of sound" },
            answer: "B", explanation: "An echo is the reflection of sound waves from a surface back to the listener."
        },
        {
            id: "phy_011", topic: "Heat", year: "2022",
            question: "The boiling point of water at standard atmospheric pressure is...",
            options: { A: "0°C", B: "50°C", C: "100°C", D: "212°C" },
            answer: "C", explanation: "Water boils at 100°C at standard atmospheric pressure (1 atm or 101325 Pa)."
        },
        {
            id: "phy_012", topic: "Mechanics", year: "2024",
            question: "The energy possessed by a body by virtue of its motion is called...",
            options: { A: "Potential energy", B: "Kinetic energy", C: "Thermal energy", D: "Chemical energy" },
            answer: "B", explanation: "Kinetic energy is the energy possessed by a body due to its motion. KE = ½mv²."
        },
        {
            id: "phy_013", topic: "Optics", year: "2023",
            question: "A lens that is thicker at the center than at the edges is a...",
            options: { A: "Concave lens", B: "Convex lens", C: "Plane lens", D: "Cylindrical lens" },
            answer: "B", explanation: "A convex (converging) lens is thicker at the center than at the edges."
        },
        {
            id: "phy_014", topic: "Nuclear Physics", year: "2022",
            question: "The half-life of a radioactive substance is the time taken for...",
            options: { A: "All atoms to decay", B: "Half of the atoms to decay", C: "Quarter of the atoms to decay", D: "Activity to double" },
            answer: "B", explanation: "Half-life is the time required for half of the radioactive atoms present to decay."
        },
        {
            id: "phy_015", topic: "Electricity", year: "2024",
            question: "Ohm's Law states that...",
            options: { A: "V = IR", B: "V = I/R", C: "R = VI", D: "I = VR" },
            answer: "A", explanation: "Ohm's Law: V = IR, where V is voltage, I is current, and R is resistance."
        },
        {
            id: "phy_016", topic: "Waves", year: "2023",
            question: "The audible frequency range for human hearing is...",
            options: { A: "0-20 Hz", B: "20-20,000 Hz", C: "20,000-40,000 Hz", D: "Above 40,000 Hz" },
            answer: "B", explanation: "Humans can typically hear sounds between 20 Hz and 20,000 Hz."
        },
        {
            id: "phy_017", topic: "Mechanics", year: "2022",
            question: "The unit of power is...",
            options: { A: "Joule", B: "Watt", C: "Newton", D: "Pascal" },
            answer: "B", explanation: "Power is measured in watts (W). 1 W = 1 J/s."
        },
        {
            id: "phy_018", topic: "Heat", year: "2024",
            question: "The instrument used to measure temperature is called a...",
            options: { A: "Barometer", B: "Thermometer", C: "Hygrometer", D: "Manometer" },
            answer: "B", explanation: "A thermometer is used to measure temperature."
        },
        {
            id: "phy_019", topic: "Magnetism", year: "2023",
            question: "The Earth behaves as if it has a giant magnet with its magnetic pole near the...",
            options: { A: "Equator", B: "Geographic North Pole", C: "Geographic South Pole", D: "Tropic of Cancer" },
            answer: "B", explanation: "Earth's magnetic south pole is near the geographic North Pole, which is why compass needles point north."
        },
        {
            id: "phy_020", topic: "Modern Physics", year: "2022",
            question: "The photoelectric effect demonstrates the...",
            options: { A: "Wave nature of light", B: "Particle nature of light", C: "Dual nature of matter", D: "Electromagnetic nature of light" },
            answer: "B", explanation: "The photoelectric effect supports the particle (photon) theory of light."
        },
        {
            id: "phy_021", topic: "Measurements", year: "2024",
            question: "The least count of a vernier caliper is...",
            options: { A: "0.1 mm", B: "0.01 mm", C: "0.001 mm", D: "1 mm" },
            answer: "B", explanation: "A standard vernier caliper has a least count of 0.01 mm or 0.001 cm."
        },
        {
            id: "phy_022", topic: "Simple Harmonic Motion", year: "2023",
            question: "The period of a simple pendulum depends on...",
            options: { A: "Mass of the bob", B: "Length of the string", C: "Amplitude", D: "Color of the bob" },
            answer: "B", explanation: "T = 2π√(L/g). The period depends on length and gravitational acceleration, not mass."
        },
        {
            id: "phy_023", topic: "Mechanics", year: "2022",
            question: "The momentum of a body of mass 5kg moving at 4m/s is...",
            options: { A: "9 kg m/s", B: "20 kg m/s", C: "1.25 kg m/s", D: "0.8 kg m/s" },
            answer: "B", explanation: "p = mv = 5 × 4 = 20 kg m/s."
        },
        {
            id: "phy_024", topic: "Heat", year: "2024",
            question: "The process of heat transfer through electromagnetic waves is called...",
            options: { A: "Conduction", B: "Convection", C: "Radiation", D: "Evaporation" },
            answer: "C", explanation: "Radiation is heat transfer through electromagnetic waves without a medium."
        },
        {
            id: "phy_025", topic: "Electricity", year: "2023",
            question: "The resistance of a wire depends on all EXCEPT...",
            options: { A: "Length", B: "Cross-sectional area", C: "Color", D: "Resistivity" },
            answer: "C", explanation: "R = ρL/A. Resistance depends on resistivity, length, and area, not color."
        },
        {
            id: "phy_026", topic: "Optics", year: "2022",
            question: "Total internal reflection occurs when light travels from...",
            options: { A: "Air to glass", B: "Glass to air", C: "Air to water", D: "Water to air" },
            answer: "B", explanation: "Total internal reflection occurs when light travels from denser to rarer medium (e.g., glass to air) at angles greater than critical angle."
        },
        {
            id: "phy_027", topic: "Waves", year: "2024",
            question: "The distance between two successive crests of a wave is called...",
            options: { A: "Amplitude", B: "Frequency", C: "Wavelength", D: "Period" },
            answer: "C", explanation: "Wavelength (λ) is the distance between two successive crests or troughs."
        },
        {
            id: "phy_028", topic: "Magnetism", year: "2023",
            question: "The force between two magnetic poles is governed by...",
            options: { A: "Newton's Law", B: "Coulomb's Law", C: "Ohm's Law", D: "Faraday's Law" },
            answer: "B", explanation: "Coulomb's law for magnetism describes the force between magnetic poles."
        },
        {
            id: "phy_029", topic: "Nuclear Physics", year: "2022",
            question: "Alpha particles consist of...",
            options: { A: "2 protons and 2 neutrons", B: "1 proton and 1 electron", C: "2 electrons", D: "1 neutron" },
            answer: "A", explanation: "An alpha particle is a helium nucleus: 2 protons and 2 neutrons."
        },
        {
            id: "phy_030", topic: "Mechanics", year: "2024",
            question: "The work done in lifting a 10kg mass through 5m is... (g = 10 m/s²)",
            options: { A: "50 J", B: "100 J", C: "250 J", D: "500 J" },
            answer: "D", explanation: "W = mgh = 10 × 10 × 5 = 500 J."
        },
        {
            id: "phy_031", topic: "Heat", year: "2023",
            question: "The latent heat of fusion is the heat required to...",
            options: { A: "Raise temperature by 1°C", B: "Change solid to liquid at constant temperature", C: "Change liquid to gas", D: "Expand a solid" },
            answer: "B", explanation: "Latent heat of fusion is the heat required to change a solid to liquid without temperature change."
        },
        {
            id: "phy_032", topic: "Electricity", year: "2022",
            question: "Kirchhoff's current law states that...",
            options: { A: "V = IR", B: "Sum of currents entering = sum leaving", C: "Power = VI", D: "R = ρL/A" },
            answer: "B", explanation: "KCL: The algebraic sum of currents at a junction is zero (current in = current out)."
        },
        {
            id: "phy_033", topic: "Optics", year: "2024",
            question: "A magnifying glass uses a...",
            options: { A: "Concave lens", B: "Convex lens", C: "Plane mirror", D: "Prism" },
            answer: "B", explanation: "A magnifying glass uses a convex lens to produce an enlarged virtual image."
        },
        {
            id: "phy_034", topic: "Waves", year: "2023",
            question: "The speed of sound in air at room temperature is approximately...",
            options: { A: "34 m/s", B: "340 m/s", C: "3400 m/s", D: "3,400,000 m/s" },
            answer: "B", explanation: "Speed of sound in air at 20°C is approximately 343 m/s, often rounded to 340 m/s."
        },
        {
            id: "phy_035", topic: "Modern Physics", year: "2022",
            question: "Einstein's mass-energy equivalence is given by...",
            options: { A: "E = mc", B: "E = mc²", C: "E = m²c", D: "E = m/c²" },
            answer: "B", explanation: "E = mc² is Einstein's famous equation relating mass and energy."
        },
        {
            id: "phy_036", topic: "Measurements", year: "2024",
            question: "The precision of a measurement depends on...",
            options: { A: "The size of the object", B: "The least count of the instrument", C: "The skill of the observer only", D: "The temperature" },
            answer: "B", explanation: "Precision depends on the least count (smallest measurable quantity) of the instrument."
        },
        {
            id: "phy_037", topic: "Simple Harmonic Motion", year: "2023",
            question: "The maximum displacement from equilibrium in SHM is called...",
            options: { A: "Period", B: "Frequency", C: "Amplitude", D: "Phase" },
            answer: "C", explanation: "Amplitude is the maximum displacement from the equilibrium position."
        },
        {
            id: "phy_038", topic: "Mechanics", year: "2022",
            question: "The principle of conservation of momentum applies when...",
            options: { A: "External forces act", B: "No external forces act", C: "Friction is present", D: "Gravity is absent" },
            answer: "B", explanation: "Momentum is conserved in a closed system with no external forces."
        },
        {
            id: "phy_039", topic: "Heat", year: "2024",
            question: "The first law of thermodynamics is a statement of...",
            options: { A: "Conservation of mass", B: "Conservation of energy", C: "Conservation of momentum", D: "Conservation of charge" },
            answer: "B", explanation: "The first law of thermodynamics states that energy cannot be created or destroyed, only converted."
        },
        {
            id: "phy_040", topic: "Electricity", year: "2023",
            question: "The emf of a cell is the...",
            options: { A: "Current it supplies", B: "Potential difference across terminals when no current flows", C: "Internal resistance", D: "Power output" },
            answer: "B", explanation: "EMF is the potential difference across the terminals when the cell is not connected to a circuit."
        },
        {
            id: "phy_041", topic: "Optics", year: "2022",
            question: "A rainbow is formed due to...",
            options: { A: "Reflection only", B: "Refraction only", C: "Dispersion and internal reflection", D: "Diffraction" },
            answer: "C", explanation: "Rainbows are formed by dispersion of sunlight and internal reflection in water droplets."
        },
        {
            id: "phy_042", topic: "Waves", year: "2024",
            question: "Transverse waves can travel through...",
            options: { A: "Solids only", B: "Liquids only", C: "Gases only", D: "All media" },
            answer: "A", explanation: "Transverse waves require a medium with rigidity, so they travel through solids and on liquid surfaces but not through bulk liquids/gases."
        },
        {
            id: "phy_043", topic: "Magnetism", year: "2023",
            question: "The SI unit of magnetic flux density is...",
            options: { A: "Henry", B: "Tesla", C: "Weber", D: "Gauss" },
            answer: "B", explanation: "The tesla (T) is the SI unit of magnetic flux density or magnetic field strength."
        },
        {
            id: "phy_044", topic: "Nuclear Physics", year: "2022",
            question: "Beta particles are...",
            options: { A: "Helium nuclei", B: "Electrons", C: "Neutrons", D: "Protons" },
            answer: "B", explanation: "Beta particles are high-energy electrons (β⁻) or positrons (β⁺) emitted during radioactive decay."
        },
        {
            id: "phy_045", topic: "Mechanics", year: "2024",
            question: "The efficiency of a machine is the ratio of...",
            options: { A: "Input to output", B: "Output to input", C: "Work to time", D: "Force to distance" },
            answer: "B", explanation: "Efficiency = (Useful output work / Input work) × 100%."
        },
        {
            id: "phy_046", topic: "Heat", year: "2023",
            question: "An ideal gas is one that...",
            options: { A: "Has zero mass", B: "Obeys Boyle's and Charles' laws perfectly", C: "Cannot be compressed", D: "Has infinite temperature" },
            answer: "B", explanation: "An ideal gas perfectly obeys the gas laws (Boyle's, Charles', Gay-Lussac's) under all conditions."
        },
        {
            id: "phy_047", topic: "Electricity", year: "2022",
            question: "The heating element of an electric iron is made of...",
            options: { A: "Copper", B: "Nichrome", C: "Aluminum", D: "Silver" },
            answer: "B", explanation: "Nichrome (nickel-chromium alloy) has high resistivity and does not oxidize easily at high temperatures."
        },
        {
            id: "phy_048", topic: "Optics", year: "2024",
            question: "The critical angle is the angle of incidence in the denser medium for which the angle of refraction is...",
            options: { A: "0°", B: "45°", C: "90°", D: "180°" },
            answer: "C", explanation: "At critical angle, refracted ray grazes the boundary (angle of refraction = 90°)."
        },
        {
            id: "phy_049", topic: "Waves", year: "2023",
            question: "Resonance occurs when...",
            options: { A: "Frequency matches natural frequency", B: "Amplitude is zero", C: "Wavelength is maximum", D: "Speed is minimum" },
            answer: "A", explanation: "Resonance occurs when the driving frequency matches the natural frequency of the system."
        },
        {
            id: "phy_050", topic: "Modern Physics", year: "2022",
            question: "The work function of a metal is the...",
            options: { A: "Energy to emit an electron", B: "Minimum energy to eject an electron", C: "Kinetic energy of emitted electron", D: "Potential energy of the metal" },
            answer: "B", explanation: "Work function is the minimum energy needed to remove an electron from the metal surface."
        }
    ]
};