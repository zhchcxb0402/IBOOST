import type { Subject } from "../types";

export const economics: Subject = {
  slug: "economics",
  name: "Economics",
  short: "Econ",
  color: "#16A34A",
  emoji: "📈",
  group: "Individuals and societies",
  levels: ["SL", "HL"],
  description:
    "Scarcity, markets and intervention; the macroeconomy and policy; the global economy and real-world issues.",
  resources: [
    {
      name: "IB Official",
      url: "https://www.ibo.org/programmes/diploma-programme/curriculum/individuals-and-societies/",
      note: "Subject brief and syllabus outline",
    },
    {
      name: "RevisionDojo",
      url: "https://www.revisiondojo.com/",
      note: "Topic questions with worked solutions",
    },
    {
      name: "InThinking",
      url: "https://www.thinkib.net/economics",
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
      id: "ec-u1",
      code: "Unit 1",
      title: "Introduction to economics",
      lessons: [
        {
          id: "ec-l1",
          title: "Scarcity and opportunity cost",
          questions: [
            {
              id: "ec-l1-q1",
              type: "mcq",
              prompt:
                "Economics is fundamentally the study of",
              choices: [
                "how to make money",
                "choices made under scarcity",
                "government budgets",
                "stock markets",
              ],
              answerIndex: 1,
              explanation:
                "Unlimited wants vs limited resources forces choice — the core economic problem.",
            },
            {
              id: "ec-l1-q2",
              type: "mcq",
              prompt:
                "The opportunity cost of building a new school is",
              choices: [
                "its price in dollars",
                "the interest on the loan",
                "the next-best alternative forgone",
                "the land it sits on",
              ],
              answerIndex: 2,
              explanation:
                "Cost in economics = what you give up, not just the money spent.",
            },
            {
              id: "ec-l1-q3",
              type: "mcq",
              prompt:
                "A point inside a production possibilities curve indicates",
              choices: [
                "unattainable output",
                "efficient use of resources",
                "unemployed or underused resources",
                "maximum growth",
              ],
              answerIndex: 2,
              explanation:
                "Inside the PPC = resources idle/inefficient; on the curve = productively efficient.",
            },
            {
              id: "ec-l1-q4",
              type: "tf",
              prompt:
                "A free good, like air, has an opportunity cost of zero.",
              answer: true,
              explanation:
                "No sacrifice is required to consume it — it isn't scarce.",
            },
            {
              id: "ec-l1-q5",
              type: "short",
              prompt:
                "List the four factors of production.",
              answer: "Land, labour, capital, entrepreneurship",
              acceptable: ["land labor capital enterprise"],
              keywords: ["land", "labour", "capital", "entrepren"],
              explanation:
                "Land, labour, capital and entrepreneurship (management/enterprise).",
            },
            {
              id: "ec-l1-q6",
              type: "short",
              prompt:
                "Explain the difference between a positive and a normative statement, with one example of each.",
              answer:
                "Positive is testable/factual ('a tax raises prices'); normative is a value judgement ('the tax is unfair').",
              keywords: ["test", "fact", "judg", "opinion", "value"],
              explanation:
                "Positive = what is/can be verified; normative = what ought to be.",
            },
          ],
        },
        {
          id: "ec-l2",
          title: "Economic systems and the nine concepts",
          questions: [
            {
              id: "ec-l1b-q1",
              type: "mcq",
              prompt:
                "In a free market economy, resources are allocated mainly by",
              choices: [
                "central planners",
                "tradition",
                "the price mechanism",
                "rationing",
              ],
              answerIndex: 2,
              explanation:
                "Prices signal, incentivise and ration — no central direction needed.",
            },
            {
              id: "ec-l1b-q2",
              type: "mcq",
              prompt:
                "Which of the following is one of the IB's nine key economic concepts?",
              choices: [
                "Profit maximisation",
                "Interdependence",
                "Diminishing marginal product",
                "Comparative statics",
              ],
              answerIndex: 1,
              explanation:
                "The nine: scarcity, choice, efficiency, equity, economic well-being, sustainability, change, interdependence, intervention.",
            },
            {
              id: "ec-l1b-q3",
              type: "mcq",
              prompt:
                "A mixed economy combines",
              choices: [
                "only private firms",
                "market allocation with government intervention",
                "two countries' markets",
                "barter and money",
              ],
              answerIndex: 1,
              explanation:
                "Private sector + state provision/regulation — the real-world norm.",
            },
            {
              id: "ec-l1b-q4",
              type: "tf",
              prompt:
                "Sustainability, as a key IB concept, concerns meeting present needs without compromising future generations.",
              answer: true,
              explanation:
                "That is exactly the sustainability concept (Brundtland-style definition).",
            },
            {
              id: "ec-l1b-q5",
              type: "short",
              prompt:
                "Name the three basic questions every economic system must answer.",
              answer: "What to produce, how to produce, and for whom to produce.",
              keywords: ["what", "how", "whom"],
              explanation:
                "Allocation questions: what/how/for whom — answered by markets, planning or both.",
            },
            {
              id: "ec-l1b-q6",
              type: "short",
              prompt:
                "Using the concept of interdependence, explain one way a tax on petrol in one country can affect other economies.",
              answer:
                "It raises transport costs, affecting trade partners' import prices and production costs.",
              keywords: ["trade", "cost", "partner", "export", "import"],
              explanation:
                "Interdependence: economies are linked via trade and prices; policy spills across borders.",
            },
          ],
        },
      ],
    },
    {
      id: "ec-u2",
      code: "Unit 2",
      title: "Microeconomics",
      lessons: [
        {
          id: "ec-l3",
          title: "Demand and supply",
          questions: [
            {
              id: "ec-l3-q1",
              type: "mcq",
              prompt:
                "A rise in the price of coffee, ceteris paribus, causes",
              choices: [
                "a shift of the demand curve right",
                "a movement up along the demand curve (contraction)",
                "a shift of the supply curve left",
                "increased demand",
              ],
              answerIndex: 1,
              explanation:
                "Own-price change → movement along the curve; other determinants shift it.",
            },
            {
              id: "ec-l3-q2",
              type: "mcq",
              prompt:
                "A subsidy to producers shifts the",
              choices: [
                "demand curve right",
                "supply curve left",
                "supply curve right",
                "demand curve left",
              ],
              answerIndex: 2,
              explanation:
                "Lower production cost → supply increases (shifts down/right).",
            },
            {
              id: "ec-l3-q3",
              type: "mcq",
              prompt:
                "A price ceiling set below equilibrium leads to",
              choices: [
                "a surplus",
                "a shortage",
                "equilibrium",
                "higher prices",
              ],
              answerIndex: 1,
              explanation:
                "Qd > Qs at the capped price → shortage (e.g. rent controls).",
            },
            {
              id: "ec-l3-q4",
              type: "tf",
              prompt:
                "Complementary goods have a positive cross-price elasticity of demand.",
              answer: false,
              explanation:
                "Complements have NEGATIVE XED: price of one up → demand for the other falls. Substitutes are positive.",
            },
            {
              id: "ec-l3-q5",
              type: "short",
              prompt:
                "Define consumer surplus.",
              answer:
                "The difference between what consumers are willing to pay and the price they actually pay.",
              keywords: ["willing", "pay", "price", "difference"],
              explanation:
                "Area under the demand curve above price — marginal benefit minus price.",
            },
            {
              id: "ec-l3-q6",
              type: "short",
              prompt:
                "List three non-price determinants of demand.",
              answer:
                "Income, tastes/preferences, prices of related goods, expectations, number of buyers.",
              keywords: ["income", "taste", "related", "expect", "population"],
              explanation:
                "Any three: income, tastes, prices of substitutes/complements, expectations, demographics.",
            },
          ],
        },
        {
          id: "ec-l4",
          title: "Elasticities and intervention",
          questions: [
            {
              id: "ec-l4-q1",
              type: "mcq",
              prompt:
                "If PED for a good is −0.4, demand is",
              choices: [
                "elastic",
                "inelastic",
                "unit elastic",
                "perfectly elastic",
              ],
              answerIndex: 1,
              explanation:
                "|PED| < 1 → inelastic; quantity responds less than proportionally.",
            },
            {
              id: "ec-l4-q2",
              type: "mcq",
              prompt:
                "An indirect tax on a good with inelastic demand will mostly be paid by",
              choices: [
                "producers",
                "consumers",
                "the government",
                "nobody",
              ],
              answerIndex: 1,
              explanation:
                "Inelastic demand → consumers keep buying → they bear the larger share of incidence.",
            },
            {
              id: "ec-l4-q3",
              type: "mcq",
              prompt:
                "A minimum price (price floor) above equilibrium typically causes",
              choices: [
                "shortages",
                "surpluses",
                "lower output than equilibrium always in demand",
                "black markets selling below the floor",
              ],
              answerIndex: 1,
              explanation:
                "Qs > Qd at the floor → surplus (e.g. agricultural price supports).",
            },
            {
              id: "ec-l4-q4",
              type: "tf",
              prompt:
                "If demand is price inelastic, a price rise increases total revenue.",
              answer: true,
              explanation:
                "Revenue = P×Q; the % price rise exceeds the % fall in quantity when |PED|<1.",
            },
            {
              id: "ec-l4-q5",
              type: "short",
              prompt:
                "Calculate PED if price rises 10% and quantity demanded falls 25%.",
              answer: "-2.5",
              acceptable: ["2.5", "-2.5"],
              keywords: ["2.5"],
              explanation: "PED = %ΔQd/%ΔP = −25/10 = −2.5 (elastic).",
            },
            {
              id: "ec-l4-q6",
              type: "short",
              prompt:
                "State two reasons why a government might impose an indirect tax.",
              answer:
                "To raise revenue and to reduce consumption of demerit goods.",
              keywords: ["revenue", "demerit", "consumption", "externality"],
              explanation:
                "Raise government revenue; internalise externalities/discourage harmful consumption.",
            },
          ],
        },
        {
          id: "ec-l5",
          title: "Market failure",
          questions: [
            {
              id: "ec-l5-q1",
              type: "mcq",
              prompt:
                "A negative externality of production means",
              choices: [
                "MSC > MPC; output is above the social optimum",
                "MSB > MPB",
                "the firm loses money",
                "consumers pay too much",
              ],
              answerIndex: 0,
              explanation:
                "Social cost exceeds private cost → market overproduces (e.g. pollution).",
            },
            {
              id: "ec-l5-q2",
              type: "mcq",
              prompt:
                "A public good is",
              choices: [
                "non-rivalrous and non-excludable",
                "provided by private firms",
                "always free of charge",
                "a merit good",
              ],
              answerIndex: 0,
              explanation:
                "e.g. street lighting — free-rider problem means markets underprovide it.",
            },
            {
              id: "ec-l5-q3",
              type: "mcq",
              prompt:
                "A carbon tax corrects a negative externality by",
              choices: [
                "shifting MPC up toward MSC",
                "increasing demand",
                "subsidising polluters",
                "creating a public good",
              ],
              answerIndex: 0,
              explanation:
                "Internalising the externality: private cost rises to include the external cost.",
            },
            {
              id: "ec-l5-q4",
              type: "tf",
              prompt:
                "Demerit goods are under-consumed in a free market because consumers overestimate their benefits.",
              answer: false,
              explanation:
                "Demerit goods are OVER-consumed — consumers underestimate the harm (e.g. cigarettes).",
            },
            {
              id: "ec-l5-q5",
              type: "short",
              prompt:
                "Distinguish between common access resources and public goods.",
              answer:
                "Common access resources are rivalrous but non-excludable (fish stocks); public goods are non-rivalrous and non-excludable.",
              keywords: ["rival", "exclud"],
              explanation:
                "Rivalry is the difference: one user's consumption reduces availability for common resources.",
            },
            {
              id: "ec-l5-q6",
              type: "short",
              prompt:
                "Give one example of a positive consumption externality and a policy that addresses it.",
              answer:
                "Education/vaccination; subsidy or direct provision to raise consumption toward the social optimum.",
              keywords: ["educat", "vaccin", "subsid", "provision"],
              explanation:
                "MSB > MPB → subsidy, free provision or mandatory consumption raises output to Qsocial.",
            },
          ],
        },
        {
          id: "ec-l6",
          title: "Theory of the firm and market power",
          level: "HL",
          questions: [
            {
              id: "ec-l6-q1",
              type: "mcq",
              prompt:
                "In perfect competition, firms are price takers because",
              choices: [
                "the government sets prices",
                "there are many sellers of identical products with free entry",
                "consumers have no information",
                "products are differentiated",
              ],
              answerIndex: 1,
              explanation:
                "Many small firms, homogeneous product, free entry/exit → no individual pricing power.",
            },
            {
              id: "ec-l6-q2",
              type: "mcq",
              prompt:
                "A profit-maximising firm produces where",
              choices: [
                "P = ATC",
                "TR is maximised",
                "MC = MR",
                "AR = AC",
              ],
              answerIndex: 2,
              explanation:
                "Marginal rule: produce until marginal cost equals marginal revenue.",
            },
            {
              id: "ec-l6-q3",
              type: "mcq",
              prompt:
                "A monopoly earning abnormal profit in the long run is sustained by",
              choices: [
                "perfect information",
                "barriers to entry",
                "price-taking behaviour",
                "homogeneous products",
              ],
              answerIndex: 1,
              explanation:
                "Barriers (legal, scale, brand, control of resources) keep competitors out.",
            },
            {
              id: "ec-l6-q4",
              type: "tf",
              prompt:
                "A firm making zero economic (normal) profit should shut down immediately.",
              answer: false,
              explanation:
                "Normal profit covers all opportunity costs — the firm is doing as well as its next-best option.",
            },
            {
              id: "ec-l6-q5",
              type: "short",
              prompt:
                "A firm sells 100 units at price 20 with ATC of 14. Calculate its total profit.",
              answer: "600",
              acceptable: ["$600"],
              keywords: ["600"],
              explanation: "Profit = (P − ATC) × Q = (20 − 14) × 100 = 600.",
            },
            {
              id: "ec-l6-q6",
              type: "short",
              prompt:
                "Explain why a monopolist's marginal revenue lies below its demand curve.",
              answer:
                "To sell an extra unit it must lower the price on all units, so MR gains less than the price.",
              keywords: ["price", "lower", "units", "all"],
              explanation:
                "Single-price monopolist: selling one more means cutting price on every unit → MR < AR.",
            },
          ],
        },
      ],
    },
    {
      id: "ec-u3",
      code: "Unit 3",
      title: "Macroeconomics",
      lessons: [
        {
          id: "ec-l7",
          title: "Measuring the economy: GDP, AD and AS",
          questions: [
            {
              id: "ec-l7-q1",
              type: "mcq",
              prompt:
                "GDP measures",
              choices: [
                "total wealth of a country",
                "the value of final output produced within a country in a period",
                "happiness",
                "government revenue",
              ],
              answerIndex: 1,
              explanation:
                "Gross domestic product = market value of final goods/services produced domestically.",
            },
            {
              id: "ec-l7-q2",
              type: "mcq",
              prompt:
                "Aggregate demand equals",
              choices: [
                "C + I + G + (X − M)",
                "C + S + T",
                "I + M + X",
                "G + T only",
              ],
              answerIndex: 0,
              explanation:
                "Consumption + investment + government spending + net exports.",
            },
            {
              id: "ec-l7-q3",
              type: "mcq",
              prompt:
                "The Keynesian AS curve has a horizontal section because",
              choices: [
                "prices never change",
                "spare capacity lets output rise without price pressure",
                "wages are always rising",
                "supply is infinite",
              ],
              answerIndex: 1,
              explanation:
                "With unemployed resources, AD can rise with little inflation until near full capacity.",
            },
            {
              id: "ec-l7-q4",
              type: "tf",
              prompt:
                "Real GDP accounts for changes in the price level.",
              answer: true,
              explanation:
                "Real GDP is inflation-adjusted; nominal GDP includes price changes.",
            },
            {
              id: "ec-l7-q5",
              type: "short",
              prompt:
                "Define a recession in terms of GDP.",
              answer:
                "Two consecutive quarters of negative real GDP growth.",
              keywords: ["two", "quarter", "negative", "gdp", "consecutive"],
              explanation:
                "The standard technical definition: real output falls for two quarters running.",
            },
            {
              id: "ec-l7-q6",
              type: "short",
              prompt:
                "Give two limitations of GDP per capita as a measure of living standards.",
              answer:
                "Ignores income distribution and non-market/informal activity; also leisure, environmental damage.",
              keywords: ["distribution", "informal", "leisure", "environment", "inequal"],
              explanation:
                "Any two: inequality, unpaid/shadow economy, negative externalities, composition of output.",
            },
          ],
        },
        {
          id: "ec-l8",
          title: "Fiscal and monetary policy",
          questions: [
            {
              id: "ec-l8-q1",
              type: "mcq",
              prompt:
                "Expansionary fiscal policy consists of",
              choices: [
                "higher taxes and lower spending",
                "lower interest rates",
                "higher government spending and/or lower taxes",
                "selling bonds",
              ],
              answerIndex: 2,
              explanation:
                "Injecting demand via G↑ or T↓ to close a deflationary gap.",
            },
            {
              id: "ec-l8-q2",
              type: "mcq",
              prompt:
                "An economy in an inflationary gap produces",
              choices: [
                "below potential output",
                "above potential output in the short run",
                "exactly at potential",
                "with zero unemployment",
              ],
              answerIndex: 1,
              explanation:
                "Short-run equilibrium beyond full-employment output → demand-pull inflation.",
            },
            {
              id: "ec-l8-q3",
              type: "mcq",
              prompt:
                "Raising interest rates reduces inflation mainly by",
              choices: [
                "cutting government spending",
                "reducing consumption and investment demand",
                "increasing exports",
                "lowering taxes",
              ],
              answerIndex: 1,
              explanation:
                "Costlier borrowing and higher returns to saving → AD falls → less demand-pull pressure.",
            },
            {
              id: "ec-l8-q4",
              type: "tf",
              prompt:
                "Supply-side policies aim to shift the LRAS curve to the right.",
              answer: true,
              explanation:
                "Education, infrastructure, deregulation raise productive capacity → LRAS shifts right.",
            },
            {
              id: "ec-l8-q5",
              type: "short",
              prompt:
                "Define crowding out in fiscal policy.",
              answer:
                "Government borrowing raises interest rates, reducing private investment.",
              keywords: ["interest", "investment", "borrow"],
              explanation:
                "G↑ financed by borrowing → i↑ → I↓; private spending partly offset.",
            },
            {
              id: "ec-l8-q6",
              type: "short",
              prompt:
                "Name the three main macroeconomic policy objectives most governments pursue.",
              answer:
                "Low and stable inflation, low unemployment, and economic growth.",
              keywords: ["inflation", "unemployment", "growth"],
              explanation:
                "Core objectives: price stability, full employment, sustained growth (+ external balance).",
            },
          ],
        },
        {
          id: "ec-l9",
          title: "The Keynesian multiplier and monetarist views",
          level: "HL",
          questions: [
            {
              id: "ec-l9-q1",
              type: "mcq",
              prompt:
                "If the marginal propensity to consume is 0.8, the multiplier is",
              choices: ["0.8", "1.25", "5", "8"],
              answerIndex: 2,
              explanation: "k = 1/(1 − MPC) = 1/0.2 = 5.",
            },
            {
              id: "ec-l9-q2",
              type: "mcq",
              prompt:
                "The multiplier exists because",
              choices: [
                "money is printed",
                "one person's spending becomes another's income, which is partly re-spent",
                "banks lend reserves",
                "taxes fall",
              ],
              answerIndex: 1,
              explanation:
                "Successive rounds of induced consumption amplify the initial injection.",
            },
            {
              id: "ec-l9-q3",
              type: "mcq",
              prompt:
                "In the monetarist/new classical view, expansionary fiscal policy mainly causes",
              choices: [
                "permanent real growth",
                "inflation in the long run",
                "lower interest rates",
                "higher unemployment",
              ],
              answerIndex: 1,
              explanation:
                "LRAS vertical → AD shifts raise prices not output long-run.",
            },
            {
              id: "ec-l9-q4",
              type: "tf",
              prompt:
                "A higher marginal propensity to import makes the domestic multiplier larger.",
              answer: false,
              explanation:
                "MPM is a leakage: more spending flows abroad → smaller multiplier.",
            },
            {
              id: "ec-l9-q5",
              type: "short",
              prompt:
                "MPC = 0.75 and government spending rises by 40 billion. Find the total change in national income.",
              answer: "160 billion",
              acceptable: ["160"],
              keywords: ["160"],
              explanation: "k = 1/(1−0.75) = 4; ΔY = 4 × 40 = 160 billion.",
            },
            {
              id: "ec-l9-q6",
              type: "short",
              prompt:
                "State two leakages (withdrawals) from the circular flow that shrink the multiplier.",
              answer: "Savings, taxes and imports.",
              keywords: ["sav", "tax", "import"],
              explanation:
                "S, T, M are withdrawals — each reduces re-spending of income domestically.",
            },
          ],
        },
      ],
    },
    {
      id: "ec-u4",
      code: "Unit 4",
      title: "The global economy",
      lessons: [
        {
          id: "ec-l10",
          title: "International trade and protectionism",
          questions: [
            {
              id: "ec-l10-q1",
              type: "mcq",
              prompt:
                "Comparative advantage exists when a country can produce a good at",
              choices: [
                "lower absolute cost",
                "lower opportunity cost than trading partners",
                "higher quality",
                "greater volume",
              ],
              answerIndex: 1,
              explanation:
                "Comparative ≠ absolute advantage; it's about relative opportunity cost.",
            },
            {
              id: "ec-l10-q2",
              type: "mcq",
              prompt:
                "A tariff on imports primarily",
              choices: [
                "lowers domestic prices",
                "raises the domestic price of the imported good",
                "increases exports",
                "removes quotas",
              ],
              answerIndex: 1,
              explanation:
                "Import tax → higher price → domestic consumers pay more; government gains revenue.",
            },
            {
              id: "ec-l10-q3",
              type: "mcq",
              prompt:
                "An infant-industry argument for protection claims",
              choices: [
                "old industries need bailouts",
                "new industries need temporary protection until they achieve economies of scale",
                "tariffs raise revenue",
                "dumping is always illegal",
              ],
              answerIndex: 1,
              explanation:
                "Shield young firms until they can compete internationally — in theory temporarily.",
            },
            {
              id: "ec-l10-q4",
              type: "tf",
              prompt:
                "A quota and a tariff both restrict imports, but only a tariff raises government revenue.",
              answer: true,
              explanation:
                "Quota rents go to whoever holds import rights; tariff revenue goes to government.",
            },
            {
              id: "ec-l10-q5",
              type: "short",
              prompt:
                "Define dumping and why it is considered unfair trade.",
              answer:
                "Selling exports below cost or below home price, which can destroy domestic industries.",
              keywords: ["below", "cost", "price", "export"],
              explanation:
                "Predatory pricing abroad that undermines fair competition in the importing country.",
            },
            {
              id: "ec-l10-q6",
              type: "short",
              prompt:
                "Name three types of protectionism besides tariffs.",
              answer: "Quotas, subsidies to domestic producers, administrative barriers.",
              keywords: ["quota", "subsid", "barrier", "standard", "embargo"],
              explanation:
                "Any three: quotas, subsidies, red tape/standards, embargoes, VERs.",
            },
          ],
        },
        {
          id: "ec-l11",
          title: "Exchange rates and the balance of payments",
          questions: [
            {
              id: "ec-l11-q1",
              type: "mcq",
              prompt:
                "Under a floating exchange rate, the currency's value is set by",
              choices: [
                "the central bank",
                "demand and supply for the currency",
                "the IMF",
                "gold reserves",
              ],
              answerIndex: 1,
              explanation:
                "Market forces of currency demand/supply determine the rate.",
            },
            {
              id: "ec-l11-q2",
              type: "mcq",
              prompt:
                "A depreciation of the domestic currency makes exports",
              choices: [
                "more expensive abroad",
                "cheaper abroad",
                "unchanged",
                "illegal",
              ],
              answerIndex: 1,
              explanation:
                "Foreign buyers need less of their currency per unit → export prices fall in foreign terms.",
            },
            {
              id: "ec-l11-q3",
              type: "mcq",
              prompt:
                "A current account deficit means",
              choices: [
                "imports of goods/services exceed exports",
                "the government overspends",
                "foreign reserves rise",
                "the currency appreciates",
              ],
              answerIndex: 0,
              explanation:
                "More spending flows out than in on goods, services, income and transfers.",
            },
            {
              id: "ec-l11-q4",
              type: "tf",
              prompt:
                "The balance of payments must always balance overall when the financial account is included.",
              answer: true,
              explanation:
                "Current + capital + financial accounts net to zero (plus errors/reserves).",
            },
            {
              id: "ec-l11-q5",
              type: "short",
              prompt:
                "If 1 USD buys 0.9 EUR and the USD appreciates to 0.95 EUR, calculate the percentage appreciation.",
              answer: "5.6%",
              acceptable: ["5.5", "5.56", "5.6"],
              keywords: ["5.5", "5.6"],
              explanation: "(0.95 − 0.90)/0.90 × 100 ≈ 5.6%.",
            },
            {
              id: "ec-l11-q6",
              type: "short",
              prompt:
                "Name the three main accounts within the balance of payments.",
              answer: "Current account, capital account and financial account.",
              keywords: ["current", "capital", "financial"],
              explanation:
                "Current (trade/income/transfers), capital (transfers of capital), financial (investment flows).",
            },
          ],
        },
        {
          id: "ec-l12",
          title: "Marshall-Lerner, J-curve and terms of trade",
          level: "HL",
          questions: [
            {
              id: "ec-l12-q1",
              type: "mcq",
              prompt:
                "The Marshall-Lerner condition for depreciation to improve the current account requires",
              choices: [
                "PED(exports) + PED(imports) > 1",
                "PED sum < 1",
                "zero elasticities",
                "fixed exchange rates",
              ],
              answerIndex: 0,
              explanation:
                "Sum of demand elasticities must exceed one for currency weakness to improve the balance.",
            },
            {
              id: "ec-l12-q2",
              type: "mcq",
              prompt:
                "The J-curve shows that after a depreciation, the trade balance initially",
              choices: [
                "improves immediately",
                "worsens before improving",
                "stays flat",
                "becomes a surplus forever",
              ],
              answerIndex: 1,
              explanation:
                "Contracts and inelastic demand mean volumes adjust slowly — value effects dominate first.",
            },
            {
              id: "ec-l12-q3",
              type: "mcq",
              prompt:
                "Terms of trade equals",
              choices: [
                "export volume / import volume",
                "index of export prices / index of import prices × 100",
                "exports minus imports",
                "tariffs divided by quotas",
              ],
              answerIndex: 1,
              explanation:
                "ToT = (X price index / M price index) × 100; improvement means more imports per unit of exports.",
            },
            {
              id: "ec-l12-q4",
              type: "tf",
              prompt:
                "Favourable (improving) terms of trade always improve the current account balance.",
              answer: false,
              explanation:
                "Higher export prices can reduce export volumes; the net effect depends on demand elasticities.",
            },
            {
              id: "ec-l12-q5",
              type: "short",
              prompt:
                "Explain why demand for exports and imports tends to be inelastic in the short run after a depreciation.",
              answer:
                "Contracts are fixed and habits/supply chains adjust slowly, so volumes respond little at first.",
              keywords: ["contract", "time", "adjust", "volume", "inelastic"],
              explanation:
                "Short-run stickiness → price changes dominate → J-curve dip before improvement.",
            },
            {
              id: "ec-l12-q6",
              type: "short",
              prompt:
                "A country's export price index rises from 100 to 112 while its import price index rises to 104. Calculate the new terms of trade.",
              answer: "107.7",
              acceptable: ["107.69", "108", "107.7"],
              keywords: ["107", "108"],
              explanation: "ToT = 112/104 × 100 ≈ 107.7 — an improvement.",
            },
          ],
        },
      ],
    },
    {
      id: "ec-u5",
      code: "Unit 5",
      title: "Real-world issues and development",
      lessons: [
        {
          id: "ec-l13",
          title: "Economic development and well-being",
          questions: [
            {
              id: "ec-l13-q1",
              type: "mcq",
              prompt:
                "The Human Development Index combines",
              choices: [
                "GDP only",
                "income, education and life expectancy",
                "happiness surveys",
                "trade volumes",
              ],
              answerIndex: 1,
              explanation:
                "HDI = GNI per capita + schooling + life expectancy at birth.",
            },
            {
              id: "ec-l13-q2",
              type: "mcq",
              prompt:
                "The Lorenz curve and Gini coefficient measure",
              choices: [
                "inflation",
                "income inequality",
                "growth rates",
                "trade openness",
              ],
              answerIndex: 1,
              explanation:
                "Gini 0 = perfect equality, 1 = maximum inequality.",
            },
            {
              id: "ec-l13-q3",
              type: "mcq",
              prompt:
                "Economic growth differs from economic development in that development",
              choices: [
                "is only about GDP",
                "includes improvements in living standards and welfare",
                "requires industrialisation",
                "is faster",
              ],
              answerIndex: 1,
              explanation:
                "Growth = output increase; development = broader welfare (health, education, equity).",
            },
            {
              id: "ec-l13-q4",
              type: "tf",
              prompt:
                "Microfinance targets entrepreneurs who lack access to traditional banking.",
              answer: true,
              explanation:
                "Small loans to the poor/uncollateralised borrowers to fund small enterprises.",
            },
            {
              id: "ec-l13-q5",
              type: "short",
              prompt:
                "Name two strategies for promoting economic development.",
              answer:
                "Trade liberalisation/export-led growth and improved education/health investment.",
              keywords: ["trade", "educat", "health", "aid", "infrastructure"],
              explanation:
                "Any two: export promotion, import substitution, FDI, aid, microfinance, human capital.",
            },
            {
              id: "ec-l13-q6",
              type: "short",
              prompt:
                "State one reason GDP may overstate well-being in a developing economy.",
              answer:
                "It ignores income inequality and the large informal economy is unmeasured.",
              keywords: ["informal", "inequal", "unpaid", "distribution"],
              explanation:
                "Subsistence and informal work are uncounted, and averages hide distribution.",
            },
          ],
        },
        {
          id: "ec-l14",
          title: "Equity, sustainability and intervention debates",
          questions: [
            {
              id: "ec-l14-q1",
              type: "mcq",
              prompt:
                "A progressive tax system means",
              choices: [
                "everyone pays the same rate",
                "higher earners pay a larger percentage of income",
                "only the poor pay",
                "taxes fall as income rises",
              ],
              answerIndex: 1,
              explanation:
                "Marginal/average rates rise with income → reduces inequality.",
            },
            {
              id: "ec-l14-q2",
              type: "mcq",
              prompt:
                "A tradable pollution permit scheme controls emissions by",
              choices: [
                "banning all pollution",
                "capping total emissions and letting firms trade allowances",
                "taxing consumers directly",
                "subsidising coal",
              ],
              answerIndex: 1,
              explanation:
                "Cap-and-trade fixes quantity; the market finds the cheapest abatement.",
            },
            {
              id: "ec-l14-q3",
              type: "mcq",
              prompt:
                "The strongest free-market argument against intervention is that it",
              choices: [
                "always works",
                "causes government failure — distortions, bureaucracy and unintended consequences",
                "raises taxes",
                "helps monopolies",
              ],
              answerIndex: 1,
              explanation:
                "Intervention can misallocate resources just as markets fail.",
            },
            {
              id: "ec-l14-q4",
              type: "tf",
              prompt:
                "Sustainable growth means growth that does not deplete resources needed by future generations.",
              answer: true,
              explanation:
                "Intergenerational equity — meeting present needs without compromising the future.",
            },
            {
              id: "ec-l14-q5",
              type: "short",
              prompt:
                "Give one example of market-oriented environmental policy and one of interventionist policy.",
              answer:
                "Carbon taxes (market-oriented) and regulation/bans (interventionist).",
              keywords: ["tax", "permit", "regulat", "ban"],
              explanation:
                "Market: carbon tax, cap-and-trade; intervention: emission standards, bans, direct provision.",
            },
            {
              id: "ec-l14-q6",
              type: "short",
              prompt:
                "State one advantage and one disadvantage of foreign aid for development.",
              answer:
                "Advantage: funds infrastructure/health; disadvantage: dependency or misuse/tied conditions.",
              keywords: ["infrastructure", "depend", "corrupt", "condition"],
              explanation:
                "Aid can fill saving gaps but may create dependency or be tied to donor interests.",
            },
          ],
        },
      ],
    },
  ],
};
