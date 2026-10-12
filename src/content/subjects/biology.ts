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
      url: "https://www.thinkib.net/biology",
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
      ],
    },
  ],
};
