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
        {
          id: "ge-l10",
          title: "Population policies",
          questions: [
            {
              id: "ge-l10-q1",
              type: "mcq",
              prompt: "China's one-child policy was designed to",
              choices: [
                "raise fertility",
                "slow population growth — later relaxed amid ageing concerns",
                "increase migration",
                "urbanise the population",
              ],
              answerIndex: 1,
              explanation:
                "1979–2015 — growth slowed but brought gender imbalance and ageing.",
            },
            {
              id: "ge-l10-q2",
              type: "mcq",
              prompt: "Pro-natalist policies aim to",
              choices: [
                "reduce births",
                "raise fertility — e.g. France's family allowances and parental leave",
                "stop migration",
                "build cities",
              ],
              answerIndex: 1,
              explanation:
                "Ageing societies like France and Singapore promote childbearing.",
            },
            {
              id: "ge-l10-q3",
              type: "tf",
              prompt:
                "Anti-natalist policies (family planning, contraception, education) are used where rapid growth strains resources.",
              answer: true,
              explanation:
                "e.g. Kerala's education-led fertility decline.",
            },
            {
              id: "ge-l10-q4",
              type: "mcq",
              prompt: "A population ageing policy might include",
              choices: [
                "banning retirement",
                "raising retirement age and attracting working-age migrants",
                "closing hospitals",
                "limiting pensions to none",
              ],
              answerIndex: 1,
              explanation:
                "Supporting a growing dependent elderly population.",
            },
            {
              id: "ge-l10-q5",
              type: "short",
              prompt:
                "Policies encouraging childbirth are called ___-natalist.",
              answer: "pro",
              keywords: ["pro"],
              acceptable: ["pro-natalist", "pronatalist"],
              explanation:
                "Pro-natalist vs anti-natalist.",
            },
            {
              id: "ge-l10-q6",
              type: "short",
              prompt:
                "Name ONE unintended consequence of China's one-child policy.",
              answer: "gender imbalance / ageing population",
              keywords: ["ageing", "aging", "gender", "imbalance", "age"],
              acceptable: ["ageing population", "gender imbalance", "ageing"],
              explanation:
                "Son preference skewed sex ratios; the workforce shrank.",
            },
          ],
        },
        {
          id: "ge-l11",
          title: "Megacities and demographic change",
          questions: [
            {
              id: "ge-l11-q1",
              type: "mcq",
              prompt: "A megacity is defined as a city with",
              choices: [
                "over 1 million people",
                "over 10 million people",
                "a port",
                "the tallest buildings",
              ],
              answerIndex: 1,
              explanation:
                "UN definition: 10+ million inhabitants.",
            },
            {
              id: "ge-l11-q2",
              type: "mcq",
              prompt: "Most megacity growth is now occurring in",
              choices: [
                "Europe",
                "Africa and Asia",
                "North America",
                "Oceania",
              ],
              answerIndex: 1,
              explanation:
                "Lagos, Dhaka, Kinshasa — the growth frontier is the developing world.",
            },
            {
              id: "ge-l11-q3",
              type: "tf",
              prompt:
                "Natural increase plus rural–urban migration together drive megacity growth.",
              answer: true,
              explanation:
                "Both components fuel rapid urbanisation.",
            },
            {
              id: "ge-l11-q4",
              type: "mcq",
              prompt: "A major challenge of rapid megacity growth is",
              choices: [
                "too much housing",
                "informal settlements and strained infrastructure",
                "empty streets",
                "too few workers",
              ],
              answerIndex: 1,
              explanation:
                "Slums grow when formal housing and services can't keep pace.",
            },
            {
              id: "ge-l11-q5",
              type: "short",
              prompt:
                "Unplanned housing areas in megacities are called ___ settlements (or slums).",
              answer: "informal",
              keywords: ["informal", "slum", "squatter", "shanty"],
              acceptable: ["informal settlements", "slums", "squatter", "favelas"],
              explanation:
                "Informal/squatter settlements — favelas, slums.",
            },
            {
              id: "ge-l11-q6",
              type: "short",
              prompt:
                "The process of rural people moving to cities is rural-urban ___.",
              answer: "migration",
              keywords: ["migrat"],
              acceptable: ["migration"],
              explanation:
                "Rural–urban migration drives urbanisation.",
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
        {
          id: "ge-l12",
          title: "Drainage basins and hydrographs",
          questions: [
            {
              id: "ge-l12-q1",
              type: "mcq",
              prompt: "A drainage basin is",
              choices: [
                "a lake",
                "the area of land drained by a river and its tributaries",
                "a dam",
                "a delta",
              ],
              answerIndex: 1,
              explanation:
                "An open system bounded by the watershed/divide.",
            },
            {
              id: "ge-l12-q2",
              type: "mcq",
              prompt: "A storm hydrograph with a short lag time and high peak indicates",
              choices: [
                "slow response",
                "flashy response — rapid runoff, high flood risk",
                "no rain",
                "flat basin",
              ],
              answerIndex: 1,
              explanation:
                "Impermeable surfaces/steep slopes → flashy hydrographs.",
            },
            {
              id: "ge-l12-q3",
              type: "tf",
              prompt:
                "Urbanisation typically shortens lag time and increases peak discharge.",
              answer: true,
              explanation:
                "Concrete speeds runoff into channels — flashier rivers.",
            },
            {
              id: "ge-l12-q4",
              type: "mcq",
              prompt: "The 'lag time' on a hydrograph is the delay between",
              choices: [
                "two storms",
                "peak rainfall and peak discharge",
                "seasons",
                "tides",
              ],
              answerIndex: 1,
              explanation:
                "Key measure of how fast a basin responds.",
            },
            {
              id: "ge-l12-q5",
              type: "short",
              prompt:
                "The boundary between two drainage basins = the ___.",
              answer: "watershed",
              keywords: ["watershed", "divide"],
              acceptable: ["watershed", "divide"],
              explanation:
                "Watershed (or drainage divide).",
            },
            {
              id: "ge-l12-q6",
              type: "short",
              prompt:
                "Water flowing over the land surface into channels = surface ___.",
              answer: "runoff",
              keywords: ["runoff"],
              acceptable: ["runoff", "overland flow"],
              explanation:
                "Overland flow/runoff — quick transfer to the river.",
            },
          ],
        },
        {
          id: "ge-l13",
          title: "Floods and their management",
          questions: [
            {
              id: "ge-l13-q1",
              type: "mcq",
              prompt: "Hard-engineering flood defences include",
              choices: [
                "afforestation",
                "dams, levees and channel straightening",
                "floodplain zoning",
                "warnings",
              ],
              answerIndex: 1,
              explanation:
                "Hard = built structures; soft = natural/planning approaches.",
            },
            {
              id: "ge-l13-q2",
              type: "mcq",
              prompt: "A benefit of soft-engineering floodplain restoration is",
              choices: [
                "it costs more",
                "it stores floodwater naturally and creates habitat",
                "it stops all floods",
                "it needs concrete",
              ],
              answerIndex: 1,
              explanation:
                "Working with the river — sustainable but uses land.",
            },
            {
              id: "ge-l13-q3",
              type: "tf",
              prompt:
                "Flood risk = hazard magnitude × vulnerability of people and property.",
              answer: true,
              explanation:
                "Risk combines the physical event and human exposure.",
            },
            {
              id: "ge-l13-q4",
              type: "mcq",
              prompt: "The Three Gorges Dam (China) illustrates that dams",
              choices: [
                "only generate power",
                "control floods and generate power but displace people and trap sediment",
                "are always beneficial",
                "prevent drought",
              ],
              answerIndex: 1,
              explanation:
                "A classic costs-vs-benefits case study.",
            },
            {
              id: "ge-l13-q5",
              type: "short",
              prompt:
                "Embankments raising a river's banks are called ___.",
              answer: "levees",
              keywords: ["levee"],
              acceptable: ["levees", "levee"],
              explanation:
                "Levees — natural or artificial embankments.",
            },
            {
              id: "ge-l13-q6",
              type: "short",
              prompt:
                "Restricting building on floodplains = land-use ___ (a soft-engineering strategy).",
              answer: "zoning",
              keywords: ["zon", "planning"],
              acceptable: ["zoning", "land-use planning"],
              explanation:
                "Floodplain zoning — keep vulnerable land uses out.",
            },
          ],
        },
        {
          id: "ge-l14",
          title: "River processes and landforms",
          questions: [
            {
              id: "ge-l14-q1",
              type: "mcq",
              prompt: "River erosion by abrasion involves",
              choices: [
                "dissolving rock",
                "the load scraping and wearing the bed and banks",
                "air bubbles",
                "freezing",
              ],
              answerIndex: 1,
              explanation:
                "Sediment as a grinding tool — corrasion/abrasion.",
            },
            {
              id: "ge-l14-q2",
              type: "mcq",
              prompt: "Deposition mainly occurs where",
              choices: [
                "velocity is high",
                "the river loses energy — inside bends, floodplains, the mouth",
                "the slope is steep",
                "water is cold",
              ],
              answerIndex: 1,
              explanation:
                "Low energy → the load drops out — point bars, deltas, levees.",
            },
            {
              id: "ge-l14-q3",
              type: "tf",
              prompt:
                "A meander's outer bank is eroded (fast flow) while the inner bank deposits (point bar).",
              answer: true,
              explanation:
                "Helicoidal flow — the classic meander mechanism.",
            },
            {
              id: "ge-l14-q4",
              type: "mcq",
              prompt: "An oxbow lake forms when",
              choices: [
                "a dam breaks",
                "a meander neck is cut off during a flood",
                "a glacier melts",
                "a river dries up",
              ],
              answerIndex: 1,
              explanation:
                "Cut-off meander — a crescent of stranded water.",
            },
            {
              id: "ge-l14-q5",
              type: "short",
              prompt:
                "Fine sediment deposited at a river's mouth, splitting the channel = a ___.",
              answer: "delta",
              keywords: ["delta"],
              acceptable: ["delta"],
              explanation:
                "Deltas form where deposition exceeds removal by tides.",
            },
            {
              id: "ge-l14-q6",
              type: "short",
              prompt:
                "The largest particles a river moves by rolling along the bed = ___ load.",
              answer: "bed",
              keywords: ["bed", "traction"],
              acceptable: ["bed load", "traction"],
              explanation:
                "Bed load moves by traction — heaviest material.",
            },
          ],
        },
        {
          id: "ge-l15",
          title: "Water security and the water-food-energy nexus",
          questions: [
            {
              id: "ge-l15-q1",
              type: "mcq",
              prompt: "Physical water scarcity occurs when",
              choices: [
                "infrastructure is missing",
                "demand exceeds available supply — over 75% of river flows withdrawn",
                "it doesn't rain once",
                "prices are high",
              ],
              answerIndex: 1,
              explanation:
                "vs economic scarcity — water exists but can't be accessed.",
            },
            {
              id: "ge-l15-q2",
              type: "mcq",
              prompt: "The water-food-energy nexus recognises that",
              choices: [
                "the three are unrelated",
                "water, food and energy security are interdependent — decisions in one affect the others",
                "food uses no water",
                "energy is free",
              ],
              answerIndex: 1,
              explanation:
                "e.g. irrigation needs energy; energy cooling needs water; food needs both.",
            },
            {
              id: "ge-l15-q3",
              type: "tf",
              prompt:
                "Virtual water refers to water embedded in traded goods — importing food imports its water.",
              answer: true,
              explanation:
                "Water-rich exports can 'export' scarcity elsewhere.",
            },
            {
              id: "ge-l15-q4",
              type: "mcq",
              prompt: "Desalination's main drawback is",
              choices: [
                "it doesn't work",
                "high energy cost and brine waste",
                "salt shortage",
                "it only works in rivers",
              ],
              answerIndex: 1,
              explanation:
                "Solves scarcity at high energy/environmental cost.",
            },
            {
              id: "ge-l15-q5",
              type: "short",
              prompt:
                "Water scarcity where supply exists but can't be accessed = ___ scarcity.",
              answer: "economic",
              keywords: ["economic"],
              acceptable: ["economic water scarcity"],
              explanation:
                "Economic scarcity — an infrastructure/poverty problem.",
            },
            {
              id: "ge-l15-q6",
              type: "short",
              prompt:
                "A crop needing much irrigation in arid regions is ___ (one example).",
              answer: "rice",
              keywords: ["rice", "cotton", "wheat", "alfalfa"],
              acceptable: ["rice", "cotton", "alfalfa"],
              explanation:
                "Rice and cotton are notoriously thirsty crops.",
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
        {
          id: "ge-l16",
          title: "Urban land-use models",
          questions: [
            {
              id: "ge-l16-q1",
              type: "mcq",
              prompt: "The Burgess concentric zone model arranges the city as",
              choices: [
                "sectors along transport",
                "rings around the CBD — inner city to commuter suburbs",
                "multiple centres",
                "a grid",
              ],
              answerIndex: 1,
              explanation:
                "CBD → transition → working-class → middle-class → commuter zone.",
            },
            {
              id: "ge-l16-q2",
              type: "mcq",
              prompt: "Hoyt's sector model differs by having zones grow",
              choices: [
                "in rings",
                "outward along transport routes in wedges",
                "randomly",
                "underground",
              ],
              answerIndex: 1,
              explanation:
                "Industry follows rail/river; high-rent flees the other direction.",
            },
            {
              id: "ge-l16-q3",
              type: "tf",
              prompt:
                "Bid-rent theory explains why retail dominates the CBD — it can afford the highest land values.",
              answer: true,
              explanation:
                "Land value peaks at the centre; different uses outbid each other by distance.",
            },
            {
              id: "ge-l16-q4",
              type: "mcq",
              prompt: "The multiple-nuclei model (Harris & Ullman) proposes",
              choices: [
                "one CBD",
                "several centres — airports, industry parks, edge cities — each attracting activity",
                "no CBD",
                "only suburbs",
              ],
              answerIndex: 1,
              explanation:
                "Modern cities often fit this polycentric pattern.",
            },
            {
              id: "ge-l16-q5",
              type: "short",
              prompt:
                "The zone of mixed industry/housing near the CBD in Burgess's model = the zone in ___.",
              answer: "transition",
              keywords: ["transition"],
              acceptable: ["transition"],
              explanation:
                "Zone in transition — industry and cheap housing.",
            },
            {
              id: "ge-l16-q6",
              type: "short",
              prompt:
                "The central commercial district is abbreviated ___.",
              answer: "CBD",
              keywords: ["cbd"],
              acceptable: ["CBD"],
              explanation:
                "CBD = central business district.",
            },
          ],
        },
        {
          id: "ge-l17",
          title: "Urban deprivation and residential patterns",
          questions: [
            {
              id: "ge-l17-q1",
              type: "mcq",
              prompt: "Deprivation is best measured by",
              choices: [
                "income alone",
                "multiple dimensions — income, health, education, housing, employment",
                "house prices",
                "population size",
              ],
              answerIndex: 1,
              explanation:
                "Indices of Multiple Deprivation combine several domains.",
            },
            {
              id: "ge-l17-q2",
              type: "mcq",
              prompt: "Residential segregation in cities is driven by",
              choices: [
                "weather",
                "income, ethnicity and housing markets concentrating groups in different areas",
                "rivers",
                "schools only",
              ],
              answerIndex: 1,
              explanation:
                "Ethnic enclaves, gated communities — self-reinforcing patterns.",
            },
            {
              id: "ge-l17-q3",
              type: "tf",
              prompt:
                "Inner-city areas of high deprivation often sit beside zones of wealth — spatial inequality within one city.",
              answer: true,
              explanation:
                "e.g. London's Tower Hamlets next to the City.",
            },
            {
              id: "ge-l17-q4",
              type: "mcq",
              prompt: "Gentrification can displace",
              choices: [
                "developers",
                "lower-income residents as prices and rents rise",
                "shops",
                "tourists",
              ],
              answerIndex: 1,
              explanation:
                "Regeneration's downside — social displacement.",
            },
            {
              id: "ge-l17-q5",
              type: "short",
              prompt:
                "The index combining several deprivation measures is the Index of Multiple ___.",
              answer: "Deprivation",
              keywords: ["deprivation"],
              acceptable: ["Deprivation", "IMD"],
              explanation:
                "IMD — used in the UK and adapted elsewhere.",
            },
            {
              id: "ge-l17-q6",
              type: "short",
              prompt:
                "Area where a minority group concentrates (e.g. Chinatown) = an ethnic ___.",
              answer: "enclave",
              keywords: ["enclave"],
              acceptable: ["enclave"],
              explanation:
                "Ethnic enclaves — segregation by choice or constraint.",
            },
          ],
        },
        {
          id: "ge-l18",
          title: "Sustainable city strategies",
          questions: [
            {
              id: "ge-l18-q1",
              type: "mcq",
              prompt: "Curitiba (Brazil) is famous for",
              choices: [
                "car dependence",
                "its bus rapid transit system and green planning",
                "the tallest towers",
                "banning buses",
              ],
              answerIndex: 1,
              explanation:
                "The textbook sustainable-transport case study.",
            },
            {
              id: "ge-l18-q2",
              type: "mcq",
              prompt: "Green infrastructure in cities includes",
              choices: [
                "more roads",
                "parks, green roofs and urban forests that manage water and heat",
                "airports",
                "car parks",
              ],
              answerIndex: 1,
              explanation:
                "Vegetation cools, absorbs runoff and supports biodiversity.",
            },
            {
              id: "ge-l18-q3",
              type: "tf",
              prompt:
                "The '15-minute city' concept aims for daily needs reachable by foot or bike.",
              answer: true,
              explanation:
                "Mixed-use neighbourhoods reduce car dependence.",
            },
            {
              id: "ge-l18-q4",
              type: "mcq",
              prompt: "Urban congestion charging aims to",
              choices: [
                "raise prices",
                "reduce traffic and emissions in the centre — e.g. London, Singapore",
                "ban cars",
                "build roads",
              ],
              answerIndex: 1,
              explanation:
                "Pricing road use — revenue can fund transit.",
            },
            {
              id: "ge-l18-q5",
              type: "short",
              prompt:
                "Cities using data/sensors to manage services are '___' cities.",
              answer: "smart",
              keywords: ["smart"],
              acceptable: ["smart"],
              explanation:
                "Smart cities — Barcelona, Singapore.",
            },
            {
              id: "ge-l18-q6",
              type: "short",
              prompt:
                "Name ONE strategy for more sustainable urban transport.",
              answer: "bus rapid transit / cycling infrastructure",
              keywords: ["bus", "cycl", "metro", "transit", "walk", "congestion", "electric"],
              acceptable: ["BRT", "cycling lanes", "metro", "congestion charge"],
              explanation:
                "Public transit, cycling, walking, pricing.",
            },
          ],
        },
        {
          id: "ge-l19",
          title: "Urban systems: urbanisation and re-urbanisation",
          questions: [
            {
              id: "ge-l19-q1",
              type: "mcq",
              prompt: "Suburbanisation means",
              choices: [
                "city centre growth",
                "population and functions spreading to the urban fringe",
                "rural decline only",
                "more towers",
              ],
              answerIndex: 1,
              explanation:
                "Cars enabled the shift — edge cities result.",
            },
            {
              id: "ge-l19-q2",
              type: "mcq",
              prompt: "Counter-urbanisation is",
              choices: [
                "more city growth",
                "net movement from cities to rural areas",
                "suburbanisation",
                "industrialisation",
              ],
              answerIndex: 1,
              explanation:
                "Remote working and lifestyle migration — reversed flow.",
            },
            {
              id: "ge-l19-q3",
              type: "tf",
              prompt:
                "Re-urbanisation describes population returning to regenerated inner cities.",
              answer: true,
              explanation:
                "Gentrification and brownfield redevelopment pull people back.",
            },
            {
              id: "ge-l19-q4",
              type: "mcq",
              prompt: "Brownfield sites are",
              choices: [
                "greenfields",
                "previously developed urban land available for reuse",
                "farmland",
                "parks",
              ],
              answerIndex: 1,
              explanation:
                "Building on brownfield avoids greenfield sprawl.",
            },
            {
              id: "ge-l19-q5",
              type: "short",
              prompt:
                "Undeveloped land on the urban edge = a ___ site.",
              answer: "greenfield",
              keywords: ["greenfield"],
              acceptable: ["greenfield site"],
              explanation:
                "Greenfield vs brownfield — the sustainability trade-off.",
            },
            {
              id: "ge-l19-q6",
              type: "short",
              prompt:
                "The spreading of a city into surrounding rural land = urban ___.",
              answer: "sprawl",
              keywords: ["sprawl"],
              acceptable: ["sprawl"],
              explanation:
                "Urban sprawl — low-density outward growth.",
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
        {
          id: "ge-l20",
          title: "HL: TNCs, diaspora and cultural hybridity",
          level: "HL",
          questions: [
            {
              id: "ge-l20-q1",
              type: "mcq",
              prompt: "Transnational corporations exert power by",
              choices: [
                "only selling locally",
                "organising global supply chains and influencing governments",
                "avoiding trade",
                "paying no wages",
              ],
              answerIndex: 1,
              explanation:
                "TNCs shape flows of capital, jobs and technology across borders.",
            },
            {
              id: "ge-l20-q2",
              type: "mcq",
              prompt: "A diaspora is",
              choices: [
                "a trade bloc",
                "a dispersed community maintaining ties with its homeland",
                "a religion",
                "a currency",
              ],
              answerIndex: 1,
              explanation:
                "e.g. the Indian, Chinese and Jewish diasporas — remittances and culture flow back.",
            },
            {
              id: "ge-l20-q3",
              type: "tf",
              prompt:
                "Cultural hybridity describes the blending of global and local cultures into new forms — e.g. 'glocal' food and music.",
              answer: true,
              explanation:
                "Globalisation doesn't only homogenise — it creates hybrids.",
            },
            {
              id: "ge-l20-q4",
              type: "mcq",
              prompt: "'Glocalisation' means",
              choices: [
                "ignoring local markets",
                "adapting global products to local cultures — e.g. McDonald's regional menus",
                "only global brands",
                "ending trade",
              ],
              answerIndex: 1,
              explanation:
                "Global standard + local adaptation.",
            },
            {
              id: "ge-l20-q5",
              type: "short",
              prompt:
                "Money migrants send home = ___.",
              answer: "remittances",
              keywords: ["remittance"],
              acceptable: ["remittances"],
              explanation:
                "Remittances exceed aid in many countries.",
            },
            {
              id: "ge-l20-q6",
              type: "short",
              prompt:
                "The loss of cultural distinctiveness to a uniform global culture is cultural ___.",
              answer: "homogenisation",
              keywords: ["homogen", "homogeniz", "homogenis"],
              acceptable: ["homogenization", "homogenisation"],
              explanation:
                "Homogenisation — the 'McWorld' critique.",
            },
          ],
        },
        {
          id: "ge-l21",
          title: "HL: global risks and resilience",
          level: "HL",
          questions: [
            {
              id: "ge-l21-q1",
              type: "mcq",
              prompt: "Globalisation increases systemic risk because",
              choices: [
                "countries are isolated",
                "connections spread shocks — financial, health, cyber — rapidly",
                "trade stopped",
                "risks vanished",
              ],
              answerIndex: 1,
              explanation:
                "Interdependence transmits crises (2008, COVID-19).",
            },
            {
              id: "ge-l21-q2",
              type: "mcq",
              prompt: "Cyber-security risks for states include",
              choices: [
                "only spam",
                "attacks on critical infrastructure, data theft and disinformation",
                "slow internet",
                "emails",
              ],
              answerIndex: 1,
              explanation:
                "Geopolitics now includes the cyber domain.",
            },
            {
              id: "ge-l21-q3",
              type: "tf",
              prompt:
                "Resilience strategies include diversifying supply chains and building local capacity.",
              answer: true,
              explanation:
                "Redundancy and diversity absorb shocks.",
            },
            {
              id: "ge-l21-q4",
              type: "mcq",
              prompt: "'Reshoring' production aims to",
              choices: [
                "export more",
                "reduce dependency on distant supply chains and increase resilience",
                "lower wages",
                "close factories",
              ],
              answerIndex: 1,
              explanation:
                "Bringing manufacturing home — a resilience response.",
            },
            {
              id: "ge-l21-q5",
              type: "short",
              prompt:
                "The ability of a place/system to withstand and recover from shocks = ___.",
              answer: "resilience",
              keywords: ["resilien"],
              acceptable: ["resilience"],
              explanation:
                "Resilience — the HL extension's core concept.",
            },
            {
              id: "ge-l21-q6",
              type: "short",
              prompt:
                "Name ONE type of global flow that can transmit risk.",
              answer: "finance / people / data",
              keywords: ["financ", "capital", "people", "data", "goods", "trade", "migrat"],
              acceptable: ["capital flows", "migration", "data"],
              explanation:
                "Finance, people, goods, data — all transmit shocks.",
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
        {
          id: "ge-l22",
          title: "Fieldwork methods: collecting primary data",
          level: "HL",
          questions: [
            {
              id: "ge-l22-q1",
              type: "mcq",
              prompt: "Primary data is",
              choices: [
                "from textbooks",
                "data you collect yourself in the field",
                "census data",
                "older data",
              ],
              answerIndex: 1,
              explanation:
                "Surveys, measurements, counts — collected for your question.",
            },
            {
              id: "ge-l22-q2",
              type: "mcq",
              prompt: "Systematic sampling along a transect means",
              choices: [
                "random points",
                "sampling at regular intervals along a line",
                "asking friends",
                "only one site",
              ],
              answerIndex: 1,
              explanation:
                "e.g. every 100 m along a river or urban transect.",
            },
            {
              id: "ge-l22-q3",
              type: "tf",
              prompt:
                "A pilot study tests your methods on a small scale before the full fieldwork.",
              answer: true,
              explanation:
                "Pilots reveal flaws in questionnaires and techniques early.",
            },
            {
              id: "ge-l22-q4",
              type: "mcq",
              prompt: "A risk assessment for fieldwork should",
              choices: [
                "be ignored",
                "identify hazards and how to reduce them",
                "list answers",
                "be written after",
              ],
              answerIndex: 1,
              explanation:
                "Required before fieldwork — traffic, water, weather…",
            },
            {
              id: "ge-l22-q5",
              type: "short",
              prompt:
                "Data collected from existing sources (websites, maps) = ___ data.",
              answer: "secondary",
              keywords: ["secondary"],
              acceptable: ["secondary data"],
              explanation:
                "Secondary data complements primary collection.",
            },
            {
              id: "ge-l22-q6",
              type: "short",
              prompt:
                "Sampling where every member of the population has equal chance = ___ sampling.",
              answer: "random",
              keywords: ["random"],
              acceptable: ["random sampling"],
              explanation:
                "Random — the unbiased baseline method.",
            },
          ],
        },
        {
          id: "ge-l23",
          title: "Fieldwork: data presentation and analysis",
          level: "HL",
          questions: [
            {
              id: "ge-l23-q1",
              type: "mcq",
              prompt: "Spearman's rank correlation tests",
              choices: [
                "two means",
                "whether two variables are associated using ranked data",
                "map accuracy",
                "rainfall only",
              ],
              answerIndex: 1,
              explanation:
                "rs between −1 and +1 — test against the critical value.",
            },
            {
              id: "ge-l23-q2",
              type: "mcq",
              prompt: "The chi-squared test in geography is used for",
              choices: [
                "ranked data",
                "differences in categorical data vs expected frequencies",
                "means",
                "maps",
              ],
              answerIndex: 1,
              explanation:
                "e.g. land use observed vs expected across zones.",
            },
            {
              id: "ge-l23-q3",
              type: "tf",
              prompt:
                "GIS lets you layer and map spatial data for analysis.",
              answer: true,
              explanation:
                "Geographic Information Systems — layers reveal patterns.",
            },
            {
              id: "ge-l23-q4",
              type: "mcq",
              prompt: "To show a relationship between distance from the CBD and building height you'd use",
              choices: [
                "a pie chart",
                "a scattergraph with a line of best fit",
                "a bar chart",
                "a map",
              ],
              answerIndex: 1,
              explanation:
                "Two continuous variables → scattergraph.",
            },
            {
              id: "ge-l23-q5",
              type: "short",
              prompt:
                "The statistical term for 'no real relationship' you test against = the ___ hypothesis.",
              answer: "null",
              keywords: ["null"],
              acceptable: ["null hypothesis"],
              explanation:
                "Reject or accept the null hypothesis.",
            },
            {
              id: "ge-l23-q6",
              type: "short",
              prompt:
                "Maps shading areas by data value (e.g. deprivation) are called ___ maps.",
              answer: "choropleth",
              keywords: ["choropleth"],
              acceptable: ["choropleth maps"],
              explanation:
                "Choropleth — density/attribute shading by area.",
            },
          ],
        },
        {
          id: "ge-l24",
          title: "The geography IA: method and evaluation",
          level: "HL",
          questions: [
            {
              id: "ge-l24-q1",
              type: "mcq",
              prompt: "The geography IA must",
              choices: [
                "be library research",
                "be based on fieldwork collecting primary data linked to the syllabus",
                "be group work only",
                "cover history",
              ],
              answerIndex: 1,
              explanation:
                "2,500 words; fieldwork is compulsory.",
            },
            {
              id: "ge-l24-q2",
              type: "mcq",
              prompt: "Evaluating your methodology means discussing",
              choices: [
                "only results",
                "the validity, reliability and limitations of your data and methods",
                "your feelings",
                "other topics",
              ],
              answerIndex: 1,
              explanation:
                "Honest limitations + improvements score marks.",
            },
            {
              id: "ge-l24-q3",
              type: "tf",
              prompt:
                "A strong IA question is focused on a specific location and links clearly to a syllabus topic.",
              answer: true,
              explanation:
                "e.g. 'To what extent does land use vary with distance from X's CBD?'",
            },
            {
              id: "ge-l24-q4",
              type: "mcq",
              prompt: "Sources of error in fieldwork data include",
              choices: [
                "careful sampling",
                "measurement error, bias in sampling and small sample sizes",
                "pilot studies",
                "risk assessments",
              ],
              answerIndex: 1,
              explanation:
                "Name them in the evaluation — honest critique.",
            },
            {
              id: "ge-l24-q5",
              type: "short",
              prompt:
                "The IA word limit (number).",
              answer: "2500",
              keywords: ["2500", "2,500"],
              acceptable: ["2,500"],
              explanation:
                "2,500 words.",
            },
            {
              id: "ge-l24-q6",
              type: "short",
              prompt:
                "Your IA's central question guiding the whole investigation is the ___ question.",
              answer: "research",
              keywords: ["research"],
              acceptable: ["research question"],
              explanation:
                "A focused research question frames the IA.",
            },
          ],
        },
        {
          id: "ge-l25",
          title: "Fieldwork practice: designing an investigation",
          level: "HL",
          questions: [
            {
              id: "ge-l25-q1",
              type: "mcq",
              prompt: "To investigate microclimate across a city you would measure",
              choices: [
                "only temperature",
                "temperature, wind, humidity and shading at multiple sites",
                "traffic",
                "house prices",
              ],
              answerIndex: 1,
              explanation:
                "Multiple variables at multiple sites — urban heat island study.",
            },
            {
              id: "ge-l25-q2",
              type: "mcq",
              prompt: "For river fieldwork you might measure",
              choices: [
                "channel width, depth, velocity and gradient",
                "only colour",
                "fish species",
                "air pressure",
              ],
              answerIndex: 0,
              explanation:
                "Channel characteristics along a downstream transect — Bradshaw model.",
            },
            {
              id: "ge-l25-q3",
              type: "tf",
              prompt:
                "A questionnaire with closed questions is easier to analyse numerically than open ones.",
              answer: true,
              explanation:
                "Closed questions produce countable categories for charts/stats.",
            },
            {
              id: "ge-l25-q4",
              type: "mcq",
              prompt: "Ensuring your measurements are taken the same way each time improves",
              choices: [
                "bias",
                "reliability",
                "cost",
                "speed",
              ],
              answerIndex: 1,
              explanation:
                "Consistent method → repeatable, reliable data.",
            },
            {
              id: "ge-l25-q5",
              type: "short",
              prompt:
                "Measuring river discharge requires width, depth and ___.",
              answer: "velocity",
              keywords: ["velocity", "speed"],
              acceptable: ["velocity", "speed"],
              explanation:
                "Q = width × depth × velocity (m³/s or cumecs).",
            },
            {
              id: "ge-l25-q6",
              type: "short",
              prompt:
                "Name ONE hazard to assess in a river-based fieldwork day.",
              answer: "slippery banks / deep water",
              keywords: ["water", "slip", "drown", "bank", "weather"],
              acceptable: ["slippery banks", "deep water", "weather"],
              explanation:
                "Water hazards dominate river fieldwork risk assessments.",
            },
          ],
        },
      ],
    },
  ],
};
