import type { StudyNotes } from "../types";

export const physicsStudy: StudyNotes = {
  "ph-l1": [
    {
      type: "warmup",
      prompt: "A ball thrown straight up has velocity 0 m/s at the top of its flight. What is its acceleration there?",
      answer: "Still g ≈ 9.81 m/s² downwards — acceleration is set by gravity, not by velocity. Zero velocity does not mean zero acceleration.",
    },
    {
      type: "text",
      body: "Kinematics describes motion without asking what causes it. In IB physics you work with five quantities — displacement s, initial velocity u, final velocity v, acceleration a and time t — and the four SUVAT equations connect any three of them when **acceleration is constant**.",
    },
    {
      type: "check",
      prompt: "Why can't you use SUVAT on motion where acceleration changes halfway through?",
      answer: "SUVAT derives from constant acceleration — each equation assumes a single a over the whole interval, so changing a invalidates them.",
    },
    {
      type: "definition",
      term: "Displacement",
      body: "The vector change in position of an object, measured in metres. Distance travelled is scalar and can exceed the magnitude of displacement.",
    },
    {
      type: "definition",
      term: "Acceleration",
      body: "The rate of change of velocity with time, in m s⁻². A negative value means the velocity decreases along the chosen positive direction — not necessarily slowing down.",
    },
    {
      type: "formula",
      label: "SUVAT equations",
      body: "v = u + at;  s = ut + ½at²;  v² = u² + 2as;  s = (u + v)t / 2",
    },
    {
      type: "text",
      body: "On a velocity–time graph the **gradient is acceleration** and the **area under the line is displacement**. On a displacement–time graph the gradient is velocity. Sketching graphs is often the fastest way to reason about a problem.",
    },
    {
      type: "example",
      title: "Braking distance",
      steps: [
        "A car brakes from 20 m s⁻¹ to rest with a = −4 m s⁻². Find the distance.",
        "Choose v² = u² + 2as: 0 = 20² + 2(−4)s",
        "s = 400 / 8 = **50 m**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Always declare a positive direction before substituting — most kinematics marks are lost to sign errors, not algebra.",
    },
  ],
  "ph-l2": [
    {
      type: "warmup",
      prompt: "If a 60 kg skater pushes off a wall, which is bigger: the force on the skater or the force on the wall?",
      answer: "They are equal — Newton's third law pair. The skater accelerates more because her mass is smaller, not because the forces differ.",
    },
    {
      type: "text",
      body: "Newton's three laws connect forces to motion: a body keeps its velocity unless a resultant force acts (1st), acceleration is proportional to resultant force and inversely proportional to mass (2nd), and every force has an equal opposite partner acting on the *other* body (3rd). Momentum p = mv is conserved in any closed system — collisions and explosions alike.",
    },
    {
      type: "check",
      prompt: "Why is momentum conserved in a collision even when kinetic energy isn't?",
      answer: "Momentum conservation follows from Newton's third law (internal forces cancel); kinetic energy can be converted into heat and sound, so it needn't survive.",
    },
    {
      type: "definition",
      term: "Momentum",
      body: "The product of an object's mass and velocity (kg m s⁻¹), a vector. Total momentum of an isolated system is conserved in every interaction.",
    },
    {
      type: "definition",
      term: "Impulse",
      body: "The change in momentum of an object, equal to the resultant force multiplied by the time it acts: impulse = FΔt = Δp.",
    },
    {
      type: "formula",
      label: "Core equations",
      body: "F = ma;  p = mv;  F = Δp / Δt",
    },
    {
      type: "text",
      body: "In an **elastic** collision kinetic energy is conserved as well as momentum; in an **inelastic** collision some KE becomes internal energy. Objects that stick together move at the shared velocity from momentum conservation.",
    },
    {
      type: "example",
      title: "Inelastic collision",
      steps: [
        "A 2 kg trolley at 3 m s⁻¹ hits a stationary 1 kg trolley and they stick.",
        "Momentum before = 2 × 3 = 6 kg m s⁻¹",
        "Shared velocity v = 6 / (2 + 1) = **2 m s⁻¹**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Newton's 3rd-law pairs act on different objects — never put 'reaction force' on the same free-body diagram as the force it answers.",
    },
  ],
  "ph-l3": [
    {
      type: "warmup",
      prompt: "A door is easier to push open far from the hinge than near it — what physics quantity does that illustrate?",
      answer: "The moment (torque): the same force applied at a larger perpendicular distance produces more rotational effect.",
    },
    {
      type: "text",
      body: "Extended bodies can rotate as well as translate. A force causes rotation through its **moment** (torque): the force multiplied by the perpendicular distance from the pivot. A body is in equilibrium when both the net force and the net moment about any point are zero.",
    },
    {
      type: "check",
      prompt: "Why does a ladder start to slip more easily when you climb higher?",
      answer: "Climbing raises your weight's moment arm about the base, increasing the required friction torque the ground must supply — eventually exceeding available friction.",
    },
    {
      type: "definition",
      term: "Moment (torque)",
      body: "τ = Fd, where d is the perpendicular distance from the line of action of the force to the pivot, in N m. Clockwise and anticlockwise moments must balance in equilibrium.",
    },
    {
      type: "definition",
      term: "Centre of gravity",
      body: "The point at which the entire weight of a body can be considered to act. For a uniform body it sits at the geometric centre.",
    },
    {
      type: "formula",
      label: "Equilibrium conditions",
      body: "ΣF = 0  and  Στ = 0 (about any point)",
    },
    {
      type: "text",
      body: "A **couple** is a pair of equal, opposite, parallel forces that produce a pure torque — no net force. Its moment equals one force × the perpendicular separation.",
    },
    {
      type: "example",
      title: "Seesaw balance",
      steps: [
        "A 300 N child sits 2 m left of the pivot. Where does a 200 N child sit on the right for balance?",
        "Anticlockwise = clockwise: 300 × 2 = 200 × d",
        "d = 600 / 200 = **3 m**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "If a force's line of action passes through the pivot it exerts zero moment — draw the diagram and mark perpendicular distances, not the whole force magnitude.",
    },
  ],
  "ph-l12": [
    {
      type: "warmup",
      prompt: "A bullet fired horizontally and one dropped from the same height land at the same instant (flat ground). Why?",
      answer: "Vertical motion is independent of horizontal motion — both start with zero vertical velocity and fall under the same g.",
    },
    {
      type: "text",
      body: "Projectile problems separate into two independent motions: **constant horizontal velocity** and **constant vertical acceleration g ≈ 9.81 m s⁻² downwards**. Time links the two — whatever takes the object up takes the same time to come back down over level ground.",
    },
    {
      type: "check",
      prompt: "Why does a projectile's speed at launch height equal its launch speed on the way down?",
      answer: "Vertical speed returns symmetrically (same |v| at same height) and horizontal speed never changes — so total speed is restored.",
    },
    {
      type: "definition",
      term: "Projectile motion",
      body: "Motion of an object in free fall under gravity alone (air resistance neglected). Horizontal and vertical components of velocity are treated separately.",
    },
    {
      type: "formula",
      label: "Key relations",
      body: "ux = u cos θ,  uy = u sin θ;  t_top = uy / g;  range = ux × 2t_top (level ground)",
    },
    {
      type: "text",
      body: "At the top of the flight the vertical velocity is zero but the horizontal velocity is unchanged — acceleration is still g downwards, never zero.",
    },
    {
      type: "example",
      title: "Ball kicked at an angle",
      steps: [
        "A ball is kicked at 20 m s⁻¹ at 30°. Find time of flight and range.",
        "uy = 20 sin 30° = 10 m s⁻¹; ux = 20 cos 30° = 17.3 m s⁻¹",
        "t_top = 10 / 9.81 ≈ 1.02 s, so flight ≈ 2.04 s",
        "Range = 17.3 × 2.04 ≈ **35 m**",
      ],
      blank: 2,
    },
    {
      type: "tip",
      body: "Examiners love 'velocity at the top of the arc' — it is purely horizontal, equal to ux, not zero.",
    },
  ],
  "ph-l13": [
    {
      type: "warmup",
      prompt: "Does the tension in a string whirling a ball horizontally do work on the ball?",
      answer: "No — the force is perpendicular to the velocity at every instant, so W = Fs cos 90° = 0; only direction changes, not speed.",
    },
    {
      type: "text",
      body: "Work is energy transferred by a force acting through a displacement: W = Fs cos θ. Power is the rate of doing work. In uniform circular motion a centripetal force F = mv²/r points towards the centre — it changes direction, not speed, so it does **no work**.",
    },
    {
      type: "check",
      prompt: "Why do satellite orbits need no engine to keep going?",
      answer: "Gravity supplies the centripetal force and does no work on the satellite, so its speed — and hence its orbit — is maintained indefinitely (ignoring drag).",
    },
    {
      type: "definition",
      term: "Work done",
      body: "The energy transferred when a force displaces its point of application: W = Fs cos θ, in joules. Only the force component along the displacement counts.",
    },
    {
      type: "definition",
      term: "Centripetal acceleration",
      body: "a = v² / r directed to the centre of the circle. The resultant force providing it is called the centripetal force — it is a role, not a new force type.",
    },
    {
      type: "formula",
      label: "Work, energy, power, circular motion",
      body: "W = Fs cos θ;  Ek = ½mv²;  Ep = mgh;  P = W/t = Fv;  F_c = mv²/r",
    },
    {
      type: "text",
      body: "The **work–energy theorem** says net work done on a body equals its change in kinetic energy. Use it to skip kinematics: W_net = ΔEk directly links force and speed.",
    },
    {
      type: "example",
      title: "Loop the top",
      steps: [
        "Minimum speed for a 0.4 kg ball to stay on a vertical loop of radius 1.2 m: gravity alone provides F_c.",
        "At the top: mg = mv²/r → v² = gr = 9.81 × 1.2",
        "v = √11.77 ≈ **3.4 m s⁻¹**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Centripetal force is supplied BY something — tension, friction, gravity, normal force. Saying 'centripetal force acts on the object' as a fourth force loses the mark.",
    },
  ],
  "ph-l4": [
    {
      type: "warmup",
      prompt: "Two identical heaters warm 1 kg of water and 1 kg of iron for the same time. Which ends hotter?",
      answer: "Iron — its specific heat capacity is much lower, so the same energy input produces a much larger temperature rise.",
    },
    {
      type: "text",
      body: "Temperature measures the average random kinetic energy of particles. Internal energy is the sum of the random kinetic and potential energies of all particles. Heat is energy transferred due to a temperature difference — bodies contain internal energy, never 'heat'.",
    },
    {
      type: "check",
      prompt: "Why must temperature be in kelvin for pV = nRT?",
      answer: "The gas laws derive from average molecular kinetic energy, which is proportional to absolute temperature — a Celsius zero doesn't correspond to zero molecular energy.",
    },
    {
      type: "definition",
      term: "Absolute zero",
      body: "0 K = −273.15 °C, the temperature at which particles have minimum kinetic energy. Kelvin and Celsius steps are the same size: T/K = θ/°C + 273.",
    },
    {
      type: "definition",
      term: "Ideal gas",
      body: "A gas whose molecules have negligible volume and no intermolecular forces except during collisions — a good model for real gases at low pressure and high temperature.",
    },
    {
      type: "formula",
      label: "Ideal gas law",
      body: "pV = nRT,  with R = 8.31 J mol⁻¹ K⁻¹ (T in kelvin!)",
    },
    {
      type: "text",
      body: "Boyle's law (pV = const, fixed T), Charles' law (V/T = const, fixed p) and the pressure law (p/T = const, fixed V) are all special cases of pV/T = constant for a **fixed mass** of gas.",
    },
    {
      type: "example",
      title: "Compressing a gas",
      steps: [
        "2 mol of gas at 27 °C occupies 0.05 m³. Find the pressure.",
        "T = 27 + 273 = 300 K",
        "p = nRT / V = 2 × 8.31 × 300 / 0.05 = **9.97 × 10⁴ Pa ≈ 100 kPa**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Convert Celsius to kelvin before substituting — leaving °C in pV = nRT is the single most common thermal-physics error.",
    },
  ],
  "ph-l5": [
    {
      type: "warmup",
      prompt: "Why does a pump get warm when you inflate a tyre quickly?",
      answer: "Rapid compression is roughly adiabatic — no time for heat to escape — so the work done on the gas raises its internal energy and temperature.",
    },
    {
      type: "text",
      body: "The first law of thermodynamics is energy conservation for gases: heat supplied ΔQ either raises internal energy ΔU or lets the gas do work W. Sign convention in the IB data booklet: ΔQ = ΔU + W with W the work done **by** the gas.",
    },
    {
      type: "check",
      prompt: "Why can't a heat engine ever be 100% efficient?",
      answer: "The second law requires some heat to be dumped to a cold reservoir; all real processes increase total entropy, so not all heat can become work.",
    },
    {
      type: "definition",
      term: "Isothermal / adiabatic / isobaric / isochoric",
      body: "Processes at constant temperature, no heat exchange, constant pressure, constant volume respectively. Isothermal → ΔU = 0 for an ideal gas; adiabatic → ΔQ = 0.",
    },
    {
      type: "formula",
      label: "First law + efficiency",
      body: "ΔQ = ΔU + W;  efficiency η = useful work out / energy in = W / Qh",
    },
    {
      type: "text",
      body: "The **second law** rules out a 100% efficient heat engine: a heat engine operating between a hot source Th and cold sink Tc has a maximum (Carnot) efficiency of 1 − Tc/Th, with T in kelvin.",
    },
    {
      type: "example",
      title: "Carnot engine",
      steps: [
        "An engine runs between 500 K and 300 K. Maximum efficiency?",
        "η = 1 − Tc/Th = 1 − 300/500",
        "η = **0.4 = 40%**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "In p–V diagram questions, work done by the gas equals the area under the curve — and a clockwise cycle means net work output.",
    },
  ],
  "ph-l14": [
    {
      type: "warmup",
      prompt: "Steam at 100 °C burns worse than water at 100 °C. Why?",
      answer: "Condensing steam releases its latent heat of vaporisation (~2260 kJ/kg) on skin in addition to the cooling energy — far more energy delivered.",
    },
    {
      type: "text",
      body: "Heating a substance either raises its temperature or changes its state — never both at once. **Specific heat capacity c** links energy to temperature change; **specific latent heat L** links energy to a phase change at constant temperature.",
    },
    {
      type: "check",
      prompt: "Why does temperature stay constant while ice melts, even though heat keeps flowing in?",
      answer: "The energy goes into breaking intermolecular bonds — raising potential energy — rather than kinetic energy, so temperature (a measure of kinetic energy) is unchanged.",
    },
    {
      type: "definition",
      term: "Specific heat capacity",
      body: "The energy needed to raise the temperature of 1 kg of a substance by 1 K, in J kg⁻¹ K⁻¹. Water's c = 4180 J kg⁻¹ K⁻¹ is a data-booklet staple.",
    },
    {
      type: "definition",
      term: "Specific latent heat",
      body: "The energy required to change the state of 1 kg of a substance at constant temperature — fusion (Lf, melting/freezing) or vaporisation (Lv, boiling/condensing).",
    },
    {
      type: "formula",
      label: "Heat equations",
      body: "Q = mcΔT (temperature change);  Q = mL (phase change)",
    },
    {
      type: "text",
      body: "During a phase change temperature stays constant because energy goes into breaking intermolecular bonds — raising potential, not kinetic, energy.",
    },
    {
      type: "example",
      title: "Melting then heating ice",
      steps: [
        "Energy to turn 0.5 kg of ice at 0 °C into water at 20 °C (Lf = 334 kJ kg⁻¹, c = 4180 J kg⁻¹ K⁻¹).",
        "Melting: Q1 = mLf = 0.5 × 334 000 = 167 000 J",
        "Heating water: Q2 = mcΔT = 0.5 × 4180 × 20 = 41 800 J",
        "Total = 167 000 + 41 800 = **2.09 × 10⁵ J ≈ 209 kJ**",
      ],
      blank: 2,
    },
    {
      type: "tip",
      body: "Sketch the heating curve (flat plateaus at melting/boiling points) before calculating — it tells you exactly how many terms you need.",
    },
  ],
  "ph-l15": [
    {
      type: "warmup",
      prompt: "A sealed bag of crisps puffs up on a mountain. Which gas law explains it?",
      answer: "Boyle's law — external pressure drops while the trapped air's temperature is roughly constant, so its volume expands (pV = const).",
    },
    {
      type: "text",
      body: "Gas-law calculations all reduce to p₁V₁/T₁ = p₂V₂/T₂ for a fixed mass — or pV = nRT when moles are involved. Identify which quantity is held constant, convert temperatures to kelvin, and the algebra is routine.",
    },
    {
      type: "check",
      prompt: "Why must all temperatures be in kelvin for p₁V₁/T₁ = p₂V₂/T₂?",
      answer: "The combined gas law comes from molecular kinetic energy ∝ absolute temperature; using Celsius breaks the proportionality (e.g. 0 °C ≠ zero energy).",
    },
    {
      type: "definition",
      term: "Boyle's law",
      body: "For a fixed mass of gas at constant temperature, pressure is inversely proportional to volume: p₁V₁ = p₂V₂.",
    },
    {
      type: "definition",
      term: "Standard temperature and pressure (STP)",
      body: "273 K and 1.01 × 10⁵ Pa. Molar volume of an ideal gas at STP is 22.4 dm³ — handy for quick estimates.",
    },
    {
      type: "example",
      title: "Boyle's law compression",
      steps: [
        "300 cm³ of gas at 100 kPa is compressed isothermally to 75 cm³. New pressure?",
        "p₁V₁ = p₂V₂ → 100 × 300 = p₂ × 75",
        "p₂ = **400 kPa**",
      ],
      blank: 1,
    },
    {
      type: "example",
      title: "Heating at constant volume",
      steps: [
        "A sealed flask at 120 kPa, 300 K is heated to 400 K. New pressure?",
        "p/T constant: p₂ = 120 × 400/300",
        "p₂ = **160 kPa**",
      ],
    },
    {
      type: "list",
      title: "Checklist before substituting",
      items: [
        "Convert °C → K",
        "Identify the constant quantity (p, V or T)",
        "Keep pressures and volumes in consistent units",
      ],
    },
    {
      type: "tip",
      body: "If the question mentions moles, molecules or 'number of particles', reach for pV = nRT or pV = NkT — not the ratio form.",
    },
  ],
  "ph-l16": [
    {
      type: "warmup",
      prompt: "If the temperature of a gas doubles (in kelvin), what happens to the average kinetic energy of its molecules?",
      answer: "It doubles — Ēk = (3/2)kT links mean kinetic energy directly to absolute temperature.",
    },
    {
      type: "text",
      body: "The kinetic theory derives pressure from molecular bombardment: pV = ⅓Nmc²̄, where c²̄ is the mean square speed. Combining with pV = NkT shows the average translational kinetic energy of a molecule depends only on temperature: Ēk = (3/2)kT.",
    },
    {
      type: "check",
      prompt: "Why do gas molecules exert pressure on container walls at all?",
      answer: "Each molecule rebounds off a wall with a change in momentum; billions of collisions per second apply a steady average force per unit area — that force per area is pressure.",
    },
    {
      type: "definition",
      term: "Boltzmann constant",
      body: "k = R/Nₐ = 1.38 × 10⁻²³ J K⁻¹ — the gas constant per molecule. Links macroscopic temperature to microscopic energy.",
    },
    {
      type: "formula",
      label: "Kinetic theory",
      body: "pV = ⅓Nmc²̄;  Ēk = (3/2)kT;  √(c²̄) is the rms speed",
    },
    {
      type: "text",
      body: "Assumptions of the ideal-gas model: molecules are point masses with negligible volume, collisions are perfectly elastic, intermolecular forces act only during collisions, and motion is random. Real gases deviate most at high pressure and low temperature.",
    },
    {
      type: "example",
      title: "Average kinetic energy",
      steps: [
        "Mean translational KE of a molecule at 300 K.",
        "Ēk = (3/2)kT = 1.5 × 1.38 × 10⁻²³ × 300",
        "Ēk = **6.21 × 10⁻²¹ J**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Exam derivations of p = ⅓ρc²̄ are a favourite 'explain' question — practise the momentum-change-per-molecule argument step by step.",
    },
  ],
  "ph-l6": [
    {
      type: "warmup",
      prompt: "For a pendulum, at which point of the swing is acceleration greatest — the centre or the extremes?",
      answer: "The extremes: a = −ω²x, so acceleration is proportional to displacement — maximum where displacement is maximum.",
    },
    {
      type: "text",
      body: "A wave transfers energy without net transfer of matter. In a **transverse** wave oscillations are perpendicular to propagation (light, water waves, strings); in a **longitudinal** wave they are parallel (sound). Travelling waves carry energy forward; standing waves store it in place.",
    },
    {
      type: "check",
      prompt: "Why does doubling a pendulum's length only multiply its period by √2, not 2?",
      answer: "T = 2π√(l/g) is a square-root relationship — restoring torque doesn't grow proportionally with length.",
    },
    {
      type: "definition",
      term: "Amplitude, wavelength, period, frequency",
      body: "A = maximum displacement from equilibrium; λ = distance between consecutive points in phase; T = time for one oscillation; f = 1/T in Hz.",
    },
    {
      type: "formula",
      label: "Wave equation + SHM",
      body: "v = fλ;  a = −ω²x;  T = 2π/ω;  x = x₀ cos ωt",
    },
    {
      type: "text",
      body: "Simple harmonic motion is oscillation about equilibrium where **acceleration is proportional to displacement and directed towards it** (a = −ω²x). Mass on a spring: T = 2π√(m/k). Simple pendulum: T = 2π√(l/g).",
    },
    {
      type: "example",
      title: "Pendulum period",
      steps: [
        "Find the period of a 2.0 m pendulum (g = 9.81).",
        "T = 2π√(l/g) = 2π√(2.0/9.81) = 2π × 0.451",
        "T ≈ **2.8 s**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "In SHM, displacement and acceleration are always in antiphase — if your worked answer has them pointing the same way, check the minus sign in a = −ω²x.",
    },
  ],
  "ph-l7": [
    {
      type: "warmup",
      prompt: "An ambulance siren sounds higher pitched coming towards you and lower going away. What changes — the emitted frequency or the received frequency?",
      answer: "Only the received frequency — the source emits at constant f; wavefronts bunch up in front and spread behind (Doppler effect).",
    },
    {
      type: "text",
      body: "All waves share five behaviours: **reflection** (angle in = angle out), **refraction** (speed and direction change between media), **diffraction** (spreading through gaps, strongest when gap ≈ λ), **interference** (superposition giving constructive/destructive patterns) and the **Doppler effect** (frequency shift from relative motion).",
    },
    {
      type: "check",
      prompt: "Why do only coherent sources produce a stable interference pattern?",
      answer: "Coherence keeps the phase difference at each point constant; incoherent sources average out to uniform illumination.",
    },
    {
      type: "definition",
      term: "Superposition principle",
      body: "When two or more waves meet, the resultant displacement at each point is the vector sum of the individual displacements.",
    },
    {
      type: "definition",
      term: "Doppler effect",
      body: "The change in observed frequency when source and observer move relative to each other: source approaching → higher frequency; receding → lower.",
    },
    {
      type: "formula",
      label: "Doppler (moving source, stationary observer)",
      body: "f′ = f · v / (v ∓ us):  −us approaching, +us receding",
    },
    {
      type: "text",
      body: "Two waves are **coherent** if they have the same frequency and a constant phase relationship — only coherent sources give a stable interference pattern.",
    },
    {
      type: "example",
      title: "Approaching siren",
      steps: [
        "A 500 Hz siren approaches at 30 m s⁻¹ (v_sound = 340). Observed frequency?",
        "f′ = 500 × 340 / (340 − 30) = 500 × 340/310",
        "f′ ≈ **548 Hz**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "For refraction questions, memorise the direction rule: into a slower medium the ray bends *towards* the normal — then λ shrinks but f stays constant.",
    },
  ],
  "ph-l17": [
    {
      type: "warmup",
      prompt: "Does a standing wave on a guitar string transfer energy along the string?",
      answer: "No — it stores energy. The two counter-propagating waves carry energy in opposite directions, netting zero transfer; nodes are still.",
    },
    {
      type: "text",
      body: "Standing waves form when two identical waves travelling in opposite directions superpose — e.g. reflections in a stretched string or an air column. **Nodes** never move; **antinodes** oscillate with maximum amplitude. Only certain wavelengths 'fit': L = nλ/2 for strings and open–open pipes, L = (2n−1)λ/4 for closed pipes.",
    },
    {
      type: "check",
      prompt: "Why does a pipe closed at one end produce only odd harmonics?",
      answer: "The closed end must be a node and the open end an antinode — only wavelengths with L = (2n−1)λ/4 fit, skipping even harmonics.",
    },
    {
      type: "definition",
      term: "Standing (stationary) wave",
      body: "The superposition of two waves of equal frequency and amplitude travelling in opposite directions — energy is stored, not propagated, and amplitude varies with position.",
    },
    {
      type: "formula",
      label: "Harmonics on a fixed string",
      body: "fn = n f1 = nv / (2L);  closed pipe: only odd harmonics",
    },
    {
      type: "text",
      body: "Neighbouring nodes are λ/2 apart; node to adjacent antinode is λ/4. Frequency of a mode is set by the wave speed on the string v = √(T/μ).",
    },
    {
      type: "example",
      title: "Third harmonic on a string",
      steps: [
        "A 0.80 m string fixed at both ends has wave speed 240 m s⁻¹. Find the 3rd harmonic frequency.",
        "f1 = v / 2L = 240 / 1.6 = 150 Hz",
        "f3 = 3 × 150 = **450 Hz**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "A closed pipe's fundamental has a node at the closed end and an antinode at the open end — so L = λ/4, not λ/2. Wrong boundary conditions = wrong frequency.",
    },
  ],
  "ph-l18": [
    {
      type: "warmup",
      prompt: "In a double-slit experiment the slits are moved closer together. Do the fringes get closer or further apart?",
      answer: "Further apart — s = λD/d is inversely proportional to slit separation d.",
    },
    {
      type: "text",
      body: "Interference needs **coherent** sources. In Young's double slit, light passing through two close slits produces bright fringes where path difference = nλ and dark fringes at (n + ½)λ. Fringes are evenly spaced: s = λD/d.",
    },
    {
      type: "check",
      prompt: "Why can't you get an interference pattern using two ordinary light bulbs?",
      answer: "They aren't coherent — random phase jumps wash out the pattern; interference needs a constant phase relationship (one source split two ways).",
    },
    {
      type: "definition",
      term: "Path difference",
      body: "The difference in distance travelled by two waves reaching a point. Path difference = nλ gives constructive interference; (n+½)λ gives destructive.",
    },
    {
      type: "definition",
      term: "Diffraction grating",
      body: "Many closely spaced slits producing sharp bright maxima at angles where d sin θ = nλ — used to measure wavelength precisely.",
    },
    {
      type: "formula",
      label: "Interference & diffraction",
      body: "Double slit: s = λD/d;  grating: d sin θ = nλ;  single-slit first minimum: θ ≈ λ/b",
    },
    {
      type: "text",
      body: "Diffraction through a single slit gives a broad central maximum twice as wide as the others. Resolution improves with shorter wavelength — that's why blue light resolves better than red.",
    },
    {
      type: "example",
      title: "Fringe spacing",
      steps: [
        "λ = 600 nm, slits d = 0.20 mm, screen D = 1.5 m. Fringe spacing?",
        "s = λD/d = (6.0 × 10⁻⁷ × 1.5) / 2.0 × 10⁻⁴",
        "s = 4.5 × 10⁻³ m = **4.5 mm**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Watch units: nm and mm must become metres before substituting — convert first, calculate second.",
    },
  ],
  "ph-l19": [
    {
      type: "warmup",
      prompt: "A fish looking up at the surface sees the whole outside world in a cone. What sets the cone's edge?",
      answer: "The critical angle ~48.8°: beyond it, light from air can't refract into water, so the fish sees reflections of the water instead.",
    },
    {
      type: "text",
      body: "Refraction happens because wave speed changes between media. The refractive index n = c/v tells how much light slows down; Snell's law n₁ sin θ₁ = n₂ sin θ₂ tracks the bending. Beyond the critical angle, light inside the denser medium is totally internally reflected.",
    },
    {
      type: "check",
      prompt: "Why does light bend towards the normal entering glass but frequency stays constant?",
      answer: "Speed falls (n > 1) so wavelength shrinks; the wavefronts can't change frequency without breaking continuity across the boundary.",
    },
    {
      type: "definition",
      term: "Refractive index",
      body: "n = c/v, the ratio of the speed of light in a vacuum to its speed in the medium. Also n = sin i / sin r for light entering from air.",
    },
    {
      type: "definition",
      term: "Critical angle",
      body: "The angle of incidence in the denser medium for which the refracted ray travels along the boundary (θ₂ = 90°). sin θc = n₂/n₁ (n₁ > n₂).",
    },
    {
      type: "formula",
      label: "Snell & critical angle",
      body: "n₁ sin θ₁ = n₂ sin θ₂;  sin θc = 1/n (into air)",
    },
    {
      type: "text",
      body: "Total internal reflection keeps optical fibres transmitting light with minimal loss — the same principle behind prism binoculars and 'diamond sparkle'.",
    },
    {
      type: "example",
      title: "Critical angle of water",
      steps: [
        "n_water = 1.33. Find the critical angle to air.",
        "sin θc = 1/1.33 = 0.752",
        "θc = **48.8°**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Angles in Snell's law are always measured to the **normal**, never to the surface — misread angles are the classic lost mark here.",
    },
  ],
  "ph-l8": [
    {
      type: "warmup",
      prompt: "At what height does Earth's gravity halve — 3 000 km, or farther?",
      answer: "Much farther: g ∝ 1/r², so g halves at r = R√2 ≈ 1.41R — about 2 600 km altitude above the surface.",
    },
    {
      type: "text",
      body: "A **field** is a region where an object experiences a force at a distance. Gravitational field strength g = F/m acts on mass; electric field strength E = F/q acts on charge. Both point fields follow inverse-square laws — the mathematics is identical.",
    },
    {
      type: "check",
      prompt: "Why can the electric force between two protons be nonzero while gravity between them is negligible?",
      answer: "The Coulomb constant is ~10³⁶ times larger relative to charge-to-mass scales — the gravitational force on proton masses is fantastically small.",
    },
    {
      type: "definition",
      term: "Field strength",
      body: "Force per unit of the property it acts on: g = F/m (N kg⁻¹) for gravity, E = F/q (N C⁻¹) for charge. Field lines show direction of force on a positive test object.",
    },
    {
      type: "formula",
      label: "Inverse-square laws",
      body: "Fg = GMm/r²;  Fe = kq₁q₂/r² (k = 8.99 × 10⁹);  g = GM/r²;  E = kq/r²",
    },
    {
      type: "text",
      body: "Key difference: gravity is always attractive; electric forces attract or repel depending on signs. Field lines never cross, and their density shows field strength.",
    },
    {
      type: "example",
      title: "Field between two charges",
      steps: [
        "E due to q = 2.0 μC at distance 0.30 m.",
        "E = kq/r² = 8.99 × 10⁹ × 2.0 × 10⁻⁶ / 0.09",
        "E ≈ **2.0 × 10⁵ N C⁻¹** away from the charge",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Fields add as vectors — for two-source problems compute each field, then add components. Never just add magnitudes unless they're parallel.",
    },
  ],
  "ph-l9": [
    {
      type: "warmup",
      prompt: "You drop a magnet through a copper pipe and it falls slowly. What slows it — magnetic attraction to the pipe?",
      answer: "No — induced eddy currents in the pipe create fields opposing the motion (Lenz's law), dissipating energy as heat.",
    },
    {
      type: "text",
      body: "Electromagnetic induction: a changing magnetic flux linkage induces an emf. **Faraday's law** gives the size (ε = −NΔΦ/Δt); **Lenz's law** gives the direction — the induced effect always opposes the change that made it, which is just energy conservation in disguise.",
    },
    {
      type: "check",
      prompt: "Why does Lenz's law follow directly from energy conservation?",
      answer: "If the induced effect aided the change, you'd get accelerating change for free — a perpetual-energy machine; opposition is the only option consistent with conservation.",
    },
    {
      type: "definition",
      term: "Magnetic flux",
      body: "Φ = BA cos θ — the field 'through' a loop, in webers. Flux linkage = NΦ for N turns.",
    },
    {
      type: "definition",
      term: "Lenz's law",
      body: "An induced emf or current acts so as to oppose the change producing it — e.g. a magnet falling through a coil is repelled as it enters and attracted as it leaves.",
    },
    {
      type: "formula",
      label: "Faraday & motional emf",
      body: "ε = −N ΔΦ/Δt;  motional: ε = Bvl",
    },
    {
      type: "text",
      body: "Three ways to change flux: change B (move a magnet), change A (deform the loop), or change θ (rotate the coil — the basis of generators).",
    },
    {
      type: "example",
      title: "Induced emf",
      steps: [
        "A 50-turn coil's flux changes by 0.02 Wb in 0.10 s.",
        "ε = N ΔΦ/Δt = 50 × 0.02 / 0.10",
        "ε = **10 V**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Lenz's law questions are direction questions: state 'the induced current creates a field opposing the incoming flux' — never 'opposes the field' itself.",
    },
  ],
  "ph-l20": [
    {
      type: "warmup",
      prompt: "Two charges, +q and −q, sit 1 cm apart. If you double the separation, what happens to the force between them?",
      answer: "It quarters — Coulomb's law is inverse-square: F ∝ 1/r².",
    },
    {
      type: "text",
      body: "Coulomb's law gives the force between point charges: F = kq₁q₂/r². Electric field E = F/q then describes the force-per-charge at any point — useful because the field exists whether or not a test charge is present. Between parallel plates the field is uniform: E = V/d.",
    },
    {
      type: "check",
      prompt: "Why is the field between parallel plates uniform while a point charge's field isn't?",
      answer: "Each plate contributes equally everywhere in the gap — contributions sum to a constant; a point charge's influence spreads spherically, diluting with r².",
    },
    {
      type: "definition",
      term: "Coulomb's law",
      body: "The force between two point charges is proportional to the product of the charges and inversely proportional to the square of their separation, k = 8.99 × 10⁹ N m² C⁻².",
    },
    {
      type: "definition",
      term: "Electric potential difference",
      body: "Work done per unit charge moving between two points, V = W/q in volts. A charge q gaining/losing energy through voltage V changes KE by qV.",
    },
    {
      type: "formula",
      label: "Field and energy",
      body: "F = kq₁q₂/r²;  E = F/q = kq/r²;  E = V/d;  ΔEk = qV",
    },
    {
      type: "text",
      body: "Field lines go from + to −; equipotentials are perpendicular to field lines. A charge accelerates along field lines only if free to move — in uniform fields it follows a parabolic path, just like projectile motion.",
    },
    {
      type: "example",
      title: "Electron accelerated",
      steps: [
        "An electron (e = 1.6 × 10⁻¹⁹ C, m = 9.11 × 10⁻³¹ kg) accelerated through 200 V from rest. Speed?",
        "eV = ½mv² → 3.2 × 10⁻¹⁷ = ½ × 9.11 × 10⁻³¹ v²",
        "v² = 7.03 × 10¹³ → v ≈ **8.4 × 10⁶ m s⁻¹**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Parallel-plate questions: E is uniform and equals V/d — drop the 'uniform' word in your explanation and you lose the reasoning mark.",
    },
  ],
  "ph-l21": [
    {
      type: "warmup",
      prompt: "Your phone battery reads 1.5 V idle but drops to 1.2 V under load. What explains the drop?",
      answer: "Internal resistance: terminal p.d. V = ε − Ir falls as current increases — the missing volts are dropped inside the battery.",
    },
    {
      type: "text",
      body: "Circuit analysis runs on three pillars: Ohm's law (V = IR), Kirchhoff's junction rule (current in = current out — charge conservation) and loop rule (emf gains = p.d. drops — energy conservation). Series resistors add; parallel resistors add as reciprocals.",
    },
    {
      type: "check",
      prompt: "Why do appliances in your home run in parallel rather than series?",
      answer: "Parallel gives each device the full supply voltage and keeps the others working if one breaks; series would split voltage and chain failures.",
    },
    {
      type: "definition",
      term: "emf and internal resistance",
      body: "emf ε is the total energy per charge the source supplies; internal resistance r wastes some of it internally, so terminal p.d. V = ε − Ir falls as current rises.",
    },
    {
      type: "formula",
      label: "Circuit toolkit",
      body: "V = IR;  Rs = R₁+R₂ (series);  1/Rp = 1/R₁+1/R₂ (parallel);  P = IV = I²R = V²/R;  V = ε − Ir",
    },
    {
      type: "text",
      body: "Potential dividers split voltage in proportion to resistance: Vout = Vin × R₂/(R₁+R₂). An LDR or thermistor in a divider makes a sensor circuit — classic exam setup.",
    },
    {
      type: "example",
      title: "Internal resistance",
      steps: [
        "A cell of emf 1.5 V supplies 0.50 A at terminal p.d. 1.4 V. Find r.",
        "V = ε − Ir → 1.4 = 1.5 − 0.50r",
        "r = 0.1/0.5 = **0.20 Ω**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Finding I first, then V = ε − Ir is almost always the shortest path through internal-resistance questions — don't try to solve for r directly.",
    },
  ],
  "ph-l22": [
    {
      type: "warmup",
      prompt: "A charged particle circling in a magnetic field gains speed. True or false?",
      answer: "False — the magnetic force is always perpendicular to velocity, does zero work, and only changes direction, never speed.",
    },
    {
      type: "text",
      body: "A moving charge in a magnetic field feels a force F = qvB sin θ perpendicular to both velocity and field — hence circular paths. A current-carrying wire feels F = BIl sin θ. Directions come from **Fleming's left-hand rule** (conventional current, positive charges).",
    },
    {
      type: "check",
      prompt: "Why does the radius of a charged particle's circular path grow if its speed increases?",
      answer: "r = mv/qB — faster particles need a wider circle for the same force to supply enough centripetal acceleration.",
    },
    {
      type: "definition",
      term: "Magnetic flux density B",
      body: "The strength of a magnetic field in tesla; 1 T is the field exerting 1 N on a 1 m wire carrying 1 A perpendicular to it.",
    },
    {
      type: "formula",
      label: "Magnetic forces",
      body: "F = BIl sin θ (wire);  F = qvB sin θ (charge);  circular path: r = mv/qB",
    },
    {
      type: "text",
      body: "Because the magnetic force is always perpendicular to velocity it does **no work** — it changes direction, never speed. That's why charged particles circle rather than speed up.",
    },
    {
      type: "example",
      title: "Electron in a field",
      steps: [
        "An electron moves at 2.0 × 10⁷ m s⁻¹ perpendicular to B = 0.50 mT. Radius of its path?",
        "r = mv / qB = (9.11 × 10⁻³¹ × 2.0 × 10⁷) / (1.6 × 10⁻¹⁹ × 5.0 × 10⁻⁴)",
        "r ≈ **0.23 m**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "For electrons and other negative particles, Fleming's left hand gives the opposite direction — reverse the force you read off.",
    },
  ],
  "ph-l10": [
    {
      type: "warmup",
      prompt: "Which decay reduces a nucleus's mass number by 4: alpha, beta or gamma?",
      answer: "Alpha — the emitted particle is a helium nucleus (2p + 2n), removing 4 mass units; beta changes Z only, gamma neither.",
    },
    {
      type: "text",
      body: "Radioactive decay is a spontaneous, random nuclear transformation. Alpha (α = ⁴He nucleus) is heavy and stopped by paper; beta (β = electron) penetrates a few mm of aluminium; gamma (γ = photon) needs thick lead. Each decay type rewrites the parent nucleus differently — track proton and mass numbers to find products.",
    },
    {
      type: "check",
      prompt: "Why is radioactive decay described as 'random but predictable'?",
      answer: "Each nucleus's decay time is genuinely random, but huge populations make the aggregate half-life statistically reliable.",
    },
    {
      type: "definition",
      term: "Activity and half-life",
      body: "Activity A is the number of decays per second (Bq). Half-life T½ is the time for half the undecayed nuclei (or activity) to halve — constant for each isotope.",
    },
    {
      type: "formula",
      label: "Decay law",
      body: "N = N₀e^(−λt);  A = λN;  λ = ln2 / T½",
    },
    {
      type: "text",
      body: "Fission splits a heavy nucleus into lighter fragments plus neutrons — chain reactions fuel reactors and weapons. Fusion joins light nuclei — it powers stars and needs extreme temperatures to overcome Coulomb repulsion.",
    },
    {
      type: "example",
      title: "Half-life arithmetic",
      steps: [
        "A sample's activity is 800 Bq. T½ = 5 days. Activity after 15 days?",
        "15 days = 3 half-lives → 800 × (½)³",
        "A = **100 Bq**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "In decay equations, mass number A and proton number Z must balance on both sides — check conservation before naming the daughter product.",
    },
  ],
  "ph-l11": [
    {
      type: "warmup",
      prompt: "Brighter UV light ejects more photoelectrons; brighter red light ejects none. What does that show about light?",
      answer: "Light arrives as photons with E = hf — electron energy depends on frequency, not intensity, so light is quantised.",
    },
    {
      type: "text",
      body: "Quantum physics begins where classical predictions fail: light ejects electrons from metals only above a threshold frequency — explained if light arrives in photons of energy E = hf. Relativity follows from two postulates: laws of physics are the same in all inertial frames, and light speed is invariant — giving time dilation and length contraction.",
    },
    {
      type: "check",
      prompt: "Why does instantaneous electron emission rule out the wave model of light?",
      answer: "A wave would need time to deposit enough energy on one electron; instant emission at any intensity means energy arrives in discrete packets.",
    },
    {
      type: "definition",
      term: "Photon",
      body: "A quantum (packet) of electromagnetic energy: E = hf, with Planck's constant h = 6.63 × 10⁻³⁴ J s.",
    },
    {
      type: "definition",
      term: "Work function",
      body: "Φ = hf₀, the minimum energy needed to liberate an electron from a metal surface. Excess photon energy becomes the electron's kinetic energy: Ekmax = hf − Φ.",
    },
    {
      type: "formula",
      label: "Quantum + relativity",
      body: "E = hf;  Ekmax = hf − Φ;  γ = 1/√(1 − v²/c²);  Δt = γΔt₀",
    },
    {
      type: "text",
      body: "Photoelectric evidence for photons: emission is instant, intensity changes electron *number* not their energy, and below f₀ no electrons appear however bright the light.",
    },
    {
      type: "example",
      title: "Stopping a photoelectron",
      steps: [
        "Light of f = 1.0 × 10¹⁵ Hz hits a metal with Φ = 2.0 eV (≈3.2 × 10⁻¹⁹ J). Max KE of electrons?",
        "hf = 6.63 × 10⁻³⁴ × 1.0 × 10¹⁵ = 6.63 × 10⁻¹⁹ J",
        "Ekmax = 6.63 − 3.2 = **3.4 × 10⁻¹⁹ J ≈ 2.1 eV**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Convert eV ↔ joules carefully (1 eV = 1.6 × 10⁻¹⁹ J) — mixing units inside hf − Φ is the standard mistake.",
    },
  ],
  "ph-l23": [
    {
      type: "warmup",
      prompt: "A sample halves its activity in 6 hours. After 18 hours, what fraction of the original activity remains?",
      answer: "⅛ = 12.5% — three half-lives (18/6), and (½)³ = 0.125.",
    },
    {
      type: "text",
      body: "Decay is random per nucleus but statistically smooth in bulk: activity A = λN and the exponential law N = N₀e^(−λt). The decay constant λ is the probability a nucleus decays per second — larger λ, shorter half-life: T½ = ln2/λ.",
    },
    {
      type: "check",
      prompt: "Why can't you predict when a single nucleus will decay, yet date a fossil precisely?",
      answer: "Decay is quantum-random per nucleus, but the law of large numbers makes the aggregate rate constant — fossils contain enormous numbers of nuclei.",
    },
    {
      type: "definition",
      term: "Decay constant λ",
      body: "The probability per unit time that a nucleus will decay, in s⁻¹. Relates activity to undecayed nuclei: A = λN.",
    },
    {
      type: "formula",
      label: "Everything decay",
      body: "N = N₀e^(−λt);  A = A₀e^(−λt);  A = λN;  T½ = 0.693/λ",
    },
    {
      type: "text",
      body: "Carbon dating uses ¹⁴C (T½ = 5730 y): living things keep a constant ¹⁴C level, and after death the activity decays — comparing current activity to the living rate gives the age.",
    },
    {
      type: "example",
      title: "Finding λ and the remaining fraction",
      steps: [
        "T½ = 8 days. What fraction remains after 24 days?",
        "24 days = 3 half-lives → (½)³ = 0.125",
        "Or via λ: λ = 0.693/8 = 0.0866 d⁻¹; e^(−0.0866×24) = e^(−2.08) = 0.125 → **12.5%**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "Half-life problems are easiest counted in half-lives where possible; reach for e^(−λt) only when t isn't a clean multiple of T½.",
    },
  ],
  "ph-l24": [
    {
      type: "warmup",
      prompt: "Why do photoelectrons stop completely below a threshold frequency, however bright the light?",
      answer: "Each photon carries hf — below f₀ a single photon has less than the work function, and photons don't combine.",
    },
    {
      type: "text",
      body: "The photoelectric effect — electrons ejected only above a threshold frequency — proves light is quantised. Energy-level quantisation explains line spectra: electrons occupy discrete levels, and photons are emitted/absorbed only with energy exactly equal to a level difference: E = hf = ΔE.",
    },
    {
      type: "check",
      prompt: "Why do atoms emit only specific wavelengths instead of a continuous spectrum?",
      answer: "Electron energies are quantised — only transitions between allowed levels are possible, so photon energies are discrete.",
    },
    {
      type: "definition",
      term: "Stopping potential",
      body: "Vs, the reverse voltage that just stops the most energetic photoelectrons: eVs = Ekmax = hf − Φ.",
    },
    {
      type: "formula",
      label: "Photoelectric + levels",
      body: "Ekmax = hf − Φ = eVs;  photon emitted: hf = E₂ − E₁",
    },
    {
      type: "text",
      body: "In the Bohr model, electrons transition between fixed levels — absorption lines appear where photons match upward jumps; emission lines where they drop down. The same level gaps explain why each element's spectrum is a fingerprint.",
    },
    {
      type: "example",
      title: "Stopping potential",
      steps: [
        "Photons of 6.0 × 10⁻¹⁹ J strike metal with Φ = 3.5 × 10⁻¹⁹ J. Find Vs.",
        "Ekmax = 6.0 − 3.5 = 2.5 × 10⁻¹⁹ J",
        "Vs = Ekmax/e = 2.5 × 10⁻¹⁹ / 1.6 × 10⁻¹⁹ = **1.6 V**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "The most negative level (e.g. −13.6 eV for H) is the ground state. Level 'differences', not the values themselves, give photon energies — always subtract.",
    },
  ],
  "ph-l25": [
    {
      type: "warmup",
      prompt: "Both fission and fusion release energy. How can splitting AND joining nuclei both give energy out?",
      answer: "Binding energy per nucleon peaks near iron: splitting heavy nuclei or joining light ones both move products 'up the hill' toward more binding.",
    },
    {
      type: "text",
      body: "Mass and energy are equivalent: E = mc². The mass of a nucleus is less than the sum of its parts — the missing mass is **mass defect**, and the corresponding energy needed to disassemble the nucleus is **binding energy**. Binding energy per nucleon measures stability: it peaks near iron, so both fission (heavy → mid) and fusion (light → mid) release energy.",
    },
    {
      type: "check",
      prompt: "Why is mass defect called a 'defect' if the nucleus isn't broken?",
      answer: "The bound nucleus simply has less mass than its separate parts — the difference left as the binding energy that held it together (E = Δmc²).",
    },
    {
      type: "definition",
      term: "Binding energy",
      body: "The energy required to separate a nucleus completely into its constituent nucleons — equivalently the energy released when the nucleus forms from them. Per nucleon ≈ 8 MeV near iron-56.",
    },
    {
      type: "formula",
      label: "Mass–energy",
      body: "E = mc²;  mass defect Δm → ΔE = Δm c²;  1 u = 931.5 MeV/c²",
    },
    {
      type: "text",
      body: "In fission a neutron splits a heavy nucleus like ²³⁵U into fragments + 2–3 neutrons, releasing ~200 MeV. Fusion of light nuclei (e.g. two hydrogen isotopes → helium) releases energy because the product sits higher on the binding-energy-per-nucleon curve.",
    },
    {
      type: "example",
      title: "Mass defect to energy",
      steps: [
        "A nuclear reaction has mass defect 0.20 u. Energy released?",
        "ΔE = 0.20 × 931.5 MeV",
        "ΔE = **186 MeV**",
      ],
      blank: 1,
    },
    {
      type: "tip",
      body: "The binding-energy-per-nucleon graph is the exam workhorse: energy is released whenever products have HIGHER binding energy per nucleon — a bigger binding energy means a more stable, less massive product.",
    },
  ],
};
