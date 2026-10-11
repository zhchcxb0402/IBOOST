import type { Subject } from "../types";

export const geography: Subject = {
  slug: "geography",
  name: "Geography",
  short: "Geo",
  color: "#0284C7",
  emoji: "🗺️",
  group: "Individuals and societies",
  levels: ["SL", "HL"],
  description:
    "Changing populations, climate vulnerability, resource security, freshwater and urban environments — with the HL global interactions extension.",
  resources: [
    {
      name: "IB Official",
      url: "https://www.ibo.org/programmes/diploma-programme/curriculum/individuals-and-societies/",
      note: "Subject brief and syllabus outline",
    },
    {
      name: "InThinking",
      url: "https://www.thinkib.net/geography",
      note: "Teacher-written lessons and case-study ideas",
    },
    {
      name: "RevisionDojo",
      url: "https://www.revisiondojo.com/",
      note: "Topic questions with worked solutions",
    },
    {
      name: "Nail IB",
      url: "https://nailib.com/",
      note: "Past-paper practice and study guides",
    },
  ],
  units: [
    {
      id: "ge-u1",
      code: "Core",
      title: "Changing population",
      lessons: [
        {
          id: "ge-l1",
          title: "Population change and migration",
          questions: [
            {
              id: "ge-l1-q1",
              type: "mcq",
              prompt:
                "The demographic transition model describes countries moving from",
              choices: [
                "low to high birth rates",
                "high birth and death rates to low birth and death rates",
                "urban to rural populations",
                "young to rich instantly",
              ],
              answerIndex: 1,
              explanation:
                "DTM stages: high stationary → early expanding → late expanding → low stationary.",
            },
            {
              id: "ge-l1-q2",
              type: "mcq",
              prompt:
                "A population pyramid with a wide base and narrowing top indicates",
              choices: [
                "an ageing population",
                "high birth rates and rapid population growth",
                "population decline",
                "low fertility",
              ],
              answerIndex: 1,
              explanation:
                "Broad base = many young dependents — typical of low-income, high-growth countries.",
            },
            {
              id: "ge-l1-q3",
              type: "mcq",
              prompt:
                "The dependency ratio measures",
              choices: [
                "births per woman",
                "the proportion of non-working-age to working-age population",
                "migrant share",
                "urban density",
              ],
              answerIndex: 1,
              explanation:
                "(Youth + elderly dependents) ÷ working-age population × 100.",
            },
            {
              id: "ge-l1-q4",
              type: "tf",
              prompt:
                "Push factors of migration include poverty and conflict; pull factors include jobs and safety.",
              answer: true,
              explanation:
                "Push = repelling conditions at origin; pull = attracting conditions at destination.",
            },
            {
              id: "ge-l1-q5",
              type: "short",
              prompt:
                "Define 'megacity' and name one example.",
              answer:
                "A city with over 10 million inhabitants — e.g. Tokyo, Delhi, Lagos.",
              keywords: ["10", "million", "city"],
              explanation:
                "UN definition: urban agglomeration exceeding 10 million people.",
            },
            {
              id: "ge-l1-q6",
              type: "short",
              prompt:
                "Explain one consequence of an ageing population for an economy.",
              answer:
                "Higher dependency ratio → pressure on pensions and healthcare and a shrinking workforce.",
              keywords: ["pension", "health", "workforce", "dependency"],
              explanation:
                "Fewer workers support more retirees — fiscal and labour-market strain (e.g. Japan).",
            },
          ],
        },
        {
          id: "ge-l2",
          title: "Climate vulnerability and resilience",
          questions: [
            {
              id: "ge-l2-q1",
              type: "mcq",
              prompt:
                "Climate vulnerability is highest where",
              choices: [
                "wealth is greatest",
                "exposure and sensitivity are high and adaptive capacity is low",
                "population is smallest",
                "technology is advanced",
              ],
              answerIndex: 1,
              explanation:
                "Vulnerability = exposure + sensitivity − adaptive capacity (IPCC framing).",
            },
            {
              id: "ge-l2-q2",
              type: "mcq",
              prompt:
                "Small island developing states (SIDS) are especially threatened by",
              choices: [
                "snowfall",
                "sea-level rise and saltwater intrusion into freshwater lenses",
                "desertification only",
                "volcanoes",
              ],
              answerIndex: 1,
              explanation:
                "Low elevation → inundation, storm surge and freshwater contamination (e.g. Maldives, Tuvalu).",
            },
            {
              id: "ge-l2-q3",
              type: "mcq",
              prompt:
                "Climate resilience can be increased by",
              choices: [
                "removing all infrastructure",
                "early-warning systems, diversified livelihoods and adaptive infrastructure",
                "ignoring forecasts",
                "centralising all food supply",
              ],
              answerIndex: 1,
              explanation:
                "Reducing sensitivity and raising adaptive capacity builds resilience.",
            },
            {
              id: "ge-l2-q4",
              type: "tf",
              prompt:
                "Climate change affects all regions and social groups equally.",
              answer: false,
              explanation:
                "Impacts are uneven — poverty, geography and governance shape vulnerability.",
            },
            {
              id: "ge-l2-q5",
              type: "short",
              prompt:
                "Distinguish between climate mitigation and adaptation.",
              answer:
                "Mitigation reduces causes (emissions/sinks); adaptation adjusts to impacts (defences, drought crops).",
              keywords: ["mitigation", "adaptation", "emission", "impact"],
              explanation:
                "Mitigation = cause; adaptation = consequence management.",
            },
            {
              id: "ge-l2-q6",
              type: "short",
              prompt:
                "Give one example of a geopolitical consequence of climate change.",
              answer:
                "Resource conflicts, climate-driven migration, or disputes over Arctic routes/resources.",
              keywords: ["migrat", "conflict", "arctic", "resource"],
              explanation:
                "Climate stress can drive displacement and strategic competition.",
            },
          ],
        },
        {
          id: "ge-l3",
          title: "Resource consumption and security",
          questions: [
            {
              id: "ge-l3-q1",
              type: "mcq",
              prompt:
                "An ecological footprint measures",
              choices: [
                "shoe size impact",
                "the biologically productive area needed to supply resources and absorb waste",
                "carbon emissions only",
                "GDP",
              ],
              answerIndex: 1,
              explanation:
                "Hectares of land/water required to sustain a population's lifestyle.",
            },
            {
              id: "ge-l3-q2",
              type: "mcq",
              prompt:
                "Water, food and energy form a 'nexus' because",
              choices: [
                "they are unrelated",
                "each depends on and constrains the others — e.g. farming needs water and energy",
                "they are all free",
                "only governments use them",
              ],
              answerIndex: 1,
              explanation:
                "Actions in one sector ripple through the others — the water–energy–food security nexus.",
            },
            {
              id: "ge-l3-q3",
              type: "mcq",
              prompt:
                "The concept of 'virtual water' refers to",
              choices: [
                "bottled water",
                "water embedded in the production of traded goods",
                "desalinated water",
                "rainwater",
              ],
              answerIndex: 1,
              explanation:
                "e.g. ~15,000 litres of water embedded in 1 kg of beef — trade moves 'virtual' water.",
            },
            {
              id: "ge-l3-q4",
              type: "tf",
              prompt:
                "A country can have high ecological security while having a large ecological footprint.",
              answer: true,
              explanation:
                "Trade lets high-footprint countries secure resources abroad — footprint measures consumption, not vulnerability.",
            },
            {
              id: "ge-l3-q5",
              type: "short",
              prompt:
                "Define 'food security' using its four dimensions.",
              answer:
                "Reliable access to sufficient, safe, nutritious food — availability, access, utilisation, stability.",
              keywords: ["availab", "access", "utilis", "stab", "nutri"],
              explanation:
                "FAO's four pillars of food security.",
            },
            {
              id: "ge-l3-q6",
              type: "short",
              prompt:
                "Give two strategies a country might use to improve energy security.",
              answer:
                "Diversifying energy sources/suppliers and developing domestic renewables or storage.",
              keywords: ["divers", "renewab", "domestic", "storage", "suppl"],
              explanation:
                "Reduce import dependence and vulnerability to supply shocks.",
            },
          ],
        },
      ],
    },
    {
      id: "ge-u2",
      code: "Option A",
      title: "Freshwater: drainage basins",
      lessons: [
        {
          id: "ge-l4",
          title: "Drainage basins and flood risk",
          questions: [
            {
              id: "ge-l4-q1",
              type: "mcq",
              prompt:
                "A drainage basin is",
              choices: [
                "a lake",
                "the area of land drained by a river and its tributaries",
                "an ocean trench",
                "a water treatment plant",
              ],
              answerIndex: 1,
              explanation:
                "Bounded by a watershed (divide); an open system of inputs, flows, stores, outputs.",
            },
            {
              id: "ge-l4-q2",
              type: "mcq",
              prompt:
                "A flashy (steep, short lag-time) storm hydrograph is most likely where",
              choices: [
                "soils are permeable and forested",
                "the basin is urbanised with impermeable surfaces",
                "rain is gentle",
                "the channel is large",
              ],
              answerIndex: 1,
              explanation:
                "Concrete → rapid overland flow → steep rising limb and short lag time.",
            },
            {
              id: "ge-l4-q3",
              type: "mcq",
              prompt:
                "Hydroelectric power alters river systems by",
              choices: [
                "increasing flood peaks",
                "regulating discharge and trapping sediment behind dams",
                "removing watersheds",
                "warming water only",
              ],
              answerIndex: 1,
              explanation:
                "Dams smooth flow regimes and starve downstream reaches of sediment.",
            },
            {
              id: "ge-l4-q4",
              type: "tf",
              prompt:
                "Channel straightening and embankments can increase flood risk downstream.",
              answer: true,
              explanation:
                "Faster conveyance pushes the flood wave downstream faster — transferring risk.",
            },
            {
              id: "ge-l4-q5",
              type: "short",
              prompt:
                "Describe two factors that increase flood peak discharge in a drainage basin.",
              answer:
                "Intense rainfall and impermeable surfaces/saturated soil (also steep slopes, deforestation).",
              keywords: ["rain", "impermeab", "saturat", "steep", "deforest"],
              explanation:
                "Physical and human factors combine — land use is a key amplifier.",
            },
            {
              id: "ge-l4-q6",
              type: "short",
              prompt:
                "Explain one benefit of restoring floodplains or wetlands for flood management.",
              answer:
                "They store and slow floodwater naturally, reducing downstream peaks.",
              keywords: ["store", "slow", "natural", "peak", "absorb"],
              explanation:
                "Natural flood management — attenuation rather than hard conveyance.",
            },
          ],
        },
      ],
    },
    {
      id: "ge-u3",
      code: "Option G",
      title: "Urban environments",
      lessons: [
        {
          id: "ge-l5",
          title: "Urban growth and sustainable cities",
          questions: [
            {
              id: "ge-l5-q1",
              type: "mcq",
              prompt:
                "Rapid urbanisation in low-income countries is driven mainly by",
              choices: [
                "government decree",
                "rural-to-urban migration plus natural increase in cities",
                "suburbanisation only",
                "deindustrialisation",
              ],
              answerIndex: 1,
              explanation:
                "Migration + high urban birth rates fuel megacity growth in Africa and Asia.",
            },
            {
              id: "ge-l5-q2",
              type: "mcq",
              prompt:
                "Informal settlements (slums) typically arise because",
              choices: [
                "cities over-provide housing",
                "housing supply and planning fail to keep pace with migration",
                "residents prefer illegality",
                "governments build them",
              ],
              answerIndex: 1,
              explanation:
                "Unmet housing demand → self-built settlements lacking secure tenure and services.",
            },
            {
              id: "ge-l5-q3",
              type: "mcq",
              prompt:
                "Urban microclimates differ from rural surroundings because",
              choices: [
                "cities are cooler and drier",
                "the urban heat island and modified wind/pollution alter local climate",
                "cities have more trees",
                "concrete reflects all heat",
              ],
              answerIndex: 1,
              explanation:
                "Built surfaces store heat; canyons channel wind; aerosols affect precipitation.",
            },
            {
              id: "ge-l5-q4",
              type: "tf",
              prompt:
                "Sustainable urban management can include both top-down master planning and bottom-up community upgrading.",
              answer: true,
              explanation:
                "Site-and-service schemes and informal-settlement upgrading are bottom-up complements to planning.",
            },
            {
              id: "ge-l5-q5",
              type: "short",
              prompt:
                "Give two challenges facing megacities in low-income countries.",
              answer:
                "Informal housing/service deficits and congestion/air pollution (also waste, water stress).",
              keywords: ["housing", "slum", "pollution", "congestion", "water"],
              explanation:
                "Any two: informal settlements, traffic, air quality, waste, water/sanitation gaps.",
            },
            {
              id: "ge-l5-q6",
              type: "short",
              prompt:
                "Describe one strategy used to make a named city more sustainable.",
              answer:
                "e.g. Curitiba's bus rapid transit and green space planning cut congestion and pollution.",
              keywords: ["transport", "green", "recycl", "transit", "plan"],
              explanation:
                "Curitiba BRT, Copenhagen cycling, Singapore water recycling — any valid example.",
            },
          ],
        },
      ],
    },
    {
      id: "ge-u4",
      code: "HL extension",
      title: "Global interactions",
      level: "HL",
      lessons: [
        {
          id: "ge-l6",
          title: "Power, places and networks",
          level: "HL",
          questions: [
            {
              id: "ge-l6-q1",
              type: "mcq",
              prompt:
                "Globalisation is best defined as",
              choices: [
                "world trade only",
                "the growing interconnection of places, economies and people via flows of goods, capital, people and information",
                "urbanisation",
                "the internet",
              ],
              answerIndex: 1,
              explanation:
                "A multidimensional process — economic, political, cultural and demographic flows.",
            },
            {
              id: "ge-l6-q2",
              type: "mcq",
              prompt:
                "A 'shrinking world' refers to",
              choices: [
                "smaller continents",
                "time–space convergence as transport and ICT reduce friction of distance",
                "population decline",
                "closing borders",
              ],
              answerIndex: 1,
              explanation:
                "Journeys that took weeks now take hours — effective distance shrinks.",
            },
            {
              id: "ge-l6-q3",
              type: "mcq",
              prompt:
                "Transnational corporations (TNCs) exercise power through",
              choices: [
                "voting rights",
                "global production networks and sourcing decisions across countries",
                "armies",
                "single-country operations",
              ],
              answerIndex: 1,
              explanation:
                "TNCs locate functions wherever cost/regulation is most favourable.",
            },
            {
              id: "ge-l6-q4",
              type: "tf",
              prompt:
                "'Glocalisation' means global products are adopted unchanged everywhere.",
              answer: false,
              explanation:
                "Glocalisation = adaptation of global flows to local cultures (e.g. menu localisation).",
            },
            {
              id: "ge-l6-q5",
              type: "short",
              prompt:
                "Explain how container shipping accelerated globalisation.",
              answer:
                "Standardised containers slashed transport costs and time, enabling global supply chains.",
              keywords: ["cost", "standard", "transport", "supply chain", "time"],
              explanation:
                "Malcom McLean's containerisation is a classic globalisation enabler.",
            },
            {
              id: "ge-l6-q6",
              type: "short",
              prompt:
                "Give one criticism of globalisation's claim to 'shrink' the world.",
              answer:
                "Connectivity is uneven — 'switchers' and hubs benefit while peripheral places remain disconnected.",
              keywords: ["uneven", "peripher", "digital", "divide", "switch"],
              explanation:
                "Castells' network society: power concentrates in nodes; distance still matters for the unconnected.",
            },
          ],
        },
        {
          id: "ge-l7",
          title: "Human development and diversity",
          level: "HL",
          questions: [
            {
              id: "ge-l7-q1",
              type: "mcq",
              prompt:
                "The Human Development Index combines",
              choices: [
                "GDP only",
                "income, education and life expectancy",
                "happiness surveys",
                "military spending",
              ],
              answerIndex: 1,
              explanation:
                "HDI = GNI + schooling + longevity — a broader measure than income alone.",
            },
            {
              id: "ge-l7-q2",
              type: "mcq",
              prompt:
                "Cultural imperialism argues that globalisation",
              choices: [
                "preserves all cultures",
                "spreads dominant (often Western) cultural forms at the expense of local ones",
                "has no cultural effect",
                "strengthens minority languages",
              ],
              answerIndex: 1,
              explanation:
                "Media, brands and language flows can erode local diversity — contested by glocalisation evidence.",
            },
            {
              id: "ge-l7-q3",
              type: "mcq",
              prompt:
                "The 'digital divide' refers to",
              choices: [
                "screen sizes",
                "unequal access to ICT and connectivity between and within countries",
                "television ratings",
                "electricity prices",
              ],
              answerIndex: 1,
              explanation:
                "Access gaps track income, age, gender and geography — reinforcing inequalities.",
            },
            {
              id: "ge-l7-q4",
              type: "tf",
              prompt:
                "Indices like the HDI fully capture inequality within a country.",
              answer: false,
              explanation:
                "HDI is a national average — it hides subnational and income inequality (hence the IHDI).",
            },
            {
              id: "ge-l7-q5",
              type: "short",
              prompt:
                "State two ways diasporas create global interactions.",
              answer:
                "Remittance flows and transnational cultural/business networks.",
              keywords: ["remitt", "network", "culture", "migrat"],
              explanation:
                "Diasporas channel money, ideas and trade links between origin and destination.",
            },
            {
              id: "ge-l7-q6",
              type: "short",
              prompt:
                "Evaluate one way the internet has changed global cultural diversity.",
              answer:
                "It spreads dominant languages/brands but also lets minority cultures reach global audiences.",
              keywords: ["dominant", "minority", "language", "audience", "spread"],
              explanation:
                "Both homogenising and diversifying forces operate simultaneously.",
            },
          ],
        },
        {
          id: "ge-l8",
          title: "Global risks and resilience",
          level: "HL",
          questions: [
            {
              id: "ge-l8-q1",
              type: "mcq",
              prompt:
                "A geopolitical risk to global networks is",
              choices: [
                "a single city's traffic",
                "trade-route chokepoints like the Suez Canal or contested regions",
                "a local power cut",
                "weather",
              ],
              answerIndex: 1,
              explanation:
                "Interdependence means local blockages (Ever Given 2021) disrupt global flows.",
            },
            {
              id: "ge-l8-q2",
              type: "mcq",
              prompt:
                "'Resilience' in global systems refers to",
              choices: [
                "rigidity",
                "the capacity of networks and places to absorb shocks and adapt",
                "isolation",
                "growth only",
              ],
              answerIndex: 1,
              explanation:
                "Diversification and redundancy build resilience to disruptions (pandemics, conflicts).",
            },
            {
              id: "ge-l8-q3",
              type: "mcq",
              prompt:
                "The COVID-19 pandemic showed that global supply chains",
              choices: [
                "are immune",
                "can transmit local disruptions worldwide almost instantly",
                "only affect trade",
                "never recover",
              ],
              answerIndex: 1,
              explanation:
                "Just-in-time networks spread shocks quickly — prompting reshoring/de-risking debates.",
            },
            {
              id: "ge-l8-q4",
              type: "tf",
              prompt:
                "Anti-globalisation movements argue that globalisation always produces evenly shared benefits.",
              answer: false,
              explanation:
                "Critics argue gains are uneven — inequality and sovereignty costs fall hardest on the poorest.",
            },
            {
              id: "ge-l8-q5",
              type: "short",
              prompt:
                "Give one strategy nations use to reduce vulnerability in critical supply chains.",
              answer:
                "Diversifying suppliers, reshoring/friend-shoring, or strategic stockpiles.",
              keywords: ["divers", "reshor", "stockpil", "supplier"],
              explanation:
                "Redundancy over pure efficiency — post-2020 'de-risking' trend.",
            },
            {
              id: "ge-l8-q6",
              type: "short",
              prompt:
                "Explain why a hazard like a pandemic is a 'global risk' rather than a local one.",
              answer:
                "Dense connectivity (travel, trade) spreads impacts worldwide and requires coordinated response.",
              keywords: ["connect", "travel", "spread", "coordinat", "world"],
              explanation:
                "The same networks that enable globalisation transmit systemic risks.",
            },
          ],
        },
      ],
    },
    {
      id: "ge-u5",
      code: "Fieldwork",
      title: "Geographic fieldwork (IA)",
      lessons: [
        {
          id: "ge-l9",
          title: "Fieldwork design and the IA",
          level: "HL",
          questions: [
            {
              id: "ge-l9-q1",
              type: "mcq",
              prompt:
                "A good IA fieldwork question should be",
              choices: [
                "unanswerable",
                "focused, spatial and measurable within the available time and location",
                "about global issues only",
                "entirely desk-based",
              ],
              answerIndex: 1,
              explanation:
                "Narrow, testable geographic questions grounded in collectable primary data.",
            },
            {
              id: "ge-l9-q2",
              type: "mcq",
              prompt:
                "A transect in fieldwork is used to",
              choices: [
                "avoid data collection",
                "sample systematically along a line to capture spatial change",
                "interview tourists",
                "map satellites",
              ],
              answerIndex: 1,
              explanation:
                "e.g. sampling environmental quality from CBD to suburbs along one street.",
            },
            {
              id: "ge-l9-q3",
              type: "mcq",
              prompt:
                "Stratified sampling in urban fieldwork ensures",
              choices: [
                "random guessing",
                "each zone/type (e.g. land-use areas) is represented in the sample",
                "only tourists respond",
                "no bias ever",
              ],
              answerIndex: 1,
              explanation:
                "Subgroups sampled proportionally — e.g. different neighbourhoods or land uses.",
            },
            {
              id: "ge-l9-q4",
              type: "tf",
              prompt:
                "Ethical fieldwork requires informed consent from questionnaire respondents.",
              answer: true,
              explanation:
                "Consent, anonymity and safety are required IA considerations.",
            },
            {
              id: "ge-l9-q5",
              type: "short",
              prompt:
                "Give an example of a suitable fieldwork question for an urban-environments IA.",
              answer:
                "e.g. 'How does environmental quality vary with distance from the CBD in [town]?'",
              keywords: ["environmental", "distance", "cbd", "vary", "quality"],
              explanation:
                "Spatial, focused and answerable with transect surveys/EQI scores.",
            },
            {
              id: "ge-l9-q6",
              type: "short",
              prompt:
                "Name two techniques for presenting fieldwork data spatially.",
              answer:
                "Located maps/GIS and annotated field sketches or proportional symbols.",
              keywords: ["map", "gis", "sketch", "symbol", "graph"],
              explanation:
                "Located graphs, choropleths, flow lines, photos — link data to place.",
            },
          ],
        },
      ],
    },
  ],
};
