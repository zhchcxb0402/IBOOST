import type { StudyNotes } from "../types";

export const chemistryStudy: StudyNotes = {
  "ch-l1": [
    {
      type: "text",
      body: "Atoms are made of protons and neutrons in a tiny nucleus surrounded by electrons. The **mole** is chemistry's counting unit: 6.02 × 10²³ particles (Avogadro's number), chosen so one mole of any substance has a mass in grams equal to its relative atomic mass.",
    },
    {
      type: "definition",
      term: "Isotopes",
      body: "Atoms of the same element with the same number of protons but different numbers of neutrons — same chemistry, different mass.",
    },
    {
      type: "definition",
      term: "Molar mass",
      body: "The mass of one mole of a substance in g mol⁻¹, numerically equal to its relative formula mass.",
    },
    {
      type: "formula",
      label: "Mole triangle",
      body: "n = m / M;  N = n × 6.02 × 10²³",
    },
    {
      type: "text",
      body: "Relative atomic mass (Ar) is the weighted mean of the isotope masses — that's why chlorine is 35.5 (roughly 75% ³⁵Cl, 25% ³⁷Cl).",
    },
    {
      type: "example",
      title: "Moles from mass",
      steps: [
        "How many moles in 8.0 g of methane, CH₄?",
        "M(CH₄) = 12.0 + 4 × 1.0 = 16.0 g mol⁻¹",
        "n = 8.0 / 16.0 = **0.50 mol**",
      ],
    },
    {
      type: "tip",
      body: "Check significant figures on every mole answer — IB markschemes typically award SF errors only once per paper, but it's an avoidable loss.",
    },
  ],
  "ch-l2": [
    {
      type: "text",
      body: "Stoichiometry uses the mole ratios in a balanced equation to convert between quantities of reactants and products. For gases, the same temperature and pressure means equal moles occupy equal volumes — at STP one mole occupies 22.7 dm³ (IB convention).",
    },
    {
      type: "definition",
      term: "Avogadro's law",
      body: "Equal volumes of gases at the same temperature and pressure contain equal numbers of molecules — so gas volumes react in simple whole-number ratios.",
    },
    {
      type: "formula",
      label: "Gas moles",
      body: "n = V / 22.7 dm³ at STP;  pV = nRT otherwise",
    },
    {
      type: "text",
      body: "Method: write the balanced equation → convert the given quantity to moles → apply the mole ratio → convert back to the required unit. Concentration problems add c = n/V (V in dm³!).",
    },
    {
      type: "example",
      title: "Mass from a gas volume",
      steps: [
        "What mass of CaCO₃ produces 4.54 dm³ of CO₂ at STP? CaCO₃ → CaO + CO₂",
        "n(CO₂) = 4.54 / 22.7 = 0.20 mol",
        "Ratio 1:1 → n(CaCO₃) = 0.20 mol; M = 100.1",
        "m = 0.20 × 100.1 = **20.0 g**",
      ],
    },
    {
      type: "tip",
      body: "Always convert cm³ to dm³ (÷1000) in concentration and gas questions — unit slips here are the most common lost mark in Topic 1.",
    },
  ],
  "ch-l11": [
    {
      type: "text",
      body: "When reactants aren't in exact stoichiometric ratio, one runs out first — the **limiting reagent** — and it alone determines how much product can form. Theoretical yield comes from the limiting reagent; percentage yield compares what you actually got.",
    },
    {
      type: "definition",
      term: "Limiting reagent",
      body: "The reactant that is completely consumed first, fixing the maximum amount of product. The others are in excess.",
    },
    {
      type: "formula",
      label: "Yield",
      body: "percentage yield = (actual yield / theoretical yield) × 100%",
    },
    {
      type: "text",
      body: "To find the limiting reagent: convert each reactant to moles, then divide each by its coefficient — the smallest quotient limits. Don't just compare mole numbers; the ratio matters.",
    },
    {
      type: "example",
      title: "Limiting reagent and yield",
      steps: [
        "2H₂ + O₂ → 2H₂O. 6 mol H₂ with 4 mol O₂; actual yield of water = 90 g. Find limiting reagent and % yield.",
        "H₂: 6/2 = 3; O₂: 4/1 = 4 → H₂ limits",
        "n(H₂O) = 6 mol → theoretical m = 6 × 18.0 = 108 g",
        "% yield = 90/108 × 100 = **83%** (limiting reagent H₂)",
      ],
    },
    {
      type: "tip",
      body: "Yields under 100% are usually due to incomplete reactions, side reactions or product lost in transfer — not 'measurement error'; say a mechanism in your answer.",
    },
  ],
  "ch-l12": [
    {
      type: "text",
      body: "The **empirical formula** is the simplest whole-number ratio of atoms; the **molecular formula** is the true number of atoms per molecule — an integer multiple of the empirical formula. Find it by turning percentage composition into moles.",
    },
    {
      type: "definition",
      term: "Empirical formula",
      body: "The simplest whole-number ratio of the atoms of each element in a compound — e.g. CH₂O for glucose (molecular formula C₆H₁₂O₆).",
    },
    {
      type: "formula",
      label: "Method",
      body: "% composition ÷ Ar → moles → ÷ smallest → whole-number ratio",
    },
    {
      type: "text",
      body: "To get the molecular formula you also need the molar mass: n = M(molecular) / M(empirical), then multiply all subscripts by n.",
    },
    {
      type: "example",
      title: "From % to formula",
      steps: [
        "A compound is 85.7% C, 14.3% H; M ≈ 42. Find the molecular formula.",
        "C: 85.7/12.0 = 7.14; H: 14.3/1.0 = 14.3 → ratio 1:2 → empirical CH₂",
        "Empirical mass = 14; n = 42/14 = 3",
        "Molecular formula = **C₃H₆**",
      ],
    },
    {
      type: "tip",
      body: "If a ratio comes out near x.5 or x.33, multiply ALL ratios by 2 or 3 — never round 1.33 to 1.5 or 1.",
    },
  ],
  "ch-l13": [
    {
      type: "text",
      body: "Mole calculations tie everything together: mass ↔ moles ↔ particles ↔ gas volume ↔ concentration. In exam conditions, write the balanced equation, convert everything to moles, use the ratio, convert out — and carry units at each step so mistakes show themselves.",
    },
    {
      type: "formula",
      label: "All the conversions",
      body: "n = m/M;  n = cV (V in dm³);  n = Vgas/22.7 (STP);  N = nNₐ",
    },
    {
      type: "text",
      body: "Titration calculations are stoichiometry with solutions: find moles of titrant from cV, scale by the ratio, then get the unknown concentration. A 'back titration' subtracts leftover reactant.",
    },
    {
      type: "example",
      title: "Titration",
      steps: [
        "25.0 cm³ of NaOH is neutralised by 22.0 cm³ of 0.100 mol dm⁻³ HCl. Find c(NaOH).",
        "n(HCl) = 0.100 × 0.0220 = 2.20 × 10⁻³ mol; ratio 1:1",
        "c(NaOH) = 2.20 × 10⁻³ / 0.0250 = **0.088 mol dm⁻³**",
      ],
    },
    {
      type: "example",
      title: "Mass of precipitate",
      steps: [
        "Excess BaCl₂ is added to 0.050 mol of sulfate ions. Mass of BaSO₄ (M = 233.4)?",
        "n(BaSO₄) = 0.050 mol (1:1)",
        "m = 0.050 × 233.4 = **11.7 g**",
      ],
    },
    {
      type: "tip",
      body: "Underline what the question actually asks for — mass, volume or concentration — before you start; perfectly correct arithmetic for the wrong quantity scores zero.",
    },
  ],
  "ch-l3": [
    {
      type: "text",
      body: "Three bonding models explain bulk properties. **Ionic** compounds form between metals and non-metals — high melting, conduct when molten/aqueous, brittle. **Covalent** molecular substances have strong intramolecular bonds but weak intermolecular forces — low melting, non-conductors. **Metallic** bonding gives mobile electrons — conduct and are malleable.",
    },
    {
      type: "definition",
      term: "Ionic bond",
      body: "The electrostatic attraction between oppositely charged ions, formed by complete transfer of electrons from metal to non-metal.",
    },
    {
      type: "definition",
      term: "Giant covalent structure",
      body: "A lattice of atoms linked by covalent bonds throughout — diamond, graphite, SiO₂. Very high melting points; graphite conducts along its layers.",
    },
    {
      type: "list",
      title: "Property → structure",
      items: [
        "Conducts when molten only → ionic",
        "Conducts as solid → metal or graphite",
        "Low m.p., never conducts → simple molecular",
        "Very high m.p., hard → giant covalent or ionic",
      ],
    },
    {
      type: "example",
      title: "Identifying a bonding type",
      steps: [
        "Substance X melts at 800 °C, conducts when molten but not solid. Bonding?",
        "High m.p. rules out simple molecular; conduction only when molten means mobile ions, not electrons",
        "→ **ionic lattice**",
      ],
    },
    {
      type: "tip",
      body: "'Why does it conduct?' answers must name the mobile charge carrier — delocalised electrons (metals/graphite) vs mobile ions (molten ionic). 'It contains ions' scores nothing without mobility.",
    },
  ],
  "ch-l4": [
    {
      type: "text",
      body: "Hybridisation describes mixing of atomic orbitals to form bonding orbitals: sp³ (4 electron domains, tetrahedral, e.g. CH₄), sp² (3 domains, trigonal planar, e.g. C in C=C), sp (2 domains, linear, e.g. CO₂). Periodicity: properties repeat because electron configurations repeat across periods.",
    },
    {
      type: "definition",
      term: "Sigma and pi bonds",
      body: "σ bonds form by head-on overlap of orbitals (single bonds); π bonds by sideways overlap of p orbitals — a double bond = 1σ + 1π; triple = 1σ + 2π.",
    },
    {
      type: "text",
      body: "Across a period: atomic radius falls (same shell, more protons), ionisation energy rises, oxides go from basic to acidic. Down a group: radius rises, reactivity increases down Group 1 but decreases down Group 17.",
    },
    {
      type: "example",
      title: "Counting σ and π",
      steps: [
        "How many σ and π bonds in ethene, C₂H₄?",
        "4 C–H single bonds = 4σ; C=C = 1σ + 1π",
        "Total: **5σ + 1π**",
      ],
    },
    {
      type: "tip",
      body: "Hybridisation is found by counting electron domains around the atom — 4 → sp³, 3 → sp², 2 → sp — regardless of whether domains are bonds or lone pairs.",
    },
  ],
  "ch-l14": [
    {
      type: "text",
      body: "VSEPR (valence shell electron pair repulsion): electron domains arrange themselves as far apart as possible, and the **molecular** shape names only the atom positions — lone pairs distort angles but aren't drawn. Bond angle order: lone pair repels more than bonding pair (LP–LP > LP–BP > BP–BP).",
    },
    {
      type: "definition",
      term: "Polarity",
      body: "A bond is polar if the atoms differ in electronegativity; a molecule is polar if its bond dipoles don't cancel by symmetry — e.g. H₂O (bent) polar, CO₂ (linear) non-polar.",
    },
    {
      type: "list",
      title: "Domains → shape → angle",
      items: [
        "4 BP → tetrahedral 109.5° (CH₄)",
        "3 BP + 1 LP → trigonal pyramidal 107° (NH₃)",
        "2 BP + 2 LP → bent 104.5° (H₂O)",
        "3 BP → trigonal planar 120° (BF₃)",
        "2 BP → linear 180° (CO₂)",
      ],
    },
    {
      type: "example",
      title: "Shape of NH₃",
      steps: [
        "N has 5 valence e⁻ + 3 bonds → 3 bonding pairs + 1 lone pair",
        "Electron geometry tetrahedral; molecular shape = **trigonal pyramidal, ~107°**",
      ],
    },
    {
      type: "tip",
      body: "Each extra lone pair trims ~2.5° off the ideal angle — quote 109.5°, 107°, 104.5° for CH₄/NH₃/H₂O and justify via lone-pair repulsion.",
    },
  ],
  "ch-l15": [
    {
      type: "text",
      body: "Between molecules, three intermolecular forces (IMFs) matter: **London dispersion** (every molecule, stronger with more electrons), **dipole–dipole** (polar molecules) and **hydrogen bonding** (H bonded to N, O or F — by far the strongest). IMFs, not covalent bonds, determine boiling points of molecular substances.",
    },
    {
      type: "definition",
      term: "Hydrogen bond",
      body: "A strong dipole–dipole attraction between a hydrogen covalently bonded to N, O or F and a lone pair on another N, O or F — responsible for water's anomalously high boiling point.",
    },
    {
      type: "text",
      body: "Trend logic: compare like with like. Bigger molecule → more electrons → stronger London forces → higher b.p. (halogens, alkanes). Polar molecule → dipole forces → higher b.p. H-bonding (HF, H₂O, NH₃, alcohols, carboxylic acids) → dramatically higher b.p.",
    },
    {
      type: "example",
      title: "Why ethanol beats propane",
      steps: [
        "Ethanol (46) and propane (44) have similar molar mass — why is ethanol's b.p. (78 °C) far higher than propane's (−42 °C)?",
        "Both have similar London forces; propane is only weakly polar",
        "Ethanol's –OH forms **hydrogen bonds** → much more energy needed to separate molecules",
      ],
    },
    {
      type: "tip",
      body: "Never write 'hydrogen bonds are broken when water boils' as covalent bonds — H-bonds are between molecules; the O–H covalent bonds stay intact.",
    },
  ],
  "ch-l16": [
    {
      type: "text",
      body: "Periodic trends follow electron structure. **Atomic radius** falls across a period and rises down a group. **First ionisation energy** rises across a period (jumps between shells/groups reveal sub-shell structure) and falls down a group. **Electronegativity** peaks at fluorine.",
    },
    {
      type: "definition",
      term: "First ionisation energy",
      body: "The energy required to remove one mole of electrons from one mole of gaseous atoms: X(g) → X⁺(g) + e⁻.",
    },
    {
      type: "text",
      body: "Explaining trends earns marks — always cite: nuclear charge, shielding, and distance of the outer electron. 'Zeff rises across a period' means the same shell feels more pull → smaller radius, higher IE.",
    },
    {
      type: "list",
      title: "Quick trend table",
      items: [
        "Across period: radius ↓, IE ↑, electronegativity ↑",
        "Down group: radius ↑, IE ↓, metallic character ↑",
        "Big IE jump after n electrons → element in Group n",
      ],
    },
    {
      type: "example",
      title: "Identifying a group from IE data",
      steps: [
        "IEs (kJ mol⁻¹): 740, 1500, 7700, 10 500. Which group?",
        "Huge jump after the 2nd electron → 2 outer electrons",
        "→ **Group 2**",
      ],
    },
    {
      type: "tip",
      body: "A large jump in successive ionisation energies marks crossing from valence shell into an inner shell — count electrons before the jump to find the group number.",
    },
  ],
  "ch-l5": [
    {
      type: "text",
      body: "Enthalpy change ΔH is heat exchanged at constant pressure: negative = exothermic (products more stable), positive = endothermic. **Hess's law**: total enthalpy change is route-independent — it depends only on start and end states, so you can compute ΔH for any reaction via a convenient path.",
    },
    {
      type: "definition",
      term: "Standard enthalpy of formation",
      body: "ΔHf°, the enthalpy change when one mole of a compound forms from its elements in their standard states under standard conditions (298 K, 100 kPa). Elements in standard state: ΔHf° = 0.",
    },
    {
      type: "formula",
      label: "Hess routes",
      body: "ΔH = ΣΔHf°(products) − ΣΔHf°(reactants);  ΔH = ΣΔHc°(reactants) − ΣΔHc°(products)",
    },
    {
      type: "text",
      body: "Note the direction: combustion data gives reactants → products via the elements, so the sum is reactants minus products — the reverse of the formation formula. Sketch the cycle if unsure.",
    },
    {
      type: "example",
      title: "ΔH from formation data",
      steps: [
        "CH₄ + 2O₂ → CO₂ + 2H₂O. ΔHf°: CH₄ −75, CO₂ −394, H₂O −286 (kJ mol⁻¹).",
        "Products: −394 + 2(−286) = −966; reactants: −75 + 0 = −75",
        "ΔH = −966 − (−75) = **−891 kJ mol⁻¹**",
      ],
    },
    {
      type: "tip",
      body: "Draw the Hess triangle every time — most errors come from reversing which sum goes first, especially with combustion data.",
    },
  ],
  "ch-l6": [
    {
      type: "text",
      body: "Entropy S measures dispersal of energy/matter: gases ≫ liquids > solids; more moles of gas → higher S. Gibbs free energy ΔG = ΔH − TΔS decides feasibility: ΔG < 0 spontaneous. The sign chart of ΔH/ΔS predicts temperature dependence.",
    },
    {
      type: "definition",
      term: "Entropy",
      body: "A measure of the number of ways energy and particles can be distributed — disorder, loosely. ΔS = ΣS(products) − ΣS(reactants), in J K⁻¹ mol⁻¹.",
    },
    {
      type: "formula",
      label: "Gibbs free energy",
      body: "ΔG = ΔH − TΔS  (ΔH in kJ, ΔS in J → convert ΔS ÷ 1000);  ΔG < 0 spontaneous",
    },
    {
      type: "text",
      body: "Sign combinations: ΔH<0, ΔS>0 → always spontaneous; ΔH>0, ΔS<0 → never; ΔH<0, ΔS<0 → spontaneous at low T; ΔH>0, ΔS>0 → spontaneous at high T. Crossover at T = ΔH/ΔS.",
    },
    {
      type: "example",
      title: "Finding the crossover temperature",
      steps: [
        "For a reaction ΔH = +178 kJ mol⁻¹, ΔS = +160 J K⁻¹ mol⁻¹. Above what T is it spontaneous?",
        "ΔG < 0 when T > ΔH/ΔS = 178 000 / 160",
        "T > 1113 K → **spontaneous above ~1113 K**",
      ],
    },
    {
      type: "tip",
      body: "Unit trap: ΔS is in J K⁻¹ mol⁻¹ but ΔH in kJ mol⁻¹ — convert ΔS ÷1000 or ΔH ×1000 before computing ΔG.",
    },
  ],
  "ch-l17": [
    {
      type: "text",
      body: "Two everyday ΔH techniques: calorimetry measures heat with **q = mcΔT** (usually assuming solution behaves like water: c = 4.18 J g⁻¹ K⁻¹); bond-enthalpy estimates use ΔH = energy to break bonds − energy released forming them.",
    },
    {
      type: "definition",
      term: "Enthalpy of neutralisation / combustion",
      body: "Neutralisation: ΔH when one mole of water forms from H⁺ + OH⁻ (≈ −57 kJ mol⁻¹). Combustion: ΔH when one mole burns completely in excess oxygen.",
    },
    {
      type: "formula",
      label: "Two workhorses",
      body: "q = mcΔT;  ΔH = Σ(bonds broken) − Σ(bonds formed)",
    },
    {
      type: "text",
      body: "Bond enthalpy estimates are only approximate because values are averages over many molecules — real ΔHc differs from the estimate. Breaking bonds is endothermic (+), forming exothermic (−).",
    },
    {
      type: "example",
      title: "Bond enthalpy estimate",
      steps: [
        "H₂ + Cl₂ → 2HCl. Bond enthalpies: H–H 436, Cl–Cl 242, H–Cl 431 kJ mol⁻¹.",
        "Broken: 436 + 242 = 678; formed: 2 × 431 = 862",
        "ΔH = 678 − 862 = **−184 kJ mol⁻¹**",
      ],
    },
    {
      type: "example",
      title: "Calorimetry",
      steps: [
        "Burning 0.50 g ethanol raises 100 g water by 12.0 °C. Molar ΔHc (M = 46.1)?",
        "q = 100 × 4.18 × 12.0 = 5016 J per 0.50 g → per mole: 5016 × 46.1/0.50",
        "ΔHc ≈ **−4.6 × 10⁵ J mol⁻¹ = −460 kJ mol⁻¹** (experimental; heat losses make it low vs −1367 true)",
      ],
    },
    {
      type: "tip",
      body: "Calorimetry answers must cite the main error — heat lost to surroundings — and a fix (lid, insulation, bomb calorimeter).",
    },
  ],
  "ch-l18": [
    {
      type: "text",
      body: "Hess's law turns impossible measurements into arithmetic: enthalpies of formation, combustion, hydration, or atomisation can all complete a cycle. The skill is choosing the right route — always check which direction each given ΔH points.",
    },
    {
      type: "definition",
      term: "Enthalpy of atomisation",
      body: "ΔH when one mole of gaseous atoms forms from the element in its standard state, e.g. ½Cl₂(g) → Cl(g). Needed for Born–Haber and mean bond enthalpy work.",
    },
    {
      type: "text",
      body: "Standard pattern for 'find ΔH of reaction from ΔHf data': ΔH = ΣΔHf(products) − ΣΔHf(reactants). For ΔHc data the arrows reverse: ΔH = ΣΔHc(reactants) − ΣΔHc(products).",
    },
    {
      type: "example",
      title: "ΔHc route",
      steps: [
        "Find ΔH for C + H₂O → CO + H₂ given ΔHc: C −394, H₂ −286, CO −283 kJ mol⁻¹ (H₂O has no ΔHc — it doesn't burn).",
        "ΔH = ΣΔHc(reactants) − ΣΔHc(products) = ΔHc(C) − [ΔHc(CO) + ΔHc(H₂)]",
        "= −394 − (−283 − 286) = **+175 kJ mol⁻¹**",
      ],
    },
    {
      type: "tip",
      body: "Combustion data applies only to species that actually burn — H₂O and CO₂ contribute zero. Identify which ΔHc values apply before summing.",
    },
  ],
  "ch-l19": [
    {
      type: "text",
      body: "Born–Haber cycles apply Hess's law to ionic compound formation: the lattice enthalpy is found from a path through atomisation, ionisation, electron affinity and formation. **Lattice enthalpy** is the energy released when gaseous ions form one mole of solid lattice (large negative = strong lattice).",
    },
    {
      type: "definition",
      term: "Lattice enthalpy",
      body: "The enthalpy change when one mole of a solid ionic compound forms from its gaseous ions. Larger for smaller, more highly charged ions — MgO ≫ NaCl.",
    },
    {
      type: "list",
      title: "Born–Haber steps (for NaCl)",
      items: [
        "Atomise Na: Na(s) → Na(g)  (+108)",
        "Atomise ½Cl₂ → Cl(g)  (+121)",
        "Ionise Na: Na(g) → Na⁺(g)  (+496)",
        "Electron affinity: Cl(g) + e⁻ → Cl⁻(g)  (−349)",
        "Lattice: Na⁺(g) + Cl⁻(g) → NaCl(s)  (ΔHlatt, negative)",
        "Sum of steps + lattice = ΔHf (−411)",
      ],
    },
    {
      type: "text",
      body: "Comparing experimental (Born–Haber) and theoretical lattice enthalpies detects covalent character — big disagreement means the ionic model fails (e.g. AgCl is partially covalent).",
    },
    {
      type: "example",
      title: "Solving for lattice enthalpy",
      steps: [
        "NaCl: ΔHf = −411; atomisation Na +108, Cl +121; IE +496; EA −349 (kJ mol⁻¹).",
        "ΔHf = 108 + 121 + 496 − 349 + ΔHlatt = 376 + ΔHlatt",
        "ΔHlatt = −411 − 376 = **−787 kJ mol⁻¹**",
      ],
    },
    {
      type: "tip",
      body: "Every Born–Haber arrow has a direction — ionisation and atomisation go UP (endothermic), electron affinity and lattice formation go DOWN. Drawing the cycle is worth a mark by itself.",
    },
  ],
  "ch-l7": [
    {
      type: "text",
      body: "Rate of reaction = change in concentration per unit time. **Collision theory**: reactions need collisions with sufficient energy (≥ Ea) and correct orientation. **Dynamic equilibrium** is reached in a closed system when forward and reverse rates are equal — concentrations stay constant but reactions continue.",
    },
    {
      type: "definition",
      term: "Activation energy",
      body: "Ea, the minimum energy colliding particles must possess to react. A catalyst provides an alternative pathway with lower Ea — more collisions succeed at the same temperature.",
    },
    {
      type: "list",
      title: "Rate factors (say HOW each works)",
      items: [
        "Temperature: faster particles + far more have E ≥ Ea",
        "Concentration/pressure: more frequent collisions",
        "Surface area: more exposed particles collide",
        "Catalyst: alternative pathway, lower Ea (not 'more collisions')",
      ],
    },
    {
      type: "text",
      body: "On a Maxwell–Boltzmann curve, raising temperature flattens and shifts the curve right; the area beyond Ea grows. A catalyst moves the Ea line left instead.",
    },
    {
      type: "example",
      title: "Reading a rate graph",
      steps: [
        "0.5 g CaCO₃ produces 40 cm³ CO₂ in 100 s. Mean rate?",
        "rate = ΔV/Δt = 40/100",
        "= **0.4 cm³ s⁻¹**",
      ],
    },
    {
      type: "tip",
      body: "'Explain how temperature increases rate' needs BOTH points: more frequent collisions AND a greater proportion exceeding Ea — the second is worth more.",
    },
  ],
  "ch-l8": [
    {
      type: "text",
      body: "Rate equations come only from experiment: rate = k[A]^m[B]^n, where orders m, n are found by comparing experiments. The **overall order** is m + n and fixes the units of k. The **Arrhenius equation** links k to temperature: k = Ae^(−Ea/RT) — a plot of ln k vs 1/T has gradient −Ea/R.",
    },
    {
      type: "definition",
      term: "Rate-determining step",
      body: "The slowest step of a mechanism; only species in (or before) this step appear in the rate equation — matching mechanism to rate law is a key HL skill.",
    },
    {
      type: "formula",
      label: "Rate law + Arrhenius",
      body: "rate = k[A]^m[B]^n;  k = Ae^(−Ea/RT);  ln k = ln A − Ea/RT",
    },
    {
      type: "example",
      title: "Finding order",
      steps: [
        "Doubling [A] (B constant) quadruples the rate; doubling [B] leaves rate unchanged. Rate law?",
        "2^m = 4 → m = 2; 2^n = 1 → n = 0",
        "rate = **k[A]²**",
      ],
    },
    {
      type: "tip",
      body: "To get k's units, rearrange k = rate/[A]^m[B]^n — for a second-order reaction the units are dm³ mol⁻¹ s⁻¹.",
    },
  ],
  "ch-l20": [
    {
      type: "text",
      body: "Rate graphs: concentration–time curves have a decreasing gradient (rate falls as reactants deplete); rate–concentration graphs reveal order directly — straight line through origin = first order, parabola = second, horizontal = zero order.",
    },
    {
      type: "definition",
      term: "Half-life of a reaction",
      body: "Time for a reactant's concentration to halve. **Constant** half-life (each successive t½ equal) is the signature of first-order kinetics.",
    },
    {
      type: "text",
      body: "Collision theory quantified: rate ∝ collision frequency × fraction with E ≥ Ea × orientation factor. A 10 K rise roughly doubles rate because the Boltzmann tail beyond Ea grows disproportionately.",
    },
    {
      type: "example",
      title: "First-order from half-life",
      steps: [
        "A reaction has successive half-lives 100 s, 100 s, 100 s. Order and rate constant?",
        "Constant t½ → first order",
        "k = ln2/t½ = 0.693/100 = **6.93 × 10⁻³ s⁻¹**",
      ],
    },
    {
      type: "tip",
      body: "In method-of-initial-rates tables, pick two experiments where only ONE concentration changes — isolate each order before combining.",
    },
  ],
  "ch-l21": [
    {
      type: "text",
      body: "For aA + bB ⇌ cC + dD, the equilibrium constant Kc = [C]^c[D]^d / [A]^a[B]^b. Kc is constant at a given temperature; only temperature changes its value. **Le Châtelier's principle**: a system at equilibrium opposes any imposed change.",
    },
    {
      type: "definition",
      term: "Reaction quotient Q vs Kc",
      body: "Q has the same expression as Kc but at non-equilibrium concentrations. Q < Kc → forward reaction favoured; Q > Kc → reverse; Q = Kc → equilibrium.",
    },
    {
      type: "formula",
      label: "Equilibrium law",
      body: "Kc = [products]^coeff / [reactants]^coeff;  solids and pure liquids omitted",
    },
    {
      type: "list",
      title: "Le Châtelier quick reference",
      items: [
        "Add reactant → shifts right (removes it)",
        "Increase pressure → shifts to fewer gas moles",
        "Increase T → shifts endothermic direction; Kc changes value",
        "Catalyst → faster attainment, NO shift, Kc unchanged",
      ],
    },
    {
      type: "example",
      title: "Writing Kc",
      steps: [
        "Write Kc for N₂ + 3H₂ ⇌ 2NH₃.",
        "Products over reactants, powers = coefficients",
        "Kc = **[NH₃]² / ([N₂][H₂]³)**",
      ],
    },
    {
      type: "tip",
      body: "Only temperature alters Kc — concentration, pressure and catalysts change the position or the rate, never the constant. If your answer says 'Kc increases' after a concentration change, rethink.",
    },
  ],
  "ch-l22": [
    {
      type: "text",
      body: "Kc calculations use an ICE table (Initial, Change, Equilibrium). Convert everything to concentrations, express changes via stoichiometry (e.g. −x, +2x), then substitute equilibrium values into the Kc expression and solve.",
    },
    {
      type: "example",
      title: "Full ICE calculation",
      steps: [
        "H₂ + I₂ ⇌ 2HI. Initially 1.00 mol each of H₂ and I₂ in 2.0 dm³; at equilibrium 0.20 mol of each remains. Find Kc.",
        "Change: −0.80 mol each → n(HI) formed = 1.60 mol",
        "Concentrations (÷2.0): [H₂] = [I₂] = 0.10, [HI] = 0.80 mol dm⁻³",
        "Kc = 0.80² / (0.10 × 0.10) = 0.64/0.01 = **64**",
      ],
    },
    {
      type: "text",
      body: "If volume cancels (equal moles of gas each side, e.g. H₂ + I₂ ⇌ 2HI) you can use moles directly. Otherwise always convert to concentration first.",
    },
    {
      type: "example",
      title: "Solving with x",
      steps: [
        "PCl₅ ⇌ PCl₃ + Cl₂, Kc = 0.50 at this T. Start 0.20 M PCl₅: find x if small approx allowed... solve x²/(0.20−x) = 0.50.",
        "x² = 0.50(0.20 − x) → x² + 0.50x − 0.10 = 0",
        "x = (−0.50 + √(0.25 + 0.40))/2 = (−0.50 + 0.806)/2 = **0.153 M**",
      ],
    },
    {
      type: "tip",
      body: "Check the sign and magnitude sense: a large Kc means products dominate at equilibrium — if your computed equilibrium concentration exceeds the initial amount, something inverted.",
    },
  ],
  "ch-l9": [
    {
      type: "text",
      body: "Brønsted–Lowry: acids are proton **donors**, bases proton **acceptors** — the acid–base pair differ by H⁺. Redox is electron transfer: oxidation is loss of electrons (OIL), reduction is gain (RIG). Assign oxidation numbers to track what's oxidised/reduced in any reaction.",
    },
    {
      type: "definition",
      term: "Conjugate acid–base pair",
      body: "Two species differing by exactly one proton: HA (acid) ⇌ A⁻ (conjugate base) + H⁺.",
    },
    {
      type: "definition",
      term: "Oxidising and reducing agents",
      body: "Oxidising agent accepts electrons (is reduced itself); reducing agent donates electrons (is oxidised itself).",
    },
    {
      type: "list",
      title: "Oxidation-number rules",
      items: [
        "Element: 0; monatomic ion: its charge",
        "O usually −2 (peroxide −1); H usually +1 (hydride −1)",
        "Sum = overall charge",
      ],
    },
    {
      type: "example",
      title: "Spot the redox",
      steps: [
        "Zn + CuSO₄ → ZnSO₄ + Cu. What is oxidised/reduced?",
        "Zn: 0 → +2 (loses e⁻) = oxidised = reducing agent",
        "Cu²⁺: +2 → 0 (gains e⁻) = reduced = oxidising agent",
      ],
    },
    {
      type: "tip",
      body: "Half-equations balance redox: balance atoms first (O with H₂O, H with H⁺), then charge with electrons — electrons on the left = reduction.",
    },
  ],
  "ch-l10": [
    {
      type: "text",
      body: "Electrochemistry splits into **voltaic cells** (spontaneous redox → electricity; oxidation at the anode, reduction at the cathode) and **electrolytic cells** (electricity drives non-spontaneous redox). E°cell = E°cathode − E°anode; positive E°cell → spontaneous.",
    },
    {
      type: "definition",
      term: "pH and pOH",
      body: "pH = −log₁₀[H⁺]; pOH = −log₁₀[OH⁻]; at 298 K, pH + pOH = 14 via Kw = 1.0 × 10⁻¹⁴.",
    },
    {
      type: "formula",
      label: "Electrochem + pH",
      body: "E°cell = E°cathode − E°anode;  pH = −log[H⁺];  Kw = [H⁺][OH⁻]",
    },
    {
      type: "text",
      body: "pH curves: a strong acid–strong base titration has a sharp vertical jump near pH 7; weak acid–strong base equivalence sits above 7 (use phenolphthalein); strong acid–weak base below 7 (methyl orange).",
    },
    {
      type: "example",
      title: "Cell potential",
      steps: [
        "Zn²⁺/Zn = −0.76 V; Cu²⁺/Cu = +0.34 V. E°cell and which is anode?",
        "E°cell = 0.34 − (−0.76) = **+1.10 V**",
        "Zn is oxidised → anode (more negative E°)",
      ],
    },
    {
      type: "tip",
      body: "Mnemonic: 'OILRIG' plus 'an ox, red cat' — **an**ode = **ox**idation, **cat**hode = **red**uction — holds for both cell types.",
    },
  ],
  "ch-l23": [
    {
      type: "text",
      body: "Water self-ionises: Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 298 K. pH = −log[H⁺], so each pH unit is a 10× concentration change. Weak acids only partially dissociate — their pH needs Ka = [H⁺][A⁻]/[HA]; larger Ka (smaller pKa) = stronger weak acid.",
    },
    {
      type: "definition",
      term: "Weak vs strong acid",
      body: "Strong acids fully dissociate in water ([H⁺] = acid concentration); weak acids establish an equilibrium — strength is about dissociation, NOT concentration.",
    },
    {
      type: "formula",
      label: "pH toolkit",
      body: "pH = −log[H⁺];  pH + pOH = 14;  Ka = [H⁺][A⁻]/[HA];  pKa = −log Ka",
    },
    {
      type: "example",
      title: "pH of a strong acid and a weak acid",
      steps: [
        "0.01 M HCl: [H⁺] = 0.01 → pH = **2.0**",
        "0.10 M weak acid, Ka = 1.8 × 10⁻⁵: [H⁺] ≈ √(Ka·c) = √(1.8 × 10⁻⁶)",
        "[H⁺] = 1.34 × 10⁻³ → pH = **2.87**",
      ],
    },
    {
      type: "tip",
      body: "Distinguish 'strong' (fully dissociated) from 'concentrated' (many moles per litre) — markschemes routinely test this word pair.",
    },
  ],
  "ch-l24": [
    {
      type: "text",
      body: "Three applied electrochem/equilibria topics. **Buffers** resist pH change: a weak acid + its salt; added H⁺ is absorbed by A⁻, added OH⁻ by HA. **Electrolysis** forces non-spontaneous reactions; at the cathode the species easiest to reduce wins (in aqueous solution, often H₂ not the metal). **Redox titrations** (e.g. KMnO₄, self-indicating) quantify analytes.",
    },
    {
      type: "definition",
      term: "Buffer solution",
      body: "A solution that resists changes in pH on adding small amounts of acid or base — made from a weak acid and its conjugate base (or weak base + its salt).",
    },
    {
      type: "formula",
      label: "Buffer pH",
      body: "pH = pKa + log([A⁻]/[HA])  (Henderson–Hasselbalch)",
    },
    {
      type: "example",
      title: "Buffer calculation",
      steps: [
        "Buffer: 0.10 M ethanoic acid (pKa 4.76) + 0.10 M ethanoate. pH?",
        "ratio [A⁻]/[HA] = 1 → log 1 = 0",
        "pH = **4.76**",
      ],
    },
    {
      type: "example",
      title: "Electrolysis of brine",
      steps: [
        "Concentrated NaCl solution electrolysed: products at each electrode?",
        "Cathode: 2H₂O + 2e⁻ → H₂ + 2OH⁻ (water reduced, not Na⁺)",
        "Anode: 2Cl⁻ → Cl₂ + 2e⁻ (concentrated → Cl₂, not O₂)",
        "Products: **H₂, Cl₂, NaOH** — the chlor-alkali process",
      ],
    },
    {
      type: "tip",
      body: "In electrolysis questions, list ALL candidate species at each electrode, then pick by position in the reactivity/electrode-potential order — don't assume the obvious ion discharges.",
    },
  ],
  "ch-l25": [
    {
      type: "text",
      body: "Organic nomenclature: longest carbon chain → root (meth-, eth-, prop-…); functional group → suffix (-ol, -al, -oic acid); positions → lowest locants. Spectroscopy identifies structures: IR shows functional groups (O–H broad ~3200–3550, C=O sharp ~1700 cm⁻¹); ¹H NMR shows proton environments, splitting (n+1 rule) and integration.",
    },
    {
      type: "definition",
      term: "Homologous series and functional group",
      body: "A family differing by CH₂ with the same functional group and similar chemistry — the functional group is the reactive part that fixes the family's reactions.",
    },
    {
      type: "list",
      title: "Spectrum → structure",
      items: [
        "IR ~1700 sharp → C=O (carbonyl)",
        "IR ~3300 broad → O–H (alcohol/acid)",
        "MS m/z → molecular mass; fragments → pieces",
        "NMR # signals → # H environments; integration → H count; splitting n+1 → neighbours",
      ],
    },
    {
      type: "example",
      title: "Reading ¹H NMR",
      steps: [
        "Compound C₂H₆O, NMR: triplet (3H), quartet (2H), singlet (1H).",
        "3H triplet = CH₃ next to CH₂; 2H quartet = CH₂ next to CH₃; 1H singlet = OH",
        "Structure: **ethanol, CH₃CH₂OH**",
      ],
    },
    {
      type: "tip",
      body: "In IR spectra, look first at ~1700 (C=O) and ~3300 (O–H): presence/absence of these two peaks classifies most exam unknowns instantly.",
    },
  ],
  "ch-l26": [
    {
      type: "text",
      body: "Nucleophilic substitution replaces a leaving group on a carbon by a nucleophile (species with a lone pair attacking a δ⁺ carbon). Two mechanisms: **SN2** — one step, backside attack, rate = k[halogenoalkane][Nu], favoured by primary substrates; **SN1** — two steps via a carbocation, rate = k[halogenoalkane] only, favoured by tertiary substrates.",
    },
    {
      type: "definition",
      term: "Nucleophile",
      body: "An electron-rich species (lone pair or π bond) that attacks an electron-deficient carbon — e.g. OH⁻, CN⁻, NH₃, H₂O.",
    },
    {
      type: "list",
      title: "SN1 vs SN2",
      items: [
        "SN2: primary, one step, rate depends on both species, inversion of configuration",
        "SN1: tertiary (stable carbocation), two steps, rate independent of [Nu]",
        "Carbocation stability: 3° > 2° > 1°",
      ],
    },
    {
      type: "text",
      body: "Curly arrows in mechanisms go from electron-rich to electron-poor: lone pair → δ⁺ carbon for the attack; C–Br bonding pair → Br for departure.",
    },
    {
      type: "example",
      title: "Which mechanism?",
      steps: [
        "Rate doubles when [R–Br] doubles but is unchanged when [OH⁻] doubles. Mechanism and substrate?",
        "Rate = k[R–Br] → SN1",
        "→ **tertiary halogenoalkane** (stable carbocation intermediate)",
      ],
    },
    {
      type: "tip",
      body: "Rate data reveals mechanism: if rate depends on [Nu] it's SN2 (both species in the slow step); if not, SN1. State it in those terms.",
    },
  ],
};
