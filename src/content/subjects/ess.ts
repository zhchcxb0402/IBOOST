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
        {
          id: "es-l13",
          title: "Systems diagrams and feedback loops",
          questions: [
            {
              id: "es-l13-q1",
              type: "mcq",
              prompt: "A negative feedback loop",
              choices: [
                "amplifies change",
                "counteracts change, stabilising the system",
                "destroys the system",
                "adds energy",
              ],
              answerIndex: 1,
              explanation:
                "Negative feedback = self-regulating; positive feedback amplifies.",
            },
            {
              id: "es-l13-q2",
              type: "mcq",
              prompt: "Melting ice reducing albedo, causing more warming, is",
              choices: [
                "negative feedback",
                "positive feedback",
                "equilibrium",
                "a steady state",
              ],
              answerIndex: 1,
              explanation:
                "The change reinforces itself — classic positive feedback.",
            },
            {
              id: "es-l13-q3",
              type: "tf",
              prompt:
                "An open system exchanges both matter and energy with its surroundings.",
              answer: true,
              explanation:
                "Open: matter + energy; closed: energy only; isolated: neither.",
            },
            {
              id: "es-l13-q4",
              type: "mcq",
              prompt: "In a systems diagram, 'storages' represent",
              choices: [
                "arrows",
                "quantities held within the system (e.g. carbon in biomass)",
                "inputs only",
                "outputs only",
              ],
              answerIndex: 1,
              explanation:
                "Boxes = storages; arrows = flows (inputs/outputs/transfers).",
            },
            {
              id: "es-l13-q5",
              type: "short",
              prompt:
                "A system exchanging only energy (like Earth approximately) is a ___ system.",
              answer: "closed",
              keywords: ["closed"],
              acceptable: ["closed system"],
              explanation:
                "Earth ≈ closed: energy in/out, matter mostly recycled.",
            },
            {
              id: "es-l13-q6",
              type: "short",
              prompt:
                "The tendency of a system to return to equilibrium after disturbance = ___.",
              answer: "resilience",
              keywords: ["resilien", "stability", "equilibrium"],
              acceptable: ["resilience", "stability"],
              explanation:
                "Resilience — how much disturbance a system absorbs.",
            },
          ],
        },
        {
          id: "es-l14",
          title: "Environmental value systems and sustainability indicators",
          questions: [
            {
              id: "es-l14-q1",
              type: "mcq",
              prompt: "The EVS spectrum runs from",
              choices: [
                "rich to poor",
                "ecocentric to technocentric to cornucopian",
                "left to right",
                "old to new",
              ],
              answerIndex: 1,
              explanation:
                "Ecocentric (nature-centred) → technocentric → cornucopian (growth optimism).",
            },
            {
              id: "es-l14-q2",
              type: "mcq",
              prompt: "An ecocentric worldview argues for",
              choices: [
                "technology fixes",
                "intrinsic value of nature and limits on consumption",
                "free markets",
                "more extraction",
              ],
              answerIndex: 1,
              explanation:
                "Nature has value in itself — 'deep ecology' thinking.",
            },
            {
              id: "es-l14-q3",
              type: "tf",
              prompt:
                "The ecological footprint measures the land/water area needed to support a population's consumption and absorb its waste.",
              answer: true,
              explanation:
                "Measured in global hectares — Earth overshoot if > biocapacity.",
            },
            {
              id: "es-l14-q4",
              type: "mcq",
              prompt: "The planetary boundaries framework identifies",
              choices: [
                "borders between countries",
                "safe operating limits for Earth-system processes like climate and biodiversity",
                "ocean depths",
                "land ownership",
              ],
              answerIndex: 1,
              explanation:
                "Nine boundaries — crossing them risks abrupt change.",
            },
            {
              id: "es-l14-q5",
              type: "short",
              prompt:
                "An EVS trusting technology and markets to solve problems = ___.",
              answer: "technocentric",
              keywords: ["technocent"],
              acceptable: ["technocentric", "technocentrism"],
              explanation:
                "Technocentric — optimism in human ingenuity.",
            },
            {
              id: "es-l14-q6",
              type: "short",
              prompt:
                "Unit of the ecological footprint (two words).",
              answer: "global hectares",
              keywords: ["hectare", "gha"],
              acceptable: ["hectares", "gha", "global hectare"],
              explanation:
                "Global hectares (gha) per person.",
            },
          ],
        },
        {
          id: "es-l15",
          title: "Sustainability: weak vs strong and EVS evaluation",
          questions: [
            {
              id: "es-l15-q1",
              type: "mcq",
              prompt: "'Weak' sustainability assumes",
              choices: [
                "natural capital is irreplaceable",
                "man-made capital can substitute for natural capital",
                "no growth is allowed",
                "GDP is meaningless",
              ],
              answerIndex: 1,
              explanation:
                "Weak: capital substitutable; strong: critical natural capital must be preserved.",
            },
            {
              id: "es-l15-q2",
              type: "mcq",
              prompt: "Sustainability is best defined as",
              choices: [
                "maximum growth",
                "meeting present needs without compromising future generations' ability to meet theirs",
                "recycling",
                "using solar panels",
              ],
              answerIndex: 1,
              explanation:
                "The Brundtland definition — use it in essays.",
            },
            {
              id: "es-l15-q3",
              type: "tf",
              prompt:
                "Different environmental value systems explain why stakeholders disagree about the same environmental issue.",
              answer: true,
              explanation:
                "EVS shapes perceived urgency and acceptable solutions.",
            },
            {
              id: "es-l15-q4",
              type: "mcq",
              prompt: "A cornucopian would most likely argue",
              choices: [
                "resources are running out",
                "human ingenuity and markets will find substitutes and solutions",
                "consumption must fall",
                "nature is sacred",
              ],
              answerIndex: 1,
              explanation:
                "Cornucopian = abundance through innovation — the optimistic pole.",
            },
            {
              id: "es-l15-q5",
              type: "short",
              prompt:
                "Environmental 'capital' provided free by ecosystems = natural ___.",
              answer: "capital",
              keywords: ["capital"],
              acceptable: ["capital", "natural capital"],
              explanation:
                "Natural capital — the stock yielding ecosystem services.",
            },
            {
              id: "es-l15-q6",
              type: "short",
              prompt:
                "Benefits humans get from ecosystems (clean water, pollination) = ecosystem ___.",
              answer: "services",
              keywords: ["services"],
              acceptable: ["services", "ecosystem services"],
              explanation:
                "Ecosystem services — provisioning, regulating, cultural, supporting.",
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
        {
          id: "es-l16",
          title: "Ecology calculations: Lincoln index and Simpson's diversity",
          questions: [
            {
              id: "es-l16-q1",
              type: "mcq",
              prompt: "The Lincoln index estimates population size by",
              choices: [
                "counting all organisms",
                "mark-recapture: N = (M × C) / R",
                "weighing biomass",
                "satellite images",
              ],
              answerIndex: 1,
              explanation:
                "M = marked first, C = caught second time, R = recaptured marked.",
            },
            {
              id: "es-l16-q2",
              type: "mcq",
              prompt: "Using Simpson's reciprocal index (D = N(N−1)/Σn(n−1)), a HIGH value indicates",
              choices: [
                "low diversity",
                "high diversity — no species dominates",
                "extinction",
                "a small area",
              ],
              answerIndex: 1,
              explanation:
                "Reciprocal form: larger D = more diverse (higher richness + evenness).",
            },
            {
              id: "es-l16-q3",
              type: "tf",
              prompt:
                "The Lincoln index assumes the population is closed — no births, deaths or migration between samples.",
              answer: true,
              explanation:
                "Plus marked individuals mix randomly and marks aren't lost.",
            },
            {
              id: "es-l16-q4",
              type: "mcq",
              prompt: "50 fish marked; 100 caught later; 10 were marked. Estimated N =",
              choices: ["500", "200", "150", "1100"],
              answerIndex: 0,
              explanation:
                "(50 × 100) / 10 = 500.",
            },
            {
              id: "es-l16-q5",
              type: "short",
              prompt:
                "M = 40, C = 60, R = 12. Lincoln index estimate = ___.",
              answer: "200",
              keywords: ["200"],
              acceptable: ["200"],
              explanation:
                "(40 × 60) / 12 = 200.",
            },
            {
              id: "es-l16-q6",
              type: "short",
              prompt:
                "Simpson's index measures species richness AND ___ (the other component).",
              answer: "evenness",
              keywords: ["evenness"],
              acceptable: ["evenness"],
              explanation:
                "Richness (how many species) + evenness (how equal their abundances).",
            },
          ],
        },
        {
          id: "es-l17",
          title: "Biomes, zonation and succession",
          questions: [
            {
              id: "es-l17-q1",
              type: "mcq",
              prompt: "A biome is defined mainly by",
              choices: [
                "country borders",
                "climate — temperature and precipitation shaping vegetation",
                "altitude only",
                "human use",
              ],
              answerIndex: 1,
              explanation:
                "Climate determines the characteristic plant community.",
            },
            {
              id: "es-l17-q2",
              type: "mcq",
              prompt: "Zonation refers to",
              choices: [
                "animal migration",
                "bands of communities changing across a gradient (e.g. up a shore or mountain)",
                "zoo sections",
                "soil layers",
              ],
              answerIndex: 1,
              explanation:
                "Clear zonation on rocky shores and mountain slopes.",
            },
            {
              id: "es-l17-q3",
              type: "tf",
              prompt:
                "Primary succession starts on bare rock with no soil; secondary succession starts where soil survives a disturbance.",
              answer: true,
              explanation:
                "Primary is slower — soil must form first.",
            },
            {
              id: "es-l17-q4",
              type: "mcq",
              prompt: "The final stable community of a succession is the",
              choices: [
                "pioneer community",
                "climax community",
                "seral stage",
                "plagioclimax",
              ],
              answerIndex: 1,
              explanation:
                "Climax — self-perpetuating under local conditions.",
            },
            {
              id: "es-l17-q5",
              type: "short",
              prompt:
                "First colonisers of bare rock (e.g. lichens) = ___ species.",
              answer: "pioneer",
              keywords: ["pioneer"],
              acceptable: ["pioneer species"],
              explanation:
                "Pioneers modify conditions for later species.",
            },
            {
              id: "es-l17-q6",
              type: "short",
              prompt:
                "The biome at high latitudes with permafrost and no trees = the ___.",
              answer: "tundra",
              keywords: ["tundra"],
              acceptable: ["tundra"],
              explanation:
                "Tundra — treeless, frozen subsoil.",
            },
          ],
        },
        {
          id: "es-l18",
          title: "Energy flow, productivity and nutrient cycles",
          questions: [
            {
              id: "es-l18-q1",
              type: "mcq",
              prompt: "Roughly what share of energy passes from one trophic level to the next?",
              choices: ["90%", "10%", "50%", "1%"],
              answerIndex: 1,
              explanation:
                "~10% — the rest is lost as heat, waste and respiration.",
            },
            {
              id: "es-l18-q2",
              type: "mcq",
              prompt: "Gross primary productivity minus respiration equals",
              choices: [
                "biomass",
                "net primary productivity",
                "decomposition",
                "standing crop",
              ],
              answerIndex: 1,
              explanation:
                "NPP = GPP − R — what's available to herbivores.",
            },
            {
              id: "es-l18-q3",
              type: "tf",
              prompt:
                "Decomposers return nutrients to the soil — essential for nutrient cycling.",
              answer: true,
              explanation:
                "Bacteria and fungi close the loop.",
            },
            {
              id: "es-l18-q4",
              type: "mcq",
              prompt: "A pyramid of energy is always upright because",
              choices: [
                "of gravity",
                "energy is lost at each transfer — it can't be recycled",
                "producers are large",
                "carnivores are few",
              ],
              answerIndex: 1,
              explanation:
                "Energy flows one way; unlike nutrients it isn't recycled.",
            },
            {
              id: "es-l18-q5",
              type: "short",
              prompt:
                "Organisms breaking down dead matter = ___.",
              answer: "decomposers",
              keywords: ["decomposer", "saprotroph"],
              acceptable: ["decomposers", "saprotrophs", "detritivores"],
              explanation:
                "Decomposers/detritivores drive nutrient cycling.",
            },
            {
              id: "es-l18-q6",
              type: "short",
              prompt:
                "The process converting atmospheric N₂ to ammonia by bacteria = nitrogen ___.",
              answer: "fixation",
              keywords: ["fixation"],
              acceptable: ["fixation", "nitrogen fixation"],
              explanation:
                "Nitrogen fixation — makes N available to plants.",
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
        {
          id: "es-l19",
          title: "Biodiversity hotspots and conservation strategies",
          questions: [
            {
              id: "es-l19-q1",
              type: "mcq",
              prompt: "A biodiversity hotspot must have",
              choices: [
                "many tourists",
                "exceptional endemism AND severe habitat loss",
                "cold climate",
                "large area",
              ],
              answerIndex: 1,
              explanation:
                "≥1,500 endemic plant species + ≥70% habitat lost (Myers' criteria).",
            },
            {
              id: "es-l19-q2",
              type: "mcq",
              prompt: "In-situ conservation means",
              choices: [
                "zoos",
                "protecting species in their natural habitat (reserves, parks)",
                "seed banks",
                "botanic gardens",
              ],
              answerIndex: 1,
              explanation:
                "In-situ = on site; ex-situ = off site (zoos, seed banks).",
            },
            {
              id: "es-l19-q3",
              type: "tf",
              prompt:
                "CITES regulates international trade in endangered species through permits.",
              answer: true,
              explanation:
                "Convention on International Trade in Endangered Species.",
            },
            {
              id: "es-l19-q4",
              type: "mcq",
              prompt: "Endemic species are those",
              choices: [
                "found everywhere",
                "found naturally in only one place",
                "that migrate",
                "that are invasive",
              ],
              answerIndex: 1,
              explanation:
                "Endemics are extinction-vulnerable — small ranges.",
            },
            {
              id: "es-l19-q5",
              type: "short",
              prompt:
                "Conservation outside the natural habitat (zoos, seed banks) = ___-situ.",
              answer: "ex",
              keywords: ["ex", "ex-situ", "exsitu"],
              acceptable: ["ex-situ", "ex situ", "exsitu"],
              explanation:
                "Ex-situ conservation.",
            },
            {
              id: "es-l19-q6",
              type: "short",
              prompt:
                "The IUCN list categorising species' extinction risk = the ___ List.",
              answer: "Red",
              keywords: ["red"],
              acceptable: ["Red List", "red"],
              explanation:
                "The IUCN Red List — least concern → extinct.",
            },
          ],
        },
        {
          id: "es-l20",
          title: "Threats to biodiversity and case evaluation",
          questions: [
            {
              id: "es-l20-q1",
              type: "mcq",
              prompt: "The acronym HIPPO summarises biodiversity threats — 'H' stands for",
              choices: [
                "hunting",
                "habitat loss",
                "heat",
                "herbicides",
              ],
              answerIndex: 1,
              explanation:
                "Habitat loss, Invasives, Pollution, Population (human), Overharvesting.",
            },
            {
              id: "es-l20-q2",
              type: "mcq",
              prompt: "Invasive alien species harm ecosystems because they",
              choices: [
                "are always large",
                "lack natural predators and outcompete natives",
                "are rare",
                "improve soil",
              ],
              answerIndex: 1,
              explanation:
                "e.g. cane toads, zebra mussels — released from natural controls.",
            },
            {
              id: "es-l20-q3",
              type: "tf",
              prompt:
                "Habitat fragmentation reduces population viability through edge effects and isolation.",
              answer: true,
              explanation:
                "Small isolated patches lose species over time.",
            },
            {
              id: "es-l20-q4",
              type: "mcq",
              prompt: "Evaluating conservation: protected areas work best when",
              choices: [
                "locals are excluded entirely",
                "they're large, connected and supported by local communities",
                "fenced",
                "small",
              ],
              answerIndex: 1,
              explanation:
                "Size + connectivity + community buy-in = effectiveness.",
            },
            {
              id: "es-l20-q5",
              type: "short",
              prompt:
                "The current extinction event driven by humans is often called the ___ mass extinction.",
              answer: "sixth",
              keywords: ["sixth", "6th", "anthropocene"],
              acceptable: ["6th", "Holocene", "Anthropocene"],
              explanation:
                "The sixth (Anthropocene/Holocene) extinction.",
            },
            {
              id: "es-l20-q6",
              type: "short",
              prompt:
                "A species critical to ecosystem function disproportionate to its abundance = a ___ species.",
              answer: "keystone",
              keywords: ["keystone"],
              acceptable: ["keystone species"],
              explanation:
                "e.g. sea otters, wolves — remove them and the system shifts.",
            },
          ],
        },
        {
          id: "es-l21",
          title: "Species, extinction and conservation case practice",
          questions: [
            {
              id: "es-l21-q1",
              type: "mcq",
              prompt: "Small populations are especially vulnerable because",
              choices: [
                "they grow faster",
                "genetic diversity falls and random events can wipe them out",
                "they migrate",
                "they eat less",
              ],
              answerIndex: 1,
              explanation:
                "Minimum viable population + inbreeding depression.",
            },
            {
              id: "es-l21-q2",
              type: "mcq",
              prompt: "Captive breeding and reintroduction is an example of",
              choices: [
                "in-situ conservation",
                "ex-situ conservation with a return to the wild",
                "eradication",
                "hunting",
              ],
              answerIndex: 1,
              explanation:
                "e.g. California condor, Arabian oryx programmes.",
            },
            {
              id: "es-l21-q3",
              type: "tf",
              prompt:
                "Flagship species (e.g. pandas) can raise funds that also protect whole habitats.",
              answer: true,
              explanation:
                "Umbrella effect — charismatic species carry others.",
            },
            {
              id: "es-l21-q4",
              type: "mcq",
              prompt: "A limitation of ex-situ conservation is",
              choices: [
                "it's too cheap",
                "animals may lose wild behaviours and genetic diversity in captivity",
                "it's always successful",
                "it uses too much land",
              ],
              answerIndex: 1,
              explanation:
                "Captive populations can domesticise; reintroduction often fails.",
            },
            {
              id: "es-l21-q5",
              type: "short",
              prompt:
                "Corridors linking reserves help by maintaining gene ___.",
              answer: "flow",
              keywords: ["flow"],
              acceptable: ["flow", "gene flow"],
              explanation:
                "Gene flow counters isolation effects.",
            },
            {
              id: "es-l21-q6",
              type: "short",
              prompt:
                "The UN convention protecting biodiversity globally (abbrev, 3 letters).",
              answer: "CBD",
              keywords: ["cbd"],
              acceptable: ["CBD"],
              explanation:
                "Convention on Biological Diversity (1992 Rio).",
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
        {
          id: "es-l22",
          title: "Water pollution: BOD and eutrophication",
          questions: [
            {
              id: "es-l22-q1",
              type: "mcq",
              prompt: "Biochemical oxygen demand (BOD) measures",
              choices: [
                "water temperature",
                "the oxygen decomposers consume breaking down organic matter — a pollution indicator",
                "fish numbers",
                "pH",
              ],
              answerIndex: 1,
              explanation:
                "High BOD = lots of organic pollution → low dissolved oxygen.",
            },
            {
              id: "es-l22-q2",
              type: "mcq",
              prompt: "Eutrophication is driven by",
              choices: [
                "heavy metals",
                "excess nitrates and phosphates causing algal blooms",
                "plastic",
                "noise",
              ],
              answerIndex: 1,
              explanation:
                "Nutrient runoff → bloom → decomposition → hypoxia.",
            },
            {
              id: "es-l22-q3",
              type: "tf",
              prompt:
                "When an algal bloom dies, decomposer respiration can strip oxygen and create 'dead zones'.",
              answer: true,
              explanation:
                "Hypoxia kills fish — e.g. the Gulf of Mexico dead zone.",
            },
            {
              id: "es-l22-q4",
              type: "mcq",
              prompt: "Sewage treatment's primary stage removes",
              choices: [
                "pathogens",
                "solids by screening and settlement",
                "nitrates",
                "dissolved organics",
              ],
              answerIndex: 1,
              explanation:
                "Primary = physical; secondary = biological; tertiary = nutrient/disinfection.",
            },
            {
              id: "es-l22-q5",
              type: "short",
              prompt:
                "Water with very low dissolved oxygen, deadly to aquatic life, is called ___.",
              answer: "hypoxic",
              keywords: ["hypox", "anoxic"],
              acceptable: ["hypoxic", "anoxic"],
              explanation:
                "Hypoxic/anoxic conditions follow eutrophication.",
            },
            {
              id: "es-l22-q6",
              type: "short",
              prompt:
                "Unit BOD is measured in (mg of O₂ per ___).",
              answer: "litre",
              keywords: ["litre", "liter", "l"],
              acceptable: ["liter", "per litre", "mg/l", "mg/L"],
              explanation:
                "BOD in mg O₂ per litre of water.",
            },
          ],
        },
        {
          id: "es-l23",
          title: "Soil degradation and food systems",
          questions: [
            {
              id: "es-l23-q1",
              type: "mcq",
              prompt: "Soil degradation processes include",
              choices: [
                "only erosion",
                "erosion, salinisation, nutrient depletion and desertification",
                "photosynthesis",
                "evaporation",
              ],
              answerIndex: 1,
              explanation:
                "Multiple pathways degrade the thin soil resource.",
            },
            {
              id: "es-l23-q2",
              type: "mcq",
              prompt: "Salinisation often results from",
              choices: [
                "rainfall",
                "irrigation evaporating and leaving salts behind",
                "shade",
                "freezing",
              ],
              answerIndex: 1,
              explanation:
                "A classic problem of irrigated arid agriculture.",
            },
            {
              id: "es-l23-q3",
              type: "tf",
              prompt:
                "Terrestrial farming systems can be compared by sustainability — commercial vs subsistence, intensive vs extensive.",
              answer: true,
              explanation:
                "Input intensity vs land area — different footprints.",
            },
            {
              id: "es-l23-q4",
              type: "mcq",
              prompt: "Strategies improving soil sustainability include",
              choices: [
                "mono-cropping",
                "contour ploughing, terracing, crop rotation and reduced tillage",
                "more irrigation",
                "removing hedges",
              ],
              answerIndex: 1,
              explanation:
                "Conservation agriculture protects structure and nutrients.",
            },
            {
              id: "es-l23-q5",
              type: "short",
              prompt:
                "The layer of soil richest in organic matter = the ___ horizon.",
              answer: "A",
              keywords: ["a", "topsoil"],
              acceptable: ["A horizon", "topsoil", "O"],
              explanation:
                "Topsoil (A horizon) holds most organic matter.",
            },
            {
              id: "es-l23-q6",
              type: "short",
              prompt:
                "Food produced far from consumers increases 'food ___' (a footprint concept).",
              answer: "miles",
              keywords: ["miles"],
              acceptable: ["miles", "food miles"],
              explanation:
                "Food miles — transport emissions per meal.",
            },
          ],
        },
        {
          id: "es-l24",
          title: "Atmosphere, ozone and air pollution",
          questions: [
            {
              id: "es-l24-q1",
              type: "mcq",
              prompt: "Stratospheric ozone is important because it",
              choices: [
                "warms the planet",
                "absorbs harmful UV-B radiation",
                "causes smog",
                "traps heat",
              ],
              answerIndex: 1,
              explanation:
                "The ozone layer shields life from UV — CFCs thinned it.",
            },
            {
              id: "es-l24-q2",
              type: "mcq",
              prompt: "The Montreal Protocol (1987) phased out",
              choices: [
                "CO₂",
                "ozone-depleting substances like CFCs",
                "pesticides",
                "plastics",
              ],
              answerIndex: 1,
              explanation:
                "Often called the most successful environmental treaty.",
            },
            {
              id: "es-l24-q3",
              type: "tf",
              prompt:
                "Photochemical smog forms when vehicle NOx and VOCs react in sunlight.",
              answer: true,
              explanation:
                "Ground-level ozone — harmful, unlike stratospheric ozone.",
            },
            {
              id: "es-l24-q4",
              type: "mcq",
              prompt: "Acid deposition is caused mainly by",
              choices: [
                "CO₂",
                "sulfur dioxide and nitrogen oxides forming acids",
                "methane",
                "dust",
              ],
              answerIndex: 1,
              explanation:
                "SO₂ + NOx → sulfuric/nitric acids — damages lakes and forests.",
            },
            {
              id: "es-l24-q5",
              type: "short",
              prompt:
                "Tropospheric ozone near ground level is a ___(pollutant type, one word).",
              answer: "pollutant",
              keywords: ["pollutant", "secondary", "smog"],
              acceptable: ["secondary pollutant", "pollutant"],
              explanation:
                "Ground-level ozone is a secondary pollutant of smog.",
            },
            {
              id: "es-l24-q6",
              type: "short",
              prompt:
                "The hole in the ozone layer is worst over ___.",
              answer: "Antarctica",
              keywords: ["antarct"],
              acceptable: ["Antarctica", "the Antarctic"],
              explanation:
                "Polar stratospheric clouds drive severe depletion.",
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
        {
          id: "es-l25",
          title: "Climate responses, populations and urban systems",
          questions: [
            {
              id: "es-l25-q1",
              type: "mcq",
              prompt: "Mitigation vs adaptation: building sea walls is",
              choices: ["mitigation", "adaptation", "geoengineering", "prevention"],
              answerIndex: 1,
              explanation:
                "Adaptation copes with impacts; mitigation tackles causes (emissions).",
            },
            {
              id: "es-l25-q2",
              type: "mcq",
              prompt: "A population pyramid with a wide base and narrow top indicates",
              choices: [
                "an ageing population",
                "high birth rates and rapid growth",
                "decline",
                "stable population",
              ],
              answerIndex: 1,
              explanation:
                "Wide base = many young people — stage 2/early 3 of the DTM.",
            },
            {
              id: "es-l25-q3",
              type: "tf",
              prompt:
                "In the demographic transition model, stage 4 has low birth and death rates and slow/stable growth.",
              answer: true,
              explanation:
                "DTM: high fluctuating → rapid growth → slowing → low/stable.",
            },
            {
              id: "es-l25-q4",
              type: "mcq",
              prompt: "A circular economy aims to",
              choices: [
                "increase waste",
                "keep materials in use through reuse, repair and recycling, eliminating waste",
                "burn landfill",
                "export pollution",
              ],
              answerIndex: 1,
              explanation:
                "Closed loops vs the linear take-make-dispose model.",
            },
            {
              id: "es-l25-q5",
              type: "short",
              prompt:
                "Removing CO₂ directly or reflecting sunlight to cool the planet = ___.",
              answer: "geoengineering",
              keywords: ["geoengineer"],
              acceptable: ["geoengineering"],
              explanation:
                "Geoengineering — controversial mitigation/adaptation hybrid.",
            },
            {
              id: "es-l25-q6",
              type: "short",
              prompt:
                "Cities designed around resource efficiency and green space are called ___ cities (or eco-cities).",
              answer: "sustainable",
              keywords: ["sustainab", "eco", "green"],
              acceptable: ["sustainable", "eco-cities", "smart"],
              explanation:
                "Sustainable/eco/smart cities reduce urban footprints.",
            },
          ],
        },
      ],
    },
  ],
};
