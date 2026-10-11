import type { Subject } from "../types";

export const history: Subject = {
  slug: "history",
  name: "History",
  short: "History",
  color: "#B45309",
  emoji: "📜",
  group: "Individuals and societies",
  levels: ["SL", "HL"],
  description:
    "Rights and protest, the move to global war, authoritarian states, 20th-century wars and the Cold War — plus source and essay skills.",
  resources: [
    {
      name: "IB Official",
      url: "https://www.ibo.org/programmes/diploma-programme/curriculum/individuals-and-societies/",
      note: "Subject brief and syllabus outline",
    },
    {
      name: "InThinking",
      url: "https://www.thinkib.net/history",
      note: "Teacher-written lessons, source practice and essay guidance",
    },
    {
      name: "RevisionDojo",
      url: "https://www.revisiondojo.com/",
      note: "Topic questions with worked solutions",
    },
    {
      name: "Clastify",
      url: "https://www.clastify.com/",
      note: "Past papers and exemplar essays",
    },
  ],
  units: [
    {
      id: "hi-u1",
      code: "Prescribed subjects",
      title: "Rights, protest and the move to global war",
      lessons: [
        {
          id: "hi-l1",
          title: "Rights and protest",
          questions: [
            {
              id: "hi-l1-q1",
              type: "mcq",
              prompt:
                "The US Civil Rights Act of 1964 primarily outlawed",
              choices: [
                "segregation in public places and employment discrimination",
                "slavery",
                "the poll tax",
                "interracial marriage bans",
              ],
              answerIndex: 0,
              explanation:
                "Jim Crow segregation and discrimination were banned; the 1965 Voting Rights Act followed.",
            },
            {
              id: "hi-l1-q2",
              type: "mcq",
              prompt:
                "The Montgomery Bus Boycott (1955–56) demonstrated the effectiveness of",
              choices: [
                "armed resistance",
                "non-violent mass economic protest",
                "legal petition only",
                "foreign intervention",
              ],
              answerIndex: 1,
              explanation:
                "Sustained non-violent boycott of segregated buses, ending with desegregation — a model for later campaigns.",
            },
            {
              id: "hi-l1-q3",
              type: "mcq",
              prompt:
                "In apartheid South Africa, the ANC's Sharpeville massacre (1960) led to",
              choices: [
                "immediate negotiations",
                "the banning of the ANC and the turn to armed struggle",
                "the end of apartheid",
                "international invasion",
              ],
              answerIndex: 1,
              explanation:
                "69 protesters killed → ANC/PAC banned → MK formed; protest shifted from passive to armed resistance.",
            },
            {
              id: "hi-l1-q4",
              type: "tf",
              prompt:
                "Nelson Mandela was released from prison in 1994, the same year apartheid formally ended.",
              answer: false,
              explanation:
                "Mandela was released in 1990; apartheid's legal structures ended with the 1994 democratic election.",
            },
            {
              id: "hi-l1-q5",
              type: "short",
              prompt:
                "Explain the significance of Martin Luther King Jr.'s philosophy of non-violence for the civil rights movement.",
              answer:
                "It maintained moral legitimacy, won public sympathy and made violent suppression look unjustifiable.",
              keywords: ["moral", "sympathy", "legitim", "non-viol", "public"],
              explanation:
                "Non-violence exposed brutality against peaceful protesters, shifting national opinion (e.g. Birmingham 1963).",
            },
            {
              id: "hi-l1-q6",
              type: "short",
              prompt:
                "Name two methods the apartheid state used to suppress opposition after 1960.",
              answer:
                "Banning organisations, imprisonment (Rivonia Trial), states of emergency and security police violence.",
              keywords: ["ban", "prison", "emergency", "police", "detention"],
              explanation:
                "Bannings, detention without trial, states of emergency, and the Security Branch.",
            },
          ],
        },
        {
          id: "hi-l2",
          title: "The move to global war",
          questions: [
            {
              id: "hi-l2-q1",
              type: "mcq",
              prompt:
                "Japanese expansion in the 1930s began with the invasion of",
              choices: ["China proper", "Manchuria (1931)", "Pearl Harbor", "Indochina"],
              answerIndex: 1,
              explanation:
                "The Mukden Incident pretext led to Manchuria's occupation and the puppet state Manchukuo.",
            },
            {
              id: "hi-l2-q2",
              type: "mcq",
              prompt:
                "Appeasement is best defined as",
              choices: [
                "collective security enforcement",
                "conceding to aggressor demands to avoid war",
                "rearmament",
                "alliance-building",
              ],
              answerIndex: 1,
              explanation:
                "Britain/France conceded (e.g. Munich 1938) hoping to satisfy Hitler and buy time.",
            },
            {
              id: "hi-l2-q3",
              type: "mcq",
              prompt:
                "The Nazi–Soviet Pact (1939) mattered because it",
              choices: [
                "ended the war in Europe",
                "removed the eastern front threat and secretly divided Poland",
                "was a defensive alliance only",
                "guaranteed peace",
              ],
              answerIndex: 1,
              explanation:
                "Secret protocols partitioned Eastern Europe; Germany could attack Poland without a two-front war.",
            },
            {
              id: "hi-l2-q4",
              type: "tf",
              prompt:
                "The League of Nations successfully stopped Italian aggression in Abyssinia (Ethiopia).",
              answer: false,
              explanation:
                "Sanctions excluded oil and failed; the League's credibility collapsed.",
            },
            {
              id: "hi-l2-q5",
              type: "short",
              prompt:
                "Explain how the Great Depression contributed to the outbreak of war in the 1930s.",
              answer:
                "Economic collapse fuelled nationalism and expansionism in Japan, Germany and Italy as states sought resources and scapegoats.",
              keywords: ["national", "expansion", "resource", "economic"],
              explanation:
                "Depression → protectionism, militarism and aggressive foreign policy to secure markets/resources.",
            },
            {
              id: "hi-l2-q6",
              type: "short",
              prompt:
                "Give two reasons Britain and France did not resist the remilitarisation of the Rhineland (1936).",
              answer:
                "Fear of another war and sympathy with revision of Versailles' harsher terms.",
              keywords: ["war", "versailles", "fear", "sympathy"],
              explanation:
                "War-weariness, belief Versailles was too harsh, and distraction with Abyssinia all played a part.",
            },
          ],
        },
      ],
    },
    {
      id: "hi-u2",
      code: "World history topics",
      title: "Authoritarian states and 20th-century wars",
      lessons: [
        {
          id: "hi-l3",
          title: "Authoritarian states: Hitler, Mao, Castro",
          questions: [
            {
              id: "hi-l3-q1",
              type: "mcq",
              prompt:
                "Hitler consolidated power legally through the",
              choices: [
                "Beer Hall Putsch",
                "Enabling Act of 1933",
                "Nuremberg Laws",
                "Munich Agreement",
              ],
              answerIndex: 1,
              explanation:
                "The Enabling Act let him rule by decree — legal basis for the dictatorship.",
            },
            {
              id: "hi-l3-q2",
              type: "mcq",
              prompt:
                "Mao's Great Leap Forward (1958–62) resulted in",
              choices: [
                "rapid industrialisation success",
                "economic disaster and famine killing tens of millions",
                "democratisation",
                "a war with the USSR",
              ],
              answerIndex: 1,
              explanation:
                "Collectivisation + backyard furnaces + false reporting → catastrophic famine.",
            },
            {
              id: "hi-l3-q3",
              type: "mcq",
              prompt:
                "A common method authoritarian regimes use to maintain power is",
              choices: [
                "free elections",
                "control of media and use of terror/purges",
                "an independent judiciary",
                "decentralised power",
              ],
              answerIndex: 1,
              explanation:
                "Propaganda, censorship, secret police and purges — common to Hitler, Mao and Castro.",
            },
            {
              id: "hi-l3-q4",
              type: "tf",
              prompt:
                "Castro's revolution in Cuba (1959) was initially a communist revolution with Soviet backing from day one.",
              answer: false,
              explanation:
                "It began as a nationalist revolution; alignment with the USSR came later, especially after US hostility.",
            },
            {
              id: "hi-l3-q5",
              type: "short",
              prompt:
                "Compare how Hitler and Mao used propaganda to build a cult of personality.",
              answer:
                "Both used mass media, rallies and education to present themselves as infallible leaders embodying the nation.",
              keywords: ["media", "cult", "leader", "image", "education"],
              explanation:
                "Hitler: Goebbels' propaganda machine; Mao: the Little Red Book and personality cult during the Cultural Revolution.",
            },
            {
              id: "hi-l3-q6",
              type: "short",
              prompt:
                "Give two conditions that allowed authoritarian leaders to gain power in the 20th century.",
              answer:
                "Economic crisis and weak democratic institutions plus nationalist resentment.",
              keywords: ["economic", "weak", "democr", "national", "crisis"],
              explanation:
                "Depression, post-war instability, weak coalitions, humiliation (Versailles, colonialism) opened the door.",
            },
          ],
        },
        {
          id: "hi-l4",
          title: "Causes and effects of 20th-century wars",
          questions: [
            {
              id: "hi-l4-q1",
              type: "mcq",
              prompt:
                "Long-term causes of World War I are often summarised as",
              choices: [
                "only the assassination of Franz Ferdinand",
                "militarism, alliances, imperialism and nationalism",
                "the Treaty of Versailles",
                "the League of Nations",
              ],
              answerIndex: 1,
              explanation:
                "MAIN causes created the tinderbox; the assassination was the trigger.",
            },
            {
              id: "hi-l4-q2",
              type: "mcq",
              prompt:
                "A 'total war' differs from limited war because it",
              choices: [
                "uses fewer weapons",
                "mobilises entire economies and blurs the civilian–military line",
                "has fewer casualties",
                "avoids propaganda",
              ],
              answerIndex: 1,
              explanation:
                "WWII saw conscription, rationing, strategic bombing and occupation of home fronts.",
            },
            {
              id: "hi-l4-q3",
              type: "mcq",
              prompt:
                "The Treaty of Versailles' 'war guilt clause' (Article 231)",
              choices: [
                "freed Germany of blame",
                "assigned sole responsibility to Germany, justifying reparations",
                "created the UN",
                "divided Germany in two",
              ],
              answerIndex: 1,
              explanation:
                "Article 231 underpinned reparations and fuelled German revisionist grievance.",
            },
            {
              id: "hi-l4-q4",
              type: "tf",
              prompt:
                "The Spanish Civil War is often seen as a rehearsal for World War II because foreign powers tested weapons and tactics there.",
              answer: true,
              explanation:
                "Germany (Condor Legion), Italy and the USSR intervened; Guernica showed aerial bombing's power.",
            },
            {
              id: "hi-l4-q5",
              type: "short",
              prompt:
                "Give two social effects of World War II on civilian populations.",
              answer:
                "Mass displacement/refugees and changed roles for women in the workforce.",
              keywords: ["refugee", "women", "displace", "work"],
              explanation:
                "Any two: refugees, women's wartime labour, rationing, bombing deaths, the Holocaust.",
            },
            {
              id: "hi-l4-q6",
              type: "short",
              prompt:
                "Explain how the outcome of WWI contributed to the causes of WWII.",
              answer:
                "Versailles' harsh terms bred revisionism and economic instability that extremists exploited.",
              keywords: ["versailles", "resent", "revision", "reparation", "grievance"],
              explanation:
                "Unresolved grievances — territory, reparations, war guilt — gave Hitler his platform.",
            },
          ],
        },
      ],
    },
    {
      id: "hi-u3",
      code: "World history topics",
      title: "The Cold War",
      lessons: [
        {
          id: "hi-l5",
          title: "Origins and superpower rivalry",
          questions: [
            {
              id: "hi-l5-q1",
              type: "mcq",
              prompt:
                "The Truman Doctrine (1947) committed the USA to",
              choices: [
                "isolationism",
                "containing communism wherever it threatened",
                "nuclear disarmament",
                "invading the USSR",
              ],
              answerIndex: 1,
              explanation:
                "Containment: support free peoples resisting subjugation — first applied to Greece and Turkey.",
            },
            {
              id: "hi-l5-q2",
              type: "mcq",
              prompt:
                "The Marshall Plan's purpose was to",
              choices: [
                "rebuild Western Europe economically to resist communism",
                "arm West Germany",
                "create the UN",
                "punish Britain",
              ],
              answerIndex: 0,
              explanation:
                "US aid (~$13bn) revived economies and undercut communist appeal; the USSR saw it as dollar imperialism.",
            },
            {
              id: "hi-l5-q3",
              type: "mcq",
              prompt:
                "The Berlin Blockade (1948–49) ended when",
              choices: [
                "the USSR invaded West Berlin",
                "the Berlin Airlift supplied the city and Stalin lifted the blockade",
                "the wall was built",
                "NATO attacked",
              ],
              answerIndex: 1,
              explanation:
                "Western airlift fed 2 million Berliners for ~11 months; Stalin backed down.",
            },
            {
              id: "hi-l5-q4",
              type: "tf",
              prompt:
                "The USSR formed the Warsaw Pact (1955) before NATO was created.",
              answer: false,
              explanation:
                "NATO formed in 1949; the Warsaw Pact was the Soviet response six years later.",
            },
            {
              id: "hi-l5-q5",
              type: "short",
              prompt:
                "Explain the significance of the 'iron curtain' metaphor for Cold War origins.",
              answer:
                "Churchill's 1946 speech publicly framed Europe as divided between Soviet-controlled East and democratic West, hardening perceptions.",
              keywords: ["divid", "churchill", "soviet", "west", "split"],
              explanation:
                "The Fulton speech crystallised the emerging division and justified containment thinking.",
            },
            {
              id: "hi-l5-q6",
              type: "short",
              prompt:
                "Give one orthodox and one revisionist interpretation of who caused the Cold War.",
              answer:
                "Orthodox: Soviet expansionism was to blame; revisionist: US economic imperialism/provocation drove it.",
              keywords: ["soviet", "expansion", "us", "revision"],
              explanation:
                "Traditionalists blamed Stalin; revisionists emphasised US actions (atomic diplomacy, Marshall Plan).",
            },
          ],
        },
        {
          id: "hi-l6",
          title: "Crises and the end of the Cold War",
          questions: [
            {
              id: "hi-l6-q1",
              type: "mcq",
              prompt:
                "The Cuban Missile Crisis (1962) was resolved by",
              choices: [
                "a US invasion",
                "Khrushchev withdrawing missiles in exchange for a public no-invasion pledge (and secret removal of Jupiter missiles)",
                "UN troops",
                "a naval battle",
              ],
              answerIndex: 1,
              explanation:
                "Secret deal: Soviet missiles out of Cuba; US Jupiter missiles out of Turkey; public non-invasion promise.",
            },
            {
              id: "hi-l6-q2",
              type: "mcq",
              prompt:
                "The Berlin Wall (built 1961) primarily aimed to",
              choices: [
                "defend against NATO invasion",
                "stop the flow of skilled East Germans to the West",
                "separate France and Germany",
                "start negotiations",
              ],
              answerIndex: 1,
              explanation:
                "Brain drain of ~3 million by 1961 threatened the GDR's viability.",
            },
            {
              id: "hi-l6-q3",
              type: "mcq",
              prompt:
                "Gorbachev's policies of glasnost and perestroika were",
              choices: [
                "crackdowns on dissent",
                "openness and restructuring that unintentionally undermined Soviet control",
                "military expansions",
                "economic isolation",
              ],
              answerIndex: 1,
              explanation:
                "Reform unleashed criticism and nationalism; Soviet satellites broke away in 1989, USSR dissolved 1991.",
            },
            {
              id: "hi-l6-q4",
              type: "tf",
              prompt:
                "Détente in the 1970s included arms-control agreements like SALT I and the Helsinki Accords.",
              answer: true,
              explanation:
                "Détente eased tensions via arms limits, trade and human-rights dialogue before the Afghanistan invasion ended it.",
            },
            {
              id: "hi-l6-q5",
              type: "short",
              prompt:
                "Explain why the Soviet–Afghan war (1979–89) contributed to the USSR's collapse.",
              answer:
                "It drained the economy and demoralised the army, undermining Soviet prestige and resources.",
              keywords: ["econom", "drain", "prestige", "army", "cost"],
              explanation:
                "A costly quagmire that exposed weakness — the 'Soviet Vietnam'.",
            },
            {
              id: "hi-l6-q6",
              type: "short",
              prompt:
                "Give two reasons for the end of the Cold War.",
              answer:
                "Soviet economic decline and Gorbachev's reforms/Eastern European revolutions of 1989.",
              keywords: ["gorbachev", "econom", "revolution", "reform", "1989"],
              explanation:
                "Economic stagnation, reform spirals, 1989 revolutions, arms-race costs — any two.",
            },
          ],
        },
      ],
    },
    {
      id: "hi-u4",
      code: "Assessment skills",
      title: "Source evaluation, essays and the IA",
      lessons: [
        {
          id: "hi-l7",
          title: "Paper 1: OPCVL source evaluation",
          questions: [
            {
              id: "hi-l7-q1",
              type: "mcq",
              prompt:
                "In OPCVL, 'origin' refers to",
              choices: [
                "what the source says",
                "who created it, when, where and what type it is",
                "its limitations",
                "its argument",
              ],
              answerIndex: 1,
              explanation:
                "Author, date, place, type, and sometimes audience — the source's provenance.",
            },
            {
              id: "hi-l7-q2",
              type: "mcq",
              prompt:
                "The best way to evaluate a source's 'purpose' is to consider",
              choices: [
                "its length",
                "what the creator intended to achieve and its effect on the audience",
                "its factual accuracy only",
                "its publication cost",
              ],
              answerIndex: 1,
              explanation:
                "Purpose = intent (persuade, inform, record, justify) and expected effect.",
            },
            {
              id: "hi-l7-q3",
              type: "mcq",
              prompt:
                "A diary written during an event is valuable because it",
              choices: [
                "is always unbiased",
                "is a contemporary account capturing immediate perspective",
                "covers the whole war",
                "was published widely",
              ],
              answerIndex: 1,
              explanation:
                "Contemporaneity gives value — but its limitation is a narrow, subjective viewpoint.",
            },
            {
              id: "hi-l7-q4",
              type: "tf",
              prompt:
                "A limitation of a memoir written decades later is memory distortion and hindsight bias.",
              answer: true,
              explanation:
                "Later reflection reshapes recall — a classic Paper 1 limitation point.",
            },
            {
              id: "hi-l7-q5",
              type: "short",
              prompt:
                "Using OPCVL, explain one value of a government propaganda poster as a historical source.",
              answer:
                "It reveals the regime's aims, methods of persuasion and the values it wanted to instill.",
              keywords: ["propaganda", "aim", "persuad", "regime", "intend"],
              explanation:
                "Value: shows official messaging and emotional appeals even if factually unreliable.",
            },
            {
              id: "hi-l7-q6",
              type: "short",
              prompt:
                "Structure a two-sentence OPCVL evaluation of a 1963 newspaper photograph of a civil rights march.",
              answer:
                "Origin: contemporary press photo → value: immediate visual evidence of the protest and policing. Limitation: framed by editorial choice and shows one moment, not context.",
              keywords: ["origin", "value", "limitation", "photograph", "contemporary"],
              explanation:
                "Link origin (1963 newspaper) to value (contemporary record) and a real limitation (selective framing).",
            },
          ],
        },
        {
          id: "hi-l8",
          title: "Paper 2 essay technique and the IA",
          questions: [
            {
              id: "hi-l8-q1",
              type: "mcq",
              prompt:
                "A strong Paper 2 essay thesis should",
              choices: [
                "narrate events",
                "directly answer the question with an arguable line of argument",
                "list sources",
                "avoid a position",
              ],
              answerIndex: 1,
              explanation:
                "Command the question: a clear, contestable argument sustained throughout.",
            },
            {
              id: "hi-l8-q2",
              type: "mcq",
              prompt:
                "Question command terms like 'evaluate' or 'to what extent' require",
              choices: [
                "description only",
                "a balanced judgement weighing evidence for and against",
                "a narrative",
                "memorised lists",
              ],
              answerIndex: 1,
              explanation:
                "These terms demand a reasoned judgement with counter-arguments addressed.",
            },
            {
              id: "hi-l8-q3",
              type: "mcq",
              prompt:
                "The Internal Assessment (IA) requires students to",
              choices: [
                "write from memory only",
                "investigate a question of their choice using sources, including an evaluation section",
                "copy a textbook",
                "debate orally",
              ],
              answerIndex: 1,
              explanation:
                "IA = personal investigation: Section 1 source evaluation, Section 2 investigation, Section 3 reflection.",
            },
            {
              id: "hi-l8-q4",
              type: "tf",
              prompt:
                "Paper 2 essays must discuss two examples from different regions where the question demands it.",
              answer: true,
              explanation:
                "Some questions require comparative cases from different regions for full marks.",
            },
            {
              id: "hi-l8-q5",
              type: "short",
              prompt:
                "Write a one-sentence thesis answering: 'To what extent was appeasement a cause of WWII?'",
              answer:
                "e.g. 'Appeasement was a significant but not sole cause: it encouraged Hitler while buying time, yet Versailles grievances and economic collapse made war likely regardless.'",
              keywords: ["appeasement", "hitler", "but", "extent", "cause"],
              explanation:
                "A good thesis takes a position and acknowledges the counterweight.",
            },
            {
              id: "hi-l8-q6",
              type: "short",
              prompt:
                "Name the three sections of the History IA.",
              answer:
                "Identification and evaluation of sources, investigation, and reflection.",
              keywords: ["source", "investigat", "reflect"],
              explanation:
                "Section 1: two sources evaluated (OPCVL); Section 2: the investigation; Section 3: reflection on methods.",
            },
          ],
        },
      ],
    },
    {
      id: "hi-u5",
      code: "HL extension",
      title: "HL Paper 3 and historiography",
      level: "HL",
      lessons: [
        {
          id: "hi-l9",
          title: "Paper 3: regional depth study",
          level: "HL",
          questions: [
            {
              id: "hi-l9-q1",
              type: "mcq",
              prompt:
                "HL Paper 3 differs from Paper 2 because it",
              choices: [
                "has no essays",
                "requires three essays on a regional depth option with greater detail",
                "uses only sources",
                "is shorter",
              ],
              answerIndex: 1,
              explanation:
                "HL students write three essays in 2.5 hours on their chosen regional option.",
            },
            {
              id: "hi-l9-q2",
              type: "mcq",
              prompt:
                "Regional options for Paper 3 include",
              choices: [
                "only Europe",
                "e.g. History of the Americas, of Europe, of Asia and Oceania, or of Africa and the Middle East",
                "ancient history",
                "art history",
              ],
              answerIndex: 1,
              explanation:
                "Four regional options; schools pick one — depth across a broad survey period.",
            },
            {
              id: "hi-l9-q3",
              type: "mcq",
              prompt:
                "Top-band Paper 3 answers require",
              choices: [
                "chronological storytelling",
                "detailed, precise knowledge applied to an argument with evaluation",
                "no examples",
                "short paragraphs",
              ],
              answerIndex: 1,
              explanation:
                "Depth papers reward specific evidence, analysis and judgement, not coverage.",
            },
            {
              id: "hi-l9-q4",
              type: "tf",
              prompt:
                "Paper 3 questions may span a longer time period and require synthesis across it.",
              answer: true,
              explanation:
                "Synoptic questions demand connecting themes over the full option period.",
            },
            {
              id: "hi-l9-q5",
              type: "short",
              prompt:
                "Give two strategies for managing three essays in 2.5 hours.",
              answer:
                "Timed planning (equal allocation) and pre-prepared thematic argument structures.",
              keywords: ["time", "plan", "equal", "practice"],
              explanation:
                "Roughly 45–50 min per essay, quick plans, and banked case studies prevent rambling.",
            },
            {
              id: "hi-l9-q6",
              type: "short",
              prompt:
                "Explain why 'depth' essays still benefit from historiographical awareness.",
              answer:
                "Referencing interpretations shows evaluation and distinguishes analysis from narrative.",
              keywords: ["interpret", "historiograph", "evaluat", "analysis"],
              explanation:
                "Mentioning a historian's view or school of thought signals higher-order thinking.",
            },
          ],
        },
        {
          id: "hi-l10",
          title: "Historiography and interpretations",
          level: "HL",
          questions: [
            {
              id: "hi-l10-q1",
              type: "mcq",
              prompt:
                "Historiography is the study of",
              choices: [
                "ancient maps",
                "how historical writing and interpretations have changed over time",
                "primary sources only",
                "dates",
              ],
              answerIndex: 1,
              explanation:
                "The history of history — debates between schools and how interpretations evolve.",
            },
            {
              id: "hi-l10-q2",
              type: "mcq",
              prompt:
                "A revisionist historian of the Cold War would most likely argue that",
              choices: [
                "Stalin alone caused it",
                "US policy (e.g. economic expansion, atomic diplomacy) bore major responsibility",
                "nobody caused it",
                "the USSR was peaceful",
              ],
              answerIndex: 1,
              explanation:
                "Revisionists (e.g. Williams, Kolko) shifted blame toward US actions/interests.",
            },
            {
              id: "hi-l10-q3",
              type: "mcq",
              prompt:
                "Post-revisionist (post-1991) Cold War interpretations tend to",
              choices: [
                "blame only the USA",
                "blend orthodox and revisionist views using newly opened Soviet archives",
                "reject all evidence",
                "focus on Europe only",
              ],
              answerIndex: 1,
              explanation:
                "Historians like Gaddis used archival material to produce more balanced judgements.",
            },
            {
              id: "hi-l10-q4",
              type: "tf",
              prompt:
                "Intentionalist historians explain Nazi policy mainly through Hitler's ideology and personal role.",
              answer: true,
              explanation:
                "Intentionalists stress Hitler's programme; structuralists stress impersonal forces and cumulative radicalisation.",
            },
            {
              id: "hi-l10-q5",
              type: "short",
              prompt:
                "Contrast intentionalist and structuralist explanations of the Holocaust.",
              answer:
                "Intentionalists see a long-planned programme driven by Hitler; structuralists see improvised radicalisation within the regime.",
              keywords: ["hitler", "plan", "structur", "radicali"],
              explanation:
                "The classic Hitler-centric vs functionalist-polycratic debate.",
            },
            {
              id: "hi-l10-q6",
              type: "short",
              prompt:
                "Why might a historian's nationality or era affect their interpretation of the Cold War?",
              answer:
                "Their political context and available evidence shape which causes they emphasise.",
              keywords: ["context", "evidence", "politic", "perspective", "era"],
              explanation:
                "A 1950s American, a Soviet scholar, and a post-1991 historian work from different assumptions and archives.",
            },
          ],
        },
        {
          id: "hi-l11",
          title: "Extended response practice",
          level: "HL",
          questions: [
            {
              id: "hi-l11-q1",
              type: "mcq",
              prompt:
                "When a question asks about 'turning points', the strongest approach is",
              choices: [
                "describe every event",
                "define criteria for a turning point then test candidates against them",
                "list dates",
                "argue there were none",
              ],
              answerIndex: 1,
              explanation:
                "Concept questions need explicit criteria (extent of change) applied to examples.",
            },
            {
              id: "hi-l11-q2",
              type: "mcq",
              prompt:
                "'Compare and contrast' questions require",
              choices: [
                "two separate narratives",
                "integrated analysis of similarities and differences in each paragraph",
                "only differences",
                "a table",
              ],
              answerIndex: 1,
              explanation:
                "Weave comparison through each point rather than writing two half-essays.",
            },
            {
              id: "hi-l11-q3",
              type: "mcq",
              prompt:
                "The best way to incorporate historiography into an essay is",
              choices: [
                "quote historians randomly",
                "use a school of interpretation to support a point, then evaluate it",
                "avoid naming historians",
                "footnote everything",
              ],
              answerIndex: 1,
              explanation:
                "Interpretations should serve your argument — cited, then weighed.",
            },
            {
              id: "hi-l11-q4",
              type: "tf",
              prompt:
                "In 'discuss two factors' questions, the stronger factor should be argued explicitly with justification.",
              answer: true,
              explanation:
                "Judgement means ranking significance with reasons, not just covering both.",
            },
            {
              id: "hi-l11-q5",
              type: "short",
              prompt:
                "Plan a 4-point essay: 'To what extent was economic weakness the main cause of the USSR's collapse?'",
              answer:
                "Economics central vs alternatives: nationalist movements, Gorbachev's reforms, Eastern Europe's 1989 revolutions, arms-race cost — weigh each.",
              keywords: ["economic", "national", "gorbachev", "reform", "weigh"],
              explanation:
                "Multi-causal argument: state thesis, assess economics vs political/national factors.",
            },
            {
              id: "hi-l11-q6",
              type: "short",
              prompt:
                "State one reason precise dates and statistics strengthen a Paper 3 essay, and one risk of over-relying on them.",
              answer:
                "Precision evidences depth; but facts without analysis become narrative.",
              keywords: ["evidence", "depth", "analysis", "narrative"],
              explanation:
                "Specific detail earns marks for knowledge — only when it serves an argument.",
            },
          ],
        },
      ],
    },
  ],
};
