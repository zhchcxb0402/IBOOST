import type { Subject } from "../types";

export const physics: Subject = {
  slug: "physics",
  name: "Physics",
  short: "Physics",
  color: "#CE82FF",
  emoji: "⚛️",
  units: [
    {
      id: "phy-u1",
      title: "Mechanics",
      lessons: [
        {
          id: "phy-l1",
          title: "Motion & suvat",
          questions: [
            {
              id: "phy-l1-q1",
              type: "mcq",
              prompt: "Which suvat equation links v, u, a and t?",
              choices: [
                "v = u + at",
                "s = ut + ½at² only",
                "v² = u² + 2as",
                "s = vt",
              ],
              answerIndex: 0,
              explanation:
                "v = u + at is the definition of constant acceleration rearranged.",
            },
            {
              id: "phy-l1-q2",
              type: "fill",
              prompt:
                "A car accelerates from rest at 2 m/s² for 3 s. Find its final velocity in m/s.",
              answer: "6",
              acceptable: ["6 m/s", "6m/s"],
              explanation: "v = u + at = 0 + 2·3 = 6 m/s.",
            },
            {
              id: "phy-l1-q3",
              type: "mcq",
              prompt: "Displacement can be found from a velocity–time graph as…",
              choices: [
                "the area under the graph",
                "the gradient",
                "the y-intercept",
                "the maximum value",
              ],
              answerIndex: 0,
              explanation:
                "Area under a v–t graph = displacement; gradient = acceleration.",
            },
            {
              id: "phy-l1-q4",
              type: "mcq",
              prompt: "The SI unit of acceleration is…",
              choices: ["m/s²", "m/s", "m·s", "N/kg only"],
              answerIndex: 0,
              explanation:
                "Acceleration is change in velocity per second: m/s².",
            },
            {
              id: "phy-l1-q5",
              type: "fill",
              prompt:
                "Using v² = u² + 2as: u = 0, a = 4 m/s², s = 8 m. Find v in m/s.",
              answer: "8",
              acceptable: ["8 m/s"],
              explanation: "v² = 0 + 2·4·8 = 64 → v = 8 m/s.",
            },
            {
              id: "phy-l1-q6",
              type: "mcq",
              prompt:
                "A ball is thrown vertically upwards. At the top of its flight its acceleration is…",
              choices: [
                "g, directed downwards",
                "zero",
                "g, directed upwards",
                "half of g",
              ],
              answerIndex: 0,
              explanation:
                "Gravity acts throughout the flight — velocity is zero at the top, not acceleration.",
            },
          ],
        },
        {
          id: "phy-l2",
          title: "Forces & Newton's laws",
          questions: [
            {
              id: "phy-l2-q1",
              type: "mcq",
              prompt: "Newton's second law states…",
              choices: [
                "F = ma",
                "F = mv",
                "F = m/a",
                "F = ½mv²",
              ],
              answerIndex: 0,
              explanation:
                "Resultant force equals mass times acceleration.",
            },
            {
              id: "phy-l2-q2",
              type: "fill",
              prompt:
                "A 4 kg mass accelerates at 3 m/s². Find the resultant force in N.",
              answer: "12",
              acceptable: ["12 N", "12N"],
              explanation: "F = ma = 4 × 3 = 12 N.",
            },
            {
              id: "phy-l2-q3",
              type: "mcq",
              prompt:
                "Newton's third law: if body A pushes body B, then…",
              choices: [
                "B pushes A with an equal, opposite force",
                "B pushes A with a larger force",
                "the forces cancel out",
                "only A experiences a force",
              ],
              answerIndex: 0,
              explanation:
                "Action–reaction pairs are equal, opposite, and act on different bodies.",
            },
            {
              id: "phy-l2-q4",
              type: "fill",
              prompt:
                "Find the weight of a 2 kg mass where g = 9.81 N/kg, in N.",
              answer: "19.62",
              acceptable: ["19.6", "20", "19.62 N"],
              explanation: "W = mg = 2 × 9.81 = 19.62 N.",
            },
            {
              id: "phy-l2-q5",
              type: "mcq",
              prompt:
                "Newton's first law says a body continues at constant velocity unless…",
              choices: [
                "a resultant force acts on it",
                "its mass changes",
                "friction is absent",
                "it is in a vacuum",
              ],
              answerIndex: 0,
              explanation:
                "No resultant force → no change in motion (inertia).",
            },
            {
              id: "phy-l2-q6",
              type: "mcq",
              prompt: "Friction between two sliding surfaces…",
              choices: [
                "opposes relative motion",
                "always increases motion",
                "acts perpendicular to the surface",
                "is independent of the normal force",
              ],
              answerIndex: 0,
              explanation:
                "Friction acts parallel to the surface opposing relative motion.",
            },
          ],
        },
        {
          id: "phy-l3",
          title: "Energy & momentum",
          questions: [
            {
              id: "phy-l3-q1",
              type: "fill",
              prompt:
                "Find the kinetic energy of a 2 kg object moving at 3 m/s, in J.",
              answer: "9",
              acceptable: ["9 J", "9J"],
              explanation: "Ek = ½mv² = ½ × 2 × 9 = 9 J.",
            },
            {
              id: "phy-l3-q2",
              type: "mcq",
              prompt:
                "In a closed system with no external forces, total momentum…",
              choices: [
                "is conserved",
                "increases",
                "decreases",
                "becomes zero",
              ],
              answerIndex: 0,
              explanation: "Conservation of linear momentum.",
            },
            {
              id: "phy-l3-q3",
              type: "fill",
              prompt:
                "Find the momentum of a 0.5 kg ball moving at 10 m/s, in kg·m/s.",
              answer: "5",
              acceptable: ["5 kg m/s", "5 kgm/s"],
              explanation: "p = mv = 0.5 × 10 = 5 kg·m/s.",
            },
            {
              id: "phy-l3-q4",
              type: "mcq",
              prompt: "Work done by a force is…",
              choices: [
                "W = Fd cos θ",
                "W = F/d",
                "W = ma",
                "W = ½mv²",
              ],
              answerIndex: 0,
              explanation:
                "Work = force × displacement in the direction of the force.",
            },
            {
              id: "phy-l3-q5",
              type: "mcq",
              prompt: "Gravitational potential energy near Earth's surface is…",
              choices: ["mgh", "½mv²", "ma", "Fd"],
              answerIndex: 0,
              explanation: "Ep = mgΔh.",
            },
            {
              id: "phy-l3-q6",
              type: "fill",
              prompt:
                "A 60 W device runs for 10 s. Find the energy transferred in J.",
              answer: "600",
              acceptable: ["600 J"],
              explanation: "E = Pt = 60 × 10 = 600 J.",
            },
          ],
        },
      ],
    },
    {
      id: "phy-u2",
      title: "Waves",
      lessons: [
        {
          id: "phy-l4",
          title: "Wave properties",
          questions: [
            {
              id: "phy-l4-q1",
              type: "fill",
              prompt:
                "A wave has frequency 5 Hz and wavelength 2 m. Find its speed in m/s.",
              answer: "10",
              acceptable: ["10 m/s"],
              explanation: "v = fλ = 5 × 2 = 10 m/s.",
            },
            {
              id: "phy-l4-q2",
              type: "mcq",
              prompt: "In a transverse wave, oscillations are…",
              choices: [
                "perpendicular to energy transfer",
                "parallel to energy transfer",
                "circular only",
                "absent",
              ],
              answerIndex: 0,
              explanation:
                "Transverse: displacement ⊥ propagation (e.g. light, water ripples).",
            },
            {
              id: "phy-l4-q3",
              type: "mcq",
              prompt: "The amplitude of a wave is…",
              choices: [
                "maximum displacement from equilibrium",
                "the distance between crests",
                "cycles per second",
                "the wave speed",
              ],
              answerIndex: 0,
              explanation:
                "Amplitude measures the maximum displacement from rest position.",
            },
            {
              id: "phy-l4-q4",
              type: "fill",
              prompt: "Find the period of a wave with frequency 4 Hz, in s.",
              answer: "0.25",
              acceptable: ["0.25 s", "1/4"],
              explanation: "T = 1/f = 1/4 = 0.25 s.",
            },
            {
              id: "phy-l4-q5",
              type: "mcq",
              prompt: "Wavelength λ is…",
              choices: [
                "the distance between two consecutive points in phase",
                "the height of a crest",
                "the number of waves per second",
                "half the amplitude",
              ],
              answerIndex: 0,
              explanation:
                "e.g. crest-to-crest distance. Units: metres.",
            },
            {
              id: "phy-l4-q6",
              type: "mcq",
              prompt: "Which is a longitudinal wave?",
              choices: ["Sound", "Light", "Waves on a string", "Radio waves"],
              answerIndex: 0,
              explanation:
                "Sound oscillates parallel to the direction of travel.",
            },
          ],
        },
        {
          id: "phy-l5",
          title: "Sound & light",
          questions: [
            {
              id: "phy-l5-q1",
              type: "mcq",
              prompt: "Sound waves are…",
              choices: [
                "longitudinal and need a medium",
                "transverse and need a medium",
                "electromagnetic",
                "able to travel in a vacuum",
              ],
              answerIndex: 0,
              explanation:
                "Sound is a mechanical longitudinal wave — no medium, no sound.",
            },
            {
              id: "phy-l5-q2",
              type: "fill",
              prompt:
                "State the approximate speed of light in a vacuum, in m/s.",
              answer: "3×10^8",
              acceptable: [
                "3e8",
                "300000000",
                "3 x 10^8",
                "3*10^8",
                "3.0×10^8",
                "3.0e8",
              ],
              explanation: "c ≈ 3.0 × 10⁸ m/s.",
            },
            {
              id: "phy-l5-q3",
              type: "mcq",
              prompt: "Refraction occurs because…",
              choices: [
                "the wave speed changes between media",
                "frequency changes at the boundary",
                "waves bounce off the surface",
                "amplitude doubles",
              ],
              answerIndex: 0,
              explanation:
                "A change in speed bends the wavefront; frequency stays constant.",
            },
            {
              id: "phy-l5-q4",
              type: "mcq",
              prompt: "Diffraction is most noticeable when the gap is…",
              choices: [
                "comparable to the wavelength",
                "much larger than the wavelength",
                "much smaller than the amplitude",
                "closed",
              ],
              answerIndex: 0,
              explanation:
                "Maximum spreading occurs when aperture ≈ λ.",
            },
            {
              id: "phy-l5-q5",
              type: "fill",
              prompt:
                "A sound wave has wavelength 0.68 m and speed 340 m/s. Find its frequency in Hz.",
              answer: "500",
              acceptable: ["500 Hz"],
              explanation: "f = v/λ = 340/0.68 = 500 Hz.",
            },
            {
              id: "phy-l5-q6",
              type: "mcq",
              prompt:
                "Which has the longest wavelength in the EM spectrum?",
              choices: ["Radio waves", "X-rays", "Visible light", "Gamma rays"],
              answerIndex: 0,
              explanation:
                "Radio waves have the lowest frequency and longest wavelength.",
            },
          ],
        },
        {
          id: "phy-l6",
          title: "SHM & standing waves",
          questions: [
            {
              id: "phy-l6-q1",
              type: "mcq",
              prompt: "The period of a simple pendulum is…",
              choices: [
                "T = 2π√(l/g)",
                "T = 2π√(g/l)",
                "T = √(l/g)",
                "T = 2πl/g",
              ],
              answerIndex: 0,
              explanation:
                "For small oscillations, T = 2π√(l/g).",
            },
            {
              id: "phy-l6-q2",
              type: "mcq",
              prompt: "In SHM, acceleration is proportional to…",
              choices: [
                "−displacement",
                "displacement",
                "velocity",
                "time",
              ],
              answerIndex: 0,
              explanation:
                "a = −ω²x — directed towards equilibrium.",
            },
            {
              id: "phy-l6-q3",
              type: "fill",
              prompt:
                "A mass on a spring oscillates at 2 Hz. Find its angular frequency ω in rad/s (use π ≈ 3.14).",
              answer: "12.56",
              acceptable: ["4π", "12.6", "12.57", "12.56 rad/s"],
              explanation: "ω = 2πf = 2 × 3.14 × 2 = 12.56 rad/s.",
            },
            {
              id: "phy-l6-q4",
              type: "mcq",
              prompt: "A node on a standing wave is a point of…",
              choices: [
                "zero displacement",
                "maximum displacement",
                "maximum energy",
                "maximum amplitude",
              ],
              answerIndex: 0,
              explanation:
                "Nodes never move; antinodes oscillate with maximum amplitude.",
            },
            {
              id: "phy-l6-q5",
              type: "mcq",
              prompt: "Resonance occurs when…",
              choices: [
                "driving frequency equals the natural frequency",
                "damping is maximum",
                "amplitude is zero",
                "two waves cancel",
              ],
              answerIndex: 0,
              explanation:
                "At the natural frequency, energy transfer is maximal → large amplitude.",
            },
            {
              id: "phy-l6-q6",
              type: "fill",
              prompt:
                "A string's fundamental frequency is 100 Hz. Find the frequency of the second harmonic in Hz.",
              answer: "200",
              acceptable: ["200 Hz"],
              explanation: "Harmonics are integer multiples: 2 × 100 = 200 Hz.",
            },
          ],
        },
      ],
    },
  ],
};
