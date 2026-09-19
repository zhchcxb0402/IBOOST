import type { Subject } from "../types";

export const chemistry: Subject = {
  slug: "chemistry",
  name: "Chemistry",
  short: "Chem",
  color: "#FF9600",
  emoji: "🧪",
  units: [
    {
      id: "che-u1",
      title: "Stoichiometry",
      lessons: [
        {
          id: "che-l1",
          title: "The mole concept",
          questions: [
            {
              id: "che-l1-q1",
              type: "mcq",
              prompt: "The number of particles in one mole is…",
              choices: [
                "6.022 × 10²³",
                "1.6 × 10⁻¹⁹",
                "8.31",
                "3.0 × 10⁸",
              ],
              answerIndex: 0,
              explanation: "Avogadro's constant NA = 6.022 × 10²³ mol⁻¹.",
            },
            {
              id: "che-l1-q2",
              type: "fill",
              prompt:
                "How many moles are in 8.0 g of O₂ (M = 32 g/mol)?",
              answer: "0.25",
              acceptable: ["0.25 mol"],
              explanation: "n = m/M = 8/32 = 0.25 mol.",
            },
            {
              id: "che-l1-q3",
              type: "fill",
              prompt:
                "How many moles are in 18 g of H₂O (M = 18 g/mol)?",
              answer: "1",
              acceptable: ["1 mol", "1.0"],
              explanation: "n = m/M = 18/18 = 1 mol.",
            },
            {
              id: "che-l1-q4",
              type: "mcq",
              prompt: "The molar mass of CO₂ is…",
              choices: ["44 g/mol", "28 g/mol", "32 g/mol", "16 g/mol"],
              answerIndex: 0,
              explanation: "M = 12 + 2(16) = 44 g/mol.",
            },
            {
              id: "che-l1-q5",
              type: "mcq",
              prompt: "n = m/M relates moles to…",
              choices: [
                "mass and molar mass",
                "volume and density",
                "pressure and temperature",
                "concentration and volume",
              ],
              answerIndex: 0,
              explanation:
                "Mass in grams divided by molar mass gives amount in moles.",
            },
            {
              id: "che-l1-q6",
              type: "fill",
              prompt:
                "How many molecules are in 0.5 mol of CO₂? (Give coefficient of ×10²³, e.g. '3.011')",
              answer: "3.011",
              acceptable: ["3.0", "3.01", "3.011"],
              explanation: "N = n·NA = 0.5 × 6.022 × 10²³ = 3.011 × 10²³.",
            },
          ],
        },
        {
          id: "che-l2",
          title: "Balancing equations",
          questions: [
            {
              id: "che-l2-q1",
              type: "fill",
              prompt:
                "Balance: __H₂ + __O₂ → __H₂O. Give the coefficient of O₂ (lowest whole numbers).",
              answer: "1",
              explanation: "2H₂ + O₂ → 2H₂O, so O₂ coefficient is 1.",
            },
            {
              id: "che-l2-q2",
              type: "mcq",
              prompt: "Balancing equations reflects…",
              choices: [
                "conservation of mass",
                "conservation of charge only",
                "conservation of volume",
                "the ideal gas law",
              ],
              answerIndex: 0,
              explanation:
                "Atoms are neither created nor destroyed in a reaction.",
            },
            {
              id: "che-l2-q3",
              type: "mcq",
              prompt:
                "For CH₄ + 2O₂ → CO₂ + 2H₂O, how many moles of O₂ react with 1 mol CH₄?",
              choices: ["2", "1", "4", "0.5"],
              answerIndex: 0,
              explanation: "The mole ratio CH₄ : O₂ is 1 : 2.",
            },
            {
              id: "che-l2-q4",
              type: "mcq",
              prompt: "The limiting reactant is the one that…",
              choices: [
                "runs out first and limits product formed",
                "is present in the largest mass",
                "has the highest molar mass",
                "is always the solid",
              ],
              answerIndex: 0,
              explanation:
                "It determines the maximum amount of product; the rest is in excess.",
            },
            {
              id: "che-l2-q5",
              type: "fill",
              prompt:
                "Balance: N₂ + __H₂ → 2NH₃. Give the coefficient of H₂.",
              answer: "3",
              explanation: "N₂ + 3H₂ → 2NH₃.",
            },
            {
              id: "che-l2-q6",
              type: "mcq",
              prompt:
                "If 2 mol of A produces 1 mol of B, how much B forms from 0.4 mol A?",
              choices: ["0.2 mol", "0.4 mol", "0.8 mol", "2 mol"],
              answerIndex: 0,
              explanation: "Apply the 2:1 ratio: 0.4 ÷ 2 = 0.2 mol.",
            },
          ],
        },
        {
          id: "che-l3",
          title: "Gases & solutions",
          questions: [
            {
              id: "che-l3-q1",
              type: "mcq",
              prompt: "The ideal gas equation is…",
              choices: [
                "PV = nRT",
                "P/V = nR",
                "VT = nRP",
                "P = VnRT",
              ],
              answerIndex: 0,
              explanation:
                "PV = nRT with R = 8.31 J·K⁻¹·mol⁻¹.",
            },
            {
              id: "che-l3-q2",
              type: "fill",
              prompt:
                "2 mol of solute is dissolved in 0.5 dm³ of solution. Find the concentration in mol/dm³.",
              answer: "4",
              acceptable: ["4 mol/dm3", "4 mol dm-3", "4M", "4 M"],
              explanation: "c = n/V = 2/0.5 = 4 mol·dm⁻³.",
            },
            {
              id: "che-l3-q3",
              type: "mcq",
              prompt:
                "One mole of an ideal gas occupies approximately what volume at STP (100 kPa, 0 °C)?",
              choices: ["22.7 dm³", "24.0 dm³", "1 dm³", "44.8 dm³"],
              answerIndex: 0,
              explanation:
                "Molar volume at STP (IB definition, 100 kPa) = 22.7 dm³/mol.",
            },
            {
              id: "che-l3-q4",
              type: "mcq",
              prompt: "Diluting a solution obeys…",
              choices: [
                "c₁V₁ = c₂V₂",
                "c₁V₂ = c₂V₁",
                "c = mV",
                "PV = constant",
              ],
              answerIndex: 0,
              explanation:
                "Moles of solute are unchanged by adding solvent.",
            },
            {
              id: "che-l3-q5",
              type: "fill",
              prompt:
                "0.1 mol of NaCl is dissolved in 250 cm³ of solution. Find c in mol/dm³.",
              answer: "0.4",
              acceptable: ["0.4 mol/dm3", "0.4M", "0.4 M"],
              explanation: "V = 0.25 dm³; c = 0.1/0.25 = 0.4 mol·dm⁻³.",
            },
            {
              id: "che-l3-q6",
              type: "mcq",
              prompt:
                "At constant temperature, doubling the pressure on a fixed amount of gas…",
              choices: [
                "halves its volume",
                "doubles its volume",
                "leaves volume unchanged",
                "quarters its volume",
              ],
              answerIndex: 0,
              explanation: "Boyle's law: PV = constant, so P ×2 → V ÷2.",
            },
          ],
        },
      ],
    },
    {
      id: "che-u2",
      title: "Bonding & Structure",
      lessons: [
        {
          id: "che-l4",
          title: "Ionic, covalent & metallic",
          questions: [
            {
              id: "che-l4-q1",
              type: "mcq",
              prompt: "Ionic bonding involves…",
              choices: [
                "transfer of electrons forming ions",
                "sharing electron pairs",
                "a sea of delocalised electrons",
                "van der Waals forces only",
              ],
              answerIndex: 0,
              explanation:
                "Metal donates electrons to non-metal; ions attract electrostatically.",
            },
            {
              id: "che-l4-q2",
              type: "mcq",
              prompt: "Covalent bonds form when…",
              choices: [
                "two non-metals share electron pairs",
                "a metal and non-metal swap electrons",
                "ions attract",
                "electrons delocalise in a lattice",
              ],
              answerIndex: 0,
              explanation:
                "Shared pairs between non-metal atoms, e.g. H₂O, CO₂.",
            },
            {
              id: "che-l4-q3",
              type: "fill",
              prompt:
                "What is the charge on a magnesium ion (Group 2)?",
              answer: "2+",
              acceptable: ["+2", "2 plus", "Mg2+"],
              explanation: "Mg loses 2 electrons → Mg²⁺.",
            },
            {
              id: "che-l4-q4",
              type: "mcq",
              prompt: "Metals conduct electricity because…",
              choices: [
                "delocalised electrons carry charge",
                "ions move freely",
                "protons flow",
                "bonds vibrate",
              ],
              answerIndex: 0,
              explanation:
                "The 'sea' of delocalised electrons is mobile under a potential difference.",
            },
            {
              id: "che-l4-q5",
              type: "fill",
              prompt: "What is the formula of sodium chloride?",
              answer: "NaCl",
              acceptable: ["nacl"],
              explanation: "Na⁺ and Cl⁻ combine 1:1 → NaCl.",
            },
            {
              id: "che-l4-q6",
              type: "mcq",
              prompt: "Ionic compounds typically…",
              choices: [
                "conduct when molten or dissolved",
                "conduct as solids",
                "have low melting points",
                "are malleable",
              ],
              answerIndex: 0,
              explanation:
                "Ions are locked in the solid lattice but free when molten/aqueous.",
            },
          ],
        },
        {
          id: "che-l5",
          title: "VSEPR & molecular shapes",
          questions: [
            {
              id: "che-l5-q1",
              type: "mcq",
              prompt: "The shape of CH₄ is…",
              choices: [
                "tetrahedral, 109.5°",
                "bent, 104.5°",
                "linear, 180°",
                "trigonal pyramidal, 107°",
              ],
              answerIndex: 0,
              explanation:
                "4 bonding domains, no lone pairs → tetrahedral.",
            },
            {
              id: "che-l5-q2",
              type: "mcq",
              prompt: "The shape of NH₃ is…",
              choices: [
                "trigonal pyramidal",
                "tetrahedral",
                "trigonal planar",
                "bent",
              ],
              answerIndex: 0,
              explanation:
                "3 bonds + 1 lone pair → trigonal pyramidal (~107°).",
            },
            {
              id: "che-l5-q3",
              type: "fill",
              prompt:
                "Give the bond angle in H₂O (bent molecule), in degrees.",
              answer: "104.5",
              acceptable: ["104.5°", "105", "104"],
              explanation:
                "Two lone pairs compress the angle to ≈104.5°.",
            },
            {
              id: "che-l5-q4",
              type: "mcq",
              prompt: "CO₂ has which molecular geometry?",
              choices: ["linear", "bent", "tetrahedral", "trigonal planar"],
              answerIndex: 0,
              explanation:
                "Two electron domains → linear, 180°.",
            },
            {
              id: "che-l5-q5",
              type: "mcq",
              prompt: "Lone pairs repel…",
              choices: [
                "more strongly than bonding pairs",
                "less strongly than bonding pairs",
                "equally to bonding pairs",
                "not at all",
              ],
              answerIndex: 0,
              explanation:
                "Lone pair–lone pair repulsion is strongest, shrinking bond angles.",
            },
            {
              id: "che-l5-q6",
              type: "fill",
              prompt:
                "How many electron domains surround the B atom in BF₃?",
              answer: "3",
              explanation: "BF₃ has 3 bonding domains → trigonal planar.",
            },
          ],
        },
        {
          id: "che-l6",
          title: "Polarity & intermolecular forces",
          questions: [
            {
              id: "che-l6-q1",
              type: "mcq",
              prompt: "Electronegativity is…",
              choices: [
                "an atom's ability to attract bonding electrons",
                "the charge on an ion",
                "the energy to remove an electron",
                "the number of valence electrons",
              ],
              answerIndex: 0,
              explanation:
                "Unequal sharing in a bond creates a dipole.",
            },
            {
              id: "che-l6-q2",
              type: "mcq",
              prompt: "Hydrogen bonding requires H bonded to…",
              choices: [
                "N, O or F",
                "any halogen",
                "carbon",
                "a metal",
              ],
              answerIndex: 0,
              explanation:
                "Only N/O/F are electronegative enough to support H-bonding.",
            },
            {
              id: "che-l6-q3",
              type: "fill",
              prompt:
                "Name the weakest intermolecular force, present between all molecules (two words).",
              answer: "London dispersion",
              acceptable: [
                "dispersion forces",
                "london forces",
                "van der waals",
                "london dispersion forces",
              ],
              explanation:
                "Temporary dipole–induced dipole (London dispersion) forces.",
            },
            {
              id: "che-l6-q4",
              type: "mcq",
              prompt: "Water has a high boiling point mainly because of…",
              choices: [
                "hydrogen bonding",
                "covalent bonds breaking",
                "London dispersion forces",
                "ionic attraction",
              ],
              answerIndex: 0,
              explanation:
                "H-bonds are much stronger than other intermolecular forces.",
            },
            {
              id: "che-l6-q5",
              type: "mcq",
              prompt: "Which molecule is polar overall?",
              choices: ["H₂O", "CO₂", "CH₄", "BF₃"],
              answerIndex: 0,
              explanation:
                "Bent geometry means the dipoles don't cancel — CO₂ and CH₄ cancel by symmetry.",
            },
            {
              id: "che-l6-q6",
              type: "fill",
              prompt:
                "State the strongest type of intermolecular force between HF molecules.",
              answer: "hydrogen bonding",
              acceptable: ["h-bonding", "hydrogen bond", "h bonding"],
              explanation: "H bonded to F supports strong hydrogen bonds.",
            },
          ],
        },
      ],
    },
  ],
};
