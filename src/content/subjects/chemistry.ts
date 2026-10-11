import type { Subject } from "../types";

export const chemistry: Subject = {
  slug: "chemistry",
  name: "Chemistry",
  short: "Chem",
  color: "#FF9600",
  emoji: "🧪",
  group: "Sciences",
  levels: ["SL", "HL"],
  description:
    "Models of the particulate nature of matter, bonding and structure, and what drives, limits and speeds up chemical change.",
  resources: [
    {
      name: "IB Official",
      url: "https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/",
      note: "Subject brief and syllabus outline",
    },
    {
      name: "RevisionDojo",
      url: "https://www.revisiondojo.com/",
      note: "Topic questions with worked solutions",
    },
    {
      name: "InThinking",
      url: "https://www.thinkib.net/chemistry",
      note: "Teacher-written lessons and IA guidance",
    },
    {
      name: "Nail IB",
      url: "https://nailib.com/",
      note: "Past-paper practice and study guides",
    },
  ],
  units: [
    {
      id: "ch-u1",
      code: "Structure 1",
      title: "Models of the particulate nature of matter",
      lessons: [
        {
          id: "ch-l1",
          title: "Atomic structure and the mole",
          questions: [
            {
              id: "ch-l1-q1",
              type: "mcq",
              prompt:
                "Isotopes of an element differ in their number of",
              choices: ["protons", "neutrons", "electrons", "electron shells"],
              answerIndex: 1,
              explanation:
                "Same atomic number (protons), different mass number → different neutrons.",
            },
            {
              id: "ch-l1-q2",
              type: "mcq",
              prompt:
                "One mole of any substance contains approximately",
              choices: [
                "6.02 × 10²³ particles",
                "6.02 × 10²² particles",
                "1.6 × 10⁻¹⁹ particles",
                "12 grams",
              ],
              answerIndex: 0,
              explanation: "Avogadro constant Nᴀ = 6.022 × 10²³ mol⁻¹.",
            },
            {
              id: "ch-l1-q3",
              type: "mcq",
              prompt:
                "The empirical formula of a compound with 40% C, 6.7% H, 53.3% O by mass (Mᵣ = 180) is",
              choices: ["CH₂O", "C₆H₁₂O₆", "C₂H₄O₂", "CHO"],
              answerIndex: 0,
              explanation:
                "Mole ratio 3.33:6.7:3.33 ≈ 1:2:1 → CH₂O. (The molecular formula is C₆H₁₂O₆.)",
            },
            {
              id: "ch-l1-q4",
              type: "tf",
              prompt:
                "The relative atomic mass of chlorine (35.5) is a whole number.",
              answer: false,
              explanation:
                "It is the weighted average of isotopes ³⁵Cl and ³⁷Cl, hence non-integer.",
            },
            {
              id: "ch-l1-q5",
              type: "short",
              prompt:
                "How many moles are in 10 g of CaCO₃ (Mᵣ = 100)?",
              answer: "0.1 mol",
              acceptable: ["0.10 mol", "0.1"],
              keywords: ["0.1"],
              explanation: "n = m/M = 10/100 = 0.1 mol.",
            },
            {
              id: "ch-l1-q6",
              type: "short",
              prompt:
                "Explain what a mass spectrum shows and how it reveals isotopic composition.",
              answer:
                "It shows relative abundance vs mass-to-charge ratio; separate peaks reveal different isotopes.",
              keywords: ["abundance", "mass", "isotop", "peak"],
              explanation:
                "Each isotope gives a peak at its m/z with height ∝ abundance → weighted Aᵣ.",
            },
          ],
        },
        {
          id: "ch-l2",
          title: "Stoichiometry and gases",
          questions: [
            {
              id: "ch-l2-q1",
              type: "mcq",
              prompt:
                "In the reaction 2H₂ + O₂ → 2H₂O, 4 mol of H₂ reacts with",
              choices: ["1 mol O₂", "4 mol O₂", "2 mol O₂", "0.5 mol O₂"],
              answerIndex: 2,
              explanation: "Mole ratio H₂:O₂ is 2:1, so 4 mol H₂ needs 2 mol O₂.",
            },
            {
              id: "ch-l2-q2",
              type: "mcq",
              prompt:
                "At STP, one mole of an ideal gas occupies about",
              choices: ["22.7 dm³", "1 dm³", "24.0 dm³ only for O₂", "2.24 dm³"],
              answerIndex: 0,
              explanation:
                "Molar volume ≈ 22.7 dm³/mol at STP (IB data booklet value).",
            },
            {
              id: "ch-l2-q3",
              type: "mcq",
              prompt:
                "The limiting reactant is the one that",
              choices: [
                "is present in the largest mass",
                "runs out first and stops the reaction",
                "has the smallest molar mass",
                "is always the gas",
              ],
              answerIndex: 1,
              explanation:
                "It is consumed completely first, capping the amount of product.",
            },
            {
              id: "ch-l2-q4",
              type: "tf",
              prompt:
                "Percentage yield can exceed 100% when a product contains impurities.",
              answer: false,
              explanation:
                "% yield is actual/theoretical × 100 and cannot exceed 100%; impurities affect purity, not yield.",
            },
            {
              id: "ch-l2-q5",
              type: "short",
              prompt:
                "How many moles of CO₂ form when 2 mol of propane C₃H₈ burn completely (C₃H₈ + 5O₂ → 3CO₂ + 4H₂O)?",
              answer: "6 mol",
              acceptable: ["6"],
              keywords: ["6"],
              explanation: "1 mol C₃H₈ → 3 mol CO₂, so 2 mol → 6 mol.",
            },
            {
              id: "ch-l2-q6",
              type: "short",
              prompt:
                "State the four ideal-gas assumptions about particle volume and intermolecular forces.",
              answer:
                "Particles have negligible volume and no intermolecular forces; collisions are elastic; motion is random/continuous.",
              keywords: ["volume", "negligible", "force", "elastic"],
              explanation:
                "Zero particle volume, no attractions, elastic collisions, random motion — deviations at high P / low T.",
            },
          ],
        },
      ],
    },
    {
      id: "ch-u2",
      code: "Structure 2 & 3",
      title: "Bonding, structure and classification",
      lessons: [
        {
          id: "ch-l3",
          title: "Bonding models and properties",
          questions: [
            {
              id: "ch-l3-q1",
              type: "mcq",
              prompt:
                "Ionic compounds conduct electricity when molten or dissolved because",
              choices: [
                "electrons flow through the lattice",
                "mobile ions carry charge",
                "protons move freely",
                "the ionic bonds break into metals",
              ],
              answerIndex: 1,
              explanation:
                "Ions are fixed in the solid lattice but free to move when molten/aqueous.",
            },
            {
              id: "ch-l3-q2",
              type: "mcq",
              prompt:
                "The bond in a water molecule is best described as",
              choices: [
                "ionic",
                "metallic",
                "polar covalent",
                "hydrogen bonding inside the molecule",
              ],
              answerIndex: 2,
              explanation:
                "O–H is polar covalent; hydrogen bonding is the intermolecular force BETWEEN molecules.",
            },
            {
              id: "ch-l3-q3",
              type: "mcq",
              prompt:
                "Metals are malleable because",
              choices: [
                "their bonds are weak",
                "layers of cations can slide while the electron sea keeps bonding",
                "they contain no electrons",
                "ions rearrange into covalent bonds",
              ],
              answerIndex: 1,
              explanation:
                "Non-directional metallic bonding (delocalised electrons) lets layers slide without fracture.",
            },
            {
              id: "ch-l3-q4",
              type: "tf",
              prompt:
                "A molecule can be non-polar overall even though it contains polar bonds.",
              answer: true,
              explanation:
                "Symmetrical geometry cancels bond dipoles, e.g. CO₂ is linear and non-polar.",
            },
            {
              id: "ch-l3-q5",
              type: "short",
              prompt:
                "Explain why diamond is very hard but graphite conducts electricity, although both are pure carbon.",
              answer:
                "Diamond: each C has 4 strong covalent bonds in a 3-D lattice. Graphite: layers with delocalised electrons that carry current.",
              keywords: ["covalent", "delocalised", "delocalized", "layers", "electron"],
              explanation:
                "Structure determines properties: 3-D covalent network vs layered structure with free electrons.",
            },
            {
              id: "ch-l3-q6",
              type: "short",
              prompt:
                "Predict the shape and bond angle of methane CH₄ using VSEPR.",
              answer: "Tetrahedral, 109.5°",
              acceptable: ["tetrahedral", "109.5"],
              keywords: ["tetra", "109"],
              explanation:
                "4 bonding pairs, no lone pairs → tetrahedral, 109.5°.",
            },
          ],
        },
        {
          id: "ch-l4",
          title: "Hybridisation and periodicity",
          level: "HL",
          questions: [
            {
              id: "ch-l4-q1",
              type: "mcq",
              prompt:
                "The carbon atoms in ethene C₂H₄ are",
              choices: ["sp hybridised", "sp² hybridised", "sp³ hybridised", "unhybridised"],
              answerIndex: 1,
              explanation:
                "Each C has 3 electron domains (one σ to C, two σ to H) → sp², with unhybridised p forming the π bond.",
            },
            {
              id: "ch-l4-q2",
              type: "mcq",
              prompt:
                "Across a period, first ionisation energy generally increases because",
              choices: [
                "atoms get larger",
                "shielding increases dramatically",
                "effective nuclear charge increases with similar shielding",
                "electrons move to higher shells",
              ],
              answerIndex: 2,
              explanation:
                "More protons, same shell → stronger attraction → higher IE (with small dips).",
            },
            {
              id: "ch-l4-q3",
              type: "mcq",
              prompt:
                "A σ bond forms by",
              choices: [
                "sideways overlap of p orbitals",
                "end-on (head-on) orbital overlap along the internuclear axis",
                "sharing of two lone pairs",
                "electron transfer",
              ],
              answerIndex: 1,
              explanation:
                "σ = head-on overlap; π = sideways overlap of p orbitals.",
            },
            {
              id: "ch-l4-q4",
              type: "tf",
              prompt:
                "A double bond consists of one σ bond and one π bond.",
              answer: true,
              explanation:
                "First bond is σ; the second is π from unhybridised p orbitals.",
            },
            {
              id: "ch-l4-q5",
              type: "short",
              prompt:
                "State the hybridisation and bond angle around the central atom in BF₃.",
              answer: "sp², 120°",
              acceptable: ["sp2", "120"],
              keywords: ["sp", "120"],
              explanation:
                "3 electron domains → trigonal planar sp², 120°.",
            },
            {
              id: "ch-l4-q6",
              type: "short",
              prompt:
                "Explain the small decrease in first ionisation energy from Mg to Al across period 3.",
              answer:
                "Al's outer electron is in a 3p subshell — higher in energy and slightly shielded by 3s — so it is removed more easily.",
              keywords: ["3p", "subshell", "shield", "higher"],
              explanation:
                "3p is further/higher energy than 3s → lower IE despite more protons.",
            },
          ],
        },
      ],
    },
    {
      id: "ch-u3",
      code: "Reactivity 1",
      title: "What drives chemical reactions",
      lessons: [
        {
          id: "ch-l5",
          title: "Enthalpy and Hess cycles",
          questions: [
            {
              id: "ch-l5-q1",
              type: "mcq",
              prompt:
                "An exothermic reaction has",
              choices: [
                "ΔH positive",
                "products higher in energy than reactants",
                "ΔH negative",
                "no temperature change",
              ],
              answerIndex: 2,
              explanation:
                "Heat released → ΔH < 0; products sit lower on an energy profile.",
            },
            {
              id: "ch-l5-q2",
              type: "mcq",
              prompt:
                "Hess's law works because enthalpy is",
              choices: [
                "always negative",
                "a state function — path independent",
                "measured in joules per mole",
                "equal to bond energy",
              ],
              answerIndex: 1,
              explanation:
                "Only initial/final states matter, so ΔH is the same by any route.",
            },
            {
              id: "ch-l5-q3",
              type: "mcq",
              prompt:
                "Breaking bonds is",
              choices: [
                "exothermic",
                "endothermic",
                "energy-neutral",
                "always spontaneous",
              ],
              answerIndex: 1,
              explanation:
                "Energy must be absorbed to break bonds; forming bonds releases energy.",
            },
            {
              id: "ch-l5-q4",
              type: "tf",
              prompt:
                "The standard enthalpy of formation of an element in its standard state is zero by definition.",
              answer: true,
              explanation: "e.g. ΔHf°(O₂(g)) = 0 kJ/mol.",
            },
            {
              id: "ch-l5-q5",
              type: "short",
              prompt:
                "Calculate ΔH for CH₄ + 2O₂ → CO₂ + 2H₂O given ΔHf°: CH₄ = −75, CO₂ = −394, H₂O = −286 kJ/mol.",
              answer: "-891 kJ/mol",
              acceptable: ["-891", "−891 kJ", "-890"],
              keywords: ["89"],
              explanation:
                "ΔH = [(−394) + 2(−286)] − [(−75)] = −966 + 75 = −891 kJ/mol.",
            },
            {
              id: "ch-l5-q6",
              type: "short",
              prompt:
                "Sketch/describe the energy profile of an endothermic reaction including activation energy and ΔH.",
              answer:
                "Products above reactants; activation energy is the hump from reactants to the peak; ΔH is the positive gap.",
              keywords: ["products", "above", "activation", "higher"],
              explanation:
                "Ea = reactants → peak; ΔH = reactants → products (positive).",
            },
          ],
        },
        {
          id: "ch-l6",
          title: "Entropy and Gibbs free energy",
          level: "HL",
          questions: [
            {
              id: "ch-l6-q1",
              type: "mcq",
              prompt:
                "A spontaneous reaction has",
              choices: [
                "ΔG > 0",
                "ΔH < 0 always",
                "ΔG < 0",
                "ΔS < 0 always",
              ],
              answerIndex: 2,
              explanation:
                "Spontaneity is decided by ΔG = ΔH − TΔS < 0, not by ΔH or ΔS alone.",
            },
            {
              id: "ch-l6-q2",
              type: "mcq",
              prompt:
                "Entropy increases when",
              choices: [
                "a gas condenses",
                "a solid sublimes to gas",
                "ions precipitate",
                "molecules combine into fewer gas molecules",
              ],
              answerIndex: 1,
              explanation:
                "More dispersed particles/microstates → higher S; gas > liquid > solid.",
            },
            {
              id: "ch-l6-q3",
              type: "mcq",
              prompt:
                "For a reaction with ΔH < 0 and ΔS > 0, spontaneity is",
              choices: [
                "only at high T",
                "only at low T",
                "at all temperatures",
                "never",
              ],
              answerIndex: 2,
              explanation:
                "ΔG = negative − T(positive) is always negative.",
            },
            {
              id: "ch-l6-q4",
              type: "tf",
              prompt:
                "An endothermic reaction can never be spontaneous.",
              answer: false,
              explanation:
                "If ΔS is positive enough, TΔS can exceed ΔH at higher temperatures (e.g. NH₄NO₃ dissolving).",
            },
            {
              id: "ch-l6-q5",
              type: "short",
              prompt:
                "Calculate ΔG for a reaction with ΔH = −100 kJ/mol and ΔS = −0.2 kJ/K·mol at 298 K.",
              answer: "-40.4 kJ/mol",
              acceptable: ["-40.4", "-40"],
              keywords: ["-40", "40.4"],
              explanation:
                "ΔG = ΔH − TΔS = −100 − 298(−0.2) = −100 + 59.6 = −40.4 kJ/mol.",
            },
            {
              id: "ch-l6-q6",
              type: "short",
              prompt:
                "Explain why the melting of ice is spontaneous above 0 °C even though it is endothermic.",
              answer:
                "The entropy increase of liquid water outweighs the energy cost once TΔS > ΔH.",
              keywords: ["entropy", "disorder", "temperature", "tδs", "tΔs"],
              explanation:
                "ΔS > 0; above 273 K the TΔS term dominates → ΔG < 0.",
            },
          ],
        },
      ],
    },
    {
      id: "ch-u4",
      code: "Reactivity 2",
      title: "How much, how fast and how far",
      lessons: [
        {
          id: "ch-l7",
          title: "Equilibrium and rates",
          questions: [
            {
              id: "ch-l7-q1",
              type: "mcq",
              prompt:
                "At dynamic equilibrium",
              choices: [
                "the reaction has stopped",
                "forward and reverse rates are equal and concentrations stay constant",
                "all reactants have been used up",
                "products equal reactants in amount",
              ],
              answerIndex: 1,
              explanation:
                "Both reactions continue at equal rates → constant macroscopic properties.",
            },
            {
              id: "ch-l7-q2",
              type: "mcq",
              prompt:
                "Adding a catalyst to an equilibrium mixture",
              choices: [
                "shifts equilibrium toward products",
                "increases the equilibrium constant",
                "speeds up reaching equilibrium without shifting it",
                "lowers the yield",
              ],
              answerIndex: 2,
              explanation:
                "A catalyst lowers Ea for both directions equally; K and position are unchanged.",
            },
            {
              id: "ch-l7-q3",
              type: "mcq",
              prompt:
                "Raising the temperature increases reaction rate mainly because",
              choices: [
                "more collisions occur AND a greater fraction exceed Ea",
                "particles get heavier",
                "the activation energy decreases",
                "equilibrium always shifts right",
              ],
              answerIndex: 0,
              explanation:
                "Higher T → more frequent collisions and, crucially, more with E ≥ Ea (Maxwell–Boltzmann).",
            },
            {
              id: "ch-l7-q4",
              type: "tf",
              prompt:
                "For an exothermic equilibrium, increasing temperature increases the equilibrium yield of products.",
              answer: false,
              explanation:
                "Le Chatelier: heating an exothermic system shifts equilibrium toward reactants; K falls.",
            },
            {
              id: "ch-l7-q5",
              type: "short",
              prompt:
                "Write the equilibrium constant expression for N₂ + 3H₂ ⇌ 2NH₃.",
              answer: "Kc = [NH₃]² / ([N₂][H₂]³)",
              acceptable: ["Kc=[NH3]^2/[N2][H2]^3"],
              keywords: ["nh3", "n2", "h2", "squared", "²"],
              explanation:
                "Products over reactants, each raised to its stoichiometric coefficient.",
            },
            {
              id: "ch-l7-q6",
              type: "short",
              prompt:
                "State how increasing pressure affects the equilibrium position of the Haber reaction and why.",
              answer:
                "Shifts toward NH₃ — the side with fewer gas moles (4 → 2).",
              keywords: ["ammonia", "fewer", "moles", "product"],
              explanation:
                "Higher pressure favours fewer gas particles, i.e. the product side.",
            },
          ],
        },
        {
          id: "ch-l8",
          title: "Rate equations and Arrhenius",
          level: "HL",
          questions: [
            {
              id: "ch-l8-q1",
              type: "mcq",
              prompt:
                "If doubling [A] doubles the rate, the reaction order in A is",
              choices: ["zero", "first", "second", "half"],
              answerIndex: 1,
              explanation: "rate ∝ [A]¹ → first order.",
            },
            {
              id: "ch-l8-q2",
              type: "mcq",
              prompt:
                "The rate-determining step is",
              choices: [
                "the fastest step",
                "the slowest step of the mechanism",
                "the last step",
                "always a unimolecular step",
              ],
              answerIndex: 1,
              explanation:
                "The slowest elementary step controls the overall rate and appears in the rate law.",
            },
            {
              id: "ch-l8-q3",
              type: "mcq",
              prompt:
                "In the Arrhenius equation k = Ae^(−Ea/RT), A represents",
              choices: [
                "activation energy",
                "the frequency/orientation factor for collisions",
                "enthalpy change",
                "equilibrium constant",
              ],
              answerIndex: 1,
              explanation:
                "The pre-exponential factor counts successful-orientation collision frequency.",
            },
            {
              id: "ch-l8-q4",
              type: "tf",
              prompt:
                "Reaction order can only be determined experimentally, not read from the balanced equation.",
              answer: true,
              explanation:
                "Orders reflect the mechanism; only elementary steps let you read order from coefficients.",
            },
            {
              id: "ch-l8-q5",
              type: "short",
              prompt:
                "For rate = k[A][B]², what happens to the rate if [B] triples while [A] is constant?",
              answer: "Rate increases 9-fold",
              acceptable: ["9", "nine times"],
              keywords: ["9"],
              explanation: "rate ∝ [B]² → 3² = 9× faster.",
            },
            {
              id: "ch-l8-q6",
              type: "short",
              prompt:
                "Explain how a catalyst changes the activation energy and the effect on a Maxwell–Boltzmann distribution interpretation.",
              answer:
                "It provides an alternative pathway with lower Ea, so a larger fraction of particles have enough energy to react.",
              keywords: ["activation", "lower", "pathway", "fraction", "energy"],
              explanation:
                "Lower Ea → exponentially more collisions exceed it → faster rate.",
            },
          ],
        },
      ],
    },
    {
      id: "ch-u5",
      code: "Reactivity 3",
      title: "Acids, redox and organic chemistry",
      lessons: [
        {
          id: "ch-l9",
          title: "Acids, bases and redox",
          questions: [
            {
              id: "ch-l9-q1",
              type: "mcq",
              prompt:
                "A Brønsted–Lowry acid is a",
              choices: [
                "proton acceptor",
                "proton donor",
                "electron donor",
                "hydroxide donor",
              ],
              answerIndex: 1,
              explanation: "Acid = H⁺ donor; base = H⁺ acceptor.",
            },
            {
              id: "ch-l9-q2",
              type: "mcq",
              prompt:
                "In the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, zinc is",
              choices: [
                "reduced",
                "the oxidising agent",
                "oxidised",
                "unchanged",
              ],
              answerIndex: 2,
              explanation:
                "Zn loses electrons (oxidation); it is the reducing agent.",
            },
            {
              id: "ch-l9-q3",
              type: "mcq",
              prompt:
                "The pH of 0.01 mol/dm³ strong acid HCl is",
              choices: ["2", "0.01", "12", "1"],
              answerIndex: 0,
              explanation: "pH = −log[H⁺] = −log(10⁻²) = 2.",
            },
            {
              id: "ch-l9-q4",
              type: "tf",
              prompt:
                "A weak acid is the same as a dilute acid.",
              answer: false,
              explanation:
                "Weak = partially ionised; dilute = low concentration. You can have concentrated weak acid.",
            },
            {
              id: "ch-l9-q5",
              type: "short",
              prompt:
                "State the oxidation number of sulfur in SO₄²⁻.",
              answer: "+6",
              acceptable: ["6", "+VI"],
              keywords: ["6"],
              explanation: "x + 4(−2) = −2 → x = +6.",
            },
            {
              id: "ch-l9-q6",
              type: "short",
              prompt:
                "Give the conjugate base of H₂SO₄ and the conjugate acid of NH₃.",
              answer: "HSO₄⁻ and NH₄⁺",
              acceptable: ["HSO4-", "NH4+"],
              keywords: ["hso", "nh4"],
              explanation:
                "Remove H⁺ from the acid → conjugate base; add H⁺ to the base → conjugate acid.",
            },
          ],
        },
        {
          id: "ch-l10",
          title: "Electrochemistry and pH curves",
          level: "HL",
          questions: [
            {
              id: "ch-l10-q1",
              type: "mcq",
              prompt:
                "In a galvanic (voltaic) cell, oxidation occurs at the",
              choices: ["cathode", "anode", "salt bridge", "electrolyte"],
              answerIndex: 1,
              explanation: "Oxidation at the anode (AN OX); reduction at the cathode.",
            },
            {
              id: "ch-l10-q2",
              type: "mcq",
              prompt:
                "A positive standard cell potential E°cell means the reaction is",
              choices: [
                "non-spontaneous",
                "at equilibrium",
                "spontaneous (ΔG < 0)",
                "endothermic",
              ],
              answerIndex: 2,
              explanation: "ΔG° = −nFE°cell; E° > 0 → ΔG° < 0.",
            },
            {
              id: "ch-l10-q3",
              type: "mcq",
              prompt:
                "On a strong-acid/strong-base titration curve, the equivalence point of HCl vs NaOH is at pH",
              choices: ["< 7", "7", "> 7", "= pKa"],
              answerIndex: 1,
              explanation:
                "Strong/strong → neutral salt at equivalence, pH 7.",
            },
            {
              id: "ch-l10-q4",
              type: "tf",
              prompt:
                "In electrolysis, the positive electrode attracts cations and is called the cathode.",
              answer: false,
              explanation:
                "In electrolysis the cathode is the NEGATIVE electrode (cations migrate to it); polarity flips vs galvanic cells.",
            },
            {
              id: "ch-l10-q5",
              type: "short",
              prompt:
                "State the purpose of the salt bridge in a voltaic cell.",
              answer:
                "It completes the circuit by allowing ion flow to balance charge without mixing the half-cell solutions.",
              keywords: ["ion", "circuit", "charge", "complete"],
              explanation:
                "Salt bridge lets counter-ions migrate, keeping each half-cell electrically neutral.",
            },
            {
              id: "ch-l10-q6",
              type: "short",
              prompt:
                "Explain why the titration of a weak acid with a strong base has an equivalence point above pH 7.",
              answer:
                "The conjugate base of the weak acid hydrolyses water to produce OH⁻, making the solution basic.",
              keywords: ["conjugate", "base", "hydroly", "oh", "basic"],
              explanation:
                "e.g. CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ → pH > 7 at equivalence.",
            },
          ],
        },
      ],
    },
  ],
};
