import type { Subject } from "../types";

export const mathAA: Subject = {
  slug: "math-aa",
  name: "Mathematics AA",
  short: "Math AA",
  color: "#1CB0F6",
  emoji: "📐",
  units: [
    {
      id: "maa-u1",
      title: "Functions & Sequences",
      lessons: [
        {
          id: "maa-l1",
          title: "Functions & domain",
          questions: [
            {
              id: "maa-l1-q1",
              type: "mcq",
              prompt: "What is the domain of f(x) = 1/(x − 3)?",
              choices: ["All real x", "x ≠ 3", "x > 3", "x ≠ 0"],
              answerIndex: 1,
              explanation: "The denominator cannot be zero, so x = 3 is excluded.",
            },
            {
              id: "maa-l1-q2",
              type: "mcq",
              prompt: "If f(x) = 2x and g(x) = x + 1, what is f(g(x))?",
              choices: ["2x + 1", "2x + 2", "x + 2", "2x² + x"],
              answerIndex: 1,
              explanation: "f(g(x)) = f(x + 1) = 2(x + 1) = 2x + 2.",
            },
            {
              id: "maa-l1-q3",
              type: "fill",
              prompt: "If f(x) = 2x + 1, find f(4).",
              answer: "9",
              explanation: "f(4) = 2(4) + 1 = 9.",
            },
            {
              id: "maa-l1-q4",
              type: "mcq",
              prompt: "What is the inverse of f(x) = 3x − 2?",
              choices: [
                "f⁻¹(x) = (x + 2)/3",
                "f⁻¹(x) = (x − 2)/3",
                "f⁻¹(x) = 3x + 2",
                "f⁻¹(x) = x/3 − 2",
              ],
              answerIndex: 0,
              explanation: "Swap x and y: x = 3y − 2 → y = (x + 2)/3.",
            },
            {
              id: "maa-l1-q5",
              type: "fill",
              prompt: "If f(x) = x² − 4, find f(3).",
              answer: "5",
              explanation: "f(3) = 9 − 4 = 5.",
            },
            {
              id: "maa-l1-q6",
              type: "mcq",
              prompt: "A function is even when…",
              choices: [
                "f(−x) = f(x)",
                "f(−x) = −f(x)",
                "f(x) = f⁻¹(x)",
                "f(x) is linear",
              ],
              answerIndex: 0,
              explanation:
                "Even functions are symmetric about the y-axis: f(−x) = f(x).",
            },
          ],
        },
        {
          id: "maa-l2",
          title: "Quadratics",
          questions: [
            {
              id: "maa-l2-q1",
              type: "mcq",
              prompt: "What is the vertex of y = x² − 4x + 1?",
              choices: ["(2, −3)", "(−2, −3)", "(2, 5)", "(4, 1)"],
              answerIndex: 0,
              explanation:
                "x = −b/2a = 2; y = 4 − 8 + 1 = −3. Vertex (2, −3).",
            },
            {
              id: "maa-l2-q2",
              type: "mcq",
              prompt: "A quadratic has two distinct real roots when…",
              choices: [
                "b² − 4ac > 0",
                "b² − 4ac = 0",
                "b² − 4ac < 0",
                "a = 0",
              ],
              answerIndex: 0,
              explanation:
                "A positive discriminant means two distinct real roots.",
            },
            {
              id: "maa-l2-q3",
              type: "fill",
              prompt: "Find the sum of the roots of x² − 5x + 6 = 0.",
              answer: "5",
              explanation: "Sum of roots = −b/a = 5 (roots are 2 and 3).",
            },
            {
              id: "maa-l2-q4",
              type: "mcq",
              prompt: "Factorise x² − 5x + 6.",
              choices: [
                "(x − 2)(x − 3)",
                "(x + 2)(x + 3)",
                "(x − 1)(x − 6)",
                "(x + 1)(x − 6)",
              ],
              answerIndex: 0,
              explanation: "−2 and −3 multiply to 6 and add to −5.",
            },
            {
              id: "maa-l2-q5",
              type: "fill",
              prompt:
                "Find the x-coordinate of the vertex of y = 2x² + 8x + 1.",
              answer: "-2",
              explanation: "x = −b/2a = −8/(2·2) = −2.",
            },
            {
              id: "maa-l2-q6",
              type: "mcq",
              prompt: "The minimum value of y = x² + 2x + 5 is…",
              choices: ["4", "5", "−1", "1"],
              answerIndex: 0,
              explanation:
                "Vertex at x = −1: y = 1 − 2 + 5 = 4. Minimum value is 4.",
            },
          ],
        },
        {
          id: "maa-l3",
          title: "Sequences & series",
          questions: [
            {
              id: "maa-l3-q1",
              type: "mcq",
              prompt:
                "The nth term of an arithmetic sequence with first term a and common difference d is…",
              choices: ["a + (n−1)d", "a·rⁿ⁻¹", "a + nd", "n(a + d)"],
              answerIndex: 0,
              explanation: "uₙ = u₁ + (n − 1)d.",
            },
            {
              id: "maa-l3-q2",
              type: "fill",
              prompt: "Find the 5th term of 3, 7, 11, 15, …",
              answer: "19",
              explanation: "d = 4, so u₅ = 3 + 4·4 = 19.",
            },
            {
              id: "maa-l3-q3",
              type: "mcq",
              prompt: "What is the common ratio of 2, 6, 18, 54, …?",
              choices: ["3", "4", "12", "2"],
              answerIndex: 0,
              explanation: "Each term is 3× the previous: r = 3.",
            },
            {
              id: "maa-l3-q4",
              type: "fill",
              prompt:
                "Find the sum of the first 10 terms of the arithmetic sequence 2, 5, 8, …",
              answer: "155",
              explanation:
                "Sₙ = n/2 (2a + (n−1)d) = 5(4 + 27) = 155.",
            },
            {
              id: "maa-l3-q5",
              type: "mcq",
              prompt:
                "A geometric series 1 + r + r² + … converges to a finite sum when…",
              choices: ["|r| < 1", "r > 1", "r = 1", "|r| > 1"],
              answerIndex: 0,
              explanation:
                "S∞ = a/(1 − r) exists only when |r| < 1.",
            },
            {
              id: "maa-l3-q6",
              type: "mcq",
              prompt: "Σₖ₌₁⁴ k equals…",
              choices: ["10", "24", "4", "14"],
              answerIndex: 0,
              explanation: "1 + 2 + 3 + 4 = 10.",
            },
          ],
        },
      ],
    },
    {
      id: "maa-u2",
      title: "Calculus",
      lessons: [
        {
          id: "maa-l4",
          title: "Differentiation basics",
          questions: [
            {
              id: "maa-l4-q1",
              type: "mcq",
              prompt: "d/dx (x³) = ?",
              choices: ["3x²", "x³/3", "3x³", "x²"],
              answerIndex: 0,
              explanation: "Power rule: d/dx xⁿ = nxⁿ⁻¹.",
            },
            {
              id: "maa-l4-q2",
              type: "mcq",
              prompt: "d/dx (2x² + 3x) = ?",
              choices: ["4x + 3", "2x + 3", "4x² + 3", "x + 3"],
              answerIndex: 0,
              explanation: "Differentiate term by term: 4x + 3.",
            },
            {
              id: "maa-l4-q3",
              type: "fill",
              prompt: "Find the derivative of f(x) = x² at x = 3.",
              answer: "6",
              explanation: "f′(x) = 2x, so f′(3) = 6.",
            },
            {
              id: "maa-l4-q4",
              type: "mcq",
              prompt: "d/dx (1/x) = ?",
              choices: ["−1/x²", "1/x²", "ln x", "−x"],
              answerIndex: 0,
              explanation: "1/x = x⁻¹, derivative = −x⁻² = −1/x².",
            },
            {
              id: "maa-l4-q5",
              type: "fill",
              prompt: "d/dx (sin x) = ?",
              answer: "cos x",
              acceptable: ["cos(x)", "cosx"],
              explanation: "The derivative of sin x is cos x.",
            },
            {
              id: "maa-l4-q6",
              type: "mcq",
              prompt: "The derivative of any constant is…",
              choices: ["0", "1", "the constant itself", "undefined"],
              answerIndex: 0,
              explanation: "Constants have zero rate of change.",
            },
          ],
        },
        {
          id: "maa-l5",
          title: "Chain rule & tangents",
          questions: [
            {
              id: "maa-l5-q1",
              type: "mcq",
              prompt: "d/dx (x² + 1)³ = ?",
              choices: [
                "6x(x² + 1)²",
                "3(x² + 1)²",
                "6x²(x² + 1)",
                "(x² + 1)²",
              ],
              answerIndex: 0,
              explanation:
                "Chain rule: 3(x²+1)² · 2x = 6x(x²+1)².",
            },
            {
              id: "maa-l5-q2",
              type: "mcq",
              prompt:
                "The gradient of the tangent to y = f(x) at x = a is…",
              choices: ["f′(a)", "f(a)", "f″(a)", "∫f(a)dx"],
              answerIndex: 0,
              explanation:
                "The derivative evaluated at the point gives the tangent's gradient.",
            },
            {
              id: "maa-l5-q3",
              type: "fill",
              prompt: "d/dx (e^x) = ?",
              answer: "e^x",
              acceptable: ["eˣ", "e^x"],
              explanation: "eˣ is its own derivative.",
            },
            {
              id: "maa-l5-q4",
              type: "mcq",
              prompt: "d/dx (ln x) = ?",
              choices: ["1/x", "eˣ", "ln x", "x"],
              answerIndex: 0,
              explanation: "d/dx ln x = 1/x for x > 0.",
            },
            {
              id: "maa-l5-q5",
              type: "fill",
              prompt:
                "Find the gradient of the tangent to y = x² at the point where x = 2.",
              answer: "4",
              explanation: "y′ = 2x; at x = 2 the gradient is 4.",
            },
            {
              id: "maa-l5-q6",
              type: "mcq",
              prompt: "By the product rule, d/dx [u·v] = ?",
              choices: [
                "u′v + uv′",
                "u′v′",
                "uv + u′v′",
                "u′v − uv′",
              ],
              answerIndex: 0,
              explanation: "Product rule: (uv)′ = u′v + uv′.",
            },
          ],
        },
        {
          id: "maa-l6",
          title: "Integration",
          questions: [
            {
              id: "maa-l6-q1",
              type: "mcq",
              prompt: "∫ 2x dx = ?",
              choices: ["x² + C", "2x² + C", "x²/2 + C", "2 + C"],
              answerIndex: 0,
              explanation: "Reverse the power rule: ∫2x dx = x² + C.",
            },
            {
              id: "maa-l6-q2",
              type: "mcq",
              prompt: "∫ x² dx = ?",
              choices: ["x³/3 + C", "2x + C", "x³ + C", "3x² + C"],
              answerIndex: 0,
              explanation: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C.",
            },
            {
              id: "maa-l6-q3",
              type: "fill",
              prompt: "Evaluate ∫₀² 2x dx.",
              answer: "4",
              explanation: "[x²]₀² = 4 − 0 = 4.",
            },
            {
              id: "maa-l6-q4",
              type: "mcq",
              prompt:
                "The area between y = f(x) and the x-axis from a to b (f ≥ 0) is…",
              choices: ["∫ₐᵇ f(x) dx", "f(b) − f(a)", "f′(a)", "d/dx ∫f"],
              answerIndex: 0,
              explanation:
                "Definite integral gives the signed area under the curve.",
            },
            {
              id: "maa-l6-q5",
              type: "fill",
              prompt: "∫ (1/x) dx = ? (x > 0)",
              answer: "ln x + C",
              acceptable: ["lnx + C", "ln|x| + C", "ln(x) + C", "ln x+c"],
              explanation: "The antiderivative of 1/x is ln|x| + C.",
            },
            {
              id: "maa-l6-q6",
              type: "mcq",
              prompt: "An antiderivative of cos x is…",
              choices: ["sin x + C", "−sin x + C", "cos x + C", "−cos x + C"],
              answerIndex: 0,
              explanation: "d/dx sin x = cos x, so ∫cos x dx = sin x + C.",
            },
          ],
        },
      ],
    },
  ],
};
