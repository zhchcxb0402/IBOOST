import type { Subject } from "../types";

export const economics: Subject = {
  slug: "economics",
  name: "Economics",
  short: "Econ",
  color: "#58CC02",
  emoji: "📈",
  units: [
    {
      id: "eco-u1",
      title: "Microeconomics",
      lessons: [
        {
          id: "eco-l1",
          title: "Demand",
          questions: [
            {
              id: "eco-l1-q1",
              type: "mcq",
              prompt: "The law of demand states that as price rises…",
              choices: [
                "quantity demanded falls, ceteris paribus",
                "demand increases",
                "supply falls",
                "income rises",
              ],
              answerIndex: 0,
              explanation:
                "An inverse relationship between price and quantity demanded.",
            },
            {
              id: "eco-l1-q2",
              type: "mcq",
              prompt: "Which is NOT a determinant of demand?",
              choices: [
                "Cost of production",
                "Consumer income",
                "Price of substitutes",
                "Tastes and preferences",
              ],
              answerIndex: 0,
              explanation:
                "Costs of production shift supply, not demand.",
            },
            {
              id: "eco-l1-q3",
              type: "mcq",
              prompt:
                "A rise in the price of coffee causes what change in the tea market?",
              choices: [
                "Demand for tea shifts right",
                "Demand for tea shifts left",
                "Movement up the tea demand curve",
                "Supply of tea increases",
              ],
              answerIndex: 0,
              explanation:
                "Tea is a substitute — consumers switch, raising tea demand.",
            },
            {
              id: "eco-l1-q4",
              type: "fill",
              prompt:
                "A change in a good's own price causes a ________ along the demand curve (one word).",
              answer: "movement",
              acceptable: ["movement", "extension", "contraction"],
              explanation:
                "Only non-price determinants shift the curve; own-price changes cause movements.",
            },
            {
              id: "eco-l1-q5",
              type: "mcq",
              prompt: "For a normal good, higher income leads to…",
              choices: [
                "demand shifting right",
                "demand shifting left",
                "a movement along the curve",
                "lower quantity supplied",
              ],
              answerIndex: 0,
              explanation:
                "Normal goods: income ↑ → demand ↑. Inferior goods do the opposite.",
            },
            {
              id: "eco-l1-q6",
              type: "mcq",
              prompt: "'Ceteris paribus' means…",
              choices: [
                "all other factors held constant",
                "prices always rise",
                "supply equals demand",
                "consumers are irrational",
              ],
              answerIndex: 0,
              explanation:
                "Latin for 'other things being equal' — isolates one variable.",
            },
          ],
        },
        {
          id: "eco-l2",
          title: "Supply & equilibrium",
          questions: [
            {
              id: "eco-l2-q1",
              type: "mcq",
              prompt: "The law of supply states that as price rises…",
              choices: [
                "quantity supplied rises, ceteris paribus",
                "quantity supplied falls",
                "demand shifts right",
                "costs always fall",
              ],
              answerIndex: 0,
              explanation:
                "Higher prices incentivise producers to supply more.",
            },
            {
              id: "eco-l2-q2",
              type: "mcq",
              prompt: "Market equilibrium occurs where…",
              choices: [
                "quantity demanded equals quantity supplied",
                "price is at a maximum",
                "supply is zero",
                "there is a surplus",
              ],
              answerIndex: 0,
              explanation:
                "Qd = Qs — no tendency for price to change.",
            },
            {
              id: "eco-l2-q3",
              type: "mcq",
              prompt: "If price is above equilibrium, there is…",
              choices: [
                "a surplus and downward price pressure",
                "a shortage",
                "equilibrium",
                "excess demand",
              ],
              answerIndex: 0,
              explanation:
                "Qs > Qd creates a surplus; sellers lower prices to clear stock.",
            },
            {
              id: "eco-l2-q4",
              type: "fill",
              prompt:
                "If demand rises while supply stays constant, the equilibrium price will ________ (one word).",
              answer: "rise",
              acceptable: ["increase", "go up", "rise/increase"],
              explanation:
                "A rightward demand shift pushes price and quantity up.",
            },
            {
              id: "eco-l2-q5",
              type: "mcq",
              prompt: "Which shifts the supply curve left?",
              choices: [
                "Higher input costs",
                "A subsidy",
                "Better technology",
                "More firms entering",
              ],
              answerIndex: 0,
              explanation:
                "Higher costs reduce supply at every price — a leftward shift.",
            },
            {
              id: "eco-l2-q6",
              type: "mcq",
              prompt: "A price ceiling set below equilibrium causes…",
              choices: [
                "a shortage",
                "a surplus",
                "equilibrium",
                "higher supply",
              ],
              answerIndex: 0,
              explanation:
                "Qd exceeds Qs at the capped price — excess demand.",
            },
          ],
        },
        {
          id: "eco-l3",
          title: "Elasticity",
          questions: [
            {
              id: "eco-l3-q1",
              type: "mcq",
              prompt: "Price elasticity of demand (PED) equals…",
              choices: [
                "%ΔQd / %ΔP",
                "%ΔP / %ΔQd",
                "ΔP / ΔQd",
                "P × Q",
              ],
              answerIndex: 0,
              explanation:
                "PED measures responsiveness of quantity demanded to price.",
            },
            {
              id: "eco-l3-q2",
              type: "fill",
              prompt:
                "Price rises 5% and quantity demanded falls 10%. Find PED (absolute value).",
              answer: "2",
              acceptable: ["-2", "2.0"],
              explanation: "PED = 10/5 = 2 — elastic.",
            },
            {
              id: "eco-l3-q3",
              type: "mcq",
              prompt: "Demand is price elastic when PED is…",
              choices: [
                "greater than 1",
                "equal to 0",
                "between 0 and 1",
                "negative",
              ],
              answerIndex: 0,
              explanation:
                "|PED| > 1 → quantity responds proportionally more than price.",
            },
            {
              id: "eco-l3-q4",
              type: "mcq",
              prompt: "Which good is likely to have inelastic demand?",
              choices: [
                "Insulin for diabetics",
                "A specific brand of cereal",
                "Luxury holidays",
                "Restaurant meals",
              ],
              answerIndex: 0,
              explanation:
                "Necessities with no substitutes have low PED.",
            },
            {
              id: "eco-l3-q5",
              type: "fill",
              prompt:
                "If PED = 0.5, a 10% price rise changes quantity demanded by ________ % (absolute value).",
              answer: "5",
              acceptable: ["5%", "-5"],
              explanation: "%ΔQd = PED × %ΔP = 0.5 × 10 = 5%.",
            },
            {
              id: "eco-l3-q6",
              type: "mcq",
              prompt:
                "When demand is elastic, a price decrease leads to…",
              choices: [
                "higher total revenue",
                "lower total revenue",
                "unchanged revenue",
                "zero demand",
              ],
              answerIndex: 0,
              explanation:
                "The quantity response outweighs the price cut, raising revenue.",
            },
          ],
        },
      ],
    },
    {
      id: "eco-u2",
      title: "Macroeconomics",
      lessons: [
        {
          id: "eco-l4",
          title: "GDP & growth",
          questions: [
            {
              id: "eco-l4-q1",
              type: "mcq",
              prompt: "GDP measures…",
              choices: [
                "total output of goods and services in an economy per period",
                "total government spending",
                "the money supply",
                "total exports minus imports only",
              ],
              answerIndex: 0,
              explanation:
                "Gross Domestic Product = value of all final output within a country.",
            },
            {
              id: "eco-l4-q2",
              type: "mcq",
              prompt: "Real GDP differs from nominal GDP because it…",
              choices: [
                "is adjusted for inflation",
                "includes informal output",
                "counts exports only",
                "uses current prices",
              ],
              answerIndex: 0,
              explanation:
                "Real GDP uses constant prices, stripping out price-level changes.",
            },
            {
              id: "eco-l4-q3",
              type: "fill",
              prompt:
                "A country has GDP of $500 billion and population 50 million. Find GDP per capita in dollars.",
              answer: "10000",
              acceptable: ["$10000", "10,000", "$10,000"],
              explanation: "500 bn ÷ 50 m = $10,000 per person.",
            },
            {
              id: "eco-l4-q4",
              type: "mcq",
              prompt: "The business cycle phases in order are…",
              choices: [
                "expansion → peak → contraction → trough",
                "peak → expansion → trough → contraction",
                "trough → peak → expansion → contraction",
                "contraction → expansion → peak → trough",
              ],
              answerIndex: 0,
              explanation:
                "Growth to peak, then recession down to trough, then recovery.",
            },
            {
              id: "eco-l4-q5",
              type: "mcq",
              prompt: "Economic growth is best measured by…",
              choices: [
                "percentage change in real GDP",
                "nominal GDP in dollars",
                "the stock market index",
                "the inflation rate",
              ],
              answerIndex: 0,
              explanation:
                "Growth = % increase in real output over time.",
            },
            {
              id: "eco-l4-q6",
              type: "fill",
              prompt:
                "Nominal GDP rises 6% while inflation is 4%. Find approximate real GDP growth in %.",
              answer: "2",
              acceptable: ["2%"],
              explanation: "Real growth ≈ nominal − inflation = 6 − 4 = 2%.",
            },
          ],
        },
        {
          id: "eco-l5",
          title: "Inflation & unemployment",
          questions: [
            {
              id: "eco-l5-q1",
              type: "mcq",
              prompt: "Inflation is typically measured using…",
              choices: [
                "the Consumer Price Index (CPI)",
                "GDP per capita",
                "the unemployment rate",
                "interest rates",
              ],
              answerIndex: 0,
              explanation:
                "CPI tracks a weighted basket of consumer goods and services.",
            },
            {
              id: "eco-l5-q2",
              type: "fill",
              prompt:
                "The CPI rises from 120 to 126. Find the inflation rate in %.",
              answer: "5",
              acceptable: ["5%"],
              explanation: "(126 − 120)/120 × 100 = 5%.",
            },
            {
              id: "eco-l5-q3",
              type: "mcq",
              prompt: "Demand-pull inflation is caused by…",
              choices: [
                "excess aggregate demand",
                "rising wage costs",
                "supply shocks",
                "higher import prices",
              ],
              answerIndex: 0,
              explanation:
                "'Too much money chasing too few goods' — AD outpaces AS.",
            },
            {
              id: "eco-l5-q4",
              type: "mcq",
              prompt: "Structural unemployment results from…",
              choices: [
                "a mismatch between workers' skills and job requirements",
                "the business cycle downturn",
                "people between jobs",
                "seasonal work patterns",
              ],
              answerIndex: 0,
              explanation:
                "E.g. industries decline and skills become obsolete.",
            },
            {
              id: "eco-l5-q5",
              type: "mcq",
              prompt: "Deflation means…",
              choices: [
                "a sustained fall in the general price level",
                "slower inflation",
                "zero unemployment",
                "falling GDP",
              ],
              answerIndex: 0,
              explanation:
                "Negative inflation — distinct from disinflation (slower price rises).",
            },
            {
              id: "eco-l5-q6",
              type: "fill",
              prompt:
                "An economy has 5 million unemployed and a labour force of 100 million. Find the unemployment rate in %.",
              answer: "5",
              acceptable: ["5%"],
              explanation: "5/100 × 100 = 5%.",
            },
          ],
        },
        {
          id: "eco-l6",
          title: "Fiscal & monetary policy",
          questions: [
            {
              id: "eco-l6-q1",
              type: "mcq",
              prompt: "Fiscal policy involves changes in…",
              choices: [
                "government spending and taxation",
                "interest rates and money supply",
                "exchange rates only",
                "trade quotas",
              ],
              answerIndex: 0,
              explanation:
                "Fiscal = budget tools (G and T); monetary = central bank tools.",
            },
            {
              id: "eco-l6-q2",
              type: "mcq",
              prompt:
                "An expansionary fiscal policy to fight recession includes…",
              choices: [
                "cutting taxes and raising spending",
                "raising taxes",
                "raising interest rates",
                "cutting spending",
              ],
              answerIndex: 0,
              explanation:
                "Stimulates aggregate demand via higher G and disposable income.",
            },
            {
              id: "eco-l6-q3",
              type: "mcq",
              prompt: "Monetary policy is conducted by…",
              choices: [
                "the central bank",
                "the finance ministry",
                "local governments",
                "the IMF",
              ],
              answerIndex: 0,
              explanation:
                "Central banks set interest rates and manage money supply.",
            },
            {
              id: "eco-l6-q4",
              type: "fill",
              prompt:
                "To cool down high inflation, the central bank would ________ interest rates (one word).",
              answer: "raise",
              acceptable: ["increase", "hike", "raise/increase"],
              explanation:
                "Higher rates reduce borrowing and spending, lowering demand-pull inflation.",
            },
            {
              id: "eco-l6-q5",
              type: "mcq",
              prompt: "A budget deficit occurs when…",
              choices: [
                "government spending exceeds tax revenue",
                "taxes exceed spending",
                "exports exceed imports",
                "inflation is negative",
              ],
              answerIndex: 0,
              explanation:
                "G > T — financed by borrowing, adding to national debt.",
            },
            {
              id: "eco-l6-q6",
              type: "mcq",
              prompt: "Lower interest rates tend to…",
              choices: [
                "stimulate consumption and investment",
                "reduce aggregate demand",
                "strengthen the currency",
                "increase saving",
              ],
              answerIndex: 0,
              explanation:
                "Cheaper borrowing raises C and I, shifting AD right.",
            },
          ],
        },
      ],
    },
  ],
};
