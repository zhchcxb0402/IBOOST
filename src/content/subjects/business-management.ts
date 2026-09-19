import type { Subject } from "../types";

export const businessManagement: Subject = {
  slug: "business-management",
  name: "Business Management",
  short: "Business",
  color: "#0EA5E9",
  emoji: "💼",
  group: "Individuals and societies",
  levels: ["SL", "HL"],
  description:
    "The five official units (2024 syllabus): introduction, HR, finance & accounts, marketing, and operations.",
  resources: [
    {
      name: "IB Official",
      url: "https://www.ibo.org/programmes/diploma-programme/curriculum/individuals-and-societies/",
      note: "Subject brief and syllabus outline",
    },
    {
      name: "RevisionDojo",
      url: "https://www.revisiondojo.com/",
      note: "Case-style practice questions",
    },
    {
      name: "InThinking",
      url: "https://www.thinkib.net/business-management",
      note: "Teacher resources and IA exemplars",
    },
    {
      name: "Nail IB",
      url: "https://nailib.com/",
      note: "Study guides and past-paper strategy",
    },
  ],
  units: [
    {
      id: "bm-u1",
      title: "Introduction to business management",
      code: "Unit 1",
      lessons: [
        {
          id: "bm-l1",
          title: "What is a business & business entities",
          questions: [
            {
              id: "bm-l1-q1",
              type: "mcq",
              prompt: "A sole trader is characterised by…",
              choices: [
                "one owner with unlimited liability",
                "shareholders and limited liability",
                "government ownership",
                "no legal identity",
              ],
              answerIndex: 0,
              explanation:
                "Simplest form: full control, but personal assets at risk.",
            },
            {
              id: "bm-l1-q2",
              type: "mcq",
              prompt: "Limited liability means…",
              choices: [
                "owners risk only their invested capital",
                "the business cannot go bankrupt",
                "no debts are allowed",
                "profits are capped",
              ],
              answerIndex: 0,
              explanation:
                "A key advantage of companies over sole traders/partnerships.",
            },
            {
              id: "bm-l1-q3",
              type: "tf",
              prompt:
                "A public limited company (plc) can sell shares to the general public.",
              answer: true,
              explanation:
                "Plcs list shares on a stock exchange; private companies (Ltd) cannot.",
            },
            {
              id: "bm-l1-q4",
              type: "short",
              prompt:
                "Name the sector of business activity that extracts raw materials (e.g. farming, mining).",
              answer: "Primary sector",
              keywords: ["primary"],
              acceptable: ["primary"],
              explanation:
                "Primary (extractive) → secondary (manufacturing) → tertiary (services).",
            },
            {
              id: "bm-l1-q5",
              type: "mcq",
              prompt:
                "A partnership differs from a sole trader mainly because…",
              choices: [
                "ownership and risk are shared between partners",
                "it always has limited liability",
                "it pays no tax",
                "it must be a charity",
              ],
              answerIndex: 0,
              explanation:
                "2–20+ partners share capital, work and liability (usually unlimited).",
            },
            {
              id: "bm-l1-q6",
              type: "short",
              prompt:
                "Give one example of a social enterprise objective (key idea: social good over profit).",
              answer: "Providing employment to disadvantaged groups",
              keywords: ["social", "community", "environment", "help", "disadvantag", "poverty", "welfare", "ethical"],
              explanation:
                "Social enterprises pursue social/environmental goals alongside revenue.",
            },
          ],
        },
        {
          id: "bm-l2",
          title: "Objectives & stakeholders",
          questions: [
            {
              id: "bm-l2-q1",
              type: "mcq",
              prompt: "SMART objectives are…",
              choices: [
                "Specific, Measurable, Achievable, Relevant, Time-bound",
                "Simple, Major, Actionable, Real, Timed",
                "Strategic, Massive, Ambitious, Risky, Tactical",
                "Short, Medium, And, Real, Targets",
              ],
              answerIndex: 0,
              explanation: "The standard framework for effective goal-setting.",
            },
            {
              id: "bm-l2-q2",
              type: "mcq",
              prompt: "Which is an internal stakeholder?",
              choices: [
                "Employees",
                "Pressure groups",
                "The government",
                "Competitors",
              ],
              answerIndex: 0,
              explanation:
                "Internal: employees, managers, owners. External: customers, government, community.",
            },
            {
              id: "bm-l2-q3",
              type: "tf",
              prompt:
                "Stakeholder interests can conflict — e.g. shareholders want dividends while employees want higher wages.",
              answer: true,
              explanation:
                "Businesses must balance competing stakeholder claims.",
            },
            {
              id: "bm-l2-q4",
              type: "short",
              prompt:
                "Write 'increase market share to 20% within two years' is SMART. Which criterion does 'within two years' satisfy? (one word)",
              answer: "Time-bound",
              keywords: ["time"],
              acceptable: ["time bound", "timed", "timebound"],
              explanation: "Deadlines make objectives time-bound.",
            },
            {
              id: "bm-l2-q5",
              type: "mcq",
              prompt:
                "A firm adopts an ethical objective to reduce carbon emissions. This most directly serves which stakeholder?",
              choices: [
                "The local community and environment",
                "Only shareholders",
                "Competitors",
                "Nobody",
              ],
              answerIndex: 0,
              explanation:
                "Ethical/environmental objectives serve external stakeholders.",
            },
            {
              id: "bm-l2-q6",
              type: "short",
              prompt:
                "Name one stakeholder group whose main interest is job security and fair pay.",
              answer: "Employees",
              keywords: ["employee", "worker", "staff", "labour", "labor"],
              acceptable: ["workers", "staff"],
              explanation: "Employees want security, pay and good conditions.",
            },
          ],
        },
        {
          id: "bm-l3",
          title: "Growth, evolution & MNCs",
          questions: [
            {
              id: "bm-l3-q1",
              type: "mcq",
              prompt: "External growth includes…",
              choices: [
                "mergers, acquisitions and joint ventures",
                "opening new branches only",
                "hiring more staff",
                "increasing advertising",
              ],
              answerIndex: 0,
              explanation:
                "External/inorganic growth combines with other firms; internal grows organically.",
            },
            {
              id: "bm-l3-q2",
              type: "tf",
              prompt:
                "Economies of scale mean average costs fall as output increases.",
              answer: true,
              explanation:
                "Spreading fixed costs and bulk buying reduce unit costs.",
            },
            {
              id: "bm-l3-q3",
              type: "mcq",
              prompt: "A multinational company (MNC) is one that…",
              choices: [
                "operates production or services in more than one country",
                "exports occasionally",
                "has many employees",
                "is state-owned",
              ],
              answerIndex: 0,
              explanation:
                "MNCs have operations (not just sales) across borders.",
            },
            {
              id: "bm-l3-q4",
              type: "short",
              prompt:
                "Name one benefit a host country gains from an MNC locating there (key idea: jobs/technology).",
              answer: "Job creation",
              keywords: ["job", "employment", "technolog", "investment", "tax", "infrastructure", "skills"],
              explanation:
                "Benefits: employment, FDI, technology transfer, tax revenue.",
            },
            {
              id: "bm-l3-q5",
              type: "mcq",
              prompt:
                "A merger between two firms at the same stage of production is…",
              choices: [
                "horizontal integration",
                "backward vertical integration",
                "forward vertical integration",
                "conglomerate integration",
              ],
              answerIndex: 0,
              explanation:
                "Same industry, same stage = horizontal (e.g. two carmakers).",
            },
            {
              id: "bm-l3-q6",
              type: "short",
              prompt:
                "A bakery buys a wheat farm. This is ________ vertical integration (one word).",
              answer: "backward",
              keywords: ["backward"],
              explanation:
                "Buying a supplier = backward; buying a retailer = forward.",
            },
          ],
        },
      ],
    },
    {
      id: "bm-u2",
      title: "Human resource management",
      code: "Unit 2",
      lessons: [
        {
          id: "bm-l4",
          title: "Organizational structure",
          questions: [
            {
              id: "bm-l4-q1",
              type: "mcq",
              prompt: "Span of control refers to…",
              choices: [
                "the number of subordinates a manager directly controls",
                "the number of hierarchy levels",
                "the CEO's salary range",
                "the firm's market share",
              ],
              answerIndex: 0,
              explanation:
                "Wide spans → flat structures; narrow → tall structures.",
            },
            {
              id: "bm-l4-q2",
              type: "tf",
              prompt:
                "A tall hierarchical structure typically has slower communication than a flat one.",
              answer: true,
              explanation:
                "More layers mean longer chains of command.",
            },
            {
              id: "bm-l4-q3",
              type: "mcq",
              prompt: "Delegation means…",
              choices: [
                "passing authority down the hierarchy while retaining accountability",
                "giving up all responsibility",
                "outsourcing production",
                "firing middle managers",
              ],
              answerIndex: 0,
              explanation:
                "Authority is delegated; accountability stays with the manager.",
            },
            {
              id: "bm-l4-q4",
              type: "short",
              prompt:
                "A firm has 4 levels of hierarchy and each manager supervises 10 staff. Is the span of control wide or narrow? (one word)",
              answer: "wide",
              keywords: ["wide"],
              acceptable: ["broad"],
              explanation: "10 subordinates = a wide span of control.",
            },
            {
              id: "bm-l4-q5",
              type: "mcq",
              prompt: "Delayering means…",
              choices: [
                "removing levels of hierarchy to flatten the structure",
                "adding managers",
                "merging with a rival",
                "closing factories",
              ],
              answerIndex: 0,
              explanation:
                "Cuts management layers to speed decisions and save costs.",
            },
            {
              id: "bm-l4-q6",
              type: "short",
              prompt:
                "Name the organizational structure that groups staff by function (marketing, finance, HR…). (key idea: departments by specialism)",
              answer: "Functional structure",
              keywords: ["function", "department", "specialis", "specializ"],
              acceptable: ["departmental"],
              explanation:
                "Functional departmentalisation groups by specialism.",
            },
          ],
        },
        {
          id: "bm-l5",
          title: "Leadership & motivation",
          questions: [
            {
              id: "bm-l5-q1",
              type: "mcq",
              prompt: "Maslow's hierarchy orders needs from…",
              choices: [
                "physiological → safety → social → esteem → self-actualisation",
                "esteem → safety → social → physiological → self-actualisation",
                "social → physiological → safety → esteem → money",
                "self-actualisation first, then basic needs",
              ],
              answerIndex: 0,
              explanation:
                "Lower needs must be met before higher ones motivate.",
            },
            {
              id: "bm-l5-q2",
              type: "mcq",
              prompt:
                "Herzberg's 'hygiene factors' (pay, conditions)…",
              choices: [
                "prevent dissatisfaction but don't motivate by themselves",
                "always increase motivation",
                "are irrelevant",
                "only apply to managers",
              ],
              answerIndex: 0,
              explanation:
                "Motivators (achievement, recognition) drive satisfaction.",
            },
            {
              id: "bm-l5-q3",
              type: "tf",
              prompt:
                "An autocratic leader makes decisions without consulting employees.",
              answer: true,
              explanation:
                "Contrast with democratic/paternalistic/laissez-faire styles.",
            },
            {
              id: "bm-l5-q4",
              type: "short",
              prompt:
                "A worker is paid $2 per item produced. Name this payment system (three words).",
              answer: "Piece rate pay",
              keywords: ["piece", "rate"],
              acceptable: ["piecerate", "piece-rate"],
              explanation: "Piece-rate links pay directly to output.",
            },
            {
              id: "bm-l5-q5",
              type: "mcq",
              prompt:
                "Non-financial motivators include…",
              choices: [
                "job enrichment, empowerment and teamwork",
                "bonuses",
                "commission",
                "profit-related pay",
              ],
              answerIndex: 0,
              explanation:
                "Enrichment enlarges responsibility rather than pay.",
            },
            {
              id: "bm-l5-q6",
              type: "short",
              prompt:
                "Name the leadership style where the leader delegates almost all decisions to the team (hyphenated or two words).",
              answer: "Laissez-faire",
              keywords: ["laissez", "faire"],
              acceptable: ["laissez faire", "laissezfaire"],
              explanation: "Laissez-faire = minimal interference.",
            },
          ],
        },
        {
          id: "bm-l6",
          title: "Organizational culture & industrial relations",
          level: "HL",
          questions: [
            {
              id: "bm-l6-q1",
              type: "mcq",
              prompt:
                "Handy's 'power culture' is typified by…",
              choices: [
                "control radiating from a central figure or small group",
                "bureaucratic rules",
                "teams organised around projects",
                "every employee having equal say",
              ],
              answerIndex: 0,
              explanation:
                "Power culture = spider's web; also role, task and person cultures.",
            },
            {
              id: "bm-l6-q2",
              type: "tf",
              prompt:
                "Organizational culture clashes are a common reason mergers fail.",
              answer: true,
              explanation:
                "Incompatible values/practices derail integration.",
            },
            {
              id: "bm-l6-q3",
              type: "mcq",
              prompt: "Collective bargaining is…",
              choices: [
                "negotiation between employers and trade unions over pay/conditions",
                "customers haggling",
                "internal marketing meetings",
                "government taxation",
              ],
              answerIndex: 0,
              explanation:
                "The core process of industrial relations.",
            },
            {
              id: "bm-l6-q4",
              type: "short",
              prompt:
                "Employees refuse to work overtime as a protest but keep doing their contracted hours. Name this form of industrial action.",
              answer: "Overtime ban",
              keywords: ["overtime", "ban"],
              acceptable: ["work to rule"],
              explanation:
                "An overtime ban (or work-to-rule) pressures employers short of striking.",
            },
            {
              id: "bm-l6-q5",
              type: "mcq",
              prompt: "A 'task culture' (Handy) organises around…",
              choices: [
                "teams assembled to complete specific projects",
                "rigid job descriptions",
                "a single dominant leader",
                "individual status",
              ],
              answerIndex: 0,
              explanation:
                "Matrix/project-based organisation, common in consultancies.",
            },
            {
              id: "bm-l6-q6",
              type: "short",
              prompt:
                "Name one source of conflict between employers and employees (key idea: pay/conditions/change).",
              answer: "Pay disputes",
              keywords: ["pay", "wage", "condition", "redundan", "change", "hours", "contract", "dismissal"],
              explanation:
                "Wages, conditions, redundancies and change all spark disputes.",
            },
          ],
        },
      ],
    },
    {
      id: "bm-u3",
      title: "Finance & accounts",
      code: "Unit 3",
      lessons: [
        {
          id: "bm-l7",
          title: "Sources of finance & costs",
          questions: [
            {
              id: "bm-l7-q1",
              type: "mcq",
              prompt: "Internal sources of finance include…",
              choices: [
                "retained profit and sale of assets",
                "bank loans",
                "share issues",
                "trade credit",
              ],
              answerIndex: 0,
              explanation:
                "Internal = generated within the firm; the rest are external.",
            },
            {
              id: "bm-l7-q2",
              type: "short",
              prompt:
                "A firm's fixed costs are $50,000 and variable costs $20,000 at current output. Find total cost in dollars.",
              answer: "70000",
              keywords: ["70000", "70,000"],
              acceptable: ["70,000", "$70000", "$70,000"],
              explanation: "TC = FC + VC = 70,000.",
            },
            {
              id: "bm-l7-q3",
              type: "tf",
              prompt:
                "Share capital is a form of debt finance.",
              answer: false,
              explanation:
                "Shares are equity — no obligation to repay; debt = loans, overdrafts, debentures.",
            },
            {
              id: "bm-l7-q4",
              type: "mcq",
              prompt: "A fixed cost is one that…",
              choices: [
                "does not change with output in the short run",
                "varies per unit produced",
                "is always zero",
                "only applies to wages",
              ],
              answerIndex: 0,
              explanation: "Rent, salaries — constant regardless of volume.",
            },
            {
              id: "bm-l7-q5",
              type: "short",
              prompt:
                "Total revenue is $200,000 and total costs are $150,000. Find profit in dollars.",
              answer: "50000",
              keywords: ["50000", "50,000"],
              acceptable: ["50,000", "$50000"],
              explanation: "Profit = TR − TC = 50,000.",
            },
            {
              id: "bm-l7-q6",
              type: "mcq",
              prompt: "Leasing an asset instead of buying it…",
              choices: [
                "avoids a large upfront cost but never gives ownership",
                "is always cheaper long-term",
                "is a type of equity finance",
                "requires no payments",
              ],
              answerIndex: 0,
              explanation:
                "Leasing preserves cash flow; ownership stays with the lessor.",
            },
          ],
        },
        {
          id: "bm-l8",
          title: "Final accounts & ratio analysis",
          questions: [
            {
              id: "bm-l8-q1",
              type: "mcq",
              prompt: "Gross profit equals…",
              choices: [
                "revenue − cost of goods sold",
                "revenue − all expenses",
                "assets − liabilities",
                "capital + reserves",
              ],
              answerIndex: 0,
              explanation:
                "Gross profit margin = gross profit / revenue × 100.",
            },
            {
              id: "bm-l8-q2",
              type: "short",
              prompt:
                "Revenue $500,000; COGS $300,000. Find the gross profit margin in %.",
              answer: "40",
              keywords: ["40"],
              acceptable: ["40%", "0.4"],
              explanation: "(200,000/500,000) × 100 = 40%.",
            },
            {
              id: "bm-l8-q3",
              type: "tf",
              prompt:
                "The balance sheet shows a firm's performance over a year.",
              answer: false,
              explanation:
                "Balance sheet is a snapshot at a point in time; the P&L covers a period.",
            },
            {
              id: "bm-l8-q4",
              type: "mcq",
              prompt: "The current ratio is calculated as…",
              choices: [
                "current assets / current liabilities",
                "profit / revenue",
                "debt / equity",
                "assets × liabilities",
              ],
              answerIndex: 0,
              explanation:
                "Measures liquidity; ~1.5–2 is conventionally healthy.",
            },
            {
              id: "bm-l8-q5",
              type: "short",
              prompt:
                "Current assets $120,000; current liabilities $80,000. Find the current ratio.",
              answer: "1.5",
              keywords: ["1.5"],
              acceptable: ["1.5:1"],
              explanation: "120/80 = 1.5.",
            },
            {
              id: "bm-l8-q6",
              type: "mcq",
              prompt: "A falling gross profit margin with stable revenue suggests…",
              choices: [
                "production costs are rising faster than prices",
                "the firm is more efficient",
                "sales are booming",
                "debt is falling",
              ],
              answerIndex: 0,
              explanation:
                "COGS growing relative to revenue squeezes the margin.",
            },
          ],
        },
        {
          id: "bm-l9",
          title: "Debt/equity ratios, investment appraisal & budgets",
          level: "HL",
          questions: [
            {
              id: "bm-l9-q1",
              type: "mcq",
              prompt: "Gearing (leverage) ratio measures…",
              choices: [
                "loan capital as a % of total capital employed",
                "profit margin",
                "stock turnover",
                "current liquidity",
              ],
              answerIndex: 0,
              explanation:
                "High gearing = heavy reliance on debt → higher risk.",
            },
            {
              id: "bm-l9-q2",
              type: "short",
              prompt:
                "A project costs $100,000 and returns $40,000 per year. Find the payback period in years.",
              answer: "2.5",
              keywords: ["2.5"],
              acceptable: ["2.5 years", "30 months"],
              explanation: "100,000/40,000 = 2.5 years.",
            },
            {
              id: "bm-l9-q3",
              type: "tf",
              prompt:
                "Net present value discounts future cash flows to today's value.",
              answer: true,
              explanation:
                "NPV > 0 means the investment adds value after the cost of capital.",
            },
            {
              id: "bm-l9-q4",
              type: "mcq",
              prompt: "A variance is…",
              choices: [
                "the difference between budgeted and actual figures",
                "always a loss",
                "a type of loan",
                "a marketing metric",
              ],
              answerIndex: 0,
              explanation:
                "Favourable (better than budget) or adverse variances drive corrective action.",
            },
            {
              id: "bm-l9-q5",
              type: "short",
              prompt:
                "Budgeted sales $60,000; actual sales $55,000. Find the variance in dollars and state favourable/adverse as 'X adverse/favourable'.",
              answer: "5000 adverse",
              keywords: ["5000", "adverse"],
              acceptable: ["-5000", "5,000 adverse", "$5000 adverse"],
              explanation: "Actual below budget → adverse variance of 5,000.",
            },
            {
              id: "bm-l9-q6",
              type: "mcq",
              prompt:
                "Average rate of return (ARR) is calculated as…",
              choices: [
                "(total profit / years) ÷ initial cost × 100",
                "cash flow ÷ revenue",
                "NPV × discount rate",
                "payback × profit",
              ],
              answerIndex: 0,
              explanation:
                "ARR = average annual profit as % of investment.",
            },
          ],
        },
      ],
    },
    {
      id: "bm-u4",
      title: "Marketing",
      code: "Unit 4",
      lessons: [
        {
          id: "bm-l10",
          title: "Marketing planning & research",
          questions: [
            {
              id: "bm-l10-q1",
              type: "mcq",
              prompt: "Market segmentation means…",
              choices: [
                "dividing the market into groups with similar needs/characteristics",
                "selling to everyone the same way",
                "cutting prices",
                "closing niche stores",
              ],
              answerIndex: 0,
              explanation:
                "Segments can be demographic, geographic, psychographic, behavioural.",
            },
            {
              id: "bm-l10-q2",
              type: "tf",
              prompt:
                "Primary research collects new data directly; secondary research uses existing data.",
              answer: true,
              explanation:
                "Surveys/focus groups = primary; government stats, reports = secondary.",
            },
            {
              id: "bm-l10-q3",
              type: "mcq",
              prompt: "A SWOT analysis examines…",
              choices: [
                "strengths, weaknesses, opportunities, threats",
                "sales, wages, output, tax",
                "segments, wants, offers, targets",
                "suppliers, workers, owners, trade",
              ],
              answerIndex: 0,
              explanation:
                "Internal S/W + external O/T — a marketing-planning tool.",
            },
            {
              id: "bm-l10-q4",
              type: "short",
              prompt:
                "A firm surveys 200 customers about a new flavour. Is this primary or secondary research? (one word)",
              answer: "primary",
              keywords: ["primary"],
              explanation: "New data gathered first-hand = primary research.",
            },
            {
              id: "bm-l10-q5",
              type: "mcq",
              prompt: "A niche market is…",
              choices: [
                "a small, specialised segment of a larger market",
                "the whole population",
                "an illegal market",
                "only luxury goods",
              ],
              answerIndex: 0,
              explanation:
                "Niche targeting avoids head-on competition with mass marketers.",
            },
            {
              id: "bm-l10-q6",
              type: "short",
              prompt:
                "Name one sampling method used in market research (key idea: how respondents are chosen).",
              answer: "Random sampling",
              keywords: ["random", "quota", "stratif", "convenience", "sampling"],
              acceptable: ["quota sampling", "stratified sampling", "convenience sampling"],
              explanation:
                "Random, quota, stratified and convenience sampling are all valid.",
            },
          ],
        },
        {
          id: "bm-l11",
          title: "Seven Ps of the marketing mix",
          questions: [
            {
              id: "bm-l11-q1",
              type: "mcq",
              prompt: "The 7 Ps adds which three to product, price, place, promotion?",
              choices: [
                "people, process, physical evidence",
                "profit, production, packaging",
                "partners, planning, power",
                "positioning, PR, payment",
              ],
              answerIndex: 0,
              explanation:
                "The extended mix matters most for services.",
            },
            {
              id: "bm-l11-q2",
              type: "mcq",
              prompt:
                "Setting a high launch price to 'skim' the market suits…",
              choices: [
                "innovative products with little competition and eager early adopters",
                "commodity products",
                "products in decline",
                "loss leaders",
              ],
              answerIndex: 0,
              explanation:
                "Price skimming captures early surplus before competition enters.",
            },
            {
              id: "bm-l11-q3",
              type: "tf",
              prompt:
                "Penetration pricing sets a low initial price to gain market share quickly.",
              answer: true,
              explanation:
                "The opposite of skimming; prices typically rise later.",
            },
            {
              id: "bm-l11-q4",
              type: "short",
              prompt:
                "A gym trains staff to greet every member by name. Which of the 7 Ps is this? (one word)",
              answer: "people",
              keywords: ["people"],
              explanation:
                "Staff behaviour/service quality = 'people' in the extended mix.",
            },
            {
              id: "bm-l11-q5",
              type: "mcq",
              prompt: "'Place' in the marketing mix concerns…",
              choices: [
                "distribution channels and how customers access the product",
                "the factory location only",
                "pricing regions",
                "advertising slots",
              ],
              answerIndex: 0,
              explanation:
                "Retail, e-commerce, wholesalers — getting product to market.",
            },
            {
              id: "bm-l11-q6",
              type: "short",
              prompt:
                "A coffee shop's stylish interior design reassures customers about quality. Which P covers tangible cues like décor? (key idea: physical evidence)",
              answer: "physical evidence",
              keywords: ["physical", "evidence"],
              acceptable: ["physical evidence"],
              explanation:
                "Physical evidence = tangible cues for intangible services.",
            },
          ],
        },
        {
          id: "bm-l12",
          title: "Sales forecasting & international marketing",
          level: "HL",
          questions: [
            {
              id: "bm-l12-q1",
              type: "mcq",
              prompt: "Moving averages in sales forecasting are used to…",
              choices: [
                "smooth fluctuations and reveal the underlying trend",
                "set prices",
                "count employees",
                "calculate tax",
              ],
              answerIndex: 0,
              explanation:
                "Averaging over a period (e.g. 3-quarter MA) strips out seasonality.",
            },
            {
              id: "bm-l12-q2",
              type: "short",
              prompt:
                "Sales for three quarters are 90, 120 and 150. Find the 3-period moving average.",
              answer: "120",
              keywords: ["120"],
              explanation: "(90 + 120 + 150)/3 = 120.",
            },
            {
              id: "bm-l12-q3",
              type: "tf",
              prompt:
                "Extrapolation assumes past trends will continue into the future.",
              answer: true,
              explanation:
                "Its key weakness: shocks and market changes break the assumption.",
            },
            {
              id: "bm-l12-q4",
              type: "mcq",
              prompt:
                "Adapting a product for local tastes when marketing internationally is called…",
              choices: [
                "localisation/adaptation",
                "standardisation",
                "dumping",
                "franchising",
              ],
              answerIndex: 0,
              explanation:
                "Adaptation (e.g. McDonald's menus) vs standardisation debate.",
            },
            {
              id: "bm-l12-q5",
              type: "short",
              prompt:
                "Actual sales 140; moving-average trend predicted 120. Find the seasonal variation.",
              answer: "20",
              keywords: ["20"],
              acceptable: ["+20"],
              explanation: "Variation = actual − trend = +20.",
            },
            {
              id: "bm-l12-q6",
              type: "mcq",
              prompt:
                "A barrier to international marketing is…",
              choices: [
                "cultural differences requiring adaptation",
                "having too many customers",
                "free trade",
                "identical consumer tastes worldwide",
              ],
              answerIndex: 0,
              explanation:
                "Culture, language, law and income differences complicate global marketing.",
            },
          ],
        },
      ],
    },
    {
      id: "bm-u5",
      title: "Operations management",
      code: "Unit 5",
      lessons: [
        {
          id: "bm-l13",
          title: "Operations methods & break-even",
          questions: [
            {
              id: "bm-l13-q1",
              type: "mcq",
              prompt: "Job production is best suited to…",
              choices: [
                "one-off customised products (e.g. a wedding cake)",
                "mass-market soft drinks",
                "continuous chemical processing",
                "standardised phone cases",
              ],
              answerIndex: 0,
              explanation:
                "Job (custom) vs batch vs mass/flow vs cellular production.",
            },
            {
              id: "bm-l13-q2",
              type: "short",
              prompt:
                "Price $50, variable cost $30, fixed costs $100,000. Find the break-even output in units.",
              answer: "5000",
              keywords: ["5000", "5,000"],
              acceptable: ["5,000"],
              explanation: "BE = FC/(P − VC) = 100,000/20 = 5,000 units.",
            },
            {
              id: "bm-l13-q3",
              type: "tf",
              prompt:
                "Contribution per unit = price − variable cost per unit.",
              answer: true,
              explanation:
                "Contribution covers fixed costs, then generates profit.",
            },
            {
              id: "bm-l13-q4",
              type: "mcq",
              prompt: "The margin of safety is…",
              choices: [
                "actual output minus break-even output",
                "total profit",
                "fixed costs ÷ price",
                "a health & safety rule",
              ],
              answerIndex: 0,
              explanation:
                "How far sales can fall before the firm makes a loss.",
            },
            {
              id: "bm-l13-q5",
              type: "short",
              prompt:
                "Break-even output is 5,000 units; actual output is 6,500. Find the margin of safety in units.",
              answer: "1500",
              keywords: ["1500", "1,500"],
              acceptable: ["1,500"],
              explanation: "6,500 − 5,000 = 1,500 units.",
            },
            {
              id: "bm-l13-q6",
              type: "mcq",
              prompt: "Batch production…",
              choices: [
                "produces groups of identical items, switching between variants",
                "makes each item unique",
                "never stops",
                "uses no machinery",
              ],
              answerIndex: 0,
              explanation:
                "E.g. a bakery doing a run of white then wholemeal loaves.",
            },
          ],
        },
        {
          id: "bm-l14",
          title: "Lean production & quality",
          level: "HL",
          questions: [
            {
              id: "bm-l14-q1",
              type: "mcq",
              prompt: "Just-in-time (JIT) production means…",
              choices: [
                "stock arrives only as needed, minimising inventory",
                "huge buffer stocks",
                "producing slowly",
                "ignoring suppliers",
              ],
              answerIndex: 0,
              explanation:
                "Cuts waste and storage costs but risks supply disruption.",
            },
            {
              id: "bm-l14-q2",
              type: "mcq",
              prompt: "Kaizen refers to…",
              choices: [
                "continuous improvement in small steps involving all staff",
                "a one-off restructure",
                "mass automation",
                "quality inspection at the end",
              ],
              answerIndex: 0,
              explanation: "Japanese lean philosophy of ongoing improvement.",
            },
            {
              id: "bm-l14-q3",
              type: "tf",
              prompt:
                "Quality assurance builds quality into the process; quality control checks the output.",
              answer: true,
              explanation:
                "Prevention vs detection — a key distinction.",
            },
            {
              id: "bm-l14-q4",
              type: "short",
              prompt:
                "Name the lean principle of eliminating waste in all forms (Japanese term).",
              answer: "Muda",
              keywords: ["muda", "waste"],
              acceptable: ["waste reduction"],
              explanation:
                "Muda = waste; related concepts include kanban and andon.",
            },
            {
              id: "bm-l14-q5",
              type: "mcq",
              prompt: "Total quality management (TQM) requires…",
              choices: [
                "quality embedded in every employee's role across the whole organisation",
                "only the QC department caring",
                "checking 1% of output",
                "higher defect tolerance",
              ],
              answerIndex: 0,
              explanation:
                "TQM is a culture, not a checkpoint.",
            },
            {
              id: "bm-l14-q6",
              type: "short",
              prompt:
                "A kanban card signals that stock is running low. What does kanban trigger? (key idea: pull system)",
              answer: "Reorder or production of more parts",
              keywords: ["reorder", "production", "restock", "signal", "pull", "supply"],
              explanation:
                "Kanban is the visual signal driving JIT's pull system.",
            },
          ],
        },
        {
          id: "bm-l15",
          title: "Crisis management & management information systems",
          level: "HL",
          questions: [
            {
              id: "bm-l15-q1",
              type: "mcq",
              prompt: "Contingency planning means…",
              choices: [
                "preparing responses for potential crises before they happen",
                "reacting only after disasters",
                "ignoring small risks",
                "insurance only",
              ],
              answerIndex: 0,
              explanation:
                "Scenario planning reduces response time and damage.",
            },
            {
              id: "bm-l15-q2",
              type: "tf",
              prompt:
                "Effective crisis communication should be transparent and fast, not evasive.",
              answer: true,
              explanation:
                "Honesty preserves stakeholder trust; cover-ups amplify damage.",
            },
            {
              id: "bm-l15-q3",
              type: "mcq",
              prompt: "A management information system (MIS)…",
              choices: [
                "collects, processes and distributes data to support decisions",
                "replaces all managers",
                "is only for marketing",
                "stores paper files",
              ],
              answerIndex: 0,
              explanation:
                "MIS turns operational data into decision-useful information.",
            },
            {
              id: "bm-l15-q4",
              type: "short",
              prompt:
                "Name one benefit of an MIS for managers (key idea: better/faster decisions).",
              answer: "Faster access to accurate information for decision-making",
              keywords: ["decision", "fast", "accurate", "information", "data", "monitor", "efficien"],
              explanation:
                "Speed, accuracy and coordination of information flow.",
            },
            {
              id: "bm-l15-q5",
              type: "mcq",
              prompt: "Key factors reducing the impact of a crisis include…",
              choices: [
                "transparent communication, speed, control and safety",
                "denial and blame",
                "silence",
                "firing spokespeople",
              ],
              answerIndex: 0,
              explanation:
                "The syllabus stresses transparency, speed, control and safety.",
            },
            {
              id: "bm-l15-q6",
              type: "short",
              prompt:
                "Which is more cost-effective for a firm: contingency planning or crisis response? Explain briefly. (key idea: prevention cheaper than reaction)",
              answer:
                "Contingency planning — preventing/preparing costs less than reacting to a crisis",
              keywords: ["contingenc", "plan", "cheap", "cost", "prevent", "prepar"],
              explanation:
                "Preparation costs less than unplanned crisis damage and lost reputation.",
            },
          ],
        },
      ],
    },
  ],
};
