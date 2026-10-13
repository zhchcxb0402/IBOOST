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
  syllabusUrl: "https://www.ibo.org/programmes/diploma-programme/curriculum/individuals-and-societies/",
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
        {
          id: "hi-l12",
          title: "Civil rights: Montgomery and Little Rock",
          questions: [
            {
              id: "hi-l12-q1",
              type: "mcq",
              prompt: "The Montgomery Bus Boycott (1955–56) was sparked by",
              choices: [
                "a Supreme Court ruling",
                "Rosa Parks' arrest for refusing to give up her seat",
                "a march on Washington",
                "a bus crash",
              ],
              answerIndex: 1,
              explanation:
                "Her arrest triggered a 381-day boycott led by a young Martin Luther King.",
            },
            {
              id: "hi-l12-q2",
              type: "mcq",
              prompt: "Little Rock 1957 is significant because",
              choices: [
                "it ended slavery",
                "federal troops enforced desegregation of Central High against state resistance",
                "it was peaceful",
                "it started the KKK",
              ],
              answerIndex: 1,
              explanation:
                "Eisenhower sent the 101st Airborne — federal power vs Governor Faubus.",
            },
            {
              id: "hi-l12-q3",
              type: "tf",
              prompt:
                "Brown v. Board of Education (1954) declared school segregation unconstitutional.",
              answer: true,
              explanation:
                "Overturned 'separate but equal' (Plessy v. Ferguson).",
            },
            {
              id: "hi-l12-q4",
              type: "mcq",
              prompt: "The boycott's success rested mainly on",
              choices: [
                "violence",
                "mass non-violent economic pressure",
                "foreign aid",
                "court orders alone",
              ],
              answerIndex: 1,
              explanation:
                "Black residents were most bus passengers — economic leverage.",
            },
            {
              id: "hi-l12-q5",
              type: "short",
              prompt:
                "Name the organisation MLK led during the boycott (initials, SCLC forerunner was the MIA — either accepted).",
              answer: "MIA",
              keywords: ["mia", "sclc", "montgomery improvement"],
              acceptable: ["SCLC", "Montgomery Improvement Association"],
              explanation:
                "The Montgomery Improvement Association coordinated the boycott.",
            },
            {
              id: "hi-l12-q6",
              type: "short",
              prompt:
                "The nine African-American students at Central High became known as the Little Rock ___.",
              answer: "Nine",
              keywords: ["nine"],
              acceptable: ["9"],
              explanation:
                "The Little Rock Nine.",
            },
          ],
        },
        {
          id: "hi-l13",
          title: "Civil rights: Freedom Rides, legislation and apartheid resistance",
          questions: [
            {
              id: "hi-l13-q1",
              type: "mcq",
              prompt: "The Freedom Rides (1961) tested",
              choices: [
                "school desegregation",
                "enforcement of desegregated interstate transport in the South",
                "voting laws",
                "housing",
              ],
              answerIndex: 1,
              explanation:
                "Riders were beaten and buses firebombed — forcing federal intervention.",
            },
            {
              id: "hi-l13-q2",
              type: "mcq",
              prompt: "The Civil Rights Act 1964 mainly",
              choices: [
                "gave the vote",
                "outlawed discrimination in public places and employment",
                "ended the war",
                "created the NAACP",
              ],
              answerIndex: 1,
              explanation:
                "Voting rights came in 1965's Voting Rights Act.",
            },
            {
              id: "hi-l13-q3",
              type: "tf",
              prompt:
                "The Sharpeville massacre (1960) saw South African police kill peaceful pass-law protesters.",
              answer: true,
              explanation:
                "69 killed — turned world opinion and pushed resistance underground.",
            },
            {
              id: "hi-l13-q4",
              type: "mcq",
              prompt: "The Soweto uprising (1976) was triggered by",
              choices: [
                "pass laws",
                "compulsory Afrikaans in schools",
                "Mandela's arrest",
                "sanctions",
              ],
              answerIndex: 1,
              explanation:
                "Students protesting Afrikaans-medium teaching were shot.",
            },
            {
              id: "hi-l13-q5",
              type: "short",
              prompt:
                "The ANC's armed wing, co-founded by Mandela, was 'Umkhonto we ___'.",
              answer: "Sizwe",
              keywords: ["sizwe"],
              acceptable: ["Sizwe", "MK"],
              explanation:
                "MK — Spear of the Nation, sabotage from 1961.",
            },
            {
              id: "hi-l13-q6",
              type: "short",
              prompt:
                "Year Mandela was released from prison (number).",
              answer: "1990",
              keywords: ["1990"],
              acceptable: ["1990"],
              explanation:
                "February 1990 — apartheid negotiations followed.",
            },
          ],
        },
        {
          id: "hi-l14",
          title: "The move to global war: Japanese, Italian and German expansion",
          questions: [
            {
              id: "hi-l14-q1",
              type: "mcq",
              prompt: "Japan's 1931 expansion began with the invasion of",
              choices: ["Korea", "Manchuria", "China proper", "the Philippines"],
              answerIndex: 1,
              explanation:
                "The Mukden 'incident' justified seizing Manchuria — the League protested but did nothing.",
            },
            {
              id: "hi-l14-q2",
              type: "mcq",
              prompt: "Italy invaded Abyssinia (Ethiopia) in",
              choices: ["1931", "1935", "1939", "1922"],
              answerIndex: 1,
              explanation:
                "1935–36 conquest exposed the League's weakness — sanctions failed.",
            },
            {
              id: "hi-l14-q3",
              type: "tf",
              prompt:
                "The remilitarisation of the Rhineland (1936) violated the Treaty of Versailles.",
              answer: true,
              explanation:
                "Hitler gambled successfully — France and Britain did not act.",
            },
            {
              id: "hi-l14-q4",
              type: "mcq",
              prompt: "The policy of conceding demands to avoid war is called",
              choices: ["containment", "appeasement", "détente", "isolationism"],
              answerIndex: 1,
              explanation:
                "Munich 1938 is the classic example.",
            },
            {
              id: "hi-l14-q5",
              type: "short",
              prompt:
                "The 1939 pact between Germany and the USSR (names).",
              answer: "Nazi-Soviet Pact",
              keywords: ["nazi-soviet", "molotov", "ribbentrop", "non-aggression"],
              acceptable: ["Molotov-Ribbentrop", "Nazi-Soviet non-aggression pact"],
              explanation:
                "Molotov–Ribbentrop Pact — cleared the way to invade Poland.",
            },
            {
              id: "hi-l14-q6",
              type: "short",
              prompt:
                "Germany's 1938 union with Austria is called the ___.",
              answer: "Anschluss",
              keywords: ["anschluss"],
              acceptable: ["Anschluss"],
              explanation:
                "The Anschluss — forbidden by Versailles, unopposed in 1938.",
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
        {
          id: "hi-l15",
          title: "Authoritarian states: methods of consolidating power",
          questions: [
            {
              id: "hi-l15-q1",
              type: "mcq",
              prompt: "The Reichstag Fire Decree (1933) allowed Hitler to",
              choices: [
                "abolish elections",
                "suspend civil liberties and arrest opponents",
                "invade Poland",
                "print money",
              ],
              answerIndex: 1,
              explanation:
                "Emergency powers → legal destruction of democracy.",
            },
            {
              id: "hi-l15-q2",
              type: "mcq",
              prompt: "Mao's methods of consolidation included",
              choices: [
                "free elections",
                "land reform, thought reform campaigns and purges of 'class enemies'",
                "restoring the emperor",
                "joining the UN",
              ],
              answerIndex: 1,
              explanation:
                "Campaigns like land reform and the Three-anti/Five-anti movements eliminated opposition.",
            },
            {
              id: "hi-l15-q3",
              type: "tf",
              prompt:
                "The Night of the Long Knives (1934) removed Hitler's rivals within the Nazi movement (the SA leadership).",
              answer: true,
              explanation:
                "Röhm and the SA were purged — winning army support.",
            },
            {
              id: "hi-l15-q4",
              type: "mcq",
              prompt: "A common consolidation method across Hitler, Mao and Castro was",
              choices: [
                "power-sharing",
                "propaganda plus elimination of political opposition",
                "decentralisation",
                "free press",
              ],
              answerIndex: 1,
              explanation:
                "Control of the message + removal of rivals = the standard playbook.",
            },
            {
              id: "hi-l15-q5",
              type: "short",
              prompt:
                "Castro's 1959 movement that overthrew Batista was the '26th of ___ Movement'.",
              answer: "July",
              keywords: ["july"],
              acceptable: ["July Movement", "M-26-7"],
              explanation:
                "Named for the 1953 Moncada Barracks attack.",
            },
            {
              id: "hi-l15-q6",
              type: "short",
              prompt:
                "Hitler's 1933 law giving him power to rule by decree for four years = the ___ Act.",
              answer: "Enabling",
              keywords: ["enabling"],
              acceptable: ["Enabling Act"],
              explanation:
                "The Enabling Act — democracy legislated itself away.",
            },
          ],
        },
        {
          id: "hi-l16",
          title: "Authoritarian policies in practice",
          questions: [
            {
              id: "hi-l16-q1",
              type: "mcq",
              prompt: "The Nuremberg Laws (1935) did what?",
              choices: [
                "legalised unions",
                "stripped Jews of citizenship and banned intermarriage",
                "ended the war",
                "created the SS",
              ],
              answerIndex: 1,
              explanation:
                "Institutionalised racial persecution.",
            },
            {
              id: "hi-l16-q2",
              type: "mcq",
              prompt: "Mao's Great Leap Forward (1958) aimed to",
              choices: [
                "restore capitalism",
                "rapidly industrialise via communes — it caused catastrophic famine",
                "join the West",
                "free the press",
              ],
              answerIndex: 1,
              explanation:
                "Tens of millions died in the resulting famine (1959–61).",
            },
            {
              id: "hi-l16-q3",
              type: "tf",
              prompt:
                "Castro's literacy campaign (1961) sharply reduced illiteracy in Cuba.",
              answer: true,
              explanation:
                "Often cited as the revolution's genuine social achievement.",
            },
            {
              id: "hi-l16-q4",
              type: "mcq",
              prompt: "Nazi economic policy reduced unemployment mainly through",
              choices: [
                "free trade",
                "public works (autobahns) and rearmament",
                "tax cuts for all",
                "immigration",
              ],
              answerIndex: 1,
              explanation:
                "Rearmament drove the recovery — and prepared for war.",
            },
            {
              id: "hi-l16-q5",
              type: "short",
              prompt:
                "Mao's 1966 campaign mobilising youth against 'capitalist roaders' = the ___ Revolution.",
              answer: "Cultural",
              keywords: ["cultural"],
              acceptable: ["Cultural Revolution"],
              explanation:
                "The Cultural Revolution — Red Guards, chaos, persecution.",
            },
            {
              id: "hi-l16-q6",
              type: "short",
              prompt:
                "The Nazi organisation controlling youth (male) was 'Hitler ___'.",
              answer: "Youth",
              keywords: ["youth", "jugend"],
              acceptable: ["Youth", "Jugend", "Hitler Jugend"],
              explanation:
                "Hitler Youth — indoctrination of the next generation.",
            },
          ],
        },
        {
          id: "hi-l17",
          title: "20th-century wars: causes and effects",
          questions: [
            {
              id: "hi-l17-q1",
              type: "mcq",
              prompt: "A 'total war' means",
              choices: [
                "a short war",
                "one involving whole economies and civilian populations",
                "a war at sea",
                "a civil war",
              ],
              answerIndex: 1,
              explanation:
                "WWI and WWII blurred the front line and the home front.",
            },
            {
              id: "hi-l17-q2",
              type: "mcq",
              prompt: "The Spanish Civil War (1936–39) mattered to WWII because it",
              choices: [
                "ended fascism",
                "let Germany and Italy test weapons and tactics",
                "united Europe",
                "started WWI",
              ],
              answerIndex: 1,
              explanation:
                "A 'dress rehearsal' — Guernica showed aerial bombing of civilians.",
            },
            {
              id: "hi-l17-q3",
              type: "tf",
              prompt:
                "Economic causes of 20th-century wars include competition for resources and the effects of the Great Depression.",
              answer: true,
              explanation:
                "Depression fuelled extremism and expansionism.",
            },
            {
              id: "hi-l17-q4",
              type: "mcq",
              prompt: "A major social effect of WWII in the USA was",
              choices: [
                "fewer women working",
                "women entering industrial jobs (Rosie the Riveter) and civil rights momentum",
                "return to isolation permanently",
                "abolition of the draft",
              ],
              answerIndex: 1,
              explanation:
                "Wartime mobilisation shifted gender roles and expectations.",
            },
            {
              id: "hi-l17-q5",
              type: "short",
              prompt:
                "Germany's lightning-war tactic of combined air and armour = ___.",
              answer: "Blitzkrieg",
              keywords: ["blitzkrieg"],
              acceptable: ["Blitzkrieg"],
              explanation:
                "Blitzkrieg — rapid combined-arms attack.",
            },
            {
              id: "hi-l17-q6",
              type: "short",
              prompt:
                "The civilian bombing of this Basque town (1937) became a symbol of modern war: ___.",
              answer: "Guernica",
              keywords: ["guernica"],
              acceptable: ["Guernica"],
              explanation:
                "Guernica — immortalised by Picasso.",
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
        {
          id: "hi-l18",
          title: "Cold War crises: Berlin",
          questions: [
            {
              id: "hi-l18-q1",
              type: "mcq",
              prompt: "The Berlin Blockade (1948–49) was Stalin's attempt to",
              choices: [
                "build a wall",
                "force the Western allies out of West Berlin by cutting land access",
                "invade France",
                "test atomic weapons",
              ],
              answerIndex: 1,
              explanation:
                "The Western airlift kept 2 million West Berliners supplied — a propaganda victory.",
            },
            {
              id: "hi-l18-q2",
              type: "mcq",
              prompt: "The Berlin Wall (1961) was built primarily to",
              choices: [
                "defend against NATO invasion",
                "stop East Germans fleeing to the West",
                "divide Germany permanently by treaty",
                "protect trade",
              ],
              answerIndex: 1,
              explanation:
                "The brain drain embarrassed the GDR — the wall sealed the border.",
            },
            {
              id: "hi-l18-q3",
              type: "tf",
              prompt:
                "Berlin became a Cold War flashpoint because it lay deep inside Soviet-controlled East Germany yet was divided among the four powers.",
              answer: true,
              explanation:
                "An island of West inside the East — inherently unstable.",
            },
            {
              id: "hi-l18-q4",
              type: "mcq",
              prompt: "The fall of the Berlin Wall (1989) symbolised",
              choices: [
                "the start of the Cold War",
                "the collapse of communist control in Eastern Europe",
                "German rearmament",
                "the end of WWII",
              ],
              answerIndex: 1,
              explanation:
                "9 November 1989 — reunification followed in 1990.",
            },
            {
              id: "hi-l18-q5",
              type: "short",
              prompt:
                "The Western response supplying Berlin by air 1948–49 = the Berlin ___.",
              answer: "Airlift",
              keywords: ["airlift"],
              acceptable: ["Airlift", "air lift"],
              explanation:
                "The Berlin Airlift — ~278,000 flights.",
            },
            {
              id: "hi-l18-q6",
              type: "short",
              prompt:
                "The East German state's German abbreviation (three letters).",
              answer: "GDR",
              keywords: ["gdr", "ddr"],
              acceptable: ["DDR"],
              explanation:
                "GDR (English) / DDR (German Democratic Republic).",
            },
          ],
        },
        {
          id: "hi-l19",
          title: "Cold War crises: Cuba and the missile crisis",
          questions: [
            {
              id: "hi-l19-q1",
              type: "mcq",
              prompt: "The Bay of Pigs (1961) was",
              choices: [
                "a Soviet invasion",
                "a failed US-backed invasion of Cuba by exiles",
                "a naval blockade",
                "a missile site",
              ],
              answerIndex: 1,
              explanation:
                "Its failure pushed Castro closer to the USSR.",
            },
            {
              id: "hi-l19-q2",
              type: "mcq",
              prompt: "The Cuban Missile Crisis (1962) was resolved when",
              choices: [
                "the US invaded",
                "the USSR withdrew missiles in exchange for a US no-invasion pledge and secret removal of Turkish missiles",
                "NATO surrendered",
                "Cuba was partitioned",
              ],
              answerIndex: 1,
              explanation:
                "The secret Jupiter-missile deal let both sides claim success.",
            },
            {
              id: "hi-l19-q3",
              type: "tf",
              prompt:
                "The crisis led to a direct 'hotline' between Washington and Moscow.",
              answer: true,
              explanation:
                "Plus the 1963 Partial Test Ban Treaty — cautious lessons learned.",
            },
            {
              id: "hi-l19-q4",
              type: "mcq",
              prompt: "Kennedy's public response was a naval 'quarantine', chosen because it",
              choices: [
                "was a declaration of war",
                "pressured the USSR without immediate military escalation",
                "avoided publicity",
                "pleased Castro",
              ],
              answerIndex: 1,
              explanation:
                "A blockade under another name — escalation controlled.",
            },
            {
              id: "hi-l19-q5",
              type: "short",
              prompt:
                "Soviet leader during the missile crisis (surname).",
              answer: "Khrushchev",
              keywords: ["khrushchev", "krushchev"],
              acceptable: ["Krushchev"],
              explanation:
                "Nikita Khrushchev.",
            },
            {
              id: "hi-l19-q6",
              type: "short",
              prompt:
                "The missile crisis lasted '___ days' in October 1962 (number).",
              answer: "13",
              keywords: ["13"],
              acceptable: ["thirteen"],
              explanation:
                "The 'thirteen days' of October 1962.",
            },
          ],
        },
        {
          id: "hi-l20",
          title: "Détente and the end of the Cold War",
          questions: [
            {
              id: "hi-l20-q1",
              type: "mcq",
              prompt: "Détente refers to",
              choices: [
                "escalation",
                "the easing of Cold War tensions in the 1970s",
                "the arms race",
                "decolonisation",
              ],
              answerIndex: 1,
              explanation:
                "SALT treaties, Nixon's China visit, Helsinki Accords.",
            },
            {
              id: "hi-l20-q2",
              type: "mcq",
              prompt: "Gorbachev's policies of glasnost and perestroika meant",
              choices: [
                "secrecy and expansion",
                "openness and restructuring of the Soviet system",
                "war and peace",
                "walls and weapons",
              ],
              answerIndex: 1,
              explanation:
                "Reforms loosened control — unintendedly accelerating collapse.",
            },
            {
              id: "hi-l20-q3",
              type: "tf",
              prompt:
                "The Soviet invasion of Afghanistan (1979) effectively ended détente.",
              answer: true,
              explanation:
                "Carter boycotted the Moscow Olympics; the 'Second Cold War' began.",
            },
            {
              id: "hi-l20-q4",
              type: "mcq",
              prompt: "Historians debate the Cold War's end — a key 'triumphalist' claim is that",
              choices: [
                "the USSR won",
                "Reagan's military build-up forced Soviet collapse",
                "it never ended",
                "the UN ended it",
              ],
              answerIndex: 1,
              explanation:
                "vs 'Gorbachevist' and structural/economic-collapse interpretations.",
            },
            {
              id: "hi-l20-q5",
              type: "short",
              prompt:
                "The 1975 agreement on borders and human rights = the ___ Accords.",
              answer: "Helsinki",
              keywords: ["helsinki"],
              acceptable: ["Helsinki"],
              explanation:
                "Helsinki Final Act — détente's high point.",
            },
            {
              id: "hi-l20-q6",
              type: "short",
              prompt:
                "Year the USSR formally dissolved (number).",
              answer: "1991",
              keywords: ["1991"],
              acceptable: ["1991"],
              explanation:
                "December 1991 — the Cold War ended.",
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
        {
          id: "hi-l21",
          title: "Source skills: applying OPCVL",
          questions: [
            {
              id: "hi-l21-q1",
              type: "mcq",
              prompt: "In OPCVL, 'P' (purpose) asks",
              choices: [
                "who wrote it",
                "why the source was produced and for whom",
                "what it says",
                "when it was made",
              ],
              answerIndex: 1,
              explanation:
                "Purpose drives content — propaganda aims to persuade, diaries to record.",
            },
            {
              id: "hi-l21-q2",
              type: "mcq",
              prompt:
                "Source: a 1936 Soviet poster showing Stalin with happy workers. Its VALUE to a historian of Stalin's propaganda is that it",
              choices: [
                "shows working conditions accurately",
                "reveals the image the regime wanted to project",
                "proves prosperity",
                "is unbiased",
              ],
              answerIndex: 1,
              explanation:
                "Sources are valuable for what they reveal about purpose — not literal truth.",
            },
            {
              id: "hi-l21-q3",
              type: "tf",
              prompt:
                "A source's limitation might be that it was produced for a purpose that distorts its content (e.g. an official speech).",
              answer: true,
              explanation:
                "Link limitation to origin/purpose — that's high-level OPCVL.",
            },
            {
              id: "hi-l21-q4",
              type: "mcq",
              prompt: "A memoir written 30 years after an event is limited because",
              choices: [
                "it is secondary",
                "memory distorts and hindsight reshapes the account",
                "it is long",
                "it is typed",
              ],
              answerIndex: 1,
              explanation:
                "Retrospective distance = limitation; personal experience = value.",
            },
            {
              id: "hi-l21-q5",
              type: "short",
              prompt:
                "The 'O' in OPCVL stands for ___ (who/what/when/type).",
              answer: "origin",
              keywords: ["origin"],
              acceptable: ["origin"],
              explanation:
                "Origin — author, type of source, date, place.",
            },
            {
              id: "hi-l21-q6",
              type: "short",
              prompt:
                "Paper 1 asks you to evaluate a source's value and ___ (the 'L').",
              answer: "limitations",
              keywords: ["limitation"],
              acceptable: ["limitations"],
              explanation:
                "Value AND limitations — both required.",
            },
          ],
        },
        {
          id: "hi-l22",
          title: "Essay planning for Paper 2",
          questions: [
            {
              id: "hi-l22-q1",
              type: "mcq",
              prompt: "The best Paper 2 essay structure is",
              choices: [
                "chronological narrative",
                "thematic paragraphs each addressing the question",
                "source by source",
                "a single long paragraph",
              ],
              answerIndex: 1,
              explanation:
                "Analyse by theme/factor, not narrative.",
            },
            {
              id: "hi-l22-q2",
              type: "mcq",
              prompt: "'To what extent' questions require you to",
              choices: [
                "list facts",
                "weigh the stated factor against alternatives and reach a judgement",
                "describe events",
                "agree fully",
              ],
              answerIndex: 1,
              explanation:
                "Evaluation + judgement = top-band essays.",
            },
            {
              id: "hi-l22-q3",
              type: "tf",
              prompt:
                "An introduction should define key terms, establish the argument and give a line of reasoning.",
              answer: true,
              explanation:
                "Set up the debate, state your position, outline the case.",
            },
            {
              id: "hi-l22-q4",
              type: "mcq",
              prompt: "Supporting a point with precise dates, names and statistics is called",
              choices: [
                "padding",
                "substantiating with detailed historical knowledge",
                "plagiarism",
                "opinion",
              ],
              answerIndex: 1,
              explanation:
                "Specific, relevant evidence is what separates bands.",
            },
            {
              id: "hi-l22-q5",
              type: "short",
              prompt:
                "An essay weighing causes should end each paragraph by linking back to the ___ (one word).",
              answer: "question",
              keywords: ["question", "argument", "thesis"],
              acceptable: ["question", "thesis"],
              explanation:
                "Every paragraph answers the set question explicitly.",
            },
            {
              id: "hi-l22-q6",
              type: "short",
              prompt:
                "Planning technique: ranking causes from most to least important = establishing a ___.",
              answer: "hierarchy",
              keywords: ["hierarch", "priorit", "rank"],
              acceptable: ["hierarchy", "prioritisation", "ranking"],
              explanation:
                "A hierarchy of factors enables a sustained judgement.",
            },
          ],
        },
        {
          id: "hi-l23",
          title: "The Internal Assessment: investigation skills",
          questions: [
            {
              id: "hi-l23-q1",
              type: "mcq",
              prompt: "The History IA consists of",
              choices: [
                "one long essay",
                "three sections: identification/evaluation of sources, investigation, reflection",
                "a presentation",
                "a source exam",
              ],
              answerIndex: 1,
              explanation:
                "Section 1 (sources), Section 2 (investigation ~1,300 words), Section 3 (reflection).",
            },
            {
              id: "hi-l23-q2",
              type: "mcq",
              prompt: "A good IA research question is",
              choices: [
                "broad and descriptive",
                "focused, arguable and answerable within 2,200 words",
                "unanswerable",
                "opinion-based",
              ],
              answerIndex: 1,
              explanation:
                "Focus enables depth — narrow scope, clear question.",
            },
            {
              id: "hi-l23-q3",
              type: "tf",
              prompt:
                "Section 1 requires OPCVL analysis of two key sources used in the investigation.",
              answer: true,
              explanation:
                "Two sources evaluated for origin, purpose, content, value, limitations.",
            },
            {
              id: "hi-l23-q4",
              type: "mcq",
              prompt: "Section 3 (reflection) asks you to discuss",
              choices: [
                "your findings",
                "the methods and challenges historians face, learned through doing the IA",
                "your grade",
                "your favourite sources",
              ],
              answerIndex: 1,
              explanation:
                "Reflection on historiographical method — what historians DO.",
            },
            {
              id: "hi-l23-q5",
              type: "short",
              prompt:
                "Total word limit for the History IA (number).",
              answer: "2200",
              keywords: ["2200", "2,200"],
              acceptable: ["2,200"],
              explanation:
                "2,200 words across all three sections.",
            },
            {
              id: "hi-l23-q6",
              type: "short",
              prompt:
                "The IA counts for ___% of the SL grade (number).",
              answer: "25",
              keywords: ["25"],
              acceptable: ["25%"],
              explanation:
                "SL 25% / HL 20%.",
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
        {
          id: "hi-l24",
          title: "HL Paper 3: European depth",
          level: "HL",
          questions: [
            {
              id: "hi-l24-q1",
              type: "mcq",
              prompt: "HL Paper 3 demands",
              choices: [
                "narrative answers",
                "detailed regional knowledge across three essays with evaluation",
                "source analysis only",
                "no examples",
              ],
              answerIndex: 1,
              explanation:
                "Three essays in 2h30 — depth and argument required.",
            },
            {
              id: "hi-l24-q2",
              type: "mcq",
              prompt: "For 'Interwar domestic developments' (European option), a strong essay on Weimar might weigh",
              choices: [
                "only Hitler",
                "political instability vs genuine achievements of the 'golden twenties'",
                "the Cold War",
                "medieval history",
              ],
              answerIndex: 1,
              explanation:
                "HL depth = evaluating competing interpretations with specific evidence.",
            },
            {
              id: "hi-l24-q3",
              type: "tf",
              prompt:
                "Paper 3 essays benefit from naming historians and schools of interpretation.",
              answer: true,
              explanation:
                "e.g. intentionalist vs structuralist debates on the Third Reich.",
            },
            {
              id: "hi-l24-q4",
              type: "mcq",
              prompt: "A 'to what extent was the Versailles settlement responsible for WWII' essay should",
              choices: [
                "blame Versailles entirely",
                "weigh Versailles against appeasement, the Depression and Hitler's agency",
                "describe the treaty",
                "discuss WWI only",
              ],
              answerIndex: 1,
              explanation:
                "Multi-causal evaluation is the HL standard.",
            },
            {
              id: "hi-l24-q5",
              type: "short",
              prompt:
                "Number of essays required in HL Paper 3 (number).",
              answer: "3",
              keywords: ["3"],
              acceptable: ["three"],
              explanation:
                "Three essays, one per section, in 2h30.",
            },
            {
              id: "hi-l24-q6",
              type: "short",
              prompt:
                "The debate blaming Hitler's deliberate plan vs circumstances/structure = intentionalism vs ___.",
              answer: "structuralism",
              keywords: ["structural"],
              acceptable: ["structuralism", "functionalism"],
              explanation:
                "Intentionalist vs structuralist/functionalist interpretations.",
            },
          ],
        },
        {
          id: "hi-l25",
          title: "HL Paper 3: Americas depth and comparing interpretations",
          level: "HL",
          questions: [
            {
              id: "hi-l25-q1",
              type: "mcq",
              prompt: "For the Americas option, an essay on the New Deal should",
              choices: [
                "describe programmes only",
                "evaluate its successes and limitations with named evidence and historians",
                "cover Europe",
                "list presidents",
              ],
              answerIndex: 1,
              explanation:
                "e.g. did it end the Depression? (war spending did) — evaluate.",
            },
            {
              id: "hi-l25-q2",
              type: "mcq",
              prompt: "Comparing interpretations means",
              choices: [
                "quoting one historian",
                "contrasting how different historians explain the same event and judging which is stronger",
                "ignoring historians",
                "summarising textbooks",
              ],
              answerIndex: 1,
              explanation:
                "e.g. orthodox vs revisionist vs post-revisionist Cold War views.",
            },
            {
              id: "hi-l25-q3",
              type: "tf",
              prompt:
                "'Post-revisionist' Cold War historians spread responsibility between both superpowers.",
              answer: true,
              explanation:
                "Gaddis-style synthesis — neither side solely to blame.",
            },
            {
              id: "hi-l25-q4",
              type: "mcq",
              prompt: "An essay on US civil rights might credit",
              choices: [
                "only MLK",
                "grassroots activism, federal action, legal cases and shifting public opinion together",
                "nobody",
                "foreign pressure only",
              ],
              answerIndex: 1,
              explanation:
                "HL depth integrates top-down and bottom-up explanations.",
            },
            {
              id: "hi-l25-q5",
              type: "short",
              prompt:
                "Historians blaming US expansionism for the Cold War are the ___ school.",
              answer: "revisionist",
              keywords: ["revisionist"],
              acceptable: ["revisionists", "revisionism"],
              explanation:
                "Revisionists (Williams) vs orthodox vs post-revisionist.",
            },
            {
              id: "hi-l25-q6",
              type: "short",
              prompt:
                "HL Paper 3 duration (hours and minutes).",
              answer: "2 hours 30 minutes",
              keywords: ["2", "30", "150"],
              acceptable: ["2h30", "150 minutes", "2.5 hours"],
              explanation:
                "2h30 for three essays — ~50 minutes each.",
            },
          ],
        },
      ],
    },
  ],
};
