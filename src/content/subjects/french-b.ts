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
        {
          id: "fb-l12",
          title: "Identités : lecture et vocabulaire",
          questions: [
            {
              id: "fb-l12-q1",
              type: "mcq",
              prompt:
                "Lis : « Bien qu'elle soit née à Dakar, Aïcha a grandi à Montréal. Elle se sent chez elle dans les deux cultures. » — « a grandi » signifie",
              choices: ["was born", "grew up", "studied", "travelled"],
              answerIndex: 1,
              explanation:
                "« grandir » = to grow up (passé composé : a grandi).",
            },
            {
              id: "fb-l12-q2",
              type: "mcq",
              prompt: "« se sentir chez soi » signifie",
              choices: [
                "to stay at home",
                "to feel at home / to belong",
                "to be homesick",
                "to work from home",
              ],
              answerIndex: 1,
              explanation:
                "Se sentir chez soi = feel at home, feel you belong.",
            },
            {
              id: "fb-l12-q3",
              type: "tf",
              prompt:
                "« Je m'entends bien avec ma sœur » — « s'entendre avec » means 'to get along with'.",
              answer: true,
              explanation:
                "S'entendre (bien/mal) avec quelqu'un.",
            },
            {
              id: "fb-l12-q4",
              type: "mcq",
              prompt:
                "« Elle est fière de ses racines. » — « les racines » refers to",
              choices: ["hair", "family trees", "cultural origins", "plants"],
              answerIndex: 2,
              explanation:
                "Racines = roots — vocabulaire de l'identité.",
            },
            {
              id: "fb-l12-q5",
              type: "short",
              prompt:
                "Traduis : 'self-esteem' (deux mots en français).",
              answer: "l'estime de soi",
              keywords: ["estime"],
              acceptable: ["estime de soi", "la confiance en soi"],
              explanation:
                "L'estime de soi — also « la confiance en soi ».",
            },
            {
              id: "fb-l12-q6",
              type: "short",
              prompt:
                "Complète : « Je suis fière de mes ___ » (origines/racines).",
              answer: "racines",
              keywords: ["racines", "origines"],
              acceptable: ["origines"],
              explanation:
                "Ses racines = her roots.",
            },
          ],
        },
        {
          id: "fb-l13",
          title: "Les pronoms relatifs : qui, que, dont",
          questions: [
            {
              id: "fb-l13-q1",
              type: "mcq",
              prompt: "« Le garçon ___ habite à côté est médecin. »",
              choices: ["que", "qui", "dont", "où"],
              answerIndex: 1,
              explanation:
                "Subject of the relative clause → « qui ».",
            },
            {
              id: "fb-l13-q2",
              type: "mcq",
              prompt: "« Le livre ___ je lis est passionnant. »",
              choices: ["qui", "que", "dont", "lequel"],
              answerIndex: 1,
              explanation:
                "Direct object of « lire » → « que ».",
            },
            {
              id: "fb-l13-q3",
              type: "tf",
              prompt:
                "« Le film dont je t'ai parlé » uses « dont » to replace « de + noun ».",
              answer: true,
              explanation:
                "« parler de » → « dont » in the relative clause.",
            },
            {
              id: "fb-l13-q4",
              type: "mcq",
              prompt: "« La ville ___ je suis né est très petite. »",
              choices: ["que", "qui", "où", "dont"],
              answerIndex: 2,
              explanation:
                "Place (or time) → « où ».",
            },
            {
              id: "fb-l13-q5",
              type: "short",
              prompt:
                "Complète : « C'est l'ami ___ je t'ai parlé. » (parler DE)",
              answer: "dont",
              keywords: ["dont"],
              acceptable: ["dont"],
              explanation:
                "de + l'ami → « dont ».",
            },
            {
              id: "fb-l13-q6",
              type: "short",
              prompt:
                "Complète : « la fille ___ chante » (subject = she who sings).",
              answer: "qui",
              keywords: ["qui"],
              acceptable: ["qui chante"],
              explanation:
                "Subject relative pronoun → « qui ».",
            },
          ],
        },
        {
          id: "fb-l14",
          title: "Conditionnel, futur simple et impératif",
          questions: [
            {
              id: "fb-l14-q1",
              type: "mcq",
              prompt: "« Demain, j'___ chez le médecin. » (aller, futur)",
              choices: ["vais", "irai", "allais", "suis allé"],
              answerIndex: 1,
              explanation:
                "Futur simple d'« aller », je → irai (radical irrégulier ir-).",
            },
            {
              id: "fb-l14-q2",
              type: "mcq",
              prompt: "« J'___ vivre à la campagne. » (aimer, conditionnel)",
              choices: ["aime", "aimais", "aimerais", "aimerai"],
              answerIndex: 2,
              explanation:
                "Conditionnel « aimerais » = would like.",
            },
            {
              id: "fb-l14-q3",
              type: "tf",
              prompt:
                "The futur simple uses infinitive + endings (-ai, -as, -a…); the conditional uses the same stem + imparfait endings.",
              answer: true,
              explanation:
                "je finirai (futur) vs je finirais (conditionnel).",
            },
            {
              id: "fb-l14-q4",
              type: "mcq",
              prompt: "Impératif (tu) de « finir » :",
              choices: ["finis", "finit", "finissez", "finissons"],
              answerIndex: 0,
              explanation:
                "Tu-imperative = tu-form without -s for -ir verbs: « finis ».",
            },
            {
              id: "fb-l14-q5",
              type: "short",
              prompt:
                "Conjugue (futur, elle) : « être » → ___.",
              answer: "sera",
              keywords: ["sera"],
              acceptable: ["sera"],
              explanation:
                "Radical irrégulier ser- : elle sera.",
            },
            {
              id: "fb-l14-q6",
              type: "short",
              prompt:
                "Impératif (nous) de « manger » : « ___ ensemble ! »",
              answer: "mangeons",
              keywords: ["mangeons"],
              acceptable: ["Mangeons"],
              explanation:
                "Nous-form without subject = imperative: mangeons !",
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
        {
          id: "fb-l15",
          title: "Expériences : lecture d'un récit de voyage",
          questions: [
            {
              id: "fb-l15-q1",
              type: "mcq",
              prompt:
                "Lis : « L'année dernière, j'ai décidé de voyager seule en Amérique du Sud. Au début, j'avais peur, mais j'ai vite rencontré des gens incroyables. » — La narratrice",
              choices: [
                "travelled with friends",
                "travelled alone",
                "never left home",
                "was never afraid",
              ],
              answerIndex: 1,
              explanation:
                "« voyager seule » = travel alone (feminine agreement).",
            },
            {
              id: "fb-l15-q2",
              type: "mcq",
              prompt: "« au début » signifie",
              choices: ["at the end", "at first", "however", "therefore"],
              answerIndex: 1,
              explanation:
                "« au début » = at the beginning.",
            },
            {
              id: "fb-l15-q3",
              type: "tf",
              prompt:
                "« j'ai vite rencontré » uses the passé composé for a completed past action.",
              answer: true,
              explanation:
                "Passé composé = completed event; imparfait = background/habit.",
            },
            {
              id: "fb-l15-q4",
              type: "mcq",
              prompt: "« Ce voyage a changé ma vie » means the trip",
              choices: [
                "cost a lot",
                "changed her life",
                "was boring",
                "ended early",
              ],
              answerIndex: 1,
              explanation:
                "« changer » = to change.",
            },
            {
              id: "fb-l15-q5",
              type: "short",
              prompt:
                "Traduis : 'I met amazing people' (rencontrer, passé composé).",
              answer: "j'ai rencontré des gens incroyables",
              keywords: ["rencontré", "rencontre"],
              acceptable: ["ai rencontré des gens incroyables", "j'ai rencontre des gens incroyables"],
              explanation:
                "Passé composé : j'ai rencontré.",
            },
            {
              id: "fb-l15-q6",
              type: "short",
              prompt:
                "Complète : « faire un ___ » (to take a trip).",
              answer: "voyage",
              keywords: ["voyage"],
              acceptable: ["un voyage"],
              explanation:
                "« Faire un voyage » = take a trip.",
            },
          ],
        },
        {
          id: "fb-l16",
          title: "La négation et les comparaisons",
          questions: [
            {
              id: "fb-l16-q1",
              type: "mcq",
              prompt: "« Je ne mange ___ viande. » (I no longer eat meat)",
              choices: ["pas de", "jamais de", "plus de", "rien de"],
              answerIndex: 2,
              explanation:
                "« ne…plus » = no longer / not any more.",
            },
            {
              id: "fb-l16-q2",
              type: "mcq",
              prompt: "« Personne n'est venu. » — « personne » here means",
              choices: ["somebody", "nobody", "everybody", "a person"],
              answerIndex: 1,
              explanation:
                "« ne…personne » / « personne ne… » = nobody.",
            },
            {
              id: "fb-l16-q3",
              type: "tf",
              prompt:
                "« plus…que » makes a comparison of superiority: « Paris est plus grand que Lyon. »",
              answer: true,
              explanation:
                "plus/moins/aussi + adjective + que = comparative.",
            },
            {
              id: "fb-l16-q4",
              type: "mcq",
              prompt: "« Mon frère est ___ moi. » (as tall as)",
              choices: [
                "plus grand que",
                "aussi grand que",
                "moins grand",
                "le plus grand",
              ],
              answerIndex: 1,
              explanation:
                "« aussi…que » = equality (as…as).",
            },
            {
              id: "fb-l16-q5",
              type: "short",
              prompt:
                "Traduis : 'nothing' in a negative sentence — « Je ne vois ___. »",
              answer: "rien",
              keywords: ["rien"],
              acceptable: ["rien"],
              explanation:
                "« ne…rien » = nothing.",
            },
            {
              id: "fb-l16-q6",
              type: "short",
              prompt:
                "Superlatif : « le ___ grand pays du monde » (the biggest).",
              answer: "plus",
              keywords: ["plus"],
              acceptable: ["le plus grand"],
              explanation:
                "« le plus + adjective » = superlative.",
            },
          ],
        },
        {
          id: "fb-l17",
          title: "Passé composé ou imparfait : révision",
          questions: [
            {
              id: "fb-l17-q1",
              type: "mcq",
              prompt: "« Quand j'___ enfant, je jouais dehors. » (être)",
              choices: ["ai été", "étais", "étais allé", "suis"],
              answerIndex: 1,
              explanation:
                "Background state in the past → imparfait « j'étais ».",
            },
            {
              id: "fb-l17-q2",
              type: "mcq",
              prompt: "« Soudain, le téléphone ___ . » (sonner — sudden event)",
              choices: ["sonnait", "a sonné", "sonne", "sonnera"],
              answerIndex: 1,
              explanation:
                "Sudden completed event → passé composé.",
            },
            {
              id: "fb-l17-q3",
              type: "tf",
              prompt:
                "« Tous les jours » (every day) signals a habit → imparfait.",
              answer: true,
              explanation:
                "Time markers: « toujours, souvent, tous les jours » → imparfait.",
            },
            {
              id: "fb-l17-q4",
              type: "mcq",
              prompt: "« Il pleuvait quand nous ___ . » (partir)",
              choices: [
                "partions",
                "sommes partis",
                "partons",
                "partirons",
              ],
              answerIndex: 1,
              explanation:
                "Ongoing rain (imparfait) interrupted by departure (passé composé).",
            },
            {
              id: "fb-l17-q5",
              type: "short",
              prompt:
                "Passé composé of « aller » (je): « je ___ allé ».",
              answer: "suis",
              keywords: ["suis"],
              acceptable: ["suis allé", "je suis allé(e)"],
              explanation:
                "aller uses être : je suis allé(e).",
            },
            {
              id: "fb-l17-q6",
              type: "short",
              prompt:
                "Imparfait of « faire » (nous): « nous ___ ».",
              answer: "faisions",
              keywords: ["faisions"],
              acceptable: ["faisions"],
              explanation:
                "Radical fais- + -ions.",
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
        {
          id: "fb-l18",
          title: "Organisation sociale : lecture et connecteurs",
          questions: [
            {
              id: "fb-l18-q1",
              type: "mcq",
              prompt:
                "Lis : « La mairie a lancé un programme de bénévolat. Les habitants peuvent s'inscrire gratuitement le samedi matin. » — Le programme est",
              choices: [
                "payant",
                "gratuit pour les habitants",
                "réservé aux étudiants",
                "annulé",
              ],
              answerIndex: 1,
              explanation:
                "« s'inscrire gratuitement » = sign up free.",
            },
            {
              id: "fb-l18-q2",
              type: "mcq",
              prompt: "« lancer un programme » signifie",
              choices: ["to cancel", "to launch", "to close", "to delay"],
              answerIndex: 1,
              explanation:
                "Lancer = to launch/start.",
            },
            {
              id: "fb-l18-q3",
              type: "tf",
              prompt:
                "« la mairie » means the town hall — local government.",
              answer: true,
              explanation:
                "La mairie / l'hôtel de ville.",
            },
            {
              id: "fb-l18-q4",
              type: "mcq",
              prompt: "Connecteur d'ajout : « ___ c'est gratuit, c'est amusant. »",
              choices: ["Mais", "De plus", "Cependant", "Parce que"],
              answerIndex: 1,
              explanation:
                "« De plus » / « en plus » = furthermore.",
            },
            {
              id: "fb-l18-q5",
              type: "short",
              prompt:
                "Traduis : 'a volunteer' (un mot).",
              answer: "un bénévole",
              keywords: ["bénévole", "benevole", "volontaire"],
              acceptable: ["benevole", "un volontaire", "volontaire"],
              explanation:
                "Un bénévole / un volontaire.",
            },
            {
              id: "fb-l18-q6",
              type: "short",
              prompt:
                "Traduis : 'to sign up / register' (verbe pronominal).",
              answer: "s'inscrire",
              keywords: ["inscrire", "inscire"],
              acceptable: ["s'inscrire", "s'inscire", "s’inscrire"],
              explanation:
                "S'inscrire (à quelque chose).",
            },
          ],
        },
        {
          id: "fb-l19",
          title: "Partager la planète : l'environnement",
          questions: [
            {
              id: "fb-l19-q1",
              type: "mcq",
              prompt:
                "« Il faut réduire la consommation de plastique à usage unique. » — « à usage unique » means",
              choices: [
                "reusable",
                "single-use",
                "recycled",
                "expensive",
              ],
              answerIndex: 1,
              explanation:
                "« à usage unique » = disposable / single-use.",
            },
            {
              id: "fb-l19-q2",
              type: "mcq",
              prompt: "« le changement climatique » signifie",
              choices: [
                "the weather forecast",
                "climate change",
                "a season",
                "a storm",
              ],
              answerIndex: 1,
              explanation:
                "Vocabulaire environnemental clé.",
            },
            {
              id: "fb-l19-q3",
              type: "tf",
              prompt:
                "« les énergies renouvelables » include solar and wind power.",
              answer: true,
              explanation:
                "Solaire, éolienne, hydraulique.",
            },
            {
              id: "fb-l19-q4",
              type: "mcq",
              prompt: "« l'empreinte carbone » est",
              choices: [
                "a shoe brand",
                "the carbon footprint",
                "a type of fuel",
                "a forest",
              ],
              answerIndex: 1,
              explanation:
                "Empreinte = footprint.",
            },
            {
              id: "fb-l19-q5",
              type: "short",
              prompt:
                "Traduis : 'to recycle' (infinitif).",
              answer: "recycler",
              keywords: ["recycler", "recicler"],
              acceptable: ["recicler"],
              explanation:
                "Recycler — verbe régulier en -er.",
            },
            {
              id: "fb-l19-q6",
              type: "short",
              prompt:
                "Complète : « Nous devons ___ la planète » (protéger).",
              answer: "protéger",
              keywords: ["protéger", "proteger", "sauver"],
              acceptable: ["proteger", "sauver"],
              explanation:
                "Protéger / sauver la planète.",
            },
          ],
        },
        {
          id: "fb-l20",
          title: "Lecture : « Un quartier durable »",
          questions: [
            {
              id: "fb-l20-q1",
              type: "mcq",
              prompt:
                "Lis : « Dans notre quartier, nous avons installé des panneaux solaires et un jardin partagé. Grâce à cela, la facture d'électricité a baissé de 30 %. » — La facture",
              choices: [
                "a augmenté",
                "a diminué",
                "n'a pas changé",
                "a été annulée",
              ],
              answerIndex: 1,
              explanation:
                "« a baissé » = went down.",
            },
            {
              id: "fb-l20-q2",
              type: "mcq",
              prompt: "« un jardin partagé » est",
              choices: [
                "a private garden",
                "a community garden",
                "a shopping centre",
                "a school",
              ],
              answerIndex: 1,
              explanation:
                "Partagé = shared.",
            },
            {
              id: "fb-l20-q3",
              type: "tf",
              prompt:
                "« grâce à » introduces a positive cause — 'thanks to'.",
              answer: true,
              explanation:
                "Grâce à = positive; à cause de = negative.",
            },
            {
              id: "fb-l20-q4",
              type: "mcq",
              prompt: "« les panneaux solaires » produisent",
              choices: ["du vent", "de l'électricité", "de l'eau", "du gaz"],
              answerIndex: 1,
              explanation:
                "L'énergie solaire.",
            },
            {
              id: "fb-l20-q5",
              type: "short",
              prompt:
                "De combien a baissé la facture ? (un nombre avec %)",
              answer: "30%",
              keywords: ["30"],
              acceptable: ["30", "30 pour cent", "30 %"],
              explanation:
                "« a baissé de 30 % ».",
            },
            {
              id: "fb-l20-q6",
              type: "short",
              prompt:
                "Traduis : 'the electricity bill' (deux mots).",
              answer: "la facture d'électricité",
              keywords: ["facture", "électricité", "electricite"],
              acceptable: ["la facture", "la facture d'electricite"],
              explanation:
                "La facture d'électricité.",
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
        {
          id: "fb-l21",
          title: "Types de texte : courriel, article, discours",
          questions: [
            {
              id: "fb-l21-q1",
              type: "mcq",
              prompt: "Un courriel formel commence par",
              choices: [
                "« Salut ! »",
                "« Madame, » ou « Monsieur, » / « Cher Monsieur Dupont, »",
                "« Coucou, »",
                "« Yo, »",
              ],
              answerIndex: 1,
              explanation:
                "Registre formel : « Madame, / Monsieur, » ou « Cher/Chère + nom ».",
            },
            {
              id: "fb-l21-q2",
              type: "mcq",
              prompt: "Un article de magazine scolaire a généralement",
              choices: [
                "pas de titre",
                "un titre accrocheur, des paragraphes et un ton semi-formel",
                "seulement des opinions",
                "des chiffres",
              ],
              answerIndex: 1,
              explanation:
                "Article : titre, introduction, développement, conclusion.",
            },
            {
              id: "fb-l21-q3",
              type: "tf",
              prompt:
                "Un discours s'adresse directement au public et utilise des questions rhétoriques.",
              answer: true,
              explanation:
                "« Chers camarades », questions rhétoriques, appel à l'action.",
            },
            {
              id: "fb-l21-q4",
              type: "mcq",
              prompt: "Une brochure informative contient",
              choices: [
                "de longs chapitres",
                "du texte court, des sections, des données et souvent des images",
                "une interview",
                "de la poésie",
              ],
              answerIndex: 1,
              explanation:
                "Brochure : information visuelle, langage persuasif.",
            },
            {
              id: "fb-l21-q5",
              type: "short",
              prompt:
                "Formule de politesse pour finir une lettre formelle : « Je vous prie d'agréer… » ou « Cordialement » — écris-en une.",
              answer: "cordialement",
              keywords: ["cordialement", "agréer", "salutations"],
              acceptable: ["cordialement", "veuillez agréer", "salutations distinguées"],
              explanation:
                "« Cordialement » / formules de politesse.",
            },
            {
              id: "fb-l21-q6",
              type: "short",
              prompt:
                "Dans une critique (review), la partie finale qui recommande s'appelle la ___.",
              answer: "conclusion",
              keywords: ["conclusion", "recommandation"],
              acceptable: ["la conclusion", "recommandation"],
              explanation:
                "La conclusion/recommandation clôt la critique.",
            },
          ],
        },
        {
          id: "fb-l22",
          title: "Interview et critique : conventions",
          questions: [
            {
              id: "fb-l22-q1",
              type: "mcq",
              prompt: "Une interview écrite est généralement au format",
              choices: [
                "de longs paragraphes",
                "questions-réponses (interviewer/interviewé)",
                "d'une lettre",
                "d'une liste",
              ],
              answerIndex: 1,
              explanation:
                "Format Q&R avec le nom de qui parle.",
            },
            {
              id: "fb-l22-q2",
              type: "mcq",
              prompt: "Une critique de livre doit inclure",
              choices: [
                "seulement le résumé",
                "une brève description, une évaluation et une recommandation",
                "aucune opinion",
                "seulement le prix",
              ],
              answerIndex: 1,
              explanation:
                "Critique = décrire + évaluer + recommander.",
            },
            {
              id: "fb-l22-q3",
              type: "tf",
              prompt:
                "Dans une interview formelle on utilise « vous » ; « tu » pour l'informel.",
              answer: true,
              explanation:
                "Tu/vous — choix de registre essentiel.",
            },
            {
              id: "fb-l22-q4",
              type: "mcq",
              prompt: "Adjectif positif pour une critique :",
              choices: ["ennuyeux", "passionnant", "terrible", "médiocre"],
              answerIndex: 1,
              explanation:
                "« passionnant », « impressionnant », « émouvant » = positifs.",
            },
            {
              id: "fb-l22-q5",
              type: "short",
              prompt:
                "Traduis : 'an interview' (le nom, féminin).",
              answer: "une interview",
              keywords: ["interview", "entretien", "entrevue"],
              acceptable: ["interview", "un entretien", "une entrevue"],
              explanation:
                "Une interview / un entretien.",
            },
            {
              id: "fb-l22-q6",
              type: "short",
              prompt:
                "Traduis : 'I would recommend this film' (recommander, conditionnel).",
              answer: "je recommanderais",
              keywords: ["recommanderais", "conseillerais", "recommande"],
              acceptable: ["recommanderais", "je conseillerais"],
              explanation:
                "« Je recommanderais ce film. »",
            },
          ],
        },
        {
          id: "fb-l23",
          title: "Stratégies d'examen : écoute et lecture",
          questions: [
            {
              id: "fb-l23-q1",
              type: "mcq",
              prompt: "Avant d'écouter l'audio à l'examen, il faut",
              choices: [
                "fermer les yeux",
                "lire les questions et prédire le contenu",
                "écrire les réponses",
                "attendre",
              ],
              answerIndex: 1,
              explanation:
                "Prédire le vocabulaire aide à capter l'essentiel.",
            },
            {
              id: "fb-l23-q2",
              type: "mcq",
              prompt: "Si tu ne comprends pas un mot en lisant, d'abord",
              choices: [
                "utiliser le dictionnaire",
                "déduire le sens du contexte",
                "sauter la question",
                "le traduire",
              ],
              answerIndex: 1,
              explanation:
                "Le contexte révèle souvent le sens.",
            },
            {
              id: "fb-l23-q3",
              type: "tf",
              prompt:
                "En compréhension orale, les questions suivent généralement l'ordre du texte.",
              answer: true,
              explanation:
                "Les réponses apparaissent séquentiellement.",
            },
            {
              id: "fb-l23-q4",
              type: "mcq",
              prompt: "« Distinguer les faits des opinions » est une compétence de",
              choices: [
                "l'écriture",
                "la lecture critique",
                "la prononciation",
                "la grammaire",
              ],
              answerIndex: 1,
              explanation:
                "Fait vs opinion = lecture critique (Paper 2).",
            },
            {
              id: "fb-l23-q5",
              type: "short",
              prompt:
                "Combien de tâches d'écriture faut-il faire au Paper 1 de French B ? (un chiffre)",
              answer: "1",
              keywords: ["1"],
              acceptable: ["une", "un"],
              explanation:
                "Un texte choisi parmi trois.",
            },
            {
              id: "fb-l23-q6",
              type: "short",
              prompt:
                "Technique : lire vite pour l'idée générale (en anglais 'skimming').",
              answer: "lecture rapide",
              keywords: ["rapide", "survol", "skim"],
              acceptable: ["survoler le texte", "skimming", "lecture globale"],
              explanation:
                "Survoler le texte = skimming.",
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
        {
          id: "fb-l24",
          title: "HL : analyse d'un extrait littéraire",
          level: "HL",
          questions: [
            {
              id: "fb-l24-q1",
              type: "mcq",
              prompt:
                "Au Paper 2 de HL, un extrait littéraire peut apparaître. L'analyse porte sur",
              choices: [
                "seulement l'intrigue",
                "comment la langue crée personnages, atmosphère et thème",
                "la biographie de l'auteur",
                "la traduction",
              ],
              answerIndex: 1,
              explanation:
                "HL exige l'analyse des techniques de l'auteur.",
            },
            {
              id: "fb-l24-q2",
              type: "mcq",
              prompt:
                "Lis : « La maison respirait le silence ; même l'horloge semblait battre plus doucement. » — L'effet principal est",
              choices: [
                "la personnification",
                "la rime",
                "les statistiques",
                "une question",
              ],
              answerIndex: 0,
              explanation:
                "La maison « respire », l'horloge « bat » — personnification.",
            },
            {
              id: "fb-l24-q3",
              type: "tf",
              prompt:
                "Un narrateur à la première personne donne accès à ses pensées mais peut être peu fiable.",
              answer: true,
              explanation:
                "La perspective narrative façonne notre lecture.",
            },
            {
              id: "fb-l24-q4",
              type: "mcq",
              prompt: "Le « ton » d'un extrait renvoie à",
              choices: [
                "le volume",
                "l'attitude de l'auteur exprimée par le choix des mots",
                "la police",
                "le décor",
              ],
              answerIndex: 1,
              explanation:
                "Ton = attitude (ironique, nostalgique, critique…) par la diction.",
            },
            {
              id: "fb-l24-q5",
              type: "short",
              prompt:
                "Nomme la figure de style : « Il était un rocher dans la tempête. » (un mot)",
              answer: "métaphore",
              keywords: ["métaphore", "metaphore"],
              acceptable: ["metaphore", "une métaphore"],
              explanation:
                "Comparaison directe sans « comme » = métaphore.",
            },
            {
              id: "fb-l24-q6",
              type: "short",
              prompt:
                "La personne qui raconte l'histoire s'appelle le/la ___.",
              answer: "narrateur/narratrice",
              keywords: ["narrateur", "narratrice"],
              acceptable: ["narrateur", "narratrice", "le narrateur"],
              explanation:
                "Narrateur ≠ auteur — distinction clé en HL.",
            },
          ],
        },
        {
          id: "fb-l25",
          title: "HL : planification du Paper 1",
          level: "HL",
          questions: [
            {
              id: "fb-l25-q1",
              type: "mcq",
              prompt: "Au Paper 1 de HL, il faut écrire un texte de",
              choices: [
                "100–150 mots",
                "450–600 mots",
                "50 mots",
                "2000 mots",
              ],
              answerIndex: 1,
              explanation:
                "HL : 450–600 mots, une tâche parmi trois ; SL : 250–400.",
            },
            {
              id: "fb-l25-q2",
              type: "mcq",
              prompt: "Avant d'écrire, la première étape est",
              choices: [
                "commencer à écrire",
                "identifier le public, le but et le type de texte",
                "compter les mots",
                "recopier la tâche",
              ],
              answerIndex: 1,
              explanation:
                "La tâche définit contexte/public/but — on planifie à partir de là.",
            },
            {
              id: "fb-l25-q3",
              type: "tf",
              prompt:
                "Un plan de 5 minutes améliore la cohérence du texte final.",
              answer: true,
              explanation:
                "Idées → structure → connecteurs = meilleure cohérence.",
            },
            {
              id: "fb-l25-q4",
              type: "mcq",
              prompt: "Le critère « Message » au Paper 1 évalue",
              choices: [
                "l'écriture",
                "si le texte remplit son but communicatif",
                "la vitesse",
                "la grammaire seulement",
              ],
              answerIndex: 1,
              explanation:
                "Le texte atteint-il son objectif pour ce public ?",
            },
            {
              id: "fb-l25-q5",
              type: "short",
              prompt:
                "Nomme UN connecteur pour donner un exemple (en français).",
              answer: "par exemple",
              keywords: ["exemple", "comme", "ainsi", "notamment"],
              acceptable: ["par exemple", "comme", "notamment"],
              explanation:
                "« Par exemple », « notamment », « comme »…",
            },
            {
              id: "fb-l25-q6",
              type: "short",
              prompt:
                "Le premier paragraphe d'un article doit capter l'___ du lecteur. (un mot)",
              answer: "attention",
              keywords: ["attention", "intérêt", "interet"],
              acceptable: ["attention", "intérêt", "interet"],
              explanation:
                "L'introduction accroche le lecteur.",
            },
          ],
        },
      ],
    },
  ],
};
