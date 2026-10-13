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
  syllabusUrl: "https://www.ibo.org/programmes/diploma-programme/curriculum/language-acquisition/",
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
        {
          id: "eb-l12",
          title: "Identities: vocabulary in context",
          questions: [
            {
              id: "eb-l12-q1",
              type: "mcq",
              prompt:
                "'She grew up in a bilingual household, switching between languages without thinking.' — 'grew up' means",
              choices: [
                "was raised",
                "became taller",
                "planted",
                "woke up",
              ],
              answerIndex: 0,
              explanation:
                "'Grow up' = spend childhood developing; a phrasal verb.",
            },
            {
              id: "eb-l12-q2",
              type: "mcq",
              prompt:
                "'He takes after his mother — they have the same sense of humour.' — 'takes after' means",
              choices: [
                "follows behind",
                "resembles",
                "looks for",
                "collects",
              ],
              answerIndex: 1,
              explanation:
                "'Take after' = resemble a parent or relative.",
            },
            {
              id: "eb-l12-q3",
              type: "tf",
              prompt:
                "'To fit in' means to feel you belong to a group.",
              answer: true,
              explanation:
                "'Fit in' = be accepted as part of a group — key identity vocabulary.",
            },
            {
              id: "eb-l12-q4",
              type: "mcq",
              prompt:
                "'Despite moving abroad, she never lost her sense of belonging.' — 'belonging' refers to",
              choices: [
                "property",
                "feeling part of a community",
                "luggage",
                "a club membership",
              ],
              answerIndex: 1,
              explanation:
                "'Sense of belonging' = feeling connected to a group or place.",
            },
            {
              id: "eb-l12-q5",
              type: "short",
              prompt:
                "Phrasal verb: 'I really look ___ to my grandmother — she's my role model.' (respect)",
              answer: "up",
              keywords: ["up"],
              acceptable: ["up to"],
              explanation:
                "'Look up to' = admire/respect someone.",
            },
            {
              id: "eb-l12-q6",
              type: "short",
              prompt:
                "Translate the idea: to be proud of your cultural ___ (the customs and background you inherit).",
              answer: "heritage",
              keywords: ["heritage"],
              acceptable: ["cultural heritage", "roots"],
              explanation:
                "'Heritage' = inherited traditions, language and culture.",
            },
          ],
        },
        {
          id: "eb-l13",
          title: "Phrasal verbs for everyday life",
          questions: [
            {
              id: "eb-l13-q1",
              type: "mcq",
              prompt:
                "'The meeting was called off because of the storm.' — 'called off' means",
              choices: ["cancelled", "loudly announced", "delayed", "attended"],
              answerIndex: 0,
              explanation:
                "'Call off' = cancel an event.",
            },
            {
              id: "eb-l13-q2",
              type: "mcq",
              prompt:
                "'I need to catch up on my homework this weekend.' — 'catch up on' means",
              choices: [
                "throw away",
                "do work you are behind on",
                "copy",
                "run faster",
              ],
              answerIndex: 1,
              explanation:
                "'Catch up on' = reach the level you should be at.",
            },
            {
              id: "eb-l13-q3",
              type: "tf",
              prompt:
                "In 'put off', the meaning is the same as 'postpone'.",
              answer: true,
              explanation:
                "'Put off' = postpone to a later time.",
            },
            {
              id: "eb-l13-q4",
              type: "mcq",
              prompt:
                "'We ran out of milk, so I went to the shop.' — 'ran out of' means",
              choices: [
                "ran towards",
                "had no more left",
                "escaped",
                "bought",
              ],
              answerIndex: 1,
              explanation:
                "'Run out of' = exhaust your supply.",
            },
            {
              id: "eb-l13-q5",
              type: "short",
              prompt:
                "Complete: 'Could you please fill ___ this form?' (a document)",
              answer: "in",
              keywords: ["in"],
              acceptable: ["in", "out"],
              explanation:
                "'Fill in/out' a form = complete it.",
            },
            {
              id: "eb-l13-q6",
              type: "short",
              prompt:
                "Complete: 'She came ___ an old photo while cleaning the attic.' (found by chance)",
              answer: "across",
              keywords: ["across"],
              acceptable: ["across", "upon"],
              explanation:
                "'Come across' = find or meet by chance.",
            },
          ],
        },
        {
          id: "eb-l14",
          title: "Conditionals and imagined situations",
          questions: [
            {
              id: "eb-l14-q1",
              type: "mcq",
              prompt:
                "Which sentence is a SECOND conditional (hypothetical present)?",
              choices: [
                "If it rains, I will stay home.",
                "If I had more time, I would learn another language.",
                "If you heat ice, it melts.",
                "If she had studied, she would have passed.",
              ],
              answerIndex: 1,
              explanation:
                "Second conditional: if + past simple, would + infinitive — unreal now.",
            },
            {
              id: "eb-l14-q2",
              type: "mcq",
              prompt:
                "'If I had known, I ___ have helped.' — correct form?",
              choices: ["will", "would", "can", "must"],
              answerIndex: 1,
              explanation:
                "Third conditional: if + past perfect, would have + participle.",
            },
            {
              id: "eb-l14-q3",
              type: "tf",
              prompt:
                "The zero conditional (if + present, present) expresses general truths.",
              answer: true,
              explanation:
                "e.g. 'If you mix blue and yellow, you get green' — always true.",
            },
            {
              id: "eb-l14-q4",
              type: "mcq",
              prompt:
                "'Unless you hurry, you'll miss the bus.' — 'unless' means",
              choices: ["if", "if not", "because", "when"],
              answerIndex: 1,
              explanation:
                "'Unless' = 'if…not' — a common first-conditional variant.",
            },
            {
              id: "eb-l14-q5",
              type: "short",
              prompt:
                "Rewrite as a wish: 'I'm not tall.' → 'I wish I ___ taller.'",
              answer: "were",
              keywords: ["were"],
              acceptable: ["was"],
              explanation:
                "'Wish + past' for present wishes; 'were' is the formal form for all persons.",
            },
            {
              id: "eb-l14-q6",
              type: "short",
              prompt:
                "Complete (third conditional): 'If they ___ (leave) earlier, they wouldn't have missed the flight.'",
              answer: "had left",
              keywords: ["had left"],
              acceptable: ["'d left"],
              explanation:
                "Third conditional uses past perfect in the if-clause.",
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
        {
          id: "eb-l15",
          title: "Experiences: reading a travel account",
          questions: [
            {
              id: "eb-l15-q1",
              type: "mcq",
              prompt:
                "Read: 'The overnight train rattled through the mountains. By dawn, exhausted but exhilarated, we stepped onto the platform in a city we had only seen in photographs.' — The travellers felt",
              choices: [
                "disappointed",
                "tired but excited",
                "bored",
                "frightened",
              ],
              answerIndex: 1,
              explanation:
                "'Exhausted but exhilarated' = tired yet thrilled.",
            },
            {
              id: "eb-l15-q2",
              type: "mcq",
              prompt:
                "In the same passage, 'stepped onto the platform' tells us they",
              choices: [
                "got off the train",
                "bought tickets",
                "missed the train",
                "took photos",
              ],
              answerIndex: 0,
              explanation:
                "The platform is where you arrive — inference from context.",
            },
            {
              id: "eb-l15-q3",
              type: "tf",
              prompt:
                "'It turned out to be the best decision we ever made' — 'turned out' means proved to be in the end.",
              answer: true,
              explanation:
                "'Turn out' = the eventual result.",
            },
            {
              id: "eb-l15-q4",
              type: "mcq",
              prompt:
                "Read: 'Volunteering at the shelter opened my eyes to how privileged I am.' — 'opened my eyes' means",
              choices: [
                "woke me up",
                "made me aware of something",
                "hurt my eyes",
                "was boring",
              ],
              answerIndex: 1,
              explanation:
                "Idiom: to make someone see the truth.",
            },
            {
              id: "eb-l15-q5",
              type: "short",
              prompt:
                "Read: 'We set off at sunrise and reached the summit by noon.' What time did they arrive? (one word)",
              answer: "noon",
              keywords: ["noon", "midday", "12"],
              acceptable: ["midday", "12pm", "12 pm"],
              explanation:
                "'By noon' = 12 o'clock.",
            },
            {
              id: "eb-l15-q6",
              type: "short",
              prompt:
                "Read: 'The festival draws thousands of visitors every year.' 'Draws' here means ___.",
              answer: "attracts",
              keywords: ["attract"],
              acceptable: ["attracts", "brings"],
              explanation:
                "Context meaning of 'draw' = attract.",
            },
          ],
        },
        {
          id: "eb-l16",
          title: "Human ingenuity: technology vocabulary",
          questions: [
            {
              id: "eb-l16-q1",
              type: "mcq",
              prompt:
                "'The breakthrough allowed doctors to detect diseases earlier.' — 'breakthrough' means",
              choices: [
                "an accident",
                "an important discovery",
                "a broken machine",
                "a delay",
              ],
              answerIndex: 1,
              explanation:
                "A breakthrough = sudden important advance.",
            },
            {
              id: "eb-l16-q2",
              type: "mcq",
              prompt:
                "'Smartphones have become so widespread that many people can't imagine life without them.' — 'widespread' means",
              choices: ["expensive", "common everywhere", "fragile", "new"],
              answerIndex: 1,
              explanation:
                "Widespread = found over a large area / among many people.",
            },
            {
              id: "eb-l16-q3",
              type: "tf",
              prompt:
                "'Cutting-edge' technology means the most advanced available.",
              answer: true,
              explanation:
                "Cutting-edge / state-of-the-art = newest, most advanced.",
            },
            {
              id: "eb-l16-q4",
              type: "mcq",
              prompt:
                "'The app was designed to help users cut down on screen time.' — 'cut down on' means",
              choices: ["increase", "reduce", "delete", "sell"],
              answerIndex: 1,
              explanation:
                "'Cut down on' = reduce the amount of.",
            },
            {
              id: "eb-l16-q5",
              type: "short",
              prompt:
                "Word for: a person who comes up with new inventions. (noun)",
              answer: "inventor",
              keywords: ["inventor"],
              acceptable: ["an inventor"],
              explanation:
                "Invent → invention → inventor.",
            },
            {
              id: "eb-l16-q6",
              type: "short",
              prompt:
                "Complete the collocation: '___-edge technology' (most advanced).",
              answer: "cutting",
              keywords: ["cutting"],
              acceptable: ["cutting edge"],
              explanation:
                "Cutting-edge = state-of-the-art.",
            },
          ],
        },
        {
          id: "eb-l17",
          title: "Reported speech and passive voice",
          questions: [
            {
              id: "eb-l17-q1",
              type: "mcq",
              prompt:
                "Report: 'I am tired,' she said. → She said that she ___ tired.",
              choices: ["is", "was", "were", "be"],
              answerIndex: 1,
              explanation:
                "Reported speech shifts tenses back: am → was.",
            },
            {
              id: "eb-l17-q2",
              type: "mcq",
              prompt:
                "Report: 'We will meet tomorrow,' he said. → He said they ___ meet the next day.",
              choices: ["will", "would", "can", "shall"],
              answerIndex: 1,
              explanation:
                "will → would; tomorrow → the next day.",
            },
            {
              id: "eb-l17-q3",
              type: "tf",
              prompt:
                "'The novel was written by a young refugee' is a passive sentence.",
              answer: true,
              explanation:
                "was + past participle = passive; agent introduced by 'by'.",
            },
            {
              id: "eb-l17-q4",
              type: "mcq",
              prompt:
                "The passive is preferred when",
              choices: [
                "the action's doer is unknown or unimportant",
                "we want a short sentence",
                "speaking to friends",
                "always",
              ],
              answerIndex: 0,
              explanation:
                "'My bike was stolen' — we don't know who stole it.",
            },
            {
              id: "eb-l17-q5",
              type: "short",
              prompt:
                "Report the question 'Where do you live?' → He asked me where ___.",
              answer: "I lived",
              keywords: ["i lived", "lived"],
              acceptable: ["I lived"],
              explanation:
                "Reported questions lose inversion and shift tense back.",
            },
            {
              id: "eb-l17-q6",
              type: "short",
              prompt:
                "Make it passive: 'They built the bridge in 1980.' → The bridge ___.",
              answer: "was built in 1980",
              keywords: ["was built"],
              acceptable: ["was built"],
              explanation:
                "was/were + past participle.",
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
        {
          id: "eb-l18",
          title: "Social organisation: reading a community notice",
          questions: [
            {
              id: "eb-l18-q1",
              type: "mcq",
              prompt:
                "Read: 'Residents are invited to the neighbourhood clean-up on Saturday. Gloves and bags will be provided, but sturdy shoes are recommended.' — Participants should",
              choices: [
                "bring gloves",
                "wear strong shoes",
                "pay a fee",
                "come on Sunday",
              ],
              answerIndex: 1,
              explanation:
                "Gloves/bags provided; shoes are the participant's job.",
            },
            {
              id: "eb-l18-q2",
              type: "mcq",
              prompt:
                "In the notice, 'sturdy' most nearly means",
              choices: ["fashionable", "strong and durable", "old", "light"],
              answerIndex: 1,
              explanation:
                "Context: outdoor work needs tough footwear.",
            },
            {
              id: "eb-l18-q3",
              type: "tf",
              prompt:
                "'The event will go ahead rain or shine' means it will only happen in good weather.",
              answer: false,
              explanation:
                "'Rain or shine' = whatever the weather.",
            },
            {
              id: "eb-l18-q4",
              type: "mcq",
              prompt:
                "'The council has set aside funds for a new playground.' — 'set aside' means",
              choices: [
                "spent",
                "reserved for a purpose",
                "borrowed",
                "wasted",
              ],
              answerIndex: 1,
              explanation:
                "'Set aside' = keep money/time for a specific use.",
            },
            {
              id: "eb-l18-q5",
              type: "short",
              prompt:
                "Word for: an unpaid helper at a community event. (noun)",
              answer: "volunteer",
              keywords: ["volunteer"],
              acceptable: ["a volunteer"],
              explanation:
                "Volunteers offer time without pay — a key theme word.",
            },
            {
              id: "eb-l18-q6",
              type: "short",
              prompt:
                "Complete: 'The neighbourhood watch aims to ___ crime.' (reduce/prevent)",
              answer: "prevent",
              keywords: ["prevent", "reduce", "deter"],
              acceptable: ["reduce", "deter"],
              explanation:
                "Prevent / reduce / deter crime — common collocations.",
            },
          ],
        },
        {
          id: "eb-l19",
          title: "Sharing the planet: environment vocabulary",
          questions: [
            {
              id: "eb-l19-q1",
              type: "mcq",
              prompt:
                "'If we carry on polluting at this rate, the damage will be irreversible.' — 'carry on' means",
              choices: ["stop", "continue", "carry objects", "shout"],
              answerIndex: 1,
              explanation:
                "'Carry on' = continue doing something.",
            },
            {
              id: "eb-l19-q2",
              type: "mcq",
              prompt:
                "'The new law aims to phase out single-use plastics by 2030.' — 'phase out' means",
              choices: [
                "ban immediately",
                "gradually stop using",
                "increase production",
                "recycle",
              ],
              answerIndex: 1,
              explanation:
                "'Phase out' = discontinue gradually over time.",
            },
            {
              id: "eb-l19-q3",
              type: "tf",
              prompt:
                "'Carbon footprint' is the amount of greenhouse gases a person or activity produces.",
              answer: true,
              explanation:
                "A key sustainability term.",
            },
            {
              id: "eb-l19-q4",
              type: "mcq",
              prompt:
                "'Renewable' energy comes from sources that",
              choices: [
                "will run out",
                "are naturally replenished",
                "are cheap",
                "pollute",
              ],
              answerIndex: 1,
              explanation:
                "Solar, wind, hydro replenish naturally.",
            },
            {
              id: "eb-l19-q5",
              type: "short",
              prompt:
                "Word for: the variety of life in an ecosystem. (one word)",
              answer: "biodiversity",
              keywords: ["biodiversity"],
              acceptable: ["bio-diversity"],
              explanation:
                "Bio + diversity — variety of species.",
            },
            {
              id: "eb-l19-q6",
              type: "short",
              prompt:
                "Complete the collocation: 'climate ___' (a long-term global problem).",
              answer: "change",
              keywords: ["change"],
              acceptable: ["change", "crisis"],
              explanation:
                "Climate change — the central environmental collocation.",
            },
          ],
        },
        {
          id: "eb-l20",
          title: "Linking words and cohesion",
          questions: [
            {
              id: "eb-l20-q1",
              type: "mcq",
              prompt:
                "Choose the linker for CONTRAST: '___ the cost, the project went ahead.'",
              choices: ["Because of", "Despite", "Thanks to", "Due to"],
              answerIndex: 1,
              explanation:
                "'Despite' + noun = contrast.",
            },
            {
              id: "eb-l20-q2",
              type: "mcq",
              prompt:
                "Choose the linker for RESULT: 'It rained all week; ___, the match was cancelled.'",
              choices: ["however", "therefore", "although", "meanwhile"],
              answerIndex: 1,
              explanation:
                "'Therefore' introduces a result.",
            },
            {
              id: "eb-l20-q3",
              type: "tf",
              prompt:
                "'Furthermore' and 'moreover' add information; 'however' signals contrast.",
              answer: true,
              explanation:
                "Know your linker functions: addition, contrast, result, sequence.",
            },
            {
              id: "eb-l20-q4",
              type: "mcq",
              prompt:
                "'First of all, … Secondly, … ___' — the correct sequencer is",
              choices: ["nevertheless", "finally", "although", "despite"],
              answerIndex: 1,
              explanation:
                "Sequencers organise a text chronologically.",
            },
            {
              id: "eb-l20-q5",
              type: "short",
              prompt:
                "Linker meaning 'in spite of the fact that' + clause (one word).",
              answer: "although",
              keywords: ["although"],
              acceptable: ["although", "even though"],
              explanation:
                "Although / even though take a clause; despite takes a noun.",
            },
            {
              id: "eb-l20-q6",
              type: "short",
              prompt:
                "Complete: '___ (as a result), many residents lost their homes.'",
              answer: "consequently",
              keywords: ["consequent", "therefore", "as a result", "thus"],
              acceptable: ["therefore", "as a result", "thus"],
              explanation:
                "Any result linker works.",
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
        {
          id: "eb-l21",
          title: "Text types: emails, reports and proposals",
          questions: [
            {
              id: "eb-l21-q1",
              type: "mcq",
              prompt: "A formal email to a teacher should open with",
              choices: [
                "'Hey!'",
                "'Dear Ms Chen,' or 'Dear Sir/Madam,'",
                "'Hi guys,'",
                "'What's up,'",
              ],
              answerIndex: 1,
              explanation:
                "Formal register needs a formal salutation.",
            },
            {
              id: "eb-l21-q2",
              type: "mcq",
              prompt: "A report differs from a review because a report",
              choices: [
                "gives personal opinions",
                "presents factual findings with headings for a specific reader",
                "is always informal",
                "recommends films",
              ],
              answerIndex: 1,
              explanation:
                "Report = organised, factual, headed, audience-specific.",
            },
            {
              id: "eb-l21-q3",
              type: "tf",
              prompt:
                "A proposal suggests a plan of action and argues why it should be adopted.",
              answer: true,
              explanation:
                "Proposals persuade decision-makers — recommendations + justification.",
            },
            {
              id: "eb-l21-q4",
              type: "mcq",
              prompt: "Which closing suits a formal letter?",
              choices: [
                "'See ya!'",
                "'Yours sincerely,' or 'Yours faithfully,'",
                "'Bye for now,'",
                "'Cheers,'",
              ],
              answerIndex: 1,
              explanation:
                "'Sincerely' when you know the name; 'faithfully' for 'Dear Sir/Madam'.",
            },
            {
              id: "eb-l21-q5",
              type: "short",
              prompt:
                "Name ONE feature a report uses that a friendly letter does not.",
              answer: "headings",
              keywords: ["heading", "section", "title", "subhead"],
              acceptable: ["headings", "section titles"],
              explanation:
                "Headings, numbered sections, formal tone.",
            },
            {
              id: "eb-l21-q6",
              type: "short",
              prompt:
                "Formal phrase meaning 'I am writing to complain about…'. Give the first three words.",
              answer: "i am writing",
              keywords: ["i am writing"],
              acceptable: ["I am writing"],
              explanation:
                "Standard formal-letter opener.",
            },
          ],
        },
        {
          id: "eb-l22",
          title: "Formal vs informal register",
          questions: [
            {
              id: "eb-l22-q1",
              type: "mcq",
              prompt: "Which is informal?",
              choices: [
                "'I would appreciate your assistance.'",
                "'Could you give me a hand?'",
                "'I am writing to enquire…'",
                "'I regret to inform you…'",
              ],
              answerIndex: 1,
              explanation:
                "'Give me a hand' is colloquial — fine for friends, not formal letters.",
            },
            {
              id: "eb-l22-q2",
              type: "mcq",
              prompt: "Contracted forms ('can't', 'won't') are appropriate in",
              choices: [
                "formal reports",
                "informal emails to friends",
                "official complaints",
                "proposals",
              ],
              answerIndex: 1,
              explanation:
                "Contractions mark informal register.",
            },
            {
              id: "eb-l22-q3",
              type: "tf",
              prompt:
                "Phrasal verbs often mark informal register; single formal verbs ('request' vs 'ask for') suit formal texts.",
              answer: true,
              explanation:
                "'Ask for' → 'request'; 'look into' → 'investigate'.",
            },
            {
              id: "eb-l22-q4",
              type: "mcq",
              prompt: "Choose the formal equivalent of 'Thanks a lot for your help.'",
              choices: [
                "'Cheers mate!'",
                "'Thank you very much for your assistance.'",
                "'Thanks!!'",
                "'Ta!'",
              ],
              answerIndex: 1,
              explanation:
                "Full sentences, polite vocabulary, no slang.",
            },
            {
              id: "eb-l22-q5",
              type: "short",
              prompt:
                "Informal phrase for 'I am writing to inform you'. (three words)",
              answer: "just letting you know",
              keywords: ["just", "letting", "know"],
              acceptable: ["just to let you know"],
              explanation:
                "'Just a quick note to let you know' = informal equivalent.",
            },
            {
              id: "eb-l22-q6",
              type: "short",
              prompt:
                "Formal verb replacing 'find out'. (one word)",
              answer: "discover",
              keywords: ["discover", "ascertain", "learn"],
              acceptable: ["discover", "ascertain"],
              explanation:
                "Discover/ascertain are the formal equivalents.",
            },
          ],
        },
        {
          id: "eb-l23",
          title: "Listening and reading exam strategies",
          questions: [
            {
              id: "eb-l23-q1",
              type: "mcq",
              prompt: "Before a listening text plays, you should",
              choices: [
                "close your eyes",
                "read the questions and predict what to listen for",
                "write your answers",
                "skip the task",
              ],
              answerIndex: 1,
              explanation:
                "Predicting content focuses your listening.",
            },
            {
              id: "eb-l23-q2",
              type: "mcq",
              prompt: "When you miss an answer while listening, the best move is",
              choices: [
                "panic and replay mentally",
                "keep listening — dwelling loses the next answer",
                "stop",
                "guess randomly now",
              ],
              answerIndex: 1,
              explanation:
                "Move on; the recording continues.",
            },
            {
              id: "eb-l23-q3",
              type: "tf",
              prompt:
                "In Paper 2 reading, the questions usually follow the order of the text.",
              answer: true,
              explanation:
                "Comprehension questions are typically sequential — a useful anchor.",
            },
            {
              id: "eb-l23-q4",
              type: "mcq",
              prompt: "Skimming a text means reading",
              choices: [
                "every word",
                "quickly for the gist",
                "only the title",
                "backwards",
              ],
              answerIndex: 1,
              explanation:
                "Skim for gist, scan for specific detail.",
            },
            {
              id: "eb-l23-q5",
              type: "short",
              prompt:
                "Reading technique: searching a text for a specific fact or name. (one word)",
              answer: "scanning",
              keywords: ["scan"],
              acceptable: ["scanning"],
              explanation:
                "Scanning = locating specific information fast.",
            },
            {
              id: "eb-l23-q6",
              type: "short",
              prompt:
                "How many pieces of writing does English B Paper 1 require? (number)",
              answer: "1",
              keywords: ["1"],
              acceptable: ["one"],
              explanation:
                "One text from a choice of three tasks (450–600 words HL / 250–400 SL).",
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
        {
          id: "eb-l24",
          title: "HL literary extract: analysing a short story",
          level: "HL",
          questions: [
            {
              id: "eb-l24-q1",
              type: "mcq",
              prompt:
                "HL Paper 2 includes a literary extract. When analysing it, focus on",
              choices: [
                "summarising the plot",
                "how language creates character, mood and theme",
                "the author's biography",
                "translating it",
              ],
              answerIndex: 1,
              explanation:
                "HL rewards analysis of authorial technique, not comprehension alone.",
            },
            {
              id: "eb-l24-q2",
              type: "mcq",
              prompt:
                "Read: 'The room held its breath; even the clock seemed to tick more softly.' — The effect is created mainly by",
              choices: [
                "personification",
                "rhyme",
                "statistics",
                "a question",
              ],
              answerIndex: 0,
              explanation:
                "The room and clock are given human qualities — atmosphere through personification.",
            },
            {
              id: "eb-l24-q3",
              type: "tf",
              prompt:
                "A first-person narrator gives access to thoughts and feelings but may be unreliable.",
              answer: true,
              explanation:
                "Narrative perspective shapes how we read events.",
            },
            {
              id: "eb-l24-q4",
              type: "mcq",
              prompt: "The 'tone' of an extract refers to",
              choices: [
                "the volume",
                "the writer's attitude conveyed through word choice",
                "the font",
                "the setting",
              ],
              answerIndex: 1,
              explanation:
                "Tone = attitude (ironic, nostalgic, critical…) expressed by diction.",
            },
            {
              id: "eb-l24-q5",
              type: "short",
              prompt:
                "Name the literary device: 'He was a rock in the storm.' (one word)",
              answer: "metaphor",
              keywords: ["metaphor"],
              acceptable: ["a metaphor"],
              explanation:
                "Direct comparison without 'like'/'as' = metaphor.",
            },
            {
              id: "eb-l24-q6",
              type: "short",
              prompt:
                "The person telling the story in a literary text is called the ___.",
              answer: "narrator",
              keywords: ["narrator"],
              acceptable: ["narrator"],
              explanation:
                "Narrator ≠ author — a key HL distinction.",
            },
          ],
        },
        {
          id: "eb-l25",
          title: "HL writing: reviews, articles and the Paper 1 task",
          level: "HL",
          questions: [
            {
              id: "eb-l25-q1",
              type: "mcq",
              prompt: "HL Paper 1 requires a text of",
              choices: [
                "100–150 words",
                "450–600 words",
                "50 words",
                "2000 words",
              ],
              answerIndex: 1,
              explanation:
                "HL: 450–600 words, one of three tasks; SL: 250–400.",
            },
            {
              id: "eb-l25-q2",
              type: "mcq",
              prompt: "A review should include",
              choices: [
                "only a plot summary",
                "a brief description, evaluation and a recommendation",
                "no opinion",
                "only criticism",
              ],
              answerIndex: 1,
              explanation:
                "Describe → evaluate → recommend: the review's spine.",
            },
            {
              id: "eb-l25-q3",
              type: "tf",
              prompt:
                "An article for a school magazine can use an engaging, semi-formal tone.",
              answer: true,
              explanation:
                "Register follows audience — magazine articles sit between formal and informal.",
            },
            {
              id: "eb-l25-q4",
              type: "mcq",
              prompt: "Choosing the right text type in Paper 1 depends on",
              choices: [
                "the longest option",
                "the audience and purpose stated in the task",
                "your mood",
                "word count only",
              ],
              answerIndex: 1,
              explanation:
                "The task defines context/audience/purpose — pick the text type that matches.",
            },
            {
              id: "eb-l25-q5",
              type: "short",
              prompt:
                "Name ONE evaluative adjective useful in a review (positive).",
              answer: "compelling",
              keywords: ["compelling", "gripping", "moving", "impressive", "enjoyable"],
              acceptable: ["gripping", "impressive", "enjoyable"],
              explanation:
                "Compelling, gripping, moving, impressive…",
            },
            {
              id: "eb-l25-q6",
              type: "short",
              prompt:
                "Criterion for Paper 1: the quality of language and how well the text suits its ___. (one word)",
              answer: "purpose",
              keywords: ["purpose"],
              acceptable: ["purpose", "audience"],
              explanation:
                "Conceptual understanding: does the text achieve its purpose for its audience?",
            },
          ],
        },
      ],
    },
  ],
};
