import type { Subject } from "../types";

export const psychology: Subject = {
  slug: "psychology",
  name: "Psychology",
  short: "Psych",
  color: "#DB2777",
  emoji: "🧠",
  group: "Individuals and societies",
  levels: ["SL", "HL"],
  description:
    "Biological, cognitive and sociocultural approaches to behaviour, research methods and the abnormal psychology option.",
  syllabusUrl: "https://www.ibo.org/programmes/diploma-programme/curriculum/individuals-and-societies/",
  units: [
    {
      id: "ps-u1",
      code: "Approach 1",
      title: "Biological approach to behaviour",
      lessons: [
        {
          id: "ps-l1",
          title: "Neurons, brain and body",
          questions: [
            {
              id: "ps-l1-q1",
              type: "mcq",
              prompt:
                "Neurotransmitters cross the synapse and",
              choices: [
                "stay in the receiving neuron",
                "bind to receptor sites, exciting or inhibiting the next neuron",
                "destroy the synapse",
                "become hormones",
              ],
              answerIndex: 1,
              explanation:
                "They bind postsynaptic receptors; reuptake/enzymes then clear the gap.",
            },
            {
              id: "ps-l1-q2",
              type: "mcq",
              prompt:
                "Localisation of function is best evidenced by",
              choices: [
                "Freud's case studies",
                "Phineas Gage's personality change after frontal lobe damage",
                "the Milgram experiment",
                "Pavlov's dogs",
              ],
              answerIndex: 1,
              explanation:
                "Focal brain damage changing behaviour supports specific regions having specific functions.",
            },
            {
              id: "ps-l1-q3",
              type: "mcq",
              prompt:
                "Cortisol is released by the adrenal glands in response to",
              choices: ["hunger", "stress", "sleep", "pleasure"],
              answerIndex: 1,
              explanation:
                "The main stress hormone — part of the HPA-axis response.",
            },
            {
              id: "ps-l1-q4",
              type: "tf",
              prompt:
                "Neuroplasticity means the brain's structure is fixed by early adulthood.",
              answer: false,
              explanation:
                "Plasticity = the brain reorganises connections through experience — e.g. Maguire's taxi drivers' hippocampi.",
            },
            {
              id: "ps-l1-q5",
              type: "short",
              prompt:
                "Describe Maguire et al.'s (2000) taxi driver study and what it showed.",
              answer:
                "London taxi drivers had larger posterior hippocampi than controls, suggesting navigation experience alters brain structure.",
              keywords: ["hippocamp", "taxi", "larger", "plastic", "experience"],
              explanation:
                "Evidence for neuroplasticity — 'The Knowledge' correlated with hippocampal volume.",
            },
            {
              id: "ps-l1-q6",
              type: "short",
              prompt:
                "Explain one limitation of using animal studies (e.g. Martinez & Kesner) to infer human memory processes.",
              answer:
                "Animal neurochemistry differs; results may not generalise to complex human cognition.",
              keywords: ["general", "differ", "human", "species"],
              explanation:
                "Species differences + ethical constraints limit extrapolation to humans.",
            },
          ],
        },
        {
          id: "ps-l2",
          title: "Genetics and evolution",
          questions: [
            {
              id: "ps-l2-q1",
              type: "mcq",
              prompt:
                "Twin studies estimate heritability by comparing",
              choices: [
                "adoptive and biological parents",
                "concordance rates between MZ and DZ twins",
                "twin and non-twin heights",
                "genetic sequences",
              ],
              answerIndex: 1,
              explanation:
                "Identical (MZ) vs fraternal (DZ) concordance isolates genetic contribution.",
            },
            {
              id: "ps-l2-q2",
              type: "mcq",
              prompt:
                "An evolutionary explanation of behaviour assumes adaptive traits persist because they",
              choices: [
                "feel good",
                "increased survival or reproductive success",
                "are conscious",
                "are learned",
              ],
              answerIndex: 1,
              explanation:
                "Natural/sexual selection favours traits conferring fitness advantages.",
            },
            {
              id: "ps-l2-q3",
              type: "mcq",
              prompt:
                "Caspi et al. (2003) found the 5-HTT gene variant predicted depression only when combined with",
              choices: [
                "high IQ",
                "stressful life events — a gene–environment interaction",
                "poor diet",
                "older age",
              ],
              answerIndex: 1,
              explanation:
                "Classic G×E interaction: the gene alone didn't cause depression.",
            },
            {
              id: "ps-l2-q4",
              type: "tf",
              prompt:
                "A high heritability estimate for a trait means the trait is unchangeable.",
              answer: false,
              explanation:
                "Heritability is a population statistic about variation, not determinism — environment still matters.",
            },
            {
              id: "ps-l2-q5",
              type: "short",
              prompt:
                "Define concordance rate in twin research.",
              answer:
                "The probability/proportion that both twins share a trait if one has it.",
              keywords: ["both", "twins", "share", "trait", "proportion"],
              explanation:
                "Higher MZ than DZ concordance suggests a genetic contribution.",
            },
            {
              id: "ps-l2-q6",
              type: "short",
              prompt:
                "Give one strength and one limitation of the biological approach.",
              answer:
                "Strength: scientific, measurable methods (fMRI, genetics). Limitation: reductionist — ignores cognition/context.",
              keywords: ["scientific", "reduction", "measurable", "determin"],
              explanation:
                "Objective evidence vs risk of biological reductionism/determinism.",
            },
          ],
        },
        {
          id: "ps-l13",
          title: "Localisation and plasticity: HM, Milner, Maguire",
          questions: [
            {
              id: "ps-l13-q1",
              type: "mcq",
              prompt: "Patient HM's case showed that",
              choices: [
                "memory is one system",
                "removing the hippocampus impaired new long-term memories while procedural memory survived",
                "language lives in the amygdala",
                "the brain can't change",
              ],
              answerIndex: 1,
              explanation:
                "Milner's studies of HM distinguished declarative from procedural memory.",
            },
            {
              id: "ps-l13-q2",
              type: "mcq",
              prompt: "Maguire's taxi-driver study found",
              choices: [
                "no brain differences",
                "larger posterior hippocampi in London cabbies — evidence of plasticity",
                "smaller brains",
                "damage to the frontal lobe",
              ],
              answerIndex: 1,
              explanation:
                "Years of 'the Knowledge' reshaped the hippocampus — neuroplasticity.",
            },
            {
              id: "ps-l13-q3",
              type: "tf",
              prompt:
                "A limitation of case studies like HM is that findings from one unusual brain may not generalise.",
              answer: true,
              explanation:
                "N=1 cases give rich detail but weak generalisability.",
            },
            {
              id: "ps-l13-q4",
              type: "mcq",
              prompt: "Brenda Milner contributed to psychology by",
              choices: [
                "inventing fMRI",
                "demonstrating multiple memory systems through HM's preserved procedural learning",
                "discovering DNA",
                "training rats",
              ],
              answerIndex: 1,
              explanation:
                "HM improved at mirror-drawing he couldn't remember practising — different memory systems.",
            },
            {
              id: "ps-l13-q5",
              type: "short",
              prompt:
                "The brain's ability to reorganise after experience or injury is called ___.",
              answer: "neuroplasticity",
              keywords: ["plastic"],
              acceptable: ["plasticity", "brain plasticity"],
              explanation:
                "Neuroplasticity — Maguire's key concept.",
            },
            {
              id: "ps-l13-q6",
              type: "short",
              prompt:
                "The brain structure critical for forming new declarative memories, removed in HM: the ___.",
              answer: "hippocampus",
              keywords: ["hippocamp"],
              acceptable: ["hippocampus"],
              explanation:
                "Bilateral hippocampectomy left HM with anterograde amnesia.",
            },
          ],
        },
        {
          id: "ps-l14",
          title: "Hormones, pheromones and the environment: Antonova, Newcomer, Rosenzweig",
          questions: [
            {
              id: "ps-l14-q1",
              type: "mcq",
              prompt: "Rosenzweig's rat studies showed that",
              choices: [
                "genes fix brain size",
                "enriched environments produce heavier cortexes — environment shapes the brain",
                "isolation improves learning",
                "rats can't learn",
              ],
              answerIndex: 1,
              explanation:
                "Enriched vs deprived cages → measurable cortical differences.",
            },
            {
              id: "ps-l14-q2",
              type: "mcq",
              prompt: "Newcomer et al. investigated cortisol and found high doses",
              choices: [
                "improved memory",
                "impaired verbal declarative memory — stress hormones affect recall",
                "had no effect",
                "cured amnesia",
              ],
              answerIndex: 1,
              explanation:
                "Supports the role of cortisol in stress-related memory problems.",
            },
            {
              id: "ps-l14-q3",
              type: "tf",
              prompt:
                "Antonova et al. found that scopolamine, which blocks acetylcholine, impaired spatial memory in a virtual-reality task.",
              answer: true,
              explanation:
                "Supports the role of acetylcholine in spatial memory formation.",
            },
            {
              id: "ps-l14-q4",
              type: "mcq",
              prompt: "A strength of hormone studies using drug administration is",
              choices: [
                "no control",
                "experimental control allows cause-effect claims",
                "large natural samples",
                "no ethics issues",
              ],
              answerIndex: 1,
              explanation:
                "Controlled manipulation = stronger causal inference.",
            },
            {
              id: "ps-l14-q5",
              type: "short",
              prompt:
                "The neurotransmitter linked to memory that Antonova's drug blocked: ___.",
              answer: "acetylcholine",
              keywords: ["acetylcholine"],
              acceptable: ["acetylcholine", "ACh"],
              explanation:
                "Scopolamine antagonises acetylcholine receptors.",
            },
            {
              id: "ps-l14-q6",
              type: "short",
              prompt:
                "The stress hormone studied by Newcomer: ___.",
              answer: "cortisol",
              keywords: ["cortisol"],
              acceptable: ["cortisol"],
              explanation:
                "Cortisol — released by the adrenal cortex under stress.",
            },
          ],
        },
        {
          id: "ps-l15",
          title: "Genetics, evolution and the biological approach evaluation",
          questions: [
            {
              id: "ps-l15-q1",
              type: "mcq",
              prompt: "Twin studies estimate heritability by comparing",
              choices: [
                "random strangers",
                "concordance in identical (MZ) vs fraternal (DZ) twins",
                "parents and children only",
                "siblings' ages",
              ],
              answerIndex: 1,
              explanation:
                "Higher MZ concordance suggests genetic contribution.",
            },
            {
              id: "ps-l15-q2",
              type: "mcq",
              prompt: "Caspi et al. (2003) showed that",
              choices: [
                "genes alone cause depression",
                "a serotonin-transporter gene variant interacts with stressful life events to predict depression",
                "serotonin cures depression",
                "environment doesn't matter",
              ],
              answerIndex: 1,
              explanation:
                "A classic gene × environment interaction study.",
            },
            {
              id: "ps-l15-q3",
              type: "tf",
              prompt:
                "A criticism of the biological approach is that it is reductionist — it simplifies complex behaviour to biology.",
              answer: true,
              explanation:
                "Ignores cognition and culture — a standard evaluation.",
            },
            {
              id: "ps-l15-q4",
              type: "mcq",
              prompt: "Evolutionary explanations argue behaviours persist because they",
              choices: [
                "feel good",
                "improved survival or reproductive success",
                "are fashionable",
                "are taught",
              ],
              answerIndex: 1,
              explanation:
                "Adaptive traits are selected for across generations.",
            },
            {
              id: "ps-l15-q5",
              type: "short",
              prompt:
                "The percentage of genes identical twins share (number).",
              answer: "100",
              keywords: ["100"],
              acceptable: ["100%"],
              explanation:
                "MZ twins share ~100%; DZ share ~50%.",
            },
            {
              id: "ps-l15-q6",
              type: "short",
              prompt:
                "Name ONE strength of the biological approach.",
              answer: "it is scientific / testable",
              keywords: ["scientific", "testable", "objective", "measurable", "falsif"],
              acceptable: ["scientific", "objective and measurable"],
              explanation:
                "Empirical, falsifiable, uses brain imaging and controlled experiments.",
            },
          ],
        },
      ],
    },
    {
      id: "ps-u2",
      code: "Approach 2",
      title: "Cognitive approach to behaviour",
      lessons: [
        {
          id: "ps-l3",
          title: "Memory models and reliability",
          questions: [
            {
              id: "ps-l3-q1",
              type: "mcq",
              prompt:
                "The multi-store model proposes memory flows through",
              choices: [
                "one store only",
                "sensory → short-term → long-term stores",
                "episodic then semantic",
                "working then implicit",
              ],
              answerIndex: 1,
              explanation:
                "Atkinson & Shiffrin (1968): three stores linked by attention and rehearsal.",
            },
            {
              id: "ps-l3-q2",
              type: "mcq",
              prompt:
                "The working memory model's 'central executive'",
              choices: [
                "stores images",
                "allocates attention between the slave systems",
                "creates long-term memories",
                "processes emotions",
              ],
              answerIndex: 1,
              explanation:
                "Baddeley & Hitch: it directs the phonological loop, visuospatial sketchpad (and later episodic buffer).",
            },
            {
              id: "ps-l3-q3",
              type: "mcq",
              prompt:
                "Loftus & Palmer (1974) showed that the verb 'smashed' vs 'contacted' altered",
              choices: [
                "hearing",
                "participants' speed estimates — showing memory is reconstructive",
                "reaction times",
                "attention",
              ],
              answerIndex: 1,
              explanation:
                "Leading questions distorted recall — memory isn't a video recording.",
            },
            {
              id: "ps-l3-q4",
              type: "tf",
              prompt:
                "Schema theory claims memory is an accurate copy of events stored like files.",
              answer: false,
              explanation:
                "Schemas organise knowledge but cause distortions — memory is reconstructed.",
            },
            {
              id: "ps-l3-q5",
              type: "short",
              prompt:
                "Define 'reconstructive memory' and name one study supporting it.",
              answer:
                "Memory actively rebuilt using schemas/expectations; e.g. Loftus & Palmer or Bartlett's War of the Ghosts.",
              keywords: ["reconstruct", "schema", "loftus", "bartlett"],
              explanation:
                "Gaps filled by expectations → reliable-looking but altered memories.",
            },
            {
              id: "ps-l3-q6",
              type: "short",
              prompt:
                "Explain one implication of memory unreliability for eyewitness testimony.",
              answer:
                "Leading questions and post-event information can distort testimony, risking miscarriages of justice.",
              keywords: ["leading", "distort", "testimony", "justice"],
              explanation:
                "Courts should treat eyewitness accounts cautiously — e.g. interview technique matters.",
            },
          ],
        },
        {
          id: "ps-l4",
          title: "Thinking and decision-making",
          questions: [
            {
              id: "ps-l4-q1",
              type: "mcq",
              prompt:
                "Kahneman's dual-process theory contrasts",
              choices: [
                "left and right brain",
                "fast intuitive System 1 with slow deliberate System 2",
                "conscious and unconscious drives",
                "emotion and memory",
              ],
              answerIndex: 1,
              explanation:
                "System 1: automatic, heuristic; System 2: controlled, effortful.",
            },
            {
              id: "ps-l4-q2",
              type: "mcq",
              prompt:
                "The availability heuristic leads people to",
              choices: [
                "judge probability by how easily examples come to mind",
                "always be correct",
                "ignore vivid events",
                "weigh all evidence equally",
              ],
              answerIndex: 0,
              explanation:
                "Vivid/recent events seem more likely — e.g. fearing flying more than driving.",
            },
            {
              id: "ps-l4-q3",
              type: "mcq",
              prompt:
                "Anchoring bias occurs when",
              choices: [
                "people ignore the first number",
                "an initial value unduly influences subsequent estimates",
                "choices are always rational",
                "memory fails",
              ],
              answerIndex: 1,
              explanation:
                "Tversky & Kahneman: estimates cluster around an arbitrary starting anchor.",
            },
            {
              id: "ps-l4-q4",
              type: "tf",
              prompt:
                "Framing the same outcome as a loss rather than a gain can change people's decisions.",
              answer: true,
              explanation:
                "Prospect theory: losses loom larger than gains — framing shifts choices.",
            },
            {
              id: "ps-l4-q5",
              type: "short",
              prompt:
                "Describe the representativeness heuristic and give one example.",
              answer:
                "Judging probability by similarity to a stereotype — e.g. assuming a quiet bookish person is a librarian not a farmer.",
              keywords: ["stereotype", "similar", "probability", "librarian"],
              explanation:
                "Ignores base rates; classic librarian/farmer problem.",
            },
            {
              id: "ps-l4-q6",
              type: "short",
              prompt:
                "Explain why heuristics are both useful and risky.",
              answer:
                "They save cognitive effort and work often, but produce systematic biases.",
              keywords: ["fast", "effort", "bias", "efficient", "error"],
              explanation:
                "System 1 shortcuts trade accuracy for speed — usually fine, sometimes costly.",
            },
          ],
        },
        {
          id: "ps-l16",
          title: "Reconstructive memory: Loftus & Palmer, Bartlett",
          questions: [
            {
              id: "ps-l16-q1",
              type: "mcq",
              prompt: "Loftus & Palmer (1974) showed that",
              choices: [
                "memory is perfect",
                "the verb used in a question ('smashed' vs 'hit') changed speed estimates and later memory of glass",
                "people lie",
                "videos are unreliable",
              ],
              answerIndex: 1,
              explanation:
                "Leading questions distort memory — eyewitnesses are reconstructive.",
            },
            {
              id: "ps-l16-q2",
              type: "mcq",
              prompt: "Bartlett's 'War of the Ghosts' study demonstrated",
              choices: [
                "photographic memory",
                "reconstructive memory shaped by cultural schemas",
                "short-term memory capacity",
                "forgetting curves",
              ],
              answerIndex: 1,
              explanation:
                "Participants reshaped an unfamiliar story to fit their schemas.",
            },
            {
              id: "ps-l16-q3",
              type: "tf",
              prompt:
                "Schema theory says memory is actively rebuilt using prior knowledge — not replayed like a recording.",
              answer: true,
              explanation:
                "Reconstruction explains both efficiency and error.",
            },
            {
              id: "ps-l16-q4",
              type: "mcq",
              prompt: "A strength of Loftus & Palmer's experiments is",
              choices: [
                "high ecological validity",
                "controlled manipulation allowing cause-effect conclusions",
                "large scale",
                "real crashes",
              ],
              answerIndex: 1,
              explanation:
                "Lab control = strong internal validity; artificial stimuli = the trade-off.",
            },
            {
              id: "ps-l16-q5",
              type: "short",
              prompt:
                "The mental framework organising knowledge and guiding reconstruction = a ___.",
              answer: "schema",
              keywords: ["schema"],
              acceptable: ["schema", "schemata"],
              explanation:
                "Schemas fill gaps and distort recall.",
            },
            {
              id: "ps-l16-q6",
              type: "short",
              prompt:
                "In Loftus & Palmer, 'smashed' produced estimates around ___ mph (nearest 5).",
              answer: "41",
              keywords: ["41", "40"],
              acceptable: ["40", "40.8", "41"],
              explanation:
                "~40.8 mph vs ~34 for 'contacted' — wording shifted estimates.",
            },
          ],
        },
        {
          id: "ps-l17",
          title: "Flashbulb memory: Brown & Kulik, Kulkofsky",
          questions: [
            {
              id: "ps-l17-q1",
              type: "mcq",
              prompt: "Brown & Kulik (1977) proposed flashbulb memories are",
              choices: [
                "always accurate",
                "vivid memories of learning about shocking events",
                "photographic",
                "short-term",
              ],
              answerIndex: 1,
              explanation:
                "Special mechanism claimed for surprising, consequential events.",
            },
            {
              id: "ps-l17-q2",
              type: "mcq",
              prompt: "Later research found flashbulb memories",
              choices: [
                "are immune to error",
                "feel vivid but still contain inaccuracies over time",
                "don't exist",
                "only occur in children",
              ],
              answerIndex: 1,
              explanation:
                "Confidence ≠ accuracy — key evaluation.",
            },
            {
              id: "ps-l17-q3",
              type: "tf",
              prompt:
                "Kulkofsky et al. found cultural differences in flashbulb memory formation and rehearsal.",
              answer: true,
              explanation:
                "Collectivist vs individualist rehearsal shapes the memories.",
            },
            {
              id: "ps-l17-q4",
              type: "mcq",
              prompt: "Emotion affects memory partly via",
              choices: [
                "the liver",
                "amygdala activation enhancing consolidation",
                "slower thinking",
                "less attention",
              ],
              answerIndex: 1,
              explanation:
                "Amygdala-driven arousal strengthens encoding — a biological link.",
            },
            {
              id: "ps-l17-q5",
              type: "short",
              prompt:
                "Brown & Kulik studied memories of events like JFK's ___ (one word).",
              answer: "assassination",
              keywords: ["assassin", "death", "shooting"],
              acceptable: ["assassination", "death"],
              explanation:
                "JFK's assassination and similar public shocks.",
            },
            {
              id: "ps-l17-q6",
              type: "short",
              prompt:
                "Repeatedly retelling an event strengthens memory via ___.",
              answer: "rehearsal",
              keywords: ["rehearsal", "retelling"],
              acceptable: ["rehearsal"],
              explanation:
                "Rehearsal — and culture shapes how often we rehearse.",
            },
          ],
        },
        {
          id: "ps-l18",
          title: "Thinking, biases and evaluating the cognitive approach",
          questions: [
            {
              id: "ps-l18-q1",
              type: "mcq",
              prompt: "The availability heuristic leads people to",
              choices: [
                "think rationally",
                "judge probability by how easily examples come to mind",
                "use statistics",
                "avoid errors",
              ],
              answerIndex: 1,
              explanation:
                "Vivid events feel more common — a systematic bias.",
            },
            {
              id: "ps-l18-q2",
              type: "mcq",
              prompt: "The anchoring bias means estimates are pulled toward",
              choices: [
                "the truth",
                "an initial reference value",
                "the highest option",
                "the group's view",
              ],
              answerIndex: 1,
              explanation:
                "First numbers anchor later judgements.",
            },
            {
              id: "ps-l18-q3",
              type: "tf",
              prompt:
                "A strength of the cognitive approach is that it uses controlled experiments and produces testable models.",
              answer: true,
              explanation:
                "Scientific method + real-world application (eyewitness testimony).",
            },
            {
              id: "ps-l18-q4",
              type: "mcq",
              prompt: "A limitation of cognitive lab experiments is",
              choices: [
                "no control",
                "artificial tasks may lack ecological validity",
                "they're unethical",
                "no data",
              ],
              answerIndex: 1,
              explanation:
                "Word lists ≠ real memory — a standard evaluation.",
            },
            {
              id: "ps-l18-q5",
              type: "short",
              prompt:
                "The model describing memory as sensory → short-term → long-term stores = the multi-___ model.",
              answer: "store",
              keywords: ["store"],
              acceptable: ["store", "stores"],
              explanation:
                "Atkinson & Shiffrin's multi-store model.",
            },
            {
              id: "ps-l18-q6",
              type: "short",
              prompt:
                "Name ONE real-world application of memory research.",
              answer: "eyewitness testimony",
              keywords: ["eyewitness", "court", "therapy", "education", "interview"],
              acceptable: ["eyewitness testimony", "cognitive interview", "courtroom"],
              explanation:
                "Cognitive interviews, education techniques, therapy.",
            },
          ],
        },
      ],
    },
    {
      id: "ps-u3",
      code: "Approach 3",
      title: "Sociocultural approach to behaviour",
      lessons: [
        {
          id: "ps-l5",
          title: "Groups, identity and conformity",
          questions: [
            {
              id: "ps-l5-q1",
              type: "mcq",
              prompt:
                "Social identity theory proposes that self-esteem partly derives from",
              choices: [
                "genes",
                "membership of in-groups compared with out-groups",
                "childhood attachment",
                "reinforcement",
              ],
              answerIndex: 1,
              explanation:
                "Tajfel: social categorisation → identification → comparison favouring the in-group.",
            },
            {
              id: "ps-l5-q2",
              type: "mcq",
              prompt:
                "Asch's line study (1951) demonstrated",
              choices: [
                "obedience to authority",
                "normative conformity — people agree with an obviously wrong majority",
                "aggression",
                "obedience to a model",
              ],
              answerIndex: 1,
              explanation:
                "~37% conformed to unanimous wrong answers to fit in (normative influence).",
            },
            {
              id: "ps-l5-q3",
              type: "mcq",
              prompt:
                "Tajfel's minimal group experiments showed that",
              choices: [
                "groups need conflict to form",
                "even arbitrary group labels trigger in-group favouritism",
                "children can't discriminate",
                "out-groups are always hated",
              ],
              answerIndex: 1,
              explanation:
                "Random assignment to 'Klee/Kandinsky' groups still produced bias — powerful evidence for SIT.",
            },
            {
              id: "ps-l5-q4",
              type: "tf",
              prompt:
                "Informational social influence occurs when people conform because they believe the group knows better.",
              answer: true,
              explanation:
                "Contrast with normative influence — conforming to be liked/accepted.",
            },
            {
              id: "ps-l5-q5",
              type: "short",
              prompt:
                "Outline one ethical issue with Zimbardo's Stanford Prison Experiment.",
              answer:
                "Lack of protection from psychological harm and questionable right to withdraw (participants were distressed).",
              keywords: ["harm", "distress", "withdraw", "debrief", "consent"],
              explanation:
                "Deception + distress + pressured continuation breached modern ethical guidelines.",
            },
            {
              id: "ps-l5-q6",
              type: "short",
              prompt:
                "Apply social identity theory to explain rivalry between two school sports teams.",
              answer:
                "Students categorise into in-group/out-group, identify with their team, and boost self-esteem via favourable comparison.",
              keywords: ["in-group", "out-group", "identif", "esteem", "comparison"],
              explanation:
                "SIT's three steps produce rivalry even when teams are arbitrary.",
            },
          ],
        },
        {
          id: "ps-l6",
          title: "Culture and stereotypes",
          questions: [
            {
              id: "ps-l6-q1",
              type: "mcq",
              prompt:
                "In psychology, 'culture' refers to",
              choices: [
                "only national differences",
                "shared norms, values and practices learned within a group",
                "genetic heritage",
                "religion only",
              ],
              answerIndex: 1,
              explanation:
                "Learned shared meaning systems — can be national, ethnic or organisational.",
            },
            {
              id: "ps-l6-q2",
              type: "mcq",
              prompt:
                "Berry's acculturation model identifies 'integration' as",
              choices: [
                "abandoning one's culture",
                "maintaining heritage culture while engaging with the new one",
                "avoiding the new culture",
                "losing both cultures",
              ],
              answerIndex: 1,
              explanation:
                "Four strategies: integration, assimilation, separation, marginalisation.",
            },
            {
              id: "ps-l6-q3",
              type: "mcq",
              prompt:
                "Stereotype threat, shown by Steele & Aronson, occurs when",
              choices: [
                "people confirm stereotypes deliberately",
                "awareness of a negative stereotype impairs performance on a relevant task",
                "out-groups are attacked",
                "media reports bias",
              ],
              answerIndex: 1,
              explanation:
                "Anxiety about confirming a group stereotype reduces task performance.",
            },
            {
              id: "ps-l6-q4",
              type: "tf",
              prompt:
                "Individualist cultures tend to emphasise group harmony over personal achievement.",
              answer: false,
              explanation:
                "That's collectivist cultures; individualist cultures prize personal goals and autonomy.",
            },
            {
              id: "ps-l6-q5",
              type: "short",
              prompt:
                "Define 'enculturation'.",
              answer:
                "Learning the norms and values of one's own culture through socialisation.",
              keywords: ["learn", "norm", "value", "own culture", "socialis"],
              explanation:
                "Enculturation = first-culture acquisition; acculturation = adapting to a new culture.",
            },
            {
              id: "ps-l6-q6",
              type: "short",
              prompt:
                "Explain how the 'cognitive miser' view explains stereotype formation.",
              answer:
                "Schemas save cognitive effort — categorising people into groups is efficient but causes generalised biases.",
              keywords: ["schema", "categor", "efficient", "bias", "effort"],
              explanation:
                "Stereotypes are mental shortcuts — fast but error-prone social cognition.",
            },
          ],
        },
        {
          id: "ps-l19",
          title: "Social identity and conformity: Tajfel, Asch",
          questions: [
            {
              id: "ps-l19-q1",
              type: "mcq",
              prompt: "Tajfel's minimal group experiments showed that",
              choices: [
                "groups need conflict",
                "mere categorisation into groups produces in-group favouritism",
                "prejudice needs teaching",
                "boys cooperate",
              ],
              answerIndex: 1,
              explanation:
                "Random groups → discrimination — social identity theory.",
            },
            {
              id: "ps-l19-q2",
              type: "mcq",
              prompt: "Asch's line study found participants conformed on about",
              choices: ["1%", "one third of critical trials", "90%", "never"],
              answerIndex: 1,
              explanation:
                "~37% conformity on unambiguous lines — normative influence.",
            },
            {
              id: "ps-l19-q3",
              type: "tf",
              prompt:
                "Informational social influence means conforming because we believe the group is right (ambiguous situations).",
              answer: true,
              explanation:
                "Normative = to be liked; informational = to be right.",
            },
            {
              id: "ps-l19-q4",
              type: "mcq",
              prompt: "Asch's conformity dropped sharply when",
              choices: [
                "the group grew",
                "one confederate gave the correct answer — breaking unanimity",
                "lines got longer",
                "rewards were offered",
              ],
              answerIndex: 1,
              explanation:
                "A single ally dramatically reduces conformity.",
            },
            {
              id: "ps-l19-q5",
              type: "short",
              prompt:
                "Tajfel: favouring your own group = in-group ___.",
              answer: "favouritism",
              keywords: ["favouritism", "favoritism", "bias"],
              acceptable: ["favoritism", "bias"],
              explanation:
                "In-group favouritism — SIT's key finding.",
            },
            {
              id: "ps-l19-q6",
              type: "short",
              prompt:
                "Conforming to gain approval/avoid rejection = ___ social influence.",
              answer: "normative",
              keywords: ["normative"],
              acceptable: ["normative"],
              explanation:
                "Normative influence — Asch's classic explanation.",
            },
          ],
        },
        {
          id: "ps-l20",
          title: "Learning and culture: Bandura, Berry",
          questions: [
            {
              id: "ps-l20-q1",
              type: "mcq",
              prompt: "Bandura's Bobo doll study showed children",
              choices: [
                "can't imitate",
                "imitated observed adult aggression, especially when it was rewarded",
                "were always aggressive",
                "ignored models",
              ],
              answerIndex: 1,
              explanation:
                "Observational learning — vicarious reinforcement matters.",
            },
            {
              id: "ps-l20-q2",
              type: "mcq",
              prompt: "Social learning theory adds to behaviourism the idea of",
              choices: [
                "genes",
                "vicarious reinforcement — learning by watching consequences for others",
                "punishment only",
                "instinct",
              ],
              answerIndex: 1,
              explanation:
                "Cognitive mediation + observation — beyond simple conditioning.",
            },
            {
              id: "ps-l20-q3",
              type: "tf",
              prompt:
                "Berry's acculturation model includes integration, assimilation, separation and marginalisation.",
              answer: true,
              explanation:
                "Four strategies: keep/lose heritage culture × engage/isolate from host culture.",
            },
            {
              id: "ps-l20-q4",
              type: "mcq",
              prompt: "Berry's 'integration' acculturation strategy means",
              choices: [
                "abandoning your culture",
                "maintaining heritage culture while engaging with the new one",
                "avoiding everyone",
                "returning home",
              ],
              answerIndex: 1,
              explanation:
                "Integration is linked to the best psychological outcomes.",
            },
            {
              id: "ps-l20-q5",
              type: "short",
              prompt:
                "Bandura: learning by watching others = ___ learning (one word).",
              answer: "observational",
              keywords: ["observational", "social", "vicarious"],
              acceptable: ["observational", "social learning", "vicarious"],
              explanation:
                "Observational/social learning.",
            },
            {
              id: "ps-l20-q6",
              type: "short",
              prompt:
                "Berry's acculturation strategy of keeping heritage culture and avoiding the host culture = ___.",
              answer: "separation",
              keywords: ["separation"],
              acceptable: ["separation"],
              explanation:
                "Separation — one of the four strategies.",
            },
          ],
        },
        {
          id: "ps-l21",
          title: "Stereotypes and the sociocultural approach evaluated",
          questions: [
            {
              id: "ps-l21-q1",
              type: "mcq",
              prompt: "A stereotype is best defined as",
              choices: [
                "an accurate description",
                "a schema generalising about a social group",
                "a fact",
                "a personality type",
              ],
              answerIndex: 1,
              explanation:
                "Group schemas simplify but distort social perception.",
            },
            {
              id: "ps-l21-q2",
              type: "mcq",
              prompt: "Stereotype threat occurs when",
              choices: [
                "people feel threatened by strangers",
                "awareness of a group stereotype impairs performance on a related task",
                "stereotypes are discussed",
                "groups compete",
              ],
              answerIndex: 1,
              explanation:
                "e.g. performance drops when a negative group stereotype is salient.",
            },
            {
              id: "ps-l21-q3",
              type: "tf",
              prompt:
                "A strength of the sociocultural approach is that it explains behaviour the biological approach misses — context and culture.",
              answer: true,
              explanation:
                "Complements individual-level explanations.",
            },
            {
              id: "ps-l21-q4",
              type: "mcq",
              prompt: "A limitation of sociocultural research is that",
              choices: [
                "it uses labs",
                "cultural variables are hard to isolate and measure",
                "it is never useful",
                "it ignores groups",
              ],
              answerIndex: 1,
              explanation:
                "'Culture' is complex and operationalising it is difficult.",
            },
            {
              id: "ps-l21-q5",
              type: "short",
              prompt:
                "Stereotypes may become self-fulfilling through a self-fulfilling ___.",
              answer: "prophecy",
              keywords: ["prophecy"],
              acceptable: ["prophecy"],
              explanation:
                "Expectations shape behaviour toward the stereotype.",
            },
            {
              id: "ps-l21-q6",
              type: "short",
              prompt:
                "Name ONE factor that reduces conformity in Asch's studies.",
              answer: "an ally / dissenter",
              keywords: ["ally", "dissent", "unanimity", "private", "task difficulty"],
              acceptable: ["a dissenter", "private responding", "broken unanimity"],
              explanation:
                "An ally, private answers, harder tasks — all reduce conformity.",
            },
          ],
        },
      ],
    },
    {
      id: "ps-u4",
      code: "Methodology",
      title: "Research methods and ethics",
      lessons: [
        {
          id: "ps-l7",
          title: "Experiments, correlations and sampling",
          questions: [
            {
              id: "ps-l7-q1",
              type: "mcq",
              prompt:
                "In an experiment, the dependent variable is",
              choices: [
                "what the researcher manipulates",
                "the measured outcome",
                "the control group",
                "always behaviour",
              ],
              answerIndex: 1,
              explanation:
                "IV is manipulated; DV is measured — the causal test.",
            },
            {
              id: "ps-l7-q2",
              type: "mcq",
              prompt:
                "A correlation of −0.8 indicates",
              choices: [
                "no relationship",
                "a strong negative relationship — but not causation",
                "a causal link",
                "weak positive link",
              ],
              answerIndex: 1,
              explanation:
                "Strong inverse association; direction ≠ causation (third variables possible).",
            },
            {
              id: "ps-l7-q3",
              type: "mcq",
              prompt:
                "Random sampling improves a study's",
              choices: [
                "internal validity",
                "generalisability (population validity)",
                "ethics",
                "reliability only",
              ],
              answerIndex: 1,
              explanation:
                "Unbiased selection lets findings extend to the target population.",
            },
            {
              id: "ps-l7-q4",
              type: "tf",
              prompt:
                "Demand characteristics occur when participants guess the study's aim and alter their behaviour.",
              answer: true,
              explanation:
                "Cues in the study itself can change behaviour, reducing validity.",
            },
            {
              id: "ps-l7-q5",
              type: "short",
              prompt:
                "Give two ethical guidelines researchers must follow in psychological studies.",
              answer:
                "Informed consent and protection from harm (also debriefing, confidentiality, right to withdraw).",
              keywords: ["consent", "harm", "debrief", "confidential", "withdraw"],
              explanation:
                "Any two: consent, debrief, confidentiality, protection, withdrawal rights.",
            },
            {
              id: "ps-l7-q6",
              type: "short",
              prompt:
                "Explain the difference between independent measures and repeated measures designs.",
              answer:
                "Independent: different participants per condition; repeated: same participants in all conditions.",
              keywords: ["different", "same", "participants", "condition"],
              explanation:
                "Independent avoids order effects; repeated controls participant variables.",
            },
          ],
        },
        {
          id: "ps-l8",
          title: "Quantitative methods in detail",
          level: "HL",
          questions: [
            {
              id: "ps-l8-q1",
              type: "mcq",
              prompt:
                "A double-blind procedure controls for",
              choices: [
                "participant attrition",
                "both participant expectations and researcher bias",
                "sampling errors",
                "ethical violations",
              ],
              answerIndex: 1,
              explanation:
                "Neither participants nor experimenters know condition allocation.",
            },
            {
              id: "ps-l8-q2",
              type: "mcq",
              prompt:
                "A p-value of 0.03 means",
              choices: [
                "3% chance the result is true",
                "a 3% probability of observing the data (or more extreme) if the null hypothesis is true",
                "the effect is large",
                "the hypothesis is proven",
              ],
              answerIndex: 1,
              explanation:
                "Below 0.05 → conventionally 'significant' — reject the null.",
            },
            {
              id: "ps-l8-q3",
              type: "mcq",
              prompt:
                "Which test is appropriate for comparing means of two related groups on ranked/ordinal data?",
              choices: [
                "Chi-square",
                "Wilcoxon signed-ranks",
                "Pearson's r",
                "ANOVA only",
              ],
              answerIndex: 1,
              explanation:
                "Non-parametric paired test; Mann-Whitney is the independent-samples equivalent.",
            },
            {
              id: "ps-l8-q4",
              type: "tf",
              prompt:
                "Standard deviation measures the spread of scores around the mean.",
              answer: true,
              explanation:
                "Larger SD = more dispersed data; it's the square root of variance.",
            },
            {
              id: "ps-l8-q5",
              type: "short",
              prompt:
                "Explain when you would use an independent t-test versus a Mann-Whitney U test.",
              answer:
                "t-test for normally distributed interval data; Mann-Whitney for ordinal/non-normal data comparing two independent groups.",
              keywords: ["normal", "interval", "ordinal", "independent"],
              explanation:
                "Parametric vs non-parametric choice depends on data level and distribution.",
            },
            {
              id: "ps-l8-q6",
              type: "short",
              prompt:
                "Define 'Type I error' in hypothesis testing.",
              answer:
                "Rejecting a true null hypothesis — a false positive.",
              keywords: ["false", "null", "reject", "positive"],
              explanation:
                "Saying an effect exists when it doesn't — risk set by alpha level.",
            },
          ],
        },
        {
          id: "ps-l9",
          title: "The psychology IA",
          questions: [
            {
              id: "ps-l9-q1",
              type: "mcq",
              prompt:
                "The psychology IA is best described as",
              choices: [
                "an extended essay",
                "replicating a simple published experiment with a small sample",
                "a questionnaire survey",
                "a literature review",
              ],
              answerIndex: 1,
              explanation:
                "Students replicate a classic experiment, analysing their own data (~1800–2200 words).",
            },
            {
              id: "ps-l9-q2",
              type: "mcq",
              prompt:
                "A null hypothesis for the IA states that",
              choices: [
                "the IV will affect the DV",
                "there is no significant difference/relationship between conditions",
                "the study is unethical",
                "the sample is biased",
              ],
              answerIndex: 1,
              explanation:
                "You test whether results depart from 'no effect' — the H₀.",
            },
            {
              id: "ps-l9-q3",
              type: "mcq",
              prompt:
                "Standardised procedures in the IA are important because they",
              choices: [
                "guarantee significance",
                "make the study replicable and control extraneous variables",
                "increase the sample",
                "avoid statistics",
              ],
              answerIndex: 1,
              explanation:
                "Identical instructions/conditions for all participants → reliability.",
            },
            {
              id: "ps-l9-q4",
              type: "tf",
              prompt:
                "Opportunity sampling is acceptable for the IA but limits generalisability.",
              answer: true,
              explanation:
                "Convenient but biased — a standard IA limitation to discuss.",
            },
            {
              id: "ps-l9-q5",
              type: "short",
              prompt:
                "List three elements required in the IA's method section.",
              answer:
                "Design, participants/sampling, materials and procedure.",
              keywords: ["design", "participant", "material", "procedure"],
              explanation:
                "Enough detail for replication: design, sample, apparatus/materials, step-by-step procedure.",
            },
            {
              id: "ps-l9-q6",
              type: "short",
              prompt:
                "Suggest one improvement you could discuss in the IA evaluation.",
              answer:
                "e.g. Larger, more representative sample or tighter control of an extraneous variable.",
              keywords: ["sample", "control", "variable", "general", "improve"],
              explanation:
                "Link the improvement to a specific weakness you identified.",
            },
          ],
        },
        {
          id: "ps-l22",
          title: "Ethics and evaluating research methods",
          questions: [
            {
              id: "ps-l22-q1",
              type: "mcq",
              prompt: "Informed consent means participants",
              choices: [
                "are paid",
                "agree to take part knowing the study's nature and their rights",
                "are deceived",
                "can't withdraw",
              ],
              answerIndex: 1,
              explanation:
                "Plus the right to withdraw and confidentiality.",
            },
            {
              id: "ps-l22-q2",
              type: "mcq",
              prompt: "Deception is sometimes permitted when",
              choices: [
                "it's convenient",
                "knowledge of aims would change behaviour — if it causes no harm and is followed by debriefing",
                "researchers feel like it",
                "participants are students",
              ],
              answerIndex: 1,
              explanation:
                "Demand characteristics justify deception; debriefing is mandatory.",
            },
            {
              id: "ps-l22-q3",
              type: "tf",
              prompt:
                "Reliability means getting consistent results; validity means measuring what you claim to measure.",
              answer: true,
              explanation:
                "A study can be reliable but invalid — e.g. a biased task given twice.",
            },
            {
              id: "ps-l22-q4",
              type: "mcq",
              prompt: "Opportunity sampling means",
              choices: [
                "random selection",
                "using whoever is available and willing",
                "volunteers from adverts",
                "a balanced design",
              ],
              answerIndex: 1,
              explanation:
                "Easy but unrepresentative — a common IA method.",
            },
            {
              id: "ps-l22-q5",
              type: "short",
              prompt:
                "Participants changing behaviour because they guess the study's aim = ___ characteristics.",
              answer: "demand",
              keywords: ["demand"],
              acceptable: ["demand characteristics"],
              explanation:
                "Demand characteristics threaten validity.",
            },
            {
              id: "ps-l22-q6",
              type: "short",
              prompt:
                "Protecting participants' identity by anonymising data = ___.",
              answer: "confidentiality",
              keywords: ["confidential", "anonym"],
              acceptable: ["confidentiality", "anonymity"],
              explanation:
                "Confidentiality/anonymity — a core ethical protection.",
            },
          ],
        },
        {
          id: "ps-l23",
          title: "HL: qualitative methods and the IA write-up",
          level: "HL",
          questions: [
            {
              id: "ps-l23-q1",
              type: "mcq",
              prompt: "HL: a semi-structured interview",
              choices: [
                "reads a fixed script",
                "uses prepared questions but allows follow-ups and flexibility",
                "has no questions",
                "is quantitative",
              ],
              answerIndex: 1,
              explanation:
                "Balance of comparability and depth.",
            },
            {
              id: "ps-l23-q2",
              type: "mcq",
              prompt: "HL: the purpose of triangulation in qualitative research is",
              choices: [
                "statistics",
                "cross-checking findings from multiple sources/methods for credibility",
                "random sampling",
                "longer interviews",
              ],
              answerIndex: 1,
              explanation:
                "Triangulation strengthens qualitative trustworthiness.",
            },
            {
              id: "ps-l23-q3",
              type: "tf",
              prompt:
                "In the psychology IA you replicate and modify a published study — originality is not required.",
              answer: true,
              explanation:
                "The IA assesses method and analysis, not novelty.",
            },
            {
              id: "ps-l23-q4",
              type: "mcq",
              prompt: "In the IA, descriptive statistics to report include",
              choices: [
                "only raw data",
                "means/medians and measures of spread (range, SD)",
                "p-values only",
                "graphs only",
              ],
              answerIndex: 1,
              explanation:
                "Central tendency + spread before inferential tests.",
            },
            {
              id: "ps-l23-q5",
              type: "short",
              prompt:
                "HL: analysing interview transcripts for recurring themes = ___ analysis (or thematic).",
              answer: "thematic",
              keywords: ["thematic", "content", "inductive"],
              acceptable: ["thematic analysis", "content analysis"],
              explanation:
                "Thematic/inductive content analysis.",
            },
            {
              id: "ps-l23-q6",
              type: "short",
              prompt:
                "The IA section where you justify design, controls and procedures = the ___ section.",
              answer: "method",
              keywords: ["method"],
              acceptable: ["method", "methodology"],
              explanation:
                "Design, participants, materials, procedure, ethics.",
            },
          ],
        },
      ],
    },
    {
      id: "ps-u5",
      code: "Options & HL",
      title: "Abnormal psychology and HL extensions",
      lessons: [
        {
          id: "ps-l10",
          title: "Abnormal psychology: depression",
          questions: [
            {
              id: "ps-l10-q1",
              type: "mcq",
              prompt:
                "A key criterion for diagnosing major depressive disorder is",
              choices: [
                "one sad day",
                "persistent low mood or anhedonia for at least two weeks with functional impairment",
                "hallucinations",
                "anxiety only",
              ],
              answerIndex: 1,
              explanation:
                "DSM-5: ≥2 weeks of depressed mood/loss of interest plus other symptoms.",
            },
            {
              id: "ps-l10-q2",
              type: "mcq",
              prompt:
                "Beck's cognitive theory explains depression through",
              choices: [
                "low serotonin only",
                "negative triad — views of self, world and future",
                "repressed trauma",
                "genetics alone",
              ],
              answerIndex: 1,
              explanation:
                "Dysfunctional schemas produce negative automatic thoughts about self/world/future.",
            },
            {
              id: "ps-l10-q3",
              type: "mcq",
              prompt:
                "Cognitive behavioural therapy (CBT) treats depression by",
              choices: [
                "medication",
                "identifying and restructuring maladaptive thought patterns and behaviours",
                "dream analysis",
                "electroconvulsive therapy",
              ],
              answerIndex: 1,
              explanation:
                "Challenging cognitive distortions + behavioural activation; evidence-based.",
            },
            {
              id: "ps-l10-q4",
              type: "tf",
              prompt:
                "Diagnosis systems like the DSM provide reliability but cannot guarantee validity.",
              answer: true,
              explanation:
                "Consistent diagnosis ≠ measuring the 'true' disorder — comorbidity and cultural bias persist.",
            },
            {
              id: "ps-l10-q5",
              type: "short",
              prompt:
                "Outline one biological explanation of depression.",
              answer:
                "Monoamine hypothesis — low serotonin/norepinephrine activity linked to depressive symptoms, supported by antidepressant effects.",
              keywords: ["serotonin", "monoamine", "neurotransmitter", "genetic"],
              explanation:
                "Neurochemical imbalance (or genetic vulnerability) — supported but correlational.",
            },
            {
              id: "ps-l10-q6",
              type: "short",
              prompt:
                "Explain one ethical consideration in treating depression research participants.",
              answer:
                "Vulnerable participants need protection from harm; confidentiality and right to withdraw are critical.",
              keywords: ["vulnerable", "consent", "harm", "confidential"],
              explanation:
                "Depressed participants are a protected population — consent and welfare need extra care.",
            },
          ],
        },
        {
          id: "ps-l11",
          title: "HL extension: animal research & digital cognition",
          level: "HL",
          questions: [
            {
              id: "ps-l11-q1",
              type: "mcq",
              prompt:
                "The strongest justification for animal research in psychology is",
              choices: [
                "it's cheap",
                "procedures impossible/unethical in humans can reveal fundamental mechanisms",
                "animals have no rights",
                "results always generalise",
              ],
              answerIndex: 1,
              explanation:
                "e.g. lesion studies inform memory/brain models — value depends on validity + ethics.",
            },
            {
              id: "ps-l11-q2",
              type: "mcq",
              prompt:
                "The 'cognitive processing in a digital world' HL topic studies",
              choices: [
                "computer hardware",
                "how digital media/multitasking affects attention, memory and thinking",
                "social media marketing",
                "coding",
              ],
              answerIndex: 1,
              explanation:
                "e.g. media multitasking research on attention and memory performance.",
            },
            {
              id: "ps-l11-q3",
              type: "mcq",
              prompt:
                "Research on heavy media multitaskers (e.g. Ophir et al.) found they",
              choices: [
                "filter distraction better",
                "performed worse on task-switching and filtering irrelevant stimuli",
                "had better memory",
                "were faster readers",
              ],
              answerIndex: 1,
              explanation:
                "Counterintuitive: heavy multitaskers showed poorer cognitive control.",
            },
            {
              id: "ps-l11-q4",
              type: "tf",
              prompt:
                "The 'three Rs' of animal research ethics are replacement, reduction and refinement.",
              answer: true,
              explanation:
                "Replace with alternatives, reduce numbers, refine procedures to minimise suffering.",
            },
            {
              id: "ps-l11-q5",
              type: "short",
              prompt:
                "Evaluate one strength of using animals to study biological mechanisms of behaviour.",
              answer:
                "Controlled experiments (lesions, drugs) reveal causal brain–behaviour links impossible in humans.",
              keywords: ["control", "causal", "experiment", "mechanism"],
              explanation:
                "Causal insight + control — balanced against generalisation limits.",
            },
            {
              id: "ps-l11-q6",
              type: "short",
              prompt:
                "Give one way digital media may reshape attention according to current research.",
              answer:
                "Frequent task-switching/notification checking may weaken sustained attention and deep processing.",
              keywords: ["attention", "switch", "notification", "sustained"],
              explanation:
                "Evidence is correlational — discuss direction of causality in evaluation.",
            },
          ],
        },
        {
          id: "ps-l12",
          title: "HL extension: globalisation and behaviour",
          level: "HL",
          questions: [
            {
              id: "ps-l12-q1",
              type: "mcq",
              prompt:
                "Globalisation's effect on identity is studied through",
              choices: [
                "genetic drift",
                "acculturative stress and identity confusion among migrants and connected youth",
                "IQ scores",
                "brain scans",
              ],
              answerIndex: 1,
              explanation:
                "Research examines how global cultural flows reshape individual and group identity.",
            },
            {
              id: "ps-l12-q2",
              type: "mcq",
              prompt:
                "'Glocalisation' describes",
              choices: [
                "total cultural homogenisation",
                "global influences adapted to local cultures",
                "isolationism",
                "migration only",
              ],
              answerIndex: 1,
              explanation:
                "Local cultures absorb and reshape global products rather than simply replacing traditions.",
            },
            {
              id: "ps-l12-q3",
              type: "mcq",
              prompt:
                "A psychological effect linked to rapid globalisation is",
              choices: [
                "improved wellbeing for all",
                "acculturative stress and identity conflict in some groups",
                "complete cultural loss always",
                "no change",
              ],
              answerIndex: 1,
              explanation:
                "Outcomes vary — some integrate, others experience marginalisation and stress.",
            },
            {
              id: "ps-l12-q4",
              type: "tf",
              prompt:
                "Berry's model predicts 'separation' occurs when people keep heritage culture and avoid the host culture.",
              answer: true,
              explanation:
                "High heritage retention + low host engagement = separation strategy.",
            },
            {
              id: "ps-l12-q5",
              type: "short",
              prompt:
                "Define 'acculturative stress'.",
              answer:
                "The psychological strain of adapting to a new culture, including language barriers and identity conflict.",
              keywords: ["adapt", "strain", "culture", "stress"],
              explanation:
                "Linked to anxiety/depression in migrants — moderated by acculturation strategy and support.",
            },
            {
              id: "ps-l12-q6",
              type: "short",
              prompt:
                "Suggest one way globalisation could positively affect psychological wellbeing.",
              answer:
                "Access to global communities/support networks and broader identity options.",
              keywords: ["community", "support", "connect", "identity"],
              explanation:
                "Connectivity can buffer isolation and enable hybrid identities.",
            },
          ],
        },
        {
          id: "ps-l24",
          title: "Abnormal psychology: prevalence, explanations, treatment",
          questions: [
            {
              id: "ps-l24-q1",
              type: "mcq",
              prompt: "'Prevalence' of a disorder means",
              choices: [
                "its severity",
                "the proportion of a population with the disorder at a given time",
                "its cause",
                "its cure rate",
              ],
              answerIndex: 1,
              explanation:
                "Prevalence rates vary by culture and gender — key discussion material.",
            },
            {
              id: "ps-l24-q2",
              type: "mcq",
              prompt: "Biological explanations of depression focus on",
              choices: [
                "dreams",
                "neurotransmitter imbalances and genetic vulnerability",
                "punishment",
                "stereotypes",
              ],
              answerIndex: 1,
              explanation:
                "e.g. low serotonin; twin studies show heritability — evaluate alongside cognition.",
            },
            {
              id: "ps-l24-q3",
              type: "tf",
              prompt:
                "Cognitive explanations of depression include Beck's negative triad — negative views of self, world and future.",
              answer: true,
              explanation:
                "CBT targets these distorted thought patterns.",
            },
            {
              id: "ps-l24-q4",
              type: "mcq",
              prompt: "CBT treats depression by",
              choices: [
                "prescribing drugs",
                "identifying and challenging maladaptive thoughts and behaviours",
                "hospitalisation",
                "hypnosis",
              ],
              answerIndex: 1,
              explanation:
                "Cognitive restructuring + behavioural activation.",
            },
            {
              id: "ps-l24-q5",
              type: "short",
              prompt:
                "Drug class commonly used to treat depression by increasing serotonin availability (acronym).",
              answer: "SSRI",
              keywords: ["ssri", "antidepressant", "prozac"],
              acceptable: ["SSRIs", "antidepressants"],
              explanation:
                "SSRIs (e.g. fluoxetine) — evaluate efficacy vs CBT.",
            },
            {
              id: "ps-l24-q6",
              type: "short",
              prompt:
                "Explaining disorders by combining biology, psychology and social factors = the ___ model (diathesis-stress accepted).",
              answer: "biopsychosocial",
              keywords: ["biopsychosocial", "diathesis", "vulnerability"],
              acceptable: ["diathesis-stress", "biopsychosocial model"],
              explanation:
                "Integrative models — good evaluation anchor.",
            },
          ],
        },
        {
          id: "ps-l25",
          title: "HL extensions: animal research, technology and globalisation",
          level: "HL",
          questions: [
            {
              id: "ps-l25-q1",
              type: "mcq",
              prompt: "HL: a key ethical issue in animal research is",
              choices: [
                "cost",
                "whether harm to animals is justified by the potential human benefit",
                "speed",
                "sample size",
              ],
              answerIndex: 1,
              explanation:
                "Bateson's cube weighs certainty of benefit vs suffering vs quality of research.",
            },
            {
              id: "ps-l25-q2",
              type: "mcq",
              prompt: "HL: research on cognition in the digital world suggests heavy media multitasking",
              choices: [
                "improves memory",
                "is associated with reduced attention control in some studies",
                "has no effects",
                "increases IQ",
              ],
              answerIndex: 1,
              explanation:
                "Correlational evidence — evaluate causality carefully.",
            },
            {
              id: "ps-l25-q3",
              type: "tf",
              prompt:
                "HL: globalisation may increase acculturative stress while also spreading universalist psychological theories.",
              answer: true,
              explanation:
                "A tension between emic (culture-specific) and etic (universal) claims.",
            },
            {
              id: "ps-l25-q4",
              type: "mcq",
              prompt: "The 'etic' approach in psychology assumes",
              choices: [
                "all behaviour is cultural",
                "psychological principles apply universally across cultures",
                "nothing is universal",
                "only animals matter",
              ],
              answerIndex: 1,
              explanation:
                "Etic = universal claims; emic = culture-specific understanding.",
            },
            {
              id: "ps-l25-q5",
              type: "short",
              prompt:
                "HL: name ONE ethical safeguard used in animal research.",
              answer: "minimising suffering / housing standards",
              keywords: ["suffering", "housing", "anaesthet", "ethics", "committee", "reduce", "replace", "refine"],
              acceptable: ["the 3Rs", "ethical review", "anaesthesia"],
              explanation:
                "The 3Rs: replace, reduce, refine.",
            },
            {
              id: "ps-l25-q6",
              type: "short",
              prompt:
                "Culture-specific (inside) understanding of behaviour = the ___ approach.",
              answer: "emic",
              keywords: ["emic"],
              acceptable: ["emic approach"],
              explanation:
                "Emic vs etic — the HL globalisation debate.",
            },
          ],
        },
      ],
    },
  ],
};
