import type { Subject } from "../types";

export const mathAi: Subject = {
  slug: "math-ai",
  name: "Mathematics: Applications and Interpretation",
  short: "Math AI",
  color: "#4F46E5",
  emoji: "🧮",
  group: "Mathematics",
  levels: ["SL", "HL"],
  description:
    "Mathematics: Applications and Interpretation — the five topics taught through modelling, technology and real-world data.",
  syllabusUrl: "https://www.ibo.org/programmes/diploma-programme/curriculum/mathematics/",
  units: [
    {
      id: "mai-u1",
      code: "Topic 1",
      title: "Number and algebra",
      lessons: [
        {
          id: "mai-l1",
          title: "Financial maths: compound interest and annuities",
          questions: [
            {
              id: "mai-l1-q1",
              type: "mcq",
              prompt:
                "$5,000 is invested at 4% per annum compounded annually. What is it worth after 3 years?",
              choices: ["$5,600", "$5,624.32", "$5,624.00", "$5,412.16"],
              answerIndex: 1,
              explanation:
                "FV = 5000 × 1.04³ = 5000 × 1.124864 = $5,624.32.",
            },
            {
              id: "mai-l1-q2",
              type: "mcq",
              prompt:
                "Which formula gives the future value of an investment earning r% per annum, compounded k times per year for n years?",
              choices: [
                "FV = PV × (1 + r·n)",
                "FV = PV × (1 + r/(100k))^(kn)",
                "FV = PV × (1 + r)^n / k",
                "FV = PV + PV × r × n / 100",
              ],
              answerIndex: 1,
              explanation:
                "Each period's rate is r/(100k) and there are kn compounding periods.",
            },
            {
              id: "mai-l1-q3",
              type: "tf",
              prompt:
                "An amortisation schedule spreads a loan repayment into equal periodic payments covering interest and principal.",
              answer: true,
              explanation:
                "Amortising a loan means equal payments that gradually shift from mostly interest to mostly principal.",
            },
            {
              id: "mai-l1-q4",
              type: "short",
              prompt:
                "An investment of $1,000 earns 6% interest compounded annually. Give its value after 2 years, in dollars to 2 decimal places.",
              answer: "1123.60",
              keywords: ["1123"],
              acceptable: ["1123.6", "1123.60"],
              explanation:
                "FV = 1000 × 1.06² = $1,123.60.",
            },
            {
              id: "mai-l1-q5",
              type: "short",
              prompt:
                "A car worth $20,000 depreciates 15% per year. Give its value after 2 years, in dollars.",
              answer: "14450",
              keywords: ["14450"],
              acceptable: ["14,450", "$14450"],
              explanation:
                "V = 20000 × 0.85² = 20000 × 0.7225 = $14,450.",
            },
            {
              id: "mai-l1-q6",
              type: "mcq",
              prompt:
                "On a GDC's TVM solver, the variable 'N' represents",
              choices: [
                "the nominal interest rate",
                "the number of compounding periods",
                "the new value",
                "the number of payments per year only",
              ],
              answerIndex: 1,
              explanation:
                "N is the total number of compounding periods (years × periods per year).",
            },
          ],
        },
        {
          id: "mai-l2",
          title: "Exponents, logarithms and approximation",
          questions: [
            {
              id: "mai-l2-q1",
              type: "mcq",
              prompt: "log₁₀ 1000 equals",
              choices: ["10", "30", "3", "100"],
              answerIndex: 2,
              explanation: "10³ = 1000, so log₁₀ 1000 = 3.",
            },
            {
              id: "mai-l2-q2",
              type: "mcq",
              prompt:
                "Write 0.000042 in standard form (scientific notation).",
              choices: [
                "4.2 × 10⁻⁵",
                "42 × 10⁻⁶",
                "4.2 × 10⁻⁴",
                "0.42 × 10⁻⁴",
              ],
              answerIndex: 0,
              explanation:
                "Move the decimal point 5 places right: 4.2 × 10⁻⁵.",
            },
            {
              id: "mai-l2-q3",
              type: "tf",
              prompt:
                "The natural logarithm ln(x) uses base e ≈ 2.718.",
              answer: true,
              explanation:
                "ln is the logarithm to base e; log without a subscript usually means base 10.",
            },
            {
              id: "mai-l2-q4",
              type: "mcq",
              prompt:
                "A measurement of 50 cm is rounded from a true value of 49.4 cm. What is the percentage error?",
              choices: ["0.6%", "1.2%", "2.4%", "6%"],
              answerIndex: 1,
              explanation:
                "|50 − 49.4| / 49.4 × 100 ≈ 1.21% ≈ 1.2%.",
            },
            {
              id: "mai-l2-q5",
              type: "short",
              prompt:
                "Solve for x: log₂ x = 5. Give the value of x.",
              answer: "32",
              keywords: ["32"],
              explanation: "x = 2⁵ = 32.",
            },
            {
              id: "mai-l2-q6",
              type: "short",
              prompt:
                "Express 3 450 000 in standard form (coefficient then power of 10).",
              answer: "3.45 × 10^6",
              keywords: ["3.45", "10", "6"],
              acceptable: ["3.45e6", "3.45×10^6", "3.45 x 10^6"],
              explanation:
                "Move the decimal 6 places left: 3.45 × 10⁶.",
            },
          ],
        },
        {
          id: "mai-l13",
          title: "Annuities, amortisation and TVM practice",
          questions: [
            {
              id: "mai-l13-q1",
              type: "mcq",
              prompt:
                "In TVM solvers, PV is usually entered as a NEGATIVE number because",
              choices: [
                "it is a debt",
                "it represents money paid out (cash flow convention)",
                "the calculator is wrong",
                "interest is negative",
              ],
              answerIndex: 1,
              explanation:
                "Sign convention: outflows negative, inflows positive.",
            },
            {
              id: "mai-l13-q2",
              type: "mcq",
              prompt:
                "To find monthly loan repayments on a GDC you solve TVM for",
              choices: ["FV", "PMT", "I%", "PV"],
              answerIndex: 1,
              explanation:
                "PMT is the periodic payment; set N = months, FV = 0.",
            },
            {
              id: "mai-l13-q3",
              type: "tf",
              prompt:
                "In the early years of an amortised loan, most of each payment is interest.",
              answer: true,
              explanation:
                "The balance is largest early on, so interest dominates; principal share grows later.",
            },
            {
              id: "mai-l13-q4",
              type: "mcq",
              prompt:
                "The future value of an annuity paying PMT per period at rate i for n periods contains the factor",
              choices: [
                "(1 + i)ⁿ − 1) / i",
                "(1 + i)^−n",
                "iⁿ",
                "n·i",
              ],
              answerIndex: 0,
              explanation:
                "FV = PMT·((1 + i)ⁿ − 1)/i — each payment compounds for a different number of periods.",
            },
            {
              id: "mai-l13-q5",
              type: "short",
              prompt:
                "$1,000 at 12% per year compounded monthly. Give its value after 1 year to 2 decimal places.",
              answer: "1126.83",
              keywords: ["1126"],
              acceptable: ["1126.8", "1126.83"],
              explanation:
                "1000 × 1.01¹² = 1000 × 1.126825 ≈ $1,126.83.",
            },
            {
              id: "mai-l13-q6",
              type: "short",
              prompt:
                "$100 is deposited at the END of each year for 3 years at 5%. Give the future value to 2 decimal places.",
              answer: "315.25",
              keywords: ["315"],
              acceptable: ["315.25"],
              explanation:
                "FV = 100·(1.05³ − 1)/0.05 = 100 × 3.1525 = $315.25.",
            },
          ],
        },
        {
          id: "mai-l14",
          title: "Sequences, sigma notation and approximation",
          questions: [
            {
              id: "mai-l14-q1",
              type: "mcq",
              prompt:
                "The nth term of an arithmetic sequence with first term a and difference d is",
              choices: [
                "a + nd",
                "a + (n − 1)d",
                "a·dⁿ",
                "a + d(n + 1)",
              ],
              answerIndex: 1,
              explanation: "uₙ = a + (n − 1)d.",
            },
            {
              id: "mai-l14-q2",
              type: "mcq",
              prompt:
                "The sum of the first n terms of a geometric series (r ≠ 1) is",
              choices: [
                "a(rⁿ − 1)/(r − 1)",
                "a·rⁿ",
                "n·a·r",
                "a/(1 − r)",
              ],
              answerIndex: 0,
              explanation: "Sₙ = a(rⁿ − 1)/(r − 1).",
            },
            {
              id: "mai-l14-q3",
              type: "tf",
              prompt: "Σ (sigma) notation means 'add the terms'.",
              answer: true,
              explanation:
                "Σ_{k=1}^{n} u_k = u₁ + u₂ + … + uₙ.",
            },
            {
              id: "mai-l14-q4",
              type: "mcq",
              prompt: "The 5th term of 3, 7, 11, … is",
              choices: ["15", "19", "23", "17"],
              answerIndex: 1,
              explanation: "u₅ = 3 + 4×4 = 19.",
            },
            {
              id: "mai-l14-q5",
              type: "short",
              prompt: "Give the sum of the first 10 positive integers.",
              answer: "55",
              keywords: ["55"],
              explanation: "S₁₀ = 10×11/2 = 55.",
            },
            {
              id: "mai-l14-q6",
              type: "short",
              prompt: "Give the 4th term of the geometric sequence 2, 6, 18, …",
              answer: "54",
              keywords: ["54"],
              explanation: "u₄ = 2 × 3³ = 54.",
            },
          ],
        },
        {
          id: "mai-l15",
          title: "Number and algebra: exam practice",
          questions: [
            {
              id: "mai-l15-q1",
              type: "mcq",
              prompt: "How many significant figures does 0.00450 have?",
              choices: ["2", "3", "5", "6"],
              answerIndex: 1,
              explanation:
                "Leading zeros don't count; the trailing zero does → 4, 5, 0 = 3 s.f.",
            },
            {
              id: "mai-l15-q2",
              type: "mcq",
              prompt:
                "Over a long period, compound interest compared to simple interest on the same principal and rate",
              choices: [
                "earns less",
                "earns the same",
                "earns more, and the gap widens",
                "depends on the bank",
              ],
              answerIndex: 2,
              explanation:
                "Interest-on-interest compounds — the gap grows exponentially.",
            },
            {
              id: "mai-l15-q3",
              type: "tf",
              prompt:
                "In exams, final answers are generally expected to 3 significant figures unless stated otherwise.",
              answer: true,
              explanation:
                "IB default: 3 s.f. (or as specified in the question).",
            },
            {
              id: "mai-l15-q4",
              type: "mcq",
              prompt: "The absolute error of an approximation is",
              choices: [
                "approx − exact",
                "|approx − exact|",
                "approx/exact",
                "exact/approx",
              ],
              answerIndex: 1,
              explanation:
                "Absolute error is the magnitude of the difference.",
            },
            {
              id: "mai-l15-q5",
              type: "short",
              prompt:
                "$1,000 invested at 5% SIMPLE interest for 3 years. Give the final value in dollars.",
              answer: "1150",
              keywords: ["1150"],
              acceptable: ["1,150"],
              explanation: "Interest = 1000×0.05×3 = 150 → $1,150.",
            },
            {
              id: "mai-l15-q6",
              type: "short",
              prompt: "Round 234.567 to 3 significant figures.",
              answer: "235",
              keywords: ["235"],
              explanation: "234.567 → first 3 s.f. are 234, next digit 5 rounds up → 235.",
            },
          ],
        },
      ],
    },
    {
      id: "mai-u2",
      code: "Topic 2",
      title: "Functions",
      lessons: [
        {
          id: "mai-l3",
          title: "Linear, exponential and logistic models",
          questions: [
            {
              id: "mai-l3-q1",
              type: "mcq",
              prompt:
                "A population grows according to P(t) = 1200 × 1.03ᵗ. The growth rate per unit time is",
              choices: ["3%", "103%", "30%", "0.03%"],
              answerIndex: 0,
              explanation:
                "The multiplier 1.03 = 1 + 0.03 means 3% growth per period.",
            },
            {
              id: "mai-l3-q2",
              type: "mcq",
              prompt:
                "A logistic model is most appropriate when a quantity",
              choices: [
                "grows without bound",
                "decreases linearly to zero",
                "grows quickly at first then levels off at a carrying capacity",
                "oscillates periodically",
              ],
              answerIndex: 2,
              explanation:
                "Logistic curves are S-shaped: rapid early growth that saturates at a maximum.",
            },
            {
              id: "mai-l3-q3",
              type: "tf",
              prompt:
                "In an exponential model, the dependent variable changes by a constant AMOUNT each period.",
              answer: false,
              explanation:
                "Constant amount = linear; exponential changes by a constant FACTOR.",
            },
            {
              id: "mai-l3-q4",
              type: "mcq",
              prompt:
                "The graph of y = a·bˣ + c has a horizontal asymptote at",
              choices: ["y = 0", "y = a", "y = c", "y = b"],
              answerIndex: 2,
              explanation:
                "As x → ±∞, a·bˣ → 0 (or ∞ on the other side), leaving y = c as the asymptote.",
            },
            {
              id: "mai-l3-q5",
              type: "short",
              prompt:
                "A tank holds 500 L and drains at 25 L per hour. Write the linear model V(t) for the volume after t hours.",
              answer: "V(t) = 500 - 25t",
              keywords: ["500", "25"],
              acceptable: ["500-25t", "v=500-25t"],
              explanation:
                "Start value 500 minus 25 per hour: V(t) = 500 − 25t.",
            },
            {
              id: "mai-l3-q6",
              type: "short",
              prompt:
                "A bacterium colony doubles every hour starting from 300 cells. How many cells after 4 hours?",
              answer: "4800",
              keywords: ["4800"],
              acceptable: ["4,800"],
              explanation: "300 × 2⁴ = 300 × 16 = 4800.",
            },
          ],
        },
        {
          id: "mai-l4",
          title: "Sinusoidal models and regression",
          questions: [
            {
              id: "mai-l4-q1",
              type: "mcq",
              prompt:
                "For y = a·sin(bx) + d, the amplitude is",
              choices: ["b", "|a|", "d", "2π/b"],
              answerIndex: 1,
              explanation:
                "Amplitude = |a|; d is the midline, 2π/b the period.",
            },
            {
              id: "mai-l4-q2",
              type: "mcq",
              prompt:
                "Daily temperature data varies between 5°C and 25°C. The midline of the sinusoidal model is",
              choices: ["10°C", "15°C", "20°C", "30°C"],
              answerIndex: 1,
              explanation: "(max + min)/2 = (25 + 5)/2 = 15°C.",
            },
            {
              id: "mai-l4-q3",
              type: "tf",
              prompt:
                "A GDC sinusoidal regression finds the best-fitting a·sin(bx + c) + d curve for periodic data.",
              answer: true,
              explanation:
                "SinReg fits all four parameters; common for tides and temperatures.",
            },
            {
              id: "mai-l4-q4",
              type: "mcq",
              prompt:
                "A sinusoidal model has period 12 months. The value of b (x in months) is",
              choices: ["12", "π/6", "π/12", "6π"],
              answerIndex: 1,
              explanation:
                "period = 2π/b → b = 2π/12 = π/6.",
            },
            {
              id: "mai-l4-q5",
              type: "short",
              prompt:
                "Data has a maximum of 40 and a minimum of 8. Give the amplitude of the sinusoidal model.",
              answer: "16",
              keywords: ["16"],
              explanation: "Amplitude = (40 − 8)/2 = 16.",
            },
            {
              id: "mai-l4-q6",
              type: "short",
              prompt:
                "Tide height H(t) = 1.2 sin(πt/6) + 2.5 (t in hours). Give the maximum tide height in metres.",
              answer: "3.7",
              keywords: ["3.7"],
              explanation:
                "Max = midline + amplitude = 2.5 + 1.2 = 3.7 m.",
            },
          ],
        },
        {
          id: "mai-l16",
          title: "Logistic and piecewise models",
          questions: [
            {
              id: "mai-l16-q1",
              type: "mcq",
              prompt:
                "In the logistic model P = L/(1 + Ce^(−kt)), the carrying capacity is",
              choices: ["C", "k", "L", "e"],
              answerIndex: 2,
              explanation:
                "As t → ∞ the denominator → 1, so P → L.",
            },
            {
              id: "mai-l16-q2",
              type: "mcq",
              prompt: "A piecewise function is one that",
              choices: [
                "is always linear",
                "uses different rules on different parts of its domain",
                "has no domain",
                "is always continuous",
              ],
              answerIndex: 1,
              explanation:
                "Different formula per interval — e.g. tax brackets.",
            },
            {
              id: "mai-l16-q3",
              type: "tf",
              prompt:
                "A logistic curve grows rapidly then levels off at the carrying capacity.",
              answer: true,
              explanation:
                "The signature S-shape of constrained growth.",
            },
            {
              id: "mai-l16-q4",
              type: "mcq",
              prompt:
                "Which scenario best fits a LOGISTIC model?",
              choices: [
                "free-fall speed",
                "population growth with limited resources",
                "simple interest",
                "constant speed",
              ],
              answerIndex: 1,
              explanation:
                "Limited resources cap growth — logistic not exponential.",
            },
            {
              id: "mai-l16-q5",
              type: "short",
              prompt:
                "A logistic model has L = 1000. Give the long-term (maximum) population.",
              answer: "1000",
              keywords: ["1000"],
              acceptable: ["1,000"],
              explanation: "P → L = 1000 as t → ∞.",
            },
            {
              id: "mai-l16-q6",
              type: "short",
              prompt:
                "f(x) = x + 1 for x < 2, and f(x) = 5 for x ≥ 2. Give f(3).",
              answer: "5",
              keywords: ["5"],
              explanation: "3 ≥ 2 → second branch: f(3) = 5.",
            },
          ],
        },
        {
          id: "mai-l17",
          title: "Choosing and validating models",
          questions: [
            {
              id: "mai-l17-q1",
              type: "mcq",
              prompt: "A residual is defined as",
              choices: [
                "predicted − observed",
                "observed − predicted",
                "observed + predicted",
                "the mean of the data",
              ],
              answerIndex: 1,
              explanation:
                "Residual = observed − predicted; patterns in residuals reveal poor fits.",
            },
            {
              id: "mai-l17-q2",
              type: "mcq",
              prompt: "A coefficient of determination r² close to 1 indicates",
              choices: [
                "a poor fit",
                "a good fit",
                "no correlation",
                "negative correlation",
              ],
              answerIndex: 1,
              explanation:
                "r² ≈ 1 means the model explains almost all variation.",
            },
            {
              id: "mai-l17-q3",
              type: "tf",
              prompt:
                "A model is only as reliable as the assumptions it is built on.",
              answer: true,
              explanation:
                "Changing conditions (new data range, external factors) can break a model.",
            },
            {
              id: "mai-l17-q4",
              type: "mcq",
              prompt:
                "If residuals show a clear curved pattern, the chosen model is",
              choices: [
                "perfect",
                "probably the wrong shape for the data",
                "too accurate",
                "linear",
              ],
              answerIndex: 1,
              explanation:
                "Random residuals = good fit; systematic pattern = model mismatch.",
            },
            {
              id: "mai-l17-q5",
              type: "short",
              prompt:
                "Observed value 12, predicted 11.5. Give the residual.",
              answer: "0.5",
              keywords: ["0.5"],
              explanation: "Residual = 12 − 11.5 = 0.5.",
            },
            {
              id: "mai-l17-q6",
              type: "short",
              prompt:
                "Name the model type for a quantity that DOUBLES every year.",
              answer: "exponential",
              keywords: ["exponential"],
              explanation:
                "Constant multiplicative factor → exponential growth.",
            },
          ],
        },
        {
          id: "mai-l18",
          title: "Functions: exam practice",
          questions: [
            {
              id: "mai-l18-q1",
              type: "mcq",
              prompt: "The domain of f(x) = √x is",
              choices: [
                "all real numbers",
                "x ≥ 0",
                "x > 0",
                "x ≠ 0",
              ],
              answerIndex: 1,
              explanation: "Square root needs x ≥ 0.",
            },
            {
              id: "mai-l18-q2",
              type: "mcq",
              prompt:
                "The graph of an inverse function is the original graph reflected in",
              choices: [
                "the x-axis",
                "the y-axis",
                "the line y = x",
                "the origin",
              ],
              answerIndex: 2,
              explanation:
                "Inverting swaps x and y → reflection in y = x.",
            },
            {
              id: "mai-l18-q3",
              type: "tf",
              prompt:
                "The vertical line test checks whether a graph represents a function.",
              answer: true,
              explanation:
                "If a vertical line hits twice, x maps to two y's — not a function.",
            },
            {
              id: "mai-l18-q4",
              type: "mcq",
              prompt:
                "The horizontal asymptote of y = 1/x + 2 is",
              choices: ["y = 0", "x = 0", "y = 2", "x = 2"],
              answerIndex: 2,
              explanation: "1/x → 0, so y → 2.",
            },
            {
              id: "mai-l18-q5",
              type: "short",
              prompt: "f(x) = 2x². Give f(3).",
              answer: "18",
              keywords: ["18"],
              explanation: "2 × 9 = 18.",
            },
            {
              id: "mai-l18-q6",
              type: "short",
              prompt:
                "Give the vertical asymptote of f(x) = 1/(x − 2).",
              answer: "x = 2",
              keywords: ["2"],
              acceptable: ["x=2"],
              explanation: "Denominator zero at x = 2.",
            },
          ],
        },
      ],
    },
    {
      id: "mai-u3",
      code: "Topic 3",
      title: "Geometry and trigonometry",
      lessons: [
        {
          id: "mai-l5",
          title: "Trigonometry, bearings and Voronoi diagrams",
          questions: [
            {
              id: "mai-l5-q1",
              type: "mcq",
              prompt:
                "A bearing of 135° corresponds to which compass direction?",
              choices: ["North-east", "South-east", "South-west", "North-west"],
              answerIndex: 1,
              explanation:
                "Bearings are measured clockwise from north; 135° is between east (90°) and south (180°).",
            },
            {
              id: "mai-l5-q2",
              type: "mcq",
              prompt:
                "In a Voronoi diagram, the boundaries (edges) consist of points that are",
              choices: [
                "inside a single site's region",
                "equidistant from the two nearest sites",
                "at the same height",
                "on the convex hull",
              ],
              answerIndex: 1,
              explanation:
                "Each edge is the perpendicular bisector between two sites — all points on it are equidistant from both.",
            },
            {
              id: "mai-l5-q3",
              type: "tf",
              prompt:
                "The sine rule can be used in any triangle, not just right-angled triangles.",
              answer: true,
              explanation:
                "a/sin A = b/sin B = c/sin C holds for all triangles.",
            },
            {
              id: "mai-l5-q4",
              type: "mcq",
              prompt:
                "Every Voronoi cell (region) is",
              choices: [
                "always a rectangle",
                "a convex polygon containing exactly one site",
                "a circle",
                "unbounded in every direction",
              ],
              answerIndex: 1,
              explanation:
                "Each cell is the intersection of half-planes — a convex polygon around its site (edge cells are unbounded, but still convex).",
            },
            {
              id: "mai-l5-q5",
              type: "short",
              prompt:
                "A ladder 5 m long leans against a wall, touching it 4 m above the ground. How far is the base from the wall, in metres?",
              answer: "3",
              keywords: ["3"],
              explanation: "3-4-5 right triangle: √(25 − 16) = 3 m.",
            },
            {
              id: "mai-l5-q6",
              type: "short",
              prompt:
                "In triangle ABC, a = 8, A = 30°, B = 90°. Using the sine rule, give b.",
              answer: "16",
              keywords: ["16"],
              explanation:
                "b = a·sin B / sin A = 8 × 1 / 0.5 = 16.",
            },
          ],
        },
        {
          id: "mai-l6",
          title: "Matrices and eigenvalues",
          level: "HL",
          questions: [
            {
              id: "mai-l6-q1",
              type: "mcq",
              prompt:
                "The product AB of two matrices is defined only when",
              choices: [
                "A and B are square",
                "the number of columns of A equals the number of rows of B",
                "A and B have the same size",
                "det(A) ≠ 0",
              ],
              answerIndex: 1,
              explanation:
                "(m×n)(n×p) → m×p; the inner dimensions must match.",
            },
            {
              id: "mai-l6-q2",
              type: "mcq",
              prompt:
                "An eigenvector v of matrix A satisfies",
              choices: [
                "Av = 0",
                "Av = v",
                "Av = λv for some scalar λ",
                "vA = A",
              ],
              answerIndex: 2,
              explanation:
                "An eigenvector keeps its direction under A, scaled by the eigenvalue λ.",
            },
            {
              id: "mai-l6-q3",
              type: "tf",
              prompt:
                "Matrix multiplication is commutative: AB = BA in general.",
              answer: false,
              explanation:
                "Matrix multiplication is associative but NOT commutative; order matters.",
            },
            {
              id: "mai-l6-q4",
              type: "mcq",
              prompt:
                "For A = [[2, 0], [0, 3]], the eigenvalues are",
              choices: ["2 and 3", "5 and 1", "6 and 0", "2 and −3"],
              answerIndex: 0,
              explanation:
                "Diagonal matrices have their diagonal entries as eigenvalues.",
            },
            {
              id: "mai-l6-q5",
              type: "short",
              prompt:
                "Give the determinant of [[3, 1], [2, 4]].",
              answer: "10",
              keywords: ["10"],
              explanation: "det = 3×4 − 1×2 = 12 − 2 = 10.",
            },
            {
              id: "mai-l6-q6",
              type: "short",
              prompt:
                "The inverse of [[2, 0], [0, 4]] has diagonal entries. Give them as a pair (smaller first).",
              answer: "1/4 and 1/2",
              keywords: ["1/4", "1/2"],
              acceptable: ["0.25", "0.5", "1/4 1/2"],
              explanation:
                "Inverse of a diagonal matrix: reciprocals on the diagonal — 1/2 and 1/4.",
            },
          ],
        },
        {
          id: "mai-l19",
          title: "Voronoi: nearest neighbour and largest empty circle",
          questions: [
            {
              id: "mai-l19-q1",
              type: "mcq",
              prompt:
                "In nearest-neighbour interpolation, every point in a Voronoi cell takes",
              choices: [
                "the average value",
                "the value of the site it contains",
                "a random value",
                "the farthest site's value",
              ],
              answerIndex: 1,
              explanation:
                "Each cell inherits its site's value — e.g. rainfall maps.",
            },
            {
              id: "mai-l19-q2",
              type: "mcq",
              prompt:
                "The largest empty circle in a Voronoi diagram is centred at",
              choices: [
                "a site",
                "a Voronoi vertex (or the diagram edge)",
                "the midpoint of an edge",
                "the origin",
              ],
              answerIndex: 1,
              explanation:
                "Voronoi vertices are the points farthest from all sites — candidates for e.g. a new facility location.",
            },
            {
              id: "mai-l19-q3",
              type: "tf",
              prompt:
                "A Voronoi vertex is equidistant from the three nearest sites.",
              answer: true,
              explanation:
                "Vertices are where three cells meet — equal distance to all three sites.",
            },
            {
              id: "mai-l19-q4",
              type: "mcq",
              prompt:
                "The radius of the largest empty circle equals",
              choices: [
                "the distance to the nearest site",
                "the diameter of the region",
                "half the cell perimeter",
                "zero",
              ],
              answerIndex: 0,
              explanation:
                "The circle just touches the nearest sites before containing one.",
            },
            {
              id: "mai-l19-q5",
              type: "short",
              prompt:
                "Sites at A(0, 0) and B(4, 0). Give the equation of their Voronoi boundary line.",
              answer: "x = 2",
              keywords: ["x", "2"],
              acceptable: ["x=2"],
              explanation:
                "Perpendicular bisector of AB: the vertical line x = 2.",
            },
            {
              id: "mai-l19-q6",
              type: "short",
              prompt:
                "A Voronoi vertex is 3 units from each of its three sites. Give the radius of the largest empty circle centred there.",
              answer: "3",
              keywords: ["3"],
              acceptable: ["3 units"],
              explanation:
                "Radius = distance from vertex to the nearest sites = 3.",
            },
          ],
        },
        {
          id: "mai-l20",
          title: "Perpendicular bisectors and Voronoi construction",
          questions: [
            {
              id: "mai-l20-q1",
              type: "mcq",
              prompt: "The perpendicular bisector of a segment",
              choices: [
                "passes through one endpoint",
                "passes through the midpoint at right angles",
                "is parallel to the segment",
                "has gradient 0",
              ],
              answerIndex: 1,
              explanation:
                "It cuts the segment in half at 90° — the locus of points equidistant from both ends.",
            },
            {
              id: "mai-l20-q2",
              type: "mcq",
              prompt: "The midpoint of (0, 0) and (6, 0) is",
              choices: ["(6, 0)", "(3, 0)", "(0, 3)", "(3, 3)"],
              answerIndex: 1,
              explanation: "Midpoint = average of coordinates: (3, 0).",
            },
            {
              id: "mai-l20-q3",
              type: "tf",
              prompt:
                "Every edge of a Voronoi diagram lies on the perpendicular bisector of two sites.",
              answer: true,
              explanation:
                "Edges = locus of points equidistant from a pair of sites.",
            },
            {
              id: "mai-l20-q4",
              type: "mcq",
              prompt:
                "The gradient of a perpendicular bisector is the original segment's",
              choices: [
                "same gradient",
                "negative reciprocal",
                "double",
                "half",
              ],
              answerIndex: 1,
              explanation:
                "Perpendicular gradients multiply to −1: m₁·m₂ = −1.",
            },
            {
              id: "mai-l20-q5",
              type: "short",
              prompt: "Give the midpoint of (2, 4) and (6, 8).",
              answer: "(4, 6)",
              keywords: ["4", "6"],
              acceptable: ["4,6"],
              explanation: "((2+6)/2, (4+8)/2) = (4, 6).",
            },
            {
              id: "mai-l20-q6",
              type: "short",
              prompt:
                "A segment has gradient 2. Give the gradient of its perpendicular bisector.",
              answer: "-1/2",
              keywords: ["-0.5", "-1/2"],
              acceptable: ["−0.5", "-0.5", "−1/2"],
              explanation: "Negative reciprocal of 2 is −1/2.",
            },
          ],
        },
        {
          id: "mai-l21",
          title: "Graph theory: adjacency matrices and walks",
          level: "HL",
          questions: [
            {
              id: "mai-l21-q1",
              type: "mcq",
              prompt:
                "In an adjacency matrix, the entry aᵢⱼ counts",
              choices: [
                "the distance i to j",
                "the number of edges from vertex i to vertex j",
                "the degree of i",
                "the weight of edge i",
              ],
              answerIndex: 1,
              explanation:
                "aᵢⱼ = number of direct edges i → j.",
            },
            {
              id: "mai-l21-q2",
              type: "mcq",
              prompt:
                "The entry (A²)ᵢⱼ of a squared adjacency matrix counts",
              choices: [
                "edges",
                "walks of length 2 from i to j",
                "vertices",
                "cycles",
              ],
              answerIndex: 1,
              explanation:
                "Aⁿ counts walks of length n — key result in graph theory.",
            },
            {
              id: "mai-l21-q3",
              type: "tf",
              prompt:
                "The adjacency matrix of an undirected graph is symmetric.",
              answer: true,
              explanation:
                "Edge i–j counts in both directions: aᵢⱼ = aⱼᵢ.",
            },
            {
              id: "mai-l21-q4",
              type: "mcq",
              prompt:
                "The degree of a vertex equals its adjacency matrix",
              choices: [
                "row/column sum",
                "determinant",
                "trace",
                "diagonal entry",
              ],
              answerIndex: 0,
              explanation:
                "Summing a row gives the number of edges at that vertex.",
            },
            {
              id: "mai-l21-q5",
              type: "short",
              prompt:
                "Graph with only edges A–B and B–C. Give the number of length-2 walks from A to C.",
              answer: "1",
              keywords: ["1"],
              explanation:
                "The only walk is A→B→C.",
            },
            {
              id: "mai-l21-q6",
              type: "short",
              prompt:
                "A = [[0, 1], [1, 0]]. Give the (1,1) entry of A².",
              answer: "1",
              keywords: ["1"],
              explanation:
                "A² = [[1, 0], [0, 1]] — one length-2 walk back to each vertex.",
            },
          ],
        },
        {
          id: "mai-l22",
          title: "Minimum spanning trees: Kruskal and Prim",
          level: "HL",
          questions: [
            {
              id: "mai-l22-q1",
              type: "mcq",
              prompt: "Kruskal's algorithm builds the MST by",
              choices: [
                "adding the largest edges first",
                "adding the smallest edge that doesn't create a cycle",
                "starting from a random vertex",
                "removing edges",
              ],
              answerIndex: 1,
              explanation:
                "Sort edges ascending; add each if it doesn't form a cycle.",
            },
            {
              id: "mai-l22-q2",
              type: "mcq",
              prompt: "Prim's algorithm works by",
              choices: [
                "sorting all edges first",
                "growing one tree from a start vertex, always adding the cheapest connecting edge",
                "removing the heaviest edges",
                "random walks",
              ],
              answerIndex: 1,
              explanation:
                "Prim grows a single connected tree; Kruskal can grow a forest.",
            },
            {
              id: "mai-l22-q3",
              type: "tf",
              prompt:
                "A spanning tree on n vertices always has exactly n − 1 edges.",
              answer: true,
              explanation:
                "Tree = connected with no cycles → n − 1 edges.",
            },
            {
              id: "mai-l22-q4",
              type: "mcq",
              prompt:
                "A minimum spanning tree minimises the total",
              choices: [
                "number of edges",
                "edge weight",
                "number of vertices",
                "diameter",
              ],
              answerIndex: 1,
              explanation:
                "MST = minimum total weight, e.g. cheapest cable network.",
            },
            {
              id: "mai-l22-q5",
              type: "short",
              prompt:
                "A triangle graph has edge weights 3, 5, 7. Give the MST total weight.",
              answer: "8",
              keywords: ["8"],
              explanation:
                "Take the two cheapest: 3 + 5 = 8.",
            },
            {
              id: "mai-l22-q6",
              type: "short",
              prompt:
                "Give the number of edges in any spanning tree of 5 vertices.",
              answer: "4",
              keywords: ["4"],
              explanation: "n − 1 = 4.",
            },
          ],
        },
      ],
    },
    {
      id: "mai-u4",
      code: "Topic 4",
      title: "Statistics and probability",
      lessons: [
        {
          id: "mai-l7",
          title: "Chi-squared and t-tests",
          questions: [
            {
              id: "mai-l7-q1",
              type: "mcq",
              prompt:
                "A chi-squared test of independence is used to decide whether",
              choices: [
                "two means differ",
                "two categorical variables are associated",
                "a correlation is positive",
                "data is normally distributed",
              ],
              answerIndex: 1,
              explanation:
                "χ² tests compare observed vs expected frequencies in a contingency table.",
            },
            {
              id: "mai-l7-q2",
              type: "mcq",
              prompt:
                "If the p-value of a test is 0.03 with a 5% significance level, you should",
              choices: [
                "accept H₀",
                "reject H₀",
                "increase the sample size",
                "recalculate — the test is invalid",
              ],
              answerIndex: 1,
              explanation: "p < 0.05 → reject the null hypothesis.",
            },
            {
              id: "mai-l7-q3",
              type: "tf",
              prompt:
                "Expected frequencies below 5 can make a chi-squared test unreliable.",
              answer: true,
              explanation:
                "The χ² approximation breaks down with small expected counts; categories may need merging.",
            },
            {
              id: "mai-l7-q4",
              type: "mcq",
              prompt:
                "Degrees of freedom for a χ² test on a 3×4 contingency table:",
              choices: ["12", "6", "7", "11"],
              answerIndex: 1,
              explanation: "(3−1)(4−1) = 2×3 = 6.",
            },
            {
              id: "mai-l7-q5",
              type: "short",
              prompt:
                "Observed = 14, Expected = 10. Give the contribution to χ² from this cell: (O−E)²/E.",
              answer: "1.6",
              keywords: ["1.6"],
              acceptable: ["1.60"],
              explanation: "(14−10)²/10 = 16/10 = 1.6.",
            },
            {
              id: "mai-l7-q6",
              type: "short",
              prompt:
                "A t-test compares the mean of a sample to 50. State the null hypothesis in words or symbols.",
              answer: "μ = 50",
              keywords: ["mean", "50"],
              acceptable: ["mu = 50", "the mean is 50", "μ=50"],
              explanation:
                "H₀: the population mean equals 50 (no difference).",
            },
          ],
        },
        {
          id: "mai-l8",
          title: "Correlation, regression and Spearman's rank",
          questions: [
            {
              id: "mai-l8-q1",
              type: "mcq",
              prompt:
                "Pearson's r = −0.92 indicates",
              choices: [
                "weak negative correlation",
                "strong negative linear correlation",
                "no correlation",
                "strong positive correlation",
              ],
              answerIndex: 1,
              explanation:
                "r near −1 = strong negative LINEAR association.",
            },
            {
              id: "mai-l8-q2",
              type: "mcq",
              prompt:
                "Spearman's rank correlation coefficient is preferred to Pearson's when",
              choices: [
                "the data is perfectly linear",
                "the relationship is monotonic but not linear, or data is ordinal",
                "sample sizes are equal",
                "r is positive",
              ],
              answerIndex: 1,
              explanation:
                "Spearman uses ranks, so it measures monotonic association and suits ordinal data.",
            },
            {
              id: "mai-l8-q3",
              type: "tf",
              prompt:
                "A regression line should be used to extrapolate far beyond the observed data range.",
              answer: false,
              explanation:
                "Extrapolation is unreliable — the relationship may not hold outside the data range.",
            },
            {
              id: "mai-l8-q4",
              type: "mcq",
              prompt:
                "The least-squares regression line always passes through",
              choices: [
                "the origin",
                "the first data point",
                "the mean point (x̄, ȳ)",
                "the median point",
              ],
              answerIndex: 2,
              explanation:
                "Least-squares lines pass through (x̄, ȳ) by construction.",
            },
            {
              id: "mai-l8-q5",
              type: "short",
              prompt:
                "If ranks for two judges agree exactly on 6 items (perfect agreement), give Spearman's rₛ.",
              answer: "1",
              keywords: ["1"],
              acceptable: ["+1", "1.0"],
              explanation: "Perfect agreement → rₛ = 1.",
            },
            {
              id: "mai-l8-q6",
              type: "short",
              prompt:
                "Regression line ŷ = 3x + 7. Predict y when x = 4.",
              answer: "19",
              keywords: ["19"],
              explanation: "ŷ = 3×4 + 7 = 19.",
            },
          ],
        },
        {
          id: "mai-l9",
          title: "Poisson distribution and transition matrices",
          level: "HL",
          questions: [
            {
              id: "mai-l9-q1",
              type: "mcq",
              prompt:
                "The Poisson distribution models",
              choices: [
                "continuous symmetric data",
                "the number of events in a fixed interval at a constant average rate",
                "fixed numbers of trials",
                "uniformly distributed counts",
              ],
              answerIndex: 1,
              explanation:
                "Poisson(λ): count of rare independent events per interval, mean = variance = λ.",
            },
            {
              id: "mai-l9-q2",
              type: "mcq",
              prompt:
                "For X ~ Po(4), the mean and variance are",
              choices: [
                "mean 4, variance 2",
                "mean 2, variance 4",
                "mean 4, variance 4",
                "mean 16, variance 4",
              ],
              answerIndex: 2,
              explanation: "For Poisson, E(X) = Var(X) = λ.",
            },
            {
              id: "mai-l9-q3",
              type: "tf",
              prompt:
                "In a transition matrix, each column (or row, depending on convention) must sum to 1.",
              answer: true,
              explanation:
                "Probabilities of all next-states from a given state sum to 1.",
            },
            {
              id: "mai-l9-q4",
              type: "mcq",
              prompt:
                "A steady-state vector for a transition matrix T satisfies",
              choices: [
                "Tv = 0",
                "Tv = v",
                "vT = T",
                "Tv = v²",
              ],
              answerIndex: 1,
              explanation:
                "The steady state is unchanged by T — it's an eigenvector with eigenvalue 1.",
            },
            {
              id: "mai-l9-q5",
              type: "short",
              prompt:
                "X ~ Po(3). Give P(X = 0) to 3 decimal places (e⁻³ ≈ 0.0498).",
              answer: "0.050",
              keywords: ["0.05"],
              acceptable: ["0.0498", "0.05"],
              explanation: "P(X=0) = e⁻³ = 0.0498 ≈ 0.050.",
            },
            {
              id: "mai-l9-q6",
              type: "short",
              prompt:
                "Transition matrix T = [[0.8, 0.3], [0.2, 0.7]]. Give the entry showing the probability of moving from state 1 to state 1.",
              answer: "0.8",
              keywords: ["0.8"],
              explanation:
                "The diagonal entry T₁₁ = 0.8 is the probability of staying in state 1.",
            },
          ],
        },
        {
          id: "mai-l23",
          title: "Normal and binomial distributions",
          questions: [
            {
              id: "mai-l23-q1",
              type: "mcq",
              prompt:
                "For a normal distribution, about 95% of data lies within how many standard deviations of the mean?",
              choices: ["1", "2", "3", "0.5"],
              answerIndex: 1,
              explanation: "68/95/99.7 rule: ~95% within 2σ.",
            },
            {
              id: "mai-l23-q2",
              type: "mcq",
              prompt:
                "The binomial model requires all EXCEPT",
              choices: [
                "a fixed number of trials",
                "independent trials",
                "constant probability",
                "a continuous outcome",
              ],
              answerIndex: 3,
              explanation:
                "Binomial counts discrete successes — not continuous.",
            },
            {
              id: "mai-l23-q3",
              type: "tf",
              prompt:
                "The normal distribution is continuous while the binomial is discrete.",
              answer: true,
              explanation:
                "Binomial counts 0,1,2,…; normal takes any real value.",
            },
            {
              id: "mai-l23-q4",
              type: "mcq",
              prompt: "The mean of B(20, 0.3) is",
              choices: ["0.3", "6", "14", "20"],
              answerIndex: 1,
              explanation: "E(X) = np = 6.",
            },
            {
              id: "mai-l23-q5",
              type: "short",
              prompt:
                "X ~ N(50, 10²). Give the z-score of x = 70.",
              answer: "2",
              keywords: ["2"],
              explanation: "z = (70 − 50)/10 = 2.",
            },
            {
              id: "mai-l23-q6",
              type: "short",
              prompt:
                "For X ~ B(3, 0.5), give P(X = 3) as a decimal.",
              answer: "0.125",
              keywords: ["0.125"],
              acceptable: ["1/8"],
              explanation: "0.5³ = 0.125.",
            },
          ],
        },
        {
          id: "mai-l24",
          title: "Chi-squared GOF vs independence and t-test interpretation",
          questions: [
            {
              id: "mai-l24-q1",
              type: "mcq",
              prompt:
                "A goodness-of-fit test differs from a test of independence because GOF uses",
              choices: [
                "two categorical variables",
                "one categorical variable compared to an expected distribution",
                "two means",
                "paired data only",
              ],
              answerIndex: 1,
              explanation:
                "GOF: one variable vs expected (e.g. is a die fair?); independence: two variables in a table.",
            },
            {
              id: "mai-l24-q2",
              type: "mcq",
              prompt: "A t-test is used to compare",
              choices: [
                "frequencies",
                "means",
                "correlations",
                "proportions of categories",
              ],
              answerIndex: 1,
              explanation:
                "t-tests compare a mean to a value, or two means.",
            },
            {
              id: "mai-l24-q3",
              type: "tf",
              prompt:
                "A large χ² statistic (far above the critical value) suggests rejecting H₀.",
              answer: true,
              explanation:
                "Large χ² = observed counts far from expected.",
            },
            {
              id: "mai-l24-q4",
              type: "mcq",
              prompt:
                "Degrees of freedom for a GOF test with 5 categories is",
              choices: ["5", "4", "6", "10"],
              answerIndex: 1,
              explanation: "df = categories − 1 = 4.",
            },
            {
              id: "mai-l24-q5",
              type: "short",
              prompt:
                "Observed 15, expected 10. Give the χ² cell contribution.",
              answer: "2.5",
              keywords: ["2.5"],
              explanation: "(15−10)²/10 = 2.5.",
            },
            {
              id: "mai-l24-q6",
              type: "short",
              prompt:
                "A test gives p = 0.08 at the 5% level. State the decision (reject / fail to reject H₀).",
              answer: "fail to reject H₀",
              keywords: ["fail", "reject"],
              acceptable: ["do not reject", "not reject", "fail to reject"],
              explanation:
                "p = 0.08 > 0.05 → insufficient evidence against H₀.",
            },
          ],
        },
      ],
    },
    {
      id: "mai-u5",
      code: "Topic 5",
      title: "Calculus",
      lessons: [
        {
          id: "mai-l10",
          title: "Differentiation and optimisation",
          questions: [
            {
              id: "mai-l10-q1",
              type: "mcq",
              prompt: "The derivative of f(x) = x³ − 4x is",
              choices: ["3x² − 4", "x² − 4", "3x² − 4x", "3x − 4"],
              answerIndex: 0,
              explanation:
                "Power rule: d/dx x³ = 3x², d/dx 4x = 4.",
            },
            {
              id: "mai-l10-q2",
              type: "mcq",
              prompt:
                "At a local maximum, f′(x) equals",
              choices: ["1", "−1", "0", "the maximum value"],
              answerIndex: 2,
              explanation:
                "Stationary points occur where the gradient f′(x) = 0.",
            },
            {
              id: "mai-l10-q3",
              type: "tf",
              prompt:
                "f′(x) gives the rate of change (gradient of the tangent) of f at x.",
              answer: true,
              explanation:
                "The derivative is the instantaneous rate of change.",
            },
            {
              id: "mai-l10-q4",
              type: "mcq",
              prompt:
                "To confirm a stationary point is a maximum you can check that",
              choices: [
                "f′(x) = 0",
                "f″(x) < 0 there",
                "f″(x) > 0 there",
                "f(x) is large",
              ],
              answerIndex: 1,
              explanation:
                "Negative second derivative ⇒ concave down ⇒ local maximum.",
            },
            {
              id: "mai-l10-q5",
              type: "short",
              prompt:
                "f(x) = 2x² + 3x. Give f′(2).",
              answer: "11",
              keywords: ["11"],
              explanation: "f′(x) = 4x + 3, f′(2) = 11.",
            },
            {
              id: "mai-l10-q6",
              type: "short",
              prompt:
                "A profit function P(x) = −x² + 20x is maximised at what value of x?",
              answer: "10",
              keywords: ["10"],
              explanation:
                "P′ = −2x + 20 = 0 → x = 10.",
            },
          ],
        },
        {
          id: "mai-l11",
          title: "Integration and the trapezoidal rule",
          questions: [
            {
              id: "mai-l11-q1",
              type: "mcq",
              prompt: "∫ 6x dx equals",
              choices: ["6x² + C", "3x² + C", "x² + C", "6 + C"],
              answerIndex: 1,
              explanation: "∫ 6x dx = 3x² + C.",
            },
            {
              id: "mai-l11-q2",
              type: "mcq",
              prompt:
                "The trapezoidal rule approximates a definite integral by",
              choices: [
                "rectangles under the curve",
                "trapezoids joining consecutive points",
                "the derivative",
                "tangent lines",
              ],
              answerIndex: 1,
              explanation:
                "Straight-line segments between sample points form trapezoids.",
            },
            {
              id: "mai-l11-q3",
              type: "tf",
              prompt:
                "A definite integral ∫ₐᵇ f(x) dx can represent the area between the curve and the x-axis.",
              answer: true,
              explanation:
                "Area between curve and axis on [a,b] — negative where f < 0.",
            },
            {
              id: "mai-l11-q4",
              type: "mcq",
              prompt:
                "Using more strips in the trapezoidal rule generally makes the estimate",
              choices: [
                "less accurate",
                "more accurate",
                "always exact",
                "unchanged",
              ],
              answerIndex: 1,
              explanation:
                "Finer strips follow the curve more closely — smaller error.",
            },
            {
              id: "mai-l11-q5",
              type: "short",
              prompt:
                "Evaluate ∫₀² 3x² dx.",
              answer: "8",
              keywords: ["8"],
              explanation: "∫ 3x² = x³; 2³ − 0 = 8.",
            },
            {
              id: "mai-l11-q6",
              type: "short",
              prompt:
                "Trapezoidal rule with values f(0)=2, f(1)=5, one strip of width 1. Give the estimate of the integral.",
              answer: "3.5",
              keywords: ["3.5"],
              acceptable: ["7/2"],
              explanation:
                "h/2 × (f(0) + f(1)) = 0.5 × 7 = 3.5.",
            },
          ],
        },
        {
          id: "mai-l12",
          title: "Differential equations and Euler's method",
          level: "HL",
          questions: [
            {
              id: "mai-l12-q1",
              type: "mcq",
              prompt: "dy/dx = ky describes",
              choices: [
                "linear growth",
                "exponential growth/decay",
                "logistic growth",
                "constant rate",
              ],
              answerIndex: 1,
              explanation:
                "Rate proportional to y ⇒ y = Aeᵏˣ — exponential.",
            },
            {
              id: "mai-l12-q2",
              type: "mcq",
              prompt:
                "Euler's method with step h updates y via",
              choices: [
                "yₙ₊₁ = yₙ + h·f′(xₙ)",
                "yₙ₊₁ = yₙ + h·f(xₙ, yₙ)",
                "yₙ₊₁ = h·yₙ",
                "yₙ₊₁ = yₙ / h",
              ],
              answerIndex: 1,
              explanation:
                "Step forward along the tangent: yₙ₊₁ = yₙ + h·dy/dx at (xₙ, yₙ).",
            },
            {
              id: "mai-l12-q3",
              type: "tf",
              prompt:
                "A slope field shows the direction of solution curves of a differential equation at each point.",
              answer: true,
              explanation:
                "Slope fields draw small line segments of gradient f(x,y) on a grid.",
            },
            {
              id: "mai-l12-q4",
              type: "mcq",
              prompt:
                "Coupled systems like dy/dt = ax − bxy model",
              choices: [
                "single populations only",
                "predator–prey or interacting populations",
                "linear decay",
                "independent growth",
              ],
              answerIndex: 1,
              explanation:
                "The −bxy term couples the two species — classic Lotka–Volterra structure.",
            },
            {
              id: "mai-l12-q5",
              type: "short",
              prompt:
                "Euler step: dy/dx = y, y(0) = 1, h = 0.5. Give y₁ after one step.",
              answer: "1.5",
              keywords: ["1.5"],
              explanation:
                "y₁ = 1 + 0.5 × 1 = 1.5 (true e⁰·⁵ ≈ 1.65 — Euler underestimates).",
            },
            {
              id: "mai-l12-q6",
              type: "short",
              prompt:
                "Solve dy/dx = 3x² with y(0) = 5. Give y when x = 2.",
              answer: "13",
              keywords: ["13"],
              explanation:
                "y = x³ + C; C = 5; y(2) = 8 + 5 = 13.",
            },
          ],
        },
        {
          id: "mai-l25",
          title: "Trapezoidal rule error and optimisation modelling",
          questions: [
            {
              id: "mai-l25-q1",
              type: "mcq",
              prompt:
                "For a curve that is concave UP (curving upward), the trapezoidal rule typically gives an",
              choices: [
                "underestimate",
                "overestimate",
                "exact value",
                "negative result",
              ],
              answerIndex: 1,
              explanation:
                "Trapezoids lie above a convex (concave-up) curve → overestimate.",
            },
            {
              id: "mai-l25-q2",
              type: "mcq",
              prompt:
                "The trapezoidal rule error is roughly proportional to",
              choices: ["h", "h²", "h³", "1/h"],
              answerIndex: 1,
              explanation:
                "Error ~ O(h²) — halving the strip width quarters the error.",
            },
            {
              id: "mai-l25-q3",
              type: "tf",
              prompt:
                "Building an optimisation model starts with identifying variables, an objective function and constraints.",
              answer: true,
              explanation:
                "The modelling cycle: define → model → solve → interpret → validate.",
            },
            {
              id: "mai-l25-q4",
              type: "mcq",
              prompt:
                "The trapezoidal rule is EXACT for functions that are",
              choices: ["quadratic", "linear", "exponential", "sinusoidal"],
              answerIndex: 1,
              explanation:
                "A straight line coincides with its chords — zero error.",
            },
            {
              id: "mai-l25-q5",
              type: "short",
              prompt:
                "One trapezoid: f(0) = 1, f(2) = 9, width 2. Give the integral estimate.",
              answer: "10",
              keywords: ["10"],
              explanation: "h/2·(f₀+f₁) = 1 × 10 = 10.",
            },
            {
              id: "mai-l25-q6",
              type: "short",
              prompt:
                "Give the trapezoidal estimate of ∫₀² 3x dx using 2 strips (x = 0, 1, 2).",
              answer: "6",
              keywords: ["6"],
              explanation:
                "0.5·(0 + 2·3 + 6) = 6 — exact, since 3x is linear.",
            },
          ],
        },
        {
          id: "mai-l26",
          title: "Coupled systems and Euler's method",
          level: "HL",
          questions: [
            {
              id: "mai-l26-q1",
              type: "mcq",
              prompt:
                "A 'coupled' system of differential equations is one where",
              choices: [
                "each equation is independent",
                "dx/dt and dy/dt depend on both variables",
                "there is only one variable",
                "the solutions are straight lines",
              ],
              answerIndex: 1,
              explanation:
                "The rates are interlocked — each variable affects the other.",
            },
            {
              id: "mai-l26-q2",
              type: "mcq",
              prompt:
                "Predator–prey systems typically produce solutions that",
              choices: [
                "grow forever",
                "decay to zero",
                "oscillate cyclically",
                "stay constant",
              ],
              answerIndex: 2,
              explanation:
                "Prey rise → predators rise → prey fall → predators fall → repeat.",
            },
            {
              id: "mai-l26-q3",
              type: "tf",
              prompt:
                "Euler's method approximates each step with a local straight-line segment along the slope.",
              answer: true,
              explanation:
                "yₙ₊₁ = yₙ + h·f(xₙ, yₙ) — a tangent-line step.",
            },
            {
              id: "mai-l26-q4",
              type: "mcq",
              prompt:
                "Decreasing the step size h in Euler's method",
              choices: [
                "increases error",
                "decreases error but needs more steps",
                "has no effect",
                "makes the method exact",
              ],
              answerIndex: 1,
              explanation:
                "Smaller steps track the curve better at the cost of computation.",
            },
            {
              id: "mai-l26-q5",
              type: "short",
              prompt:
                "System: dx/dt = x, dy/dt = −y, starting x₀ = 1, y₀ = 1, h = 0.5. Give x₁ after one Euler step.",
              answer: "1.5",
              keywords: ["1.5"],
              explanation: "x₁ = 1 + 0.5×1 = 1.5.",
            },
            {
              id: "mai-l26-q6",
              type: "short",
              prompt:
                "dy/dx = 1 with y(0) = 0, h = 0.5. Give y after two Euler steps.",
              answer: "1",
              keywords: ["1"],
              explanation:
                "Each step adds 0.5 → y₂ = 1 (exact, since the slope is constant).",
            },
          ],
        },
      ],
    },
  ],
};
