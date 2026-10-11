import type { Subject } from "../types";

export const ess: Subject = {
  slug: "ess",
  name: "Environmental Systems and Societies",
  short: "ESS",
  color: "#059669",
  emoji: "🌍",
  group: "Sciences",
  levels: ["SL", "HL"],
  description:
    "An interdisciplinary subject: foundations, ecology, biodiversity, resource use, climate change and human populations — with HL lenses of law, economics and ethics.",
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
      url: "https://www.thinkib.net/ess",
      note: "Teacher-written lessons and IA guidance",
    },
    {
      name: "Clastify",
      url: "https://www.clastify.com/",
      note: "Past papers and exemplar work",
    },
  ],
  units: [
    {
      id: "es-u1",
      code: "Topic 1",
      title: "Foundations of ESS",
      lessons: [
        {
          id: "es-l1",
          title: "Environmental perspectives and value systems",
          questions: [
            {
              id: "es-l1-q1",
              type: "mcq",
              prompt:
                "An ecocentric worldview holds that",
              choices: [
                "nature has value only for humans",
                "nature has intrinsic value independent of human use",
                "technology will solve all problems",
                "growth is unlimited",
              ],
              answerIndex: 1,
              explanation:
                "Ecocentrists prioritise ecosystems and biodiversity for their own sake — contrast with anthropocentrism.",
            },
            {
              id: "es-l1-q2",
              type: "mcq",
              prompt:
                "A technocentric perspective is characterised by",
              choices: [
                "rejecting all development",
                "confidence that human ingenuity and technology can manage environmental problems",
                "deep ecology",
                "subsistence living",
              ],
              answerIndex: 1,
              explanation:
                "Technocentrists believe innovation and markets can solve resource and pollution issues.",
            },
            {
              id: "es-l1-q3",
              type: "mcq",
              prompt:
                "An environmental value system (EVS) is",
              choices: [
                "a law",
                "a worldview shaping how a person/group perceives and values the environment",
                "a computer model",
                "an energy source",
              ],
              answerIndex: 1,
              explanation:
                "EVS underpins decisions — inputs → worldview → outputs/actions.",
            },
            {
              id: "es-l1-q4",
              type: "tf",
              prompt:
                "Anthropocentric worldviews may still support conservation — but for human benefit.",
              answer: true,
              explanation:
                "Stewardship/conservation for human utility is anthropocentric; intrinsic value claims are ecocentric.",
            },
            {
              id: "es-l1-q5",
              type: "short",
              prompt:
                "Give an example of how different EVSs would respond to building a dam.",
              answer:
                "Technocentrist: engineering solution for water/energy; ecocentrist: objects to habitat destruction; anthropocentrist: weighs human costs and benefits.",
              keywords: ["technocent", "ecocent", "anthropocent", "habitat"],
              explanation:
                "The same decision is judged differently depending on underlying values.",
            },
            {
              id: "es-l1-q6",
              type: "short",
              prompt:
                "Define 'deep ecology' in one sentence.",
              answer:
                "A radical ecocentric philosophy valuing all living things equally and advocating minimal human interference.",
              keywords: ["ecocent", "equal", "intrinsic", "interference"],
              explanation:
                "Developed by Arne Naess — biocentric equality, not just resource management.",
            },
          ],
        },
        {
          id: "es-l2",
          title: "Systems and sustainability",
          questions: [
            {
              id: "es-l2-q1",
              type: "mcq",
              prompt:
                "An open system exchanges",
              choices: [
                "nothing",
                "both matter and energy with its surroundings",
                "energy only",
                "matter only",
              ],
              answerIndex: 1,
              explanation:
                "Ecosystems are open systems; a closed system exchanges only energy.",
            },
            {
              id: "es-l2-q2",
              type: "mcq",
              prompt:
                "Negative feedback in a system",
              choices: [
                "amplifies change",
                "counteracts change and stabilises the system",
                "destroys balance",
                "is always harmful",
              ],
              answerIndex: 1,
              explanation:
                "e.g. predator–prey cycles; positive feedback amplifies (e.g. ice–albedo).",
            },
            {
              id: "es-l2-q3",
              type: "mcq",
              prompt:
                "A system in dynamic equilibrium is",
              choices: [
                "static",
                "changing within limits while inputs and outputs balance",
                "collapsing",
                "closed",
              ],
              answerIndex: 1,
              explanation:
                "Long-term steady state despite short-term fluctuations.",
            },
            {
              id: "es-l2-q4",
              type: "tf",
              prompt:
                "A tipping point is where a small change triggers a large, possibly irreversible shift in a system.",
              answer: true,
              explanation:
                "e.g. rainforest→savanna dieback or ice-sheet collapse thresholds.",
            },
            {
              id: "es-l2-q5",
              type: "short",
              prompt:
                "Define 'resilience' of an ecosystem.",
              answer:
                "The capacity of a system to absorb disturbance and return to its original state.",
              keywords: ["disturb", "recover", "absorb", "return"],
              explanation:
                "Diverse, complex systems tend to be more resilient.",
            },
            {
              id: "es-l2-q6",
              type: "short",
              prompt:
                "Give one example of positive feedback in an environmental system.",
              answer:
                "Melting ice reduces albedo → more heat absorbed → more melting.",
              keywords: ["ice", "albedo", "melting", "warming", "feedback"],
              explanation:
                "Ice–albedo feedback amplifies warming; permafrost methane release is another.",
            },
          ],
        },
      ],
    },
    {
      id: "es-u2",
      code: "Topic 2",
      title: "Ecology",
      lessons: [
        {
          id: "es-l3",
          title: "Populations and communities",
          questions: [
            {
              id: "es-l3-q1",
              type: "mcq",
              prompt:
                "A sigmoid (S-shaped) population growth curve levels off at the",
              choices: [
                "birth rate",
                "carrying capacity",
                "death rate",
                "migration rate",
              ],
              answerIndex: 1,
              explanation:
                "K — the maximum population the environment can sustain.",
            },
            {
              id: "es-l3-q2",
              type: "mcq",
              prompt:
                "Competition between individuals of the same species is called",
              choices: [
                "interspecific",
                "intraspecific",
                "mutualism",
                "predation",
              ],
              answerIndex: 1,
              explanation:
                "Intra- = within species; inter- = between species.",
            },
            {
              id: "es-l3-q3",
              type: "mcq",
              prompt:
                "The competitive exclusion principle states that",
              choices: [
                "species can always coexist",
                "two species competing for identical niches cannot coexist indefinitely",
                "predators eliminate prey",
                "competition is rare",
              ],
              answerIndex: 1,
              explanation:
                "Gause's principle — one competitor will outcompete or niche-partition will evolve.",
            },
            {
              id: "es-l3-q4",
              type: "tf",
              prompt:
                "r-selected species typically produce many offspring with little parental care.",
              answer: true,
              explanation:
                "r-strategists favour rapid reproduction; K-strategists few, well-cared-for offspring.",
            },
            {
              id: "es-l3-q5",
              type: "short",
              prompt:
                "Define 'carrying capacity'.",
              answer:
                "The maximum population size an environment can sustainably support.",
              keywords: ["maximum", "population", "sustain", "environment"],
              explanation:
                "Determined by limiting resources; overshoot → dieback.",
            },
            {
              id: "es-l3-q6",
              type: "short",
              prompt:
                "Distinguish between a habitat and a niche.",
              answer:
                "Habitat is where an organism lives; niche is its role — how it lives, feeds and interacts.",
              keywords: ["habitat", "role", "live", "interact", "where"],
              explanation:
                "Address vs profession — a common analogy.",
            },
          ],
        },
        {
          id: "es-l4",
          title: "Biomes and energy flow",
          questions: [
            {
              id: "es-l4-q1",
              type: "mcq",
              prompt:
                "Biome distribution is determined mainly by",
              choices: [
                "longitude",
                "climate — temperature and precipitation",
                "soil colour",
                "human population",
              ],
              answerIndex: 1,
              explanation:
                "Insolation + rainfall patterns set the vegetation type — e.g. rainforest vs desert at similar latitudes.",
            },
            {
              id: "es-l4-q2",
              type: "mcq",
              prompt:
                "Gross primary productivity minus plant respiration equals",
              choices: [
                "net primary productivity",
                "biomass",
                "secondary productivity",
                "entropy",
              ],
              answerIndex: 0,
              explanation: "NPP = GPP − R — the energy available to consumers.",
            },
            {
              id: "es-l4-q3",
              type: "mcq",
              prompt:
                "Ecological succession ends (classically) in a",
              choices: [
                "pioneer community",
                "climax community",
                "desert",
                "monoculture",
              ],
              answerIndex: 1,
              explanation:
                "Pioneer → intermediate → climax; modern views see more dynamic equilibria.",
            },
            {
              id: "es-l4-q4",
              type: "tf",
              prompt:
                "Tropical rainforests have high productivity but typically nutrient-poor soils.",
              answer: true,
              explanation:
                "Most nutrients are locked in biomass and rapidly recycled — soils are often leached.",
            },
            {
              id: "es-l4-q5",
              type: "short",
              prompt:
                "Explain why pyramids of energy are always upright while pyramids of numbers may not be.",
              answer:
                "Energy is always lost between trophic levels; numbers can invert (e.g. one tree feeding many insects).",
              keywords: ["energy", "lost", "trophic", "tree", "number"],
              explanation:
                "A single large producer can support huge numbers of small primary consumers.",
            },
            {
              id: "es-l4-q6",
              type: "short",
              prompt:
                "Name the process by which nutrients become available to producers in an ecosystem.",
              answer:
                "Decomposition — saprotrophs break down detritus releasing inorganic nutrients.",
              keywords: ["decompos", "detritus", "nutrient", "saprotroph"],
              explanation:
                "Decomposers mineralise organic matter, closing nutrient loops.",
            },
          ],
        },
      ],
    },
    {
      id: "es-u3",
      code: "Topic 3",
      title: "Biodiversity and conservation",
      lessons: [
        {
          id: "es-l5",
          title: "Biodiversity and threats",
          questions: [
            {
              id: "es-l5-q1",
              type: "mcq",
              prompt:
                "The three levels of biodiversity are",
              choices: [
                "plants, animals, fungi",
                "genetic, species and habitat/ecosystem diversity",
                "land, sea, air",
                "local, regional, global",
              ],
              answerIndex: 1,
              explanation:
                "Genetic variation within species, species richness, and ecosystem variety.",
            },
            {
              id: "es-l5-q2",
              type: "mcq",
              prompt:
                "The largest driver of current species extinction is",
              choices: [
                "hunting",
                "habitat loss and fragmentation",
                "volcanoes",
                "natural selection",
              ],
              answerIndex: 1,
              explanation:
                "Land-use change — agriculture and development — dwarfs other drivers.",
            },
            {
              id: "es-l5-q3",
              type: "mcq",
              prompt:
                "A biodiversity hotspot is a region with",
              choices: [
                "many zoos",
                "high endemism and significant habitat loss",
                "high income",
                "cold climate",
              ],
              answerIndex: 1,
              explanation:
                "Exceptional endemic species + severe threat = conservation priority.",
            },
            {
              id: "es-l5-q4",
              type: "tf",
              prompt:
                "Alien (invasive) species can reduce biodiversity by outcompeting or preying on native species.",
              answer: true,
              explanation:
                "e.g. cane toads in Australia — invasive species are a leading cause of island extinctions.",
            },
            {
              id: "es-l5-q5",
              type: "short",
              prompt:
                "State two reasons for conserving biodiversity.",
              answer:
                "Ecosystem services (pollination, water regulation) and intrinsic/ethical value; also medicine and resilience.",
              keywords: ["service", "pollinat", "ethic", "intrinsic", "medicine", "resilience"],
              explanation:
                "Utilitarian (services, genes) and ethical (intrinsic value) arguments both apply.",
            },
            {
              id: "es-l5-q6",
              type: "short",
              prompt:
                "Define 'keystone species' and give an example.",
              answer:
                "A species with disproportionate impact on its ecosystem — e.g. sea otters controlling sea urchins.",
              keywords: ["disproportionate", "ecosystem", "otter", "impact"],
              explanation:
                "Removing a keystone causes cascading change (trophic cascades).",
            },
          ],
        },
        {
          id: "es-l6",
          title: "Conservation approaches",
          questions: [
            {
              id: "es-l6-q1",
              type: "mcq",
              prompt:
                "In-situ conservation means",
              choices: [
                "keeping species in zoos",
                "protecting species in their natural habitat, e.g. reserves and national parks",
                "seed banking",
                "captive breeding",
              ],
              answerIndex: 1,
              explanation:
                "On-site protection — the opposite of ex-situ (zoos, botanic gardens, seed banks).",
            },
            {
              id: "es-l6-q2",
              type: "mcq",
              prompt:
                "CITES regulates",
              choices: [
                "fishing quotas",
                "international trade in endangered species",
                "carbon emissions",
                "whaling only",
              ],
              answerIndex: 1,
              explanation:
                "Convention on International Trade in Endangered Species — permit system for listed species.",
            },
            {
              id: "es-l6-q3",
              type: "mcq",
              prompt:
                "The IUCN Red List categorises species by",
              choices: [
                "economic value",
                "threat of extinction — from Least Concern to Extinct",
                "size",
                "diet",
              ],
              answerIndex: 1,
              explanation:
                "Standard global assessment of conservation status.",
            },
            {
              id: "es-l6-q4",
              type: "tf",
              prompt:
                "Captive breeding and reintroduction programmes always succeed in restoring wild populations.",
              answer: false,
              explanation:
                "Success varies — habitat loss, learned behaviours and genetic bottlenecks are obstacles.",
            },
            {
              id: "es-l6-q5",
              type: "short",
              prompt:
                "Compare in-situ and ex-situ conservation, giving one advantage of each.",
              answer:
                "In-situ preserves whole ecosystems/adaptations; ex-situ safeguards species whose habitat is lost and enables breeding.",
              keywords: ["habitat", "ecosystem", "breed", "safe"],
              explanation:
                "Best practice combines both — e.g. reserve protection plus insurance populations.",
            },
            {
              id: "es-l6-q6",
              type: "short",
              prompt:
                "Explain the role of buffer zones around protected areas.",
              answer:
                "They limit human impact at the reserve edge, reducing edge effects and conflict with local communities.",
              keywords: ["edge", "human", "impact", "community"],
              explanation:
                "Buffer zones balance conservation with local livelihoods — biosphere reserve model.",
            },
          ],
        },
      ],
    },
    {
      id: "es-u4",
      code: "Topics 4–6",
      title: "Resources: water, soil, food and atmosphere",
      lessons: [
        {
          id: "es-l7",
          title: "Water and food systems",
          questions: [
            {
              id: "es-l7-q1",
              type: "mcq",
              prompt:
                "Eutrophication is caused by",
              choices: [
                "oil spills",
                "nutrient enrichment → algal blooms → oxygen depletion",
                "acid rain",
                "overfishing",
              ],
              answerIndex: 1,
              explanation:
                "Nitrates/phosphates (fertiliser, sewage) trigger blooms; decomposition consumes dissolved O₂.",
            },
            {
              id: "es-l7-q2",
              type: "mcq",
              prompt:
                "The Green Revolution increased yields mainly through",
              choices: [
                "organic farming",
                "high-yield varieties, fertilisers, pesticides and irrigation",
                "genetic diversity",
                "crop rotation alone",
              ],
              answerIndex: 1,
              explanation:
                "Package of inputs + HYVs multiplied output but brought water/chemical impacts.",
            },
            {
              id: "es-l7-q3",
              type: "mcq",
              prompt:
                "Overfishing illustrates",
              choices: [
                "sustainable yield",
                "the tragedy of the commons — shared resource depletion",
                "carrying capacity",
                "biomagnification",
              ],
              answerIndex: 1,
              explanation:
                "Open-access fisheries: individual incentive to catch exceeds collective sustainability.",
            },
            {
              id: "es-l7-q4",
              type: "tf",
              prompt:
                "Maximum sustainable yield is the largest harvest that can be taken without reducing the resource base.",
              answer: true,
              explanation:
                "Harvest at MSY keeps stock replenishing — hard to estimate in practice.",
            },
            {
              id: "es-l7-q5",
              type: "short",
              prompt:
                "Outline one environmental impact of intensive agriculture.",
              answer:
                "Fertiliser runoff causing eutrophication, soil erosion, or aquifer depletion from irrigation.",
              keywords: ["runoff", "eutrophication", "erosion", "irrigation", "soil"],
              explanation:
                "Any one: nutrient pollution, soil degradation, water depletion, pesticide harm.",
            },
            {
              id: "es-l7-q6",
              type: "short",
              prompt:
                "Give two strategies for making food production more sustainable.",
              answer:
                "Precision/organic farming and reducing food waste (or integrated pest management, aquaculture).",
              keywords: ["organic", "waste", "precision", "integrated", "soil"],
              explanation:
                "Improve input efficiency, cut waste, protect soil/water.",
            },
          ],
        },
        {
          id: "es-l8",
          title: "Atmosphere and soil",
          questions: [
            {
              id: "es-l8-q1",
              type: "mcq",
              prompt:
                "Ozone depletion is caused primarily by",
              choices: [
                "CO₂",
                "CFCs breaking down stratospheric ozone",
                "methane",
                "smoke",
              ],
              answerIndex: 1,
              explanation:
                "CFC photolysis releases chlorine radicals that destroy O₃ — addressed by the Montreal Protocol.",
            },
            {
              id: "es-l8-q2",
              type: "mcq",
              prompt:
                "The Montreal Protocol (1987) is considered successful because",
              choices: [
                "it banned all emissions",
                "it phased out ozone-depleting substances worldwide with measurable recovery",
                "it solved climate change",
                "it only applied to Europe",
              ],
              answerIndex: 1,
              explanation:
                "Universal ratification; stratospheric chlorine declining, ozone layer healing.",
            },
            {
              id: "es-l8-q3",
              type: "mcq",
              prompt:
                "Soil degradation from intensive farming includes",
              choices: [
                "only salinisation",
                "erosion, salinisation and loss of organic matter",
                "improved fertility",
                "increased biodiversity",
              ],
              answerIndex: 1,
              explanation:
                "Over-cultivation, over-irrigation and deforestation drive multiple degradation pathways.",
            },
            {
              id: "es-l8-q4",
              type: "tf",
              prompt:
                "Photochemical smog forms when sunlight acts on vehicle exhaust emissions in urban areas.",
              answer: true,
              explanation:
                "NOx + VOCs + sunlight → ground-level ozone and other irritants.",
            },
            {
              id: "es-l8-q5",
              type: "short",
              prompt:
                "Describe one way soil salinisation occurs in irrigated agriculture.",
              answer:
                "Irrigation water evaporates leaving salts behind, which accumulate to toxic levels.",
              keywords: ["salt", "evaporat", "irrigat", "accumul"],
              explanation:
                "Poor drainage + evaporation → salinity rises → yields collapse (e.g. Aral basin).",
            },
            {
              id: "es-l8-q6",
              type: "short",
              prompt:
                "Name two strategies for conserving soil.",
              answer:
                "Contour ploughing/terracing and cover crops or crop rotation.",
              keywords: ["terrac", "contour", "cover", "rotation", "windbreak"],
              explanation:
                "Any two: terracing, windbreaks, cover crops, no-till, rotation, organic matter.",
            },
          ],
        },
      ],
    },
    {
      id: "es-u5",
      code: "Topics 7–8 + HL",
      title: "Climate, human populations and HL lenses",
      lessons: [
        {
          id: "es-l9",
          title: "Climate change and urban systems",
          questions: [
            {
              id: "es-l9-q1",
              type: "mcq",
              prompt:
                "The enhanced greenhouse effect is driven mainly by",
              choices: [
                "ozone",
                "increased CO₂, methane and other GHGs trapping more longwave radiation",
                "solar flares",
                "volcanic ash",
              ],
              answerIndex: 1,
              explanation:
                "Fossil fuels, agriculture and land-use change raise GHG concentrations beyond natural variation.",
            },
            {
              id: "es-l9-q2",
              type: "mcq",
              prompt:
                "Mitigation of climate change means",
              choices: [
                "building sea walls",
                "reducing emissions or enhancing sinks to limit warming",
                "moving cities",
                "accepting change",
              ],
              answerIndex: 1,
              explanation:
                "Mitigation tackles causes; adaptation copes with impacts.",
            },
            {
              id: "es-l9-q3",
              type: "mcq",
              prompt:
                "Urban 'ecological footprints' are typically large because",
              choices: [
                "cities are self-sufficient",
                "urban populations import resources and export waste far beyond city limits",
                "people walk more",
                "density is low",
              ],
              answerIndex: 1,
              explanation:
                "Cities concentrate consumption; footprint measures land/water needed to sustain it.",
            },
            {
              id: "es-l9-q4",
              type: "tf",
              prompt:
                "The urban heat island effect describes cities being cooler than surrounding countryside.",
              answer: false,
              explanation:
                "Cities are WARMER — dark surfaces, waste heat and reduced evapotranspiration.",
            },
            {
              id: "es-l9-q5",
              type: "short",
              prompt:
                "Give one example of climate change adaptation.",
              answer:
                "Flood defences, drought-resistant crops, early-warning systems.",
              keywords: ["flood", "drought", "defence", "crop", "warn"],
              explanation:
                "Adaptation = adjusting to effects already occurring.",
            },
            {
              id: "es-l9-q6",
              type: "short",
              prompt:
                "Explain one reason low-income countries are more vulnerable to climate impacts.",
              answer:
                "Less adaptive capacity — limited infrastructure, finance and governance, plus greater dependence on climate-sensitive agriculture.",
              keywords: ["adaptive", "capacity", "infrastructure", "agricultur", "finance"],
              explanation:
                "Vulnerability = exposure × sensitivity ÷ adaptive capacity.",
            },
          ],
        },
        {
          id: "es-l10",
          title: "HL lens: environmental law and economics",
          level: "HL",
          questions: [
            {
              id: "es-l10-q1",
              type: "mcq",
              prompt:
                "Command-and-control regulation works by",
              choices: [
                "setting prices",
                "setting legal limits/standards enforced by penalties",
                "voluntary agreements",
                "tradable markets",
              ],
              answerIndex: 1,
              explanation:
                "Direct rules (emission limits, bans) vs market-based instruments.",
            },
            {
              id: "es-l10-q2",
              type: "mcq",
              prompt:
                "A Pigouvian (green) tax internalises",
              choices: [
                "profits",
                "external costs so polluters pay the true social cost",
                "wages",
                "subsidies",
              ],
              answerIndex: 1,
              explanation:
                "Tax = external cost → private incentives align with social optimum.",
            },
            {
              id: "es-l10-q3",
              type: "mcq",
              prompt:
                "Natural capital valuation attempts to",
              choices: [
                "replace nature",
                "assign monetary value to ecosystem services so decisions account for them",
                "remove all markets",
                "price labour",
              ],
              answerIndex: 1,
              explanation:
                "Controversial: makes services visible to economics but can commodify the intrinsic.",
            },
            {
              id: "es-l10-q4",
              type: "tf",
              prompt:
                "Tradable pollution permits create a market incentive to cut emissions at lowest cost.",
              answer: true,
              explanation:
                "Cap-and-trade: firms with cheap abatement sell permits to those with expensive abatement.",
            },
            {
              id: "es-l10-q5",
              type: "short",
              prompt:
                "Contrast a green tax with a pollution permit scheme.",
              answer:
                "Tax fixes the price of pollution; permits fix the quantity and let price emerge.",
              keywords: ["price", "quantity", "tax", "permit"],
              explanation:
                "Price instrument vs quantity instrument — different uncertainties.",
            },
            {
              id: "es-l10-q6",
              type: "short",
              prompt:
                "Give one limitation of international environmental agreements.",
              answer:
                "Enforcement is weak — compliance relies on national commitment, and free-riding tempts non-signatories.",
              keywords: ["enforc", "free", "rider", "commitment", "voluntary"],
              explanation:
                "No world government; success depends on political will (cf. Montreal vs Kyoto).",
            },
          ],
        },
        {
          id: "es-l11",
          title: "HL lens: environmental ethics and worldviews",
          level: "HL",
          questions: [
            {
              id: "es-l11-q1",
              type: "mcq",
              prompt:
                "The precautionary principle states that",
              choices: [
                "act only with full proof",
                "lack of complete evidence should not delay action against serious/irreversible harm",
                "never regulate",
                "economics comes first",
              ],
              answerIndex: 1,
              explanation:
                "Burden of proof shifts to those proposing potentially harmful change.",
            },
            {
              id: "es-l11-q2",
              type: "mcq",
              prompt:
                "Environmental justice concerns",
              choices: [
                "laws for animals",
                "the fair distribution of environmental costs and benefits across people",
                "wildlife crime",
                "carbon pricing",
              ],
              answerIndex: 1,
              explanation:
                "Marginalised communities often bear disproportionate pollution and risk.",
            },
            {
              id: "es-l11-q3",
              type: "mcq",
              prompt:
                "Intergenerational equity argues",
              choices: [
                "current generation should maximise consumption",
                "future generations have a claim on a viable environment",
                "only present costs matter",
                "history is irrelevant",
              ],
              answerIndex: 1,
              explanation:
                "The ethical basis of sustainability — obligations to people not yet born.",
            },
            {
              id: "es-l11-q4",
              type: "tf",
              prompt:
                "Ecofeminism links the domination of nature with the domination of women.",
              answer: true,
              explanation:
                "It argues shared logics of exploitation underlie both environmental and gender oppression.",
            },
            {
              id: "es-l11-q5",
              type: "short",
              prompt:
                "Apply the precautionary principle to approving a new pesticide.",
              answer:
                "Restrict/ban until shown safe, rather than wait for proven harm.",
              keywords: ["safe", "proof", "harm", "restrict", "burden"],
              explanation:
                "The producer must demonstrate safety before widespread release.",
            },
            {
              id: "es-l11-q6",
              type: "short",
              prompt:
                "Give one example of an environmental justice issue.",
              answer:
                "Polluting facilities or waste sites concentrated in low-income/minority neighbourhoods.",
              keywords: ["pollut", "low-income", "minority", "community"],
              explanation:
                "Unequal exposure — e.g. toxic waste siting, lead contamination, air pollution.",
            },
          ],
        },
        {
          id: "es-l12",
          title: "HL lenses in practice: climate policy",
          level: "HL",
          questions: [
            {
              id: "es-l12-q1",
              type: "mcq",
              prompt:
                "Evaluating a national carbon tax through all three HL lenses would consider",
              choices: [
                "only its revenue",
                "its legal design, economic efficiency and ethical fairness",
                "only emission cuts",
                "only public opinion",
              ],
              answerIndex: 1,
              explanation:
                "HL expects integrated evaluation: law (how it's enforced), economics (efficiency/incidence), ethics (equity).",
            },
            {
              id: "es-l12-q2",
              type: "mcq",
              prompt:
                "The 'common but differentiated responsibilities' principle acknowledges that",
              choices: [
                "all countries pollute equally",
                "developed nations bear greater responsibility due to historic emissions and capacity",
                "poor countries should act first",
                "responsibility is equal per capita always",
              ],
              answerIndex: 1,
              explanation:
                "An equity principle in climate law — wealthier nations cut first and fund adaptation.",
            },
            {
              id: "es-l12-q3",
              type: "mcq",
              prompt:
                "Loss-and-damage funding in climate negotiations addresses",
              choices: [
                "trade deficits",
                "compensation for irreversible climate impacts in vulnerable countries",
                "military costs",
                "fossil subsidies",
              ],
              answerIndex: 1,
              explanation:
                "Ethical/economic mechanism for harms adaptation can't prevent — agreed at COP27.",
            },
            {
              id: "es-l12-q4",
              type: "tf",
              prompt:
                "Discounting in environmental economics tends to undervalue benefits that occur far in the future.",
              answer: true,
              explanation:
                "High discount rates shrink future climate damages in present terms — a key ethical debate.",
            },
            {
              id: "es-l12-q5",
              type: "short",
              prompt:
                "Evaluate one strength of cap-and-trade over regulation using economic reasoning.",
              answer:
                "It finds the cheapest abatement across the market — firms reduce where it costs least, lowering total compliance cost.",
              keywords: ["cost", "cheap", "market", "abatement", "efficient"],
              explanation:
                "Flexibility achieves a given cap at minimum total cost — but price volatility and cap-setting are critiques.",
            },
            {
              id: "es-l12-q6",
              type: "short",
              prompt:
                "Use an ethical lens to critique relying only on cost-benefit analysis for climate policy.",
              answer:
                "CBA may undervalue future generations, non-human life and the poor — distributing harms unevenly.",
              keywords: ["future", "generation", "equity", "intrinsic", "fair"],
              explanation:
                "Aggregating welfare ignores who bears costs — an environmental-justice objection.",
            },
          ],
        },
      ],
    },
  ],
};
