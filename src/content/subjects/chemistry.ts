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
  syllabusUrl: "https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/",
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
              hint: "n = m/M.",
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
              hint: "Each peak corresponds to one m/z — what does peak height tell you?",
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
              hint: "Use the mole ratio from the balanced equation: propane to CO₂.",
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
              hint: "Think particle size, forces between them, and what collisions conserve.",
              explanation:
                "Zero particle volume, no attractions, elastic collisions, random motion — deviations at high P / low T.",
            },
          ],
        },
        {
          id: "ch-l11",
          title: "Limiting reagent and percentage yield",
          questions: [
            {
              id: "ch-l11-q1",
              type: "mcq",
              prompt: "The limiting reagent is the reactant that",
              choices: [
                "is most expensive",
                "runs out first and stops the reaction",
                "is in excess",
                "is a gas",
              ],
              answerIndex: 1,
              explanation:
                "It determines the maximum amount of product.",
            },
            {
              id: "ch-l11-q2",
              type: "mcq",
              prompt: "Percentage yield equals",
              choices: [
                "actual/theoretical × 100%",
                "theoretical/actual × 100%",
                "actual × theoretical",
                "100% always",
              ],
              answerIndex: 0,
              explanation:
                "% yield = actual yield ÷ theoretical yield × 100%.",
            },
            {
              id: "ch-l11-q3",
              type: "tf",
              prompt:
                "The reagent in excess has material left over when the reaction ends.",
              answer: true,
              explanation:
                "Only the limiting reagent is fully consumed.",
            },
            {
              id: "ch-l11-q4",
              type: "mcq",
              prompt:
                "Correct order for a limiting-reagent problem:",
              choices: [
                "mass → volume → moles",
                "moles of each → compare to ratio → use limiting → product moles → mass",
                "weigh products first",
                "guess the excess",
              ],
              answerIndex: 1,
              explanation:
                "Convert to moles, divide by coefficients, smallest ratio is limiting.",
            },
            {
              id: "ch-l11-q5",
              type: "short",
              prompt:
                "2H₂ + O₂ → 2H₂O. With 4 mol H₂ and 1 mol O₂, how many moles of H₂O form?",
              answer: "2",
              keywords: ["2"],
              hint: "Divide each reactant's moles by its coefficient — the smaller value limits.",
              acceptable: ["2 mol"],
              explanation:
                "O₂ is limiting (needs 2 mol H₂): 1 mol O₂ → 2 mol H₂O; 2 mol H₂ left over.",
            },
            {
              id: "ch-l11-q6",
              type: "short",
              prompt:
                "Theoretical yield 10 g, actual yield 8 g. Give the percentage yield.",
              answer: "80%",
              keywords: ["80"],
              hint: "% yield = actual/theoretical × 100.",
              acceptable: ["80", "80 percent"],
              explanation: "8/10 × 100 = 80%.",
            },
          ],
        },
        {
          id: "ch-l12",
          title: "Empirical and molecular formulas",
          questions: [
            {
              id: "ch-l12-q1",
              type: "mcq",
              prompt: "An empirical formula shows",
              choices: [
                "the actual number of atoms",
                "the simplest whole-number ratio of atoms",
                "the structure",
                "the mass",
              ],
              answerIndex: 1,
              explanation:
                "Simplest ratio — e.g. CH₂O for glucose.",
            },
            {
              id: "ch-l12-q2",
              type: "mcq",
              prompt: "The empirical formula of C₆H₁₂O₆ is",
              choices: ["C₆H₁₂O₆", "CH₂O", "C₂H₄O₂", "CHO"],
              answerIndex: 1,
              explanation: "Divide subscripts by 6: CH₂O.",
            },
            {
              id: "ch-l12-q3",
              type: "tf",
              prompt:
                "The molecular formula is a whole-number multiple of the empirical formula.",
              answer: true,
              explanation:
                "Molecular = n × empirical; find n from the molar mass.",
            },
            {
              id: "ch-l12-q4",
              type: "mcq",
              prompt:
                "First step converting percentage composition to empirical formula:",
              choices: [
                "multiply by 100",
                "divide each % by the element's Ar",
                "add the percentages",
                "round to integers",
              ],
              answerIndex: 1,
              explanation:
                "% mass → moles → divide by smallest → whole-number ratio.",
            },
            {
              id: "ch-l12-q5",
              type: "short",
              prompt:
                "A hydrocarbon is 80% C and 20% H by mass. Give its empirical formula.",
              answer: "CH3",
              keywords: ["CH3", "CH₃"],
              hint: "Convert % to moles via Ar: C 80/12, H 20/1 — then find the ratio.",
              acceptable: ["CH₃"],
              explanation:
                "80/12 = 6.67 mol C; 20/1 = 20 mol H; ratio 1:3 → CH₃.",
            },
            {
              id: "ch-l12-q6",
              type: "short",
              prompt:
                "Empirical formula CH₂ (mass 14) and molecular mass 56. Give the molecular formula.",
              answer: "C4H8",
              keywords: ["C4H8", "C₄H₈"],
              hint: "n = 56/14 — multiply the empirical subscripts by n.",
              acceptable: ["C₄H₈"],
              explanation: "56/14 = 4 → C₄H₈.",
            },
          ],
        },
        {
          id: "ch-l13",
          title: "Mole calculations: exam practice",
          questions: [
            {
              id: "ch-l13-q1",
              type: "mcq",
              prompt: "The number of moles is calculated by",
              choices: [
                "n = m/M",
                "n = M/m",
                "n = m × M",
                "n = m/V",
              ],
              answerIndex: 0,
              explanation: "n = mass ÷ molar mass.",
            },
            {
              id: "ch-l13-q2",
              type: "mcq",
              prompt: "Moles of solute in a solution are found using",
              choices: [
                "n = c/V",
                "n = c × V (V in dm³)",
                "n = V/c",
                "n = mM",
              ],
              answerIndex: 1,
              explanation:
                "n = cV — watch the cm³ → dm³ conversion (÷1000).",
            },
            {
              id: "ch-l13-q3",
              type: "tf",
              prompt:
                "One mole contains approximately 6.02 × 10²³ particles (Avogadro's number).",
              answer: true,
              explanation: "N_A = 6.02 × 10²³ mol⁻¹.",
            },
            {
              id: "ch-l13-q4",
              type: "mcq",
              prompt: "The mass of n moles of a substance is",
              choices: ["n/M", "n × M", "M/n", "M + n"],
              answerIndex: 1,
              explanation: "m = nM.",
            },
            {
              id: "ch-l13-q5",
              type: "short",
              prompt:
                "Give the moles in 8 g of CH₄ (M = 16 g/mol).",
              answer: "0.5",
              keywords: ["0.5"],
              hint: "n = m/M.",
              acceptable: ["0.5 mol"],
              explanation: "8/16 = 0.5 mol.",
            },
            {
              id: "ch-l13-q6",
              type: "short",
              prompt:
                "Give the mass of 0.25 mol of NaOH (M = 40 g/mol).",
              answer: "10",
              keywords: ["10"],
              hint: "m = n × M.",
              acceptable: ["10 g"],
              explanation: "0.25 × 40 = 10 g.",
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
              hint: "Compare bonding: how many bonds per carbon, and which has free electrons?",
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
              hint: "Four bonding domains, no lone pairs → which geometry?",
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
              hint: "Count electron domains around B — any lone pairs?",
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
              hint: "Which subshell is Al's outer electron in vs Mg's — compare energies and shielding.",
              explanation:
                "3p is further/higher energy than 3s → lower IE despite more protons.",
            },
          ],
        },
        {
          id: "ch-l14",
          title: "VSEPR shapes and polarity",
          questions: [
            {
              id: "ch-l14-q1",
              type: "mcq",
              prompt:
                "Four electron domains around a central atom give which electron geometry?",
              choices: [
                "trigonal planar",
                "tetrahedral",
                "linear",
                "bent",
              ],
              answerIndex: 1,
              explanation:
                "4 domains → tetrahedral arrangement of electron pairs.",
            },
            {
              id: "ch-l14-q2",
              type: "mcq",
              prompt:
                "NH₃ has 3 bonding domains + 1 lone pair. Its molecular shape is",
              choices: [
                "tetrahedral",
                "trigonal planar",
                "trigonal pyramidal",
                "bent",
              ],
              answerIndex: 2,
              explanation:
                "The lone pair shapes a tetrahedron into a pyramid: ~107°.",
            },
            {
              id: "ch-l14-q3",
              type: "tf",
              prompt:
                "CO₂ has polar bonds but is a nonpolar molecule because the dipoles cancel.",
              answer: true,
              explanation:
                "Linear and symmetric → bond dipoles cancel out.",
            },
            {
              id: "ch-l14-q4",
              type: "mcq",
              prompt: "The bond angle in water is approximately",
              choices: ["180°", "120°", "109.5°", "104.5°"],
              answerIndex: 3,
              explanation:
                "Two lone pairs compress H–O–H to ~104.5°.",
            },
            {
              id: "ch-l14-q5",
              type: "short",
              prompt: "Name the molecular shape of BF₃.",
              answer: "trigonal planar",
              keywords: ["trigonal", "planar"],
              hint: "Three domains, no lone pair — name the shape, not the electron geometry.",
              acceptable: ["trigonal planar", "flat triangle"],
              explanation:
                "3 domains, no lone pairs → trigonal planar, 120°.",
            },
            {
              id: "ch-l14-q6",
              type: "short",
              prompt: "Give the bond angle in methane CH₄, in degrees.",
              answer: "109.5",
              keywords: ["109.5"],
              hint: "Four bonding pairs, ideal tetrahedral angle.",
              acceptable: ["109.5°", "109"],
              explanation: "Perfect tetrahedron: 109.5°.",
            },
          ],
        },
        {
          id: "ch-l15",
          title: "Intermolecular forces and boiling points",
          questions: [
            {
              id: "ch-l15-q1",
              type: "mcq",
              prompt:
                "The strongest type of intermolecular force is",
              choices: [
                "London dispersion",
                "dipole–dipole",
                "hydrogen bonding",
                "ionic",
              ],
              answerIndex: 2,
              explanation:
                "H-bonding (N/O/F–H) >> dipole–dipole > dispersion.",
            },
            {
              id: "ch-l15-q2",
              type: "mcq",
              prompt:
                "London dispersion forces increase with",
              choices: [
                "charge",
                "number of electrons / molecular size",
                "polarity",
                "temperature",
              ],
              answerIndex: 1,
              explanation:
                "Larger electron clouds → stronger temporary dipoles.",
            },
            {
              id: "ch-l15-q3",
              type: "tf",
              prompt:
                "Hydrogen bonding explains water's unusually high boiling point.",
              answer: true,
              explanation:
                "Without H-bonds, H₂O would boil far below 0°C (compare H₂S).",
            },
            {
              id: "ch-l15-q4",
              type: "mcq",
              prompt:
                "Hydrogen bonding occurs when H is bonded to",
              choices: [
                "any atom",
                "N, O or F",
                "C only",
                "metals",
              ],
              answerIndex: 1,
              explanation:
                "Needs a highly electronegative atom with a lone pair: N, O, F.",
            },
            {
              id: "ch-l15-q5",
              type: "short",
              prompt:
                "Which has the higher boiling point: H₂O or H₂S? (one word)",
              answer: "water",
              keywords: ["water", "H2O", "H₂O"],
              hint: "Which of the two can hydrogen-bond?",
              acceptable: ["H2O", "H₂O"],
              explanation:
                "H-bonding in water vs weak dipole forces in H₂S.",
            },
            {
              id: "ch-l15-q6",
              type: "short",
              prompt:
                "Name the dominant intermolecular force between CHCl₃ (chloroform, polar) molecules.",
              answer: "dipole-dipole",
              keywords: ["dipole"],
              hint: "Polar molecule but no H bonded to N/O/F — which IMF remains?",
              acceptable: ["dipole-dipole forces", "permanent dipole"],
              explanation:
                "Polar molecule without N/O/F–H → dipole–dipole.",
            },
          ],
        },
        {
          id: "ch-l16",
          title: "Periodic trends",
          questions: [
            {
              id: "ch-l16-q1",
              type: "mcq",
              prompt:
                "Across a period (left to right), atomic radius",
              choices: [
                "increases",
                "decreases",
                "stays constant",
                "doubles",
              ],
              answerIndex: 1,
              explanation:
                "Greater nuclear charge pulls the same shell tighter.",
            },
            {
              id: "ch-l16-q2",
              type: "mcq",
              prompt:
                "Across a period, first ionisation energy generally",
              choices: [
                "decreases",
                "increases",
                "stays constant",
                "halves",
              ],
              answerIndex: 1,
              explanation:
                "Atoms hold electrons more tightly across a period.",
            },
            {
              id: "ch-l16-q3",
              type: "tf",
              prompt:
                "Electronegativity increases across a period and decreases down a group.",
              answer: true,
              explanation:
                "Peak at fluorine (top right).",
            },
            {
              id: "ch-l16-q4",
              type: "mcq",
              prompt: "The most electronegative element is",
              choices: ["oxygen", "chlorine", "fluorine", "francium"],
              answerIndex: 2,
              explanation: "Fluorine = 4.0 on the Pauling scale.",
            },
            {
              id: "ch-l16-q5",
              type: "short",
              prompt:
                "Which is larger: a Na atom or a Na⁺ ion? (one word)",
              answer: "Na",
              keywords: ["na", "atom", "sodium atom"],
              hint: "Removing an electron loses a whole shell — which species keeps more?",
              acceptable: ["na atom", "sodium", "the atom"],
              explanation:
                "Na⁺ loses its outer shell — much smaller.",
            },
            {
              id: "ch-l16-q6",
              type: "short",
              prompt:
                "State the trend in first ionisation energy DOWN a group (one word).",
              answer: "decreases",
              keywords: ["decreas"],
              hint: "Think shielding and distance down a group.",
              acceptable: ["decrease", "goes down", "lower"],
              explanation:
                "Outer electron farther and more shielded → easier to remove.",
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
              hint: "ΔH = ΣΔHf(products) − ΣΔHf(reactants); don't forget the 2× on H₂O.",
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
              hint: "Which side sits higher on the y-axis for endothermic? Draw reactants, hump, products.",
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
              hint: "ΔG = ΔH − TΔS — ΔS is already in kJ here.",
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
              hint: "ΔG = ΔH − TΔS: which term wins as T rises?",
              explanation:
                "ΔS > 0; above 273 K the TΔS term dominates → ΔG < 0.",
            },
          ],
        },
        {
          id: "ch-l17",
          title: "Enthalpy calculations: q = mcΔT and bond enthalpies",
          questions: [
            {
              id: "ch-l17-q1",
              type: "mcq",
              prompt:
                "The heat absorbed or released when a substance changes temperature is",
              choices: [
                "q = mcΔT",
                "q = m/ΔT",
                "q = c²",
                "q = mL always",
              ],
              answerIndex: 0,
              explanation: "q = mcΔT.",
            },
            {
              id: "ch-l17-q2",
              type: "mcq",
              prompt:
                "Using bond enthalpies, ΔH equals",
              choices: [
                "bonds formed − bonds broken",
                "bonds broken − bonds formed",
                "products − reactants",
                "zero",
              ],
              answerIndex: 1,
              explanation:
                "ΔH ≈ Σ(bonds broken) − Σ(bonds formed).",
            },
            {
              id: "ch-l17-q3",
              type: "tf",
              prompt:
                "An exothermic reaction has a negative ΔH because heat is released.",
              answer: true,
              explanation:
                "Products lower in enthalpy → ΔH < 0.",
            },
            {
              id: "ch-l17-q4",
              type: "mcq",
              prompt:
                "Bond enthalpy calculations are approximate because tabulated values are",
              choices: [
                "exact",
                "average values over many compounds",
                "only for gases",
                "negative",
              ],
              answerIndex: 1,
              explanation:
                "Mean bond enthalpies — actual bonds vary with environment.",
            },
            {
              id: "ch-l17-q5",
              type: "short",
              prompt:
                "100 g of water warms by 10°C (c = 4.18 J/g·K). Give q in joules.",
              answer: "4180",
              keywords: ["4180", "4.18"],
              hint: "q = mcΔT with c per gram.",
              acceptable: ["4,180", "4.18 kJ"],
              explanation: "q = 100 × 4.18 × 10 = 4,180 J.",
            },
            {
              id: "ch-l17-q6",
              type: "short",
              prompt:
                "Estimate ΔH for H₂ + Cl₂ → 2HCl using bond enthalpies: H–H 436, Cl–Cl 243, H–Cl 432 kJ/mol.",
              answer: "-185",
              keywords: ["-185", "185"],
              hint: "ΔH = bonds broken − bonds formed: 436 + 243 − 2×432.",
              acceptable: ["−185", "-185 kJ", "−185 kJ"],
              explanation:
                "Broken: 436 + 243 = 679; formed: 2 × 432 = 864; ΔH = 679 − 864 = −185 kJ.",
            },
          ],
        },
        {
          id: "ch-l18",
          title: "Hess cycle applications",
          questions: [
            {
              id: "ch-l18-q1",
              type: "mcq",
              prompt: "Hess's law states that enthalpy change",
              choices: [
                "depends on the pathway",
                "is independent of the route taken",
                "is always negative",
                "requires a catalyst",
              ],
              answerIndex: 1,
              explanation:
                "ΔH is a state function — same start and end, same ΔH.",
            },
            {
              id: "ch-l18-q2",
              type: "mcq",
              prompt: "Using enthalpies of formation, ΔH_reaction equals",
              choices: [
                "ΣΔHf(reactants) − ΣΔHf(products)",
                "ΣΔHf(products) − ΣΔHf(reactants)",
                "ΣΔHf(products) + ΣΔHf(reactants)",
                "ΔHf of the catalyst",
              ],
              answerIndex: 1,
              explanation:
                "Products minus reactants.",
            },
            {
              id: "ch-l18-q3",
              type: "tf",
              prompt:
                "Reversing a reaction changes the sign of ΔH.",
              answer: true,
              explanation:
                "Exothermic forward → endothermic backward.",
            },
            {
              id: "ch-l18-q4",
              type: "mcq",
              prompt:
                "Hess cycles are most useful for reactions whose ΔH is",
              choices: [
                "easy to measure",
                "difficult or impossible to measure directly",
                "zero",
                "very fast",
              ],
              answerIndex: 1,
              explanation:
                "e.g. enthalpy of formation of CH₄ — measured indirectly via combustions.",
            },
            {
              id: "ch-l18-q5",
              type: "short",
              prompt:
                "Using ΔHf: CO₂ = −394, CO = −111 kJ/mol. Give ΔH for CO + ½O₂ → CO₂ in kJ/mol.",
              answer: "-283",
              keywords: ["-283", "283"],
              hint: "ΔHf route: products − reactants; O₂ contributes 0.",
              acceptable: ["−283", "-283 kJ/mol"],
              explanation:
                "−394 − (−111) = −283 kJ/mol.",
            },
            {
              id: "ch-l18-q6",
              type: "short",
              prompt:
                "A → B is +50 kJ and B → C is −20 kJ. Give ΔH for A → C in kJ.",
              answer: "30",
              keywords: ["30"],
              hint: "Hess: total ΔH is path-independent — just add the steps.",
              acceptable: ["+30", "30 kJ"],
              explanation: "50 − 20 = +30 kJ.",
            },
          ],
        },
        {
          id: "ch-l19",
          title: "Born–Haber cycles",
          level: "HL",
          questions: [
            {
              id: "ch-l19-q1",
              type: "mcq",
              prompt:
                "Lattice enthalpy is defined as the enthalpy change when",
              choices: [
                "a solid melts",
                "gaseous ions form one mole of ionic solid",
                "an atom ionises",
                "a bond breaks",
              ],
              answerIndex: 1,
              explanation:
                "MX(g ions) → MX(s) — always exothermic.",
            },
            {
              id: "ch-l19-q2",
              type: "mcq",
              prompt:
                "A Born–Haber cycle does NOT include",
              choices: [
                "atomisation",
                "ionisation energy",
                "electron affinity",
                "activation energy",
              ],
              answerIndex: 3,
              explanation:
                "It uses atomisation, IE, EA, bond dissociation and lattice enthalpy — kinetics (Ea) is irrelevant.",
            },
            {
              id: "ch-l19-q3",
              type: "tf",
              prompt:
                "Lattice enthalpy is larger for small, highly charged ions.",
              answer: true,
              explanation:
                "MgO (2+/2−) has far greater lattice enthalpy than NaCl.",
            },
            {
              id: "ch-l19-q4",
              type: "mcq",
              prompt:
                "Which has the greater lattice enthalpy magnitude?",
              choices: ["NaCl", "MgO", "KBr", "CsI"],
              answerIndex: 1,
              explanation:
                "Mg²⁺ and O²⁻ — 4× the charge product of NaCl, smaller ions.",
            },
            {
              id: "ch-l19-q5",
              type: "short",
              prompt:
                "Born–Haber for NaCl: sublimation +107, IE +496, ½Cl₂ bond +121, EA −349, ΔHf = −411 kJ/mol. Give the lattice enthalpy.",
              answer: "-786",
              keywords: ["-786", "786"],
              hint: "ΔHf = sum of steps + lattice enthalpy — solve for the lattice term.",
              acceptable: ["−786", "-786 kJ"],
              explanation:
                "Steps sum: 107 + 496 + 121 − 349 = 375; lattice = −411 − 375 = −786 kJ/mol.",
            },
            {
              id: "ch-l19-q6",
              type: "short",
              prompt:
                "Is the first electron affinity of chlorine exothermic or endothermic? (one word)",
              answer: "exothermic",
              keywords: ["exotherm"],
              hint: "Gaining an electron on a halogen releases energy — which sign?",
              acceptable: ["negative", "exo"],
              explanation:
                "Cl + e⁻ → Cl⁻ releases energy — negative ΔH.",
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
              hint: "Products over reactants, each raised to its coefficient.",
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
              hint: "Count moles of gas on each side — shift goes to the smaller side.",
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
              hint: "Rate ∝ [B]² — cube it.",
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
              hint: "Lower Ea moves the threshold line — what does that do to the shaded fraction?",
              explanation:
                "Lower Ea → exponentially more collisions exceed it → faster rate.",
            },
          ],
        },
        {
          id: "ch-l20",
          title: "Rate graphs and collision theory",
          questions: [
            {
              id: "ch-l20-q1",
              type: "mcq",
              prompt:
                "On a concentration–time graph, the rate of reaction at time t is given by",
              choices: [
                "the value of the curve",
                "the gradient of the curve at t",
                "the area under the curve",
                "the y-intercept",
              ],
              answerIndex: 1,
              explanation:
                "Rate = slope; it decreases as reactants run out.",
            },
            {
              id: "ch-l20-q2",
              type: "mcq",
              prompt:
                "For a collision to lead to reaction, particles must collide with",
              choices: [
                "any energy",
                "energy ≥ Ea and correct orientation",
                "low speed",
                "a catalyst always",
              ],
              answerIndex: 1,
              explanation:
                "Both conditions: sufficient energy AND the right geometry.",
            },
            {
              id: "ch-l20-q3",
              type: "tf",
              prompt:
                "A catalyst increases rate by providing a path with lower activation energy, without changing ΔH.",
              answer: true,
              explanation:
                "Same overall enthalpy change, faster route.",
            },
            {
              id: "ch-l20-q4",
              type: "mcq",
              prompt:
                "Raising temperature increases rate mainly because",
              choices: [
                "particles move slower",
                "a greater fraction of collisions have energy ≥ Ea",
                "concentration increases",
                "Ea increases",
              ],
              answerIndex: 1,
              explanation:
                "The Maxwell–Boltzmann tail past Ea grows steeply with T.",
            },
            {
              id: "ch-l20-q5",
              type: "short",
              prompt:
                "Powdered magnesium reacts faster than a ribbon of the same mass because of increased ___ (one phrase).",
              answer: "surface area",
              keywords: ["surface", "area"],
              hint: "More contact between particles means more what per unit time?",
              acceptable: ["surface area"],
              explanation:
                "More particles exposed → more collisions per second.",
            },
            {
              id: "ch-l20-q6",
              type: "short",
              prompt:
                "0.05 mol of product forms in 10 s. Give the average rate in mol/s.",
              answer: "0.005",
              keywords: ["0.005"],
              hint: "rate = Δamount/Δt.",
              acceptable: ["5e-3", "0.005 mol/s"],
              explanation: "0.05/10 = 0.005 mol/s.",
            },
          ],
        },
        {
          id: "ch-l21",
          title: "Kc expressions and Le Châtelier",
          questions: [
            {
              id: "ch-l21-q1",
              type: "mcq",
              prompt: "For aA + bB ⇌ cC + dD, Kc equals",
              choices: [
                "[A]ᵃ[B]ᵇ/([C]ᶜ[D]ᵈ)",
                "[C]ᶜ[D]ᵈ/([A]ᵃ[B]ᵇ)",
                "[A][B]/[C][D]",
                "c + d − a − b",
              ],
              answerIndex: 1,
              explanation:
                "Products over reactants, each raised to its coefficient.",
            },
            {
              id: "ch-l21-q2",
              type: "mcq",
              prompt:
                "Adding more reactant to a system at equilibrium shifts the position",
              choices: [
                "left",
                "right",
                "nowhere",
                "out of the flask",
              ],
              answerIndex: 1,
              explanation:
                "Le Châtelier: the system consumes some of the added species.",
            },
            {
              id: "ch-l21-q3",
              type: "tf",
              prompt:
                "Kc changes only when the temperature changes — not with concentration or pressure.",
              answer: true,
              explanation:
                "Kc is temperature-dependent only; position shifts to restore it.",
            },
            {
              id: "ch-l21-q4",
              type: "mcq",
              prompt: "Adding a catalyst to an equilibrium system",
              choices: [
                "shifts equilibrium right",
                "shifts it left",
                "reaches equilibrium faster without changing Kc",
                "increases ΔH",
              ],
              answerIndex: 2,
              explanation:
                "Catalysts speed both directions equally — same Kc.",
            },
            {
              id: "ch-l21-q5",
              type: "short",
              prompt:
                "Write the Kc expression for N₂ + 3H₂ ⇌ 2NH₃.",
              answer: "[NH3]^2/([N2][H2]^3)",
              keywords: ["NH3", "N2", "H2"],
              hint: "Same Kc rule: products over reactants to the power of coefficients.",
              acceptable: ["[nh3]2/([n2][h2]3)", "Kc = [NH₃]²/([N₂][H₂]³)"],
              explanation:
                "[NH₃]²/([N₂][H₂]³).",
            },
            {
              id: "ch-l21-q6",
              type: "short",
              prompt:
                "For an exothermic forward reaction, heating shifts equilibrium which way? (one word)",
              answer: "left",
              keywords: ["left", "backward", "reactant"],
              hint: "Le Châtelier: heating favours the endothermic direction — which is that here?",
              acceptable: ["backwards", "towards reactants", "reverse"],
              explanation:
                "The system opposes the added heat → shifts toward reactants.",
            },
          ],
        },
        {
          id: "ch-l22",
          title: "Kc calculations",
          level: "HL",
          questions: [
            {
              id: "ch-l22-q1",
              type: "mcq",
              prompt:
                "An ICE table tracks which quantities for each species?",
              choices: [
                "initial, change, equilibrium",
                "ions, catalysts, energy",
                "input, current, end",
                "index, concentration, enthalpy",
              ],
              answerIndex: 0,
              explanation:
                "Initial, Change, Equilibrium — the standard Kc workflow.",
            },
            {
              id: "ch-l22-q2",
              type: "mcq",
              prompt: "A Kc much greater than 1 means",
              choices: [
                "reactants are favoured",
                "products are favoured at equilibrium",
                "no reaction occurs",
                "Kc is wrong",
              ],
              answerIndex: 1,
              explanation:
                "Large Kc → product-rich equilibrium.",
            },
            {
              id: "ch-l22-q3",
              type: "tf",
              prompt:
                "Pure solids and liquids are omitted from Kc expressions.",
              answer: true,
              explanation:
                "Their 'concentrations' are effectively constant.",
            },
            {
              id: "ch-l22-q4",
              type: "mcq",
              prompt: "If the reaction quotient Q < Kc, the system shifts",
              choices: [
                "left",
                "right (towards products)",
                "nowhere",
                "to a new Kc",
              ],
              answerIndex: 1,
              explanation:
                "Q must rise to reach Kc → forward reaction dominates.",
            },
            {
              id: "ch-l22-q5",
              type: "short",
              prompt:
                "Equilibrium: [NH₃] = 0.2, [N₂] = 0.1, [H₂] = 0.1 M. Give Kc for N₂ + 3H₂ ⇌ 2NH₃.",
              answer: "400",
              keywords: ["400"],
              hint: "Kc = [NH₃]²/([N₂][H₂]³) — plug in directly.",
              explanation:
                "Kc = 0.2²/(0.1 × 0.1³) = 0.04/0.0001 = 400.",
            },
            {
              id: "ch-l22-q6",
              type: "short",
              prompt:
                "For A ⇌ B, equilibrium has [A] = 0.3 and [B] = 0.6. Give Kc.",
              answer: "2",
              keywords: ["2"],
              hint: "Kc = [B]/[A].",
              explanation: "Kc = [B]/[A] = 0.6/0.3 = 2.",
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
              hint: "Sum of oxidation numbers = ion charge; O is −2 each.",
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
              hint: "Conjugate = add/remove exactly one H⁺.",
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
              hint: "What would happen to charge build-up in each half-cell without it?",
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
              hint: "What's left in solution at equivalence — and does that ion react with water?",
              explanation:
                "e.g. CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ → pH > 7 at equivalence.",
            },
          ],
        },
        {
          id: "ch-l23",
          title: "pH, pOH and Kw",
          questions: [
            {
              id: "ch-l23-q1",
              type: "mcq",
              prompt: "pH is defined as",
              choices: [
                "log[H⁺]",
                "−log[H⁺]",
                "[H⁺]/[OH⁻]",
                "14 − [H⁺]",
              ],
              answerIndex: 1,
              explanation: "pH = −log₁₀[H⁺].",
            },
            {
              id: "ch-l23-q2",
              type: "mcq",
              prompt: "The ionic product of water Kw at 25°C is",
              choices: [
                "1 × 10⁻¹⁴",
                "1 × 10⁻⁷",
                "14",
                "1 × 10⁻¹",
              ],
              answerIndex: 0,
              explanation:
                "Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C.",
            },
            {
              id: "ch-l23-q3",
              type: "tf",
              prompt: "At 25°C, pH + pOH = 14.",
              answer: true,
              explanation:
                "Follows directly from Kw = 10⁻¹⁴.",
            },
            {
              id: "ch-l23-q4",
              type: "mcq",
              prompt: "A strong acid is one that",
              choices: [
                "is concentrated",
                "dissociates essentially completely in water",
                "has pH 7",
                "contains two H atoms",
              ],
              answerIndex: 1,
              explanation:
                "Strength = extent of dissociation, not concentration.",
            },
            {
              id: "ch-l23-q5",
              type: "short",
              prompt: "Give the pH of a solution with [H⁺] = 1 × 10⁻³ M.",
              answer: "3",
              keywords: ["3"],
              hint: "pH = −log[H⁺].",
              acceptable: ["3.0"],
              explanation: "pH = −log(10⁻³) = 3.",
            },
            {
              id: "ch-l23-q6",
              type: "short",
              prompt: "A solution has pH = 9. Give its pOH.",
              answer: "5",
              keywords: ["5"],
              hint: "pH + pOH = 14.",
              explanation: "pOH = 14 − 9 = 5.",
            },
          ],
        },
        {
          id: "ch-l24",
          title: "Buffers, electrolysis and redox titrations",
          level: "HL",
          questions: [
            {
              id: "ch-l24-q1",
              type: "mcq",
              prompt: "A buffer solution contains",
              choices: [
                "a strong acid and a strong base",
                "a weak acid and its conjugate base (or its salt)",
                "pure water",
                "a salt only",
              ],
              answerIndex: 1,
              explanation:
                "e.g. CH₃COOH + CH₃COONa — the pair absorbs added H⁺ or OH⁻.",
            },
            {
              id: "ch-l24-q2",
              type: "mcq",
              prompt: "In electrolysis, reduction occurs at the",
              choices: [
                "anode",
                "cathode",
                "salt bridge",
                "power supply",
              ],
              answerIndex: 1,
              explanation:
                "Cathode = reduction (electrons supplied); remember RED CAT.",
            },
            {
              id: "ch-l24-q3",
              type: "tf",
              prompt:
                "A buffer resists pH change when small amounts of acid or base are added.",
              answer: true,
              explanation:
                "The weak acid/base pair neutralises additions — pH barely moves.",
            },
            {
              id: "ch-l24-q4",
              type: "mcq",
              prompt:
                "In a titration, the equivalence point differs from the endpoint because the endpoint is",
              choices: [
                "always at pH 7",
                "where the indicator changes colour",
                "never reached",
                "the start",
              ],
              answerIndex: 1,
              explanation:
                "Equivalence = exact stoichiometric amounts; endpoint = indicator colour change.",
            },
            {
              id: "ch-l24-q5",
              type: "short",
              prompt:
                "During electrolysis of MOLTEN NaCl, name the product formed at the cathode.",
              answer: "sodium",
              keywords: ["sodium", "na"],
              hint: "Molten = no water competing — which species is easiest to reduce?",
              acceptable: ["Na", "liquid sodium"],
              explanation:
                "Na⁺ + e⁻ → Na at the cathode; Cl₂ gas forms at the anode.",
            },
            {
              id: "ch-l24-q6",
              type: "short",
              prompt:
                "MnO₄⁻ oxidises Fe²⁺ in a 1:5 ratio. Give the moles of Fe²⁺ oxidised by 0.02 mol MnO₄⁻.",
              answer: "0.1",
              keywords: ["0.1"],
              hint: "Ratio 1:5 — multiply moles of MnO₄⁻.",
              acceptable: ["0.10", "0.1 mol"],
              explanation: "0.02 × 5 = 0.1 mol Fe²⁺.",
            },
          ],
        },
        {
          id: "ch-l25",
          title: "Organic nomenclature and spectroscopy",
          questions: [
            {
              id: "ch-l25-q1",
              type: "mcq",
              prompt: "The suffix '-ol' indicates which functional group?",
              choices: [
                "aldehyde",
                "alcohol",
                "ketone",
                "carboxylic acid",
              ],
              answerIndex: 1,
              explanation:
                "-ol = alcohol (–OH); e.g. ethanol.",
            },
            {
              id: "ch-l25-q2",
              type: "mcq",
              prompt:
                "In IR spectroscopy, a broad absorption around 3200–3600 cm⁻¹ typically indicates",
              choices: [
                "C=O",
                "O–H",
                "C–H",
                "C–Cl",
              ],
              answerIndex: 1,
              explanation:
                "Broad O–H stretch — characteristic of alcohols/carboxylic acids.",
            },
            {
              id: "ch-l25-q3",
              type: "tf",
              prompt:
                "In ¹H NMR, the number of signals equals the number of different proton environments.",
              answer: true,
              explanation:
                "Chemically equivalent protons give one signal; integration gives the ratio.",
            },
            {
              id: "ch-l25-q4",
              type: "mcq",
              prompt:
                "A strong sharp IR peak near 1700 cm⁻¹ indicates",
              choices: [
                "O–H",
                "C=O",
                "N–H",
                "C–O",
              ],
              answerIndex: 1,
              explanation:
                "C=O stretch ~1700 cm⁻¹ — carbonyl compounds.",
            },
            {
              id: "ch-l25-q5",
              type: "short",
              prompt:
                "Give the number of ¹H NMR signals for ethanol CH₃CH₂OH.",
              answer: "3",
              keywords: ["3"],
              hint: "Count distinct proton environments — CH₃, CH₂, OH.",
              explanation:
                "CH₃, CH₂ and OH are three distinct environments.",
            },
            {
              id: "ch-l25-q6",
              type: "short",
              prompt:
                "Give the suffix used to name ketones (e.g. propan___).",
              answer: "-one",
              keywords: ["one"],
              hint: "Think propanone, butanone — what ending do they share?",
              acceptable: ["one", "-one"],
              explanation:
                "Ketones end in '-one': propanone, butanone.",
            },
          ],
        },
        {
          id: "ch-l26",
          title: "SN1 and SN2 mechanisms",
          level: "HL",
          questions: [
            {
              id: "ch-l26-q1",
              type: "mcq",
              prompt: "SN2 reactions proceed via",
              choices: [
                "a carbocation",
                "one concerted step with backside attack",
                "two steps",
                "free radicals",
              ],
              answerIndex: 1,
              explanation:
                "Nucleophile attacks as the leaving group departs — one step, inversion of configuration.",
            },
            {
              id: "ch-l26-q2",
              type: "mcq",
              prompt: "SN1 reactions are fastest for",
              choices: [
                "primary halogenoalkanes",
                "tertiary halogenoalkanes",
                "methyl halides",
                "all equally",
              ],
              answerIndex: 1,
              explanation:
                "Tertiary carbocations are most stable → fast SN1.",
            },
            {
              id: "ch-l26-q3",
              type: "tf",
              prompt:
                "The rate of an SN1 reaction depends only on the substrate concentration, not the nucleophile.",
              answer: true,
              explanation:
                "Rate-determining step is carbocation formation: rate = k[RX].",
            },
            {
              id: "ch-l26-q4",
              type: "mcq",
              prompt:
                "In a mechanism, a curly arrow shows the movement of",
              choices: [
                "atoms",
                "a pair of electrons",
                "protons only",
                "energy",
              ],
              answerIndex: 1,
              explanation:
                "Curly arrows track electron pairs from nucleophile to electrophile.",
            },
            {
              id: "ch-l26-q5",
              type: "short",
              prompt:
                "Which reacts fastest by SN2: primary, secondary or tertiary halogenoalkane? (one word)",
              answer: "primary",
              keywords: ["primary"],
              hint: "SN2 needs clear access for backside attack — which is least crowded?",
              acceptable: ["1°", "primary halogenoalkane"],
              explanation:
                "Least steric hindrance → easiest backside attack.",
            },
            {
              id: "ch-l26-q6",
              type: "short",
              prompt:
                "Name the positively charged intermediate in an SN1 reaction.",
              answer: "carbocation",
              keywords: ["carbocation"],
              hint: "Two-step mechanism: what forms after the leaving group departs?",
              acceptable: ["carbonium ion"],
              explanation:
                "The leaving group departs first, forming a carbocation.",
            },
          ],
        },
      ],
    },
  ],
};
