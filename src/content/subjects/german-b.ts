import type { Subject } from "../types";

export const germanB: Subject = {
  slug: "german-b",
  name: "German B",
  short: "German B",
  color: "#1F2937",
  emoji: "🇩🇪",
  group: "Language acquisition",
  levels: ["SL", "HL"],
  description:
    "German B — the five prescribed themes taught through vocabulary in context, grammar, register and exam skills.",
  resources: [
    {
      name: "IB Official",
      url: "https://www.ibo.org/programmes/diploma-programme/curriculum/language-acquisition/",
      note: "Subject brief and syllabus outline",
    },
    {
      name: "InThinking",
      url: "https://www.thinkib.net/german-b",
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
      id: "db-u1",
      code: "Theme 1",
      title: "Identities",
      lessons: [
        {
          id: "db-l1",
          title: "Wortschatz im Kontext: Identität und Lebensstil",
          questions: [
            {
              id: "db-l1-q1",
              type: "mcq",
              prompt:
                "Read: „Anna gilt als sehr aufgeschlossen; sie geht gern auf neue Leute zu und probiert neue Dinge aus.“ „Aufgeschlossen“ means",
              choices: ["shy", "open-minded/outgoing", "exhausted", "strict"],
              answerIndex: 1,
              explanation:
                "„Aufgeschlossen“ = open, outgoing — describes personality, not a mood.",
            },
            {
              id: "db-l1-q2",
              type: "mcq",
              prompt: "Which word means 'self-confidence'?",
              choices: [
                "das Selbstvertrauen",
                "die Eifersucht",
                "das Aussehen",
                "die Kindheit",
              ],
              answerIndex: 0,
              explanation:
                "„Das Selbstvertrauen“ = self-confidence (neuter noun).",
            },
            {
              id: "db-l1-q3",
              type: "tf",
              prompt: "„Die Herausforderung“ means 'the challenge'.",
              answer: true,
              explanation:
                "„Herausfordern“ = to challenge; the noun is feminine: die Herausforderung.",
            },
            {
              id: "db-l1-q4",
              type: "mcq",
              prompt:
                "Read: „Tom ähnelt seinem Vater sehr: beide sind ruhig und lesen gern.“ „Ähnelt“ means",
              choices: [
                "argues with",
                "resembles / looks like",
                "obeys",
                "ignores",
              ],
              answerIndex: 1,
              explanation:
                "„jemandem ähneln“ (dative!) = to resemble someone.",
            },
            {
              id: "db-l1-q5",
              type: "short",
              prompt:
                "Translate to German: 'I consider myself a hardworking person.'",
              answer: "Ich halte mich für eine fleißige Person.",
              keywords: ["fleißig"],
              acceptable: ["ich bin fleißig", "ich finde mich fleissig", "fleissige"],
              explanation:
                "„sich halten für“ + accusative, or simply „Ich bin fleißig“. Accept „ß“ or „ss“.",
            },
            {
              id: "db-l1-q6",
              type: "short",
              prompt:
                "Complete: „Meine Großeltern haben mich auf dem Land großgezogen, deshalb schätze ich die Familien___ sehr.“ (traditions)",
              answer: "traditionen",
              keywords: ["tradition"],
              acceptable: ["traditionen", "bräuche"],
              explanation:
                "„Familientraditionen“ — German loves compound nouns; „Bräuche“ also means customs.",
            },
          ],
        },
        {
          id: "db-l2",
          title: "Kasus und Wortstellung",
          questions: [
            {
              id: "db-l2-q1",
              type: "mcq",
              prompt: "Choose the correct case: „Ich gebe ___ Mann das Buch.“",
              choices: ["der", "den", "dem", "die"],
              answerIndex: 2,
              explanation:
                "The person receiving something is the indirect object → dative: „dem Mann“.",
            },
            {
              id: "db-l2-q2",
              type: "mcq",
              prompt:
                "Choose the correct word order: „Gestern ___ ich ins Kino gegangen.“",
              choices: ["habe", "ich habe", "bin habe", "hatte bin"],
              answerIndex: 0,
              explanation:
                "Verb-second rule: after „Gestern“ the conjugated verb comes second, subject after it.",
            },
            {
              id: "db-l2-q3",
              type: "tf",
              prompt:
                "In a subordinate clause introduced by „weil“, the conjugated verb goes to the end: „…, weil ich müde bin.“",
              answer: true,
              explanation:
                "Subordinating conjunctions (weil, dass, obwohl…) push the verb to the final position.",
            },
            {
              id: "db-l2-q4",
              type: "mcq",
              prompt:
                "Which sentence is correct?",
              choices: [
                "Ich habe gestern einen Film gesehen.",
                "Ich gesehen habe gestern einen Film.",
                "Gestern ich habe gesehen einen Film.",
                "Einen Film gestern ich gesehen habe.",
              ],
              answerIndex: 0,
              explanation:
                "„habe“ in position 2, participle „gesehen“ at the end.",
            },
            {
              id: "db-l2-q5",
              type: "short",
              prompt:
                "Rewrite with „weil“: „Ich bleibe zu Hause. Ich bin krank.“ → „Ich bleibe zu Hause, ___ ___ ___.“",
              answer: "weil ich krank bin",
              keywords: ["weil", "krank", "bin"],
              acceptable: ["weil ich krank bin"],
              explanation:
                "„weil“ sends „bin“ to the end: „weil ich krank bin“.",
            },
            {
              id: "db-l2-q6",
              type: "short",
              prompt:
                "Give the accusative form: „der Hund“ → „Ich sehe ___ Hund.“",
              answer: "den",
              keywords: ["den"],
              explanation:
                "Masculine accusative: der → den. Feminine/neuter/plural don't change.",
            },
          ],
        },
      ],
    },
    {
      id: "db-u2",
      code: "Themes 2 & 3",
      title: "Experiences and human ingenuity",
      lessons: [
        {
          id: "db-l3",
          title: "Perfekt und Präteritum",
          questions: [
            {
              id: "db-l3-q1",
              type: "mcq",
              prompt: "„Als Kind ___ ich jeden Tag Fußball gespielt.“",
              choices: ["habe", "bin", "hatte bin", "werde"],
              answerIndex: 0,
              explanation:
                "Perfekt with „haben“ for most verbs; „spielen“ takes „haben“.",
            },
            {
              id: "db-l3-q2",
              type: "mcq",
              prompt: "„Gestern ___ ich nach Berlin gefahren.“",
              choices: ["habe", "bin", "war", "hatte"],
              answerIndex: 1,
              explanation:
                "Verbs of movement/change use „sein“ in the Perfekt: „bin gefahren“.",
            },
            {
              id: "db-l3-q3",
              type: "tf",
              prompt:
                "In spoken German, the Perfekt is normally preferred over the Präteritum for past events.",
              answer: true,
              explanation:
                "Spoken: „ich habe gemacht“; Präteritum dominates in written/narrative style (and with sein/haben/modals).",
            },
            {
              id: "db-l3-q4",
              type: "mcq",
              prompt: "The Präteritum of „sein“ (ich) is",
              choices: ["bin", "war", "ware", "sei"],
              answerIndex: 1,
              explanation: "ich war, du warst, er war — irregular.",
            },
            {
              id: "db-l3-q5",
              type: "short",
              prompt:
                "Translate: 'Yesterday I went to the cinema.' (Perfekt)",
              answer: "Gestern bin ich ins Kino gegangen.",
              keywords: ["bin", "gegangen", "kino"],
              acceptable: ["ich bin gestern ins kino gegangen"],
              explanation:
                "Movement → „bin“; participle „gegangen“ at the end.",
            },
            {
              id: "db-l3-q6",
              type: "short",
              prompt:
                "Give the Partizip II of „essen“.",
              answer: "gegessen",
              keywords: ["gegessen"],
              explanation:
                "Strong verb: essen → gegessen (ich habe gegessen).",
            },
          ],
        },
        {
          id: "db-l4",
          title: "Meinungen, Konnektoren und Konjunktiv II",
          questions: [
            {
              id: "db-l4-q1",
              type: "mcq",
              prompt: "Which connector means 'however/nevertheless'?",
              choices: ["außerdem", "jedoch", "deshalb", "obwohl"],
              answerIndex: 1,
              explanation:
                "„jedoch“ = however; „außerdem“ = moreover; „deshalb“ = therefore.",
            },
            {
              id: "db-l4-q2",
              type: "mcq",
              prompt: "„Wenn ich reich ___, würde ich ein Haus kaufen.“",
              choices: ["bin", "wäre", "war", "sei gewesen"],
              answerIndex: 1,
              explanation:
                "Konjunktiv II for hypotheticals: „wäre“ (would be).",
            },
            {
              id: "db-l4-q3",
              type: "tf",
              prompt:
                "„Ich hätte gern einen Kaffee“ is a polite way to order.",
              answer: true,
              explanation:
                "Konjunktiv II softens requests: hätte gern / möchte / könnten Sie…",
            },
            {
              id: "db-l4-q4",
              type: "mcq",
              prompt: "Adjective ending: „ein gut__ Freund“ (masculine, nominative)",
              choices: ["e", "er", "en", "es"],
              answerIndex: 1,
              explanation:
                "After „ein“ (no ending marker), the adjective shows gender: ein guter Freund.",
            },
            {
              id: "db-l4-q5",
              type: "short",
              prompt:
                "Complete with a connector meaning 'therefore': „Es hat geregnet, ___ sind wir zu Hause geblieben.“",
              answer: "deshalb",
              keywords: ["deshalb"],
              acceptable: ["deswegen", "daher", "also"],
              explanation:
                "„deshalb/deswegen/daher“ = therefore — verb follows in second position.",
            },
            {
              id: "db-l4-q6",
              type: "short",
              prompt:
                "Translate: 'I would like to travel more.' (Konjunktiv II)",
              answer: "Ich würde gern mehr reisen.",
              keywords: ["würde", "reisen"],
              acceptable: ["ich möchte mehr reisen", "ich wuerde gerne mehr reisen"],
              explanation:
                "„würde + infinitive“ or the modal „möchte“. Accept „wuerde“ without umlaut.",
            },
          ],
        },
      ],
    },
    {
      id: "db-u3",
      code: "Themes 4 & 5",
      title: "Social organization and sharing the planet",
      lessons: [
        {
          id: "db-l5",
          title: "Register: du, Sie und formelle Briefe",
          questions: [
            {
              id: "db-l5-q1",
              type: "mcq",
              prompt:
                "Appropriate greeting for a formal letter to a company:",
              choices: [
                "Hallo du!",
                "Sehr geehrte Damen und Herren,",
                "Hi zusammen,",
                "Na,",
              ],
              answerIndex: 1,
              explanation:
                "„Sehr geehrte Damen und Herren,“ = Dear Sir/Madam — with a comma.",
            },
            {
              id: "db-l5-q2",
              type: "mcq",
              prompt: "In formal address, „Sie“ is always written",
              choices: [
                "lowercase",
                "capitalised, and takes the 3rd person plural verb",
                "capitalised, with the du-form verb",
                "with „du“ endings",
              ],
              answerIndex: 1,
              explanation:
                "„Sie“ is capitalised and conjugated like „sie“ (they): „Sie haben“.",
            },
            {
              id: "db-l5-q3",
              type: "tf",
              prompt:
                "A formal email can end with „Bis dann, dein Max“.",
              answer: false,
              explanation:
                "That's informal. Formal closings: „Mit freundlichen Grüßen“, „Hochachtungsvoll“.",
            },
            {
              id: "db-l5-q4",
              type: "mcq",
              prompt: "Which sentence is appropriate in a formal email?",
              choices: [
                "Ey, schick mir die Infos!",
                "Ich wende mich an Sie, um weitere Informationen zu erhalten.",
                "Gib mir mal die Daten.",
                "Hast du Bock?",
              ],
              answerIndex: 1,
              explanation:
                "„sich an jemanden wenden, um…“ = formal request register.",
            },
            {
              id: "db-l5-q5",
              type: "short",
              prompt:
                "Give the standard formal closing for a German letter/email (one phrase).",
              answer: "Mit freundlichen Grüßen",
              keywords: ["freundlichen", "grüß"],
              acceptable: ["mit freundlichen grussen", "hochachtungsvoll", "freundliche grüße"],
              explanation:
                "„Mit freundlichen Grüßen“ (MfG) is the standard; accept „Grussen“ without ß.",
            },
            {
              id: "db-l5-q6",
              type: "short",
              prompt:
                "Rewrite formally — replace „du“: „Könnten ___ mir bitte die Unterlagen schicken?“",
              answer: "Sie",
              keywords: ["sie"],
              acceptable: ["Sie"],
              explanation:
                "Formal „könnten Sie“ (capital S) — polite request with Konjunktiv II.",
            },
          ],
        },
        {
          id: "db-l6",
          title: "Leseverstehen: die Umwelt",
          questions: [
            {
              id: "db-l6-q1",
              type: "mcq",
              prompt:
                "Read: „Jedes Jahr werden Millionen Hektar Wald abgeholzt, was zum Verlust von Lebensräumen und zum Anstieg von CO₂ führt.“ Deforestation leads to",
              choices: [
                "habitat loss and rising CO₂",
                "cleaner air",
                "more forests",
                "lower temperatures",
              ],
              answerIndex: 0,
              explanation:
                "„der Verlust von Lebensräumen“ = habitat loss; „der Anstieg“ = the rise.",
            },
            {
              id: "db-l6-q2",
              type: "mcq",
              prompt: "„Der Klimawandel“ means",
              choices: [
                "weather forecast",
                "climate change",
                "season change",
                "wind direction",
              ],
              answerIndex: 1,
              explanation:
                "„Klimawandel“ = climate change; „das Wetter“ = weather.",
            },
            {
              id: "db-l6-q3",
              type: "tf",
              prompt: "„wiederverwerten“ means 'to recycle'.",
              answer: true,
              explanation:
                "wieder- (again) + verwerten (to utilise) = recycle.",
            },
            {
              id: "db-l6-q4",
              type: "mcq",
              prompt:
                "Read: „Um unseren ökologischen Fußabdruck zu verringern, sollten wir öfter öffentliche Verkehrsmittel benutzen und weniger Fleisch essen.“ The author recommends",
              choices: [
                "driving more",
                "public transport and less meat",
                "eating more meat",
                "stopping all travel",
              ],
              answerIndex: 1,
              explanation:
                "„der ökologische Fußabdruck“ = ecological footprint; „sollten“ = should.",
            },
            {
              id: "db-l6-q5",
              type: "short",
              prompt:
                "Translate: 'We should protect endangered species.'",
              answer: "Wir sollten gefährdete Arten schützen.",
              keywords: ["sollten", "schützen", "arten"],
              acceptable: ["wir sollten bedrohte arten schuetzen", "wir müssen"],
              explanation:
                "„sollten + infinitive“ at the end; „gefährdete/bedrohte Arten“ = endangered species.",
            },
            {
              id: "db-l6-q6",
              type: "short",
              prompt:
                "What does „erneuerbare Energien“ mean? Answer in English.",
              answer: "renewable energy",
              keywords: ["renewable", "energ"],
              explanation:
                "„erneuerbar“ = renewable; „die Energie“ = energy.",
            },
          ],
        },
      ],
    },
    {
      id: "db-u4",
      code: "Assessment",
      title: "Exam skills",
      lessons: [
        {
          id: "db-l7",
          title: "Paper 1: Textsorten und Konventionen",
          questions: [
            {
              id: "db-l7-q1",
              type: "mcq",
              prompt: "Typical features of a BLOG entry:",
              choices: [
                "formal salutation and signature",
                "personal anecdotes, informal tone, direct address",
                "objective report in third person",
                "tables and statistics only",
              ],
              answerIndex: 1,
              explanation:
                "Blogs are personal and informal — first person, anecdotes, addressing readers.",
            },
            {
              id: "db-l7-q2",
              type: "mcq",
              prompt: "A SPEECH (Rede) should contain",
              choices: [
                "no greeting",
                "audience address, rhetorical questions, a clear message",
                "only statistics",
                "a bibliography",
              ],
              answerIndex: 1,
              explanation:
                "Speeches open by addressing the audience („Liebe…“) and use rhetorical devices.",
            },
            {
              id: "db-l7-q3",
              type: "tf",
              prompt:
                "In Paper 1 the text type should match the task's purpose and target audience.",
              answer: true,
              explanation:
                "Choosing and executing the right conventions is what Criterion C rewards.",
            },
            {
              id: "db-l7-q4",
              type: "mcq",
              prompt:
                "A formal letter of complaint should open with",
              choices: [
                "„Hallo!“",
                "„Sehr geehrte Damen und Herren,“",
                "„Lieber Freund,“",
                "no greeting",
              ],
              answerIndex: 1,
              explanation:
                "Formal salutation; „Lieber…“ is for people you know.",
            },
            {
              id: "db-l7-q5",
              type: "short",
              prompt:
                "Name ONE feature that distinguishes a diary entry (Tagebucheintrag). Short answer, English or German.",
              answer: "date heading and personal first-person reflection",
              keywords: ["date", "datum", "personal", "first", "ich"],
              acceptable: ["datum", "very personal/informal", "first person feelings"],
              explanation:
                "Diary entries have a date, informal register and personal feelings/reflection.",
            },
            {
              id: "db-l7-q6",
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
          id: "db-l8",
          title: "Paper 2 und die mündliche Prüfung",
          questions: [
            {
              id: "db-l8-q1",
              type: "mcq",
              prompt:
                "Best first strategy in the reading paper:",
              choices: [
                "translate every sentence",
                "skim for gist, then read questions and scan for answers",
                "answer without reading",
                "read only the last paragraph",
              ],
              answerIndex: 1,
              explanation:
                "Skim → questions → scan for the relevant sections.",
            },
            {
              id: "db-l8-q2",
              type: "mcq",
              prompt:
                "In 'true/false with justification' items you must",
              choices: [
                "only tick true or false",
                "quote/identify the sentence in the text that proves your answer",
                "give your opinion",
                "leave justification blank",
              ],
              answerIndex: 1,
              explanation:
                "Justification = the textual evidence — required for the mark.",
            },
            {
              id: "db-l8-q3",
              type: "tf",
              prompt:
                "In the individual oral you get 15 minutes of preparation on a visual stimulus.",
              answer: true,
              explanation:
                "Language B IO: 15 min prep on a stimulus image linked to a theme.",
            },
            {
              id: "db-l8-q4",
              type: "mcq",
              prompt:
                "If you don't understand a word in the listening paper, you should",
              choices: [
                "panic and stop",
                "infer meaning from context and keep listening",
                "write the word in English only",
                "skip the whole text",
              ],
              answerIndex: 1,
              explanation:
                "Context inference (cognates, situation, tone) is a core listening skill.",
            },
            {
              id: "db-l8-q5",
              type: "short",
              prompt:
                "Give ONE strategy for the IO discussion. Brief answer.",
              answer: "link the stimulus to the theme and give justified opinions",
              keywords: ["theme", "opinion"],
              acceptable: ["connect to the theme", "vary vocabulary", "give opinions"],
              explanation:
                "Beyond describing the image: connect to the theme, give and justify opinions.",
            },
            {
              id: "db-l8-q6",
              type: "short",
              prompt:
                "What does 'justification' require in a true/false question? One short phrase.",
              answer: "evidence from the text",
              keywords: ["text", "evidence"],
              acceptable: ["a quotation", "the proving sentence"],
              explanation:
                "Cite the part of the text that proves your true/false judgement.",
            },
          ],
        },
      ],
    },
    {
      id: "db-u5",
      code: "HL extension",
      title: "HL skills",
      level: "HL",
      lessons: [
        {
          id: "db-l9",
          title: "Literarische Texte analysieren",
          level: "HL",
          questions: [
            {
              id: "db-l9-q1",
              type: "mcq",
              prompt:
                "At HL, literary works are read mainly to develop",
              choices: [
                "translation speed",
                "interpretation of themes, characters and authorial choices",
                "spelling",
                "vocabulary lists",
              ],
              answerIndex: 1,
              explanation:
                "HL includes two literary works — the goal is interpretation.",
            },
            {
              id: "db-l9-q2",
              type: "mcq",
              prompt: "„Der Ich-Erzähler“ is",
              choices: [
                "the omniscient narrator",
                "the first-person narrator",
                "the protagonist's enemy",
                "the author",
              ],
              answerIndex: 1,
              explanation: "„Ich-Erzähler“ = first-person narrator.",
            },
            {
              id: "db-l9-q3",
              type: "tf",
              prompt:
                "„Die Metapher“ compares two things using „wie“ (as/like).",
              answer: false,
              explanation:
                "With „wie“ it's a „Vergleich“ (simile); a metaphor states identity directly.",
            },
            {
              id: "db-l9-q4",
              type: "mcq",
              prompt: "„ironisch“, „nostalgisch“, „kritisch“ describe",
              choices: [
                "the setting",
                "the narrator's tone/attitude",
                "the plot",
                "the rhyme",
              ],
              answerIndex: 1,
              explanation:
                "These are tone words — the narrator's attitude.",
            },
            {
              id: "db-l9-q5",
              type: "short",
              prompt:
                "Name ONE narrative technique you might analyse (English or German).",
              answer: "flashback",
              keywords: ["flashback", "rückblend", "symbol", "iron", "foreshadow"],
              acceptable: ["rückblende", "symbolik", "irony", "vorausdeutung"],
              explanation:
                "Rückblende (flashback), Symbolik, Ironie, Vorausdeutung…",
            },
            {
              id: "db-l9-q6",
              type: "short",
              prompt:
                "Translate: 'The author uses irony to criticise society.'",
              answer: "Der Autor benutzt Ironie, um die Gesellschaft zu kritisieren.",
              keywords: ["ironie", "kritisier", "gesellschaft"],
              acceptable: ["der autor nutzt ironie", "um die gesellschaft zu kritisieren"],
              explanation:
                "„um … zu + infinitive“ for purpose; „die Gesellschaft“ = society.",
            },
          ],
        },
        {
          id: "db-l10",
          title: "Nuanciertes Register und Redewendungen",
          level: "HL",
          questions: [
            {
              id: "db-l10-q1",
              type: "mcq",
              prompt: "„Ich drücke dir die Daumen“ means",
              choices: [
                "I'm angry with you",
                "I'm keeping my fingers crossed for you",
                "my thumbs hurt",
                "I disagree",
              ],
              answerIndex: 1,
              explanation:
                "Germans press thumbs instead of crossing fingers — good luck!",
            },
            {
              id: "db-l10-q2",
              type: "mcq",
              prompt: "„die Katze im Sack kaufen“ means to",
              choices: [
                "adopt a cat",
                "buy something without inspecting it first",
                "shop at the market",
                "make a bargain",
              ],
              answerIndex: 1,
              explanation:
                "= 'buy a pig in a poke' — purchasing sight unseen.",
            },
            {
              id: "db-l10-q3",
              type: "tf",
              prompt:
                "Idioms are always appropriate in formal academic essays.",
              answer: false,
              explanation:
                "Idioms belong to informal registers; use them where the register allows.",
            },
            {
              id: "db-l10-q4",
              type: "mcq",
              prompt: "„ins kalte Wasser springen“ means",
              choices: [
                "to go swimming",
                "to jump in at the deep end / dive into something unprepared",
                "to catch a cold",
                "to give up",
              ],
              answerIndex: 1,
              explanation:
                "Jumping into cold water = facing a challenge unprepared.",
            },
            {
              id: "db-l10-q5",
              type: "short",
              prompt:
                "Which idiom means 'to be oblivious / not notice what's in front of you' (literally 'to have tomatoes on your eyes')?",
              answer: "Tomaten auf den Augen haben",
              keywords: ["tomaten", "augen"],
              acceptable: ["tomaten auf den augen"],
              explanation:
                "„Tomaten auf den Augen haben“ = to miss the obvious.",
            },
            {
              id: "db-l10-q6",
              type: "short",
              prompt:
                "Translate to informal German: 'That's not my problem!' (idiom: „das ist nicht mein Bier“)",
              answer: "Das ist nicht mein Bier!",
              keywords: ["bier"],
              acceptable: ["das ist nicht mein bier"],
              explanation:
                "„Nicht mein Bier“ = none of my business — informal idiom.",
            },
          ],
        },
        {
          id: "db-l11",
          title: "Paper 1 HL: erweiterte Textsorten",
          level: "HL",
          questions: [
            {
              id: "db-l11-q1",
              type: "mcq",
              prompt:
                "HL Paper 1 requires approximately how many words?",
              choices: ["150–250", "250–400", "450–600", "700–900"],
              answerIndex: 2,
              explanation: "HL: 450–600 words; SL: 250–400.",
            },
            {
              id: "db-l11-q2",
              type: "mcq",
              prompt:
                "Top-band HL writing is characterised by",
              choices: [
                "only simple sentences",
                "developed argumentation, counter-arguments and cohesion",
                "bullet points",
                "no personal opinion",
              ],
              answerIndex: 1,
              explanation:
                "HL expects argument development, balance and cohesive paragraphing.",
            },
            {
              id: "db-l11-q3",
              type: "tf",
              prompt:
                "A sophisticated HL response may shift register deliberately — e.g. formal frame with a personal anecdote.",
              answer: true,
              explanation:
                "Controlled register variation shows HL-level command.",
            },
            {
              id: "db-l11-q4",
              type: "mcq",
              prompt:
                "Which sentence demonstrates HL-level syntax?",
              choices: [
                "„Sport ist gut. Ich mag Sport.“",
                "„Obwohl ich die Vorteile der Technologie anerkenne, frage ich mich, ob wir nicht zu abhängig von ihr werden.“",
                "„Technologie ist gut und schlecht.“",
                "„Es gibt viele Meinungen.“",
              ],
              answerIndex: 1,
              explanation:
                "Subordinate concession (obwohl) + embedded question = complex HL syntax.",
            },
            {
              id: "db-l11-q5",
              type: "short",
              prompt:
                "Complete the concession: „___ ich die Vorteile anerkenne, überwiegen meiner Meinung nach die Risiken.“ (although)",
              answer: "Obwohl",
              keywords: ["obwohl"],
              explanation:
                "„Obwohl“ sends the verb to the end of its clause.",
            },
            {
              id: "db-l11-q6",
              type: "short",
              prompt:
                "Give a formal German phrase to introduce a counter-argument ('on the other hand').",
              answer: "auf der anderen Seite",
              keywords: ["anderen seite", "jedoch", "andererseits"],
              acceptable: ["andererseits", "auf der anderen seite", "demgegenüber"],
              explanation:
                "„andererseits“, „auf der anderen Seite“, „demgegenüber“ — formal contrast markers.",
            },
          ],
        },
      ],
    },
  ],
};
