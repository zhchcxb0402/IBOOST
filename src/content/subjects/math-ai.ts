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
  resources: [
    {
      name: "IB Official",
      url: "https://www.ibo.org/programmes/diploma-programme/curriculum/mathematics/",
      note: "Subject brief and syllabus outline",
    },
    {
      name: "RevisionDojo",
      url: "https://www.revisiondojo.com/",
      note: "Topic questions with worked solutions",
    },
    {
      name: "Nail IB",
      url: "https://nailib.com/",
      note: "Video walkthroughs and practice exams",
    },
    {
      name: "Clastify",
      url: "https://www.clastify.com/",
      note: "Past papers and exemplar IAs",
    },
  ],
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
      ],
    },
  ],
};
