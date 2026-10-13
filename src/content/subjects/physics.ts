import type { Subject } from "../types";

export const physics: Subject = {
  slug: "physics",
  name: "Physics",
  short: "Physics",
  color: "#CE82FF",
  emoji: "⚛️",
  group: "Sciences",
  levels: ["SL", "HL"],
  description:
    "Space, time & motion; the particulate nature of matter; wave behaviour; fields; nuclear & quantum physics.",
  syllabusUrl: "https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/",
  units: [
    {
      id: "ph-u1",
      code: "Topic A",
      title: "Space, time and motion",
      lessons: [
        {
          id: "ph-l1",
          title: "Kinematics",
          questions: [
            {
              id: "ph-l1-q1",
              type: "mcq",
              prompt:
                "A ball is thrown straight up and returns to the thrower's hand. Ignoring air resistance, its acceleration at the top of the path is",
              choices: [
                "zero",
                "g, directed downward",
                "g, directed upward",
                "maximum at the top",
              ],
              answerIndex: 1,
              explanation:
                "Gravity acts downward throughout the flight, including at the top where velocity is momentarily zero.",
            },
            {
              id: "ph-l1-q2",
              type: "mcq",
              prompt:
                "The gradient of a velocity–time graph gives",
              choices: [
                "displacement",
                "speed",
                "acceleration",
                "distance travelled",
              ],
              answerIndex: 2,
              explanation:
                "Gradient = Δv/Δt = acceleration. The area under the graph gives displacement.",
            },
            {
              id: "ph-l1-q3",
              type: "mcq",
              prompt:
                "A car accelerates uniformly from rest at 2.0 m/s² for 5.0 s. How far does it travel?",
              choices: ["10 m", "50 m", "25 m", "5.0 m"],
              answerIndex: 2,
              explanation:
                "s = ½at² = ½ × 2.0 × 25 = 25 m.",
            },
            {
              id: "ph-l1-q4",
              type: "tf",
              prompt:
                "In projectile motion the horizontal component of velocity changes continuously because of gravity.",
              answer: false,
              explanation:
                "Gravity acts vertically; with no air resistance the horizontal velocity stays constant.",
            },
            {
              id: "ph-l1-q5",
              type: "short",
              prompt:
                "A stone is dropped from rest and falls 45 m. Estimate its speed just before it lands (g ≈ 10 m/s²).",
              answer: "30 m/s",
              acceptable: ["30"],
              keywords: ["30"],
              hint: "SUVAT with u = 0: v² = u² + 2as.",
              explanation:
                "v² = u² + 2gs = 2 × 10 × 45 = 900, so v = 30 m/s.",
            },
            {
              id: "ph-l1-q6",
              type: "short",
              prompt:
                "Explain why a velocity–time graph of a bouncing ball shows a vertical line at each bounce.",
              answer:
                "Velocity changes direction almost instantaneously on impact, so the jump is nearly vertical.",
              keywords: ["direction", "instant", "impact", "bounce", "sudden"],
              hint: "On a v–t graph, what does the velocity do in the ~0 s the ball spends in contact with the ground?",
              explanation:
                "The collision reverses velocity in a very short time, so Δv/Δt is huge and the graph looks vertical.",
            },
          ],
        },
        {
          id: "ph-l2",
          title: "Forces and momentum",
          questions: [
            {
              id: "ph-l2-q1",
              type: "mcq",
              prompt:
                "Newton's third law pair for 'Earth pulls the satellite toward it' is",
              choices: [
                "the satellite's weight balancing air drag",
                "the normal force on the satellite",
                "the centrifugal force on the satellite",
                "the satellite pulling Earth toward it",
              ],
              answerIndex: 3,
              explanation:
                "Third-law pairs act on different bodies: Earth pulls the satellite, the satellite pulls Earth.",
            },
            {
              id: "ph-l2-q2",
              type: "mcq",
              prompt:
                "Impulse equals",
              choices: [
                "force × time, which equals change in momentum",
                "mass × velocity",
                "force ÷ time",
                "kinetic energy",
              ],
              answerIndex: 0,
              explanation:
                "Impulse J = FΔt = Δp. It is the area under a force–time graph.",
            },
            {
              id: "ph-l2-q3",
              type: "mcq",
              prompt:
                "Two trolleys collide and stick together. Which quantity is always conserved?",
              choices: [
                "kinetic energy",
                "total momentum",
                "velocity",
                "total energy of the trolleys alone",
              ],
              answerIndex: 1,
              explanation:
                "Momentum is conserved in all collisions; kinetic energy is only conserved in elastic ones.",
            },
            {
              id: "ph-l2-q4",
              type: "tf",
              prompt:
                "Doubling a moving object's speed doubles its momentum but quadruples its kinetic energy.",
              answer: true,
              explanation:
                "p = mv is linear in v; KE = ½mv² is quadratic.",
            },
            {
              id: "ph-l2-q5",
              type: "short",
              prompt:
                "A 0.5 kg trolley at 4 m/s hits a stationary 1.5 kg trolley and they stick together. Find their common speed.",
              answer: "1 m/s",
              acceptable: ["1.0 m/s"],
              keywords: ["1"],
              hint: "Conserve momentum: total p before = total p after, shared mass.",
              explanation:
                "p = 0.5 × 4 = 2 kg m/s; v = 2 / (0.5 + 1.5) = 1 m/s.",
            },
            {
              id: "ph-l2-q6",
              type: "short",
              prompt:
                "Explain why crumple zones reduce injury in a collision, using the impulse-momentum relationship.",
              answer:
                "They extend the collision time, so for the same momentum change the average force is smaller.",
              keywords: ["time", "force", "momentum", "impulse", "longer"],
              hint: "The crash fixes Δp — which other factor in F = Δp/Δt can car engineers enlarge?",
              explanation:
                "F = Δp/Δt: increasing Δt for fixed Δp lowers F on passengers.",
            },
          ],
        },
        {
          id: "ph-l3",
          title: "Rigid body mechanics",
          level: "HL",
          questions: [
            {
              id: "ph-l3-q1",
              type: "mcq",
              prompt:
                "The rotational analogue of mass is",
              choices: [
                "torque",
                "angular momentum",
                "angular velocity",
                "moment of inertia",
              ],
              answerIndex: 3,
              explanation:
                "I plays the role of mass in rotational dynamics: τ = Iα.",
            },
            {
              id: "ph-l3-q2",
              type: "mcq",
              prompt:
                "A torque of 10 N·m acts about a pivot 0.5 m from where a force is applied. The force is",
              choices: ["20 N", "5 N", "10 N", "0.05 N"],
              answerIndex: 0,
              explanation: "τ = Fr → F = 10 / 0.5 = 20 N.",
            },
            {
              id: "ph-l3-q3",
              type: "mcq",
              prompt:
                "A spinning skater pulls her arms in. Her angular velocity increases because",
              choices: [
                "her angular momentum increases",
                "her moment of inertia decreases while angular momentum is conserved",
                "torque from the ice spins her faster",
                "her kinetic energy is conserved",
              ],
              answerIndex: 1,
              explanation:
                "L = Iω is conserved; lowering I raises ω. Rotational KE actually increases (she does work).",
            },
            {
              id: "ph-l3-q4",
              type: "tf",
              prompt:
                "For a body in translational equilibrium, the net torque about every point must be zero.",
              answer: true,
              explanation:
                "Static equilibrium requires both ΣF = 0 and Στ = 0 about any axis.",
            },
            {
              id: "ph-l3-q5",
              type: "short",
              prompt:
                "State the condition(s) for a rigid body to be in static equilibrium.",
              answer:
                "Net force zero and net torque zero about any point.",
              keywords: ["force", "torque", "zero"],
              hint: "Two conditions: one about forces, one about turning.",
              explanation:
                "ΣF = 0 prevents translation; Στ = 0 prevents rotation.",
            },
            {
              id: "ph-l3-q6",
              type: "short",
              prompt:
                "A 2 m uniform plank of weight 100 N is pivoted at one end. What torque does its weight produce about the pivot?",
              answer: "100 N·m",
              acceptable: ["100 N m", "100"],
              keywords: ["100"],
              hint: "τ = Fd — the weight acts at the plank's centre of gravity.",
              explanation:
                "Weight acts at the centre of mass, 1 m from the pivot: τ = 100 × 1 = 100 N·m.",
            },
          ],
        },
        {
          id: "ph-l12",
          title: "Projectile motion calculations",
          questions: [
            {
              id: "ph-l12-q1",
              type: "mcq",
              prompt:
                "In projectile motion (no air resistance), the horizontal velocity",
              choices: [
                "increases",
                "decreases",
                "stays constant",
                "is zero",
              ],
              answerIndex: 2,
              explanation:
                "No horizontal force → constant horizontal velocity; only the vertical component changes.",
            },
            {
              id: "ph-l12-q2",
              type: "mcq",
              prompt:
                "The time of flight of a projectile depends primarily on its",
              choices: [
                "mass",
                "horizontal velocity",
                "vertical velocity component",
                "shape",
              ],
              answerIndex: 2,
              explanation:
                "Flight time is set by vertical motion: t = 2u_y/g for level launch.",
            },
            {
              id: "ph-l12-q3",
              type: "tf",
              prompt:
                "At the highest point of a projectile's path, its vertical velocity is zero.",
              answer: true,
              explanation:
                "Vertical velocity is momentarily zero at the apex; horizontal velocity continues.",
            },
            {
              id: "ph-l12-q4",
              type: "mcq",
              prompt:
                "Maximum range on level ground occurs at launch angle",
              choices: ["30°", "45°", "60°", "90°"],
              answerIndex: 1,
              explanation:
                "R = v²sin2θ/g peaks when sin2θ = 1 → θ = 45°.",
            },
            {
              id: "ph-l12-q5",
              type: "short",
              prompt:
                "A ball is thrown horizontally at 10 m/s from a 20 m cliff (g = 10 m/s²). Give the horizontal range in metres.",
              answer: "20",
              keywords: ["20"],
              hint: "Time of flight comes from the vertical fall; horizontal speed stays 10.",
              acceptable: ["20 m"],
              explanation:
                "Fall time t = √(2×20/10) = 2 s; range = 10 × 2 = 20 m.",
            },
            {
              id: "ph-l12-q6",
              type: "short",
              prompt:
                "A ball is launched straight up at 20 m/s (g = 10). Give the maximum height in metres.",
              answer: "20",
              keywords: ["20"],
              hint: "v² = u² − 2gh at the top where v = 0.",
              acceptable: ["20 m"],
              explanation: "h = v²/2g = 400/20 = 20 m.",
            },
          ],
        },
        {
          id: "ph-l13",
          title: "Work, energy, power and circular motion",
          questions: [
            {
              id: "ph-l13-q1",
              type: "mcq",
              prompt: "The work done by a force is",
              choices: [
                "W = Fd cos θ",
                "W = F/d",
                "W = Fd sin θ always",
                "W = F + d",
              ],
              answerIndex: 0,
              explanation:
                "Only the force component along the displacement does work.",
            },
            {
              id: "ph-l13-q2",
              type: "mcq",
              prompt:
                "In uniform circular motion, the centripetal acceleration points",
              choices: [
                "tangent to the circle",
                "away from the centre",
                "towards the centre",
                "downwards",
              ],
              answerIndex: 2,
              explanation:
                "a = v²/r directed inward — it changes direction, not speed.",
            },
            {
              id: "ph-l13-q3",
              type: "tf",
              prompt:
                "The work–energy theorem states that net work equals the change in kinetic energy.",
              answer: true,
              explanation: "W_net = ΔE_k.",
            },
            {
              id: "ph-l13-q4",
              type: "mcq",
              prompt: "Power is defined as",
              choices: [
                "work × time",
                "work per unit time",
                "force × distance",
                "energy × speed",
              ],
              answerIndex: 1,
              explanation: "P = W/t (also = Fv).",
            },
            {
              id: "ph-l13-q5",
              type: "short",
              prompt:
                "A 2 kg mass is raised 5 m (g = 9.8). Give the gain in potential energy in joules.",
              answer: "98",
              keywords: ["98"],
              hint: "Ep = mgh.",
              acceptable: ["98 J", "100", "100 J"],
              explanation:
                "E_p = mgh = 2 × 9.8 × 5 = 98 J (≈100 J if g = 10).",
            },
            {
              id: "ph-l13-q6",
              type: "short",
              prompt:
                "A mass moves in a circle at v = 4 m/s with r = 2 m. Give the centripetal acceleration in m/s².",
              answer: "8",
              keywords: ["8"],
              hint: "a = v²/r.",
              acceptable: ["8 m/s²", "8 m/s^2"],
              explanation: "a = v²/r = 16/2 = 8 m/s².",
            },
          ],
        },
      ],
    },
    {
      id: "ph-u2",
      code: "Topic B",
      title: "The particulate nature of matter",
      lessons: [
        {
          id: "ph-l4",
          title: "Thermal energy and ideal gases",
          questions: [
            {
              id: "ph-l4-q1",
              type: "mcq",
              prompt:
                "Absolute zero in kelvin corresponds to",
              choices: [
                "0 °C",
                "−273 °C",
                "−100 °C",
                "273 °C",
              ],
              answerIndex: 1,
              explanation: "0 K ≈ −273.15 °C, where particle kinetic energy is minimal.",
            },
            {
              id: "ph-l4-q2",
              type: "mcq",
              prompt:
                "In the ideal gas model, temperature is proportional to",
              choices: [
                "average potential energy of molecules",
                "total mass of gas",
                "average kinetic energy of molecules",
                "intermolecular force",
              ],
              answerIndex: 2,
              explanation:
                "T ∝ average translational KE; that's why heating speeds molecules up.",
            },
            {
              id: "ph-l4-q3",
              type: "mcq",
              prompt:
                "A gas is compressed at constant temperature. Its pressure rises because",
              choices: [
                "molecules move faster",
                "collisions with walls become more frequent",
                "each collision is harder",
                "molecules get larger",
              ],
              answerIndex: 1,
              explanation:
                "Boyle's law: smaller volume → more wall collisions per second → higher pressure.",
            },
            {
              id: "ph-l4-q4",
              type: "tf",
              prompt:
                "During a phase change at constant pressure, added heat increases the average kinetic energy of the particles.",
              answer: false,
              explanation:
                "During melting/boiling temperature stays fixed; the energy increases potential (bond) energy instead.",
            },
            {
              id: "ph-l4-q5",
              type: "short",
              prompt:
                "0.5 kg of water (c = 4200 J/kg·°C) is heated from 20 °C to 80 °C. Calculate the energy transferred.",
              answer: "126000 J",
              acceptable: ["126 kJ", "1.26e5 J", "126,000 J"],
              keywords: ["126", "000", "kj"],
              hint: "Q = mcΔT — watch the ΔT calculation.",
              explanation:
                "Q = mcΔT = 0.5 × 4200 × 60 = 126,000 J.",
            },
            {
              id: "ph-l4-q6",
              type: "short",
              prompt:
                "Explain the difference between specific heat capacity and specific latent heat.",
              answer:
                "Specific heat raises temperature; latent heat changes state at constant temperature.",
              keywords: ["temperature", "state", "phase", "change"],
              hint: "One quantity is priced per degree, the other per kilogram during melting or boiling.",
              explanation:
                "c: energy per kg per °C. L: energy per kg for a phase change with no ΔT.",
            },
          ],
        },
        {
          id: "ph-l5",
          title: "Thermodynamics and the gas laws",
          level: "HL",
          questions: [
            {
              id: "ph-l5-q1",
              type: "mcq",
              prompt: "An adiabatic process is one in which",
              choices: [
                "temperature is constant",
                "no heat is exchanged with the surroundings",
                "pressure is constant",
                "volume is constant",
              ],
              answerIndex: 1,
              explanation:
                "Q = 0; work done still changes internal energy, so T can change.",
            },
            {
              id: "ph-l5-q2",
              type: "mcq",
              prompt:
                "The first law of thermodynamics states ΔU equals",
              choices: [
                "Q − W",
                "Q + W",
                "W − Q",
                "Q × W",
              ],
              answerIndex: 1,
              explanation:
                "ΔU = Q + W with W = work done ON the gas (IB convention).",
            },
            {
              id: "ph-l5-q3",
              type: "mcq",
              prompt:
                "The maximum possible efficiency of a heat engine between 400 K and 300 K is",
              choices: ["75%", "33%", "25%", "50%"],
              answerIndex: 2,
              explanation:
                "η = 1 − Tc/Th = 1 − 300/400 = 0.25 = 25%.",
            },
            {
              id: "ph-l5-q4",
              type: "tf",
              prompt:
                "In an isothermal expansion of an ideal gas, all the heat absorbed is converted to work done by the gas.",
              answer: true,
              explanation:
                "ΔT = 0 → ΔU = 0 → W = Q (magnitude).",
            },
            {
              id: "ph-l5-q5",
              type: "short",
              prompt:
                "A gas absorbs 500 J of heat and does 200 J of work on its surroundings. Find the change in its internal energy.",
              answer: "300 J",
              acceptable: ["+300 J", "300"],
              keywords: ["300"],
              hint: "First law: ΔQ = ΔU + W — check the sign convention for work done BY the gas.",
              explanation:
                "ΔU = Q + W = 500 + (−200) = 300 J (work done BY gas is negative).",
            },
            {
              id: "ph-l5-q6",
              type: "short",
              prompt:
                "State what a p–V diagram's enclosed loop area represents for a cyclic engine.",
              answer:
                "The net work done by the gas per cycle.",
              keywords: ["work", "cycle", "area", "net"],
              hint: "Area under a p–V curve is work; what does a closed loop net out to?",
              explanation:
                "Area inside the loop = net work output per cycle of the engine.",
            },
          ],
        },
        {
          id: "ph-l14",
          title: "Specific and latent heat calculations",
          questions: [
            {
              id: "ph-l14-q1",
              type: "mcq",
              prompt: "The heat needed to warm a substance is",
              choices: [
                "Q = mcΔT",
                "Q = m/c",
                "Q = cT²",
                "Q = mT",
              ],
              answerIndex: 0,
              explanation: "Q = mcΔT.",
            },
            {
              id: "ph-l14-q2",
              type: "mcq",
              prompt:
                "During a phase change, adding latent heat changes the substance's",
              choices: [
                "temperature",
                "internal energy without changing temperature",
                "mass",
                "volume only",
              ],
              answerIndex: 1,
              explanation:
                "Latent heat breaks/reforms bonds — temperature stays constant.",
            },
            {
              id: "ph-l14-q3",
              type: "tf",
              prompt:
                "Specific heat capacity has units J kg⁻¹ K⁻¹.",
              answer: true,
              explanation:
                "Energy per kilogram per kelvin.",
            },
            {
              id: "ph-l14-q4",
              type: "mcq",
              prompt:
                "Equal heat is added to equal masses of water (c = 4200) and sand (c ≈ 800). Which warms more?",
              choices: [
                "water",
                "sand",
                "they warm equally",
                "neither",
              ],
              answerIndex: 1,
              explanation:
                "Smaller c → bigger ΔT for the same Q and m.",
            },
            {
              id: "ph-l14-q5",
              type: "short",
              prompt:
                "Heat needed to warm 0.5 kg of water by 20°C (c = 4200 J/kg·K). Give Q in joules.",
              answer: "42000",
              keywords: ["42000"],
              hint: "Q = mcΔT.",
              acceptable: ["42,000", "42 kJ", "42000 J"],
              explanation: "Q = 0.5 × 4200 × 20 = 42,000 J.",
            },
            {
              id: "ph-l14-q6",
              type: "short",
              prompt:
                "Energy to melt 0.1 kg of ice at 0°C (L_f = 334,000 J/kg). Give Q in joules.",
              answer: "33400",
              keywords: ["33400", "33.4"],
              hint: "Q = mL — temperature doesn't change during a phase change.",
              acceptable: ["33,400", "33.4 kJ", "33400 J"],
              explanation: "Q = mL = 0.1 × 334,000 = 33,400 J.",
            },
          ],
        },
        {
          id: "ph-l15",
          title: "Gas laws calculations",
          questions: [
            {
              id: "ph-l15-q1",
              type: "mcq",
              prompt: "Boyle's law states that at constant temperature",
              choices: [
                "pV = constant",
                "p/T = constant",
                "V/T = constant",
                "pV/T = 0",
              ],
              answerIndex: 0,
              explanation: "Isothermal: p₁V₁ = p₂V₂.",
            },
            {
              id: "ph-l15-q2",
              type: "mcq",
              prompt:
                "For a fixed volume of gas, p/T is constant provided T is measured in",
              choices: ["°C", "kelvin", "°F", "any unit"],
              answerIndex: 1,
              explanation:
                "Gas laws require absolute temperature (kelvin).",
            },
            {
              id: "ph-l15-q3",
              type: "tf",
              prompt:
                "The ideal gas law is pV = nRT.",
              answer: true,
              explanation:
                "n = moles, R = 8.31 J mol⁻¹ K⁻¹, T in kelvin.",
            },
            {
              id: "ph-l15-q4",
              type: "mcq",
              prompt:
                "A gas at constant volume is heated. Its pressure",
              choices: [
                "decreases",
                "stays the same",
                "increases proportionally with absolute temperature",
                "becomes zero",
              ],
              answerIndex: 2,
              explanation: "p ∝ T (kelvin) at constant V.",
            },
            {
              id: "ph-l15-q5",
              type: "short",
              prompt:
                "2 L of gas at constant temperature is compressed from 100 kPa to 200 kPa. Give the new volume in litres.",
              answer: "1",
              keywords: ["1"],
              hint: "Constant temperature → Boyle's law: p₁V₁ = p₂V₂.",
              acceptable: ["1 L"],
              explanation: "V₂ = p₁V₁/p₂ = 100×2/200 = 1 L.",
            },
            {
              id: "ph-l15-q6",
              type: "short",
              prompt:
                "A sealed gas at 300 K and 100 kPa is heated to 600 K. Give the new pressure in kPa.",
              answer: "200",
              keywords: ["200"],
              hint: "Constant volume → p/T is constant; kelvin are already given.",
              acceptable: ["200 kPa"],
              explanation: "p₂ = p₁T₂/T₁ = 100 × 2 = 200 kPa.",
            },
          ],
        },
        {
          id: "ph-l16",
          title: "Kinetic theory and thermal exam practice",
          questions: [
            {
              id: "ph-l16-q1",
              type: "mcq",
              prompt:
                "In kinetic theory, the average kinetic energy of molecules is proportional to",
              choices: [
                "pressure",
                "volume",
                "absolute temperature",
                "density",
              ],
              answerIndex: 2,
              explanation:
                "Temperature IS a measure of average molecular KE.",
            },
            {
              id: "ph-l16-q2",
              type: "mcq",
              prompt: "Absolute zero is approximately",
              choices: ["0°C", "−273°C", "−100°C", "273 K"],
              answerIndex: 1,
              explanation: "0 K = −273.15°C.",
            },
            {
              id: "ph-l16-q3",
              type: "tf",
              prompt:
                "Internal energy is the sum of the kinetic and potential energies of a substance's molecules.",
              answer: true,
              explanation:
                "Both molecular motion (KE) and intermolecular bonds (PE) count.",
            },
            {
              id: "ph-l16-q4",
              type: "mcq",
              prompt: "Evaporation cools a liquid because",
              choices: [
                "slow molecules escape",
                "the fastest molecules escape, lowering the average KE",
                "heat is created",
                "pressure increases",
              ],
              answerIndex: 1,
              explanation:
                "Losing the most energetic molecules drops the average — cooling.",
            },
            {
              id: "ph-l16-q5",
              type: "short",
              prompt: "Convert 27°C to kelvin.",
              answer: "300",
              keywords: ["300"],
              hint: "T/K = θ/°C + 273.",
              acceptable: ["300 K"],
              explanation: "T = 27 + 273 = 300 K.",
            },
            {
              id: "ph-l16-q6",
              type: "short",
              prompt:
                "Heat needed to raise 0.2 kg of water by 10°C (c = 4200). Give Q in joules.",
              answer: "8400",
              keywords: ["8400"],
              hint: "Q = mcΔT with m = 0.2, ΔT = 10.",
              acceptable: ["8,400", "8.4 kJ"],
              explanation: "Q = 0.2 × 4200 × 10 = 8,400 J.",
            },
          ],
        },
      ],
    },
    {
      id: "ph-u3",
      code: "Topic C",
      title: "Wave behaviour",
      lessons: [
        {
          id: "ph-l6",
          title: "Travelling waves and simple harmonic motion",
          questions: [
            {
              id: "ph-l6-q1",
              type: "mcq",
              prompt:
                "In simple harmonic motion, acceleration is",
              choices: [
                "constant",
                "proportional to displacement and directed toward equilibrium",
                "maximum at equilibrium",
                "in phase with displacement",
              ],
              answerIndex: 1,
              explanation:
                "a = −ω²x: proportional to displacement, opposite direction.",
            },
            {
              id: "ph-l6-q2",
              type: "mcq",
              prompt:
                "Two sources are coherent when they have",
              choices: [
                "the same amplitude",
                "a constant phase relationship",
                "the same wavelength only",
                "the same speed",
              ],
              answerIndex: 1,
              explanation:
                "Coherence = fixed phase difference, needed for stable interference.",
            },
            {
              id: "ph-l6-q3",
              type: "mcq",
              prompt:
                "A wave has frequency 5 Hz and wavelength 2 m. Its speed is",
              choices: ["0.4 m/s", "2.5 m/s", "10 m/s", "7 m/s"],
              answerIndex: 2,
              explanation: "v = fλ = 5 × 2 = 10 m/s.",
            },
            {
              id: "ph-l6-q4",
              type: "tf",
              prompt:
                "In a transverse wave, particle oscillations are parallel to the direction of energy transfer.",
              answer: false,
              explanation:
                "Transverse oscillations are perpendicular to propagation; longitudinal are parallel.",
            },
            {
              id: "ph-l6-q5",
              type: "short",
              prompt:
                "Give two examples of standing (stationary) wave systems.",
              answer:
                "Strings fixed at both ends, and air columns in pipes.",
              keywords: ["string", "pipe", "column", "guitar", "organ"],
              hint: "Think instruments: strings and pipes.",
              explanation:
                "Any medium with boundaries that reflect waves — e.g. guitar strings, organ pipes.",
            },
            {
              id: "ph-l6-q6",
              type: "short",
              prompt:
                "A pendulum has period 2.0 s. What is its frequency?",
              answer: "0.5 Hz",
              acceptable: ["0.5"],
              keywords: ["0.5"],
              hint: "f = 1/T.",
              explanation: "f = 1/T = 1/2.0 = 0.5 Hz.",
            },
          ],
        },
        {
          id: "ph-l7",
          title: "Wave phenomena: reflection to Doppler",
          questions: [
            {
              id: "ph-l7-q1",
              type: "mcq",
              prompt:
                "Refraction occurs because a wave's",
              choices: [
                "frequency changes at a boundary",
                "speed changes between media",
                "amplitude doubles",
                "wavelength stays fixed",
              ],
              answerIndex: 1,
              explanation:
                "Speed change bends the wavefront; frequency stays constant.",
            },
            {
              id: "ph-l7-q2",
              type: "mcq",
              prompt:
                "Diffraction is most noticeable when the gap is",
              choices: [
                "much larger than the wavelength",
                "about the same size as the wavelength",
                "exactly twice the wavelength",
                "made of a dense material",
              ],
              answerIndex: 1,
              explanation:
                "Maximum spreading occurs when aperture ≈ λ.",
            },
            {
              id: "ph-l7-q3",
              type: "mcq",
              prompt:
                "An ambulance approaches then passes you. The Doppler shift means",
              choices: [
                "pitch rises as it approaches and drops as it recedes",
                "pitch is constant but loudness changes",
                "the source frequency changes",
                "sound slows down as it passes",
              ],
              answerIndex: 0,
              explanation:
                "Approach → shorter observed wavelength → higher f; receding → lower f.",
            },
            {
              id: "ph-l7-q4",
              type: "tf",
              prompt:
                "Two-slit interference requires the slits to emit waves that are out of phase by exactly half a wavelength.",
              answer: false,
              explanation:
                "The slits must be coherent (fixed phase relationship), usually in phase; the path difference produces the fringes.",
            },
            {
              id: "ph-l7-q5",
              type: "short",
              prompt:
                "State the condition for constructive interference between two coherent waves at a point.",
              answer:
                "Path difference is a whole number of wavelengths.",
              keywords: ["path", "difference", "wavelength", "integer", "phase"],
              hint: "Express it as a path difference in terms of λ.",
              explanation:
                "Δd = nλ (phase difference = 2πn) gives constructive interference.",
            },
            {
              id: "ph-l7-q6",
              type: "short",
              prompt:
                "A car horn at 400 Hz approaches a stationary observer at 30 m/s (v_sound = 340 m/s). Estimate the observed frequency.",
              answer: "439 Hz",
              acceptable: ["440 Hz", "439", "≈440"],
              keywords: ["43", "44"],
              hint: "Moving source approaching: f′ = f·v/(v − us).",
              explanation:
                "f′ = f × v/(v − vs) = 400 × 340/310 ≈ 439 Hz.",
            },
          ],
        },
        {
          id: "ph-l17",
          title: "Standing waves and the Doppler effect",
          questions: [
            {
              id: "ph-l17-q1",
              type: "mcq",
              prompt: "A node on a standing wave is a point of",
              choices: [
                "maximum amplitude",
                "zero displacement",
                "maximum energy",
                "varying phase",
              ],
              answerIndex: 1,
              explanation:
                "Nodes never move; antinodes oscillate maximally.",
            },
            {
              id: "ph-l17-q2",
              type: "mcq",
              prompt:
                "An observer hears a HIGHER frequency than emitted when the source is",
              choices: [
                "stationary",
                "moving away",
                "approaching",
                "oscillating",
              ],
              answerIndex: 2,
              explanation:
                "Doppler effect: waves bunch up ahead of an approaching source → higher f.",
            },
            {
              id: "ph-l17-q3",
              type: "tf",
              prompt:
                "A standing wave transfers no net energy along the medium.",
              answer: true,
              explanation:
                "Two equal opposite travelling waves — energy is stored, not transported.",
            },
            {
              id: "ph-l17-q4",
              type: "mcq",
              prompt:
                "For a string fixed at both ends, the fundamental wavelength is",
              choices: ["λ = L", "λ = 2L", "λ = L/2", "λ = 4L"],
              answerIndex: 1,
              explanation:
                "Fundamental = half a wavelength on length L → λ = 2L.",
            },
            {
              id: "ph-l17-q5",
              type: "short",
              prompt:
                "A string fixed at both ends is 0.5 m long. Give its fundamental wavelength in metres.",
              answer: "1",
              keywords: ["1"],
              hint: "Fundamental: the string is half a wavelength long.",
              acceptable: ["1 m"],
              explanation: "λ = 2L = 1 m.",
            },
            {
              id: "ph-l17-q6",
              type: "short",
              prompt:
                "A 500 Hz source approaches at half the wave speed. Give the observed frequency in Hz (f′ = f·v/(v − v_s)).",
              answer: "1000",
              keywords: ["1000"],
              hint: "f′ = f·v/(v − us) with us = v/2.",
              acceptable: ["1000 Hz"],
              explanation:
                "f′ = 500·v/(v − 0.5v) = 500/0.5 = 1000 Hz.",
            },
          ],
        },
        {
          id: "ph-l18",
          title: "Diffraction, interference and the double slit",
          questions: [
            {
              id: "ph-l18-q1",
              type: "mcq",
              prompt:
                "Double-slit fringe spacing is given by",
              choices: [
                "Δy = λd/D",
                "Δy = λD/d",
                "Δy = dD/λ",
                "Δy = λ/(Dd)",
              ],
              answerIndex: 1,
              explanation:
                "Δy = λD/d — bigger screen distance or smaller slit gap → wider fringes.",
            },
            {
              id: "ph-l18-q2",
              type: "mcq",
              prompt:
                "Diffraction is most noticeable when the gap size is",
              choices: [
                "much larger than λ",
                "comparable to λ",
                "zero",
                "irrelevant",
              ],
              answerIndex: 1,
              explanation:
                "Significant spreading occurs when aperture ≈ wavelength.",
            },
            {
              id: "ph-l18-q3",
              type: "tf",
              prompt:
                "Constructive interference occurs when the path difference is a whole number of wavelengths.",
              answer: true,
              explanation:
                "Δ = nλ → in phase; Δ = (n + ½)λ → destructive.",
            },
            {
              id: "ph-l18-q4",
              type: "mcq",
              prompt: "Coherent sources have",
              choices: [
                "the same amplitude",
                "a constant phase relationship",
                "different frequencies",
                "random phases",
              ],
              answerIndex: 1,
              explanation:
                "Stable interference needs a fixed phase difference — same frequency.",
            },
            {
              id: "ph-l18-q5",
              type: "short",
              prompt:
                "Double slit: λ = 600 nm, D = 2 m, d = 1 mm. Give the fringe spacing in mm.",
              answer: "1.2",
              keywords: ["1.2"],
              hint: "s = λD/d — convert nm and mm to metres first.",
              acceptable: ["1.2 mm"],
              explanation:
                "Δy = 600×10⁻⁹ × 2 / 10⁻³ = 1.2×10⁻³ m = 1.2 mm.",
            },
            {
              id: "ph-l18-q6",
              type: "short",
              prompt:
                "Give the path difference (in wavelengths) for the first DARK fringe in a double slit.",
              answer: "λ/2",
              keywords: ["half", "0.5", "1/2", "λ/2"],
              hint: "Destructive interference happens at half-integer path differences.",
              acceptable: ["half a wavelength", "0.5λ", "lambda/2"],
              explanation:
                "Destructive interference needs Δ = (n + ½)λ; first dark = λ/2.",
            },
          ],
        },
        {
          id: "ph-l19",
          title: "Refraction and Snell's law",
          questions: [
            {
              id: "ph-l19-q1",
              type: "mcq",
              prompt: "The refractive index n equals",
              choices: [
                "v/c",
                "c/v",
                "c × v",
                "sin i × sin r",
              ],
              answerIndex: 1,
              explanation:
                "n = c/v — light slows in the medium.",
            },
            {
              id: "ph-l19-q2",
              type: "mcq",
              prompt: "Snell's law states",
              choices: [
                "n₁sinθ₁ = n₂sinθ₂",
                "n₁/n₂ = θ₁/θ₂",
                "sinθ₁ = sinθ₂",
                "nθ = constant",
              ],
              answerIndex: 0,
              explanation:
                "n₁ sinθ₁ = n₂ sinθ₂ at the boundary.",
            },
            {
              id: "ph-l19-q3",
              type: "tf",
              prompt:
                "Total internal reflection requires light travelling from a denser to a less dense medium beyond the critical angle.",
              answer: true,
              explanation:
                "Both conditions: n₁ > n₂ AND θ > θ_c.",
            },
            {
              id: "ph-l19-q4",
              type: "mcq",
              prompt:
                "Entering an optically denser medium, light bends",
              choices: [
                "away from the normal",
                "towards the normal",
                "not at all",
                "backwards",
              ],
              answerIndex: 1,
              explanation:
                "Slower medium → ray bends toward the normal.",
            },
            {
              id: "ph-l19-q5",
              type: "short",
              prompt:
                "Light speed in a medium with n = 1.5 (c = 3 × 10⁸ m/s). Give v in m/s.",
              answer: "2 × 10^8",
              keywords: ["2", "10^8"],
              hint: "n = c/v → rearrange for v.",
              acceptable: ["2e8", "200000000", "2×10⁸"],
              explanation: "v = c/n = 3×10⁸/1.5 = 2×10⁸ m/s.",
            },
            {
              id: "ph-l19-q6",
              type: "short",
              prompt:
                "Give the critical angle for n = 1.5 into air (sin θ_c = 1/n), in degrees to 1 d.p.",
              answer: "41.8",
              keywords: ["41"],
              hint: "sin θc = 1/n, then take arcsin.",
              acceptable: ["41.8", "42"],
              explanation:
                "sin θ_c = 0.667 → θ_c = sin⁻¹(0.667) ≈ 41.8°.",
            },
          ],
        },
      ],
    },
    {
      id: "ph-u4",
      code: "Topic D",
      title: "Fields",
      lessons: [
        {
          id: "ph-l8",
          title: "Gravitational and electric fields",
          questions: [
            {
              id: "ph-l8-q1",
              type: "mcq",
              prompt:
                "Gravitational field strength at a point equals",
              choices: [
                "force per unit mass on a test mass",
                "the weight of Earth",
                "G, the universal constant",
                "potential energy per kilogram",
              ],
              answerIndex: 0,
              explanation: "g = F/m, force per unit mass.",
            },
            {
              id: "ph-l8-q2",
              type: "mcq",
              prompt:
                "Inside a uniform electric field between parallel plates, field lines are",
              choices: [
                "radial",
                "parallel and evenly spaced",
                "circular",
                "denser near the edges only",
              ],
              answerIndex: 1,
              explanation:
                "Uniform field = parallel, equally spaced lines from + to − plate.",
            },
            {
              id: "ph-l8-q3",
              type: "mcq",
              prompt:
                "Doubling the distance between two point charges changes the force between them by a factor of",
              choices: ["½", "2", "¼", "4"],
              answerIndex: 2,
              explanation: "Coulomb's law: F ∝ 1/r², so 2× distance → F/4.",
            },
            {
              id: "ph-l8-q4",
              type: "tf",
              prompt:
                "Satellites in orbit are in free fall — the only force on them is gravity.",
              answer: true,
              explanation:
                "Orbit is continuous free fall; gravity provides the centripetal force.",
            },
            {
              id: "ph-l8-q5",
              type: "short",
              prompt:
                "State one key difference between gravitational and electric fields.",
              answer:
                "Gravity only attracts; electric forces can attract or repel.",
              keywords: ["repel", "attract", "charge"],
              hint: "One only attracts; the other can do both.",
              explanation:
                "Mass is always positive → only attraction; charge can be ± → both directions.",
            },
            {
              id: "ph-l8-q6",
              type: "short",
              prompt:
                "The Moon's orbital radius is about 3.84 × 10⁸ m. If g at Earth's surface is 9.8 m/s² and Earth radius is 6.4 × 10⁶ m, estimate g at the Moon's orbit.",
              answer: "2.7e-3 m/s²",
              acceptable: ["0.0027", "2.7 × 10⁻³", "0.003"],
              keywords: ["10⁻", "0.00", "2.7"],
              hint: "Inverse-square: g ∝ 1/r² — compute the ratio (R/(R+r))².",
              explanation:
                "g ∝ 1/r²: 9.8 × (6.4e6/3.84e8)² ≈ 2.7 × 10⁻³ m/s².",
            },
          ],
        },
        {
          id: "ph-l9",
          title: "Electromagnetic induction",
          level: "HL",
          questions: [
            {
              id: "ph-l9-q1",
              type: "mcq",
              prompt:
                "Faraday's law says induced emf is proportional to",
              choices: [
                "the magnetic flux",
                "the rate of change of magnetic flux linkage",
                "the current in the coil",
                "the resistance of the coil",
              ],
              answerIndex: 1,
              explanation: "ε = −N ΔΦ/Δt.",
            },
            {
              id: "ph-l9-q2",
              type: "mcq",
              prompt:
                "Lenz's law states the induced current flows so as to",
              choices: [
                "increase the flux change",
                "oppose the change that produced it",
                "match the magnet's motion",
                "maximise heat loss",
              ],
              answerIndex: 1,
              explanation:
                "Induced effects oppose their cause — required by energy conservation.",
            },
            {
              id: "ph-l9-q3",
              type: "mcq",
              prompt:
                "A transformer steps up voltage from 12 V to 240 V. If the primary has 100 turns, the secondary has",
              choices: ["5 turns", "2000 turns", "480 turns", "20 turns"],
              answerIndex: 1,
              explanation:
                "Ns/Np = Vs/Vp = 240/12 = 20 → Ns = 2000.",
            },
            {
              id: "ph-l9-q4",
              type: "tf",
              prompt:
                "A steady current through a stationary coil induces a continuous emf in a nearby second coil.",
              answer: false,
              explanation:
                "Only a CHANGING flux induces emf; steady current gives static flux → no induction.",
            },
            {
              id: "ph-l9-q5",
              type: "short",
              prompt:
                "Explain why a magnet falling through a copper tube falls more slowly than through a plastic one.",
              answer:
                "Induced currents in the copper create opposing magnetic fields that brake the fall.",
              keywords: ["induced", "current", "oppose", "magnetic", "lenz"],
              hint: "Which law says the induced effect opposes the change? What flows in copper?",
              explanation:
                "Lenz's law: eddy currents oppose the flux change → upward force on the magnet.",
            },
            {
              id: "ph-l9-q6",
              type: "short",
              prompt:
                "A coil of 200 turns has flux through it changing from 0 to 3.0 × 10⁻³ Wb in 0.10 s. Find the induced emf.",
              answer: "6 V",
              acceptable: ["6.0 V", "6"],
              keywords: ["6"],
              hint: "ε = N ΔΦ/Δt.",
              explanation:
                "ε = N ΔΦ/Δt = 200 × 3.0e-3 / 0.10 = 6 V.",
            },
          ],
        },
        {
          id: "ph-l20",
          title: "Coulomb's law and electric fields",
          questions: [
            {
              id: "ph-l20-q1",
              type: "mcq",
              prompt: "Coulomb's law gives the force between charges as",
              choices: [
                "F = kq₁q₂/r²",
                "F = kq₁q₂r²",
                "F = k(q₁ + q₂)/r",
                "F = qE/r",
              ],
              answerIndex: 0,
              explanation:
                "Inverse-square law, k ≈ 8.99 × 10⁹ N·m²/C².",
            },
            {
              id: "ph-l20-q2",
              type: "mcq",
              prompt:
                "Electric field lines around a positive point charge point",
              choices: [
                "inwards",
                "outwards",
                "in circles",
                "nowhere",
              ],
              answerIndex: 1,
              explanation:
                "Field direction = force on a positive test charge → away from +.",
            },
            {
              id: "ph-l20-q3",
              type: "tf",
              prompt:
                "Doubling the separation between two charges reduces the force to one quarter.",
              answer: true,
              explanation: "F ∝ 1/r².",
            },
            {
              id: "ph-l20-q4",
              type: "mcq",
              prompt: "Electric field strength E is defined as",
              choices: [
                "F × q",
                "F/q",
                "q/F",
                "F·r",
              ],
              answerIndex: 1,
              explanation:
                "E = F/q — force per unit charge (N/C).",
            },
            {
              id: "ph-l20-q5",
              type: "short",
              prompt:
                "Force between two 1 C charges 1 m apart (k = 9 × 10⁹). Give F in newtons.",
              answer: "9 × 10^9",
              keywords: ["9", "10^9"],
              hint: "F = kq₁q₂/r².",
              acceptable: ["9e9", "9000000000", "9×10⁹"],
              explanation: "F = 9×10⁹ × 1 × 1 / 1 = 9×10⁹ N.",
            },
            {
              id: "ph-l20-q6",
              type: "short",
              prompt:
                "Field strength 1 m from a 2 × 10⁻⁶ C charge (k = 9 × 10⁹). Give E in N/C.",
              answer: "18000",
              keywords: ["18000", "1.8"],
              hint: "E = kq/r².",
              acceptable: ["1.8e4", "18,000", "1.8×10⁴"],
              explanation: "E = kq/r² = 9×10⁹ × 2×10⁻⁶ = 1.8×10⁴ N/C.",
            },
          ],
        },
        {
          id: "ph-l21",
          title: "Circuits: Kirchhoff and internal resistance",
          questions: [
            {
              id: "ph-l21-q1",
              type: "mcq",
              prompt: "Kirchhoff's junction rule says current is",
              choices: [
                "created at junctions",
                "conserved: total in = total out",
                "always equal in all branches",
                "zero",
              ],
              answerIndex: 1,
              explanation:
                "Charge conservation: ΣI_in = ΣI_out.",
            },
            {
              id: "ph-l21-q2",
              type: "mcq",
              prompt:
                "Kirchhoff's loop rule is essentially conservation of",
              choices: ["charge", "energy", "momentum", "mass"],
              answerIndex: 1,
              explanation:
                "Σ emf = Σ p.d. around a loop — energy conservation.",
            },
            {
              id: "ph-l21-q3",
              type: "tf",
              prompt:
                "A cell's terminal voltage drops below its emf when it delivers current, due to internal resistance.",
              answer: true,
              explanation:
                "V = ε − Ir: some voltage is 'lost' across the internal resistance.",
            },
            {
              id: "ph-l21-q4",
              type: "mcq",
              prompt:
                "Two identical resistors in parallel have a combined resistance of",
              choices: [
                "2R",
                "R/2",
                "R",
                "R²",
              ],
              answerIndex: 1,
              explanation: "1/R_t = 2/R → R_t = R/2.",
            },
            {
              id: "ph-l21-q5",
              type: "short",
              prompt:
                "emf = 12 V, internal r = 1 Ω, load R = 5 Ω. Give the terminal voltage in volts.",
              answer: "10",
              keywords: ["10"],
              hint: "Find I first from ε = I(R + r), then V = ε − Ir or V = IR.",
              acceptable: ["10 V"],
              explanation:
                "I = 12/6 = 2 A; V = 12 − 2×1 = 10 V.",
            },
            {
              id: "ph-l21-q6",
              type: "short",
              prompt:
                "Two 4 Ω resistors in parallel. Give the total resistance in ohms.",
              answer: "2",
              keywords: ["2"],
              hint: "Equal parallel resistors halve — or use 1/R = 1/R₁ + 1/R₂.",
              acceptable: ["2 Ω", "2 ohms"],
              explanation: "R_t = 4/2 = 2 Ω.",
            },
          ],
        },
        {
          id: "ph-l22",
          title: "Magnetic fields and forces",
          questions: [
            {
              id: "ph-l22-q1",
              type: "mcq",
              prompt:
                "The force on a charge moving through a magnetic field is",
              choices: [
                "F = qvB sin θ",
                "F = qB/v",
                "F = mvB",
                "F = qv/B",
              ],
              answerIndex: 0,
              explanation: "F = qvB sinθ.",
            },
            {
              id: "ph-l22-q2",
              type: "mcq",
              prompt:
                "The magnetic force on a moving charge acts",
              choices: [
                "along v",
                "along B",
                "perpendicular to both v and B",
                "opposite to B",
              ],
              answerIndex: 2,
              explanation:
                "F ⊥ plane of v and B — Fleming's left-hand rule (for conventional current).",
            },
            {
              id: "ph-l22-q3",
              type: "tf",
              prompt:
                "The magnetic force does no work on a moving charge because it is perpendicular to the velocity.",
              answer: true,
              explanation:
                "It changes direction, not speed — that's why particles circle.",
            },
            {
              id: "ph-l22-q4",
              type: "mcq",
              prompt:
                "The radius of a charged particle's circular path in a magnetic field is",
              choices: [
                "r = qB/mv",
                "r = mv/qB",
                "r = qvB",
                "r = mB/qv",
              ],
              answerIndex: 1,
              explanation:
                "qvB = mv²/r → r = mv/qB.",
            },
            {
              id: "ph-l22-q5",
              type: "short",
              prompt:
                "q = 1 × 10⁻⁶ C, v = 100 m/s, B = 0.5 T, θ = 90°. Give the force in newtons.",
              answer: "5 × 10^-5",
              keywords: ["5", "10^-5"],
              hint: "F = qvB sin θ with θ = 90°.",
              acceptable: ["5e-5", "0.00005", "5×10⁻⁵"],
              explanation: "F = 10⁻⁶ × 100 × 0.5 = 5×10⁻⁵ N.",
            },
            {
              id: "ph-l22-q6",
              type: "short",
              prompt:
                "Force on a wire: B = 0.2 T, I = 5 A, L = 0.3 m (wire ⟂ to field). Give F in newtons.",
              answer: "0.3",
              keywords: ["0.3"],
              hint: "F = BIL.",
              acceptable: ["0.3 N"],
              explanation: "F = BIL = 0.2 × 5 × 0.3 = 0.3 N.",
            },
          ],
        },
      ],
    },
    {
      id: "ph-u5",
      code: "Topic E",
      title: "Nuclear and quantum physics",
      lessons: [
        {
          id: "ph-l10",
          title: "Radioactivity, fission and fusion",
          questions: [
            {
              id: "ph-l10-q1",
              type: "mcq",
              prompt:
                "In beta-minus decay, the emitted particle is",
              choices: [
                "a helium nucleus",
                "an electron plus an antineutrino",
                "a positron",
                "a photon",
              ],
              answerIndex: 1,
              explanation:
                "A neutron → proton + e⁻ + antineutrino.",
            },
            {
              id: "ph-l10-q2",
              type: "mcq",
              prompt:
                "Half-life is the time for",
              choices: [
                "all nuclei to decay",
                "the activity to halve",
                "mass to double",
                "half the energy to be released",
              ],
              answerIndex: 1,
              explanation:
                "Half the undecayed nuclei decay per half-life; activity halves too.",
            },
            {
              id: "ph-l10-q3",
              type: "mcq",
              prompt:
                "Nuclear fusion releases energy because the products have",
              choices: [
                "more mass than the reactants",
                "a higher binding energy per nucleon",
                "more neutrons",
                "lower temperature",
              ],
              answerIndex: 1,
              explanation:
                "Higher binding energy per nucleon → mass defect → E = mc² energy out.",
            },
            {
              id: "ph-l10-q4",
              type: "tf",
              prompt:
                "Alpha radiation is the most penetrating of α, β and γ emissions.",
              answer: false,
              explanation:
                "Alpha is the LEAST penetrating (stopped by paper/skin); gamma is most penetrating.",
            },
            {
              id: "ph-l10-q5",
              type: "short",
              prompt:
                "A sample's activity falls from 800 Bq to 100 Bq in 9 days. Find its half-life.",
              answer: "3 days",
              acceptable: ["3"],
              keywords: ["3"],
              hint: "Work out how many times the activity halves; divide the elapsed days by that count to get T½.",
              explanation:
                "800→400→200→100 is 3 half-lives in 9 days → T½ = 3 days.",
            },
            {
              id: "ph-l10-q6",
              type: "short",
              prompt:
                "State the main challenge in sustaining controlled nuclear fusion on Earth.",
              answer:
                "Reaching and confining the extreme temperatures needed to overcome Coulomb repulsion.",
              keywords: ["temperature", "confin", "repuls", "plasma"],
              hint: "Think about what force the nuclei must overcome to fuse — and what that requires.",
              explanation:
                "Nuclei repel; ~10⁸ K plasma must be confined long enough — hard to sustain.",
            },
          ],
        },
        {
          id: "ph-l11",
          title: "Quantum physics and relativity",
          level: "HL",
          questions: [
            {
              id: "ph-l11-q1",
              type: "mcq",
              prompt:
                "The photoelectric effect shows that light energy arrives in",
              choices: [
                "continuous waves",
                "discrete quanta (photons)",
                "standing waves",
                "equal halves",
              ],
              answerIndex: 1,
              explanation:
                "Electron emission depends on photon frequency, not intensity — evidence for E = hf quanta.",
            },
            {
              id: "ph-l11-q2",
              type: "mcq",
              prompt:
                "Einstein's postulate of special relativity states that",
              choices: [
                "gravity bends light",
                "the speed of light in vacuum is the same for all observers",
                "time is absolute",
                "mass cannot change",
              ],
              answerIndex: 1,
              explanation:
                "Constancy of c for all inertial frames leads to time dilation and length contraction.",
            },
            {
              id: "ph-l11-q3",
              type: "mcq",
              prompt:
                "In the Bohr model, a photon is emitted when an electron",
              choices: [
                "spirals into the nucleus",
                "jumps to a lower energy level",
                "leaves the atom",
                "absorbs a neutron",
              ],
              answerIndex: 1,
              explanation:
                "hf = E₂ − E₁ for a downward transition between discrete levels.",
            },
            {
              id: "ph-l11-q4",
              type: "tf",
              prompt:
                "De Broglie's hypothesis assigns a wavelength to all moving particles, not just light.",
              answer: true,
              explanation: "λ = h/p for any particle with momentum p.",
            },
            {
              id: "ph-l11-q5",
              type: "short",
              prompt:
                "Explain why increasing light intensity below the threshold frequency ejects no electrons.",
              answer:
                "Each photon carries too little energy; more photons can't compensate since emission is one-photon-per-electron.",
              keywords: ["photon", "frequency", "energy", "threshold"],
              hint: "Energy arrives in packets E = hf — what does more intensity add, energy per photon or photon count?",
              explanation:
                "Emission depends on individual photon energy hf ≥ work function, not total intensity.",
            },
            {
              id: "ph-l11-q6",
              type: "short",
              prompt:
                "State the twin-paradox style outcome of time dilation for a clock moving at relativistic speed as seen by a stationary observer.",
              answer:
                "The moving clock ticks more slowly than the observer's clock.",
              keywords: ["slow", "dilat", "clock", "time"],
              hint: "γ > 1 means the moving clock runs ___ — fill in the direction of the effect.",
              explanation:
                "Δt = γΔt₀: the moving (proper-time) interval appears longer, i.e. the moving clock runs slow.",
            },
          ],
        },
        {
          id: "ph-l23",
          title: "Half-life and decay calculations",
          questions: [
            {
              id: "ph-l23-q1",
              type: "mcq",
              prompt: "The half-life of a radioactive isotope is",
              choices: [
                "the time for all atoms to decay",
                "the time for half the undecayed nuclei to decay",
                "the activity",
                "constant for all isotopes",
              ],
              answerIndex: 1,
              explanation:
                "Half the remaining nuclei decay per half-life — exponential decay.",
            },
            {
              id: "ph-l23-q2",
              type: "mcq",
              prompt: "After time t, the remaining nuclei number",
              choices: [
                "N = N₀(1/2)^(t/T½)",
                "N = N₀ − t",
                "N = N₀·t/T½",
                "N = N₀²",
              ],
              answerIndex: 0,
              explanation:
                "N = N₀(1/2)^(t/T½) — equivalent to N₀e^(−λt).",
            },
            {
              id: "ph-l23-q3",
              type: "tf",
              prompt:
                "Activity is proportional to the number of undecayed nuclei present.",
              answer: true,
              explanation:
                "A = λN — as N falls, so does the count rate.",
            },
            {
              id: "ph-l23-q4",
              type: "mcq",
              prompt:
                "After 3 half-lives, the fraction remaining is",
              choices: ["1/3", "1/6", "1/8", "1/9"],
              answerIndex: 2,
              explanation: "(1/2)³ = 1/8.",
            },
            {
              id: "ph-l23-q5",
              type: "short",
              prompt:
                "An isotope has T½ = 5 years. Starting with 100 g, give the mass remaining after 15 years, in grams.",
              answer: "12.5",
              keywords: ["12.5"],
              hint: "15 years = how many half-lives? Then (½)ⁿ × 100 g.",
              acceptable: ["12.5 g"],
              explanation:
                "3 half-lives: 100 → 50 → 25 → 12.5 g.",
            },
            {
              id: "ph-l23-q6",
              type: "short",
              prompt:
                "A sample falls from 800 to 100 counts. T½ = 2 hours. Give the elapsed time in hours.",
              answer: "6",
              keywords: ["6"],
              hint: "Count the halvings from 800 to 100, then multiply by T½.",
              acceptable: ["6 h", "6 hours"],
              explanation:
                "800 → 400 → 200 → 100 is 3 half-lives → 3 × 2 = 6 h.",
            },
          ],
        },
        {
          id: "ph-l24",
          title: "Photoelectric effect and energy levels",
          level: "HL",
          questions: [
            {
              id: "ph-l24-q1",
              type: "mcq",
              prompt: "The energy of a photon is",
              choices: [
                "E = h/f",
                "E = hf",
                "E = mc² only",
                "E = λf",
              ],
              answerIndex: 1,
              explanation:
                "E = hf, h = 6.63 × 10⁻³⁴ J·s.",
            },
            {
              id: "ph-l24-q2",
              type: "mcq",
              prompt:
                "Einstein's photoelectric equation gives the maximum electron KE as",
              choices: [
                "hf + φ",
                "hf − φ",
                "φ − hf",
                "hf/φ",
              ],
              answerIndex: 1,
              explanation:
                "KE_max = hf − φ: photon energy minus the work function.",
            },
            {
              id: "ph-l24-q3",
              type: "tf",
              prompt:
                "Below the threshold frequency, no electrons are emitted no matter how intense the light.",
              answer: true,
              explanation:
                "One photon interacts with one electron — intensity can't compensate for low frequency. Evidence for photons.",
            },
            {
              id: "ph-l24-q4",
              type: "mcq",
              prompt:
                "In the Bohr model, photons are emitted when electrons",
              choices: [
                "jump to higher levels",
                "drop to lower energy levels",
                "orbit",
                "stop moving",
              ],
              answerIndex: 1,
              explanation:
                "Downward transitions release photons with E = h f = ΔE.",
            },
            {
              id: "ph-l24-q5",
              type: "short",
              prompt:
                "Light of energy 5 eV hits a metal with work function 2 eV. Give the maximum electron KE in eV.",
              answer: "3",
              keywords: ["3"],
              hint: "Ekmax = hf − Φ.",
              acceptable: ["3 eV"],
              explanation: "KE_max = 5 − 2 = 3 eV.",
            },
            {
              id: "ph-l24-q6",
              type: "short",
              prompt:
                "An electron drops from −3.4 eV to −13.6 eV. Give the emitted photon energy in eV.",
              answer: "10.2",
              keywords: ["10.2"],
              hint: "Photon energy = difference between levels — subtract, mind the signs.",
              acceptable: ["10.2 eV"],
              explanation:
                "ΔE = −3.4 − (−13.6) = 10.2 eV.",
            },
          ],
        },
        {
          id: "ph-l25",
          title: "Binding energy, fission and fusion",
          level: "HL",
          questions: [
            {
              id: "ph-l25-q1",
              type: "mcq",
              prompt: "The binding energy of a nucleus is",
              choices: [
                "energy released when it splits",
                "the energy needed to separate it into nucleons",
                "its mass",
                "the electron energy",
              ],
              answerIndex: 1,
              explanation:
                "Work required to pull the nucleus apart into protons and neutrons.",
            },
            {
              id: "ph-l25-q2",
              type: "mcq",
              prompt:
                "The mass defect Δm relates to binding energy through",
              choices: [
                "E = Δm·c²",
                "E = mc only",
                "E = Δm²",
                "E = hΔm",
              ],
              answerIndex: 0,
              explanation:
                "E = Δmc² — the missing mass became binding energy.",
            },
            {
              id: "ph-l25-q3",
              type: "tf",
              prompt:
                "Iron has approximately the highest binding energy per nucleon, making it the most stable nucleus.",
              answer: true,
              explanation:
                "The binding-energy curve peaks around iron/nickel — fission helps heavy nuclei, fusion helps light ones.",
            },
            {
              id: "ph-l25-q4",
              type: "mcq",
              prompt:
                "Fission and fusion release energy because the products have",
              choices: [
                "lower binding energy",
                "higher binding energy per nucleon",
                "more mass",
                "no mass defect",
              ],
              answerIndex: 1,
              explanation:
                "Products sit higher on the binding-energy-per-nucleon curve — the difference is released.",
            },
            {
              id: "ph-l25-q5",
              type: "short",
              prompt:
                "A mass defect of 0.001 u gives roughly how much energy in MeV? (1 u = 931.5 MeV)",
              answer: "0.93",
              keywords: ["0.93"],
              hint: "ΔE = Δm × 931.5 MeV.",
              acceptable: ["0.9", "0.9315", "0.93 MeV"],
              explanation: "0.001 × 931.5 ≈ 0.93 MeV.",
            },
            {
              id: "ph-l25-q6",
              type: "short",
              prompt:
                "A nucleus of 200 nucleons has binding energy 8 MeV per nucleon. Give the total binding energy in MeV.",
              answer: "1600",
              keywords: ["1600"],
              hint: "Total = per-nucleon × number of nucleons.",
              acceptable: ["1,600", "1600 MeV"],
              explanation: "200 × 8 = 1,600 MeV.",
            },
          ],
        },
      ],
    },
  ],
};
