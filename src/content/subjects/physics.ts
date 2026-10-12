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
  resources: [
    {
      name: "IB Official",
      url: "https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/",
      note: "Subject brief and syllabus outline",
    },
    {
      name: "RevisionDojo",
      url: "https://www.revisiondojo.com/",
      note: "Topic questions with worked solutions",
    },
    {
      name: "InThinking",
      url: "https://www.thinkib.net/physics",
      note: "Teacher-written lessons and IA guidance",
    },
  ],
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
              explanation:
                "Weight acts at the centre of mass, 1 m from the pivot: τ = 100 × 1 = 100 N·m.",
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
              explanation:
                "Area inside the loop = net work output per cycle of the engine.",
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
              explanation:
                "f′ = f × v/(v − vs) = 400 × 340/310 ≈ 439 Hz.",
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
              explanation:
                "ε = N ΔΦ/Δt = 200 × 3.0e-3 / 0.10 = 6 V.",
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
              explanation:
                "Δt = γΔt₀: the moving (proper-time) interval appears longer, i.e. the moving clock runs slow.",
            },
          ],
        },
      ],
    },
  ],
};
