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
        {
          id: "sb-l12",
          title: "Identidades: lectura y vocabulario",
          questions: [
            {
              id: "sb-l12-q1",
              type: "mcq",
              prompt:
                "Lee: «Aunque nació en Lima, Lucía se crió en Madrid. Todavía echa de menos la comida de su abuela.» — ¿Qué significa «se crió»?",
              choices: [
                "was raised",
                "was born",
                "studied",
                "travelled",
              ],
              answerIndex: 0,
              explanation:
                "«Criarse» = to grow up/be raised (crecer, educarse).",
            },
            {
              id: "sb-l12-q2",
              type: "mcq",
              prompt:
                "«Echar de menos» significa",
              choices: ["to hate", "to miss", "to throw away", "to forget"],
              answerIndex: 1,
              explanation:
                "«Echar de menos» = to miss (Spain); «extrañar» in Latin America.",
            },
            {
              id: "sb-l12-q3",
              type: "tf",
              prompt:
                "«Mis raíces están en Perú» — «raíces» means 'roots', referring to cultural origin.",
              answer: true,
              explanation:
                "«Raíces» = roots — a key identity word.",
            },
            {
              id: "sb-l12-q4",
              type: "mcq",
              prompt:
                "«Me llevo muy bien con mi hermana.» — «llevarse bien con» means",
              choices: [
                "to argue with",
                "to get on well with",
                "to live with",
                "to look like",
              ],
              answerIndex: 1,
              explanation:
                "«Llevarse bien/mal con» = get on well/badly with someone.",
            },
            {
              id: "sb-l12-q5",
              type: "short",
              prompt:
                "Traduce: 'self-esteem' (two words in Spanish).",
              answer: "autoestima",
              keywords: ["autoestima"],
              acceptable: ["la autoestima"],
              explanation:
                "La autoestima — key vocabulary for the Identities theme.",
            },
            {
              id: "sb-l12-q6",
              type: "short",
              prompt:
                "Completa: «Estoy orgullosa de mis ___ (raíces/origenes)».",
              answer: "raíces",
              keywords: ["raíces", "raices"],
              acceptable: ["raices", "mis raíces"],
              explanation:
                "«Raíces» = roots; also acceptable without the accent for typing.",
            },
          ],
        },
        {
          id: "sb-l13",
          title: "Por y para",
          questions: [
            {
              id: "sb-l13-q1",
              type: "mcq",
              prompt: "«Este regalo es ___ ti.» — ¿Por o para?",
              choices: ["por", "para", "a", "de"],
              answerIndex: 1,
              explanation:
                "Recipient/destination → «para»: for you.",
            },
            {
              id: "sb-l13-q2",
              type: "mcq",
              prompt: "«Gracias ___ tu ayuda.» — ¿Por o para?",
              choices: ["para", "por", "con", "sin"],
              answerIndex: 1,
              explanation:
                "Cause/reason → «por»: thanks FOR your help.",
            },
            {
              id: "sb-l13-q3",
              type: "tf",
              prompt:
                "«Estudio para ser médico» uses «para» because it expresses a goal.",
              answer: true,
              explanation:
                "Purpose/goal → «para» (in order to become).",
            },
            {
              id: "sb-l13-q4",
              type: "mcq",
              prompt: "«Caminamos ___ el parque durante dos horas.»",
              choices: ["para", "por", "en", "a"],
              answerIndex: 1,
              explanation:
                "Movement through/along + duration → «por».",
            },
            {
              id: "sb-l13-q5",
              type: "short",
              prompt:
                "Completa: «Lo hice ___ ti» (I did it FOR you, on your behalf).",
              answer: "por",
              keywords: ["por"],
              acceptable: ["por ti"],
              explanation:
                "On behalf of / because of someone → «por».",
            },
            {
              id: "sb-l13-q6",
              type: "short",
              prompt:
                "Completa: «El tren sale ___ Barcelona» (destination).",
              answer: "para",
              keywords: ["para"],
              acceptable: ["para Barcelona"],
              explanation:
                "Destination → «para»: heading for Barcelona.",
            },
          ],
        },
        {
          id: "sb-l14",
          title: "Los pronombres de objeto",
          questions: [
            {
              id: "sb-l14-q1",
              type: "mcq",
              prompt: "«¿Viste la película? — Sí, ___ vi ayer.»",
              choices: ["le", "la", "lo", "se"],
              answerIndex: 1,
              explanation:
                "La película (feminine, direct object) → «la».",
            },
            {
              id: "sb-l14-q2",
              type: "mcq",
              prompt: "«___ di un regalo a mi madre.» (I gave a gift TO her)",
              choices: ["La", "Le", "Lo", "Me"],
              answerIndex: 1,
              explanation:
                "Indirect object (to her) → «le».",
            },
            {
              id: "sb-l14-q3",
              type: "tf",
              prompt:
                "In Spanish, object pronouns usually go before the conjugated verb.",
              answer: true,
              explanation:
                "«Te quiero», not «quiero te» — except with infinitives/gerunds/affirmative commands.",
            },
            {
              id: "sb-l14-q4",
              type: "mcq",
              prompt: "«Quiero comprar___» (I want to buy IT - masculine object)",
              choices: ["me", "le", "lo", "se"],
              answerIndex: 2,
              explanation:
                "Attached to the infinitive: «comprarlo».",
            },
            {
              id: "sb-l14-q5",
              type: "short",
              prompt:
                "Reescribe: «Doy el libro a Juan» (using a pronoun for 'a Juan').",
              answer: "le doy el libro",
              keywords: ["le doy", "le"],
              acceptable: ["Le doy el libro"],
              explanation:
                "Indirect object pronoun «le» precedes the verb.",
            },
            {
              id: "sb-l14-q6",
              type: "short",
              prompt:
                "Completa: «¿Las llaves? No ___ encuentro.» (feminine plural)",
              answer: "las",
              keywords: ["las"],
              acceptable: ["no las encuentro"],
              explanation:
                "«Las» replaces «las llaves» — direct object, feminine plural.",
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
        {
          id: "sb-l15",
          title: "Experiencias: lectura de un blog de viaje",
          questions: [
            {
              id: "sb-l15-q1",
              type: "mcq",
              prompt:
                "Lee: «El año pasado decidí hacer un viaje sola por Sudamérica. Al principio tenía miedo, pero pronto conocí a gente increíble.» — La narradora",
              choices: [
                "travels with friends",
                "travelled alone",
                "never left home",
                "was never afraid",
              ],
              answerIndex: 1,
              explanation:
                "«Hacer un viaje sola» = to travel alone (feminine).",
            },
            {
              id: "sb-l15-q2",
              type: "mcq",
              prompt:
                "«Al principio» significa",
              choices: ["at the end", "at first", "however", "therefore"],
              answerIndex: 1,
              explanation:
                "«Al principio» = at the beginning/at first.",
            },
            {
              id: "sb-l15-q3",
              type: "tf",
              prompt:
                "«Pronto conocí a gente increíble» uses the preterite for a completed past action.",
              answer: true,
              explanation:
                "«Conocí» = preterite of conocer — a completed event.",
            },
            {
              id: "sb-l15-q4",
              type: "mcq",
              prompt:
                "«Este viaje me cambió la vida» — the verb means the trip",
              choices: [
                "cost a lot",
                "changed her life",
                "was boring",
                "ended early",
              ],
              answerIndex: 1,
              explanation:
                "«Cambiar la vida» = to change one's life.",
            },
            {
              id: "sb-l15-q5",
              type: "short",
              prompt:
                "Traduce al español: 'I met amazing people' (conocer, pretérito).",
              answer: "conocí a gente increíble",
              keywords: ["conocí", "conoci"],
              acceptable: ["conocí gente increíble", "conoci a gente increible"],
              explanation:
                "Preterite of conocer + personal «a».",
            },
            {
              id: "sb-l15-q6",
              type: "short",
              prompt:
                "Completa: «___ un viaje» (to take a trip — hacer).",
              answer: "hacer",
              keywords: ["hacer"],
              acceptable: ["Hacer", "hizo", "hice"],
              explanation:
                "«Hacer un viaje» = to take/go on a trip.",
            },
          ],
        },
        {
          id: "sb-l16",
          title: "El futuro y el condicional",
          questions: [
            {
              id: "sb-l16-q1",
              type: "mcq",
              prompt: "«Mañana ___ al médico.» (ir, future, yo)",
              choices: ["voy", "iré", "iba", "fui"],
              answerIndex: 1,
              explanation:
                "Simple future of ir, yo → «iré».",
            },
            {
              id: "sb-l16-q2",
              type: "mcq",
              prompt: "«Me ___ vivir en el campo.» (gustar, conditional)",
              choices: ["gusta", "gustaba", "gustaría", "gustará"],
              answerIndex: 2,
              explanation:
                "Conditional «gustaría» = would like.",
            },
            {
              id: "sb-l16-q3",
              type: "tf",
              prompt:
                "The Spanish future tense uses infinitive + endings (-é, -ás, -á…).",
              answer: true,
              explanation:
                "hablaré, hablarás, hablará — endings added to the whole infinitive.",
            },
            {
              id: "sb-l16-q4",
              type: "mcq",
              prompt: "Irregular future stem of «hacer» is",
              choices: ["hacer-", "har-", "hac-", "hiz-"],
              answerIndex: 1,
              explanation:
                "har- → haré, harás… like decir → dir-.",
            },
            {
              id: "sb-l16-q5",
              type: "short",
              prompt:
                "Conjuga (futuro, él): «tener» → ___.",
              answer: "tendrá",
              keywords: ["tendrá", "tendra"],
              acceptable: ["tendra"],
              explanation:
                "Irregular stem tendr- + -á.",
            },
            {
              id: "sb-l16-q6",
              type: "short",
              prompt:
                "Conjuga (condicional, yo): «poder» → ___.",
              answer: "podría",
              keywords: ["podría", "podria"],
              acceptable: ["podria"],
              explanation:
                "Irregular stem podr- + -ía.",
            },
          ],
        },
        {
          id: "sb-l17",
          title: "El imperativo y las oraciones de relativo",
          questions: [
            {
              id: "sb-l17-q1",
              type: "mcq",
              prompt: "Affirmative tú command of «hablar»:",
              choices: ["hablas", "habla", "hable", "hable"],
              answerIndex: 1,
              explanation:
                "Tú command = third-person singular form: «habla».",
            },
            {
              id: "sb-l17-q2",
              type: "mcq",
              prompt: "Negative tú command of «comer»: «No ___»",
              choices: ["comes", "come", "comas", "coma"],
              answerIndex: 2,
              explanation:
                "Negative commands use the subjunctive: «no comas».",
            },
            {
              id: "sb-l17-q3",
              type: "tf",
              prompt:
                "«El libro que leí» uses «que» as a relative pronoun meaning 'that/which'.",
              answer: true,
              explanation:
                "«Que» is the most common relative pronoun.",
            },
            {
              id: "sb-l17-q4",
              type: "mcq",
              prompt: "«La ciudad ___ nací es muy pequeña.»",
              choices: ["que", "donde", "cuyo", "quien"],
              answerIndex: 1,
              explanation:
                "Place → «donde» (or «en la que»).",
            },
            {
              id: "sb-l17-q5",
              type: "short",
              prompt:
                "Imperativo afirmativo (tú) de «hacer»: ___.",
              answer: "haz",
              keywords: ["haz"],
              acceptable: ["Haz"],
              explanation:
                "Irregular: haz, di, ve, pon, sal, ten, sé.",
            },
            {
              id: "sb-l17-q6",
              type: "short",
              prompt:
                "Completa: «El chico ___ vive al lado es médico.» (who)",
              answer: "que",
              keywords: ["que"],
              acceptable: ["que"],
              explanation:
                "«Que» for 'who/that' referring to people or things.",
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
                "Rewrite in formal register — conjugate for «usted»: «Quisiera saber si ___ (querer) recibir más información.»",
              answer: "quiere",
              keywords: ["quiere"],
              acceptable: ["quiere", "desea", "quisiera"],
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
        {
          id: "sb-l18",
          title: "Organización social: lectura y conectores",
          questions: [
            {
              id: "sb-l18-q1",
              type: "mcq",
              prompt:
                "Lee: «El ayuntamiento ha puesto en marcha un programa de voluntariado. Los vecinos pueden apuntarse gratis los sábados por la mañana.» — El programa es",
              choices: [
                "paid",
                "free for residents",
                "only for students",
                "cancelled",
              ],
              answerIndex: 1,
              explanation:
                "«Apuntarse gratis» = sign up free of charge.",
            },
            {
              id: "sb-l18-q2",
              type: "mcq",
              prompt: "«Poner en marcha» significa",
              choices: ["to cancel", "to launch/start", "to close", "to delay"],
              answerIndex: 1,
              explanation:
                "«Poner en marcha» = to set in motion, launch.",
            },
            {
              id: "sb-l18-q3",
              type: "tf",
              prompt:
                "«Los vecinos» means 'the neighbours' — people living in the area.",
              answer: true,
              explanation:
                "Vecino/a = neighbour; barrio = neighbourhood.",
            },
            {
              id: "sb-l18-q4",
              type: "mcq",
              prompt: "Connector for addition: «___ es gratis, es divertido.»",
              choices: ["Pero", "Además de", "Sin embargo", "Porque"],
              answerIndex: 1,
              explanation:
                "«Además de» = as well as / besides — addition.",
            },
            {
              id: "sb-l18-q5",
              type: "short",
              prompt:
                "Traduce: 'the town hall / city council'. (two words)",
              answer: "el ayuntamiento",
              keywords: ["ayuntamiento"],
              acceptable: ["ayuntamiento", "el ayuntamiento"],
              explanation:
                "El ayuntamiento — local government vocabulary.",
            },
            {
              id: "sb-l18-q6",
              type: "short",
              prompt:
                "Traduce: 'to sign up / register' (reflexive verb).",
              answer: "apuntarse",
              keywords: ["apuntarse", "inscribirse", "registrarse"],
              acceptable: ["inscribirse", "registrarse"],
              explanation:
                "«Apuntarse» / «inscribirse» = to sign up.",
            },
          ],
        },
        {
          id: "sb-l19",
          title: "Compartir el planeta: el medio ambiente",
          questions: [
            {
              id: "sb-l19-q1",
              type: "mcq",
              prompt:
                "«Hay que reducir el consumo de plástico de un solo uso.» — «de un solo uso» means",
              choices: [
                "reusable",
                "single-use / disposable",
                "recycled",
                "expensive",
              ],
              answerIndex: 1,
              explanation:
                "«De un solo uso» = single-use, disposable.",
            },
            {
              id: "sb-l19-q2",
              type: "mcq",
              prompt: "«El cambio climático» significa",
              choices: [
                "the weather forecast",
                "climate change",
                "a season",
                "a storm",
              ],
              answerIndex: 1,
              explanation:
                "Key environment term.",
            },
            {
              id: "sb-l19-q3",
              type: "tf",
              prompt:
                "«Las energías renovables» include solar and wind power.",
              answer: true,
              explanation:
                "Solar, eólica, hidráulica = energías renovables.",
            },
            {
              id: "sb-l19-q4",
              type: "mcq",
              prompt: "«La huella de carbono» es",
              choices: [
                "a shoe brand",
                "the carbon footprint",
                "a type of fuel",
                "a forest",
              ],
              answerIndex: 1,
              explanation:
                "«Huella de carbono» = carbon footprint.",
            },
            {
              id: "sb-l19-q5",
              type: "short",
              prompt:
                "Traduce: 'to recycle'. (Spanish infinitive)",
              answer: "reciclar",
              keywords: ["reciclar"],
              acceptable: ["reciclar"],
              explanation:
                "Reciclar — regular -ar verb.",
            },
            {
              id: "sb-l19-q6",
              type: "short",
              prompt:
                "Completa: «Tenemos que ___ el planeta» (proteger).",
              answer: "proteger",
              keywords: ["proteger", "salvar", "cuidar"],
              acceptable: ["salvar", "cuidar"],
              explanation:
                "Proteger / salvar / cuidar el planeta.",
            },
          ],
        },
        {
          id: "sb-l20",
          title: "Repaso: lectura del texto 'Un barrio sostenible'",
          questions: [
            {
              id: "sb-l20-q1",
              type: "mcq",
              prompt:
                "Lee: «En nuestro barrio hemos instalado paneles solares y un jardín comunitario. Gracias a esto, la factura de la luz ha bajado un 30%.» — La factura",
              choices: [
                "has risen",
                "has gone down",
                "stayed the same",
                "was cancelled",
              ],
              answerIndex: 1,
              explanation:
                "«Ha bajado» = has gone down/decreased.",
            },
            {
              id: "sb-l20-q2",
              type: "mcq",
              prompt: "«Un jardín comunitario» es",
              choices: [
                "a private garden",
                "a community garden",
                "a shopping centre",
                "a school",
              ],
              answerIndex: 1,
              explanation:
                "Comunitario = shared by the community.",
            },
            {
              id: "sb-l20-q3",
              type: "tf",
              prompt:
                "«Gracias a» introduces a positive cause — 'thanks to'.",
              answer: true,
              explanation:
                "«Gracias a» = positive cause; «a causa de» = neutral/negative.",
            },
            {
              id: "sb-l20-q4",
              type: "mcq",
              prompt:
                "«Los paneles solares» generate",
              choices: ["wind", "electricity from the sun", "water", "gas"],
              answerIndex: 1,
              explanation:
                "Paneles solares = solar panels.",
            },
            {
              id: "sb-l20-q5",
              type: "short",
              prompt:
                "¿Cuánto bajó la factura? (un número con %)",
              answer: "30%",
              keywords: ["30"],
              acceptable: ["30", "30 por ciento", "un 30%"],
              explanation:
                "«Ha bajado un 30%».",
            },
            {
              id: "sb-l20-q6",
              type: "short",
              prompt:
                "Traduce: 'the electricity bill' (two words).",
              answer: "la factura de la luz",
              keywords: ["factura", "luz"],
              acceptable: ["la factura de luz", "la factura"],
              explanation:
                "La factura de la luz = electricity bill.",
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
        {
          id: "sb-l21",
          title: "Tipos de texto: correo, artículo, discurso",
          questions: [
            {
              id: "sb-l21-q1",
              type: "mcq",
              prompt: "Un correo formal empieza con",
              choices: [
                "«¡Hola!»",
                "«Estimado señor López:» o «Estimado/a…»",
                "«Oye,»",
                "«¿Qué tal?»",
              ],
              answerIndex: 1,
              explanation:
                "Registro formal: «Estimado/a + nombre:» con dos puntos.",
            },
            {
              id: "sb-l21-q2",
              type: "mcq",
              prompt: "Un artículo de revista escolar suele tener",
              choices: [
                "sin título",
                "un título llamativo, párrafos con subtítulos y un tono semformal",
                "solo opiniones",
                "números",
              ],
              answerIndex: 1,
              explanation:
                "Artículo: título, introducción, desarrollo, conclusión.",
            },
            {
              id: "sb-l21-q3",
              type: "tf",
              prompt:
                "Un discurso (speech) se dirige directamente al público y usa preguntas retóricas.",
              answer: true,
              explanation:
                "Características: «queridos compañeros», preguntas retóricas, llamada a la acción.",
            },
            {
              id: "sb-l21-q4",
              type: "mcq",
              prompt: "Un folleto (brochure) informativo contiene",
              choices: [
                "capítulos largos",
                "texto breve, secciones, datos y a menudo imágenes",
                "una entrevista",
                "poesía",
              ],
              answerIndex: 1,
              explanation:
                "Folleto: información organizada visualmente, lenguaje persuasivo.",
            },
            {
              id: "sb-l21-q5",
              type: "short",
              prompt:
                "Frase formal para cerrar una carta: «Atentamente,» o «Cordialmente,» — escribe una.",
              answer: "atentamente",
              keywords: ["atentamente", "cordialmente", "un saludo"],
              acceptable: ["cordialmente", "atentamente"],
              explanation:
                "«Atentamente» / «Cordialmente» = formal closings.",
            },
            {
              id: "sb-l21-q6",
              type: "short",
              prompt:
                "En una reseña (review), ¿qué sección recomienda o valora al final? (una palabra)",
              answer: "conclusión",
              keywords: ["conclusión", "conclusion", "recomendación", "recomendacion"],
              acceptable: ["conclusion", "la conclusión", "recomendacion"],
              explanation:
                "La conclusión/recomendación final cierra la reseña.",
            },
          ],
        },
        {
          id: "sb-l22",
          title: "Entrevista y reseña: convenciones",
          questions: [
            {
              id: "sb-l22-q1",
              type: "mcq",
              prompt: "Una entrevista escrita suele estar en formato",
              choices: [
                "de párrafos largos",
                "de preguntas y respuestas (entrevistador/entrevistado)",
                "de carta",
                "de lista",
              ],
              answerIndex: 1,
              explanation:
                "Formato Q&A con el nombre de quien habla.",
            },
            {
              id: "sb-l22-q2",
              type: "mcq",
              prompt: "Una reseña de un libro debe incluir",
              choices: [
                "solo el resumen",
                "una breve descripción, evaluación y recomendación",
                "nada de opinión",
                "el precio solamente",
              ],
              answerIndex: 1,
              explanation:
                "Reseña = describir + evaluar + recomendar.",
            },
            {
              id: "sb-l22-q3",
              type: "tf",
              prompt:
                "En una entrevista, las preguntas suelen usar «¿usted…?» cuando el registro es formal.",
              answer: true,
              explanation:
                "Usted en contextos formales; tú en informales.",
            },
            {
              id: "sb-l22-q4",
              type: "mcq",
              prompt: "Adjetivo positivo para una reseña:",
              choices: ["aburrido", "emocionante", "terrible", "mediocre"],
              answerIndex: 1,
              explanation:
                "«Emocionante», «impresionante», «conmovedor» = positivos.",
            },
            {
              id: "sb-l22-q5",
              type: "short",
              prompt:
                "Traduce al español: 'an interview' (feminine noun).",
              answer: "una entrevista",
              keywords: ["entrevista"],
              acceptable: ["entrevista", "la entrevista"],
              explanation:
                "La entrevista — de entrevistar.",
            },
            {
              id: "sb-l22-q6",
              type: "short",
              prompt:
                "Traduce: 'I would recommend this film' (recomendar, condicional).",
              answer: "recomendaría",
              keywords: ["recomendaría", "recomendaria", "recomiendo"],
              acceptable: ["recomendaria", "recomiendo esta película", "recomiendo"],
              explanation:
                "«Recomendaría esta película» (conditional for polite recommendation).",
            },
          ],
        },
        {
          id: "sb-l23",
          title: "Estrategias de examen: comprensión auditiva y lectora",
          questions: [
            {
              id: "sb-l23-q1",
              type: "mcq",
              prompt: "Antes de escuchar el audio en el examen debes",
              choices: [
                "cerrar los ojos",
                "leer las preguntas y predecir el contenido",
                "escribir las respuestas",
                "esperar",
              ],
              answerIndex: 1,
              explanation:
                "Predecir el vocabulario ayuda a captar la información clave.",
            },
            {
              id: "sb-l23-q2",
              type: "mcq",
              prompt: "Si no entiendes una palabra al leer, primero",
              choices: [
                "usa el diccionario",
                "deduce el significado por el contexto",
                "salta la pregunta",
                "tradúcela",
              ],
              answerIndex: 1,
              explanation:
                "El contexto suele revelar el significado — estrategia clave.",
            },
            {
              id: "sb-l23-q3",
              type: "tf",
              prompt:
                "En la comprensión auditiva, las preguntas suelen seguir el orden del texto.",
              answer: true,
              explanation:
                "Las respuestas aparecen secuencialmente en el audio.",
            },
            {
              id: "sb-l23-q4",
              type: "mcq",
              prompt: "«Distinguir hechos de opiniones» es una destreza de",
              choices: [
                "escritura",
                "comprensión lectora crítica",
                "pronunciación",
                "gramática",
              ],
              answerIndex: 1,
              explanation:
                "Diferenciar hecho/opinión = lectura crítica (Paper 2).",
            },
            {
              id: "sb-l23-q5",
              type: "short",
              prompt:
                "¿Cuántas tareas de escritura hay que hacer en Paper 1 de Spanish B? (número)",
              answer: "1",
              keywords: ["1"],
              acceptable: ["una", "uno"],
              explanation:
                "Un texto elegido entre tres opciones.",
            },
            {
              id: "sb-l23-q6",
              type: "short",
              prompt:
                "Nombre de la técnica: leer rápido para captar la idea general (en inglés 'skimming').",
              answer: "lectura rápida",
              keywords: ["rápid", "rapid", "skim", "general"],
              acceptable: ["skimming", "lectura general", "vistazo"],
              explanation:
                "Lectura rápida / skimming para la idea general.",
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
        {
          id: "sb-l24",
          title: "HL: análisis de un extracto literario",
          level: "HL",
          questions: [
            {
              id: "sb-l24-q1",
              type: "mcq",
              prompt:
                "En HL Paper 2 puede aparecer un extracto literario. Al analizarlo, hay que fijarse en",
              choices: [
                "solo el argumento",
                "cómo el lenguaje crea personajes, ambiente y tema",
                "la biografía del autor",
                "la traducción",
              ],
              answerIndex: 1,
              explanation:
                "HL exige análisis de las técnicas del autor, no solo comprensión.",
            },
            {
              id: "sb-l24-q2",
              type: "mcq",
              prompt:
                "Lee: «La casa respiraba silencio; hasta el reloj parecía latir más despacio.» — El efecto principal es",
              choices: [
                "la personificación",
                "la rima",
                "las estadísticas",
                "una pregunta",
              ],
              answerIndex: 0,
              explanation:
                "La casa «respira», el reloj «late» — personificación que crea ambiente.",
            },
            {
              id: "sb-l24-q3",
              type: "tf",
              prompt:
                "Un narrador en primera persona da acceso a sus pensamientos pero puede ser inconfiable.",
              answer: true,
              explanation:
                "La perspectiva narrativa moldea nuestra lectura.",
            },
            {
              id: "sb-l24-q4",
              type: "mcq",
              prompt: "El «tono» de un extracto se refiere a",
              choices: [
                "el volumen",
                "la actitud del escritor expresada por la elección de palabras",
                "la letra",
                "el escenario",
              ],
              answerIndex: 1,
              explanation:
                "Tono = actitud (irónico, nostálgico, crítico…) transmitida por la dicción.",
            },
            {
              id: "sb-l24-q5",
              type: "short",
              prompt:
                "Nombra la figura retórica: «Era una roca en la tormenta.» (una palabra)",
              answer: "metáfora",
              keywords: ["metáfora", "metafora"],
              acceptable: ["metafora", "una metáfora"],
              explanation:
                "Comparación directa sin «como» = metáfora.",
            },
            {
              id: "sb-l24-q6",
              type: "short",
              prompt:
                "La persona que cuenta la historia en un texto literario es el/la ___.",
              answer: "narrador/a",
              keywords: ["narrador", "narradora"],
              acceptable: ["narrador", "narradora", "el narrador"],
              explanation:
                "Narrador ≠ autor — distinción clave en HL.",
            },
          ],
        },
        {
          id: "sb-l25",
          title: "HL: planificación del Paper 1",
          level: "HL",
          questions: [
            {
              id: "sb-l25-q1",
              type: "mcq",
              prompt: "En Paper 1 de HL hay que escribir un texto de",
              choices: [
                "100–150 palabras",
                "450–600 palabras",
                "50 palabras",
                "2000 palabras",
              ],
              answerIndex: 1,
              explanation:
                "HL: 450–600 palabras, una tarea entre tres; SL: 250–400.",
            },
            {
              id: "sb-l25-q2",
              type: "mcq",
              prompt: "Antes de escribir, el primer paso es",
              choices: [
                "empezar a escribir",
                "identificar audiencia, propósito y tipo de texto",
                "contar palabras",
                "copiar la tarea",
              ],
              answerIndex: 1,
              explanation:
                "La tarea define contexto/audiencia/propósito — la planificación empieza ahí.",
            },
            {
              id: "sb-l25-q3",
              type: "tf",
              prompt:
                "Un esquema de 5 minutos mejora la coherencia del texto final.",
              answer: true,
              explanation:
                "Planificar ideas → estructura → conectores = mayor coherencia.",
            },
            {
              id: "sb-l25-q4",
              type: "mcq",
              prompt: "El criterio «Mensaje» en Paper 1 evalúa",
              choices: [
                "la letra",
                "si el texto cumple su propósito comunicativo",
                "la velocidad",
                "la gramática solamente",
              ],
              answerIndex: 1,
              explanation:
                "¿Logra el texto su objetivo para esa audiencia?",
            },
            {
              id: "sb-l25-q5",
              type: "short",
              prompt:
                "Nombra UN conector para dar un ejemplo (en español).",
              answer: "por ejemplo",
              keywords: ["ejemplo", "como", "así", "esto es"],
              acceptable: ["por ejemplo", "como por ejemplo", "es decir"],
              explanation:
                "«Por ejemplo», «como», «es decir»…",
            },
            {
              id: "sb-l25-q6",
              type: "short",
              prompt:
                "El primer párrafo de un artículo debe captar la ___ del lector. (una palabra)",
              answer: "atención",
              keywords: ["atención", "atencion", "interés", "interes"],
              acceptable: ["atencion", "interés", "interes"],
              explanation:
                "La introducción engancha al lector — atención o interés.",
            },
          ],
        },
      ],
    },
  ],
};
