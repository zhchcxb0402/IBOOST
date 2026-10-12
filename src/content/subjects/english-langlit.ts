import type { Subject } from "../types";

export const englishLangLit: Subject = {
  slug: "english-langlit",
  name: "English A: Language & Literature",
  short: "English L&L",
  color: "#7C3AED",
  emoji: "✒️",
  group: "Studies in language and literature",
  levels: ["SL", "HL"],
  description:
    "Areas of exploration, non-literary text analysis, comparative essays, the HL essay and the individual oral.",
  resources: [
    {
      name: "IB Official",
      url: "https://www.ibo.org/programmes/diploma-programme/curriculum/language-and-literature/",
      note: "Subject brief and assessment outline",
    },
    {
      name: "InThinking",
      url: "https://www.thinkib.net/english-a-lang-lit",
      note: "Units, exemplar papers and IO guidance",
    },
    {
      name: "Clastify",
      url: "https://www.clastify.com/",
      note: "Marked exemplar essays and IAs",
    },
    {
      name: "Nail IB",
      url: "https://nailib.com/",
      note: "Study guides and Paper 1 frameworks",
    },
  ],
  units: [
    {
      id: "ell-u1",
      title: "Areas of exploration",
      code: "Core",
      lessons: [
        {
          id: "ell-l1",
          title: "Readers, writers and texts",
          questions: [
            {
              id: "ell-l1-q1",
              type: "mcq",
              prompt:
                "'Readers, writers and texts' as an area of exploration focuses on…",
              choices: [
                "how meaning is negotiated between text and reader",
                "the historical period of a text only",
                "links between different texts",
                "grammar accuracy",
              ],
              answerIndex: 0,
              explanation:
                "It concerns how writers construct meaning and how readers interpret it.",
            },
            {
              id: "ell-l1-q2",
              type: "tf",
              prompt:
                "In Lang & Lit, a 'text' can be non-literary — an advert, speech or infographic counts.",
              answer: true,
              explanation:
                "The course studies both literary and non-literary text types equally.",
            },
            {
              id: "ell-l1-q3",
              type: "mcq",
              prompt:
                "An ad for perfume shows a celebrity gazing at the camera. Which feature most directly invites the reader to identify with the product?",
              choices: [
                "Direct address / gaze creating personal connection",
                "The colour palette alone",
                "Small-print legal text",
                "The barcode",
              ],
              answerIndex: 0,
              explanation:
                "Direct gaze/address builds a relationship between reader and subject.",
            },
            {
              id: "ell-l1-q4",
              type: "short",
              prompt:
                "What does juxtaposition achieve when a charity ad places a luxury watch beside a hungry child? (key idea: what does the contrast do?)",
              answer:
                "It creates contrast that emphasises inequality and provokes an emotional response",
              keywords: ["contrast", "emphas", "inequal"],
              acceptable: ["contrast"],
              explanation:
                "Juxtaposition sharpens the disparity, making the message more striking and emotive.",
            },
            {
              id: "ell-l1-q5",
              type: "mcq",
              prompt: "A writer's 'tone' refers to…",
              choices: [
                "the attitude conveyed through word choice and style",
                "the font used",
                "the rhyme scheme only",
                "the target price of the text",
              ],
              answerIndex: 0,
              explanation:
                "Tone is the writer's stance — e.g. ironic, earnest, urgent.",
            },
            {
              id: "ell-l1-q6",
              type: "tf",
              prompt:
                "Meaning in a text is fixed entirely by the writer's intention.",
              answer: false,
              explanation:
                "Readers co-construct meaning through context, culture and purpose.",
            },
          ],
        },
        {
          id: "ell-l2",
          title: "Time and space",
          questions: [
            {
              id: "ell-l2-q1",
              type: "mcq",
              prompt:
                "'Time and space' as an area of exploration asks students to consider…",
              choices: [
                "how context of production and reception shapes meaning",
                "only the setting of a novel",
                "the length of a text",
                "when the author was born",
              ],
              answerIndex: 0,
              explanation:
                "It covers cultural, historical and social contexts of both writing and reading.",
            },
            {
              id: "ell-l2-q2",
              type: "tf",
              prompt:
                "A wartime propaganda poster can be read differently by its original audience than by a modern one.",
              answer: true,
              explanation:
                "Context of reception changes interpretation — a core 'time and space' idea.",
            },
            {
              id: "ell-l2-q3",
              type: "mcq",
              prompt:
                "Which question best fits 'time and space' when analysing a speech?",
              choices: [
                "How did the occasion and audience shape the speaker's rhetoric?",
                "How many adjectives does it contain?",
                "Does it rhyme?",
                "What font was it printed in?",
              ],
              answerIndex: 0,
              explanation:
                "Occasion, audience and cultural moment drive rhetorical choices.",
            },
            {
              id: "ell-l2-q4",
              type: "short",
              prompt:
                "Name one contextual factor that could change how a reader interprets a text (e.g. historical, cultural).",
              answer: "Historical context",
              keywords: [
                "histor",
                "cultur",
                "context",
                "politic",
                "social",
                "geograph",
                "period",
              ],
              explanation:
                "Any of: era, culture, politics, geography or social norms.",
            },
            {
              id: "ell-l2-q5",
              type: "mcq",
              prompt:
                "A text written in colonial-era India referencing 'the Empire' assumes knowledge its original readers had. This is an example of…",
              choices: [
                "context shaping meaning for its intended audience",
                "intertextuality",
                "a global issue",
                "unreliable narration",
              ],
              answerIndex: 0,
              explanation:
                "Writers encode shared cultural knowledge of their time and place.",
            },
            {
              id: "ell-l2-q6",
              type: "tf",
              prompt:
                "'Time and space' only applies to texts written long ago.",
              answer: false,
              explanation:
                "Contemporary texts are equally shaped by their moment — memes, ads, tweets.",
            },
          ],
        },
        {
          id: "ell-l3",
          title: "Intertextuality: connecting texts",
          questions: [
            {
              id: "ell-l3-q1",
              type: "mcq",
              prompt: "Intertextuality refers to…",
              choices: [
                "the ways texts reference, echo or transform other texts",
                "footnotes in an essay",
                "translation between languages",
                "texting between friends",
              ],
              answerIndex: 0,
              explanation:
                "No text exists in isolation — meaning builds through connection to other texts.",
            },
            {
              id: "ell-l3-q2",
              type: "tf",
              prompt:
                "An advertisement that visually parodies a famous painting is using intertextuality.",
              answer: true,
              explanation:
                "It borrows the painting's meaning for new effect.",
            },
            {
              id: "ell-l3-q3",
              type: "mcq",
              prompt:
                "A novel retells a myth from the villain's perspective. The effect is mainly to…",
              choices: [
                "challenge the reader's assumptions formed by the original",
                "prove the myth is true",
                "avoid copyright issues",
                "shorten the story",
              ],
              answerIndex: 0,
              explanation:
                "Reframing a known story invites critical rereading of the original.",
            },
            {
              id: "ell-l3-q4",
              type: "short",
              prompt:
                "Give one term for a text that imitates another's style for comic or critical effect.",
              answer: "Parody",
              keywords: ["parod", "pastiche", "satir", "imitat"],
              acceptable: ["pastiche", "satire"],
              explanation: "Parody (or pastiche/satire) imitates to comic/critical ends.",
            },
            {
              id: "ell-l3-q5",
              type: "mcq",
              prompt: "An allusion works only if…",
              choices: [
                "the reader recognises the reference",
                "it is written in italics",
                "the author explains it",
                "it is in the title",
              ],
              answerIndex: 0,
              explanation:
                "Allusions depend on shared cultural knowledge between writer and reader.",
            },
            {
              id: "ell-l3-q6",
              type: "tf",
              prompt:
                "Analysing intertextuality means identifying references AND evaluating their effect on meaning.",
              answer: true,
              explanation:
                "Spotting the reference alone isn't analysis — its purpose matters.",
            },
          ],
        },
        {
          id: "ell-l11",
          title: "Stylistic devices and their effects",
          questions: [
            {
              id: "ell-l11-q1",
              type: "mcq",
              prompt:
                "'The city swallowed him whole' is an example of",
              choices: ["simile", "personification", "hyperbole only", "alliteration"],
              answerIndex: 1,
              explanation:
                "The city is given human agency — personification creating an overwhelming effect.",
            },
            {
              id: "ell-l11-q2",
              type: "mcq",
              prompt:
                "A short declarative sentence after several long ones usually creates",
              choices: [
                "confusion",
                "emphasis and a change of pace",
                "irony",
                "ambiguity",
              ],
              answerIndex: 1,
              explanation:
                "Sentence-length contrast foregrounds the short sentence — a key structural effect to analyse.",
            },
            {
              id: "ell-l11-q3",
              type: "tf",
              prompt:
                "Juxtaposition places contrasting ideas close together to highlight their difference.",
              answer: true,
              explanation:
                "The contrast does the meaning-making — wealth next to poverty, innocence next to violence.",
            },
            {
              id: "ell-l11-q4",
              type: "mcq",
              prompt:
                "Anaphora is the repetition of",
              choices: [
                "a sound",
                "a word or phrase at the start of successive clauses",
                "rhyme",
                "consonants",
              ],
              answerIndex: 1,
              explanation:
                "'We shall fight on the beaches, we shall fight…' — builds rhythm and insistence.",
            },
            {
              id: "ell-l11-q5",
              type: "short",
              prompt:
                "Name the device: 'His words cut deeper than any knife.'",
              answer: "metaphor",
              keywords: ["metaphor", "simil"],
              acceptable: ["simile", "metaphorical"],
              explanation:
                "Strictly a simile ('than') or metaphoric comparison — accept either with reasoning.",
            },
            {
              id: "ell-l11-q6",
              type: "short",
              prompt:
                "Name ONE effect of addressing the reader directly as 'you' in a persuasive text.",
              answer: "creates involvement / implicates the reader",
              keywords: ["involv", "implicat", "direct", "personal", "engag"],
              acceptable: ["direct address", "personal involvement", "engages the reader"],
              explanation:
                "Direct address makes the message feel personal and hard to ignore.",
            },
          ],
        },
        {
          id: "ell-l12",
          title: "Text-type conventions: op-ed, speech, advert, memoir",
          questions: [
            {
              id: "ell-l12-q1",
              type: "mcq",
              prompt: "An op-ed (opinion editorial) typically features",
              choices: [
                "neutral reporting",
                "a clear argued viewpoint with a named author",
                "advertising slogans",
                "fiction",
              ],
              answerIndex: 1,
              explanation:
                "Op-eds argue a position with evidence and a persuasive voice.",
            },
            {
              id: "ell-l12-q2",
              type: "mcq",
              prompt: "A speech differs from an article mainly through",
              choices: [
                "shorter sentences",
                "direct audience address and rhetorical devices for listening",
                "more data",
                "no structure",
              ],
              answerIndex: 1,
              explanation:
                "Speeches are written for the ear — address, repetition, pauses, calls to action.",
            },
            {
              id: "ell-l12-q3",
              type: "tf",
              prompt:
                "An infographic relies on visual hierarchy and chunked data more than continuous prose.",
              answer: true,
              explanation:
                "Meaning is made through layout, icons and minimal text.",
            },
            {
              id: "ell-l12-q4",
              type: "mcq",
              prompt: "A memoir differs from an autobiography because it",
              choices: [
                "covers the whole life",
                "focuses on a themed slice of life with reflective voice",
                "is always fictional",
                "has no first person",
              ],
              answerIndex: 1,
              explanation:
                "Memoir selects and reflects; autobiography aims at complete chronology.",
            },
            {
              id: "ell-l12-q5",
              type: "short",
              prompt:
                "Name ONE visual convention of an advertisement.",
              answer: "a slogan or dominant image",
              keywords: ["slogan", "image", "logo", "colour", "headline"],
              acceptable: ["slogan", "large image", "logo"],
              explanation:
                "Slogans, dominant visuals, brand marks, imperative verbs.",
            },
            {
              id: "ell-l12-q6",
              type: "short",
              prompt:
                "Name the structural feature a speech usually ends with to motivate listeners. (one phrase)",
              answer: "call to action",
              keywords: ["call", "action"],
              acceptable: ["a call to action", "call for action"],
              explanation:
                "Speeches conventionally close by asking the audience to act.",
            },
          ],
        },
      ],
    },
    {
      id: "ell-u2",
      title: "Paper 1: Guided textual analysis",
      code: "Paper 1",
      lessons: [
        {
          id: "ell-l4",
          title: "Reading non-literary texts",
          questions: [
            {
              id: "ell-l4-q1",
              type: "mcq",
              prompt:
                "Paper 1 asks you to analyse…",
              choices: [
                "an unseen non-literary text with a guiding question",
                "a poem you have studied",
                "two literary works comparatively",
                "your own creative writing",
              ],
              answerIndex: 0,
              explanation:
                "SL writes on one text; HL writes on both provided texts.",
            },
            {
              id: "ell-l4-q2",
              type: "tf",
              prompt:
                "In a speech, repetition of a key phrase mainly serves to reinforce the central message.",
              answer: true,
              explanation:
                "Anaphora/repetition builds rhythm and memorability.",
            },
            {
              id: "ell-l4-q3",
              type: "mcq",
              prompt:
                "An opinion column opens with an anecdote about a single family. Its likely purpose is to…",
              choices: [
                "humanise an abstract issue and create emotional investment",
                "fill word count",
                "provide statistical proof",
                "confuse the reader",
              ],
              answerIndex: 0,
              explanation:
                "Narrative openings make issues concrete and empathetic.",
            },
            {
              id: "ell-l4-q4",
              type: "short",
              prompt:
                "What is the effect of inclusive pronouns ('we', 'us') in a persuasive speech? (key idea: relationship with audience)",
              answer:
                "They create unity and shared identity between speaker and audience",
              keywords: ["unit", "inclus", "identity", "audience", "together", "belong"],
              explanation:
                "Inclusive language positions speaker and audience on the same side.",
            },
            {
              id: "ell-l4-q5",
              type: "mcq",
              prompt:
                "Identifying text type conventions (headline, caption, call to action) matters because…",
              choices: [
                "they reveal purpose and intended audience",
                "examiners require a list",
                "they show the text is literary",
                "they prove the text is factual",
              ],
              answerIndex: 0,
              explanation:
                "Conventions signal genre, purpose and target reader.",
            },
            {
              id: "ell-l4-q6",
              type: "tf",
              prompt:
                "A good Paper 1 response quotes features without linking them to effect or meaning.",
              answer: false,
              explanation:
                "Feature-spotting without analysis scores poorly — always link to effect.",
            },
          ],
        },
        {
          id: "ell-l5",
          title: "Stylistic & structural features",
          questions: [
            {
              id: "ell-l5-q1",
              type: "mcq",
              prompt:
                "'The deadline loomed over the students' — which device is used?",
              choices: ["Personification", "Simile", "Alliteration", "Irony"],
              answerIndex: 0,
              explanation:
                "A deadline is given human agency ('loomed').",
            },
            {
              id: "ell-l5-q2",
              type: "mcq",
              prompt:
                "A triadic structure ('we came, we saw, we conquered') primarily creates…",
              choices: [
                "rhythm and a sense of completeness or climax",
                "confusion",
                "literal accuracy",
                "a question",
              ],
              answerIndex: 0,
              explanation:
                "Rule of three is memorable and builds momentum.",
            },
            {
              id: "ell-l5-q3",
              type: "tf",
              prompt:
                "Visual features — layout, typography, colour — are legitimate objects of analysis in Paper 1.",
              answer: true,
              explanation:
                "Non-literary texts communicate through design as well as words.",
            },
            {
              id: "ell-l5-q4",
              type: "short",
              prompt:
                "A headline uses the pun 'Plane Crazy' for a story about a stowaway. Name the device and its typical effect. (key idea: humour/attention)",
              answer:
                "A pun that creates humour and grabs the reader's attention",
              keywords: ["pun", "humor", "humour", "attention", "playful"],
              acceptable: ["pun"],
              explanation:
                "Puns entertain and hook readers while signalling a light register.",
            },
            {
              id: "ell-l5-q5",
              type: "mcq",
              prompt:
                "Shifting from short, punchy sentences to one long sentence near the end of an article typically…",
              choices: [
                "slows the pace for reflection or emphasis",
                "is a printing error",
                "has no effect",
                "shows weak writing",
              ],
              answerIndex: 0,
              explanation:
                "Syntax length controls pace and emphasis.",
            },
            {
              id: "ell-l5-q6",
              type: "short",
              prompt:
                "What does the word 'connotation' refer to in text analysis? (key idea: associations vs literal meaning)",
              answer:
                "The associations or implied meanings a word carries beyond its literal definition",
              keywords: ["associat", "implied", "suggest", "literal", "meaning"],
              explanation:
                "Connotation = suggested meaning; denotation = literal meaning.",
            },
          ],
        },
        {
          id: "ell-l6",
          title: "Writing the analysis",
          questions: [
            {
              id: "ell-l6-q1",
              type: "mcq",
              prompt:
                "The strongest Paper 1 paragraphs usually follow which pattern?",
              choices: [
                "Point about meaning → evidence → analysis of effect",
                "Quote → quote → quote",
                "Summary → opinion → summary",
                "Question → biography → conclusion",
              ],
              answerIndex: 0,
              explanation:
                "Analytical paragraphs link features to meaning and effect.",
            },
            {
              id: "ell-l6-q2",
              type: "tf",
              prompt:
                "You should organise your answer by working through the text line by line from top to bottom.",
              answer: false,
              explanation:
                "Organising by idea/feature is stronger than linear commentary.",
            },
            {
              id: "ell-l6-q3",
              type: "mcq",
              prompt: "A thesis statement in Paper 1 should…",
              choices: [
                "argue how the text achieves its purpose or effect",
                "list every device found",
                "retell the text's content",
                "agree with the text's opinion",
              ],
              answerIndex: 0,
              explanation:
                "Your thesis is an interpretation of authorial choices and their effects.",
            },
            {
              id: "ell-l6-q4",
              type: "short",
              prompt:
                "Why should you comment on the text's target audience in your analysis? (key idea: how choices are tailored)",
              answer:
                "Because the writer's choices are designed to appeal to or persuade that specific audience",
              keywords: ["audience", "appeal", "persuad", "tailor", "target", "purpose"],
              explanation:
                "Audience shapes register, tone, content and design choices.",
            },
            {
              id: "ell-l6-q5",
              type: "mcq",
              prompt: "Embedding short quotations is preferred because…",
              choices: [
                "it keeps focus on analysis rather than transcription",
                "long quotes are banned",
                "it saves paper",
                "examiners can't check them",
              ],
              answerIndex: 0,
              explanation:
                "Brief, integrated quotes support points without stalling the argument.",
            },
            {
              id: "ell-l6-q6",
              type: "tf",
              prompt:
                "Evaluating alternative interpretations can strengthen a Paper 1 response.",
              answer: true,
              explanation:
                "Acknowledging ambiguity shows critical thinking.",
            },
          ],
        },
        {
          id: "ell-l13",
          title: "Paper 1: the guiding question and essay structure",
          questions: [
            {
              id: "ell-l13-q1",
              type: "mcq",
              prompt: "The Paper 1 guiding question's purpose is to",
              choices: [
                "limit your analysis",
                "anchor analysis on authorial choices and their effects",
                "test your opinion of the text",
                "ask for a summary",
              ],
              answerIndex: 1,
              explanation:
                "It directs you to HOW the text creates meaning — not what it says.",
            },
            {
              id: "ell-l13-q2",
              type: "mcq",
              prompt: "A strong Paper 1 analysis paragraph contains",
              choices: [
                "summary, quote, repeat",
                "point about a feature, embedded evidence, analysis of effect",
                "only quotations",
                "personal opinion",
              ],
              answerIndex: 1,
              explanation:
                "Point → evidence → analysis of effect: the PEA structure examiners reward.",
            },
            {
              id: "ell-l13-q3",
              type: "tf",
              prompt:
                "You must cover every feature of the text to score well on Paper 1.",
              answer: false,
              explanation:
                "Depth on well-chosen features beats shallow coverage of everything.",
            },
            {
              id: "ell-l13-q4",
              type: "mcq",
              prompt: "'Authorial choices' refers to",
              choices: [
                "the plot",
                "deliberate decisions about language, structure and style",
                "the author's biography",
                "printing errors",
              ],
              answerIndex: 1,
              explanation:
                "Frame analysis as choices with effects, not 'the author makes us feel…'.",
            },
            {
              id: "ell-l13-q5",
              type: "short",
              prompt:
                "Give the three-part structure of an analysis paragraph (three words).",
              answer: "point evidence analysis",
              keywords: ["point", "evidence", "analy"],
              acceptable: ["point evidence explanation"],
              explanation:
                "Point about a choice → embedded quotation → analysis of its effect.",
            },
            {
              id: "ell-l13-q6",
              type: "short",
              prompt:
                "How long is the SL Paper 1 exam (minutes)?",
              answer: "75",
              keywords: ["75"],
              acceptable: ["75 minutes", "1h15"],
              explanation:
                "SL: 75 min for one text; HL: 135 min for two (each analysed separately).",
            },
          ],
        },
        {
          id: "ell-l14",
          title: "Paper 1: reading and annotating under time",
          questions: [
            {
              id: "ell-l14-q1",
              type: "mcq",
              prompt: "The best first step when you receive the unseen text is",
              choices: [
                "start writing immediately",
                "identify text type, audience and purpose, then annotate choices",
                "count the words",
                "translate difficult words",
              ],
              answerIndex: 1,
              explanation:
                "Text-type/Audience/Purpose first — it frames every later observation.",
            },
            {
              id: "ell-l14-q2",
              type: "mcq",
              prompt: "Annotating 'tone shifts' means marking where",
              choices: [
                "the font changes",
                "the writer's attitude or mood changes",
                "paragraphs end",
                "sentences are short",
              ],
              answerIndex: 1,
              explanation:
                "Tone shifts are high-value analysis points — they signal development.",
            },
            {
              id: "ell-l14-q3",
              type: "tf",
              prompt:
                "Spending 15–20 minutes planning/annotating before writing is considered good practice.",
              answer: true,
              explanation:
                "A planned response scores better than a rushed stream of observations.",
            },
            {
              id: "ell-l14-q4",
              type: "mcq",
              prompt: "In an advert, the most analytical observation is about",
              choices: [
                "what is being sold",
                "how visual and verbal choices position the reader to desire it",
                "the price",
                "the company name",
              ],
              answerIndex: 1,
              explanation:
                "Analyse positioning techniques, not the product.",
            },
            {
              id: "ell-l14-q5",
              type: "short",
              prompt:
                "Name the three contextual questions to ask of any text (TAP).",
              answer: "text type, audience, purpose",
              keywords: ["audience", "purpose"],
              acceptable: ["type audience purpose"],
              explanation:
                "Text type, Audience, Purpose — the annotation frame.",
            },
            {
              id: "ell-l14-q6",
              type: "short",
              prompt:
                "Give ONE structural feature (not a language device) worth analysing.",
              answer: "sentence length variation",
              keywords: ["sentence", "structure", "paragraph", "shift", "order"],
              acceptable: ["paragraphing", "sentence length", "chronology"],
              explanation:
                "Structure = order of ideas, paragraphing, sentence form, narrative perspective.",
            },
          ],
        },
      ],
    },
    {
      id: "ell-u3",
      title: "Paper 2: Comparative essay",
      code: "Paper 2",
      lessons: [
        {
          id: "ell-l7",
          title: "Comparing literary works",
          questions: [
            {
              id: "ell-l7-q1",
              type: "mcq",
              prompt: "Paper 2 requires you to…",
              choices: [
                "compare two studied literary works in response to a question",
                "analyse an unseen text",
                "write a creative piece",
                "summarise one work",
              ],
              answerIndex: 0,
              explanation:
                "You may not use works used elsewhere in assessment.",
            },
            {
              id: "ell-l7-q2",
              type: "tf",
              prompt:
                "A strong comparison discusses similarities AND differences between the works.",
              answer: true,
              explanation:
                "Genuine comparison weighs both convergence and divergence.",
            },
            {
              id: "ell-l7-q3",
              type: "mcq",
              prompt:
                "When comparing, the most effective structure is usually…",
              choices: [
                "integrated — alternating between works within each point",
                "all of work A, then all of work B, with no links",
                "only discussing your favourite",
                "listing plot summaries",
              ],
              answerIndex: 0,
              explanation:
                "Integrated comparison sustains the argument; block structure risks two mini-essays.",
            },
            {
              id: "ell-l7-q4",
              type: "short",
              prompt:
                "Why does comparing context (when/where each work was written) deepen a Paper 2 answer? (key idea: same theme, different shaping forces)",
              answer:
                "Different contexts explain why the works treat the same theme differently",
              keywords: ["context", "theme", "differ", "shape", "time", "place", "culture"],
              explanation:
                "Contextual comparison explains divergence in treatment of shared ideas.",
            },
            {
              id: "ell-l7-q5",
              type: "mcq",
              prompt:
                "The exam question asks about 'power'. The best approach is to…",
              choices: [
                "build an argument on how each work presents power, comparing authorial choices",
                "define 'power' in the introduction only",
                "write about every theme",
                "agree the works are identical",
              ],
              answerIndex: 0,
              explanation:
                "Focus the question into a comparative argument about authorial choices.",
            },
            {
              id: "ell-l7-q6",
              type: "tf",
              prompt:
                "You may use the same literary work in Paper 2 that you analysed in your individual oral.",
              answer: false,
              explanation:
                "Works may not overlap across assessed components.",
            },
          ],
        },
        {
          id: "ell-l8",
          title: "Thesis & structure",
          questions: [
            {
              id: "ell-l8-q1",
              type: "mcq",
              prompt: "A comparative thesis should…",
              choices: [
                "make an arguable claim about both works' treatment of the topic",
                "state which book you prefer",
                "summarise both plots",
                "quote the question verbatim",
              ],
              answerIndex: 0,
              explanation:
                "The thesis drives a unified comparative argument.",
            },
            {
              id: "ell-l8-q2",
              type: "tf",
              prompt:
                "Comparative connectives ('whereas', 'similarly', 'in contrast') help sustain comparison.",
              answer: true,
              explanation:
                "They signal the comparative relationship to the examiner.",
            },
            {
              id: "ell-l8-q3",
              type: "mcq",
              prompt: "Each body paragraph in Paper 2 should ideally…",
              choices: [
                "address both works around a single comparative point",
                "cover one work only",
                "contain no quotations",
                "be longer than the introduction",
              ],
              answerIndex: 0,
              explanation:
                "One point, both texts — the engine of integrated comparison.",
            },
            {
              id: "ell-l8-q4",
              type: "short",
              prompt:
                "What is the role of the conclusion in a comparative essay? (key idea: synthesise, not summarise)",
              answer:
                "To synthesise the comparison into an overall evaluative judgement",
              keywords: ["synthes", "evaluat", "judg", "overall", "argument", "comparison"],
              explanation:
                "Draw the threads together — what does the comparison reveal overall?",
            },
            {
              id: "ell-l8-q5",
              type: "mcq",
              prompt: "Weak Paper 2 answers most often fail because they…",
              choices: [
                "describe rather than argue and compare",
                "use too much vocabulary",
                "are too short by one sentence",
                "mention the authors' names",
              ],
              answerIndex: 0,
              explanation:
                "Narrating content instead of analysing comparatively caps the marks.",
            },
            {
              id: "ell-l8-q6",
              type: "short",
              prompt:
                "Suggest one way to balance treatment of two works when one is a play and the other a novel. (key idea: compare equivalent elements)",
              answer:
                "Compare equivalent authorial choices such as characterisation, theme or structure across both genres",
              keywords: ["equival", "theme", "character", "structure", "genre", "both", "compare"],
              explanation:
                "Anchor comparison in shared elements rather than genre-specific features only.",
            },
          ],
        },
        {
          id: "ell-l15",
          title: "Paper 2: choosing and pairing works",
          questions: [
            {
              id: "ell-l15-q1",
              type: "mcq",
              prompt: "When choosing works for a Paper 2 question you should",
              choices: [
                "always use your favourites",
                "pick works whose themes directly address the question's focus",
                "pick the longest",
                "pick works by the same author",
              ],
              answerIndex: 1,
              explanation:
                "The question drives selection — works must give you comparative material on its terms.",
            },
            {
              id: "ell-l15-q2",
              type: "mcq",
              prompt: "Comparing works means",
              choices: [
                "describing each in turn",
                "evaluating similarities AND differences in how they treat the topic",
                "saying which is better",
                "summarising plots",
              ],
              answerIndex: 1,
              explanation:
                "Paper 2 rewards interwoven comparison, not parallel summaries.",
            },
            {
              id: "ell-l15-q3",
              type: "tf",
              prompt:
                "You may discuss a work in Paper 2 that you also analysed in Paper 1 prep or the IO.",
              answer: false,
              explanation:
                "Works must not overlap between assessment components.",
            },
            {
              id: "ell-l15-q4",
              type: "mcq",
              prompt: "A comparative thesis should",
              choices: [
                "state both plots",
                "make an arguable claim about how the works relate on the topic",
                "list features",
                "avoid opinion",
              ],
              answerIndex: 1,
              explanation:
                "The thesis frames the comparison — e.g. 'both condemn X, but through contrasting methods'.",
            },
            {
              id: "ell-l15-q5",
              type: "short",
              prompt:
                "Name ONE dimension you can compare across two works (besides theme).",
              answer: "authorial methods / techniques",
              keywords: ["technique", "style", "structure", "character", "context", "narrative"],
              acceptable: ["techniques", "structure", "characterisation", "context"],
              explanation:
                "Compare methods, characters, contexts, narrative voices, endings…",
            },
            {
              id: "ell-l15-q6",
              type: "short",
              prompt:
                "How many works must you discuss in Paper 2? (one number)",
              answer: "2",
              keywords: ["2"],
              acceptable: ["two"],
              explanation:
                "Two studied works compared in response to one question.",
            },
          ],
        },
        {
          id: "ell-l16",
          title: "Paper 2: structure and exam technique",
          questions: [
            {
              id: "ell-l16-q1",
              type: "mcq",
              prompt: "The most effective Paper 2 structure is",
              choices: [
                "work A fully then work B",
                "thematically organised points comparing both works throughout",
                "chronological summary",
                "no plan",
              ],
              answerIndex: 1,
              explanation:
                "Point-by-point comparison integrates the works and scores higher.",
            },
            {
              id: "ell-l16-q2",
              type: "mcq",
              prompt: "Referring to context in Paper 2 should",
              choices: [
                "be avoided",
                "support points about meaning, not dominate the essay",
                "be the whole essay",
                "list historical dates",
              ],
              answerIndex: 1,
              explanation:
                "Context informs interpretation — it isn't assessed alone.",
            },
            {
              id: "ell-l16-q3",
              type: "tf",
              prompt:
                "Both works deserve roughly balanced coverage in the essay.",
              answer: true,
              explanation:
                "Marking penalises heavily unbalanced treatment.",
            },
            {
              id: "ell-l16-q4",
              type: "mcq",
              prompt: "A useful way to open a comparative paragraph is",
              choices: [
                "'In book one…'",
                "a comparative claim: 'While A does X, B instead…'",
                "'This book is about…'",
                "a quotation",
              ],
              answerIndex: 1,
              explanation:
                "Comparative topic sentences force the contrast upfront.",
            },
            {
              id: "ell-l16-q5",
              type: "short",
              prompt:
                "Give ONE comparative connective useful in Paper 2 (e.g. 'whereas').",
              answer: "whereas",
              keywords: ["whereas", "while", "unlike", "similarly", "contrast"],
              acceptable: ["while", "in contrast", "similarly", "unlike"],
              explanation:
                "Whereas / unlike / similarly / in contrast — the vocabulary of comparison.",
            },
            {
              id: "ell-l16-q6",
              type: "short",
              prompt:
                "How long is the Paper 2 exam (minutes)?",
              answer: "105",
              keywords: ["105"],
              acceptable: ["105 minutes", "1h45"],
              explanation:
                "Paper 2 is 1 hour 45 minutes for both SL and HL.",
            },
          ],
        },
        {
          id: "ell-l17",
          title: "Paper 2: common pitfalls and the learner portfolio",
          questions: [
            {
              id: "ell-l17-q1",
              type: "mcq",
              prompt: "The most common Paper 2 mistake is",
              choices: [
                "comparing too much",
                "retelling plots instead of analysing",
                "using quotations",
                "writing too little",
              ],
              answerIndex: 1,
              explanation:
                "Narrative summary earns almost no marks — analysis of choices does.",
            },
            {
              id: "ell-l17-q2",
              type: "mcq",
              prompt: "The learner portfolio's role is to",
              choices: [
                "be a marked notebook",
                "collect reflections, responses and connections that feed assessments",
                "replace essays",
                "record grades",
              ],
              answerIndex: 1,
              explanation:
                "It's a workspace — unassessed but central to the course's philosophy.",
            },
            {
              id: "ell-l17-q3",
              type: "tf",
              prompt:
                "Learner portfolio entries can include creative responses, questions and connections, not just essays.",
              answer: true,
              explanation:
                "Reflection in varied forms — journals, mind maps, pastiches — builds interpretive skill.",
            },
            {
              id: "ell-l17-q4",
              type: "mcq",
              prompt: "Using a memorised essay in Paper 2 fails because",
              choices: [
                "it's too long",
                "it won't answer the specific question asked",
                "essays are banned",
                "markers know it",
              ],
              answerIndex: 1,
              explanation:
                "Every question is different — prepared answers rarely fit.",
            },
            {
              id: "ell-l17-q5",
              type: "short",
              prompt:
                "Name ONE thing a learner portfolio reflection might connect a text to.",
              answer: "a global issue or personal response",
              keywords: ["issue", "response", "context", "connect"],
              acceptable: ["global issue", "personal response", "another text"],
              explanation:
                "Text ↔ issue, text ↔ text, text ↔ self — connections are the point.",
            },
            {
              id: "ell-l17-q6",
              type: "short",
              prompt:
                "Instead of summarising a scene, what should a Paper 2 sentence do? (one phrase)",
              answer: "analyse the author's choices",
              keywords: ["analy", "choice", "effect"],
              acceptable: ["analyse the effect", "explain authorial choices"],
              explanation:
                "Every reference should serve an analytical point.",
            },
          ],
        },
      ],
    },
    {
      id: "ell-u4",
      title: "HL Essay",
      code: "HL only",
      level: "HL",
      lessons: [
        {
          id: "ell-l9",
          title: "Choosing a line of inquiry",
          level: "HL",
          questions: [
            {
              id: "ell-l9-q1",
              type: "mcq",
              prompt: "The HL essay is…",
              choices: [
                "a 1200–1500 word essay on a studied text exploring a chosen line of inquiry",
                "an oral presentation",
                "a creative writing task",
                "a group project",
              ],
              answerIndex: 0,
              explanation:
                "20% of the HL grade; focused, analytical, self-directed.",
            },
            {
              id: "ell-l9-q2",
              type: "tf",
              prompt:
                "A good line of inquiry is broad enough to cover everything the author ever wrote.",
              answer: false,
              explanation:
                "It must be focused and arguable within the word limit.",
            },
            {
              id: "ell-l9-q3",
              type: "mcq",
              prompt: "Which is the strongest line of inquiry?",
              choices: [
                "How does recurring water imagery develop the theme of guilt in the novel?",
                "Is this a good book?",
                "What happens in chapter 3?",
                "Why did the author write books?",
              ],
              answerIndex: 0,
              explanation:
                "Specific feature + arguable link to meaning = viable inquiry.",
            },
            {
              id: "ell-l9-q4",
              type: "short",
              prompt:
                "What makes a line of inquiry 'arguable'? (key idea: interpretation, not fact)",
              answer:
                "It invites an interpretive argument that could be debated, not a factual answer",
              keywords: ["interpret", "argu", "debat", "opinion", "claim", "not factual"],
              explanation:
                "If the answer is obvious or factual, there's nothing to argue.",
            },
            {
              id: "ell-l9-q5",
              type: "mcq",
              prompt: "The HL essay must be based on…",
              choices: [
                "a work studied in the course, not used for other assessments",
                "any film",
                "an unseen text",
                "two works compared",
              ],
              answerIndex: 0,
              explanation:
                "One work or text studied, with no overlap with IO/Paper 2.",
            },
            {
              id: "ell-l9-q6",
              type: "tf",
              prompt:
                "Secondary sources (critics) are required for the HL essay.",
              answer: false,
              explanation:
                "The essay is your own analysis; sources are optional, not required.",
            },
          ],
        },
        {
          id: "ell-l18",
          title: "HL essay: choosing your text and focus",
          level: "HL",
          questions: [
            {
              id: "ell-l18-q1",
              type: "mcq",
              prompt: "The best HL essay text choice is one that",
              choices: [
                "you know offers rich, arguable material on a focused feature",
                "is the longest",
                "you haven't read",
                "is easiest to summarise",
              ],
              answerIndex: 0,
              explanation:
                "Depth of analysable material beats familiarity or length.",
            },
            {
              id: "ell-l18-q2",
              type: "mcq",
              prompt: "A 'broad' line of inquiry risks",
              choices: [
                "too much analysis",
                "superficial coverage and summary",
                "high marks",
                "originality",
              ],
              answerIndex: 1,
              explanation:
                "Broad topics collapse into plot summary within 1200–1500 words.",
            },
            {
              id: "ell-l18-q3",
              type: "tf",
              prompt:
                "The HL essay question can be refined as your analysis develops.",
              answer: true,
              explanation:
                "Iterating the inquiry while drafting is normal and encouraged.",
            },
            {
              id: "ell-l18-q4",
              type: "mcq",
              prompt: "A 'focused' inquiry targets",
              choices: [
                "the whole book",
                "a specific feature, motif or technique and its contribution to meaning",
                "the author's life",
                "the film version",
              ],
              answerIndex: 1,
              explanation:
                "Feature → meaning: the narrower the feature, the deeper the analysis.",
            },
            {
              id: "ell-l18-q5",
              type: "short",
              prompt:
                "Complete the inquiry formula: 'How does [feature] contribute to [___] in [text]?' (one word)",
              answer: "theme",
              keywords: ["theme", "meaning"],
              acceptable: ["the theme", "meaning"],
              explanation:
                "Feature → theme/meaning is the classic inquiry shape.",
            },
            {
              id: "ell-l18-q6",
              type: "short",
              prompt:
                "The HL essay word count is 1200–___ words.",
              answer: "1500",
              keywords: ["1500"],
              explanation:
                "1200–1500 words — exceeding it loses marks.",
            },
          ],
        },
        {
          id: "ell-l19",
          title: "HL essay: argument, structure and evidence",
          level: "HL",
          questions: [
            {
              id: "ell-l19-q1",
              type: "mcq",
              prompt: "The essay's argument should develop",
              choices: [
                "randomly",
                "through logically ordered points building the thesis",
                "chronologically through the plot",
                "alphabetically",
              ],
              answerIndex: 1,
              explanation:
                "Each paragraph advances the argument — order by logic, not page order.",
            },
            {
              id: "ell-l19-q2",
              type: "mcq",
              prompt: "Quotations in the HL essay should be",
              choices: [
                "as long as possible",
                "short, embedded and analysed",
                "listed at the end",
                "avoided",
              ],
              answerIndex: 1,
              explanation:
                "Brief embedded evidence keeps your voice dominant.",
            },
            {
              id: "ell-l19-q3",
              type: "tf",
              prompt:
                "Considering a counter-reading can strengthen an HL essay argument.",
              answer: true,
              explanation:
                "Acknowledging alternative interpretations shows evaluative thinking (Criterion B).",
            },
            {
              id: "ell-l19-q4",
              type: "mcq",
              prompt: "The conclusion should",
              choices: [
                "introduce new evidence",
                "synthesise how the feature produces the argued meaning",
                "repeat the introduction",
                "summarise the plot",
              ],
              answerIndex: 1,
              explanation:
                "Answer your inquiry directly — no new material.",
            },
            {
              id: "ell-l19-q5",
              type: "short",
              prompt:
                "Name the term for borrowed ideas/words that must be cited to avoid plagiarism.",
              answer: "sources",
              keywords: ["source", "citation", "reference"],
              acceptable: ["secondary sources", "references"],
              explanation:
                "Any secondary material must be referenced — academic honesty rules apply.",
            },
            {
              id: "ell-l19-q6",
              type: "short",
              prompt:
                "Each body paragraph should open with a ___ sentence stating its point. (one word)",
              answer: "topic",
              keywords: ["topic"],
              acceptable: ["topic sentence"],
              explanation:
                "Topic sentences keep the argument's logic visible.",
            },
          ],
        },
        {
          id: "ell-l20",
          title: "HL essay: academic integrity and criteria",
          level: "HL",
          questions: [
            {
              id: "ell-l20-q1",
              type: "mcq",
              prompt: "Using a critic's idea without citation is",
              choices: [
                "acceptable",
                "plagiarism",
                "encouraged",
                "required",
              ],
              answerIndex: 1,
              explanation:
                "All borrowed ideas need referencing, whatever the source.",
            },
            {
              id: "ell-l20-q2",
              type: "mcq",
              prompt: "Criterion C of the HL essay assesses",
              choices: [
                "knowledge only",
                "focus, organisation and development of the argument",
                "grammar",
                "creativity",
              ],
              answerIndex: 1,
              explanation:
                "A: knowledge/interpretation, B: analysis/evaluation, C: focus & organisation, D: language.",
            },
            {
              id: "ell-l20-q3",
              type: "tf",
              prompt:
                "You may get feedback on drafts, but the submitted essay must be entirely your own work.",
              answer: true,
              explanation:
                "One round of teacher feedback is permitted; the writing is yours.",
            },
            {
              id: "ell-l20-q4",
              type: "mcq",
              prompt: "The essay must use a work",
              choices: [
                "also used in the IO",
                "studied in the course and not used for other components",
                "from the internet",
                "of your own invention",
              ],
              answerIndex: 1,
              explanation:
                "No overlap with IO, Paper 1 prep texts or Paper 2 works.",
            },
            {
              id: "ell-l20-q5",
              type: "short",
              prompt:
                "Name the referencing style commonly required for the HL essay bibliography.",
              answer: "MLA",
              keywords: ["mla", "reference", "bibliograph"],
              acceptable: ["MLA", "any consistent style"],
              explanation:
                "Schools usually require MLA — consistency matters more than the specific style.",
            },
            {
              id: "ell-l20-q6",
              type: "short",
              prompt:
                "What percentage of the HL grade does the HL essay carry? (number)",
              answer: "20",
              keywords: ["20"],
              acceptable: ["20%"],
              explanation: "20% of the HL English A grade.",
            },
          ],
        },
        {
          id: "ell-l21",
          title: "HL essay: drafting and refining the inquiry",
          level: "HL",
          questions: [
            {
              id: "ell-l21-q1",
              type: "mcq",
              prompt: "If your draft exceeds the word limit, the best fix is",
              choices: [
                "smaller font",
                "cut redundant summary and tighten analysis",
                "remove the conclusion",
                "ignore it",
              ],
              answerIndex: 1,
              explanation:
                "Cut description, keep analysis — every sentence must earn its place.",
            },
            {
              id: "ell-l21-q2",
              type: "mcq",
              prompt: "A sign your inquiry needs narrowing is",
              choices: [
                "too much evidence",
                "you are summarising large sections to cover the topic",
                "a clear thesis",
                "short paragraphs",
              ],
              answerIndex: 1,
              explanation:
                "Summary creep signals the scope is too wide for 1500 words.",
            },
            {
              id: "ell-l21-q3",
              type: "tf",
              prompt:
                "A strong essay links every analytical point back to the central inquiry.",
              answer: true,
              explanation:
                "Relevance to the inquiry is what 'focus' means in Criterion C.",
            },
            {
              id: "ell-l21-q4",
              type: "mcq",
              prompt: "When revising, check that each paragraph",
              choices: [
                "has a quotation",
                "advances the argument rather than repeating or describing",
                "is the same length",
                "mentions the title",
              ],
              answerIndex: 1,
              explanation:
                "If a paragraph doesn't move the argument forward, cut or rewrite it.",
            },
            {
              id: "ell-l21-q5",
              type: "short",
              prompt:
                "Drafting reveals your thesis is wrong. The best action is to ___ it. (one word)",
              answer: "revise",
              keywords: ["revise", "refine", "change", "rewrite", "adjust"],
              acceptable: ["refine", "rewrite", "change"],
              explanation:
                "Refining the inquiry in light of evidence is expected scholarly practice.",
            },
            {
              id: "ell-l21-q6",
              type: "short",
              prompt:
                "What should appear on the essay's title page beside the inquiry question? (one item)",
              answer: "the work and author",
              keywords: ["work", "author", "title"],
              acceptable: ["the text", "title of work"],
              explanation:
                "Title page: inquiry question, work, author, word count.",
            },
          ],
        },
      ],
    },
    {
      id: "ell-u5",
      title: "Individual oral",
      code: "IO",
      lessons: [
        {
          id: "ell-l10",
          title: "Global issues & the 7 concepts",
          questions: [
            {
              id: "ell-l10-q1",
              type: "mcq",
              prompt: "A 'global issue' in the IO must be…",
              choices: [
                "transnational in scale, felt in everyday local contexts, and evidenced in both extracts",
                "any topic you find interesting",
                "a problem only in your country",
                "an abstract concept with no examples",
              ],
              answerIndex: 0,
              explanation:
                "The IB requires all three properties plus clear evidence in the extracts.",
            },
            {
              id: "ell-l10-q2",
              type: "mcq",
              prompt: "Which is NOT one of the seven course concepts?",
              choices: ["Grammar", "Identity", "Culture", "Perspective"],
              answerIndex: 0,
              explanation:
                "The seven: identity, culture, creativity, communication, perspective, transformation, representation.",
            },
            {
              id: "ell-l10-q3",
              type: "tf",
              prompt:
                "In the IO you analyse an extract from a literary work and one from a non-literary text, linked by a global issue.",
              answer: true,
              explanation:
                "10 minutes + 5 minutes of questions; 40% SL / 20% HL.",
            },
            {
              id: "ell-l10-q4",
              type: "short",
              prompt:
                "Why must the global issue be 'transnational'? (key idea: scale beyond one place)",
              answer:
                "So the issue has significance across borders rather than being purely local",
              keywords: ["border", "scale", "transnation", "global", "world", "local"],
              explanation:
                "The IO assesses how texts engage with issues of worldwide significance.",
            },
            {
              id: "ell-l10-q5",
              type: "mcq",
              prompt:
                "Choosing 'creativity' as a guiding concept for an extract would lead you to discuss…",
              choices: [
                "how imagination and invention shape the text's meaning",
                "the author's childhood",
                "grammar mistakes",
                "publication sales figures",
              ],
              answerIndex: 0,
              explanation:
                "Concepts are lenses for analysis, not topics in themselves.",
            },
            {
              id: "ell-l10-q6",
              type: "short",
              prompt:
                "Give an example of a plausible global issue for the IO (e.g. related to gender, environment, power).",
              answer: "Gender inequality",
              keywords: [
                "gender",
                "inequal",
                "environment",
                "power",
                "rac",
                "poverty",
                "war",
                "migrat",
                "censor",
                "health",
                "technolog",
                "justice",
              ],
              explanation:
                "Any transnational issue with local impact works, e.g. gender inequality, climate justice.",
            },
          ],
        },
        {
          id: "ell-l22",
          title: "The Individual Oral: global issues in depth",
          questions: [
            {
              id: "ell-l22-q1",
              type: "mcq",
              prompt: "A 'global issue' for the IO must be",
              choices: [
                "any topic you like",
                "transnational in scale, felt locally, and relevant today",
                "only about climate",
                "historical only",
              ],
              answerIndex: 1,
              explanation:
                "The three criteria: transnational, everyday local impact, contemporary relevance.",
            },
            {
              id: "ell-l22-q2",
              type: "mcq",
              prompt: "The IO connects the global issue to",
              choices: [
                "two random texts",
                "how a literary work and a non-literary body of work each present it",
                "the news",
                "your opinion only",
              ],
              answerIndex: 1,
              explanation:
                "One literary work + one non-literary body of work (BOW), 10 min + 5 min questions.",
            },
            {
              id: "ell-l22-q3",
              type: "tf",
              prompt:
                "The extract you analyse must be about 40 lines from the literary work.",
              answer: true,
              explanation:
                "~40 lines literary extract + a chosen non-literary extract, both linked to the issue.",
            },
            {
              id: "ell-l22-q4",
              type: "mcq",
              prompt: "A weak global issue would be",
              choices: [
                "the criminalisation of migration",
                "'love'",
                "racial discrimination in policing",
                "censorship of dissenting voices",
              ],
              answerIndex: 1,
              explanation:
                "'Love' is a theme, not an issue — issues are framed as problems/claims about the world.",
            },
            {
              id: "ell-l22-q5",
              type: "short",
              prompt:
                "Name the five IB fields of inquiry the IO issue must fit under (any one field).",
              answer: "culture, identity and community",
              keywords: ["culture", "identity", "politic", "justice", "science"],
              acceptable: [
                "politics, power and justice",
                "art, creativity and the imagination",
                "science, technology and the environment",
                "beliefs, values and education",
              ],
              explanation:
                "Culture/identity/community; beliefs/values/education; politics/power/justice; art/creativity/imagination; science/technology/environment.",
            },
            {
              id: "ell-l22-q6",
              type: "short",
              prompt:
                "How many minutes is the prepared talk in the IO? (number)",
              answer: "10",
              keywords: ["10"],
              acceptable: ["10 minutes"],
              explanation:
                "10 minutes prepared + 5 minutes of questions (SL also 15 total).",
            },
          ],
        },
        {
          id: "ell-l23",
          title: "IO: extracts, authorial choices and structure",
          questions: [
            {
              id: "ell-l23-q1",
              type: "mcq",
              prompt: "In the IO you should spend most time on",
              choices: [
                "describing the issue",
                "analysing how authorial choices present the global issue",
                "summarising the plot",
                "quoting critics",
              ],
              answerIndex: 1,
              explanation:
                "Criterion C focuses on analysis of choices in relation to the issue.",
            },
            {
              id: "ell-l23-q2",
              type: "mcq",
              prompt: "A strong IO structure",
              choices: [
                "works chronologically",
                "moves from broader work-level analysis to the extract and back",
                "covers only the extract",
                "is improvised",
              ],
              answerIndex: 1,
              explanation:
                "Zoom out (whole work) → zoom in (extract) → zoom out = coherent arc.",
            },
            {
              id: "ell-l23-q3",
              type: "tf",
              prompt:
                "The literary and non-literary parts of the talk should each get roughly half the time.",
              answer: true,
              explanation:
                "Balance matters — about 5 minutes each.",
            },
            {
              id: "ell-l23-q4",
              type: "mcq",
              prompt: "For the non-literary extract you could use",
              choices: [
                "a novel chapter",
                "a speech, advert or photograph from a studied BOW",
                "a poem",
                "a play scene",
              ],
              answerIndex: 1,
              explanation:
                "Non-literary BOW = speeches, campaigns, journalism, photography etc.",
            },
            {
              id: "ell-l23-q5",
              type: "short",
              prompt:
                "Give the three global-issue criteria (first letters: T, L, C).",
              answer: "transnational, local, contemporary",
              keywords: ["transnational", "local", "contemporar"],
              explanation:
                "Transnational scale, local everyday impact, contemporary relevance.",
            },
            {
              id: "ell-l23-q6",
              type: "short",
              prompt:
                "Name ONE thing an IO examiner looks for in the 5-minute questions.",
              answer: "ability to extend analysis",
              keywords: ["extend", "develop", "analy", "understand", "clarif"],
              acceptable: ["extending ideas", "further analysis"],
              explanation:
                "Questions probe whether you can go beyond the prepared talk.",
            },
          ],
        },
        {
          id: "ell-l24",
          title: "Learner portfolio: reflection and connection",
          questions: [
            {
              id: "ell-l24-q1",
              type: "mcq",
              prompt: "The learner portfolio is",
              choices: [
                "externally marked",
                "an unassessed personal record of your engagement with texts",
                "a textbook",
                "a final exam",
              ],
              answerIndex: 1,
              explanation:
                "It's the foundation for IO/HL essay ideas — personal, unassessed, ongoing.",
            },
            {
              id: "ell-l24-q2",
              type: "mcq",
              prompt: "A good portfolio reflection asks",
              choices: [
                "'what happened?'",
                "'how did this text change or challenge my thinking?'",
                "'who is the author?'",
                "'what grade did I get?'",
              ],
              answerIndex: 1,
              explanation:
                "Reflect on your response and evolving interpretation, not plot.",
            },
            {
              id: "ell-l24-q3",
              type: "tf",
              prompt:
                "Portfolio entries can feed directly into the IO and HL essay planning.",
              answer: true,
              explanation:
                "Teachers use portfolio work to help students select extracts and inquiries.",
            },
            {
              id: "ell-l24-q4",
              type: "mcq",
              prompt: "Intertextual portfolio work means",
              choices: [
                "copying texts",
                "connecting a text to other texts, media and contexts it echoes",
                "summarising",
                "translating",
              ],
              answerIndex: 1,
              explanation:
                "Tracing echoes and transformations between texts is intertextuality.",
            },
            {
              id: "ell-l24-q5",
              type: "short",
              prompt:
                "Name ONE non-essay portfolio entry type.",
              answer: "a mind map",
              keywords: ["mind", "letter", "pastiche", "journal", "creative", "diary", "art"],
              acceptable: ["pastiche", "letter to author", "creative response", "journal"],
              explanation:
                "Journals, pastiches, mind maps, letters, found poetry — variety is encouraged.",
            },
            {
              id: "ell-l24-q6",
              type: "short",
              prompt:
                "How often should the portfolio be updated? (one phrase)",
              answer: "regularly throughout the course",
              keywords: ["regular", "ongoing", "throughout", "continual"],
              acceptable: ["ongoing", "continuously"],
              explanation:
                "It's a living document across the two years, not a rush job.",
            },
          ],
        },
        {
          id: "ell-l25",
          title: "Intertextuality: how texts speak to each other",
          level: "HL",
          questions: [
            {
              id: "ell-l25-q1",
              type: "mcq",
              prompt: "Intertextuality means",
              choices: [
                "comparing plot summaries",
                "the way texts create meaning through echoes of and responses to other texts",
                "reading two books",
                "quoting sources",
              ],
              answerIndex: 1,
              explanation:
                "HL area of exploration: no text exists in isolation.",
            },
            {
              id: "ell-l25-q2",
              type: "mcq",
              prompt: "A modern novel rewriting a Greek myth is an example of",
              choices: [
                "plagiarism",
                "intertextual transformation",
                "coincidence",
                "translation",
              ],
              answerIndex: 1,
              explanation:
                "Retelling transforms the original's meaning for a new context.",
            },
            {
              id: "ell-l25-q3",
              type: "tf",
              prompt:
                "Allusion requires the reader to recognise the referenced text for full effect.",
              answer: true,
              explanation:
                "Allusions carry meaning only if the reader catches the echo.",
            },
            {
              id: "ell-l25-q4",
              type: "mcq",
              prompt: "Analysing intertextuality in an essay adds value because it",
              choices: [
                "pads the word count",
                "shows how meaning is shaped by literary and cultural tradition",
                "replaces analysis",
                "is required",
              ],
              answerIndex: 1,
              explanation:
                "It explains how authors position their work within or against tradition.",
            },
            {
              id: "ell-l25-q5",
              type: "short",
              prompt:
                "Name the intertextual device: a brief indirect reference to another text. (one word)",
              answer: "allusion",
              keywords: ["allusion"],
              acceptable: ["an allusion"],
              explanation:
                "Allusion — e.g. calling a rival 'my Brutus' references Julius Caesar.",
            },
            {
              id: "ell-l25-q6",
              type: "short",
              prompt:
                "A text that imitates another's style to mock or critique it is a ___.",
              answer: "parody",
              keywords: ["parod", "pastiche", "satire"],
              acceptable: ["pastiche", "parody"],
              explanation:
                "Parody mocks; pastiche imitates — both are intertextual strategies.",
            },
          ],
        },
      ],
    },
  ],
};
