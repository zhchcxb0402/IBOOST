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
      ],
    },
  ],
};
