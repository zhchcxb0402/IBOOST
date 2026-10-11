import type { Subject } from "../types";

export const englishB: Subject = {
  slug: "english-b",
  name: "English B",
  short: "English B",
  color: "#F43F5E",
  emoji: "🗣️",
  group: "Language acquisition",
  levels: ["SL", "HL"],
  description:
    "Language acquisition through the five prescribed themes — Identities, Experiences, Human ingenuity, Social organization and Sharing the planet — plus exam skills.",
  resources: [
    {
      name: "IB Official",
      url: "https://www.ibo.org/programmes/diploma-programme/curriculum/language-acquisition/",
      note: "Subject brief and syllabus outline",
    },
    {
      name: "RevisionDojo",
      url: "https://www.revisiondojo.com/",
      note: "Topic questions with worked solutions",
    },
    {
      name: "InThinking",
      url: "https://www.thinkib.net/english-b",
      note: "Teacher-written lessons and exam guidance",
    },
    {
      name: "Clastify",
      url: "https://www.clastify.com/",
      note: "Past papers and exemplar work",
    },
  ],
  units: [
    {
      id: "eb-u1",
      code: "Theme 1",
      title: "Identities",
      lessons: [
        {
          id: "eb-l1",
          title: "Lifestyles and self-expression",
          questions: [
            {
              id: "eb-l1-q1",
              type: "mcq",
              prompt:
                "Which word best completes: 'She takes ___ her mother — they both love painting.'",
              choices: ["after", "up", "on", "off"],
              answerIndex: 0,
              explanation:
                "'Take after' = resemble a family member in character or appearance.",
            },
            {
              id: "eb-l1-q2",
              type: "mcq",
              prompt:
                "'Peer pressure' refers to",
              choices: [
                "teachers' expectations",
                "influence from people of the same age or social group",
                "physical strength",
                "family traditions",
              ],
              answerIndex: 1,
              explanation:
                "The social influence exerted by one's peers, a common Identities topic.",
            },
            {
              id: "eb-l1-q3",
              type: "mcq",
              prompt:
                "Which is the correct conditional? 'If I ___ taller, I would join the basketball team.'",
              choices: ["am", "was", "were", "will be"],
              answerIndex: 2,
              explanation:
                "Second conditional uses 'were' for all persons in formal English.",
            },
            {
              id: "eb-l1-q4",
              type: "tf",
              prompt:
                "The phrase 'a sense of belonging' describes feeling accepted as part of a group.",
              answer: true,
              explanation:
                "Belonging = feeling connected to and accepted by a community or group.",
            },
            {
              id: "eb-l1-q5",
              type: "short",
              prompt:
                "Complete the sentence with a linking word of contrast: '___ the rain, the festival continued outdoors.'",
              answer: "Despite / In spite of",
              acceptable: ["despite", "in spite of", "although the rain stopped"],
              keywords: ["despite", "spite"],
              explanation:
                "'Despite/In spite of' + noun expresses contrast; 'although' needs a clause.",
            },
            {
              id: "eb-l1-q6",
              type: "short",
              prompt:
                "Give two adjectives commonly used to describe someone's personality in English.",
              answer:
                "e.g. outgoing and reliable",
              keywords: ["outgoing", "reliable", "shy", "confident", "kind", "friendly", "honest"],
              explanation:
                "Any suitable personality adjectives: outgoing, reliable, shy, confident, honest…",
            },
          ],
        },
        {
          id: "eb-l2",
          title: "Health and well-being",
          questions: [
            {
              id: "eb-l2-q1",
              type: "mcq",
              prompt:
                "'To cut down on sugar' means to",
              choices: [
                "eat more sugar",
                "reduce the amount of sugar consumed",
                "avoid all food",
                "cook with sugar",
              ],
              answerIndex: 1,
              explanation:
                "Phrasal verb 'cut down on' = reduce consumption.",
            },
            {
              id: "eb-l2-q2",
              type: "mcq",
              prompt:
                "Which sentence uses the present perfect correctly?",
              choices: [
                "I have eaten breakfast at 7 o'clock yesterday.",
                "I have already eaten breakfast this morning.",
                "I have eat breakfast.",
                "I eating breakfast since morning.",
              ],
              answerIndex: 1,
              explanation:
                "Present perfect + 'already' for a completed action with present relevance; yesterday needs past simple.",
            },
            {
              id: "eb-l2-q3",
              type: "mcq",
              prompt:
                "'A balanced diet' is one that",
              choices: [
                "contains only protein",
                "includes a variety of nutrients in appropriate amounts",
                "excludes all fat",
                "is eaten once a day",
              ],
              answerIndex: 1,
              explanation:
                "Balance = variety and moderation across food groups.",
            },
            {
              id: "eb-l2-q4",
              type: "tf",
              prompt:
                "The word 'sedentary' describes a lifestyle involving little physical activity.",
              answer: true,
              explanation:
                "Sedentary = mostly sitting/inactive — e.g. a sedentary job.",
            },
            {
              id: "eb-l2-q5",
              type: "short",
              prompt:
                "Write a sentence giving health advice using 'should'.",
              answer:
                "You should exercise regularly and get enough sleep.",
              keywords: ["should"],
              explanation:
                "'Should' + base verb gives advice: 'You should drink more water.'",
            },
            {
              id: "eb-l2-q6",
              type: "short",
              prompt:
                "What does the idiom 'under the weather' mean?",
              answer: "Feeling slightly ill",
              acceptable: ["sick", "unwell", "ill"],
              keywords: ["ill", "sick", "unwell"],
              explanation:
                "To feel under the weather = to feel unwell, not literally about weather.",
            },
          ],
        },
      ],
    },
    {
      id: "eb-u2",
      code: "Themes 2 & 3",
      title: "Experiences and human ingenuity",
      lessons: [
        {
          id: "eb-l3",
          title: "Journeys, stories and the past",
          questions: [
            {
              id: "eb-l3-q1",
              type: "mcq",
              prompt:
                "Choose the correct narrative tense: 'While we ___ through the market, it started to rain.'",
              choices: [
                "walk",
                "were walking",
                "have walked",
                "will walk",
              ],
              answerIndex: 1,
              explanation:
                "Past continuous for the background action interrupted by a past simple event.",
            },
            {
              id: "eb-l3-q2",
              type: "mcq",
              prompt:
                "Which linking word shows a sequence in a story?",
              choices: [
                "however",
                "meanwhile",
                "because",
                "despite",
              ],
              answerIndex: 1,
              explanation:
                "'Meanwhile' = at the same time — a sequencing connector; the others signal contrast or cause.",
            },
            {
              id: "eb-l3-q3",
              type: "mcq",
              prompt:
                "A 'memoir' is a text type that",
              choices: [
                "instructs the reader",
                "recounts personal memories and experiences",
                "sells a product",
                "reports news",
              ],
              answerIndex: 1,
              explanation:
                "First-person recollection of real experiences — key distinction from autobiography scope.",
            },
            {
              id: "eb-l3-q4",
              type: "tf",
              prompt:
                "The past perfect tense is used to show that one event happened before another past event.",
              answer: true,
              explanation:
                "'By the time we arrived, the show had started' — had + participle marks the earlier event.",
            },
            {
              id: "eb-l3-q5",
              type: "short",
              prompt:
                "Rewrite 'I go to Tokyo last year' in correct English.",
              answer: "I went to Tokyo last year.",
              acceptable: ["went"],
              keywords: ["went"],
              explanation:
                "Finished time ('last year') requires past simple 'went'.",
            },
            {
              id: "eb-l3-q6",
              type: "short",
              prompt:
                "Give three useful connectors for organising a narrative essay (beginning, middle, end).",
              answer:
                "At first, then, finally",
              keywords: ["first", "then", "finally", "after", "next", "suddenly", "eventually"],
              explanation:
                "Sequencing markers: at first, then, after that, suddenly, eventually, finally.",
            },
          ],
        },
        {
          id: "eb-l4",
          title: "Media, technology and innovation",
          questions: [
            {
              id: "eb-l4-q1",
              type: "mcq",
              prompt:
                "A 'headline' in a news article is designed to",
              choices: [
                "summarise and attract attention",
                "list sources",
                "show the author's opinion",
                "be a paragraph long",
              ],
              answerIndex: 0,
              explanation:
                "Headlines compress the story's essence to hook readers — often omitting articles/auxiliaries.",
            },
            {
              id: "eb-l4-q2",
              type: "mcq",
              prompt:
                "'Artificial intelligence' is an example of human ingenuity because it",
              choices: [
                "replaces all jobs",
                "represents creative problem-solving through technology",
                "is a natural phenomenon",
                "cannot be controlled",
              ],
              answerIndex: 1,
              explanation:
                "Human ingenuity theme = human creativity and innovation shaping the world.",
            },
            {
              id: "eb-l4-q3",
              type: "mcq",
              prompt:
                "The passive voice in 'The vaccine was developed in 2020' emphasises",
              choices: [
                "who developed it",
                "the vaccine rather than the developers",
                "the year only",
                "nothing",
              ],
              answerIndex: 1,
              explanation:
                "Passives foreground the object/result and background (or omit) the agent.",
            },
            {
              id: "eb-l4-q4",
              type: "tf",
              prompt:
                "Formal reports typically use contractions and slang to sound friendly.",
              answer: false,
              explanation:
                "Reports use formal register — full forms, objective tone, structured sections.",
            },
            {
              id: "eb-l4-q5",
              type: "short",
              prompt:
                "Rewrite in the passive: 'Engineers designed the new bridge in 2019.'",
              answer: "The new bridge was designed in 2019.",
              acceptable: ["was designed"],
              keywords: ["was", "designed"],
              explanation:
                "Object becomes subject: 'The new bridge was designed (by engineers) in 2019.'",
            },
            {
              id: "eb-l4-q6",
              type: "short",
              prompt:
                "Give two advantages and one disadvantage of social media for teenagers.",
              answer:
                "Connection and information sharing vs distraction/cyberbullying.",
              keywords: ["connect", "information", "distract", "bully", "privacy"],
              explanation:
                "Any balanced pair: staying connected/learning vs time loss, comparison, cyberbullying.",
            },
          ],
        },
      ],
    },
    {
      id: "eb-u3",
      code: "Themes 4 & 5",
      title: "Social organization and sharing the planet",
      lessons: [
        {
          id: "eb-l5",
          title: "Community, rules and register",
          questions: [
            {
              id: "eb-l5-q1",
              type: "mcq",
              prompt:
                "Which opening suits a formal letter of complaint?",
              choices: [
                "Hey there!",
                "Dear Sir or Madam,",
                "Hi guys,",
                "What's up?",
              ],
              answerIndex: 1,
              explanation:
                "Formal register uses conventional salutations and polite, impersonal language.",
            },
            {
              id: "eb-l5-q2",
              type: "mcq",
              prompt:
                "'Could you possibly help me?' is more polite than 'Help me' because it uses",
              choices: [
                "a command",
                "an indirect question form",
                "slang",
                "passive voice",
              ],
              answerIndex: 1,
              explanation:
                "Indirect formulations (Could/Would you…?) soften requests — key politeness strategy.",
            },
            {
              id: "eb-l5-q3",
              type: "mcq",
              prompt:
                "A 'community' is best defined as",
              choices: [
                "a building",
                "a group of people sharing location, interests or identity",
                "a law",
                "a website only",
              ],
              answerIndex: 1,
              explanation:
                "Shared characteristics bind a community — physical or virtual.",
            },
            {
              id: "eb-l5-q4",
              type: "tf",
              prompt:
                "The phrase 'I would appreciate it if you could…' belongs to informal register.",
              answer: false,
              explanation:
                "It is a formal, polite request formula — common in letters and emails.",
            },
            {
              id: "eb-l5-q5",
              type: "short",
              prompt:
                "Rewrite this sentence in formal register: 'Gimme the report ASAP.'",
              answer:
                "Could you please send me the report as soon as possible?",
              keywords: ["please", "could", "report", "soon"],
              explanation:
                "Replace slang with polite request forms and standard vocabulary.",
            },
            {
              id: "eb-l5-q6",
              type: "short",
              prompt:
                "Give two features of informal speech that would be inappropriate in a job interview.",
              answer:
                "Slang and contractions/fillers like 'gonna' and 'like'.",
              keywords: ["slang", "gonna", "informal", "contract"],
              explanation:
                "Slang, fillers, over-casual greetings — formal contexts need standard register.",
            },
          ],
        },
        {
          id: "eb-l6",
          title: "Environment and global issues",
          questions: [
            {
              id: "eb-l6-q1",
              type: "mcq",
              prompt:
                "'Renewable energy' comes from sources that",
              choices: [
                "will run out",
                "are naturally replenished",
                "produce carbon",
                "are imported",
              ],
              answerIndex: 1,
              explanation:
                "Solar, wind, hydro — naturally replenished, unlike fossil fuels.",
            },
            {
              id: "eb-l6-q2",
              type: "mcq",
              prompt:
                "Which modal expresses obligation? 'You ___ recycle your waste.'",
              choices: ["might", "must", "could", "may"],
              answerIndex: 1,
              explanation:
                "'Must' expresses strong obligation; might/could/may express possibility.",
            },
            {
              id: "eb-l6-q3",
              type: "mcq",
              prompt:
                "'Carbon footprint' measures",
              choices: [
                "shoe size",
                "the total greenhouse gases produced by a person or activity",
                "air temperature",
                "coal reserves",
              ],
              answerIndex: 1,
              explanation:
                "CO₂-equivalent emissions attributable to an individual, product or activity.",
            },
            {
              id: "eb-l6-q4",
              type: "tf",
              prompt:
                "'Furthermore' and 'moreover' are connectors that add supporting information.",
              answer: true,
              explanation:
                "Both are additive connectors — useful for building arguments in essays.",
            },
            {
              id: "eb-l6-q5",
              type: "short",
              prompt:
                "Write a sentence suggesting a solution to plastic pollution using 'should'.",
              answer:
                "Governments should ban single-use plastics.",
              keywords: ["should"],
              explanation:
                "'Should' + base verb for recommendations; any sensible solution accepted.",
            },
            {
              id: "eb-l6-q6",
              type: "short",
              prompt:
                "Explain the difference between 'climate' and 'weather'.",
              answer:
                "Weather is short-term conditions; climate is the long-term pattern.",
              keywords: ["long", "short", "term", "pattern"],
              explanation:
                "Weather changes daily; climate describes averages over decades.",
            },
          ],
        },
      ],
    },
    {
      id: "eb-u4",
      code: "Assessment",
      title: "Exam skills",
      lessons: [
        {
          id: "eb-l7",
          title: "Paper 1: text types and register",
          questions: [
            {
              id: "eb-l7-q1",
              type: "mcq",
              prompt:
                "A diary entry typically includes",
              choices: [
                "formal salutations",
                "a date, informal tone and personal reflections",
                "headlines",
                "bibliography",
              ],
              answerIndex: 1,
              explanation:
                "Personal text type: date, first person, informal register, feelings.",
            },
            {
              id: "eb-l7-q2",
              type: "mcq",
              prompt:
                "An article for a school magazine should",
              choices: [
                "have a title, engaging opening and organised paragraphs",
                "be written as a poem",
                "avoid all opinions",
                "use only bullet points",
              ],
              answerIndex: 0,
              explanation:
                "Title + hook + structured body + appropriate semi-formal register.",
            },
            {
              id: "eb-l7-q3",
              type: "mcq",
              prompt:
                "When choosing a text type for Paper 1, you should primarily consider",
              choices: [
                "the easiest one",
                "the audience, purpose and context given in the task",
                "word count only",
                "your favourite topic",
              ],
              answerIndex: 1,
              explanation:
                "Task fulfilment = matching text type and register to audience/purpose/context.",
            },
            {
              id: "eb-l7-q4",
              type: "tf",
              prompt:
                "In Paper 1 you are assessed on language, message and conceptual understanding — not handwriting.",
              answer: true,
              explanation:
                "The criteria are language, message and conceptual understanding (text type, audience, purpose).",
            },
            {
              id: "eb-l7-q5",
              type: "short",
              prompt:
                "Name two features of a formal email.",
              answer:
                "Formal salutation/closing and polite, complete sentences.",
              keywords: ["salutation", "dear", "polite", "sincerely", "formal"],
              explanation:
                "Dear…, Yours sincerely/faithfully, full sentences, no slang, clear purpose.",
            },
            {
              id: "eb-l7-q6",
              type: "short",
              prompt:
                "Why might a speech begin with a rhetorical question?",
              answer:
                "To engage the audience and introduce the topic provocatively.",
              keywords: ["engage", "audience", "attention", "interest"],
              explanation:
                "Rhetorical questions grab attention and frame the issue without needing an answer.",
            },
          ],
        },
        {
          id: "eb-l8",
          title: "Paper 2 and the individual oral",
          questions: [
            {
              id: "eb-l8-q1",
              type: "mcq",
              prompt:
                "In reading comprehension, 'skimming' means",
              choices: [
                "reading every word",
                "reading quickly for the general idea",
                "translating the text",
                "underlining verbs",
              ],
              answerIndex: 1,
              explanation:
                "Skim for gist first; scan later for specific details.",
            },
            {
              id: "eb-l8-q2",
              type: "mcq",
              prompt:
                "For the individual oral, you should",
              choices: [
                "memorise a script",
                "speak spontaneously, organising ideas and linking to the stimulus",
                "read the text aloud",
                "describe only the picture literally",
              ],
              answerIndex: 1,
              explanation:
                "The IO rewards fluent, connected, theme-linked discussion — not recitation.",
            },
            {
              id: "eb-l8-q3",
              type: "mcq",
              prompt:
                "In listening tasks, distractors are",
              choices: [
                "correct answers",
                "plausible but incorrect options that test real comprehension",
                "background noises",
                "the speakers' names",
              ],
              answerIndex: 1,
              explanation:
                "Options echoing words you hear but wrong in meaning — check context, not keywords.",
            },
            {
              id: "eb-l8-q4",
              type: "tf",
              prompt:
                "Guessing answers in Paper 2 is penalised, so blanks are better.",
              answer: false,
              explanation:
                "There is no negative marking — always attempt every question.",
            },
            {
              id: "eb-l8-q5",
              type: "short",
              prompt:
                "Give two strategies for answering vocabulary-in-context questions.",
              answer:
                "Read the surrounding sentences and use word formation/synonyms.",
              keywords: ["context", "surrounding", "synonym", "sentence"],
              explanation:
                "Infer from context clues, collocations and word parts rather than the dictionary meaning.",
            },
            {
              id: "eb-l8-q6",
              type: "short",
              prompt:
                "Structure a one-minute IO description: what three elements should it include?",
              answer:
                "Description of the stimulus, interpretation, and a link to the theme.",
              keywords: ["describe", "interpret", "theme", "link"],
              explanation:
                "Describe → interpret → connect to the prescribed theme and wider ideas.",
            },
          ],
        },
      ],
    },
    {
      id: "eb-u5",
      code: "HL extension",
      title: "HL skills",
      level: "HL",
      lessons: [
        {
          id: "eb-l9",
          title: "Literary works at HL",
          level: "HL",
          questions: [
            {
              id: "eb-l9-q1",
              type: "mcq",
              prompt:
                "At HL, students study two literary works in order to",
              choices: [
                "memorise plots",
                "develop critical appreciation of language, style and meaning",
                "translate them",
                "write summaries",
              ],
              answerIndex: 1,
              explanation:
                "HL literature aims at analysis of technique and interpretation, not retelling.",
            },
            {
              id: "eb-l9-q2",
              type: "mcq",
              prompt:
                "'Characterisation' refers to",
              choices: [
                "the plot order",
                "how an author presents and develops characters",
                "the setting",
                "rhyme schemes",
              ],
              answerIndex: 1,
              explanation:
                "Through description, dialogue, action and others' reactions.",
            },
            {
              id: "eb-l9-q3",
              type: "mcq",
              prompt:
                "A 'theme' in a literary work is",
              choices: [
                "a chapter title",
                "a central idea explored throughout the text",
                "the narrator's name",
                "a literary device",
              ],
              answerIndex: 1,
              explanation:
                "E.g. power, identity, love — the unifying ideas the work explores.",
            },
            {
              id: "eb-l9-q4",
              type: "tf",
              prompt:
                "Imagery includes descriptive language that appeals to the senses.",
              answer: true,
              explanation:
                "Visual, auditory, tactile etc. imagery creates vivid impressions.",
            },
            {
              id: "eb-l9-q5",
              type: "short",
              prompt:
                "Explain the difference between a narrator and a character.",
              answer:
                "The narrator tells the story; characters are the people/beings within it.",
              keywords: ["tell", "story", "character", "within"],
              explanation:
                "A narrator may also be a character (first person) or outside the story (third person).",
            },
            {
              id: "eb-l9-q6",
              type: "short",
              prompt:
                "What is 'foreshadowing'?",
              answer:
                "Hints that suggest events that will occur later in the story.",
              keywords: ["hint", "later", "suggest", "event"],
              explanation:
                "Early clues that prepare the reader for later developments.",
            },
          ],
        },
        {
          id: "eb-l10",
          title: "HL Paper 1 and extended writing",
          level: "HL",
          questions: [
            {
              id: "eb-l10-q1",
              type: "mcq",
              prompt:
                "The HL Paper 1 word count is",
              choices: [
                "150–250 words",
                "450–600 words",
                "1000 words",
                "250–400 words",
              ],
              answerIndex: 1,
              explanation:
                "HL writes 450–600 words; SL writes 250–400.",
            },
            {
              id: "eb-l10-q2",
              type: "mcq",
              prompt:
                "A proposal as a text type should include",
              choices: [
                "only opinions",
                "a problem statement, suggested actions and persuasive justification",
                "a diary date",
                "dialogue",
              ],
              answerIndex: 1,
              explanation:
                "Proposals argue a course of action: context → plan → benefits.",
            },
            {
              id: "eb-l10-q3",
              type: "mcq",
              prompt:
                "To reach the top mark bands at HL, language should be",
              choices: [
                "simple and safe",
                "varied, accurate and appropriately idiomatic",
                "full of slang",
                "minimal",
              ],
              answerIndex: 1,
              explanation:
                "Range + accuracy + register control distinguish top-band HL writing.",
            },
            {
              id: "eb-l10-q4",
              type: "tf",
              prompt:
                "At HL, a review should only describe the plot without evaluation.",
              answer: false,
              explanation:
                "A review must evaluate — judgement supported by specific detail is its purpose.",
            },
            {
              id: "eb-l10-q5",
              type: "short",
              prompt:
                "List three cohesive devices useful for long HL texts.",
              answer:
                "Linking words, pronoun reference and paragraphing.",
              keywords: ["link", "paragraph", "reference", "connector", "cohesion"],
              explanation:
                "Connectors, reference chains, topic sentences, clear paragraph structure.",
            },
            {
              id: "eb-l10-q6",
              type: "short",
              prompt:
                "Write one complex sentence giving a balanced view on technology using a concession clause.",
              answer:
                "Although technology can be distracting, it greatly improves access to education.",
              keywords: ["although", "though", "while", "despite"],
              explanation:
                "Concession: Although/While/Even though + opposing point, then main clause.",
            },
          ],
        },
        {
          id: "eb-l11",
          title: "HL language extension",
          level: "HL",
          questions: [
            {
              id: "eb-l11-q1",
              type: "mcq",
              prompt:
                "'Notwithstanding the cost, the project continued' — 'notwithstanding' means",
              choices: [
                "because of",
                "in spite of",
                "before",
                "unless",
              ],
              answerIndex: 1,
              explanation:
                "Formal concession connector = despite/in spite of.",
            },
            {
              id: "eb-l11-q2",
              type: "mcq",
              prompt:
                "Which sentence contains a correct third conditional?",
              choices: [
                "If I had studied, I would pass.",
                "If I had studied, I would have passed.",
                "If I studied, I would have passed.",
                "If I will study, I pass.",
              ],
              answerIndex: 1,
              explanation:
                "If + past perfect, would have + participle — for unreal past situations.",
            },
            {
              id: "eb-l11-q3",
              type: "mcq",
              prompt:
                "The idiom 'to break the ice' means to",
              choices: [
                "end a friendship",
                "start a conversation and ease tension",
                "cause an argument",
                "tell a secret",
              ],
              answerIndex: 1,
              explanation:
                "To initiate social interaction, especially among strangers.",
            },
            {
              id: "eb-l11-q4",
              type: "tf",
              prompt:
                "The subjunctive 'I suggest that he go' is more formal than 'I suggest that he goes'.",
              answer: true,
              explanation:
                "Mandative subjunctive (bare infinitive) is formal register — common in proposals.",
            },
            {
              id: "eb-l11-q5",
              type: "short",
              prompt:
                "Rewrite using inversion for emphasis: 'I have never seen such a beautiful place.'",
              answer:
                "Never have I seen such a beautiful place.",
              keywords: ["never", "have i", "seen"],
              explanation:
                "Negative adverbial fronting + inversion: 'Never/Rarely have I…'",
            },
            {
              id: "eb-l11-q6",
              type: "short",
              prompt:
                "Give an example of a hedging expression used in academic English and why it's used.",
              answer:
                "'It could be argued that' — softens claims to sound objective/cautious.",
              keywords: ["argu", "seem", "could", "suggest", "tend"],
              explanation:
                "Hedging (may, might, tend to, arguably) shows appropriate caution in formal writing.",
            },
          ],
        },
      ],
    },
  ],
};
