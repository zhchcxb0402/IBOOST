import type { Subject } from "../types";

export const mathAA: Subject = {
  slug: "math-aa",
  name: "Mathematics: Analysis & Approaches",
  short: "Math AA",
  color: "#2563EB",
  emoji: "📐",
  group: "Mathematics",
  levels: ["SL", "HL"],
  description:
    "The five official topics: number & algebra, functions, geometry & trigonometry, statistics & probability, and calculus.",
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
      name: "InThinking",
      url: "https://www.thinkib.net/math-aa",
      note: "Teacher-written lessons and IA guidance",
    },
    {
      name: "Clastify",
      url: "https://www.clastify.com/",
      note: "Exemplar IAs/EEs with examiner marks",
    },
  ],
  units: [
    {
      id: "maa-u1",
      title: "Number & algebra",
      code: "Topic 1",
      lessons: [
        {
          id: "maa-l1",
          title: "Sequences & series",
          questions: [
            {
              id: "maa-l1-q1",
              type: "mcq",
              prompt: "The nth term of an arithmetic sequence is…",
              choices: ["u₁ + (n−1)d", "u₁·rⁿ⁻¹", "u₁ + nd", "n(u₁ + d)"],
              answerIndex: 0,
              explanation: "uₙ = u₁ + (n − 1)d.",
            },
            {
              id: "maa-l1-q2",
              type: "short",
              prompt: "Find the 8th term of the arithmetic sequence 5, 9, 13, …",
              answer: "33",
              keywords: ["33"],
              acceptable: ["33.0"],
              explanation: "u₈ = 5 + 7·4 = 33.",
            },
            {
              id: "maa-l1-q3",
              type: "tf",
              prompt:
                "A geometric series with r = 0.5 has a finite sum to infinity.",
              answer: true,
              explanation: "S∞ converges whenever |r| < 1.",
            },
            {
              id: "maa-l1-q4",
              type: "mcq",
              prompt: "The sum of the first n terms of 1 + 2 + 4 + … + 2ⁿ⁻¹ is…",
              choices: ["2ⁿ − 1", "2ⁿ", "n²", "2ⁿ⁻¹"],
              answerIndex: 0,
              explanation: "Sₙ = 1·(2ⁿ − 1)/(2 − 1) = 2ⁿ − 1.",
            },
            {
              id: "maa-l1-q5",
              type: "short",
              prompt:
                "An arithmetic sequence has u₁ = 3 and d = 4. Find S₁₀.",
              answer: "210",
              keywords: ["210"],
              explanation: "S₁₀ = 10/2 (2·3 + 9·4) = 5·42 = 210.",
            },
            {
              id: "maa-l1-q6",
              type: "mcq",
              prompt: "Σₖ₌₁⁵ (2k + 1) equals…",
              choices: ["35", "30", "25", "40"],
              answerIndex: 0,
              explanation: "3+5+7+9+11 = 35.",
            },
          ],
        },
        {
          id: "maa-l2",
          title: "Exponents & logarithms",
          questions: [
            {
              id: "maa-l2-q1",
              type: "mcq",
              prompt: "logₐ(xy) equals…",
              choices: [
                "logₐx + logₐy",
                "logₐx · logₐy",
                "logₐx − logₐy",
                "y · logₐx",
              ],
              answerIndex: 0,
              explanation: "Product rule for logarithms.",
            },
            {
              id: "maa-l2-q2",
              type: "short",
              prompt: "Evaluate log₂ 32.",
              answer: "5",
              keywords: ["5"],
              explanation: "2⁵ = 32.",
            },
            {
              id: "maa-l2-q3",
              type: "tf",
              prompt: "a⁰ = 0 for any base a.",
              answer: false,
              explanation: "a⁰ = 1 for a ≠ 0.",
            },
            {
              id: "maa-l2-q4",
              type: "mcq",
              prompt: "The change-of-base formula gives logₐb = …",
              choices: [
                "ln b / ln a",
                "ln a / ln b",
                "ln(ab)",
                "ln b − ln a",
              ],
              answerIndex: 0,
              explanation: "logₐb = log b / log a in any base.",
            },
            {
              id: "maa-l2-q5",
              type: "short",
              prompt: "Solve for x: 3ˣ = 81.",
              answer: "4",
              keywords: ["4"],
              explanation: "81 = 3⁴, so x = 4.",
            },
            {
              id: "maa-l2-q6",
              type: "mcq",
              prompt: "If ln x = 2, then x = …",
              choices: ["e²", "2e", "10²", "ln 2"],
              answerIndex: 0,
              explanation: "ln x = 2 → x = e².",
            },
          ],
        },
        {
          id: "maa-l3",
          title: "Proof by induction",
          level: "HL",
          questions: [
            {
              id: "maa-l3-q1",
              type: "mcq",
              prompt: "The first step of proof by induction is…",
              choices: [
                "verify the statement for a base case, e.g. n = 1",
                "assume it true for all n",
                "prove it false for n = 0",
                "compute the limit as n → ∞",
              ],
              answerIndex: 0,
              explanation:
                "Base case first, then assume n = k and prove n = k+1.",
            },
            {
              id: "maa-l3-q2",
              type: "tf",
              prompt:
                "If P(k) true implies P(k+1) true, and P(1) is true, then P(n) holds for all positive integers.",
              answer: true,
              explanation: "This is exactly the principle of induction.",
            },
            {
              id: "maa-l3-q3",
              type: "mcq",
              prompt:
                "To prove 1+2+…+n = n(n+1)/2 by induction, the inductive step adds which term to both sides?",
              choices: ["k + 1", "k", "n + 1", "2k"],
              answerIndex: 0,
              explanation:
                "Assume for n = k, add (k+1) to get the n = k+1 case.",
            },
            {
              id: "maa-l3-q4",
              type: "short",
              prompt:
                "Using the formula n(n+1)/2, find the sum 1 + 2 + … + 20.",
              answer: "210",
              keywords: ["210"],
              explanation: "20·21/2 = 210.",
            },
            {
              id: "maa-l3-q5",
              type: "mcq",
              prompt: "Induction can also be used to prove statements about…",
              choices: [
                "divisibility, e.g. 6ⁿ − 1 is divisible by 5",
                "continuity of functions",
                "limits at infinity",
                "irrationality of √2",
              ],
              answerIndex: 0,
              explanation:
                "Divisibility claims indexed by n are classic induction targets.",
            },
            {
              id: "maa-l3-q6",
              type: "short",
              prompt:
                "Prove (or state) the base case value: for P(n): 2ⁿ > n, evaluate both sides at n = 1. What is 2¹ − 1?",
              answer: "1",
              keywords: ["1"],
              explanation: "2¹ = 2 > 1, so the base case holds (difference 1).",
            },
          ],
        },
        {
          id: "maa-l4",
          title: "Complex numbers",
          level: "HL",
          questions: [
            {
              id: "maa-l4-q1",
              type: "mcq",
              prompt: "i² equals…",
              choices: ["−1", "1", "i", "−i"],
              answerIndex: 0,
              explanation: "By definition i = √−1, so i² = −1.",
            },
            {
              id: "maa-l4-q2",
              type: "short",
              prompt:
                "Find the modulus |z| of z = 3 + 4i.",
              answer: "5",
              keywords: ["5"],
              explanation: "|z| = √(3² + 4²) = 5.",
            },
            {
              id: "maa-l4-q3",
              type: "tf",
              prompt:
                "The complex conjugate of a + bi is −a + bi.",
              answer: false,
              explanation: "The conjugate is a − bi.",
            },
            {
              id: "maa-l4-q4",
              type: "mcq",
              prompt: "(1 + i)² equals…",
              choices: ["2i", "2 + 2i", "0", "2"],
              answerIndex: 0,
              explanation: "1 + 2i + i² = 2i.",
            },
            {
              id: "maa-l4-q5",
              type: "short",
              prompt:
                "Find the real part of (2 + 3i)(1 − i).",
              answer: "5",
              keywords: ["5"],
              explanation: "2 − 2i + 3i − 3i² = 2 + i + 3 = 5 + i.",
            },
            {
              id: "maa-l4-q6",
              type: "mcq",
              prompt: "The polar form of z with modulus r and argument θ is…",
              choices: [
                "r(cos θ + i sin θ)",
                "r(sin θ + i cos θ)",
                "r·e⁻ᶦᶿ",
                "r·θ",
              ],
              answerIndex: 0,
              explanation: "z = r cis θ = r(cos θ + i sin θ).",
            },
          ],
        },
      ],
    },
    {
      id: "maa-u2",
      title: "Functions",
      code: "Topic 2",
      lessons: [
        {
          id: "maa-l5",
          title: "Transformations & inverses",
          questions: [
            {
              id: "maa-l5-q1",
              type: "mcq",
              prompt: "The graph of y = f(x − 2) is the graph of f…",
              choices: [
                "shifted 2 units right",
                "shifted 2 units left",
                "shifted 2 units up",
                "stretched by factor 2",
              ],
              answerIndex: 0,
              explanation:
                "x → x − 2 translates the graph +2 in the x-direction.",
            },
            {
              id: "maa-l5-q2",
              type: "tf",
              prompt:
                "A function must be one-to-one to have an inverse function.",
              answer: true,
              explanation:
                "Only injective functions can be uniquely reversed.",
            },
            {
              id: "maa-l5-q3",
              type: "short",
              prompt:
                "If f(x) = 3x − 6, find f⁻¹(6).",
              answer: "4",
              keywords: ["4"],
              explanation: "f⁻¹(x) = (x+6)/3 → f⁻¹(6) = 4.",
            },
            {
              id: "maa-l5-q4",
              type: "mcq",
              prompt: "y = −f(x) is a reflection in…",
              choices: [
                "the x-axis",
                "the y-axis",
                "the line y = x",
                "the origin",
              ],
              answerIndex: 0,
              explanation: "Negating the output flips the graph vertically.",
            },
            {
              id: "maa-l5-q5",
              type: "short",
              prompt:
                "f(x) = x² is transformed to g(x) = (x+1)² − 3. Give the y-coordinate of the new vertex.",
              answer: "-3",
              keywords: ["-3", "−3"],
              explanation: "Vertex moves from (0,0) to (−1, −3).",
            },
            {
              id: "maa-l5-q6",
              type: "mcq",
              prompt: "The graph of y = f⁻¹(x) is the reflection of f in…",
              choices: [
                "the line y = x",
                "the x-axis",
                "the y-axis",
                "the origin",
              ],
              answerIndex: 0,
              explanation: "Inverses swap x and y — a reflection in y = x.",
            },
          ],
        },
        {
          id: "maa-l6",
          title: "Polynomials & rational functions",
          level: "HL",
          questions: [
            {
              id: "maa-l6-q1",
              type: "mcq",
              prompt:
                "By the factor theorem, (x − a) is a factor of p(x) iff…",
              choices: ["p(a) = 0", "p(0) = a", "p′(a) = 0", "a > 0"],
              answerIndex: 0,
              explanation: "p(a) = 0 ⇔ (x − a) divides p(x).",
            },
            {
              id: "maa-l6-q2",
              type: "short",
              prompt:
                "Find the remainder when x² + 3x + 2 is divided by (x − 1).",
              answer: "6",
              keywords: ["6"],
              explanation: "Remainder = p(1) = 1 + 3 + 2 = 6.",
            },
            {
              id: "maa-l6-q3",
              type: "tf",
              prompt:
                "A degree-n polynomial has at most n real roots.",
              answer: true,
              explanation:
                "Fundamental theorem: n roots in ℂ counting multiplicity, so ≤ n real.",
            },
            {
              id: "maa-l6-q4",
              type: "mcq",
              prompt: "The horizontal asymptote of y = (2x + 1)/(x − 3) is…",
              choices: ["y = 2", "x = 3", "y = 0", "y = −1/3"],
              answerIndex: 0,
              explanation: "Ratio of leading coefficients: 2/1 = 2.",
            },
            {
              id: "maa-l6-q5",
              type: "short",
              prompt:
                "Give the vertical asymptote of y = 1/(x + 4) as x = ?",
              answer: "-4",
              keywords: ["-4", "−4"],
              explanation: "Denominator zero at x = −4.",
            },
            {
              id: "maa-l6-q6",
              type: "mcq",
              prompt: "The sum of the roots of ax² + bx + c = 0 is…",
              choices: ["−b/a", "c/a", "−c/a", "b/a"],
              answerIndex: 0,
              explanation: "Vieta's formulas: sum = −b/a, product = c/a.",
            },
          ],
        },
      ],
    },
    {
      id: "maa-u3",
      title: "Geometry & trigonometry",
      code: "Topic 3",
      lessons: [
        {
          id: "maa-l7",
          title: "Trig identities & equations",
          questions: [
            {
              id: "maa-l7-q1",
              type: "mcq",
              prompt: "sin²x + cos²x equals…",
              choices: ["1", "0", "sin 2x", "tan²x"],
              answerIndex: 0,
              explanation: "The fundamental Pythagorean identity.",
            },
            {
              id: "maa-l7-q2",
              type: "short",
              prompt:
                "Solve sin x = 0.5 for x in [0°, 90°]. Give your answer in degrees.",
              answer: "30",
              keywords: ["30"],
              acceptable: ["30°", "30 degrees"],
              explanation: "sin 30° = 0.5.",
            },
            {
              id: "maa-l7-q3",
              type: "tf",
              prompt: "sin 2x = 2 sin x cos x.",
              answer: true,
              explanation: "Standard double-angle identity.",
            },
            {
              id: "maa-l7-q4",
              type: "mcq",
              prompt: "tan x is undefined when…",
              choices: [
                "cos x = 0",
                "sin x = 0",
                "x = 0",
                "tan x = 1",
              ],
              answerIndex: 0,
              explanation: "tan x = sin x / cos x needs cos x ≠ 0.",
            },
            {
              id: "maa-l7-q5",
              type: "short",
              prompt:
                "Convert π/3 radians to degrees.",
              answer: "60",
              keywords: ["60"],
              acceptable: ["60°"],
              explanation: "π/3 rad = 60°.",
            },
            {
              id: "maa-l7-q6",
              type: "mcq",
              prompt: "cos 2x can be written as…",
              choices: [
                "1 − 2 sin²x",
                "2 sin x cos x",
                "sin²x + cos²x",
                "1 + 2 sin²x",
              ],
              answerIndex: 0,
              explanation:
                "cos 2x = cos²x − sin²x = 1 − 2sin²x = 2cos²x − 1.",
            },
          ],
        },
        {
          id: "maa-l8",
          title: "Vectors",
          level: "HL",
          questions: [
            {
              id: "maa-l8-q1",
              type: "mcq",
              prompt: "The dot product a·b equals…",
              choices: [
                "|a||b|cos θ",
                "|a||b|sin θ",
                "|a| + |b|",
                "a × b",
              ],
              answerIndex: 0,
              explanation: "a·b = |a||b|cosθ; zero when perpendicular.",
            },
            {
              id: "maa-l8-q2",
              type: "short",
              prompt:
                "a = (1, 2) and b = (3, −1). Find a·b.",
              answer: "1",
              keywords: ["1"],
              explanation: "1·3 + 2·(−1) = 1.",
            },
            {
              id: "maa-l8-q3",
              type: "tf",
              prompt:
                "If a·b = 0 for nonzero vectors, the vectors are perpendicular.",
              answer: true,
              explanation: "cos θ = 0 → θ = 90°.",
            },
            {
              id: "maa-l8-q4",
              type: "mcq",
              prompt: "The magnitude of vector (3, 4) is…",
              choices: ["5", "7", "25", "12"],
              answerIndex: 0,
              explanation: "|v| = √(9 + 16) = 5.",
            },
            {
              id: "maa-l8-q5",
              type: "short",
              prompt:
                "A = (1, 0, 2) and B = (3, 0, 4). Find the x-component of vector AB.",
              answer: "2",
              keywords: ["2"],
              explanation: "AB = B − A = (2, 0, 2); x-component is 2.",
            },
            {
              id: "maa-l8-q6",
              type: "mcq",
              prompt: "A unit vector has…",
              choices: [
                "magnitude 1",
                "zero magnitude",
                "only one component",
                "direction along the x-axis",
              ],
              answerIndex: 0,
              explanation: "Unit vectors point in a direction with |v| = 1.",
            },
          ],
        },
      ],
    },
    {
      id: "maa-u4",
      title: "Statistics & probability",
      code: "Topic 4",
      lessons: [
        {
          id: "maa-l9",
          title: "Probability & distributions",
          questions: [
            {
              id: "maa-l9-q1",
              type: "mcq",
              prompt: "For independent events A and B, P(A ∩ B) = …",
              choices: [
                "P(A)·P(B)",
                "P(A) + P(B)",
                "P(A)/P(B)",
                "1 − P(A)P(B)",
              ],
              answerIndex: 0,
              explanation: "Independence means probabilities multiply.",
            },
            {
              id: "maa-l9-q2",
              type: "short",
              prompt:
                "A fair die is rolled. Find the probability of rolling a number greater than 4 as a fraction a/b.",
              answer: "1/3",
              keywords: ["1/3", "0.33"],
              acceptable: ["2/6", "0.33", "0.333", "33%"],
              explanation: "Outcomes 5, 6 → 2/6 = 1/3.",
            },
            {
              id: "maa-l9-q3",
              type: "tf",
              prompt:
                "For mutually exclusive events, P(A ∪ B) = P(A) + P(B).",
              answer: true,
              explanation: "No overlap means the intersection term vanishes.",
            },
            {
              id: "maa-l9-q4",
              type: "mcq",
              prompt: "The expected value E(X) of a discrete random variable is…",
              choices: [
                "Σ x·P(X = x)",
                "Σ P(X = x)",
                "max x",
                "Σ x²",
              ],
              answerIndex: 0,
              explanation: "Probability-weighted mean of the outcomes.",
            },
            {
              id: "maa-l9-q5",
              type: "short",
              prompt:
                "X takes values 1 and 3 each with probability 0.5. Find E(X).",
              answer: "2",
              keywords: ["2"],
              explanation: "E(X) = 1·0.5 + 3·0.5 = 2.",
            },
            {
              id: "maa-l9-q6",
              type: "mcq",
              prompt: "In a normal distribution, about what % of data lies within 1 standard deviation of the mean?",
              choices: ["68%", "95%", "50%", "99.7%"],
              answerIndex: 0,
              explanation: "68–95–99.7 rule.",
            },
          ],
        },
        {
          id: "maa-l10",
          title: "Bayes' theorem",
          level: "HL",
          questions: [
            {
              id: "maa-l10-q1",
              type: "mcq",
              prompt: "P(A|B) equals…",
              choices: [
                "P(A ∩ B) / P(B)",
                "P(B) / P(A ∩ B)",
                "P(A)·P(B)",
                "P(B|A)/P(A)",
              ],
              answerIndex: 0,
              explanation: "Definition of conditional probability.",
            },
            {
              id: "maa-l10-q2",
              type: "tf",
              prompt:
                "Bayes' theorem lets you reverse a conditional probability: find P(A|B) from P(B|A).",
              answer: true,
              explanation: "P(A|B) = P(B|A)·P(A)/P(B).",
            },
            {
              id: "maa-l10-q3",
              type: "short",
              prompt:
                "P(A) = 0.5, P(B|A) = 0.8, P(B) = 0.5. Find P(A|B) as a decimal.",
              answer: "0.8",
              keywords: ["0.8", "4/5", "80%"],
              explanation: "P(A|B) = 0.8·0.5/0.5 = 0.8.",
            },
            {
              id: "maa-l10-q4",
              type: "mcq",
              prompt: "The law of total probability states P(B) = …",
              choices: [
                "Σ P(B|Aᵢ)·P(Aᵢ) over a partition",
                "P(A)·P(B)",
                "1 − P(A)",
                "P(A ∩ B)",
              ],
              answerIndex: 0,
              explanation:
                "Sum over a partition of the sample space.",
            },
            {
              id: "maa-l10-q5",
              type: "mcq",
              prompt:
                "A disease test is 99% sensitive. 'Sensitive' means…",
              choices: [
                "P(positive test | disease) = 0.99",
                "P(disease | positive test) = 0.99",
                "P(no disease) = 0.99",
                "P(negative | disease) = 0.99",
              ],
              answerIndex: 0,
              explanation:
                "Sensitivity = true positive rate; a classic Bayes trap to distinguish from PPV.",
            },
            {
              id: "maa-l10-q6",
              type: "short",
              prompt:
                "Two boxes: Box1 has 2 red/0 blue, Box2 has 1 red/1 blue. A box is chosen at random and a red ball drawn. Find P(Box1 | red) as a fraction.",
              answer: "2/3",
              keywords: ["2/3"],
              acceptable: ["0.67", "0.667"],
              explanation:
                "P(red) = 0.5·1 + 0.5·0.5 = 0.75; P(Box1|red) = 0.5/0.75 = 2/3.",
            },
          ],
        },
      ],
    },
    {
      id: "maa-u5",
      title: "Calculus",
      code: "Topic 5",
      lessons: [
        {
          id: "maa-l11",
          title: "Differentiation & optimisation",
          questions: [
            {
              id: "maa-l11-q1",
              type: "mcq",
              prompt: "At a local maximum of f, …",
              choices: [
                "f′(x) = 0 and f″(x) < 0",
                "f′(x) = 0 and f″(x) > 0",
                "f′(x) > 0",
                "f(x) = 0",
              ],
              answerIndex: 0,
              explanation:
                "Stationary point + concave down = local max.",
            },
            {
              id: "maa-l11-q2",
              type: "short",
              prompt: "Find d/dx of 4x³ − 5x at x = 1.",
              answer: "7",
              keywords: ["7"],
              explanation: "f′(x) = 12x² − 5 → f′(1) = 7.",
            },
            {
              id: "maa-l11-q3",
              type: "tf",
              prompt:
                "If f′(x) > 0 on an interval, f is decreasing there.",
              answer: false,
              explanation: "Positive derivative means increasing.",
            },
            {
              id: "maa-l11-q4",
              type: "mcq",
              prompt:
                "To optimise a quantity, the standard first step is to…",
              choices: [
                "write it as a function of one variable and differentiate",
                "integrate the constraint",
                "set the function equal to zero",
                "draw a tree diagram",
              ],
              answerIndex: 0,
              explanation:
                "Model → differentiate → solve f′ = 0 → check nature.",
            },
            {
              id: "maa-l11-q5",
              type: "short",
              prompt:
                "f(x) = x² − 6x + 10. Find the x-value of the stationary point.",
              answer: "3",
              keywords: ["3"],
              explanation: "f′(x) = 2x − 6 = 0 → x = 3.",
            },
            {
              id: "maa-l11-q6",
              type: "mcq",
              prompt: "d/dx [f(g(x))] = ?",
              choices: [
                "f′(g(x))·g′(x)",
                "f′(x)·g′(x)",
                "f(g′(x))",
                "f′(g′(x))",
              ],
              answerIndex: 0,
              explanation: "Chain rule.",
            },
          ],
        },
        {
          id: "maa-l12",
          title: "Integration techniques",
          questions: [
            {
              id: "maa-l12-q1",
              type: "mcq",
              prompt: "∫ xⁿ dx (n ≠ −1) equals…",
              choices: [
                "xⁿ⁺¹/(n+1) + C",
                "nxⁿ⁻¹ + C",
                "xⁿ/(n+1) + C",
                "xⁿ⁺¹ + C",
              ],
              answerIndex: 0,
              explanation: "Reverse power rule.",
            },
            {
              id: "maa-l12-q2",
              type: "short",
              prompt: "Evaluate ∫₀³ 2x dx.",
              answer: "9",
              keywords: ["9"],
              explanation: "[x²]₀³ = 9.",
            },
            {
              id: "maa-l12-q3",
              type: "tf",
              prompt:
                "∫ f′(x)/f(x) dx = ln|f(x)| + C.",
              answer: true,
              explanation:
                "Standard result used in substitution and differential equations.",
            },
            {
              id: "maa-l12-q4",
              type: "mcq",
              prompt: "Integration by substitution reverses…",
              choices: [
                "the chain rule",
                "the product rule",
                "the quotient rule",
                "Fermat's theorem",
              ],
              answerIndex: 0,
              explanation: "u-substitution undoes chain-rule derivatives.",
            },
            {
              id: "maa-l12-q5",
              type: "short",
              prompt:
                "Find the area under y = 3x² from x = 0 to x = 2.",
              answer: "8",
              keywords: ["8"],
              explanation: "∫₀² 3x² dx = [x³]₀² = 8.",
            },
            {
              id: "maa-l12-q6",
              type: "mcq",
              prompt: "∫ eˣ dx = ?",
              choices: ["eˣ + C", "xeˣ⁻¹ + C", "ln x + C", "eˣ/x + C"],
              answerIndex: 0,
              explanation: "eˣ is its own antiderivative.",
            },
          ],
        },
        {
          id: "maa-l13",
          title: "Maclaurin series & l'Hôpital",
          level: "HL",
          questions: [
            {
              id: "maa-l13-q1",
              type: "mcq",
              prompt: "The Maclaurin series is a Taylor series centred at…",
              choices: ["x = 0", "x = 1", "x = a", "x = ∞"],
              answerIndex: 0,
              explanation: "Maclaurin = Taylor expansion about 0.",
            },
            {
              id: "maa-l13-q2",
              type: "mcq",
              prompt: "The Maclaurin expansion of eˣ begins…",
              choices: [
                "1 + x + x²/2! + x³/3! + …",
                "x − x³/3! + x⁵/5! − …",
                "1 − x²/2! + x⁴/4! − …",
                "1 + x + x² + x³ + …",
              ],
              answerIndex: 0,
              explanation: "Every derivative of eˣ at 0 equals 1.",
            },
            {
              id: "maa-l13-q3",
              type: "tf",
              prompt:
                "L'Hôpital's rule can be applied to any limit, regardless of its form.",
              answer: false,
              explanation:
                "Only indeterminate forms like 0/0 or ∞/∞ qualify.",
            },
            {
              id: "maa-l13-q4",
              type: "short",
              prompt:
                "Using l'Hôpital (or direct), find limₓ→₀ sin x / x.",
              answer: "1",
              keywords: ["1"],
              explanation: "cos 0 / 1 = 1.",
            },
            {
              id: "maa-l13-q5",
              type: "mcq",
              prompt: "The Maclaurin series for sin x is…",
              choices: [
                "x − x³/3! + x⁵/5! − …",
                "1 − x²/2! + x⁴/4! − …",
                "x + x³/3! + x⁵/5! + …",
                "1 + x + x²/2! + …",
              ],
              answerIndex: 0,
              explanation:
                "Odd powers alternating sign; cos x is the even series.",
            },
            {
              id: "maa-l13-q6",
              type: "short",
              prompt:
                "Find limₓ→₀ (eˣ − 1)/x using l'Hôpital.",
              answer: "1",
              keywords: ["1"],
              explanation: "eˣ/1 → e⁰ = 1.",
            },
          ],
        },
      ],
    },
  ],
};
