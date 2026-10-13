import type { StudyNotes } from "../types";

export const economicsStudy: StudyNotes = {
  "ec-l1": [
    {
      type: "warmup",
      prompt: "A student skips a paid shift (would have earned $40) to revise. The revision is 'free'. True cost?",
      answer: "At least $40 — opportunity cost is the next best alternative forgone: the forgone wages (plus what leisure/rest was worth), not $0.",
    },
    {
      type: "text",
      body: "Economics starts with **scarcity**: unlimited wants meet limited resources (land, labour, capital, entrepreneurship), so every agent must choose. The true cost of any choice is the **opportunity cost** — the next best alternative forgone, not the money spent.",
    },
    {
      type: "check",
      prompt: "Why does scarcity force choice even for rich economies?",
      answer: "Wants expand with resources — time, environment and attention stay limited, so the opportunity cost logic applies at every income level.",
    },
    {
      type: "definition",
      term: "Opportunity cost",
      body: "The value of the next best alternative forgone when a choice is made. It applies equally to consumers, firms and governments.",
    },
    {
      type: "definition",
      term: "Factors of production",
      body: "The resources used to produce goods and services: land (natural), labour (human), capital (man-made aids to production) and entrepreneurship (risk-taking organisation).",
    },
    {
      type: "text",
      body: "A **production possibilities curve (PPC)** shows maximum combinations of two goods an economy can produce. Points inside = unemployed/inefficient use of resources; on the curve = full employment; beyond = unattainable. Growth shifts the curve out.",
    },
    {
      type: "example",
      title: "Opportunity cost on a PPC",
      steps: [
        "An economy on its PPC produces 50 guns and 150 units of butter. Moving to another point on the curve, it produces 60 guns and 110 units of butter.",
        "Opportunity cost of the 10 extra guns = butter forgone = 150 − 110 = 40 units",
        "Per gun: 40 / 10 = **4 units of butter per extra gun** — always name the alternative given up",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "'Opportunity cost' answers must name the specific alternative forgone — 'other goods' or 'money' scores zero; 'the hospital that could have been built' scores.",
    },
  ],
  "ec-l2": [
    {
      type: "warmup",
      prompt: "A government gives free school meals. Which two of the nine IB concepts does this most directly serve?",
      answer: "Equity (fairer access regardless of income) and economic well-being (health/learning) — though it raises efficiency vs intervention debates too.",
    },
    {
      type: "text",
      body: "Economic systems answer three questions: **what to produce, how to produce, and for whom**. A free-market economy answers via price signals and private ownership; a planned economy via the state; most real economies are mixed. The IB organises analysis around **nine key concepts**: scarcity, choice, efficiency, equity, economic well-being, sustainability, change, interdependence and intervention.",
    },
    {
      type: "check",
      prompt: "Why can a policy be efficient but inequitable at the same time?",
      answer: "Efficiency maximises total surplus regardless of who gets it; equity concerns distribution — maximising the pie says nothing about the slices.",
    },
    {
      type: "definition",
      term: "Equity vs efficiency",
      body: "Efficiency = maximising output from resources (productive + allocative); equity = fairness of distribution. Policies often trade one against the other.",
    },
    {
      type: "list",
      title: "The nine concepts (IB)",
      items: [
        "Scarcity — unlimited wants, limited resources",
        "Choice — agents must select between alternatives",
        "Efficiency — best use of resources",
        "Equity — fairness",
        "Economic well-being — quality of life",
        "Sustainability — needs of future generations",
        "Change — economies evolve",
        "Interdependence — economies are linked",
        "Intervention — government involvement",
      ],
    },
    {
      type: "example",
      title: "Concepts in a scenario",
      steps: [
        "A government subsidises solar panels: which concepts apply?",
        "Intervention (subsidy), sustainability (energy transition), equity (who can afford panels), efficiency (resource allocation shifts)",
        "Frame answers around the concept + a real-world example",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "In Paper 1(b) 'using the concepts' questions, name 1–2 concepts explicitly and link each to the extract — generic praise like 'this is efficient' without mechanism earns little.",
    },
  ],
  "ec-l15": [
    {
      type: "warmup",
      prompt: "Petrol gets more expensive because oil supply fell. On the petrol diagram, does demand or supply shift?",
      answer: "Supply shifts left (higher input costs) — a price rise caused by supply is a movement up the unchanged demand curve, not a demand shift.",
    },
    {
      type: "text",
      body: "Demand curves slope down (income, substitution and diminishing-marginal-utility effects); supply curves slope up (profit motive). **Movements along** a curve come from the good's own price; **shifts** come from determinants — demand: income, tastes, prices of substitutes/complements, population, expectations; supply: input costs, technology, taxes/subsidies, weather, number of firms.",
    },
    {
      type: "check",
      prompt: "Why does a shortage push price up automatically in a free market?",
      answer: "Excess demand lets sellers raise prices while still selling everything — unserved buyers bid prices up until Qd falls to meet Qs.",
    },
    {
      type: "definition",
      term: "Market equilibrium",
      body: "The price where quantity demanded equals quantity supplied (Qd = Qs). Above it a surplus pushes price down; below it a shortage pushes price up.",
    },
    {
      type: "text",
      body: "Consumer surplus = area below demand, above price; producer surplus = area below price, above supply. Equilibrium maximises their sum — that's the welfare sense in which free markets are 'efficient'.",
    },
    {
      type: "example",
      title: "Shift analysis",
      steps: [
        "Coffee prices of tea substitute fall. Effect on the tea market?",
        "Cheaper coffee → consumers switch → demand for tea shifts LEFT",
        "New equilibrium: lower price, lower quantity for tea",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Distinguish 'change in quantity demanded' (price moves you along the curve) from 'change in demand' (a determinant shifts it) — mixing these up is the classic Paper 1 error.",
    },
  ],
  "ec-l16": [
    {
      type: "warmup",
      prompt: "A shop raises prices 10% and quantity demanded falls 30%. Elastic or inelastic — and what happens to revenue?",
      answer: "PED = 3 → elastic; revenue falls — the quantity loss outweighs the price gain when |PED| > 1.",
    },
    {
      type: "text",
      body: "Elasticities measure responsiveness. **PED** = %ΔQd / %ΔP; **PES** same for supply; **YED** = %ΔQd / %Δincome; **XED** = %ΔQd of good A / %ΔP of good B. Sign and size carry meaning: PED is reported as absolute value; YED positive = normal good, negative = inferior; XED positive = substitutes, negative = complements.",
    },
    {
      type: "check",
      prompt: "Why is a negative YED actually informative rather than an error?",
      answer: "Negative income elasticity defines inferior goods — demand falls as income rises; the sign carries the classification.",
    },
    {
      type: "definition",
      term: "Price elasticity of demand",
      body: "The responsiveness of quantity demanded to a change in price. |PED| > 1 elastic; < 1 inelastic. Determinants: substitutes, necessity vs luxury, % of income, time.",
    },
    {
      type: "formula",
      label: "All four elasticities",
      body: "PED = %ΔQd/%ΔP;  PES = %ΔQs/%ΔP;  YED = %ΔQd/%ΔY;  XED = %ΔQd_A/%ΔP_B",
    },
    {
      type: "text",
      body: "PED links to revenue: if |PED| > 1, a price cut raises total revenue; if < 1, a price rise raises it. That's why firms price-discriminate and governments tax inelastic goods like tobacco and fuel.",
    },
    {
      type: "example",
      title: "PED calculation",
      steps: [
        "Price rises from $4 to $5 and Qd falls from 100 to 80. PED?",
        "%ΔQd = −20/100 = −20%; %ΔP = 1/4 = +25%",
        "PED = −20/25 = −0.8 → |PED| = **0.8, inelastic**",
      ],
      blank: 1,
    },
    {
      type: "example",
      title: "YED sign",
      steps: [
        "Income rises 10%, demand for instant noodles falls 4%. YED and good type?",
        "YED = −4/10 = −0.4",
        "Negative → **inferior good**",
      ],
    },
    {
      type: "tip",
      body: "Use the base (original) value for % changes unless told otherwise — midpoint formulae appear only when the question specifies them.",
    },
  ],
  "ec-l17": [
    {
      type: "warmup",
      prompt: "Rent control is set below the market equilibrium. What appears in the market — a surplus or a shortage?",
      answer: "A shortage — below equilibrium, quantity demanded exceeds quantity supplied; waiting lists and black markets follow.",
    },
    {
      type: "text",
      body: "Governments intervene on price: a **price ceiling** (maximum, e.g. rent control) binds only below equilibrium → shortage; a **price floor** (minimum, e.g. minimum wage, agricultural price supports) binds only above equilibrium → surplus. A **subsidy** shifts supply down; the benefit splits between consumers and producers depending on elasticities.",
    },
    {
      type: "check",
      prompt: "Why does a price ceiling above equilibrium have zero effect?",
      answer: "The market clears at a price already below the legal maximum — non-binding controls never bite.",
    },
    {
      type: "definition",
      term: "Price ceiling / floor",
      body: "Ceiling: legal maximum price — below equilibrium to bind. Floor: legal minimum — above equilibrium to bind. Both create disequilibrium: shortage or surplus respectively.",
    },
    {
      type: "text",
      body: "Minimum wage evaluation: supporters cite poverty reduction and monopsony labour markets; critics cite unemployment among low-skilled workers. The real-world outcome depends on the level set relative to the equilibrium wage.",
    },
    {
      type: "example",
      title: "Binding floor surplus",
      steps: [
        "Equilibrium wage $8; floor set at $10. Qd = 50k workers, Qs = 80k.",
        "Floor binds (above equilibrium)",
        "Surplus = 80k − 50k = **30k unemployed**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Draw the diagram: non-binding controls do nothing — a ceiling above equilibrium or floor below has no effect. Always check whether the control 'bites' before analysing impacts.",
    },
  ],
  "ec-l3": [
    {
      type: "warmup",
      prompt: "Avocado toast becomes fashionable. On the avocado market diagram, what shifts?",
      answer: "Demand shifts right (tastes/preferences) — price and quantity both rise along the existing supply curve.",
    },
    {
      type: "text",
      body: "The law of demand: ceteris paribus, as price rises, quantity demanded falls — shown by a downward-sloping curve. Supply slopes up: higher prices make production more profitable and draw in firms. Equilibrium price and quantity clear the market; the price mechanism allocates resources via signals and incentives.",
    },
    {
      type: "check",
      prompt: "How does the price mechanism ration scarce concert tickets?",
      answer: "Price rises until quantity demanded equals the fixed supply — tickets go to those willing and able to pay; the signal attracts more supply later.",
    },
    {
      type: "definition",
      term: "Ceteris paribus",
      body: "'All else equal' — the assumption that only one variable changes at a time, isolating the price–quantity relationship.",
    },
    {
      type: "text",
      body: "Functions of price: **signalling** (information to agents), **incentive** (rewards/costs of behaviour), **rationing** (scarce goods go to those willing to pay). These explain how free markets coordinate without a planner.",
    },
    {
      type: "example",
      title: "Market adjustment",
      steps: [
        "Price sits above equilibrium → Qs > Qd (surplus)",
        "Firms cut price to clear stock → Qd rises, Qs falls",
        "Price settles where **Qd = Qs**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "In diagram questions, label axes (P, Q), label curves, mark equilibrium and show the direction of shift — unlabelled diagrams can't score.",
    },
  ],
  "ec-l4": [
    {
      type: "warmup",
      prompt: "Governments tax cigarettes heavily. From a revenue view, why is that a smart choice?",
      answer: "Demand is inelastic (addictive, few substitutes) — quantity barely falls when price rises, so tax × quantity stays high and consumers bear most of the burden.",
    },
    {
      type: "text",
      body: "Elasticity determines who bears interventions. With an **indirect tax**, the side of the market that's more inelastic bears more of the burden: inelastic demand (cigarettes, fuel) → consumers pay most of the tax; elastic demand → producers absorb it. Government revenue = tax × new quantity.",
    },
    {
      type: "check",
      prompt: "Why does taxing an elastic good create a bigger deadweight loss?",
      answer: "Quantity collapses when price rises — the lost trades (surplus destroyed rather than transferred) are the deadweight triangle.",
    },
    {
      type: "definition",
      term: "Incidence of tax",
      body: "The division of a tax burden between consumers (higher price paid) and producers (lower net price received). Determined by relative PED and PES.",
    },
    {
      type: "formula",
      label: "Tax revenue",
      body: "Revenue = tax per unit × quantity sold after tax",
    },
    {
      type: "text",
      body: "Taxing inelastic goods maximises revenue with small deadweight loss — but it's often regressive (hurts poorer households proportionally more). That's the equity–efficiency trade-off in tax design.",
    },
    {
      type: "example",
      title: "Who pays the tax?",
      steps: [
        "A $2 tax on petrol: price rises from $3 to $4.60.",
        "Consumer burden = $4.60 − $3 = $1.60 (80%)",
        "Producer burden = $3 − ($4.60 − $2) = $0.40 (20%)",
        "Inelastic demand → **consumers bear most**",
      ],
      blank: 2,
    },
    {
      type: "tip",
      body: "When asked to 'analyse the effect of a tax', cover: incidence split, government revenue, deadweight loss, and a stakeholder each side — four quick marks.",
    },
  ],
  "ec-l5": [
    {
      type: "warmup",
      prompt: "A factory pollutes a river. Is the market quantity of the good too high or too low relative to the social optimum?",
      answer: "Too high — MSC > MPC means the market overproduces: output extends past the point where marginal social cost meets marginal benefit.",
    },
    {
      type: "text",
      body: "**Market failure** occurs when free markets misallocate resources: externalities, public goods, common-access resources, asymmetric information and market power. **Externalities** are third-party effects — negative (pollution: MSC > MPC, overproduction) or positive (education: MSB > MPB, underproduction).",
    },
    {
      type: "check",
      prompt: "Why won't private markets provide street lighting even though everyone values it?",
      answer: "Non-excludability → free-riding: you can benefit without paying, so no firm can charge — public goods need collective provision.",
    },
    {
      type: "definition",
      term: "Negative externality of production",
      body: "A cost imposed on third parties by production — the social cost exceeds the private cost (MSC > MPC), so the market overproduces relative to the social optimum.",
    },
    {
      type: "definition",
      term: "Public good",
      body: "Non-rival (one person's use doesn't reduce others') and non-excludable (can't stop non-payers) — e.g. street lighting, flood defences. Free-rider problem → market won't supply.",
    },
    {
      type: "list",
      title: "Externality policies",
      items: [
        "Negative: carbon tax, regulations, tradable permits",
        "Positive: subsidies, direct provision, advertising",
        "Property rights (Coase) can internalise some externalities",
      ],
    },
    {
      type: "example",
      title: "Diagram logic for pollution",
      steps: [
        "Draw MPC upward; MSC above it by the external cost",
        "Market equilibrium Qm at D = MPC > social optimum Q* at D = MSC",
        "Welfare loss triangle between MSC and D over Q*–Qm",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "IB diagram convention: label MPB/MSB (demand side) and MPC/MSC (supply side) — for negative production externalities, MSC lies ABOVE MPC and the optimal quantity is SMALLER.",
    },
  ],
  "ec-l6": [
    {
      type: "warmup",
      prompt: "A monopoly produces where MC = MR, then charges the demand price. Is that price above or below MC = MR?",
      answer: "Above — price is read off the demand (AR) curve at the MC = MR quantity, so P > MC: the source of monopoly welfare loss.",
    },
    {
      type: "text",
      body: "Firms' objectives vary (profit maximisation, revenue maximisation, satisficing, growth). Market structures run from **perfect competition** (many small firms, identical products, no barriers → price takers) to **monopoly** (single seller, high barriers → price maker). Firms profit-maximise where MC = MR.",
    },
    {
      type: "check",
      prompt: "Why can a monopoly keep supernormal profit in the long run while a competitive firm can't?",
      answer: "Barriers to entry block the entry that would erode profit — perfect competition has none, so entry drives profit to normal.",
    },
    {
      type: "definition",
      term: "Profit maximisation",
      body: "Producing where marginal cost equals marginal revenue (MC = MR). A monopoly can then charge the demand-curve price, earning supernormal profit even long-run.",
    },
    {
      type: "definition",
      term: "Barriers to entry",
      body: "Obstacles preventing new firms entering — legal (patents), economies of scale, brand loyalty, control of resources. They sustain monopoly power.",
    },
    {
      type: "text",
      body: "Monopoly costs society: higher price, lower output, deadweight loss, and potential X-inefficiency (no competitive pressure to cut costs). Benefits can include economies of scale and R&D funds — hence the 'it depends' evaluation.",
    },
    {
      type: "example",
      title: "Perfect competition long-run",
      steps: [
        "Short-run supernormal profits exist in perfect competition. Long-run outcome?",
        "No barriers → new firms enter → market supply rises → price falls",
        "Each firm's demand falls until P = ATC → **normal profit only**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "For monopoly diagrams, draw MR steeper than D, find MC = MR for quantity, then go UP to the demand curve for price — quantity first, price second, never reverse.",
    },
  ],
  "ec-l18": [
    {
      type: "warmup",
      prompt: "A pigouvian tax equals the marginal external cost. What happens to the market quantity?",
      answer: "It falls to the social optimum — MPC shifts up to MSC, removing the overproduction between Qm and Q*.",
    },
    {
      type: "text",
      body: "Deeper market-failure toolkit: **indirect taxes** internalise negative externalities (raise MPC toward MSC); **tradable pollution permits** cap total emissions and let firms trade allowances; **subsidies** correct positive externalities (raise MPB toward MSB). Under **market power**, HL analysis uses MR and MC: monopoly produces where MC = MR but prices off the demand curve.",
    },
    {
      type: "check",
      prompt: "Why do economists often prefer tradable permits over taxes for pollution?",
      answer: "Permits fix the total emission quantity with certainty and let the market find the cheapest abatement — taxes fix the price, not the amount.",
    },
    {
      type: "definition",
      term: "Tradable permits",
      body: "Government-issued rights to emit a set quantity of pollution; firms that abate cheaply sell spare permits to those that can't — achieving a given reduction at lowest cost (cap-and-trade).",
    },
    {
      type: "formula",
      label: "Monopoly (HL)",
      body: "Profit max where MC = MR;  price read off AR (demand);  DWL vs competitive outcome",
    },
    {
      type: "text",
      body: "Evaluating each policy: taxes raise revenue but set wrong level if the externality is mis-measured; permits fix quantity (certain outcome for emissions) but price fluctuates; subsidies risk government failure and overuse.",
    },
    {
      type: "example",
      title: "Pigouvian tax sizing",
      steps: [
        "Marginal external cost = $5 per unit. Optimal tax?",
        "Tax = external cost → shifts MPC up to coincide with MSC",
        "→ **$5 per unit**, output falls to the social optimum",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Always evaluate with 'in theory vs in practice': the right policy on paper fails if the externality can't be measured (how much is a tonne of CO₂ 'worth'?).",
    },
  ],
  "ec-l7": [
    {
      type: "warmup",
      prompt: "Nominal GDP rises 5% while prices rise 5%. Did the economy grow?",
      answer: "No — real GDP is unchanged; nominal growth from pure inflation isn't more output.",
    },
    {
      type: "text",
      body: "Macroeconomics starts by measuring activity. **GDP** = value of final goods and services produced in a country per period — via output, income or expenditure (C + I + G + X − M). Real GDP removes inflation; GDP per capita and HDI adjust for living standards. **AD** = total planned spending; **AS** = total output firms will supply.",
    },
    {
      type: "check",
      prompt: "Why does AD slope downward?",
      answer: "Lower price levels raise real wealth, cut interest rates, and cheapen exports relative to imports — three separate channels boosting planned spending.",
    },
    {
      type: "definition",
      term: "Aggregate demand",
      body: "Total planned expenditure on domestic output at each price level: AD = C + I + G + (X − M). Slopes down via wealth, interest-rate and trade effects.",
    },
    {
      type: "definition",
      term: "Nominal vs real GDP",
      body: "Nominal GDP is measured at current prices; real GDP is adjusted for inflation — only real GDP growth reflects increased output.",
    },
    {
      type: "formula",
      label: "Expenditure approach",
      body: "GDP = C + I + G + (X − M)",
    },
    {
      type: "text",
      body: "Three AS shapes (IB): **Keynesian AS** (horizontal at high unemployment — output rises without inflation; vertical at full employment), **monetarist/new-classical LRAS** (vertical at potential output), and upward-sloping SRAS. Which diagram to use is an exam decision in itself.",
    },
    {
      type: "example",
      title: "Real GDP",
      steps: [
        "Nominal GDP = $220bn; price index 110 (base 100). Real GDP?",
        "Real = nominal / index × 100 = 220 / 110 × 100",
        "= **$200bn**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "GDP misses unpaid work, the shadow economy, externalities and distribution — quote 2–3 limitations whenever 'GDP measures well-being' appears.",
    },
  ],
  "ec-l8": [
    {
      type: "warmup",
      prompt: "A central bank cuts interest rates in a recession. Trace the chain to AD.",
      answer: "Cheaper borrowing → consumption and investment rise → AD shifts right — expansionary monetary policy.",
    },
    {
      type: "text",
      body: "Demand-side policies manage AD. **Fiscal policy** = government spending and taxation (expansionary G↑/T↑ deficit to fight recession; contractionary to fight inflation). **Monetary policy** = interest rates/money supply by the central bank (cut rates → cheaper borrowing → C and I rise → AD shifts right).",
    },
    {
      type: "check",
      prompt: "Why does fiscal policy suffer 'crowding out'?",
      answer: "Government borrowing raises interest rates and competes for funds, dampening the private C and I it was meant to stimulate.",
    },
    {
      type: "definition",
      term: "Expansionary fiscal policy",
      body: "Increasing government spending and/or cutting taxes to raise AD and output — financed by borrowing (budget deficit), used in recessions.",
    },
    {
      type: "definition",
      term: "Supply-side policies",
      body: "Interventions raising the economy's productive capacity (shift LRAS right): market-based (deregulation, lower taxes, labour-market reform) or interventionist (education, infrastructure, industrial policy).",
    },
    {
      type: "list",
      title: "Policy trade-offs",
      items: [
        "Fiscal: fast targeting but crowding out, debt, political lags",
        "Monetary: flexible and quick but blunt, ineffective near zero rates",
        "Supply-side: raises potential output but slow and often unequalising",
      ],
    },
    {
      type: "example",
      title: "Policy for stagflation",
      steps: [
        "Inflation + stagnant output (SRAS left-shift). Demand-side fix?",
        "Contractionary policy lowers inflation but worsens output — a dilemma",
        "→ supply-side policies (raise LRAS) suit supply shocks",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "'Evaluate' needs a conclusion: weigh time lags, side-effects and the cause of the problem (demand vs supply shock) — demand-side policy can't fix a supply shock cleanly.",
    },
  ],
  "ec-l9": [
    {
      type: "warmup",
      prompt: "MPC = 0.8 and the government spends $10bn — the multiplier is 5, so output rises $50bn. Where does the 'extra' spending come from?",
      answer: "Each round of spending becomes someone's income, of which 80% is re-spent — the geometric chain 10 + 8 + 6.4 + … sums to 50.",
    },
    {
      type: "text",
      body: "Keynesian view: economies can get stuck below full employment — AD shortfalls persist because wages/prices are sticky, so intervention is needed. The **multiplier** amplifies any injection: ΔY = multiplier × injection, where k = 1/(1 − MPC) = 1/MPS (with taxes/imports, k = 1/MPW). Monetarists reply that economies self-correct and demand stimulus just inflates.",
    },
    {
      type: "check",
      prompt: "Why do monetarists distrust fiscal stimulus even when the multiplier is large?",
      answer: "They believe economies self-correct to potential output — stimulus then bids up prices (inflation) rather than raising real output long-run.",
    },
    {
      type: "definition",
      term: "The multiplier",
      body: "The ratio of the total change in national income to the initial change in spending. k = 1/(1 − MPC); larger MPC (smaller leakages) → bigger k.",
    },
    {
      type: "formula",
      label: "Multiplier",
      body: "k = 1/(1 − MPC) = 1/(MPS + MPT + MPM);  ΔY = k × injection",
    },
    {
      type: "text",
      body: "Mechanism: $1bn of government spending becomes someone's income, who spend MPC of it, becoming another's income… the chain shrinks by the leakage fraction each round.",
    },
    {
      type: "example",
      title: "Multiplier calculation",
      steps: [
        "MPC = 0.8; government injects $10bn. Total ΔY?",
        "k = 1/(1 − 0.8) = 5",
        "ΔY = 5 × 10 = **$50bn**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Multiplier questions often give MPS not MPC — convert MPC = 1 − MPS first, or use k = 1/MPS directly when savings is the only leakage.",
    },
  ],
  "ec-l19": [
    {
      type: "warmup",
      prompt: "Consumer confidence collapses during a financial crisis. Which AD/AS diagram section determines whether stimulus works?",
      answer: "The Keynesian AS curve — on the horizontal section stimulus raises output without inflation; near vertical, it mostly inflates.",
    },
    {
      type: "text",
      body: "AD shifts with any C, I, G or net-export determinant: consumer confidence, interest rates, fiscal stance, exchange rates, foreign incomes. SRAS shifts with input costs (wages, oil), taxes/subsidies, supply shocks; LRAS shifts with resources, technology, institutions and productivity.",
    },
    {
      type: "check",
      prompt: "Why does an oil-price shock move SRAS rather than AD?",
      answer: "Oil is an input cost for most production — dearer oil raises marginal costs economy-wide, shifting SRAS left (stagflation).",
    },
    {
      type: "text",
      body: "On a **Keynesian AS** diagram the same AD shift has different effects depending on the range: horizontal section → pure output growth; intermediate → output + inflation; vertical → pure inflation. This is why the multipliers 'work' only when spare capacity exists.",
    },
    {
      type: "example",
      title: "Multiplier with leakages",
      steps: [
        "MPS = 0.1, MPT = 0.2, MPM = 0.1. Investment rises $5bn. ΔY?",
        "MPW = 0.1 + 0.2 + 0.1 = 0.4 → k = 2.5",
        "ΔY = **$12.5bn**",
      ],
      blank: 1,
    },
    {
      type: "list",
      title: "AD shifters checklist",
      items: [
        "C: confidence, wealth, taxes, interest rates",
        "I: rates, business confidence, technology",
        "G: fiscal stance",
        "X − M: foreign incomes, exchange rate",
      ],
    },
    {
      type: "tip",
      body: "In diagram questions state the range you're in (spare capacity vs near full employment) — the policy conclusion flips entirely between them.",
    },
  ],
  "ec-l20": [
    {
      type: "warmup",
      prompt: "Unemployment falls yet inflation accelerates. What does the short-run Phillips curve predict, and why?",
      answer: "Exactly this trade-off — tight labour markets bid wages up, feeding prices; the SRPC slopes down until expectations adjust.",
    },
    {
      type: "text",
      body: "**Unemployment** types: cyclical/demand-deficient (recession), structural (skills mismatch), frictional (between jobs), seasonal. **Inflation** = sustained rise in the general price level, measured by CPI — a weighted basket; demand-pull vs cost-push causes. The **Phillips curve** (HL) shows a short-run inflation–unemployment trade-off; in the long run it's vertical at the natural rate.",
    },
    {
      type: "check",
      prompt: "Why is the long-run Phillips curve vertical?",
      answer: "Once workers and firms fully anticipate inflation, no real wage change occurs — unemployment returns to the natural rate at any inflation rate.",
    },
    {
      type: "definition",
      term: "Consumer price index",
      body: "A weighted basket of typical consumer goods used to measure the price level; inflation rate = %ΔCPI. Weights updated to reflect spending patterns.",
    },
    {
      type: "definition",
      term: "Natural rate of unemployment (HL)",
      body: "The unemployment rate when the labour market is in equilibrium — frictional + structural only; no demand-deficient component. Long-run Phillips curve is vertical here.",
    },
    {
      type: "formula",
      label: "Inflation rate",
      body: "inflation = (CPI_new − CPI_old) / CPI_old × 100%",
    },
    {
      type: "example",
      title: "CPI inflation",
      steps: [
        "CPI rises from 120 to 126. Inflation rate?",
        "(126 − 120)/120 × 100",
        "= **5%**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Phillips-curve evaluation: the trade-off only holds short-run; expected inflation shifts the SRPC — cite 1970s stagflation as the real-world test that broke the simple curve.",
    },
  ],
  "ec-l10": [
    {
      type: "warmup",
      prompt: "A tariff raises domestic price from $10 to $12. Domestic producers cheer, consumers lose — is society better off?",
      answer: "Net worse — the deadweight-loss triangles exceed the transfer: gains to producers and government are smaller than consumer loss.",
    },
    {
      type: "text",
      body: "Free-trade arguments rest on comparative advantage and efficiency; **protectionism** shields domestic industries. Tools: **tariffs** (import taxes), **quotas** (quantity limits), subsidies to domestic producers, administrative barriers. All raise domestic producer surplus but cost consumers more — net welfare loss.",
    },
    {
      type: "check",
      prompt: "Why is the 'infant industry' argument time-limited by design?",
      answer: "It's meant to shelter new industries until they reach competitive scale — permanent protection just breeds inefficiency and dependency.",
    },
    {
      type: "definition",
      term: "Tariff",
      body: "A tax on imports. Effects: domestic price rises to world price + tariff; domestic output rises, imports fall, government gains revenue, consumers lose surplus — DWL triangles.",
    },
    {
      type: "list",
      title: "Arguments for/against protection",
      items: [
        "For: infant industries, jobs, diversification, dumping defence, national security",
        "Against: higher prices, retaliation, inefficiency, rent-seeking",
      ],
    },
    {
      type: "text",
      body: "Tariff diagram: horizontal world supply at Pw; tariff raises it to Pw+t. Domestic supply rises from Q1 to Q2, demand falls from Q4 to Q3, imports shrink to Q2Q3, government takes the rectangle between them.",
    },
    {
      type: "example",
      title: "Tariff revenue",
      steps: [
        "Pw = $10, tariff = $2. After tariff, imports = 40 000 units.",
        "Government revenue = tax × imports = 2 × 40 000",
        "= **$80 000**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Quota vs tariff: a quota gives the same quantity effect but the revenue rectangle goes to foreign exporters or licence-holders, not the domestic government — a favourite evaluation point.",
    },
  ],
  "ec-l11": [
    {
      type: "warmup",
      prompt: "The pound depreciates from £1 = $1.40 to £1 = $1.20. For a UK exporter, is this good or bad news?",
      answer: "Good — its goods become cheaper in dollar terms, boosting competitiveness abroad (though imports cost more).",
    },
    {
      type: "text",
      body: "An **exchange rate** is the price of one currency in another. Floating rates are set by demand for (exports, capital inflows) and supply of (imports, capital outflows) the currency; depreciation makes exports cheaper and imports dearer. The **balance of payments** records international transactions: current account + capital + financial account.",
    },
    {
      type: "check",
      prompt: "Why must a current-account deficit be matched by a financial/capital surplus?",
      answer: "Balance of payments is an accounting identity — money spent abroad beyond earnings is financed by borrowing or asset sales.",
    },
    {
      type: "definition",
      term: "Appreciation vs depreciation",
      body: "Appreciation = rise in currency value (exports dearer, imports cheaper — AD falls); depreciation = fall in value (exports cheaper, imports dearer — AD rises). 'Devaluation/revaluation' are the equivalents under fixed rates.",
    },
    {
      type: "definition",
      term: "Current account",
      body: "Records trade in goods and services, income flows and current transfers. A persistent deficit is financed by the capital/financial account (borrowing or asset sales).",
    },
    {
      type: "formula",
      label: "Currency conversion",
      body: "price in B = price in A × exchange rate (units of B per A)",
    },
    {
      type: "example",
      title: "Depreciation arithmetic",
      steps: [
        "£1 = $1.40 → £1 = $1.20. Effect on a £10 UK export to the US?",
        "Before: $14; after: $12",
        "Depreciation → export **cheaper by $2** → more competitive",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Always state who demands and who supplies the currency: Americans buying UK exports demand £; Brits buying US imports supply £. Getting this backwards reverses the whole answer.",
    },
  ],
  "ec-l12": [
    {
      type: "warmup",
      prompt: "A country depreciates its currency but the trade deficit first widens. Is the policy failing?",
      answer: "Not necessarily — the J-curve: contracts lock in old volumes short-run, so the value effect dominates until quantities adjust.",
    },
    {
      type: "text",
      body: "Two HL refinements. **Marshall–Lerner condition**: depreciation improves the current account only if |PED exports| + |PED imports| > 1 — elasticities decide, not just the rate change. The **J-curve**: the current account worsens short-run (contracts fixed, volumes inelastic) before improving long-run. **Terms of trade** = index of export prices / index of import prices × 100.",
    },
    {
      type: "check",
      prompt: "Why does the Marshall–Lerner condition need BOTH elasticities, not just one?",
      answer: "The trade balance responds to export and import volumes together — the sum of PEDs decides whether the quantity response outweighs the price effect.",
    },
    {
      type: "definition",
      term: "Marshall–Lerner condition",
      body: "A currency depreciation improves the trade balance only if the sum of the price elasticities of demand for exports and imports exceeds 1.",
    },
    {
      type: "definition",
      term: "Terms of trade",
      body: "ToT = (index of export prices / index of import prices) × 100. Improvement means each unit of exports buys more imports.",
    },
    {
      type: "formula",
      label: "Terms of trade",
      body: "ToT = Px index / Pm index × 100",
    },
    {
      type: "example",
      title: "Marshall–Lerner test",
      steps: [
        "PED exports = 0.7, PED imports = 0.6. Will depreciation improve the current account?",
        "Sum = 1.3 > 1 → condition satisfied",
        "→ **Yes**, once the J-curve lag passes",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "An improving ToT isn't automatically good — if it reflects rising export prices, quantity demanded may fall; always link ToT changes back to PED.",
    },
  ],
  "ec-l21": [
    {
      type: "warmup",
      prompt: "A central bank raises interest rates sharply. What happens to the exchange rate — and why?",
      answer: "It appreciates — higher returns attract foreign capital inflows (hot money), raising demand for the currency.",
    },
    {
      type: "text",
      body: "Exchange-rate determination in depth: currency demand comes from exports, inward investment and speculation; supply from imports, outward investment and central-bank sales. Under floating regimes the rate clears the market; managed/fixed regimes need reserves or interest-rate defence.",
    },
    {
      type: "check",
      prompt: "Why can a persistent current-account surplus signal weakness rather than strength?",
      answer: "It may reflect chronically weak domestic demand — the economy relies on exports because households and firms won't spend at home.",
    },
    {
      type: "list",
      title: "Appreciation causes",
      items: [
        "Higher domestic interest rates → hot-money inflows",
        "Export demand / foreign income growth",
        "Speculation and safe-haven flows",
        "Lower relative inflation",
      ],
    },
    {
      type: "text",
      body: "Balance-of-payments evaluation: a current-account deficit isn't bad per se — if it finances investment imports it builds future capacity; if it funds consumption it's unsustainable. Surpluses can mean weak domestic demand (e.g. a persistent-surplus economy relying on exports).",
    },
    {
      type: "example",
      title: "BoP arithmetic",
      steps: [
        "Exports $80bn, imports $95bn, net income −$5bn, transfers +$4bn. Current account?",
        "Trade: −15; total = −15 − 5 + 4",
        "= **−$16bn deficit**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Distinguish the accounts: current = trade + income + transfers; financial = FDI/portfolio/reserves. Exam questions love mixing them up in data.",
    },
  ],
  "ec-l22": [
    {
      type: "warmup",
      prompt: "Two countries scrap mutual tariffs but keep independent external tariffs. What stage of integration is this?",
      answer: "A free-trade area — only a customs union adds the common external tariff.",
    },
    {
      type: "text",
      body: "**Economic integration** ranges from preferential trade areas → free-trade areas → customs unions (common external tariff) → common markets (free factor movement) → monetary union. Benefits: bigger markets, specialisation, FDI; costs: loss of sovereignty (a monetary-union member can't set its own interest rate or devalue).",
    },
    {
      type: "check",
      prompt: "Why do Eurozone members lose a policy tool that floating-rate countries keep?",
      answer: "Monetary union means one shared interest rate and no independent devaluation — adjustment must come through wages/prices ('internal devaluation').",
    },
    {
      type: "definition",
      term: "Trade creation vs trade diversion",
      body: "Creation: integration shifts consumption from high-cost domestic to cheaper partner producers (welfare gain). Diversion: shifts from cheapest outside supplier to a member (welfare loss) — the net decides whether a bloc helps.",
    },
    {
      type: "text",
      body: "J-curve recap for evaluation: depreciation first worsens the trade balance (in-currency import bills rise before volumes adjust) then improves it if Marshall–Lerner holds. Time horizon is the evaluation.",
    },
    {
      type: "example",
      title: "Integration ladder",
      steps: [
        "Bloc A removes internal tariffs AND sets a common external tariff. Which stage?",
        "Free-trade area = internal tariffs only; adding common external tariff",
        "→ **customs union**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "For monetary-union evaluation, the 'no independent monetary policy / no devaluation' point is the strongest — cite a real case (e.g. Eurozone members during crisis).",
    },
  ],
  "ec-l13": [
    {
      type: "warmup",
      prompt: "Country X doubles GDP per capita while life expectancy and literacy stagnate. Growth, development, or both?",
      answer: "Growth only — GDP rose but the well-being dimensions that define development didn't move.",
    },
    {
      type: "text",
      body: "**Economic growth** = increase in real GDP; **economic development** = broader improvement in well-being — health, education, freedoms, sustainability. A country can grow without developing (rising GDP alongside inequality and environmental damage).",
    },
    {
      type: "check",
      prompt: "Why do economists prefer HDI over GDP per capita for ranking countries?",
      answer: "HDI adds health and education to income — GDP alone ignores how income converts into actual capabilities and well-being.",
    },
    {
      type: "definition",
      term: "Human Development Index",
      body: "A composite measure of development: life expectancy, years of schooling and GNI per capita. Ranks countries 0–1, capturing well-being beyond income.",
    },
    {
      type: "list",
      title: "Beyond-GDP measures",
      items: [
        "HDI — health + education + income",
        "Happiness/well-being indexes",
        "Gini / income-share data for equity",
        "Sustainability indicators (e.g. natural-capital measures)",
      ],
    },
    {
      type: "text",
      body: "Common barriers to development: poverty cycles, institutional weakness, debt, commodity dependence, poor infrastructure, conflict. Growth can relax some constraints but doesn't fix distribution automatically.",
    },
    {
      type: "example",
      title: "Growth vs development",
      steps: [
        "Country X: GDP per capita +6%/yr, but literacy stagnant and forest cover −3%/yr.",
        "Growth? Yes (real GDP rising). Development? Ambiguous — education flat, sustainability falling",
        "→ **growth without full development** — the textbook distinction",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Use the growth/development distinction as your evaluation move: nearly every 'does X improve the economy' answer is stronger split into output vs well-being effects.",
    },
  ],
  "ec-l14": [
    {
      type: "warmup",
      prompt: "A carbon tax raises energy prices that hit poor households hardest. Pro or con for sustainability?",
      answer: "Mixed — environmentally it's sound policy, but it's regressive unless revenue is recycled to lower-income groups; evaluation must weigh both.",
    },
    {
      type: "text",
      body: "Sustainability and equity are evaluative battlegrounds. Development paths that deplete natural capital raise current income at the expense of future well-being; redistribution can support equity but may blunt incentives — the classic efficiency–equity debate runs through Paper 1(b) answers.",
    },
    {
      type: "check",
      prompt: "Why does 'growth first, redistribute later' often fail the sustainability test?",
      answer: "Growth patterns set infrastructure and consumption norms — environmental and equity damage locked in early is hard to reverse later.",
    },
    {
      type: "definition",
      term: "Sustainable development",
      body: "Development meeting the needs of the present without compromising the ability of future generations to meet their own needs — balancing economic, social and environmental goals.",
    },
    {
      type: "list",
      title: "Intervention debates to rehearse",
      items: [
        "Carbon pricing vs regulation",
        "Aid vs trade vs FDI",
        "Redistribution vs growth-first strategies",
        "Market-based vs interventionist supply-side policy",
      ],
    },
    {
      type: "example",
      title: "Framing an evaluation",
      steps: [
        "'Discuss whether a carbon tax promotes sustainable development.'",
        "For: internalises externality, funds green investment",
        "Against: regressive, carbon leakage if neighbours don't act",
        "Conclusion: effective IF revenue is recycled progressively and trading partners coordinate",
      ],
      blank: 2,
    },
    {
      type: "tip",
      body: "Real-world examples lift 15-mark answers: have one policy case per debate (a carbon-tax country, a microfinance scheme, a fair-trade programme) ready to cite.",
    },
  ],
  "ec-l23": [
    {
      type: "warmup",
      prompt: "Gini = 0.6 in country A vs 0.3 in country B — which Lorenz curve bows further from the equality line?",
      answer: "Country A — Gini measures that bowed area; higher Gini means the bottom shares hold less of total income.",
    },
    {
      type: "text",
      body: "**Inequality** is measured with the Lorenz curve — cumulative % of income against cumulative % of population; the further it bows from the 45° equality line, the more unequal. The **Gini coefficient** = A/(A+B), 0 = perfect equality, 1 = one person owns everything. Direct taxes and transfers flatten the curve; indirect taxes can steepen it.",
    },
    {
      type: "check",
      prompt: "Why can progressive taxation shrink the Lorenz gap without shrinking the pie?",
      answer: "Transfers re-weight income shares toward the bottom quintiles — post-tax Lorenz curves lie inside pre-tax ones, and evidence for big incentive losses is mixed at moderate rates.",
    },
    {
      type: "definition",
      term: "Gini coefficient",
      body: "Ratio of the area between the Lorenz curve and the line of equality to the total area under that line: 0 perfect equality, 1 maximum inequality.",
    },
    {
      type: "formula",
      label: "Gini",
      body: "Gini = A / (A + B), where A = area between the Lorenz curve and the 45° line, B = area under the Lorenz curve. 0 = perfect equality, 1 = one person has everything",
    },
    {
      type: "text",
      body: "Causes of inequality: asset ownership, education gaps, labour-market structure, discrimination, tax design. Consequences: lower aggregate demand (rich save more), worse health/social outcomes, but argued incentive benefits.",
    },
    {
      type: "example",
      title: "Reading a Lorenz table",
      steps: [
        "Poorest 20% earn 5% of income; next 20% earn 10%; next 20% earn 15%; richest 40% earn 70%.",
        "Cumulative shares: bottom 20% → 5%, bottom 40% → 15%, bottom 60% → 30%, all → 100%",
        "A Lorenz curve through those points sits far below the 45° line → **high inequality**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Gini questions need interpretation: 0.55 is high (very unequal); also compare pre- vs post-tax/transfer Gini to show redistribution effectiveness.",
    },
  ],
  "ec-l24": [
    {
      type: "warmup",
      prompt: "Inflation is driven by a supply shock (oil). Will raising interest rates fix it cleanly?",
      answer: "No — contractionary policy lowers inflation only by depressing output further; supply shocks need supply-side or patience, making it a policy dilemma.",
    },
    {
      type: "text",
      body: "Full policy evaluation: weigh fiscal, monetary and supply-side responses against the problem's cause, time horizon and side-effects. Demand shocks → demand management; supply shocks/structural stagnation → supply-side. Contractionary demand policy fights inflation at an output cost — the Phillips trade-off.",
    },
    {
      type: "check",
      prompt: "Why is 'it depends on the cause of the problem' the right evaluation move?",
      answer: "Demand-deficient vs structural problems need different instruments — fiscal/monetary manage AD; supply-side reforms fix capacity.",
    },
    {
      type: "list",
      title: "Evaluation checklist (use in essays)",
      items: [
        "Effectiveness: does it hit the target variable?",
        "Time lags: recognition, implementation, impact",
        "Side-effects: debt, inequality, environment",
        "Alternatives: is another policy better suited?",
        "Real-world example: name a country/policy",
      ],
    },
    {
      type: "text",
      body: "Market-based supply-side (deregulation, privatisation, lower income taxes) vs interventionist (education, healthcare, infrastructure): the former bets on incentives, the latter on capability — most evaluations land on a mix.",
    },
    {
      type: "example",
      title: "Choosing policy",
      steps: [
        "Unemployment is structural (skills mismatch in a declining industry). Best policy?",
        "Demand stimulus won't fix mismatch — workers lack needed skills",
        "→ **interventionist supply-side: retraining/education**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "In 15-mark evaluation essays, reach a justified conclusion — 'it depends on…' plus the decisive factor scores higher than an uncommitted summary.",
    },
  ],
  "ec-l25": [
    {
      type: "warmup",
      prompt: "A country receives large aid inflows but its government spends them on prestige projects. Aid helping or hurting?",
      answer: "Hurting, likely — aid's development effect depends on governance and use; misallocated aid can entrench dependency without building capacity.",
    },
    {
      type: "text",
      body: "Development strategies split into market-led (trade liberalisation, FDI, privatisation) and interventionist (import substitution, aid, industrial policy). **Foreign aid** provides resources but risks dependency and mismanagement; **debt** burdens (e.g. servicing costs crowding out health spending) trap some economies; **microfinance** and fair-trade schemes work at household level.",
    },
    {
      type: "check",
      prompt: "Why do heavy debt-servicing costs crowd out development spending?",
      answer: "Interest payments come before health/education in the budget — a debt trap diverts scarce public resources to creditors instead of capability building.",
    },
    {
      type: "definition",
      term: "Export promotion vs import substitution",
      body: "Promotion: grow via exports and open trade (East-Asian model); substitution: protect domestic industry to replace imports (Latin-America model, largely abandoned after inefficiencies).",
    },
    {
      type: "list",
      title: "Development measurement set",
      items: [
        "GDP/GNI per capita (PPP-adjusted)",
        "HDI — health + education + income",
        "Poverty lines ($/day), inequality (Gini)",
        "Composite well-being and sustainability indexes",
      ],
    },
    {
      type: "text",
      body: "Aid evaluation: humanitarian/emergency aid saves lives; tied aid benefits donors; concessional loans still add debt. FDI brings capital, tech and jobs but can repatriate profits and exploit labour/resources.",
    },
    {
      type: "example",
      title: "Aid vs trade argument",
      steps: [
        "'Aid vs trade for development' — structure the answer:",
        "Aid: immediate resource transfer, but dependency + governance risks",
        "Trade: self-sustaining growth via comparative advantage, but needs infrastructure + market access",
        "Conclusion: trade builds durable growth; aid bridges the transition — cite one country each",
      ],
      blank: 2,
    },
    {
      type: "tip",
      body: "Debt-relief arguments: high servicing costs crowd out public spending — quantify ('health budget < debt payments') where you can cite a case.",
    },
  ],
};
