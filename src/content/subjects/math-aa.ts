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
        {
          id: "maa-l14",
          title: "Binomial theorem",
          questions: [
            {
              id: "maa-l14-q1",
              type: "mcq",
              prompt: "The expansion of (a + b)³ is",
              choices: [
                "a³ + 3a²b + 3ab² + b³",
                "a³ + a²b + ab² + b³",
                "a³ + b³",
                "a³ + 3ab + b³",
              ],
              answerIndex: 0,
              explanation:
                "Row 3 of Pascal's triangle: 1 3 3 1.",
            },
            {
              id: "maa-l14-q2",
              type: "mcq",
              prompt: "The binomial coefficient C(5, 2) equals",
              choices: ["10", "20", "7", "5"],
              answerIndex: 0,
              explanation: "5!/(2!·3!) = 20/2 = 10.",
            },
            {
              id: "maa-l14-q3",
              type: "tf",
              prompt:
                "At this level, the binomial theorem applies to positive integer powers n.",
              answer: true,
              explanation:
                "The finite (n+1)-term expansion requires n ∈ ℤ⁺ (fractional powers give infinite series).",
            },
            {
              id: "maa-l14-q4",
              type: "mcq",
              prompt:
                "How many terms are in the expansion of (a + b)ⁿ?",
              choices: ["n", "n + 1", "n − 1", "2n"],
              answerIndex: 1,
              explanation:
                "Terms run from k = 0 to k = n: n + 1 terms.",
            },
            {
              id: "maa-l14-q5",
              type: "short",
              prompt:
                "Give the coefficient of x² in the expansion of (1 + x)⁵.",
              answer: "10",
              keywords: ["10"],
              explanation: "C(5,2) = 10.",
            },
            {
              id: "maa-l14-q6",
              type: "short",
              prompt:
                "Give the coefficient of x² in the expansion of (2 + x)⁴.",
              answer: "24",
              keywords: ["24"],
              explanation:
                "C(4,2)·2²·x² = 6·4·x² → coefficient 24.",
            },
          ],
        },
        {
          id: "maa-l15",
          title: "Proof by contradiction",
          level: "HL",
          questions: [
            {
              id: "maa-l15-q1",
              type: "mcq",
              prompt: "Proof by contradiction begins by",
              choices: [
                "assuming the statement is true",
                "assuming the negation of the statement is true",
                "testing examples",
                "drawing a diagram",
              ],
              answerIndex: 1,
              explanation:
                "Assume the negation; deriving a contradiction proves the original statement.",
            },
            {
              id: "maa-l15-q2",
              type: "mcq",
              prompt:
                "The classic proof that √2 is irrational first assumes",
              choices: [
                "√2 is irrational",
                "√2 = p/q where p/q is a fraction in lowest terms",
                "2 is prime",
                "p and q are both even",
              ],
              answerIndex: 1,
              explanation:
                "Assume rational: √2 = p/q in lowest terms, then show both p and q must be even — contradiction.",
            },
            {
              id: "maa-l15-q3",
              type: "tf",
              prompt:
                "If the assumption leads to a contradiction, the original statement must be true.",
              answer: true,
              explanation:
                "The contradiction means the negation is impossible, so the statement holds.",
            },
            {
              id: "maa-l15-q4",
              type: "mcq",
              prompt:
                "The contrapositive of 'if p then q' is",
              choices: [
                "if q then p",
                "if not p then not q",
                "if not q then not p",
                "p and q",
              ],
              answerIndex: 2,
              explanation:
                "Contrapositive: ¬q ⇒ ¬p — logically equivalent to the original.",
            },
            {
              id: "maa-l15-q5",
              type: "short",
              prompt:
                "To prove 'there is no smallest positive rational number' by contradiction, what do you assume exists? (one phrase)",
              answer: "a smallest positive rational number",
              keywords: ["smallest", "rational"],
              acceptable: ["the smallest positive rational"],
              explanation:
                "Assume the negation: a smallest positive rational exists (then halving it contradicts smallestness).",
            },
            {
              id: "maa-l15-q6",
              type: "short",
              prompt:
                "In the √2 proof, p² = 2q² means p² is even, so p must be ___.",
              answer: "even",
              keywords: ["even"],
              explanation:
                "If p² is even then p is even — which forces q to be even too, contradicting lowest terms.",
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
        {
          id: "maa-l16",
          title: "Inverse and composite functions",
          questions: [
            {
              id: "maa-l16-q1",
              type: "mcq",
              prompt: "The inverse of f(x) = 2x + 3 is",
              choices: [
                "f⁻¹(x) = (x − 3)/2",
                "f⁻¹(x) = (x + 3)/2",
                "f⁻¹(x) = 2x − 3",
                "f⁻¹(x) = x/2 − 3",
              ],
              answerIndex: 0,
              explanation:
                "Swap x and y then solve: x = 2y + 3 → y = (x − 3)/2.",
            },
            {
              id: "maa-l16-q2",
              type: "mcq",
              prompt: "The domain of f⁻¹ equals",
              choices: [
                "the domain of f",
                "the range of f",
                "all real numbers",
                "zero",
              ],
              answerIndex: 1,
              explanation:
                "Inverse functions swap domain and range.",
            },
            {
              id: "maa-l16-q3",
              type: "tf",
              prompt: "For any invertible f, f⁻¹(f(x)) = x.",
              answer: true,
              explanation:
                "Applying a function and its inverse returns the input.",
            },
            {
              id: "maa-l16-q4",
              type: "mcq",
              prompt:
                "If f(x) = x² and g(x) = x + 1, then f(g(x)) equals",
              choices: [
                "x² + 1",
                "(x + 1)²",
                "x² + x",
                "x² − 1",
              ],
              answerIndex: 1,
              explanation:
                "f(g(x)) = f(x + 1) = (x + 1)².",
            },
            {
              id: "maa-l16-q5",
              type: "short",
              prompt: "If f(x) = 3x − 6, give f⁻¹(6).",
              answer: "4",
              keywords: ["4"],
              explanation:
                "f⁻¹(x) = (x + 6)/3 → f⁻¹(6) = 12/3 = 4. Check: f(4) = 6. ✓",
            },
            {
              id: "maa-l16-q6",
              type: "short",
              prompt:
                "f(x) = x² + 1 for x ≥ 0. Give f⁻¹(10).",
              answer: "3",
              keywords: ["3"],
              explanation: "x² + 1 = 10 → x = √9 = 3 (taking x ≥ 0).",
            },
          ],
        },
        {
          id: "maa-l17",
          title: "Transformations of graphs",
          questions: [
            {
              id: "maa-l17-q1",
              type: "mcq",
              prompt: "The graph of y = f(x) + 2 is f(x) shifted",
              choices: [
                "up 2 units",
                "down 2 units",
                "left 2 units",
                "right 2 units",
              ],
              answerIndex: 0,
              explanation:
                "Adding outside the function moves vertically: +2 up.",
            },
            {
              id: "maa-l17-q2",
              type: "mcq",
              prompt: "y = f(x − 3) shifts f(x)",
              choices: [
                "left 3",
                "right 3",
                "up 3",
                "down 3",
              ],
              answerIndex: 1,
              explanation:
                "x → x − 3 moves the graph RIGHT by 3 (counter-intuitive sign).",
            },
            {
              id: "maa-l17-q3",
              type: "tf",
              prompt: "y = −f(x) reflects the graph of f in the x-axis.",
              answer: true,
              explanation:
                "Every y-value changes sign — reflection across the x-axis.",
            },
            {
              id: "maa-l17-q4",
              type: "mcq",
              prompt:
                "y = f(2x) applies to f a horizontal",
              choices: [
                "stretch by factor 2",
                "compression by factor 1/2",
                "shift of 2",
                "reflection",
              ],
              answerIndex: 1,
              explanation:
                "x → 2x compresses horizontally by factor 1/2.",
            },
            {
              id: "maa-l17-q5",
              type: "short",
              prompt:
                "f(x) = x² is transformed to y = (x − 2)² + 1. Give the vertex coordinates.",
              answer: "(2, 1)",
              keywords: ["2", "1"],
              acceptable: ["2,1", "x=2 y=1"],
              explanation:
                "Shift right 2, up 1: vertex (2, 1).",
            },
            {
              id: "maa-l17-q6",
              type: "short",
              prompt:
                "f(x) = x³. For y = f(x + 1) − 4, give y when x = −1.",
              answer: "-4",
              keywords: ["-4"],
              acceptable: ["−4"],
              explanation: "y = f(0) − 4 = 0 − 4 = −4.",
            },
          ],
        },
        {
          id: "maa-l18",
          title: "Partial fractions",
          level: "HL",
          questions: [
            {
              id: "maa-l18-q1",
              type: "mcq",
              prompt:
                "To decompose 1/((x − 1)(x + 1)) you write it as",
              choices: [
                "A/(x − 1) + B/(x + 1)",
                "A/(x − 1) − B/(x + 1)",
                "(A + B)/((x − 1)(x + 1))",
                "A·B/(x² − 1)",
              ],
              answerIndex: 0,
              explanation:
                "One linear fraction per distinct linear factor.",
            },
            {
              id: "maa-l18-q2",
              type: "mcq",
              prompt:
                "A repeated factor (x − 1)² in the denominator requires terms",
              choices: [
                "A/(x − 1)² only",
                "A/(x − 1) + B/(x − 1)²",
                "A/(x − 1) + A/(x − 1)",
                "A(x − 1)",
              ],
              answerIndex: 1,
              explanation:
                "Repeated linear factors need one term per power.",
            },
            {
              id: "maa-l18-q3",
              type: "tf",
              prompt:
                "Partial fractions require a proper fraction — the numerator's degree must be less than the denominator's.",
              answer: true,
              explanation:
                "If not, do polynomial long division first.",
            },
            {
              id: "maa-l18-q4",
              type: "mcq",
              prompt:
                "The main reason for decomposing into partial fractions is to",
              choices: [
                "make the expression longer",
                "allow term-by-term integration",
                "remove the variable",
                "factor the numerator",
              ],
              answerIndex: 1,
              explanation:
                "Each simple fraction integrates to a logarithm — splitting enables integration.",
            },
            {
              id: "maa-l18-q5",
              type: "short",
              prompt:
                "Decompose (3x + 3)/((x − 1)(x + 2)) = A/(x − 1) + B/(x + 2). Give the value of A.",
              answer: "2",
              keywords: ["2"],
              explanation:
                "3x + 3 = A(x + 2) + B(x − 1). Set x = 1: 6 = 3A → A = 2 (B = 1).",
            },
            {
              id: "maa-l18-q6",
              type: "short",
              prompt:
                "4/(x(x + 2)) = A/x + B/(x + 2). Give the value of B.",
              answer: "-2",
              keywords: ["-2"],
              acceptable: ["−2"],
              explanation:
                "4 = A(x + 2) + Bx. Set x = −2: 4 = −2B → B = −2 (A = 2).",
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
        {
          id: "maa-l19",
          title: "Radians: arcs, sectors and circles",
          questions: [
            {
              id: "maa-l19-q1",
              type: "mcq",
              prompt: "π radians equals",
              choices: ["90°", "180°", "270°", "360°"],
              answerIndex: 1,
              explanation: "π rad = 180°.",
            },
            {
              id: "maa-l19-q2",
              type: "mcq",
              prompt:
                "The arc length subtended by angle θ (radians) in a circle of radius r is",
              choices: ["r²θ/2", "rθ", "2πr/θ", "r/θ"],
              answerIndex: 1,
              explanation: "Arc length s = rθ (θ in radians).",
            },
            {
              id: "maa-l19-q3",
              type: "tf",
              prompt: "The area of a sector is ½r²θ with θ in radians.",
              answer: true,
              explanation: "A = ½r²θ.",
            },
            {
              id: "maa-l19-q4",
              type: "mcq",
              prompt: "60° expressed in radians is",
              choices: ["π/6", "π/3", "π/4", "π/2"],
              answerIndex: 1,
              explanation: "60° × π/180° = π/3.",
            },
            {
              id: "maa-l19-q5",
              type: "short",
              prompt:
                "A sector has radius 10 cm and angle 1.2 rad. Give the arc length in cm.",
              answer: "12",
              keywords: ["12"],
              acceptable: ["12 cm"],
              explanation: "s = rθ = 10 × 1.2 = 12 cm.",
            },
            {
              id: "maa-l19-q6",
              type: "short",
              prompt:
                "Radius 6, angle π/3. Give the sector area exactly (in terms of π).",
              answer: "6π",
              keywords: ["6π", "18.8"],
              acceptable: ["18.85", "18.8", "6 pi"],
              explanation: "A = ½ × 36 × π/3 = 6π ≈ 18.85.",
            },
          ],
        },
        {
          id: "maa-l20",
          title: "Trigonometric equations",
          questions: [
            {
              id: "maa-l20-q1",
              type: "mcq",
              prompt: "On [0, 2π], the solutions of sin x = 0.5 are",
              choices: [
                "π/6 only",
                "π/6 and 5π/6",
                "π/3 and 2π/3",
                "π/6 and 7π/6",
              ],
              answerIndex: 1,
              explanation:
                "Sine is positive in quadrants I and II: π/6 and 5π/6.",
            },
            {
              id: "maa-l20-q2",
              type: "mcq",
              prompt: "cos x = −1 has solution x =",
              choices: ["0", "π/2", "π", "3π/2"],
              answerIndex: 2,
              explanation: "cos π = −1.",
            },
            {
              id: "maa-l20-q3",
              type: "tf",
              prompt: "The period of tan x is π.",
              answer: true,
              explanation:
                "tan repeats every π, unlike sin/cos (2π).",
            },
            {
              id: "maa-l20-q4",
              type: "mcq",
              prompt:
                "How many solutions does sin x = 1/2 have on [0, 2π]?",
              choices: ["1", "2", "3", "4"],
              answerIndex: 1,
              explanation:
                "Two — one in each of quadrants I and II.",
            },
            {
              id: "maa-l20-q5",
              type: "short",
              prompt:
                "Give the smallest positive solution (in radians, exact) of sin x = 1.",
              answer: "π/2",
              keywords: ["π/2", "1.57"],
              acceptable: ["pi/2", "1.57", "1.5708"],
              explanation: "sin x = 1 at x = π/2.",
            },
            {
              id: "maa-l20-q6",
              type: "short",
              prompt:
                "Give the smallest positive solution of cos x = 0 (exact, radians).",
              answer: "π/2",
              keywords: ["π/2", "1.57"],
              acceptable: ["pi/2", "1.57"],
              explanation: "cos x = 0 first at x = π/2.",
            },
          ],
        },
        {
          id: "maa-l21",
          title: "3-D vectors and geometry",
          level: "HL",
          questions: [
            {
              id: "maa-l21-q1",
              type: "mcq",
              prompt: "The magnitude of a = (3, 4, 0) is",
              choices: ["7", "5", "12", "25"],
              answerIndex: 1,
              explanation: "|a| = √(9 + 16 + 0) = 5.",
            },
            {
              id: "maa-l21-q2",
              type: "mcq",
              prompt:
                "Two vectors are perpendicular when their dot product is",
              choices: ["1", "−1", "0", "the angle between them"],
              answerIndex: 2,
              explanation:
                "a·b = |a||b|cosθ = 0 ⇔ θ = 90°.",
            },
            {
              id: "maa-l21-q3",
              type: "tf",
              prompt:
                "In the vector line equation r = a + λb, b is the direction vector.",
              answer: true,
              explanation:
                "a is a point on the line, b gives its direction.",
            },
            {
              id: "maa-l21-q4",
              type: "mcq",
              prompt: "Skew lines in 3-D are lines that",
              choices: [
                "are parallel",
                "intersect",
                "are not parallel and do not intersect",
                "lie in the same plane",
              ],
              answerIndex: 2,
              explanation:
                "Skew = non-parallel, non-intersecting — only possible in 3-D.",
            },
            {
              id: "maa-l21-q5",
              type: "short",
              prompt: "Give |a| for a = (1, 2, 2).",
              answer: "3",
              keywords: ["3"],
              explanation: "|a| = √(1 + 4 + 4) = √9 = 3.",
            },
            {
              id: "maa-l21-q6",
              type: "short",
              prompt:
                "Give the dot product of a = (1, 0, 1) and b = (2, 3, 1).",
              answer: "3",
              keywords: ["3"],
              explanation: "a·b = 2 + 0 + 1 = 3.",
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
        {
          id: "maa-l22",
          title: "Binomial distribution",
          questions: [
            {
              id: "maa-l22-q1",
              type: "mcq",
              prompt: "For X ~ B(10, 0.5), the expected value E(X) is",
              choices: ["2.5", "5", "10", "0.5"],
              answerIndex: 1,
              explanation: "E(X) = np = 10 × 0.5 = 5.",
            },
            {
              id: "maa-l22-q2",
              type: "mcq",
              prompt:
                "The binomial distribution applies when there is",
              choices: [
                "a varying probability",
                "a fixed number of independent trials with two outcomes and constant p",
                "an unlimited number of trials",
                "a continuous outcome",
              ],
              answerIndex: 1,
              explanation:
                "BInS: Binary outcomes, Independent trials, fixed Number, same probability.",
            },
            {
              id: "maa-l22-q3",
              type: "tf",
              prompt:
                "P(X = k) = C(n, k)·p^k·(1 − p)^(n − k) for a binomial variable.",
              answer: true,
              explanation:
                "Each arrangement of k successes has probability p^k(1−p)^(n−k).",
            },
            {
              id: "maa-l22-q4",
              type: "mcq",
              prompt: "For X ~ B(4, 0.5), P(X = 4) equals",
              choices: ["0.5", "0.25", "0.0625", "0.125"],
              answerIndex: 2,
              explanation: "P(X=4) = 0.5⁴ = 1/16 = 0.0625.",
            },
            {
              id: "maa-l22-q5",
              type: "short",
              prompt:
                "For X ~ B(3, 1/3), give P(X = 2) as a fraction or decimal.",
              answer: "2/9",
              keywords: ["2/9", "0.22"],
              acceptable: ["0.222", "0.22"],
              explanation:
                "C(3,2)·(1/3)²·(2/3) = 3·(1/9)·(2/3) = 2/9 ≈ 0.222.",
            },
            {
              id: "maa-l22-q6",
              type: "short",
              prompt: "Give the variance of B(20, 0.25).",
              answer: "3.75",
              keywords: ["3.75"],
              acceptable: ["15/4"],
              explanation:
                "Var = np(1 − p) = 20 × 0.25 × 0.75 = 3.75.",
            },
          ],
        },
        {
          id: "maa-l23",
          title: "Normal and inverse normal",
          questions: [
            {
              id: "maa-l23-q1",
              type: "mcq",
              prompt:
                "Approximately what percentage of a normal distribution lies within 1σ of the mean?",
              choices: ["50%", "68%", "95%", "99.7%"],
              answerIndex: 1,
              explanation: "68/95/99.7 rule: ~68% within μ ± σ.",
            },
            {
              id: "maa-l23-q2",
              type: "mcq",
              prompt:
                "The inverse normal function on a GDC finds",
              choices: [
                "a probability from x",
                "the x-value for a given tail probability",
                "the mean",
                "the standard deviation",
              ],
              answerIndex: 1,
              explanation:
                "Inverse normal: probability → x-value (e.g. find the 95th percentile).",
            },
            {
              id: "maa-l23-q3",
              type: "tf",
              prompt:
                "The normal curve is symmetric about its mean μ.",
              answer: true,
              explanation:
                "Mean = median = mode for a normal distribution.",
            },
            {
              id: "maa-l23-q4",
              type: "mcq",
              prompt: "The standardised z-score of x is",
              choices: [
                "z = (x − μ)/σ",
                "z = (μ − x)/σ",
                "z = x·σ/μ",
                "z = x − μ − σ",
              ],
              answerIndex: 0,
              explanation: "z = (x − μ)/σ measures standard deviations from the mean.",
            },
            {
              id: "maa-l23-q5",
              type: "short",
              prompt:
                "X ~ N(100, 15²). Give the z-score of x = 130.",
              answer: "2",
              keywords: ["2"],
              explanation: "z = (130 − 100)/15 = 2.",
            },
            {
              id: "maa-l23-q6",
              type: "short",
              prompt:
                "Using the 68/95/99.7 rule, give the approximate probability P(X < 130) for N(100, 15²) as a decimal.",
              answer: "0.975",
              keywords: ["0.97"],
              acceptable: ["0.975", "0.977", "0.98"],
              explanation:
                "x = 130 is z = 2 → ~97.5% below (50% + 95%/2). GDC gives 0.977.",
            },
          ],
        },
        {
          id: "maa-l24",
          title: "Expectation and combined events",
          questions: [
            {
              id: "maa-l24-q1",
              type: "mcq",
              prompt: "The expected value E(X) of a discrete variable is",
              choices: [
                "the most likely outcome",
                "Σ x·P(X = x)",
                "the middle value",
                "Σ P(X = x)",
              ],
              answerIndex: 1,
              explanation:
                "E(X) = Σ x·p(x) — the long-run average.",
            },
            {
              id: "maa-l24-q2",
              type: "mcq",
              prompt: "For independent events A and B, P(A ∩ B) equals",
              choices: [
                "P(A) + P(B)",
                "P(A)·P(B)",
                "P(A)/P(B)",
                "P(A) − P(B)",
              ],
              answerIndex: 1,
              explanation: "Independence means probabilities multiply.",
            },
            {
              id: "maa-l24-q3",
              type: "tf",
              prompt:
                "For mutually exclusive events, P(A ∪ B) = P(A) + P(B).",
              answer: true,
              explanation:
                "No overlap, so probabilities add.",
            },
            {
              id: "maa-l24-q4",
              type: "mcq",
              prompt: "E(X) for a fair die roll is",
              choices: ["3", "3.5", "4", "6"],
              answerIndex: 1,
              explanation: "(1 + 2 + 3 + 4 + 5 + 6)/6 = 3.5.",
            },
            {
              id: "maa-l24-q5",
              type: "short",
              prompt:
                "Give the probability of two heads in two fair coin tosses (decimal).",
              answer: "0.25",
              keywords: ["0.25"],
              acceptable: ["1/4"],
              explanation: "0.5 × 0.5 = 0.25.",
            },
            {
              id: "maa-l24-q6",
              type: "short",
              prompt:
                "X has P(0) = 0.5, P(1) = 0.3, P(2) = 0.2. Give E(X).",
              answer: "0.7",
              keywords: ["0.7"],
              explanation:
                "E(X) = 0×0.5 + 1×0.3 + 2×0.2 = 0.7.",
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
        {
          id: "maa-l25",
          title: "Integration by substitution and parts",
          level: "HL",
          questions: [
            {
              id: "maa-l25-q1",
              type: "mcq",
              prompt: "∫ x·eˣ dx equals",
              choices: [
                "(x − 1)eˣ + C",
                "eˣ(x + 1) + C",
                "xeˣ + C",
                "eˣ + C",
              ],
              answerIndex: 0,
              explanation:
                "Parts with u = x, dv = eˣ: ∫xeˣ = xeˣ − eˣ + C.",
            },
            {
              id: "maa-l25-q2",
              type: "mcq",
              prompt:
                "For ∫ 2x(x² + 1)³ dx the natural substitution is",
              choices: ["u = 2x", "u = x² + 1", "u = x³", "u = (x² + 1)³"],
              answerIndex: 1,
              explanation:
                "u = x² + 1 gives du = 2x dx → ∫ u³ du.",
            },
            {
              id: "maa-l25-q3",
              type: "tf",
              prompt: "Integration by parts states ∫ u dv = uv − ∫ v du.",
              answer: true,
              explanation:
                "The product rule integrated and rearranged.",
            },
            {
              id: "maa-l25-q4",
              type: "mcq",
              prompt:
                "When integrating x·ln x by parts, the best choice for u is",
              choices: ["x", "ln x", "dx", "eˣ"],
              answerIndex: 1,
              explanation:
                "Choose u = ln x (it simplifies when differentiated) — LIATE.",
            },
            {
              id: "maa-l25-q5",
              type: "short",
              prompt:
                "Evaluate ∫₀¹ 2x·e^(x²) dx (exact or decimal).",
              answer: "e - 1",
              keywords: ["e", "1.71"],
              acceptable: ["e-1", "1.718", "1.72"],
              explanation:
                "u = x² → ∫ eᵘ du = eˣ²; evaluated 0→1: e − 1 ≈ 1.718.",
            },
            {
              id: "maa-l25-q6",
              type: "short",
              prompt: "Evaluate ∫₁^e ln x dx.",
              answer: "1",
              keywords: ["1"],
              explanation:
                "∫ ln x = x ln x − x; at e: 0, at 1: −1 → difference 1.",
            },
          ],
        },
        {
          id: "maa-l26",
          title: "Implicit differentiation, related rates and kinematics",
          level: "HL",
          questions: [
            {
              id: "maa-l26-q1",
              type: "mcq",
              prompt: "Differentiating y² with respect to x gives",
              choices: ["2y", "2y·dy/dx", "dy/dx", "y·dy/dx"],
              answerIndex: 1,
              explanation:
                "Chain rule: d/dx(y²) = 2y·dy/dx.",
            },
            {
              id: "maa-l26-q2",
              type: "mcq",
              prompt:
                "For the circle x² + y² = 25, dy/dx equals",
              choices: ["−x/y", "−y/x", "x/y", "−2x"],
              answerIndex: 0,
              explanation:
                "2x + 2y·y′ = 0 → y′ = −x/y.",
            },
            {
              id: "maa-l26-q3",
              type: "tf",
              prompt:
                "In kinematics, acceleration a = dv/dt and velocity v = ∫ a dt.",
              answer: true,
              explanation:
                "Differentiation and integration link displacement, velocity and acceleration.",
            },
            {
              id: "maa-l26-q4",
              type: "mcq",
              prompt:
                "For a sphere V = (4/3)πr³, the rate dV/dt equals",
              choices: [
                "4πr²·dr/dt",
                "4πr²",
                "(4/3)πr²·dr/dt",
                "πr²·dr/dt",
              ],
              answerIndex: 0,
              explanation:
                "Chain rule: dV/dt = (dV/dr)(dr/dt) = 4πr²·dr/dt.",
            },
            {
              id: "maa-l26-q5",
              type: "short",
              prompt:
                "For x² + y² = 25, give dy/dx at the point (3, 4).",
              answer: "-0.75",
              keywords: ["-0.75", "-3/4"],
              acceptable: ["−3/4", "-3/4", "−0.75"],
              explanation: "y′ = −x/y = −3/4 = −0.75.",
            },
            {
              id: "maa-l26-q6",
              type: "short",
              prompt:
                "Displacement s = t³ − 6t². Give the positive time t when velocity is zero.",
              answer: "4",
              keywords: ["4"],
              explanation:
                "v = 3t² − 12t = 3t(t − 4) = 0 → t = 4 (t > 0).",
            },
          ],
        },
        {
          id: "maa-l27",
          title: "Volumes of revolution",
          level: "HL",
          questions: [
            {
              id: "maa-l27-q1",
              type: "mcq",
              prompt:
                "The volume when y = f(x) is rotated about the x-axis on [a, b] is",
              choices: [
                "V = π∫ₐᵇ y² dx",
                "V = ∫ₐᵇ y dx",
                "V = 2π∫ₐᵇ y dx",
                "V = π∫ₐᵇ y dy",
              ],
              answerIndex: 0,
              explanation:
                "Disc method: circular slices of area πy².",
            },
            {
              id: "maa-l27-q2",
              type: "mcq",
              prompt:
                "Rotating a region about the y-axis integrates",
              choices: [
                "πx² with respect to y",
                "πy² with respect to x",
                "y with respect to x",
                "πr² with respect to θ",
              ],
              answerIndex: 0,
              explanation:
                "About the y-axis: V = π∫ x² dy over the y-range.",
            },
            {
              id: "maa-l27-q3",
              type: "tf",
              prompt:
                "Rotating y = x on [0, 2] about the x-axis produces a cone.",
              answer: true,
              explanation:
                "A straight line through the origin sweeps out a cone of radius 2 and height 2.",
            },
            {
              id: "maa-l27-q4",
              type: "mcq",
              prompt:
                "The disc method is essentially summing",
              choices: [
                "rectangles",
                "cylindrical discs of thickness dx",
                "shells only",
                "triangles",
              ],
              answerIndex: 1,
              explanation:
                "Each slice is a thin cylinder of volume πy² dx.",
            },
            {
              id: "maa-l27-q5",
              type: "short",
              prompt:
                "y = x rotated about the x-axis on [0, 1]. Give the volume (in terms of π).",
              answer: "π/3",
              keywords: ["π/3", "1.04"],
              acceptable: ["pi/3", "1.047", "1.05"],
              explanation: "V = π∫₀¹ x² dx = π/3 ≈ 1.05.",
            },
            {
              id: "maa-l27-q6",
              type: "short",
              prompt:
                "y = √x rotated about the x-axis on [0, 4]. Give the volume (in terms of π).",
              answer: "8π",
              keywords: ["8π", "25.1"],
              acceptable: ["8 pi", "25.13", "25.1"],
              explanation:
                "V = π∫₀⁴ x dx = π[x²/2]₀⁴ = 8π ≈ 25.13.",
            },
          ],
        },
      ],
    },
  ],
};
