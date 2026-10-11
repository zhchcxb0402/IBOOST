import type { Subject } from "../types";

export const spanishB: Subject = {
  slug: "spanish-b",
  name: "Spanish B",
  short: "Spanish B",
  color: "#DC2626",
  emoji: "🇪🇸",
  group: "Language acquisition",
  levels: ["SL", "HL"],
  description:
    "Spanish B — the five prescribed themes taught through vocabulary in context, grammar, register and exam skills.",
  resources: [
    {
      name: "IB Official",
      url: "https://www.ibo.org/programmes/diploma-programme/curriculum/language-acquisition/",
      note: "Subject brief and syllabus outline",
    },
    {
      name: "InThinking",
      url: "https://www.thinkib.net/spanish-b",
      note: "Teacher-written lessons and exam guidance",
    },
    {
      name: "Clastify",
      url: "https://www.clastify.com/",
      note: "Past papers and exemplar work",
    },
    {
      name: "RevisionDojo",
      url: "https://www.revisiondojo.com/",
      note: "Topic questions with worked solutions",
    },
  ],
  units: [
    {
      id: "sb-u1",
      code: "Theme 1",
      title: "Identities",
      lessons: [
        {
          id: "sb-l1",
          title: "Vocabulario en contexto: identidad y estilo de vida",
          questions: [
            {
              id: "sb-l1-q1",
              type: "mcq",
              prompt:
                "Read: «María se considera una persona muy sociable; le encanta pasar tiempo con sus amigos y conocer gente nueva.» What does «sociable» mean here?",
              choices: ["shy", "outgoing", "studious", "tired"],
              answerIndex: 1,
              explanation:
                "«Sociable» = outgoing/sociable — someone who enjoys other people's company.",
            },
            {
              id: "sb-l1-q2",
              type: "mcq",
              prompt:
                "Which word means 'self-esteem'?",
              choices: [
                "la autoestima",
                "el orgullo",
                "la identidad",
                "la apariencia",
              ],
              answerIndex: 0,
              explanation:
                "«La autoestima» = self-esteem; «el orgullo» = pride.",
            },
            {
              id: "sb-l1-q3",
              type: "tf",
              prompt: "«Desafío» means 'challenge'.",
              answer: true,
              explanation:
                "«El desafío» (also «el reto») = challenge — common in identity topics.",
            },
            {
              id: "sb-l1-q4",
              type: "mcq",
              prompt:
                "Read: «Juan se parece mucho a su padre: los dos son tranquilos y les gusta leer.» «Se parece a» means",
              choices: [
                "looks up to",
                "resembles / takes after",
                "is separated from",
                "argues with",
              ],
              answerIndex: 1,
              explanation:
                "«Parecerse a» = to resemble/look like someone.",
            },
            {
              id: "sb-l1-q5",
              type: "short",
              prompt:
                "Translate to Spanish: 'I consider myself a hardworking person.'",
              answer: "Me considero una persona trabajadora.",
              keywords: ["considero", "trabajador"],
              acceptable: ["soy una persona trabajadora", "me considero trabajador"],
              explanation:
                "«Me considero» (reflexive of considerar) + «trabajador/a» (agrees with the subject).",
            },
            {
              id: "sb-l1-q6",
              type: "short",
              prompt:
                "Complete with the correct word: «Mis abuelos me criaron en un pueblo pequeño, así que valoro mucho las tradiciones ____.» (family)",
              answer: "familiares",
              keywords: ["familiares", "familia"],
              acceptable: ["de familia", "de mi familia"],
              explanation:
                "«Tradiciones familiares» = family traditions; the adjective must be plural to agree with «tradiciones».",
            },
          ],
        },
        {
          id: "sb-l2",
          title: "Ser y estar; adjetivos y concordancia",
          questions: [
            {
              id: "sb-l2-q1",
              type: "mcq",
              prompt: "Choose the correct verb: «Hoy ___ muy cansado.»",
              choices: ["soy", "estoy", "tengo", "hago"],
              answerIndex: 1,
              explanation:
                "Estar for temporary states/feelings: «estoy cansado» (I am tired now).",
            },
            {
              id: "sb-l2-q2",
              type: "mcq",
              prompt: "Choose the correct verb: «Madrid ___ la capital de España.»",
              choices: ["está", "es", "hay", "tiene"],
              answerIndex: 1,
              explanation:
                "Ser for permanent identity/definitions: «Madrid es la capital».",
            },
            {
              id: "sb-l2-q3",
              type: "tf",
              prompt:
                "Adjectives in Spanish agree in gender and number with the noun: «unas chicas simpáticas».",
              answer: true,
              explanation:
                "«Simpáticas» agrees feminine plural with «chicas».",
            },
            {
              id: "sb-l2-q4",
              type: "mcq",
              prompt:
                "«La película ___ aburrida» (describing a characteristic, not a mood):",
              choices: ["está", "es", "fue estar", "estaba siendo"],
              answerIndex: 1,
              explanation:
                "«Ser» describes an inherent quality: «la película es aburrida» = it's a boring film. «Está aburrida» would mean she is bored.",
            },
            {
              id: "sb-l2-q5",
              type: "short",
              prompt:
                "Rewrite in the plural: «un chico alto» → «unos chicos ___».",
              answer: "altos",
              keywords: ["altos"],
              explanation:
                "Masculine plural adjective «altos» agrees with «chicos».",
            },
            {
              id: "sb-l2-q6",
              type: "short",
              prompt:
                "Complete with ser or estar: «La fiesta ___ en casa de Ana el sábado.» (the party takes place at Ana's house)",
              answer: "es",
              keywords: ["es", "ser"],
              acceptable: ["será"],
              explanation:
                "Events take place with ser: «la fiesta es en casa de Ana». «Será» (will be) also works.",
            },
          ],
        },
      ],
    },
    {
      id: "sb-u2",
      code: "Themes 2 & 3",
      title: "Experiences and human ingenuity",
      lessons: [
        {
          id: "sb-l3",
          title: "Pretérito e imperfecto",
          questions: [
            {
              id: "sb-l3-q1",
              type: "mcq",
              prompt: "«Cuando era niño, ___ al parque todos los días.»",
              choices: ["fui", "iba", "voy", "iría"],
              answerIndex: 1,
              explanation:
                "Habitual/repeated past action → imperfect: «iba».",
            },
            {
              id: "sb-l3-q2",
              type: "mcq",
              prompt: "«Ayer ___ una película muy buena.» (I watched, completed action)",
              choices: ["veía", "vi", "he visto", "vería"],
              answerIndex: 1,
              explanation:
                "Completed one-off past action → preterite: «vi» (ver is irregular).",
            },
            {
              id: "sb-l3-q3",
              type: "tf",
              prompt:
                "The imperfect tense is used for background description — weather, time, ongoing states — in a past narrative.",
              answer: true,
              explanation:
                "«Hacía frío», «eran las ocho» — scene-setting uses the imperfect.",
            },
            {
              id: "sb-l3-q4",
              type: "mcq",
              prompt:
                "«Mientras caminaba por la calle, de repente ___ a llover.»",
              choices: ["empezaba", "empezó", "empieza", "empezaría"],
              answerIndex: 1,
              explanation:
                "Ongoing action in the imperfect («caminaba») interrupted by a completed event in the preterite («empezó»).",
            },
            {
              id: "sb-l3-q5",
              type: "short",
              prompt:
                "Conjugate in the preterite: «Yo ___ (llegar) tarde a clase ayer.»",
              answer: "llegué",
              keywords: ["llegué", "llegue"],
              acceptable: ["llegue"],
              explanation:
                "First-person preterite of llegar: «llegué» — spelling change g→gu to keep the /g/ sound before é.",
            },
            {
              id: "sb-l3-q6",
              type: "short",
              prompt:
                "Translate: 'When I was young, I used to play football.' (use the imperfect)",
              answer: "Cuando era joven, jugaba al fútbol.",
              keywords: ["jugaba", "fútbol"],
              acceptable: ["cuando era niño jugaba", "de pequeño jugaba"],
              explanation:
                "Habitual childhood action → imperfect «jugaba»; «era» also imperfect (ongoing state).",
            },
          ],
        },
        {
          id: "sb-l4",
          title: "Opiniones, conectores y el subjuntivo",
          questions: [
            {
              id: "sb-l4-q1",
              type: "mcq",
              prompt: "«Es importante que ___ (tú) más verduras.»",
              choices: ["comes", "comas", "comerás", "comiste"],
              answerIndex: 1,
              explanation:
                "Impersonal expressions of importance trigger the subjunctive: «comas».",
            },
            {
              id: "sb-l4-q2",
              type: "mcq",
              prompt: "Which connector means 'however'?",
              choices: ["además", "sin embargo", "por lo tanto", "aunque"],
              answerIndex: 1,
              explanation:
                "«Sin embargo» = however; «además» = moreover; «por lo tanto» = therefore.",
            },
            {
              id: "sb-l4-q3",
              type: "tf",
              prompt:
                "«Aunque» always requires the subjunctive, even when stating a fact.",
              answer: false,
              explanation:
                "With a fact: «aunque llueve, salgo» (indicative). Subjunctive only for hypothetical/unknown: «aunque llueva…».",
            },
            {
              id: "sb-l4-q4",
              type: "mcq",
              prompt: "«Quiero que ___ (venir) a la fiesta.»",
              choices: ["vienes", "vengas", "vendrás", "veniste"],
              answerIndex: 1,
              explanation:
                "«Querer que» + subjunctive for wanting someone else to act: «vengas».",
            },
            {
              id: "sb-l4-q5",
              type: "short",
              prompt:
                "Complete with a connector meaning 'moreover/furthermore': «La tecnología facilita la comunicación; ___, crea nuevos puestos de trabajo.»",
              answer: "además",
              keywords: ["además", "ademas"],
              acceptable: ["ademas", "también", "igualmente"],
              explanation:
                "«Además» adds a supporting point — a key Paper 1 connector.",
            },
            {
              id: "sb-l4-q6",
              type: "short",
              prompt:
                "Complete with the subjunctive: «Espero que ___ (tener) un buen día.»",
              answer: "tengas",
              keywords: ["tengas"],
              explanation:
                "«Esperar que» + subjunctive; tener → tengas (irregular yo-form based).",
            },
          ],
        },
      ],
    },
    {
      id: "sb-u3",
      code: "Themes 4 & 5",
      title: "Social organization and sharing the planet",
      lessons: [
        {
          id: "sb-l5",
          title: "Registro: tú, usted y cartas formales",
          questions: [
            {
              id: "sb-l5-q1",
              type: "mcq",
              prompt:
                "You are writing to a company director you have never met. Which greeting is appropriate?",
              choices: [
                "¡Hola tío!",
                "¿Qué tal?",
                "Estimado Sr. López:",
                "Buenas,",
              ],
              answerIndex: 2,
              explanation:
                "Formal letters open with «Estimado/a + title + surname:» — note the colon.",
            },
            {
              id: "sb-l5-q2",
              type: "mcq",
              prompt:
                "Which verb form addresses a stranger politely?",
              choices: [
                "¿Tú tienes…?",
                "¿Usted tiene…?",
                "¿Vosotros tenéis…?",
                "¿Tú tenés…?",
              ],
              answerIndex: 1,
              explanation:
                "«Usted» + third-person singular is the formal register.",
            },
            {
              id: "sb-l5-q3",
              type: "tf",
              prompt:
                "A formal letter can close with «Un abrazo».",
              answer: false,
              explanation:
                "«Un abrazo» is informal. Formal closings: «Atentamente», «Un cordial saludo», «Le saluda atentamente».",
            },
            {
              id: "sb-l5-q4",
              type: "mcq",
              prompt:
                "Which phrase is too informal for a formal email?",
              choices: [
                "Le escribo para solicitar información",
                "Oye, ¿me pasas los datos?",
                "Quedo a la espera de su respuesta",
                "Le agradecería que…",
              ],
              answerIndex: 1,
              explanation:
                "«Oye» + «pasas» is casual spoken register — inappropriate in formal writing.",
            },
            {
              id: "sb-l5-q5",
              type: "short",
              prompt:
                "Rewrite formally — replace «tú quieres»: «Quisiera saber si ___ (usted) recibió mi solicitud.»",
              answer: "quiere",
              keywords: ["usted"],
              acceptable: ["quiere", "desea"],
              explanation:
                "With «usted» use the third-person form: «quiere» (or more formally «desea»).",
            },
            {
              id: "sb-l5-q6",
              type: "short",
              prompt:
                "Give a formal closing formula for a letter to a company (one phrase).",
              answer: "Atentamente",
              keywords: ["atentamente"],
              acceptable: ["un cordial saludo", "le saluda atentamente", "cordialmente"],
              explanation:
                "Standard formal closings: «Atentamente», «Un cordial saludo», «Cordialmente».",
            },
          ],
        },
        {
          id: "sb-l6",
          title: "Comprensión lectora: el medio ambiente",
          questions: [
            {
              id: "sb-l6-q1",
              type: "mcq",
              prompt:
                "Read: «Cada año se talan millones de hectáreas de bosque, lo que provoca la pérdida de hábitats y el aumento de CO₂ en la atmósfera.» Deforestation causes",
              choices: [
                "habitat loss and more CO₂",
                "less CO₂ in the air",
                "more forests",
                "cleaner oceans",
              ],
              answerIndex: 0,
              explanation:
                "«La pérdida de hábitats» = habitat loss; «el aumento de CO₂» = the increase in CO₂.",
            },
            {
              id: "sb-l6-q2",
              type: "mcq",
              prompt: "«El cambio climático» means",
              choices: [
                "weather forecast",
                "climate change",
                "seasonal variation",
                "air pollution only",
              ],
              answerIndex: 1,
              explanation:
                "«Cambio climático» = climate change; «el tiempo» = weather.",
            },
            {
              id: "sb-l6-q3",
              type: "tf",
              prompt: "«Reciclar» means 'to recycle'.",
              answer: true,
              explanation:
                "Core Sharing-the-planet vocabulary: reciclar, reutilizar, reducir.",
            },
            {
              id: "sb-l6-q4",
              type: "mcq",
              prompt:
                "Read: «Para reducir nuestra huella de carbono, deberíamos usar más el transporte público y consumir menos carne.» The author recommends",
              choices: [
                "driving more",
                "more public transport and less meat",
                "eating more meat",
                "avoiding all travel",
              ],
              answerIndex: 1,
              explanation:
                "«La huella de carbono» = carbon footprint; «deberíamos» = we should.",
            },
            {
              id: "sb-l6-q5",
              type: "short",
              prompt:
                "Translate: 'We should protect endangered species.' (use «deberíamos» + infinitive)",
              answer: "Deberíamos proteger las especies en peligro de extinción.",
              keywords: ["deberíamos", "proteger", "especies"],
              acceptable: ["debemos proteger", "tenemos que proteger"],
              explanation:
                "«Deberíamos + infinitive» for 'we should'; «en peligro de extinción» = endangered.",
            },
            {
              id: "sb-l6-q6",
              type: "short",
              prompt:
                "What does «las energías renovables» mean? Answer in English.",
              answer: "renewable energy",
              keywords: ["renewable", "energ"],
              explanation:
                "«Renovable» = renewable; «la energía» = energy.",
            },
          ],
        },
      ],
    },
    {
      id: "sb-u4",
      code: "Assessment",
      title: "Exam skills",
      lessons: [
        {
          id: "sb-l7",
          title: "Paper 1: tipos de texto y convenciones",
          questions: [
            {
              id: "sb-l7-q1",
              type: "mcq",
              prompt:
                "Which features belong to a BLOG post?",
              choices: [
                "formal salutation and signature",
                "personal anecdotes, informal tone, direct address to readers",
                "headline, lead and inverted pyramid",
                "objective third-person report",
              ],
              answerIndex: 1,
              explanation:
                "Blogs are personal and informal — anecdotes, opinions, direct address.",
            },
            {
              id: "sb-l7-q2",
              type: "mcq",
              prompt:
                "An OPINION ARTICLE (artículo de opinión) should include",
              choices: [
                "only facts, no viewpoint",
                "a clear thesis, arguments and a persuasive conclusion",
                "a list of instructions",
                "dialogue and stage directions",
              ],
              answerIndex: 1,
              explanation:
                "Opinion pieces argue a thesis with supporting reasons and a call/conclusion.",
            },
            {
              id: "sb-l7-q3",
              type: "tf",
              prompt:
                "In Paper 1 you must choose the text type that best suits the task and audience.",
              answer: true,
              explanation:
                "Criterion B (message) and C (conventions) reward matching format to purpose/audience.",
            },
            {
              id: "sb-l7-q4",
              type: "mcq",
              prompt:
                "A formal letter requesting information should open with",
              choices: [
                "«¡Hola!»",
                "«Estimado Sr. / Estimada Sra.:»",
                "«Querido amigo,»",
                "no greeting at all",
              ],
              answerIndex: 1,
              explanation:
                "Formal salutation with colon; «Querido amigo» is for friends.",
            },
            {
              id: "sb-l7-q5",
              type: "short",
              prompt:
                "Name ONE feature that distinguishes a speech (discurso) from an article. Answer briefly in English or Spanish.",
              answer: "direct address to the audience",
              keywords: ["audiencia", "address", "rhetor", "directo"],
              acceptable: ["direct address", "rhetorical questions", "dirigirse a la audiencia"],
              explanation:
                "Speeches address the audience directly («estimados asistentes») and use rhetorical devices.",
            },
            {
              id: "sb-l7-q6",
              type: "short",
              prompt:
                "SL Paper 1 word count: approximately how many words must you write? (one number)",
              answer: "250",
              keywords: ["250"],
              acceptable: ["250-400"],
              explanation:
                "SL Paper 1: 250–400 words; HL: 450–600 words.",
            },
          ],
        },
        {
          id: "sb-l8",
          title: "Paper 2 y la oral individual",
          questions: [
            {
              id: "sb-l8-q1",
              type: "mcq",
              prompt:
                "In the reading paper, the best first strategy is",
              choices: [
                "translate every word",
                "skim the text for gist before reading the questions in detail",
                "answer questions without reading",
                "count the words",
              ],
              answerIndex: 1,
              explanation:
                "Skimming for gist first makes detailed comprehension and locating answers much faster.",
            },
            {
              id: "sb-l8-q2",
              type: "mcq",
              prompt:
                "For 'true/false with justification' questions you must",
              choices: [
                "only write true or false",
                "quote or identify the part of the text that supports your answer",
                "give your personal opinion",
                "guess — no evidence needed",
              ],
              answerIndex: 1,
              explanation:
                "Marks require textual justification — the sentence that proves the statement.",
            },
            {
              id: "sb-l8-q3",
              type: "tf",
              prompt:
                "In the individual oral, you get 15 minutes to prepare a presentation based on a visual stimulus.",
              answer: true,
              explanation:
                "Language B IO: 15 min preparation on a visual stimulus linked to a theme, then presentation + discussion.",
            },
            {
              id: "sb-l8-q4",
              type: "mcq",
              prompt:
                "When you don't know a word in the listening paper, you should",
              choices: [
                "stop the recording",
                "use context to infer its likely meaning and keep listening",
                "leave all questions blank",
                "write about a different topic",
              ],
              answerIndex: 1,
              explanation:
                "Inference from context (cognates, tone, situation) is a core listening skill — recordings can't be paused.",
            },
            {
              id: "sb-l8-q5",
              type: "short",
              prompt:
                "Give ONE strategy for the individual oral discussion part. Answer briefly.",
              answer: "link the stimulus to the prescribed theme and give opinions",
              keywords: ["theme", "opinion"],
              acceptable: ["connect to a theme", "use varied vocabulary", "ask/answer questions"],
              explanation:
                "The discussion widens beyond the stimulus to the theme — opinions and varied language score higher.",
            },
            {
              id: "sb-l8-q6",
              type: "short",
              prompt:
                "In Paper 2, what does 'justification' mean in a true/false question? One short phrase.",
              answer: "evidence from the text",
              keywords: ["text", "evidence"],
              acceptable: ["a quotation", "the phrase that proves it"],
              explanation:
                "You must cite the part of the text proving your answer — not just say true/false.",
            },
          ],
        },
      ],
    },
    {
      id: "sb-u5",
      code: "HL extension",
      title: "HL skills",
      level: "HL",
      lessons: [
        {
          id: "sb-l9",
          title: "Análisis de textos literarios",
          level: "HL",
          questions: [
            {
              id: "sb-l9-q1",
              type: "mcq",
              prompt:
                "At HL, literary texts are studied to develop",
              choices: [
                "translation skills only",
                "interpretation of themes, character and authorial choices",
                "faster reading speed",
                "memorisation of plots",
              ],
              answerIndex: 1,
              explanation:
                "HL includes two literary works — the aim is interpretive, not just comprehension.",
            },
            {
              id: "sb-l9-q2",
              type: "mcq",
              prompt:
                "«El narrador en primera persona» means",
              choices: [
                "third-person narrator",
                "first-person narrator",
                "omniscient narrator",
                "unreliable author",
              ],
              answerIndex: 1,
              explanation:
                "«Narrador en primera persona» = first-person narrator («yo»).",
            },
            {
              id: "sb-l9-q3",
              type: "tf",
              prompt:
                "«La metáfora» is a direct comparison using 'como' (like/as).",
              answer: false,
              explanation:
                "That's «el símil» (like). A metaphor identifies one thing AS another without 'como'.",
            },
            {
              id: "sb-l9-q4",
              type: "mcq",
              prompt:
                "When analysing tone, «irónico», «nostálgico» and «crítico» describe",
              choices: [
                "the plot",
                "the narrator's attitude",
                "the setting",
                "the rhyme scheme",
              ],
              answerIndex: 1,
              explanation:
                "Tone vocabulary describes the narrator's/author's attitude toward the subject.",
            },
            {
              id: "sb-l9-q5",
              type: "short",
              prompt:
                "Name ONE narrative technique a literary analyst might comment on (English or Spanish).",
              answer: "foreshadowing",
              keywords: ["foreshadow", "flashback", "símbol", "symbol", "iron"],
              acceptable: ["flashback", "symbolism", "dramatic irony", "analepsis"],
              explanation:
                "Flashback, foreshadowing, symbolism, irony — any concrete technique is valid.",
            },
            {
              id: "sb-l9-q6",
              type: "short",
              prompt:
                "Translate the analysis sentence: 'The author uses irony to criticise society.'",
              answer: "El autor usa la ironía para criticar la sociedad.",
              keywords: ["ironía", "criticar", "sociedad"],
              acceptable: ["el autor utiliza ironia", "usa la ironía"],
              explanation:
                "«La ironía» (feminine noun) + «para + infinitive» for purpose.",
            },
          ],
        },
        {
          id: "sb-l10",
          title: "Registro matizado y modismos",
          level: "HL",
          questions: [
            {
              id: "sb-l10-q1",
              type: "mcq",
              prompt: "«Tomar el pelo» means",
              choices: [
                "to have a haircut",
                "to pull someone's leg / tease",
                "to comb hair",
                "to get angry",
              ],
              answerIndex: 1,
              explanation:
                "Idiom: «tomar el pelo a alguien» = to tease/pull someone's leg.",
            },
            {
              id: "sb-l10-q2",
              type: "mcq",
              prompt: "«Costar un ojo de la cara» means something",
              choices: [
                "is painful",
                "is extremely expensive",
                "is beautiful",
                "is dangerous",
              ],
              answerIndex: 1,
              explanation:
                "Idiom for 'costs an arm and a leg' — very expensive.",
            },
            {
              id: "sb-l10-q3",
              type: "tf",
              prompt:
                "Idioms should be used in formal academic essays to impress the examiner.",
              answer: false,
              explanation:
                "Idioms suit informal registers; in formal writing they can seem inappropriate or confusing.",
            },
            {
              id: "sb-l10-q4",
              type: "mcq",
              prompt:
                "«No tener pelos en la lengua» describes someone who",
              choices: [
                "speaks very quietly",
                "speaks their mind bluntly",
                "is hairy",
                "cannot speak Spanish",
              ],
              answerIndex: 1,
              explanation:
                "Idiom: to be outspoken — literally 'to have no hairs on one's tongue'.",
            },
            {
              id: "sb-l10-q5",
              type: "short",
              prompt:
                "Which idiom means 'to be daydreaming / have your head in the clouds'?",
              answer: "estar en las nubes",
              keywords: ["nubes"],
              acceptable: ["estar en la luna"],
              explanation:
                "«Estar en las nubes» (or «en la luna») = head in the clouds.",
            },
            {
              id: "sb-l10-q6",
              type: "short",
              prompt:
                "Translate to informal Spanish: 'Come on, get to work!' (idiom: «ponerse las pilas»)",
              answer: "¡Venga, ponte las pilas!",
              keywords: ["pilas", "ponte"],
              acceptable: ["póngase las pilas", "ponte las pilas"],
              explanation:
                "«Ponerse las pilas» = to buckle down/get moving; informal imperative «ponte».",
            },
          ],
        },
        {
          id: "sb-l11",
          title: "Paper 1 HL: textos extensos",
          level: "HL",
          questions: [
            {
              id: "sb-l11-q1",
              type: "mcq",
              prompt:
                "HL Paper 1 requires approximately how many words?",
              choices: ["150–250", "250–400", "450–600", "600–800"],
              answerIndex: 2,
              explanation:
                "HL Paper 1: 450–600 words; SL: 250–400.",
            },
            {
              id: "sb-l11-q2",
              type: "mcq",
              prompt:
                "A discursive/essay-style response at HL is rewarded for",
              choices: [
                "short simple sentences only",
                "developed arguments, counter-arguments and cohesive structure",
                "bullet points",
                "avoiding an opinion",
              ],
              answerIndex: 1,
              explanation:
                "HL writing expects argument development, balance and cohesion across paragraphs.",
            },
            {
              id: "sb-l11-q3",
              type: "tf",
              prompt:
                "At HL, register may shift within one response — e.g. a speech that mixes formal address with an anecdote.",
              answer: true,
              explanation:
                "Sophisticated register control (formal frame + personal touches) is an HL strength — as long as it stays appropriate.",
            },
            {
              id: "sb-l11-q4",
              type: "mcq",
              prompt:
                "Which sentence shows the most sophisticated HL-level structure?",
              choices: [
                "«Me gusta el deporte. Es bueno.»",
                "«Aunque reconozco los beneficios de la tecnología, no puedo evitar preguntarme si nos estamos volviendo demasiado dependientes de ella.»",
                "«La tecnología es buena y mala.»",
                "«Hay muchas opiniones.»",
              ],
              answerIndex: 1,
              explanation:
                "Concession («aunque») + complex clause + abstract vocabulary = HL-range structure.",
            },
            {
              id: "sb-l11-q5",
              type: "short",
              prompt:
                "Complete the concession: «___ reconozco las ventajas, creo que los riesgos son mayores.» (although)",
              answer: "Aunque",
              keywords: ["aunque"],
              explanation:
                "«Aunque + indicative» concedes a known fact — a high-scoring HL move.",
            },
            {
              id: "sb-l11-q6",
              type: "short",
              prompt:
                "Give a formal phrase to introduce a counter-argument (e.g. 'on the other hand').",
              answer: "por otro lado",
              keywords: ["otro lado", "embargo", "contrario"],
              acceptable: ["por otro lado", "sin embargo", "por el contrario", "no obstante"],
              explanation:
                "«Por otro lado», «sin embargo», «no obstante» — standard counter-argument signposts.",
            },
          ],
        },
      ],
    },
  ],
};
