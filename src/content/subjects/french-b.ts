import type { Subject } from "../types";

export const frenchB: Subject = {
  slug: "french-b",
  name: "French B",
  short: "French B",
  color: "#A21CAF",
  emoji: "🇫🇷",
  group: "Language acquisition",
  levels: ["SL", "HL"],
  description:
    "French B — the five prescribed themes taught through vocabulary in context, grammar, register and exam skills.",
  resources: [
    {
      name: "IB Official",
      url: "https://www.ibo.org/programmes/diploma-programme/curriculum/language-acquisition/",
      note: "Subject brief and syllabus outline",
    },
    {
      name: "InThinking",
      url: "https://www.thinkib.net/french-b",
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
      id: "fb-u1",
      code: "Theme 1",
      title: "Identities",
      lessons: [
        {
          id: "fb-l1",
          title: "Vocabulaire en contexte : identité et modes de vie",
          questions: [
            {
              id: "fb-l1-q1",
              type: "mcq",
              prompt:
                "Read: «Marie se considère comme quelqu'un de très sociable ; elle adore passer du temps avec ses amis et rencontrer de nouvelles personnes.» «Sociable» means",
              choices: ["shy", "outgoing", "studious", "tired"],
              answerIndex: 1,
              explanation:
                "«Sociable» = outgoing — enjoys other people's company.",
            },
            {
              id: "fb-l1-q2",
              type: "mcq",
              prompt: "Which expression means 'self-esteem'?",
              choices: [
                "l'estime de soi",
                "la fierté",
                "l'apparence",
                "l'identité",
              ],
              answerIndex: 0,
              explanation:
                "«L'estime de soi» = self-esteem; «la fierté» = pride.",
            },
            {
              id: "fb-l1-q3",
              type: "tf",
              prompt: "«Un défi» means 'a challenge'.",
              answer: true,
              explanation:
                "«Le défi» = challenge — common Identities vocabulary.",
            },
            {
              id: "fb-l1-q4",
              type: "mcq",
              prompt:
                "Read: «Thomas ressemble beaucoup à son père : tous les deux sont calmes et aiment lire.» «Ressemble à» means",
              choices: [
                "argues with",
                "resembles / looks like",
                "obeys",
                "ignores",
              ],
              answerIndex: 1,
              explanation:
                "«Ressembler à quelqu'un» = to resemble/look like someone.",
            },
            {
              id: "fb-l1-q5",
              type: "short",
              prompt:
                "Translate to French: 'I consider myself a hardworking person.'",
              answer: "Je me considère comme une personne travailleuse.",
              keywords: ["considère", "travaill"],
              acceptable: ["je suis travailleur", "je me considere", "travailleuse", "travailleur"],
              explanation:
                "«Je me considère» + «travailleur/travailleuse» agreeing with the subject. Accept without accents.",
            },
            {
              id: "fb-l1-q6",
              type: "short",
              prompt:
                "Complete: «Mes grands-parents m'ont élevé dans un petit village, alors j'apprécie beaucoup les traditions ___.» (family)",
              answer: "familiales",
              keywords: ["familial"],
              acceptable: ["de famille", "familiale", "de ma famille"],
              explanation:
                "«Traditions familiales» — adjective agrees feminine plural with «traditions».",
            },
          ],
        },
        {
          id: "fb-l2",
          title: "Passé composé et imparfait",
          questions: [
            {
              id: "fb-l2-q1",
              type: "mcq",
              prompt: "«Quand j'étais enfant, je ___ au parc tous les jours.»",
              choices: ["suis allé", "allais", "vais", "irais"],
              answerIndex: 1,
              explanation:
                "Habitual past action → imparfait: «j'allais».",
            },
            {
              id: "fb-l2-q2",
              type: "mcq",
              prompt: "«Hier, j'___ un très bon film.» (completed action)",
              choices: ["ai vu", "voyais", "ai voir", "verrais"],
              answerIndex: 0,
              explanation:
                "One-off completed event → passé composé: «j'ai vu».",
            },
            {
              id: "fb-l2-q3",
              type: "tf",
              prompt:
                "The imparfait is used for background description — weather, time, ongoing states — in a past narrative.",
              answer: true,
              explanation:
                "«Il faisait froid», «il était huit heures» — scene-setting = imparfait.",
            },
            {
              id: "fb-l2-q4",
              type: "mcq",
              prompt: "Verbs of movement like «aller» form the passé composé with",
              choices: ["avoir", "être", "faire", "aller"],
              answerIndex: 1,
              explanation:
                "Movement/change verbs take être: «elle est allée» — and the participle agrees.",
            },
            {
              id: "fb-l2-q5",
              type: "short",
              prompt:
                "Conjugate in passé composé for «elle»: «Elle ___ (aller) au marché hier.»",
              answer: "est allée",
              keywords: ["est", "allée"],
              acceptable: ["est allee"],
              explanation:
                "Auxiliary être + feminine agreement: «elle est allée».",
            },
            {
              id: "fb-l2-q6",
              type: "short",
              prompt:
                "Translate: 'When I was young, I used to play football.' (imparfait)",
              answer: "Quand j'étais jeune, je jouais au football.",
              keywords: ["jouais", "étais", "foot"],
              acceptable: ["j'etais jeune je jouais", "petit je jouais au foot"],
              explanation:
                "Habitual past → imparfait «jouais»; state → «j'étais».",
            },
          ],
        },
      ],
    },
    {
      id: "fb-u2",
      code: "Themes 2 & 3",
      title: "Experiences and human ingenuity",
      lessons: [
        {
          id: "fb-l3",
          title: "Le subjonctif et les connecteurs",
          questions: [
            {
              id: "fb-l3-q1",
              type: "mcq",
              prompt: "«Il faut que tu ___ (faire) tes devoirs.»",
              choices: ["fais", "fasses", "feras", "faisais"],
              answerIndex: 1,
              explanation:
                "«Il faut que» requires the subjunctive: «fasses».",
            },
            {
              id: "fb-l3-q2",
              type: "mcq",
              prompt: "Which connector means 'however'?",
              choices: ["de plus", "cependant", "par conséquent", "bien que"],
              answerIndex: 1,
              explanation:
                "«Cependant» = however; «de plus» = moreover; «par conséquent» = therefore.",
            },
            {
              id: "fb-l3-q3",
              type: "tf",
              prompt:
                "«Bien que» is always followed by the subjunctive.",
              answer: true,
              explanation:
                "Unlike Spanish «aunque», French «bien que» always takes the subjunctive.",
            },
            {
              id: "fb-l3-q4",
              type: "mcq",
              prompt: "«Je veux qu'il ___ (venir) à la fête.»",
              choices: ["vient", "vienne", "viendra", "venait"],
              answerIndex: 1,
              explanation:
                "«Vouloir que» + subjunctive: «vienne».",
            },
            {
              id: "fb-l3-q5",
              type: "short",
              prompt:
                "Complete with a connector meaning 'moreover': «La technologie facilite la communication ; ___, elle crée de nouveaux emplois.»",
              answer: "de plus",
              keywords: ["plus"],
              acceptable: ["de plus", "en outre", "également", "aussi"],
              explanation:
                "«De plus» / «en outre» adds a supporting point — key Paper 1 connector.",
            },
            {
              id: "fb-l3-q6",
              type: "short",
              prompt:
                "Complete with the subjunctive: «Il est important que vous ___ (être) à l'heure.»",
              answer: "soyez",
              keywords: ["soyez"],
              explanation:
                "Être is irregular in the subjunctive: que vous soyez.",
            },
          ],
        },
        {
          id: "fb-l4",
          title: "Pronoms y et en ; accords",
          questions: [
            {
              id: "fb-l4-q1",
              type: "mcq",
              prompt: "«Tu vas au cinéma ? — Oui, j'___ vais.»",
              choices: ["en", "y", "le", "lui"],
              answerIndex: 1,
              explanation:
                "«Y» replaces à + place/thing: «j'y vais» = I'm going (there).",
            },
            {
              id: "fb-l4-q2",
              type: "mcq",
              prompt: "«Tu as des pommes ? — Oui, j'___ ai trois.»",
              choices: ["y", "en", "les", "leur"],
              answerIndex: 1,
              explanation:
                "«En» replaces de + noun: «j'en ai trois» = I have three (of them).",
            },
            {
              id: "fb-l4-q3",
              type: "tf",
              prompt:
                "The past participle agrees with a preceding direct object: «la voiture que j'ai achetée».",
              answer: true,
              explanation:
                "With avoir, agreement happens when the direct object comes BEFORE the verb.",
            },
            {
              id: "fb-l4-q4",
              type: "mcq",
              prompt: "Correct agreement: «une ___ maison»",
              choices: ["grand", "grande", "grands", "grandes"],
              answerIndex: 1,
              explanation:
                "«Maison» is feminine → «grande».",
            },
            {
              id: "fb-l4-q5",
              type: "short",
              prompt:
                "Replace «des livres» with a pronoun: «J'ai beaucoup de livres» → «J'___ ai beaucoup.»",
              answer: "en",
              keywords: ["en"],
              explanation:
                "«En» replaces «de + noun»: «j'en ai beaucoup».",
            },
            {
              id: "fb-l4-q6",
              type: "short",
              prompt:
                "Give the feminine plural of «beau» (before a consonant): «de ___ maisons»",
              answer: "belles",
              keywords: ["belles"],
              explanation:
                "beau → belle → belles (feminine plural).",
            },
          ],
        },
      ],
    },
    {
      id: "fb-u3",
      code: "Themes 4 & 5",
      title: "Social organization and sharing the planet",
      lessons: [
        {
          id: "fb-l5",
          title: "Registre : tu, vous et lettres formelles",
          questions: [
            {
              id: "fb-l5-q1",
              type: "mcq",
              prompt:
                "Appropriate opening for a formal letter whose recipient is unknown:",
              choices: [
                "Salut !",
                "Madame, Monsieur,",
                "Coucou,",
                "Cher ami,",
              ],
              answerIndex: 1,
              explanation:
                "«Madame, Monsieur,» is the standard formal salutation.",
            },
            {
              id: "fb-l5-q2",
              type: "mcq",
              prompt: "In formal address, «vous» is used with",
              choices: [
                "the tu-form verb",
                "second-person plural verb forms",
                "first-person plural",
                "no verb change",
              ],
              answerIndex: 1,
              explanation:
                "Formal «vous» always takes the vous-form: «vous avez».",
            },
            {
              id: "fb-l5-q3",
              type: "tf",
              prompt:
                "A formal letter can end with «Bisous» (kisses).",
              answer: false,
              explanation:
                "«Bisous» is for friends/family. Formal: «Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.»",
            },
            {
              id: "fb-l5-q4",
              type: "mcq",
              prompt:
                "Which phrase fits a formal request email?",
              choices: [
                "Dis, envoie-moi les infos !",
                "Je vous écris afin de solliciter des informations complémentaires.",
                "Tu peux m'envoyer ça ?",
                "T'as les données ?",
              ],
              answerIndex: 1,
              explanation:
                "«Je vous écris afin de solliciter…» — formal vous + formal vocabulary.",
            },
            {
              id: "fb-l5-q5",
              type: "short",
              prompt:
                "Rewrite formally — replace «tu veux»: «Je voudrais savoir si ___ (vous) avez reçu ma demande.»",
              answer: "vous",
              keywords: ["vous"],
              explanation:
                "Formal requests use «vous»; the verb stays «avez».",
            },
            {
              id: "fb-l5-q6",
              type: "short",
              prompt:
                "Give a formal French letter closing (one phrase).",
              answer: "Cordialement",
              keywords: ["cordial", "salutations", "agréer"],
              acceptable: ["je vous prie d'agréer", "cordialement", "salutations distinguées", "respectueusement"],
              explanation:
                "«Cordialement» (professional) or the longer «Je vous prie d'agréer … mes salutations distinguées».",
            },
          ],
        },
        {
          id: "fb-l6",
          title: "Compréhension écrite : l'environnement",
          questions: [
            {
              id: "fb-l6-q1",
              type: "mcq",
              prompt:
                "Read: «Chaque année, des millions d'hectares de forêt sont abattus, ce qui entraîne la perte d'habitats et l'augmentation du CO₂ dans l'atmosphère.» Deforestation causes",
              choices: [
                "habitat loss and rising CO₂",
                "cleaner air",
                "more forests",
                "colder temperatures",
              ],
              answerIndex: 0,
              explanation:
                "«La perte d'habitats» = habitat loss; «l'augmentation du CO₂» = rising CO₂.",
            },
            {
              id: "fb-l6-q2",
              type: "mcq",
              prompt: "«Le changement climatique» means",
              choices: [
                "weather forecast",
                "climate change",
                "season change",
                "wind direction",
              ],
              answerIndex: 1,
              explanation:
                "«Changement climatique» = climate change; «la météo» = weather.",
            },
            {
              id: "fb-l6-q3",
              type: "tf",
              prompt: "«Recycler» means 'to recycle'.",
              answer: true,
              explanation:
                "Core Sharing-the-planet vocabulary: recycler, réutiliser, réduire.",
            },
            {
              id: "fb-l6-q4",
              type: "mcq",
              prompt:
                "Read: «Pour réduire notre empreinte carbone, nous devrions prendre davantage les transports en commun et manger moins de viande.» The author recommends",
              choices: [
                "driving more",
                "public transport and less meat",
                "eating more meat",
                "no travel at all",
              ],
              answerIndex: 1,
              explanation:
                "«L'empreinte carbone» = carbon footprint; «nous devrions» = we should.",
            },
            {
              id: "fb-l6-q5",
              type: "short",
              prompt:
                "Translate: 'We should protect endangered species.'",
              answer: "Nous devrions protéger les espèces menacées.",
              keywords: ["devrions", "protéger", "espèces"],
              acceptable: ["nous devrions proteger", "il faut proteger", "espèces en voie de disparition"],
              explanation:
                "«Devoir» conditional + infinitive; «espèces menacées / en voie de disparition» = endangered.",
            },
            {
              id: "fb-l6-q6",
              type: "short",
              prompt:
                "What does «les énergies renouvelables» mean? Answer in English.",
              answer: "renewable energy",
              keywords: ["renewable", "energ"],
              explanation:
                "«Renouvelable» = renewable; «l'énergie» = energy.",
            },
          ],
        },
      ],
    },
    {
      id: "fb-u4",
      code: "Assessment",
      title: "Exam skills",
      lessons: [
        {
          id: "fb-l7",
          title: "Paper 1 : types de textes et conventions",
          questions: [
            {
              id: "fb-l7-q1",
              type: "mcq",
              prompt: "Typical features of a BLOG post:",
              choices: [
                "formal salutation and signature",
                "personal anecdotes, informal tone, direct address to readers",
                "objective third-person report",
                "statistics only",
              ],
              answerIndex: 1,
              explanation:
                "Blogs are personal and informal — anecdotes, opinions, addressing readers.",
            },
            {
              id: "fb-l7-q2",
              type: "mcq",
              prompt: "A SPEECH (discours) should contain",
              choices: [
                "no greeting",
                "audience address, rhetorical questions and a clear message",
                "only statistics",
                "stage directions",
              ],
              answerIndex: 1,
              explanation:
                "Speeches address the audience directly («Mesdames et Messieurs») and persuade.",
            },
            {
              id: "fb-l7-q3",
              type: "tf",
              prompt:
                "In Paper 1 the text type should match the task's purpose and target audience.",
              answer: true,
              explanation:
                "Conventions of the chosen text type drive the Criterion C mark.",
            },
            {
              id: "fb-l7-q4",
              type: "mcq",
              prompt: "A formal letter of application opens with",
              choices: [
                "«Salut !»",
                "«Madame, Monsieur,»",
                "«Cher copain,»",
                "no greeting",
              ],
              answerIndex: 1,
              explanation:
                "Formal salutation to an unknown addressee.",
            },
            {
              id: "fb-l7-q5",
              type: "short",
              prompt:
                "Name ONE feature that distinguishes a diary entry (entrée de journal intime). English or French.",
              answer: "date and personal first-person reflection",
              keywords: ["date", "personal", "first", "je"],
              acceptable: ["la date", "very informal", "feelings"],
              explanation:
                "Diary entries: date, «cher journal», informal register, personal feelings.",
            },
            {
              id: "fb-l7-q6",
              type: "short",
              prompt:
                "SL Paper 1: approximately how many words? (one number)",
              answer: "250",
              keywords: ["250"],
              acceptable: ["250-400"],
              explanation: "SL: 250–400 words; HL: 450–600.",
            },
          ],
        },
        {
          id: "fb-l8",
          title: "Paper 2 et l'oral individuel",
          questions: [
            {
              id: "fb-l8-q1",
              type: "mcq",
              prompt: "Best first strategy in the reading paper:",
              choices: [
                "translate every word",
                "skim for gist, then scan for the answers",
                "answer without reading",
                "read only the title",
              ],
              answerIndex: 1,
              explanation:
                "Skim for gist → read questions → scan the text for evidence.",
            },
            {
              id: "fb-l8-q2",
              type: "mcq",
              prompt:
                "In 'true/false with justification' questions you must",
              choices: [
                "tick true or false only",
                "identify the part of the text proving your answer",
                "give your opinion",
                "leave it blank",
              ],
              answerIndex: 1,
              explanation:
                "The justification — the textual evidence — carries the marks.",
            },
            {
              id: "fb-l8-q3",
              type: "tf",
              prompt:
                "The individual oral gives 15 minutes of preparation on a visual stimulus.",
              answer: true,
              explanation:
                "Language B IO: 15 min prep on a stimulus linked to a theme.",
            },
            {
              id: "fb-l8-q4",
              type: "mcq",
              prompt:
                "If you miss a word in the listening exam, you should",
              choices: [
                "stop listening",
                "infer from context and keep going",
                "ask the invigilator",
                "replay it yourself",
              ],
              answerIndex: 1,
              explanation:
                "Context inference is a core listening skill; you cannot pause the recording.",
            },
            {
              id: "fb-l8-q5",
              type: "short",
              prompt:
                "Give ONE strategy for the IO discussion. Brief answer.",
              answer: "link the stimulus to the theme and justify opinions",
              keywords: ["theme", "opinion"],
              acceptable: ["connect to the theme", "vary vocabulary", "justify opinions"],
              explanation:
                "Move beyond description to theme-level discussion and opinions.",
            },
            {
              id: "fb-l8-q6",
              type: "short",
              prompt:
                "What does 'justification' require in true/false questions? One short phrase.",
              answer: "evidence from the text",
              keywords: ["text", "evidence"],
              acceptable: ["a quotation", "the proving sentence"],
              explanation:
                "Cite the textual evidence — not just true/false.",
            },
          ],
        },
      ],
    },
    {
      id: "fb-u5",
      code: "HL extension",
      title: "HL skills",
      level: "HL",
      lessons: [
        {
          id: "fb-l9",
          title: "Analyse de textes littéraires",
          level: "HL",
          questions: [
            {
              id: "fb-l9-q1",
              type: "mcq",
              prompt:
                "At HL, literary works are studied to develop",
              choices: [
                "translation speed",
                "interpretation of themes, characters and authorial choices",
                "spelling",
                "plot memorisation",
              ],
              answerIndex: 1,
              explanation:
                "HL includes two literary works — the aim is interpretation.",
            },
            {
              id: "fb-l9-q2",
              type: "mcq",
              prompt: "«Le narrateur à la première personne» is",
              choices: [
                "the omniscient narrator",
                "the first-person narrator",
                "the antagonist",
                "the author",
              ],
              answerIndex: 1,
              explanation: "«Narrateur à la première personne» = 'je' narrator.",
            },
            {
              id: "fb-l9-q3",
              type: "tf",
              prompt:
                "«La métaphore» compares using «comme» (like/as).",
              answer: false,
              explanation:
                "With «comme» it is a «comparaison» (simile); a metaphor states identity directly.",
            },
            {
              id: "fb-l9-q4",
              type: "mcq",
              prompt: "«Ironique», «nostalgique», «critique» describe",
              choices: [
                "the setting",
                "the narrator's tone",
                "the plot",
                "the rhythm",
              ],
              answerIndex: 1,
              explanation: "Tone vocabulary = the narrator's attitude.",
            },
            {
              id: "fb-l9-q5",
              type: "short",
              prompt:
                "Name ONE narrative technique you might analyse (English or French).",
              answer: "flashback",
              keywords: ["flashback", "retour", "symbol", "iron", "foreshadow"],
              acceptable: ["retour en arrière", "symbolisme", "ironie"],
              explanation:
                "Retour en arrière (flashback), symbolisme, ironie…",
            },
            {
              id: "fb-l9-q6",
              type: "short",
              prompt:
                "Translate: 'The author uses irony to criticise society.'",
              answer: "L'auteur utilise l'ironie pour critiquer la société.",
              keywords: ["ironie", "critiquer", "société"],
              acceptable: ["l'auteur se sert de l'ironie", "pour critiquer la societe"],
              explanation:
                "«L'ironie» (feminine) + «pour + infinitive» for purpose.",
            },
          ],
        },
        {
          id: "fb-l10",
          title: "Registre nuancé et expressions idiomatiques",
          level: "HL",
          questions: [
            {
              id: "fb-l10-q1",
              type: "mcq",
              prompt: "«Poser un lapin à quelqu'un» means",
              choices: [
                "to give a rabbit",
                "to stand someone up",
                "to surprise someone",
                "to invite someone",
              ],
              answerIndex: 1,
              explanation:
                "Idiom: «poser un lapin» = to stand someone up (not turn up).",
            },
            {
              id: "fb-l10-q2",
              type: "mcq",
              prompt: "«Coûter les yeux de la tête» means",
              choices: [
                "to hurt your eyes",
                "to cost a fortune",
                "to be beautiful",
                "to be rare",
              ],
              answerIndex: 1,
              explanation:
                "= 'to cost an arm and a leg' — extremely expensive.",
            },
            {
              id: "fb-l10-q3",
              type: "tf",
              prompt:
                "Idioms are always appropriate in formal academic essays.",
              answer: false,
              explanation:
                "Idioms suit informal registers; formal writing needs measured language.",
            },
            {
              id: "fb-l10-q4",
              type: "mcq",
              prompt: "«Revenons à nos moutons» means",
              choices: [
                "let's go to the farm",
                "let's get back to the subject",
                "let's count sheep",
                "let's have lunch",
              ],
              answerIndex: 1,
              explanation:
                "Classic idiom: return to the topic at hand.",
            },
            {
              id: "fb-l10-q5",
              type: "short",
              prompt:
                "Which idiom means 'to fall in love at first sight' (literally 'a strike of lightning')?",
              answer: "avoir un coup de foudre",
              keywords: ["coup", "foudre"],
              acceptable: ["le coup de foudre", "un coup de foudre"],
              explanation:
                "«Le coup de foudre» = love at first sight.",
            },
            {
              id: "fb-l10-q6",
              type: "short",
              prompt:
                "Translate to informal French: 'He is very generous.' (idiom: «avoir le cœur sur la main»)",
              answer: "Il a le cœur sur la main.",
              keywords: ["cœur", "main"],
              acceptable: ["il a le coeur sur la main"],
              explanation:
                "«Avoir le cœur sur la main» = to be very generous; «cœur» also written «coeur».",
            },
          ],
        },
        {
          id: "fb-l11",
          title: "Paper 1 HL : textes approfondis",
          level: "HL",
          questions: [
            {
              id: "fb-l11-q1",
              type: "mcq",
              prompt:
                "HL Paper 1 requires approximately how many words?",
              choices: ["150–250", "250–400", "450–600", "700–900"],
              answerIndex: 2,
              explanation: "HL: 450–600 words; SL: 250–400.",
            },
            {
              id: "fb-l11-q2",
              type: "mcq",
              prompt: "Top-band HL writing is characterised by",
              choices: [
                "simple sentences only",
                "developed arguments, counter-arguments and cohesion",
                "bullet points",
                "no opinion",
              ],
              answerIndex: 1,
              explanation:
                "HL expects argument development, balance and cohesion.",
            },
            {
              id: "fb-l11-q3",
              type: "tf",
              prompt:
                "A sophisticated HL response may shift register deliberately — e.g. a formal frame with a personal anecdote.",
              answer: true,
              explanation:
                "Controlled register variation demonstrates HL-level command.",
            },
            {
              id: "fb-l11-q4",
              type: "mcq",
              prompt:
                "Which sentence shows HL-level structure?",
              choices: [
                "«J'aime le sport. C'est bien.»",
                "«Bien que je reconnaisse les avantages de la technologie, je me demande si nous ne devenons pas trop dépendants d'elle.»",
                "«La technologie est bien et mal.»",
                "«Il y a des opinions.»",
              ],
              answerIndex: 1,
              explanation:
                "«Bien que» + subjunctive + embedded question = HL-range syntax.",
            },
            {
              id: "fb-l11-q5",
              type: "short",
              prompt:
                "Complete the concession: «___ je reconnaisse les avantages, je pense que les risques sont plus grands.» (although — needs subjunctive)",
              answer: "Bien que",
              keywords: ["bien", "que"],
              acceptable: ["bien que"],
              explanation:
                "«Bien que» + subjunctive («reconnaisse») — a high-scoring HL structure.",
            },
            {
              id: "fb-l11-q6",
              type: "short",
              prompt:
                "Give a formal French phrase to introduce a counter-argument ('on the other hand').",
              answer: "en revanche",
              keywords: ["revanche", "part", "cependant"],
              acceptable: ["en revanche", "par contre", "d'un autre côté", "cependant"],
              explanation:
                "«En revanche», «par contre», «d'un autre côté» — contrast signposts.",
            },
          ],
        },
      ],
    },
  ],
};
