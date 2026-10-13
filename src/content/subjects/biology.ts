import type { Subject } from "../types";

export const biology: Subject = {
  slug: "biology",
  name: "Biology",
  short: "Bio",
  color: "#65A30D",
  emoji: "🧬",
  group: "Sciences",
  levels: ["SL", "HL"],
  description:
    "Unity and diversity, form and function, interaction and interdependence, and continuity and change — molecules to ecosystems.",
  syllabusUrl: "https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/",
  units: [
    {
      id: "bi-u1",
      code: "Theme A",
      title: "Unity and diversity",
      lessons: [
        {
          id: "bi-l1",
          title: "Water and biomolecules",
          questions: [
            {
              id: "bi-l1-q1",
              type: "mcq",
              prompt:
                "Water's high specific heat capacity is a result of",
              choices: [
                "its small mass",
                "hydrogen bonding between molecules",
                "its low density",
                "dissolved ions",
              ],
              answerIndex: 1,
              explanation:
                "H-bonds absorb energy when broken → water resists temperature change, stabilising habitats.",
            },
            {
              id: "bi-l1-q2",
              type: "mcq",
              prompt:
                "A condensation reaction between two monosaccharides produces",
              choices: [
                "two amino acids",
                "a disaccharide plus water",
                "a peptide",
                "a fatty acid",
              ],
              answerIndex: 1,
              explanation:
                "Monomers join by condensation (releasing H₂O) forming glycosidic/peptide/ester bonds.",
            },
            {
              id: "bi-l1-q3",
              type: "mcq",
              prompt:
                "The monomers of proteins are",
              choices: [
                "nucleotides",
                "monosaccharides",
                "amino acids",
                "fatty acids",
              ],
              answerIndex: 2,
              explanation:
                "20 amino acids join via peptide bonds to form polypeptides.",
            },
            {
              id: "bi-l1-q4",
              type: "tf",
              prompt:
                "Ice floats because water is denser in its solid state than its liquid state.",
              answer: false,
              explanation:
                "Ice is LESS dense — hydrogen bonds hold molecules in an open lattice, so it floats.",
            },
            {
              id: "bi-l1-q5",
              type: "short",
              prompt:
                "Name the two components of a nucleotide.",
              answer:
                "A sugar, a phosphate group and a nitrogenous base.",
              keywords: ["sugar", "phosphate", "base"],
              explanation:
                "Pentose sugar + phosphate + base (A/T/G/C or A/U/G/C) = nucleotide.",
            },
            {
              id: "bi-l1-q6",
              type: "short",
              prompt:
                "Explain why cellulose is suitable as a structural material in plant cell walls.",
              answer:
                "Long straight β-glucose chains form hydrogen-bonded fibres with high tensile strength.",
              keywords: ["hydrogen", "fibre", "strength", "glucose", "straight"],
              explanation:
                "Straight chains pack into microfibrils cross-linked by H-bonds → rigid support.",
            },
          ],
        },
        {
          id: "bi-l2",
          title: "Cells: structure and origin",
          questions: [
            {
              id: "bi-l2-q1",
              type: "mcq",
              prompt:
                "A feature found in plant cells but not animal cells is",
              choices: [
                "mitochondria",
                "a cellulose cell wall",
                "ribosomes",
                "a nucleus",
              ],
              answerIndex: 1,
              explanation:
                "Plant cells also have chloroplasts and a large permanent vacuole.",
            },
            {
              id: "bi-l2-q2",
              type: "mcq",
              prompt:
                "The endosymbiotic theory explains the origin of",
              choices: [
                "ribosomes",
                "mitochondria and chloroplasts as engulfed prokaryotes",
                "the cell wall",
                "viruses",
              ],
              answerIndex: 1,
              explanation:
                "Evidence: double membranes, own circular DNA, 70S ribosomes, binary fission.",
            },
            {
              id: "bi-l2-q3",
              type: "mcq",
              prompt:
                "Prokaryotic cells differ from eukaryotic cells because they lack",
              choices: [
                "DNA",
                "membrane-bound organelles such as a nucleus",
                "cytoplasm",
                "ribosomes",
              ],
              answerIndex: 1,
              explanation:
                "Prokaryotes have naked DNA in a nucleoid and 70S ribosomes but no nucleus/mitochondria.",
            },
            {
              id: "bi-l2-q4",
              type: "tf",
              prompt:
                "Stem cells can differentiate into many cell types because they express only a subset of their genes.",
              answer: true,
              explanation:
                "Differentiation = differential gene expression, not loss of DNA.",
            },
            {
              id: "bi-l2-q5",
              type: "short",
              prompt:
                "State the function of the rough endoplasmic reticulum.",
              answer:
                "Synthesis and transport of proteins — ribosomes on its surface make secreted/membrane proteins.",
              keywords: ["protein", "ribosome", "transport", "synthesis"],
              explanation:
                "Bound ribosomes produce proteins that the RER folds and ships in vesicles.",
            },
            {
              id: "bi-l2-q6",
              type: "short",
              prompt:
                "Give two pieces of evidence that mitochondria were once free-living prokaryotes.",
              answer:
                "They have their own circular DNA and 70S ribosomes (and a double membrane).",
              keywords: ["dna", "ribosome", "membrane", "circular"],
              explanation:
                "Own DNA, own ribosomes, double membrane, division by fission — like bacteria.",
            },
          ],
        },
        {
          id: "bi-l11",
          title: "Cell cycle, mitosis and meiosis",
          questions: [
            {
              id: "bi-l11-q1",
              type: "mcq",
              prompt: "DNA replication occurs during",
              choices: [
                "prophase",
                "interphase (S phase)",
                "metaphase",
                "cytokinesis",
              ],
              answerIndex: 1,
              explanation:
                "The S phase of interphase — before mitosis begins.",
            },
            {
              id: "bi-l11-q2",
              type: "mcq",
              prompt: "Mitosis produces",
              choices: [
                "4 haploid cells",
                "2 genetically identical diploid cells",
                "gametes",
                "varied cells",
              ],
              answerIndex: 1,
              explanation:
                "One division, identical daughters — for growth and repair.",
            },
            {
              id: "bi-l11-q3",
              type: "tf",
              prompt:
                "Meiosis halves the chromosome number, producing haploid cells.",
              answer: true,
              explanation:
                "Two divisions (I and II): diploid → haploid.",
            },
            {
              id: "bi-l11-q4",
              type: "mcq",
              prompt:
                "Crossing over between homologous chromosomes occurs in",
              choices: [
                "mitosis",
                "prophase I of meiosis",
                "interphase",
                "anaphase II",
              ],
              answerIndex: 1,
              explanation:
                "Chiasmata in prophase I create genetic variation.",
            },
            {
              id: "bi-l11-q5",
              type: "short",
              prompt:
                "How many cells result from one complete meiosis? (one number)",
              answer: "4",
              keywords: ["4"],
              acceptable: ["four"],
              explanation: "Two divisions → four haploid cells.",
            },
            {
              id: "bi-l11-q6",
              type: "short",
              prompt:
                "A cell with 46 chromosomes divides by mitosis. Give the chromosome number of each daughter cell.",
              answer: "46",
              keywords: ["46"],
              explanation:
                "Mitosis conserves chromosome number — still 46.",
            },
          ],
        },
        {
          id: "bi-l12",
          title: "DNA replication, transcription and translation",
          questions: [
            {
              id: "bi-l12-q1",
              type: "mcq",
              prompt: "DNA replication is described as semi-conservative because",
              choices: [
                "only half the DNA copies",
                "each new molecule keeps one original strand",
                "it happens slowly",
                "mistakes are conserved",
              ],
              answerIndex: 1,
              explanation:
                "Each daughter molecule = one old + one new strand.",
            },
            {
              id: "bi-l12-q2",
              type: "mcq",
              prompt: "Transcription produces",
              choices: [
                "DNA",
                "mRNA from a DNA template",
                "protein",
                "tRNA",
              ],
              answerIndex: 1,
              explanation:
                "RNA polymerase builds mRNA in the nucleus.",
            },
            {
              id: "bi-l12-q3",
              type: "tf",
              prompt:
                "Translation occurs at ribosomes, where tRNA brings amino acids to match mRNA codons.",
              answer: true,
              explanation:
                "Codon–anticodon pairing builds the polypeptide.",
            },
            {
              id: "bi-l12-q4",
              type: "mcq",
              prompt: "Correct base pairing is",
              choices: [
                "A–C, G–T",
                "A–T (or A–U in RNA), G–C",
                "A–G, T–C",
                "A–A, T–T",
              ],
              answerIndex: 1,
              explanation:
                "Purine–pyrimidine pairs; U replaces T in RNA.",
            },
            {
              id: "bi-l12-q5",
              type: "short",
              prompt:
                "In RNA, which base pairs with adenine? (one word)",
              answer: "uracil",
              keywords: ["uracil", "u"],
              acceptable: ["U"],
              explanation:
                "RNA uses uracil instead of thymine: A–U.",
            },
            {
              id: "bi-l12-q6",
              type: "short",
              prompt:
                "An mRNA 9 bases long codes for how many amino acids? (one number)",
              answer: "3",
              keywords: ["3"],
              explanation: "9 ÷ 3 per codon = 3 amino acids.",
            },
          ],
        },
        {
          id: "bi-l13",
          title: "Origins of cells and viruses",
          questions: [
            {
              id: "bi-l13-q1",
              type: "mcq",
              prompt: "Cell theory states that",
              choices: [
                "cells arise spontaneously",
                "all cells come from pre-existing cells",
                "viruses are alive",
                "all cells have nuclei",
              ],
              answerIndex: 1,
              explanation:
                "Plus: cells are the basic unit of life and all organisms are made of them.",
            },
            {
              id: "bi-l13-q2",
              type: "mcq",
              prompt:
                "The endosymbiotic theory explains the origin of",
              choices: [
                "the nucleus",
                "mitochondria and chloroplasts",
                "ribosomes",
                "the cell wall",
              ],
              answerIndex: 1,
              explanation:
                "Free-living prokaryotes engulfed by early cells — supported by their own DNA and double membranes.",
            },
            {
              id: "bi-l13-q3",
              type: "tf",
              prompt:
                "Viruses are not cells and cannot reproduce without a host.",
              answer: true,
              explanation:
                "They lack metabolism and ribosomes — obligate intracellular parasites.",
            },
            {
              id: "bi-l13-q4",
              type: "mcq",
              prompt: "Prokaryotic cells differ from eukaryotes because they lack",
              choices: [
                "ribosomes",
                "a nucleus and membrane-bound organelles",
                "DNA",
                "a cell membrane",
              ],
              answerIndex: 1,
              explanation:
                "Naked DNA in a nucleoid region; still have ribosomes, membrane and cell wall.",
            },
            {
              id: "bi-l13-q5",
              type: "short",
              prompt:
                "Name the organelle of endosymbiotic origin that produces ATP in eukaryotes.",
              answer: "mitochondria",
              keywords: ["mitochondr"],
              acceptable: ["mitochondrion", "mitochondria"],
              explanation:
                "Mitochondria descend from engulfed aerobic bacteria.",
            },
            {
              id: "bi-l13-q6",
              type: "short",
              prompt:
                "Were the first cells likely aerobic or anaerobic? (one word)",
              answer: "anaerobic",
              keywords: ["anaerob"],
              explanation:
                "Early Earth had little oxygen — life began anaerobically.",
            },
          ],
        },
      ],
    },
    {
      id: "bi-u2",
      code: "Theme B",
      title: "Form and function",
      lessons: [
        {
          id: "bi-l3",
          title: "Membranes and transport",
          questions: [
            {
              id: "bi-l3-q1",
              type: "mcq",
              prompt:
                "The fluid mosaic model describes the membrane as",
              choices: [
                "a rigid protein wall",
                "a phospholipid bilayer with embedded proteins able to move",
                "a single lipid layer",
                "pure cholesterol",
              ],
              answerIndex: 1,
              explanation:
                "Fluid phospholipid bilayer + mosaic of proteins (channels, pumps, receptors).",
            },
            {
              id: "bi-l3-q2",
              type: "mcq",
              prompt:
                "Osmosis is the movement of",
              choices: [
                "solute down its gradient",
                "water across a partially permeable membrane toward higher solute concentration",
                "ions against the gradient",
                "gases only",
              ],
              answerIndex: 1,
              explanation:
                "Water moves from low to high solute concentration through a semi-permeable membrane.",
            },
            {
              id: "bi-l3-q3",
              type: "mcq",
              prompt:
                "Active transport differs from facilitated diffusion because active transport",
              choices: [
                "needs no proteins",
                "moves substances against their gradient using ATP",
                "only moves water",
                "is always faster",
              ],
              answerIndex: 1,
              explanation:
                "e.g. Na⁺/K⁺ pump — against gradient, ATP-powered via carrier proteins.",
            },
            {
              id: "bi-l3-q4",
              type: "tf",
              prompt:
                "A plant cell placed in distilled water will burst like an animal cell does.",
              answer: false,
              explanation:
                "The cell wall resists pressure — the cell becomes turgid but doesn't burst.",
            },
            {
              id: "bi-l3-q5",
              type: "short",
              prompt:
                "Define 'hypotonic solution'.",
              answer:
                "A solution with a lower solute concentration than the cell — water enters the cell.",
              keywords: ["lower", "solute", "water", "enter"],
              explanation:
                "Hypo = less solute outside → net water movement into the cell.",
            },
            {
              id: "bi-l3-q6",
              type: "short",
              prompt:
                "Explain the role of cholesterol in animal cell membranes.",
              answer:
                "It regulates membrane fluidity — restraining movement at high temperatures and preventing packing at low ones.",
              keywords: ["fluidity", "stabil", "temperature"],
              explanation:
                "Cholesterol buffers fluidity changes, keeping the membrane stable.",
            },
          ],
        },
        {
          id: "bi-l4",
          title: "Proteins and enzymes",
          level: "HL",
          questions: [
            {
              id: "bi-l4-q1",
              type: "mcq",
              prompt:
                "The tertiary structure of a protein is determined by",
              choices: [
                "peptide bonds alone",
                "interactions between R-groups folding the chain into its 3-D shape",
                "the DNA double helix",
                "hydrolysis",
              ],
              answerIndex: 1,
              explanation:
                "R-group interactions (H-bonds, ionic, disulfide, hydrophobic) fold the chain.",
            },
            {
              id: "bi-l4-q2",
              type: "mcq",
              prompt:
                "Enzymes lower activation energy by",
              choices: [
                "being consumed in the reaction",
                "providing an active site that stabilises the transition state",
                "raising the temperature",
                "changing the products",
              ],
              answerIndex: 1,
              explanation:
                "Substrate binding at the active site strains bonds and orients reactants.",
            },
            {
              id: "bi-l4-q3",
              type: "mcq",
              prompt:
                "A non-competitive inhibitor reduces enzyme activity by",
              choices: [
                "blocking the active site",
                "binding elsewhere and changing the enzyme's shape",
                "increasing substrate concentration",
                "denaturing the substrate",
              ],
              answerIndex: 1,
              explanation:
                "Allosteric binding distorts the active site — not overcome by adding substrate.",
            },
            {
              id: "bi-l4-q4",
              type: "tf",
              prompt:
                "Denaturation by high temperature breaks the peptide bonds of a protein.",
              answer: false,
              explanation:
                "Denaturation disrupts secondary/tertiary interactions, not the primary peptide sequence.",
            },
            {
              id: "bi-l4-q5",
              type: "short",
              prompt:
                "Describe what happens to enzyme activity as temperature rises above the optimum.",
              answer:
                "Activity falls sharply because bonds holding the active site's shape break — the enzyme denatures.",
              keywords: ["denatur", "active site", "shape", "fall"],
              explanation:
                "Beyond the optimum, the active site loses its shape → rate drops to zero.",
            },
            {
              id: "bi-l4-q6",
              type: "short",
              prompt:
                "State the quaternary structure of haemoglobin.",
              answer:
                "Four polypeptide subunits (two alpha, two beta), each with a haem group.",
              keywords: ["four", "subunit", "haem", "heme"],
              explanation:
                "Quaternary = multiple polypeptides assembled — haemoglobin has 4.",
            },
          ],
        },
        {
          id: "bi-l14",
          title: "Osmosis and membrane transport calculations",
          questions: [
            {
              id: "bi-l14-q1",
              type: "mcq",
              prompt: "Osmosis is the movement of",
              choices: [
                "solute across a membrane",
                "water across a partially permeable membrane toward higher solute concentration",
                "ions with ATP",
                "water against its gradient",
              ],
              answerIndex: 1,
              explanation:
                "Water moves to the region of higher solute (lower water potential).",
            },
            {
              id: "bi-l14-q2",
              type: "mcq",
              prompt: "Facilitated diffusion requires",
              choices: [
                "ATP",
                "a channel or carrier protein but no ATP",
                "a vesicle",
                "high temperature",
              ],
              answerIndex: 1,
              explanation:
                "Down the gradient via a transport protein — passive.",
            },
            {
              id: "bi-l14-q3",
              type: "tf",
              prompt:
                "Active transport uses ATP to move substances against their concentration gradient.",
              answer: true,
              explanation:
                "e.g. the sodium–potassium pump.",
            },
            {
              id: "bi-l14-q4",
              type: "mcq",
              prompt:
                "An animal cell placed in a hypertonic solution will",
              choices: [
                "swell",
                "shrink (crenate)",
                "stay the same",
                "burst instantly",
              ],
              answerIndex: 1,
              explanation:
                "Water leaves the cell toward the higher external solute.",
            },
            {
              id: "bi-l14-q5",
              type: "short",
              prompt:
                "A red blood cell (≈0.9% solutes) is placed in 2% NaCl. Does it lose or gain water? (one word)",
              answer: "loses",
              keywords: ["lose", "loses"],
              acceptable: ["lose", "loses water", "shrinks"],
              explanation:
                "2% > 0.9% → hypertonic → water leaves the cell.",
            },
            {
              id: "bi-l14-q6",
              type: "short",
              prompt:
                "Give the water potential of pure water in kPa.",
              answer: "0",
              keywords: ["0"],
              acceptable: ["0 kPa", "zero"],
              explanation:
                "Pure water defines zero; solutes make it negative.",
            },
          ],
        },
        {
          id: "bi-l15",
          title: "Gas exchange, ventilation and circulation",
          questions: [
            {
              id: "bi-l15-q1",
              type: "mcq",
              prompt:
                "Alveoli are adapted for gas exchange by all EXCEPT",
              choices: [
                "thin walls",
                "large surface area",
                "thick walls",
                "rich blood supply",
              ],
              answerIndex: 2,
              explanation:
                "Thick walls would slow diffusion — the others help it.",
            },
            {
              id: "bi-l15-q2",
              type: "mcq",
              prompt: "During inhalation, the diaphragm",
              choices: [
                "relaxes and domes up",
                "contracts and flattens",
                "stays still",
                "moves sideways",
              ],
              answerIndex: 1,
              explanation:
                "Contraction increases thoracic volume → air drawn in.",
            },
            {
              id: "bi-l15-q3",
              type: "tf",
              prompt:
                "Arteries carry blood away from the heart (usually oxygenated, except the pulmonary artery).",
              answer: true,
              explanation:
                "Direction defines the vessel, not oxygen content.",
            },
            {
              id: "bi-l15-q4",
              type: "mcq",
              prompt: "Double circulation means",
              choices: [
                "two hearts",
                "separate pulmonary and systemic circuits",
                "blood passes twice through each organ",
                "two ventricles only",
              ],
              answerIndex: 1,
              explanation:
                "Heart → lungs → heart → body — allows higher pressure to the body.",
            },
            {
              id: "bi-l15-q5",
              type: "short",
              prompt:
                "Breathing rate rises in exercise mainly because blood levels of which gas increase? (name it)",
              answer: "carbon dioxide",
              keywords: ["carbon", "co2", "CO2"],
              acceptable: ["CO2", "CO₂", "co2"],
              explanation:
                "Chemoreceptors respond to CO₂ (via blood pH), not O₂ lack.",
            },
            {
              id: "bi-l15-q6",
              type: "short",
              prompt:
                "Which heart chamber receives oxygenated blood from the lungs?",
              answer: "left atrium",
              keywords: ["left", "atrium"],
              acceptable: ["the left atrium"],
              explanation:
                "Pulmonary veins → left atrium → left ventricle → aorta.",
            },
          ],
        },
        {
          id: "bi-l16",
          title: "Nerves, hormones, homeostasis and immunity",
          questions: [
            {
              id: "bi-l16-q1",
              type: "mcq",
              prompt: "The correct order in a reflex arc is",
              choices: [
                "effector → motor → relay → sensory → receptor",
                "receptor → sensory → relay → motor → effector",
                "receptor → motor → effector",
                "brain → muscle → receptor",
              ],
              answerIndex: 1,
              explanation:
                "Stimulus → receptor → sensory neurone → relay → motor → effector → response.",
            },
            {
              id: "bi-l16-q2",
              type: "mcq",
              prompt: "Insulin lowers blood glucose by",
              choices: [
                "increasing respiration only",
                "promoting glucose uptake and storage as glycogen",
                "blocking digestion",
                "producing glucose",
              ],
              answerIndex: 1,
              explanation:
                "Insulin → uptake into cells + glycogenesis in liver/muscle.",
            },
            {
              id: "bi-l16-q3",
              type: "tf",
              prompt:
                "Antibodies are specific — each recognises one particular antigen shape.",
              answer: true,
              explanation:
                "Complementary binding to a specific epitope.",
            },
            {
              id: "bi-l16-q4",
              type: "mcq",
              prompt: "Negative feedback works by",
              choices: [
                "amplifying a change",
                "reversing a change back toward the set point",
                "ignoring stimuli",
                "producing hormones only",
              ],
              answerIndex: 1,
              explanation:
                "e.g. high glucose → insulin → glucose falls → insulin stops.",
            },
            {
              id: "bi-l16-q5",
              type: "short",
              prompt:
                "Name the hormone that RAISES blood glucose (released when it's low).",
              answer: "glucagon",
              keywords: ["glucagon"],
              explanation:
                "Glucagon → glycogen → glucose in the liver.",
            },
            {
              id: "bi-l16-q6",
              type: "short",
              prompt:
                "Name the white blood cells that engulf and digest pathogens.",
              answer: "phagocytes",
              keywords: ["phagocyt"],
              acceptable: ["macrophages", "phagocytes"],
              explanation:
                "Phagocytes engulf pathogens by phagocytosis.",
            },
          ],
        },
        {
          id: "bi-l17",
          title: "Enzyme kinetics and inhibition",
          level: "HL",
          questions: [
            {
              id: "bi-l17-q1",
              type: "mcq",
              prompt: "Vmax is reached when",
              choices: [
                "substrate is exhausted",
                "all enzyme active sites are saturated",
                "temperature is zero",
                "pH is optimal",
              ],
              answerIndex: 1,
              explanation:
                "Rate plateaus when every active site is occupied.",
            },
            {
              id: "bi-l17-q2",
              type: "mcq",
              prompt:
                "A competitive inhibitor changes enzyme kinetics by",
              choices: [
                "lowering Vmax",
                "raising Km while leaving Vmax unchanged",
                "destroying the enzyme",
                "changing the product",
              ],
              answerIndex: 1,
              explanation:
                "Competes for the active site — more substrate can still reach Vmax, but affinity (Km) worsens.",
            },
            {
              id: "bi-l17-q3",
              type: "tf",
              prompt:
                "A non-competitive inhibitor lowers Vmax because it binds away from the active site.",
              answer: true,
              explanation:
                "Allosteric binding distorts the enzyme — Vmax falls, Km unchanged.",
            },
            {
              id: "bi-l17-q4",
              type: "mcq",
              prompt: "A LOW Km value indicates",
              choices: [
                "low enzyme affinity",
                "high enzyme–substrate affinity",
                "fast Vmax",
                "non-competitive inhibition",
              ],
              answerIndex: 1,
              explanation:
                "Km = substrate concentration at ½Vmax; low Km = high affinity.",
            },
            {
              id: "bi-l17-q5",
              type: "short",
              prompt:
                "An inhibitor that binds the ACTIVE site is called ___ (one word).",
              answer: "competitive",
              keywords: ["competitive"],
              explanation:
                "It competes with substrate for the active site.",
            },
            {
              id: "bi-l17-q6",
              type: "short",
              prompt:
                "An enzyme has Km = 5 mM. At what substrate concentration is the rate half of Vmax?",
              answer: "5 mM",
              keywords: ["5"],
              acceptable: ["5 mM", "5 mm"],
              explanation:
                "By definition Km is the concentration giving ½Vmax.",
            },
          ],
        },
      ],
    },
    {
      id: "bi-u3",
      code: "Theme C",
      title: "Interaction and interdependence",
      lessons: [
        {
          id: "bi-l5",
          title: "Photosynthesis and respiration",
          questions: [
            {
              id: "bi-l5-q1",
              type: "mcq",
              prompt:
                "Oxygen in photosynthesis is produced during",
              choices: [
                "the Calvin cycle",
                "photolysis of water in the light-dependent reactions",
                "glycolysis",
                "carbon fixation",
              ],
              answerIndex: 1,
              explanation:
                "Water splitting in the thylakoids releases O₂ as a by-product.",
            },
            {
              id: "bi-l5-q2",
              type: "mcq",
              prompt:
                "Most ATP in aerobic respiration is made in",
              choices: [
                "glycolysis",
                "the Krebs cycle",
                "oxidative phosphorylation on the inner mitochondrial membrane",
                "the cytoplasm",
              ],
              answerIndex: 2,
              explanation:
                "The electron transport chain + chemiosmosis yields the great majority of ATP.",
            },
            {
              id: "bi-l5-q3",
              type: "mcq",
              prompt:
                "A limiting factor for photosynthesis is",
              choices: [
                "oxygen concentration",
                "light intensity, CO₂ or temperature — whichever is in shortest supply",
                "nitrogen gas",
                "leaf colour",
              ],
              answerIndex: 1,
              explanation:
                "The factor nearest its minimum constrains the rate (law of limiting factors).",
            },
            {
              id: "bi-l5-q4",
              type: "tf",
              prompt:
                "Anaerobic respiration in yeast produces ethanol and carbon dioxide.",
              answer: true,
              explanation:
                "Yeast fermentation: glucose → ethanol + CO₂; animals produce lactate instead.",
            },
            {
              id: "bi-l5-q5",
              type: "short",
              prompt:
                "Write the word equation for aerobic respiration.",
              answer:
                "Glucose + oxygen → carbon dioxide + water (+ ATP/energy).",
              keywords: ["glucose", "oxygen", "carbon dioxide", "water"],
              explanation:
                "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP.",
            },
            {
              id: "bi-l5-q6",
              type: "short",
              prompt:
                "Explain why the rate of photosynthesis levels off at high light intensity.",
              answer:
                "Another factor — CO₂ or temperature — becomes limiting.",
              keywords: ["limit", "co2", "carbon dioxide", "temperature"],
              explanation:
                "Once light is no longer limiting, the scarcest other factor caps the rate.",
            },
          ],
        },
        {
          id: "bi-l6",
          title: "Ecosystems and nutrient cycling",
          questions: [
            {
              id: "bi-l6-q1",
              type: "mcq",
              prompt:
                "Energy transfer between trophic levels is roughly",
              choices: [
                "100% efficient",
                "10% efficient — most is lost as heat/waste",
                "50%",
                "1%",
              ],
              answerIndex: 1,
              explanation:
                "Only ~10% passes on; the rest is lost to respiration, excretion and unconsumed parts.",
            },
            {
              id: "bi-l6-q2",
              type: "mcq",
              prompt:
                "Nitrogen-fixing bacteria convert",
              choices: [
                "nitrates to ammonia",
                "atmospheric N₂ into ammonia compounds usable by plants",
                "protein to nitrites",
                "CO₂ to oxygen",
              ],
              answerIndex: 1,
              explanation:
                "e.g. Rhizobium in legume root nodules fixes N₂ → NH₃ → amino acids.",
            },
            {
              id: "bi-l6-q3",
              type: "mcq",
              prompt:
                "A pyramid of energy is always upright because",
              choices: [
                "producers are always largest",
                "energy is lost at each transfer so higher levels have less",
                "predators are rare",
                "decomposers recycle energy",
              ],
              answerIndex: 1,
              explanation:
                "Energy is not recycled — it flows through and dissipates as heat.",
            },
            {
              id: "bi-l6-q4",
              type: "tf",
              prompt:
                "Decomposers obtain energy by breaking down dead organic matter and returning nutrients to the soil.",
              answer: true,
              explanation:
                "Saprotrophs digest detritus extracellularly, releasing inorganic nutrients.",
            },
            {
              id: "bi-l6-q5",
              type: "short",
              prompt:
                "Define a food chain and state why most chains have few trophic levels.",
              answer:
                "The sequence of feeding relationships transferring energy; energy losses limit length to ~4–5 levels.",
              keywords: ["energy", "feeding", "transfer", "loss", "trophic"],
              explanation:
                "Each transfer loses ~90% of energy — little remains for top consumers.",
            },
            {
              id: "bi-l6-q6",
              type: "short",
              prompt:
                "Outline the role of nitrifying bacteria in the nitrogen cycle.",
              answer:
                "They oxidise ammonia to nitrites then nitrates, making nitrogen absorbable by plants.",
              keywords: ["ammonia", "nitrite", "nitrate", "oxid"],
              explanation:
                "Nitrosomonas (NH₃→NO₂⁻) and Nitrobacter (NO₂⁻→NO₃⁻) — nitrates feed plants.",
            },
          ],
        },
        {
          id: "bi-l18",
          title: "Nutrient cycles and climate change",
          questions: [
            {
              id: "bi-l18-q1",
              type: "mcq",
              prompt: "Nitrogen fixation converts",
              choices: [
                "ammonia to nitrate",
                "atmospheric N₂ into ammonia",
                "nitrate to N₂",
                "protein to amino acids",
              ],
              answerIndex: 1,
              explanation:
                "Rhizobium bacteria (and lightning) fix N₂ → NH₃.",
            },
            {
              id: "bi-l18-q2",
              type: "mcq",
              prompt:
                "Decomposers recycle nutrients primarily by",
              choices: [
                "photosynthesis",
                "releasing inorganic nutrients from dead organic matter",
                "fixing carbon",
                "predation",
              ],
              answerIndex: 1,
              explanation:
                "Saprotrophs break down detritus — ammonification then nitrification.",
            },
            {
              id: "bi-l18-q3",
              type: "tf",
              prompt:
                "Greenhouse gases warm the Earth by absorbing outgoing infrared radiation.",
              answer: true,
              explanation:
                "Shortwave in, longwave trapped — the greenhouse effect.",
            },
            {
              id: "bi-l18-q4",
              type: "mcq",
              prompt: "The largest natural carbon sinks include",
              choices: [
                "deserts",
                "oceans and forests",
                "the atmosphere",
                "glaciers only",
              ],
              answerIndex: 1,
              explanation:
                "Oceans dissolve CO₂; forests store it as biomass.",
            },
            {
              id: "bi-l18-q5",
              type: "short",
              prompt:
                "Name the process converting nitrates back to N₂ gas.",
              answer: "denitrification",
              keywords: ["denitrif"],
              acceptable: ["denitrifying"],
              explanation:
                "Denitrifying bacteria return N₂ to the atmosphere.",
            },
            {
              id: "bi-l18-q6",
              type: "short",
              prompt:
                "Name the main human activity adding CO₂ to the atmosphere (one phrase).",
              answer: "burning fossil fuels",
              keywords: ["fossil", "burn"],
              acceptable: ["fossil fuels", "combustion"],
              explanation:
                "Fossil fuel combustion is the dominant anthropogenic source.",
            },
          ],
        },
        {
          id: "bi-l19",
          title: "Populations and carrying capacity",
          questions: [
            {
              id: "bi-l19-q1",
              type: "mcq",
              prompt: "Carrying capacity is",
              choices: [
                "the largest litter size",
                "the maximum population an environment can sustain",
                "the birth rate",
                "population density",
              ],
              answerIndex: 1,
              explanation:
                "Set by limiting resources — food, space, water.",
            },
            {
              id: "bi-l19-q2",
              type: "mcq",
              prompt:
                "The phases of a sigmoid (S-shaped) population curve are",
              choices: [
                "growth, death, repeat",
                "lag, exponential, plateau",
                "birth, death, plateau",
                "linear only",
              ],
              answerIndex: 1,
              explanation:
                "Lag → exponential → plateau at carrying capacity.",
            },
            {
              id: "bi-l19-q3",
              type: "tf",
              prompt:
                "Density-dependent factors (disease, competition) intensify as a population grows.",
              answer: true,
              explanation:
                "They act as brakes — the mechanism behind the plateau.",
            },
            {
              id: "bi-l19-q4",
              type: "mcq",
              prompt: "r-selected species typically",
              choices: [
                "have few offspring with much care",
                "produce many offspring with little parental care",
                "live long lives",
                "stay at carrying capacity",
              ],
              answerIndex: 1,
              explanation:
                "Quantity over quality — e.g. insects, weeds.",
            },
            {
              id: "bi-l19-q5",
              type: "short",
              prompt:
                "Population 1000; births 50, deaths 30 in a year. Give the net population change.",
              answer: "20",
              keywords: ["20"],
              acceptable: ["+20"],
              explanation: "50 − 30 = +20.",
            },
            {
              id: "bi-l19-q6",
              type: "short",
              prompt:
                "Name ONE density-dependent factor that limits population growth.",
              answer: "competition for food",
              keywords: ["food", "competition", "disease", "predat", "space"],
              acceptable: ["disease", "competition", "predation", "lack of food"],
              explanation:
                "Food, space, disease, predation — any one intensifies with crowding.",
            },
          ],
        },
        {
          id: "bi-l20",
          title: "Photosynthesis and respiration detail",
          level: "HL",
          questions: [
            {
              id: "bi-l20-q1",
              type: "mcq",
              prompt:
                "The light-dependent reactions occur in the ___ and produce",
              choices: [
                "stroma; glucose",
                "thylakoid membranes; ATP and NADPH",
                "matrix; CO₂",
                "cytoplasm; O₂",
              ],
              answerIndex: 1,
              explanation:
                "Thylakoids: photolysis of water → O₂, ATP, NADPH.",
            },
            {
              id: "bi-l20-q2",
              type: "mcq",
              prompt:
                "CO₂ is fixed in the Calvin cycle by the enzyme",
              choices: [
                "ATP synthase",
                "RuBisCO",
                "amylase",
                "DNA polymerase",
              ],
              answerIndex: 1,
              explanation:
                "RuBisCO fixes CO₂ onto RuBP in the stroma — the most abundant protein on Earth.",
            },
            {
              id: "bi-l20-q3",
              type: "tf",
              prompt:
                "The Krebs cycle takes place in the mitochondrial matrix.",
              answer: true,
              explanation:
                "Matrix = Krebs; inner membrane = oxidative phosphorylation.",
            },
            {
              id: "bi-l20-q4",
              type: "mcq",
              prompt:
                "Most ATP in aerobic respiration is produced by",
              choices: [
                "glycolysis",
                "Krebs cycle",
                "oxidative phosphorylation",
                "fermentation",
              ],
              answerIndex: 2,
              explanation:
                "The electron transport chain + chemiosmosis makes ~30+ ATP.",
            },
            {
              id: "bi-l20-q5",
              type: "short",
              prompt:
                "Name the electron carrier (with ATP) produced by the light-dependent reactions.",
              answer: "NADPH",
              keywords: ["NADPH"],
              acceptable: ["reduced NADP"],
              explanation:
                "NADPH + ATP feed the Calvin cycle.",
            },
            {
              id: "bi-l20-q6",
              type: "short",
              prompt:
                "Give the NET ATP yield from glycolysis per glucose.",
              answer: "2",
              keywords: ["2"],
              explanation:
                "4 made − 2 invested = net 2 ATP.",
            },
          ],
        },
      ],
    },
    {
      id: "bi-u4",
      code: "Theme D",
      title: "Continuity and change",
      lessons: [
        {
          id: "bi-l7",
          title: "Inheritance and gene expression",
          questions: [
            {
              id: "bi-l7-q1",
              type: "mcq",
              prompt:
                "A heterozygous genotype for a dominant trait shows the dominant phenotype because",
              choices: [
                "recessive alleles are deleted",
                "the dominant allele masks the recessive one",
                "both alleles blend",
                "of mutation",
              ],
              answerIndex: 1,
              explanation:
                "Dominance: one functional allele produces enough product for the phenotype.",
            },
            {
              id: "bi-l7-q2",
              type: "mcq",
              prompt:
                "Crossing two heterozygotes (Aa × Aa) gives offspring phenotypic ratio",
              choices: ["1:1", "3:1 dominant:recessive", "9:3:3:1", "all dominant"],
              answerIndex: 1,
              explanation:
                "1 AA : 2 Aa : 1 aa → 3 dominant : 1 recessive.",
            },
            {
              id: "bi-l7-q3",
              type: "mcq",
              prompt:
                "Transcription produces",
              choices: [
                "a DNA copy",
                "mRNA complementary to the template strand",
                "a protein directly",
                "tRNA genes",
              ],
              answerIndex: 1,
              explanation:
                "RNA polymerase builds mRNA; translation on ribosomes makes the polypeptide.",
            },
            {
              id: "bi-l7-q4",
              type: "tf",
              prompt:
                "Sex-linked recessive conditions (like colour blindness) appear more often in males.",
              answer: true,
              explanation:
                "Males have one X — a single recessive allele on it is expressed.",
            },
            {
              id: "bi-l7-q5",
              type: "short",
              prompt:
                "A mother is a carrier and father is unaffected for a recessive X-linked condition. What proportion of sons are expected to be affected?",
              answer: "50% / half",
              acceptable: ["1/2", "0.5", "half"],
              keywords: ["half", "50", "1/2"],
              explanation:
                "Sons get Y from father and one X from mother — 50% chance of the affected X.",
            },
            {
              id: "bi-l7-q6",
              type: "short",
              prompt:
                "Define 'genome'.",
              answer:
                "The entire genetic material of an organism.",
              keywords: ["all", "genetic", "dna", "entire"],
              explanation:
                "All of an organism's DNA, including genes and non-coding regions.",
            },
          ],
        },
        {
          id: "bi-l8",
          title: "Evolution and speciation",
          questions: [
            {
              id: "bi-l8-q1",
              type: "mcq",
              prompt:
                "Natural selection acts on",
              choices: [
                "individuals' acquired traits",
                "heritable variation — better-adapted phenotypes leave more offspring",
                "the whole species equally",
                "only dominant alleles",
              ],
              answerIndex: 1,
              explanation:
                "Differential reproductive success of heritable variants shifts allele frequencies.",
            },
            {
              id: "bi-l8-q2",
              type: "mcq",
              prompt:
                "Speciation requires",
              choices: [
                "natural selection only",
                "reproductive isolation separating gene pools",
                "a larger population",
                "migration",
              ],
              answerIndex: 1,
              explanation:
                "Geographic/behavioural/temporal isolation prevents gene flow → divergence.",
            },
            {
              id: "bi-l8-q3",
              type: "mcq",
              prompt:
                "Homologous structures (like pentadactyl limbs) indicate",
              choices: [
                "convergent evolution",
                "common ancestry with divergent evolution",
                "identical function",
                "no evolution",
              ],
              answerIndex: 1,
              explanation:
                "Same underlying structure adapted for different functions → shared ancestor.",
            },
            {
              id: "bi-l8-q4",
              type: "tf",
              prompt:
                "Analogous structures arise from common ancestry.",
              answer: false,
              explanation:
                "Analogous = similar function, different ancestry (convergent evolution), e.g. wings of insects and birds.",
            },
            {
              id: "bi-l8-q5",
              type: "short",
              prompt:
                "State two sources of genetic variation in a population.",
              answer:
                "Mutation and sexual reproduction (meiosis/fertilisation).",
              keywords: ["mutation", "meiosis", "crossing", "fertilisation", "recombination"],
              explanation:
                "New alleles via mutation; new combinations via crossing over, independent assortment, fusion of gametes.",
            },
            {
              id: "bi-l8-q6",
              type: "short",
              prompt:
                "Explain how antibiotic resistance evolves in bacteria.",
              answer:
                "Random resistant mutants survive antibiotic exposure and reproduce, increasing resistance frequency.",
              keywords: ["mutation", "survive", "select", "reproduce"],
              explanation:
                "The antibiotic selects; it doesn't create resistance — selection on existing variation.",
            },
          ],
        },
        {
          id: "bi-l21",
          title: "Genetics crosses: mono- and dihybrid",
          questions: [
            {
              id: "bi-l21-q1",
              type: "mcq",
              prompt:
                "The phenotypic ratio of Aa × Aa (complete dominance) is",
              choices: ["1:1", "3:1", "1:2:1", "9:3:3:1"],
              answerIndex: 1,
              explanation:
                "Genotypes 1:2:1, phenotypes 3 dominant : 1 recessive.",
            },
            {
              id: "bi-l21-q2",
              type: "mcq",
              prompt:
                "The classic dihybrid phenotypic ratio for AaBb × AaBb is",
              choices: ["3:1", "9:3:3:1", "1:1:1:1", "1:2:1"],
              answerIndex: 1,
              explanation:
                "(3:1) × (3:1) = 9:3:3:1 for unlinked genes.",
            },
            {
              id: "bi-l21-q3",
              type: "tf",
              prompt:
                "A test cross uses a homozygous recessive individual to reveal an unknown genotype.",
              answer: true,
              explanation:
                "Recessive offspring reveal hidden recessive alleles in the dominant parent.",
            },
            {
              id: "bi-l21-q4",
              type: "mcq",
              prompt:
                "A dominant allele in a heterozygote",
              choices: [
                "is always expressed",
                "is expressed only sometimes",
                "is never expressed",
                "deletes the recessive",
              ],
              answerIndex: 0,
              explanation:
                "Complete dominance: heterozygote shows the dominant phenotype.",
            },
            {
              id: "bi-l21-q5",
              type: "short",
              prompt:
                "For Aa × Aa, give the probability of an aa offspring (decimal).",
              answer: "0.25",
              keywords: ["0.25"],
              acceptable: ["1/4", "25%"],
              explanation: "¼ of offspring are aa.",
            },
            {
              id: "bi-l21-q6",
              type: "short",
              prompt:
                "For AaBb × aabb, give the fraction of offspring that are AaBb.",
              answer: "1/4",
              keywords: ["1/4", "0.25"],
              acceptable: ["0.25", "25%"],
              explanation:
                "½ (Aa) × ½ (Bb) = ¼ — the test-cross gives 1:1:1:1.",
            },
          ],
        },
        {
          id: "bi-l22",
          title: "Gene pools and Hardy–Weinberg",
          level: "HL",
          questions: [
            {
              id: "bi-l22-q1",
              type: "mcq",
              prompt: "The Hardy–Weinberg equations are",
              choices: [
                "p + q = 1 and p² + 2pq + q² = 1",
                "p × q = 1",
                "p² = q²",
                "p + q + r = 1",
              ],
              answerIndex: 0,
              explanation:
                "Allele frequencies sum to 1; genotype frequencies to 1.",
            },
            {
              id: "bi-l22-q2",
              type: "mcq",
              prompt:
                "Hardy–Weinberg equilibrium assumes all EXCEPT",
              choices: [
                "no natural selection",
                "random mating",
                "large population",
                "frequent mutation and migration",
              ],
              answerIndex: 3,
              explanation:
                "It requires NO mutation, migration, selection or drift — a null model.",
            },
            {
              id: "bi-l22-q3",
              type: "tf",
              prompt:
                "q² gives the frequency of the recessive PHENOTYPE.",
              answer: true,
              explanation:
                "Only homozygous recessives show the trait → their frequency is q².",
            },
            {
              id: "bi-l22-q4",
              type: "mcq",
              prompt: "A population's gene pool is",
              choices: [
                "all its individuals",
                "all the alleles of all genes in the population",
                "a swimming pool of genes",
                "the dominant alleles only",
              ],
              answerIndex: 1,
              explanation:
                "The total genetic variation available.",
            },
            {
              id: "bi-l22-q5",
              type: "short",
              prompt: "If q = 0.2, give p.",
              answer: "0.8",
              keywords: ["0.8"],
              explanation: "p = 1 − q = 0.8.",
            },
            {
              id: "bi-l22-q6",
              type: "short",
              prompt:
                "If q² = 0.04, give the carrier (heterozygote) frequency 2pq.",
              answer: "0.32",
              keywords: ["0.32"],
              acceptable: ["32%"],
              explanation:
                "q = 0.2, p = 0.8 → 2pq = 2 × 0.8 × 0.2 = 0.32.",
            },
          ],
        },
        {
          id: "bi-l23",
          title: "Natural selection and evidence for evolution",
          questions: [
            {
              id: "bi-l23-q1",
              type: "mcq",
              prompt: "Natural selection acts on",
              choices: [
                "acquired traits",
                "heritable variation that affects survival/reproduction",
                "all variation equally",
                "the strongest individuals",
              ],
              answerIndex: 1,
              explanation:
                "Better-adapted heritable variants leave more offspring — alleles shift.",
            },
            {
              id: "bi-l23-q2",
              type: "mcq",
              prompt: "Evidence for evolution includes all EXCEPT",
              choices: [
                "the fossil record",
                "homologous structures",
                "DNA sequence comparisons",
                "inheritance of acquired characteristics",
              ],
              answerIndex: 3,
              explanation:
                "Lamarck's idea is discredited — the rest are strong evidence.",
            },
            {
              id: "bi-l23-q3",
              type: "tf",
              prompt:
                "Individuals do not evolve; populations evolve as allele frequencies change.",
              answer: true,
              explanation:
                "Evolution = change in the gene pool over generations.",
            },
            {
              id: "bi-l23-q4",
              type: "mcq",
              prompt:
                "Antibiotic resistance in bacteria is an example of",
              choices: [
                "genetic engineering",
                "natural selection (directional)",
                "Lamarckism",
                "random mutation only",
              ],
              answerIndex: 1,
              explanation:
                "Resistant bacteria survive and multiply — selection in real time.",
            },
            {
              id: "bi-l23-q5",
              type: "short",
              prompt:
                "Name ONE vestigial structure in humans (evidence of evolution).",
              answer: "appendix",
              keywords: ["appendix", "wisdom", "coccyx", "tailbone"],
              acceptable: ["wisdom teeth", "coccyx", "tail bone"],
              explanation:
                "Appendix, wisdom teeth, coccyx — reduced ancestral features.",
            },
            {
              id: "bi-l23-q6",
              type: "short",
              prompt:
                "Analogous structures (e.g. bat and insect wings) arise from ___ evolution. (one word)",
              answer: "convergent",
              keywords: ["convergent"],
              acceptable: ["convergence"],
              explanation:
                "Similar function, different ancestry → convergent evolution.",
            },
          ],
        },
      ],
    },
    {
      id: "bi-u5",
      code: "Theme D (HL)",
      title: "Classification and plant physiology",
      lessons: [
        {
          id: "bi-l9",
          title: "Cladistics and phylogeny",
          level: "HL",
          questions: [
            {
              id: "bi-l9-q1",
              type: "mcq",
              prompt:
                "A clade is",
              choices: [
                "any group of species",
                "a group containing a common ancestor and all its descendants",
                "a genus",
                "organisms that look similar",
              ],
              answerIndex: 1,
              explanation:
                "Monophyletic group — ancestor + all descendants, shown as a cladogram branch.",
            },
            {
              id: "bi-l9-q2",
              type: "mcq",
              prompt:
                "Modern classification relies most heavily on",
              choices: [
                "physical appearance",
                "molecular evidence such as DNA/base sequences",
                "habitat",
                "behaviour",
              ],
              answerIndex: 1,
              explanation:
                "Sequence comparisons give objective measures of relatedness, resolving groups morphology missed.",
            },
            {
              id: "bi-l9-q3",
              type: "mcq",
              prompt:
                "In a cladogram, a node (branch point) represents",
              choices: [
                "an extinction event",
                "the most recent common ancestor of the diverging lineages",
                "a mutation",
                "a fossil",
              ],
              answerIndex: 1,
              explanation:
                "Each node marks divergence from a shared ancestor; closer nodes = closer relatives.",
            },
            {
              id: "bi-l9-q4",
              type: "tf",
              prompt:
                "Two species that share a more recent node on a cladogram are more closely related than those sharing an older node.",
              answer: true,
              explanation:
                "Recency of common ancestry = degree of relatedness.",
            },
            {
              id: "bi-l9-q5",
              type: "short",
              prompt:
                "Distinguish between analogous and homologous traits in cladistic analysis.",
              answer:
                "Homologous traits come from common ancestry and show relatedness; analogous traits evolved independently and can mislead.",
              keywords: ["ancestor", "common", "convergent", "independent"],
              explanation:
                "Only shared derived (homologous) characters are valid evidence of clade membership.",
            },
            {
              id: "bi-l9-q6",
              type: "short",
              prompt:
                "State why DNA sequence data changed the classification of the figwort family.",
              answer:
                "Molecular evidence showed members were not a single clade — genera were reclassified into other families.",
              keywords: ["molecular", "clade", "reclassif", "dna", "related"],
              explanation:
                "Sequence analysis revealed figworts were polyphyletic, forcing reclassification — the IB's example of cladistics revising taxonomy.",
            },
          ],
        },
        {
          id: "bi-l10",
          title: "Transpiration and translocation",
          level: "HL",
          questions: [
            {
              id: "bi-l10-q1",
              type: "mcq",
              prompt:
                "Transpiration pull works because of water's",
              choices: [
                "low density",
                "cohesion and adhesion under tension",
                "high viscosity",
                "evaporation only",
              ],
              answerIndex: 1,
              explanation:
                "Cohesion keeps the water column continuous; adhesion helps it cling to xylem walls.",
            },
            {
              id: "bi-l10-q2",
              type: "mcq",
              prompt:
                "Translocation in phloem moves assimilates",
              choices: [
                "only upward",
                "from source to sink via pressure flow",
                "by transpiration",
                "in dead cells",
              ],
              answerIndex: 1,
              explanation:
                "Active loading at the source creates pressure that pushes sap toward the sink.",
            },
            {
              id: "bi-l10-q3",
              type: "mcq",
              prompt:
                "Guard cells close the stoma when they",
              choices: [
                "absorb water",
                "lose water and become flaccid",
                "photosynthesise",
                "divide",
              ],
              answerIndex: 1,
              explanation:
                "Turgor loss curves them together, closing the pore to reduce water loss.",
            },
            {
              id: "bi-l10-q4",
              type: "tf",
              prompt:
                "Xylem vessels are living cells with nuclei to control water flow.",
              answer: false,
              explanation:
                "Mature xylem elements are dead hollow tubes — flow is passive via transpiration pull.",
            },
            {
              id: "bi-l10-q5",
              type: "short",
              prompt:
                "State three adaptations of xerophytes that reduce water loss.",
              answer:
                "Thick waxy cuticle, rolled leaves/sunken stomata, reduced leaf area or hairs.",
              keywords: ["cuticle", "stomata", "rolled", "hair", "waxy"],
              explanation:
                "Cuticle thickness, sunken stomata, rolled leaves, hairs, small/spiny leaves, deep roots.",
            },
            {
              id: "bi-l10-q6",
              type: "short",
              prompt:
                "Describe how sucrose is loaded into phloem at the source.",
              answer:
                "Companion cells actively transport H⁺ out then co-transport sucrose in, raising phloem solute concentration so water follows by osmosis.",
              keywords: ["companion", "active", "osmosis", "sucrose", "load"],
              explanation:
                "Proton pumps + co-transport load sucrose → water influx → hydrostatic pressure drives flow.",
            },
          ],
        },
        {
          id: "bi-l24",
          title: "Xylem, phloem and plant hormones",
          level: "HL",
          questions: [
            {
              id: "bi-l24-q1",
              type: "mcq",
              prompt: "Water rises in xylem mainly because of",
              choices: [
                "active pumping",
                "transpiration pull aided by cohesion between water molecules",
                "osmosis in leaves",
                "gravity",
              ],
              answerIndex: 1,
              explanation:
                "Evaporation at leaves pulls the cohesive water column upward.",
            },
            {
              id: "bi-l24-q2",
              type: "mcq",
              prompt: "Translocation in phloem moves",
              choices: [
                "water up only",
                "sugars from source to sink",
                "minerals down only",
                "oxygen",
              ],
              answerIndex: 1,
              explanation:
                "Source (e.g. leaf) → sink (e.g. root, fruit) via pressure flow.",
            },
            {
              id: "bi-l24-q3",
              type: "tf",
              prompt:
                "Auxin promotes shoot elongation and maintains apical dominance.",
              answer: true,
              explanation:
                "Produced at the shoot tip; also drives phototropism.",
            },
            {
              id: "bi-l24-q4",
              type: "mcq",
              prompt:
                "Phloem loading at the source requires",
              choices: [
                "no energy",
                "ATP (active transport of sucrose)",
                "sunlight directly",
                "xylem",
              ],
              answerIndex: 1,
              explanation:
                "Active sucrose loading creates the osmotic pressure that drives mass flow.",
            },
            {
              id: "bi-l24-q5",
              type: "short",
              prompt:
                "Name the process whose evaporation creates the tension pulling water up xylem.",
              answer: "transpiration",
              keywords: ["transpir"],
              explanation:
                "Transpiration pull + cohesion–tension theory.",
            },
            {
              id: "bi-l24-q6",
              type: "short",
              prompt:
                "Phloem transports sugars from ___ to ___. (two words)",
              answer: "source to sink",
              keywords: ["source", "sink"],
              acceptable: ["source sink", "source to sink"],
              explanation:
                "e.g. leaf → growing fruit.",
            },
          ],
        },
        {
          id: "bi-l25",
          title: "Plant reproduction and water uptake",
          level: "HL",
          questions: [
            {
              id: "bi-l25-q1",
              type: "mcq",
              prompt: "Pollination is the transfer of pollen to",
              choices: [
                "the ovule",
                "the stigma",
                "the anther",
                "the petals",
              ],
              answerIndex: 1,
              explanation:
                "Pollen lands on the stigma, then grows a tube to the ovule.",
            },
            {
              id: "bi-l25-q2",
              type: "mcq",
              prompt: "Double fertilisation in flowering plants produces",
              choices: [
                "two embryos",
                "an embryo and the endosperm",
                "two seeds",
                "twins",
              ],
              answerIndex: 1,
              explanation:
                "One sperm → zygote; second sperm → triploid endosperm (food store).",
            },
            {
              id: "bi-l25-q3",
              type: "tf",
              prompt:
                "Root hair cells increase the surface area available for water and mineral uptake.",
              answer: true,
              explanation:
                "Extensions of epidermal cells massively multiply absorptive area.",
            },
            {
              id: "bi-l25-q4",
              type: "mcq",
              prompt:
                "The Casparian strip in the endodermis forces water to",
              choices: [
                "bypass cells",
                "pass through cell cytoplasm (the symplastic route)",
                "evaporate",
                "flow backwards",
              ],
              answerIndex: 1,
              explanation:
                "The waterproof band blocks the apoplast route — selective control of mineral entry.",
            },
            {
              id: "bi-l25-q5",
              type: "short",
              prompt:
                "Besides the embryo, what nutritive tissue is produced by double fertilisation?",
              answer: "endosperm",
              keywords: ["endosperm"],
              explanation:
                "Triploid endosperm nourishes the embryo in the seed.",
            },
            {
              id: "bi-l25-q6",
              type: "short",
              prompt:
                "Which plant hormone promotes seed germination and stem elongation?",
              answer: "gibberellin",
              keywords: ["gibberellin", "gibberel"],
              acceptable: ["GA", "gibberellic acid"],
              explanation:
                "Gibberellins trigger germination and stem growth.",
            },
          ],
        },
        {
          id: "bi-l26",
          title: "Classification and biodiversity in practice",
          questions: [
            {
              id: "bi-l26-q1",
              type: "mcq",
              prompt: "The binomial name consists of",
              choices: [
                "family + species",
                "genus + species",
                "kingdom + species",
                "two species names",
              ],
              answerIndex: 1,
              explanation:
                "e.g. Homo sapiens — genus capitalised, species lowercase, italicised.",
            },
            {
              id: "bi-l26-q2",
              type: "mcq",
              prompt: "Nodes on a cladogram represent",
              choices: [
                "living species",
                "shared common ancestors",
                "extinct families only",
                "mutations",
              ],
              answerIndex: 1,
              explanation:
                "Each split = a common ancestor from which lineages diverged.",
            },
            {
              id: "bi-l26-q3",
              type: "tf",
              prompt:
                "DNA and protein sequence data often revise classifications based on morphology alone.",
              answer: true,
              explanation:
                "Molecular phylogenetics reveals true relatedness hidden by convergent features.",
            },
            {
              id: "bi-l26-q4",
              type: "mcq",
              prompt:
                "A biodiversity index like Simpson's reciprocal measures",
              choices: [
                "only species count",
                "richness AND evenness of species",
                "habitat area",
                "population age",
              ],
              answerIndex: 1,
              explanation:
                "Both how many species and how evenly individuals are spread among them.",
            },
            {
              id: "bi-l26-q5",
              type: "short",
              prompt:
                "In binomial nomenclature, which of the two names is capitalised? (one word)",
              answer: "genus",
              keywords: ["genus"],
              acceptable: ["the genus", "first"],
              explanation:
                "Genus is capitalised; the species epithet stays lowercase.",
            },
            {
              id: "bi-l26-q6",
              type: "short",
              prompt:
                "Which is the MOST specific (smallest) taxonomic rank in the hierarchy? (one word)",
              answer: "species",
              keywords: ["species"],
              explanation:
                "Kingdom → phylum → class → order → family → genus → species.",
            },
          ],
        },
      ],
    },
  ],
};
