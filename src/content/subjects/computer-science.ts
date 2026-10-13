import type { Subject } from "../types";

export const computerScience: Subject = {
  slug: "computer-science",
  name: "Computer Science",
  short: "CompSci",
  color: "#14B8A6",
  emoji: "💻",
  group: "Sciences",
  levels: ["SL", "HL"],
  description:
    "Computer fundamentals, networks, databases and machine learning, plus computational thinking, programming, OOP and abstract data types.",
  syllabusUrl: "https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/",
  units: [
    {
      id: "cs-u1",
      code: "Theme A1",
      title: "Computer fundamentals",
      lessons: [
        {
          id: "cs-l1",
          title: "Data, bits and binary",
          questions: [
            {
              id: "cs-l1-q1",
              type: "mcq",
              prompt:
                "The binary number 1011 in decimal is",
              choices: ["13", "11", "9", "12"],
              answerIndex: 1,
              explanation: "8 + 0 + 2 + 1 = 11.",
            },
            {
              id: "cs-l1-q2",
              type: "mcq",
              prompt:
                "One byte consists of",
              choices: ["4 bits", "16 bits", "8 bits", "1024 bits"],
              answerIndex: 2,
              explanation: "8 bits = 1 byte; 1024 bytes = 1 KiB.",
            },
            {
              id: "cs-l1-q3",
              type: "mcq",
              prompt:
                "In two's complement, the leftmost bit of a negative number is",
              choices: ["0", "1", "unused", "the sign-magnitude bit"],
              answerIndex: 1,
              explanation:
                "Two's complement uses 1 as the leading bit for negatives; it also simplifies subtraction to addition.",
            },
            {
              id: "cs-l1-q4",
              type: "tf",
              prompt:
                "Lossy compression reduces file size while keeping every original bit of data.",
              answer: false,
              explanation:
                "Lossy discards information permanently; lossless preserves all data.",
            },
            {
              id: "cs-l1-q5",
              type: "short",
              prompt:
                "Convert the decimal number 25 to 8-bit binary.",
              answer: "00011001",
              acceptable: ["11001", "0001 1001"],
              keywords: ["11001"],
              explanation: "16 + 8 + 1 = 25 → 00011001.",
            },
            {
              id: "cs-l1-q6",
              type: "short",
              prompt:
                "Name two common data types used to store text and whole numbers.",
              answer: "String and integer",
              acceptable: ["string", "integer", "int"],
              keywords: ["string", "integer", "int"],
              explanation:
                "Text → string (e.g. UTF-8/ASCII encoded); whole numbers → integer.",
            },
          ],
        },
        {
          id: "cs-l2",
          title: "CPU, memory and the fetch–execute cycle",
          questions: [
            {
              id: "cs-l2-q1",
              type: "mcq",
              prompt:
                "The part of the CPU that performs arithmetic and logic operations is the",
              choices: [
                "control unit",
                "ALU",
                "cache",
                "bus",
              ],
              answerIndex: 1,
              explanation:
                "The arithmetic logic unit executes calculations; the control unit coordinates.",
            },
            {
              id: "cs-l2-q2",
              type: "mcq",
              prompt:
                "RAM differs from secondary storage because RAM is",
              choices: [
                "permanent",
                "volatile and directly accessed by the CPU",
                "slower",
                "used for backups",
              ],
              answerIndex: 1,
              explanation:
                "RAM loses its contents on power-off and holds currently running programs/data.",
            },
            {
              id: "cs-l2-q3",
              type: "mcq",
              prompt:
                "In the fetch–decode–execute cycle, the program counter holds",
              choices: [
                "the current instruction",
                "the address of the next instruction",
                "the result of the last calculation",
                "the data being processed",
              ],
              answerIndex: 1,
              explanation:
                "PC → next instruction address; the instruction itself goes to the instruction register via the MDR.",
            },
            {
              id: "cs-l2-q4",
              type: "tf",
              prompt:
                "Cache memory is larger but slower than RAM.",
              answer: false,
              explanation:
                "Cache is SMALLER and FASTER than RAM — it sits between CPU and RAM.",
            },
            {
              id: "cs-l2-q5",
              type: "short",
              prompt:
                "List the three stages of the machine instruction cycle.",
              answer: "Fetch, decode, execute",
              acceptable: ["fetch decode execute"],
              keywords: ["fetch", "decode", "execute"],
              explanation:
                "Fetch the instruction, decode it in the control unit, execute it.",
            },
            {
              id: "cs-l2-q6",
              type: "short",
              prompt:
                "Explain the role of buses in a computer system.",
              answer:
                "They carry addresses, data and control signals between CPU, memory and devices.",
              keywords: ["address", "data", "control", "transfer"],
              explanation:
                "Address bus selects locations, data bus carries contents, control bus synchronises operations.",
            },
          ],
        },
        {
          id: "cs-l11",
          title: "Number bases and two's complement",
          questions: [
            {
              id: "cs-l11-q1",
              type: "mcq",
              prompt: "Binary 1011 in decimal is",
              choices: ["11", "9", "13", "10"],
              answerIndex: 0,
              explanation:
                "8+0+2+1 = 11.",
            },
            {
              id: "cs-l11-q2",
              type: "mcq",
              prompt: "Hexadecimal F equals binary",
              choices: ["1001", "1110", "1111", "1010"],
              answerIndex: 2,
              explanation:
                "F = 15 = 1111.",
            },
            {
              id: "cs-l11-q3",
              type: "tf",
              prompt:
                "In two's complement, the leftmost bit carries a negative place value.",
              answer: true,
              explanation:
                "1000 in 4-bit two's complement = −8.",
            },
            {
              id: "cs-l11-q4",
              type: "mcq",
              prompt: "The 8-bit two's complement representation of −1 is",
              choices: ["10000001", "11111111", "11111110", "00000001"],
              answerIndex: 1,
              explanation:
                "All 1s = −1; invert+1 gives a clean rule.",
            },
            {
              id: "cs-l11-q5",
              type: "short",
              prompt:
                "Decimal 13 in binary (4 or more bits).",
              answer: "1101",
              keywords: ["1101"],
              acceptable: ["1101", "00001101"],
              explanation:
                "8+4+1 = 13.",
            },
            {
              id: "cs-l11-q6",
              type: "short",
              prompt:
                "Binary 11111010 in 8-bit two's complement = decimal ___ (negative).",
              answer: "-6",
              keywords: ["-6"],
              acceptable: ["−6", "minus 6", "-6"],
              explanation:
                "Invert+1 → 00000110 = 6, so it's −6.",
            },
          ],
        },
        {
          id: "cs-l12",
          title: "Logic gates, truth tables and Boolean simplification",
          questions: [
            {
              id: "cs-l12-q1",
              type: "mcq",
              prompt: "An AND gate outputs 1 when",
              choices: [
                "any input is 1",
                "both inputs are 1",
                "inputs differ",
                "input is 0",
              ],
              answerIndex: 1,
              explanation:
                "AND = A·B — both must be true.",
            },
            {
              id: "cs-l12-q2",
              type: "mcq",
              prompt: "XOR outputs 1 when",
              choices: [
                "inputs are equal",
                "inputs differ",
                "both are 1",
                "both are 0",
              ],
              answerIndex: 1,
              explanation:
                "Exclusive OR — exactly one input true.",
            },
            {
              id: "cs-l12-q3",
              type: "tf",
              prompt:
                "A NAND gate is universal: any Boolean function can be built from NANDs alone.",
              answer: true,
              explanation:
                "NAND (and NOR) are functionally complete.",
            },
            {
              id: "cs-l12-q4",
              type: "mcq",
              prompt: "The expression A·1 simplifies to",
              choices: ["1", "A", "0", "A'"],
              answerIndex: 1,
              explanation:
                "AND with 1 leaves A unchanged.",
            },
            {
              id: "cs-l12-q5",
              type: "short",
              prompt:
                "A + A·B simplifies to ___ (Boolean law).",
              answer: "A",
              keywords: ["a"],
              acceptable: ["A"],
              explanation:
                "Absorption law: A + AB = A.",
            },
            {
              id: "cs-l12-q6",
              type: "short",
              prompt:
                "NOT (A AND B) equals A' ___ B' (operator, De Morgan).",
              answer: "OR",
              keywords: ["or", "+"],
              acceptable: ["+", "or", "OR"],
              explanation:
                "De Morgan: ¬(A·B) = ¬A + ¬B.",
            },
          ],
        },
        {
          id: "cs-l13",
          title: "Operating systems and data compression",
          questions: [
            {
              id: "cs-l13-q1",
              type: "mcq",
              prompt: "Key functions of an operating system include",
              choices: [
                "only running apps",
                "memory management, process scheduling, file management, device drivers and security",
                "writing code",
                "cooling the CPU",
              ],
              answerIndex: 1,
              explanation:
                "The OS manages hardware resources and provides services.",
            },
            {
              id: "cs-l13-q2",
              type: "mcq",
              prompt: "Lossless compression",
              choices: [
                "deletes data",
                "reduces size with no information lost — original can be rebuilt",
                "only works on video",
                "is slower to store",
              ],
              answerIndex: 1,
              explanation:
                "e.g. run-length encoding, ZIP — vs lossy JPEG/MP3.",
            },
            {
              id: "cs-l13-q3",
              type: "tf",
              prompt:
                "Virtual memory lets the OS use disk space to extend RAM.",
              answer: true,
              explanation:
                "Paging swaps inactive pages to disk — slower but effective.",
            },
            {
              id: "cs-l13-q4",
              type: "mcq",
              prompt: "Run-length encoding compresses",
              choices: [
                "random data best",
                "data with repeated values, storing value + count",
                "encrypted files",
                "only text",
              ],
              answerIndex: 1,
              explanation:
                "AAAABBB → 4A3B — great for runs, useless on random data.",
            },
            {
              id: "cs-l13-q5",
              type: "short",
              prompt:
                "JPEG and MP3 are examples of ___ compression.",
              answer: "lossy",
              keywords: ["lossy"],
              acceptable: ["lossy"],
              explanation:
                "They discard detail humans barely notice.",
            },
            {
              id: "cs-l13-q6",
              type: "short",
              prompt:
                "The OS component deciding which process runs next = the ___.",
              answer: "scheduler",
              keywords: ["schedul"],
              acceptable: ["scheduler", "CPU scheduler"],
              explanation:
                "The scheduler manages process execution order.",
            },
          ],
        },
      ],
    },
    {
      id: "cs-u2",
      code: "Themes A2 & A3",
      title: "Networks and databases",
      lessons: [
        {
          id: "cs-l3",
          title: "Networks and protocols",
          questions: [
            {
              id: "cs-l3-q1",
              type: "mcq",
              prompt:
                "TCP differs from UDP in that TCP",
              choices: [
                "is connectionless",
                "guarantees ordered, reliable delivery",
                "is faster always",
                "cannot retransmit",
              ],
              answerIndex: 1,
              explanation:
                "TCP handshakes, sequences and retransmits; UDP trades reliability for speed.",
            },
            {
              id: "cs-l3-q2",
              type: "mcq",
              prompt:
                "A LAN typically covers",
              choices: [
                "a whole country",
                "a single site such as a school or home",
                "the internet backbone",
                "satellite links",
              ],
              answerIndex: 1,
              explanation:
                "Local area network — small geographic scope, privately owned infrastructure.",
            },
            {
              id: "cs-l3-q3",
              type: "mcq",
              prompt:
                "The purpose of DNS is to",
              choices: [
                "encrypt traffic",
                "translate domain names into IP addresses",
                "assign MAC addresses",
                "route packets",
              ],
              answerIndex: 1,
              explanation:
                "Domain Name System resolves e.g. ibo.org to an IP.",
            },
            {
              id: "cs-l3-q4",
              type: "tf",
              prompt:
                "In packet switching, all packets of a message must travel the same route.",
              answer: false,
              explanation:
                "Packets may take different routes and are reassembled at the destination.",
            },
            {
              id: "cs-l3-q5",
              type: "short",
              prompt:
                "Give two advantages of a client–server network over a peer-to-peer network.",
              answer:
                "Centralised management/security and easier backups; resources shared efficiently.",
              keywords: ["central", "secur", "backup", "manage"],
              explanation:
                "Central control of users/data, better security and simpler backups.",
            },
            {
              id: "cs-l3-q6",
              type: "short",
              prompt:
                "Explain what a VPN does for a remote user.",
              answer:
                "It creates an encrypted tunnel over a public network so traffic is private and appears to come from the private network.",
              keywords: ["encrypt", "tunnel", "private", "secure"],
              explanation:
                "VPNs wrap traffic in encryption between the user and the network gateway.",
            },
          ],
        },
        {
          id: "cs-l4",
          title: "Databases and SQL",
          questions: [
            {
              id: "cs-l4-q1",
              type: "mcq",
              prompt:
                "A primary key must be",
              choices: [
                "a number",
                "unique and non-null for every row",
                "encrypted",
                "changeable",
              ],
              answerIndex: 1,
              explanation:
                "It uniquely identifies each record; duplicates or NULLs are not allowed.",
            },
            {
              id: "cs-l4-q2",
              type: "mcq",
              prompt:
                "Which SQL clause filters rows in a query?",
              choices: ["ORDER BY", "WHERE", "SELECT", "GROUP BY"],
              answerIndex: 1,
              explanation: "SELECT chooses columns; WHERE filters rows.",
            },
            {
              id: "cs-l4-q3",
              type: "mcq",
              prompt:
                "Normalisation primarily aims to",
              choices: [
                "speed up hardware",
                "reduce data redundancy and update anomalies",
                "encrypt tables",
                "merge all tables into one",
              ],
              answerIndex: 1,
              explanation:
                "Splitting data into related tables avoids storing the same fact twice.",
            },
            {
              id: "cs-l4-q4",
              type: "tf",
              prompt:
                "A foreign key in one table must match a primary key in another table.",
              answer: true,
              explanation:
                "That link (referential integrity) is what makes a database relational.",
            },
            {
              id: "cs-l4-q5",
              type: "short",
              prompt:
                "Write an SQL query to return the names of all students whose score is above 80 from a table called Students.",
              answer: "SELECT name FROM Students WHERE score > 80;",
              acceptable: ["select name from students where score > 80"],
              keywords: ["select", "from", "where", "80", "students"],
              explanation:
                "SELECT the column, FROM the table, WHERE the condition.",
            },
            {
              id: "cs-l4-q6",
              type: "short",
              prompt:
                "Explain the difference between a flat file and a relational database.",
              answer:
                "A flat file stores all data in one table/file; a relational database links multiple tables via keys to avoid redundancy.",
              keywords: ["table", "relational", "redundan", "key"],
              explanation:
                "Relational design splits data and joins it — flat files duplicate it.",
            },
          ],
        },
        {
          id: "cs-l14",
          title: "Network layers: OSI, TCP/IP, IP and DNS",
          questions: [
            {
              id: "cs-l14-q1",
              type: "mcq",
              prompt: "The OSI model has",
              choices: ["4 layers", "7 layers", "3 layers", "5 layers"],
              answerIndex: 1,
              explanation:
                "7 layers: physical → application. TCP/IP condenses to 4.",
            },
            {
              id: "cs-l14-q2",
              type: "mcq",
              prompt: "DNS translates",
              choices: [
                "IP to MAC",
                "domain names into IP addresses",
                "packets",
                "passwords",
              ],
              answerIndex: 1,
              explanation:
                "The internet's phonebook — www.example.com → 93.184.x.x.",
            },
            {
              id: "cs-l14-q3",
              type: "tf",
              prompt:
                "TCP provides reliable, ordered delivery; UDP is faster but doesn't guarantee delivery.",
              answer: true,
              explanation:
                "TCP for web/email; UDP for streaming/gaming.",
            },
            {
              id: "cs-l14-q4",
              type: "mcq",
              prompt: "An IPv4 address is",
              choices: [
                "64 bits",
                "32 bits, written as four 0–255 numbers",
                "a domain name",
                "hexadecimal only",
              ],
              answerIndex: 1,
              explanation:
                "e.g. 192.168.0.1 — IPv6 expands to 128 bits.",
            },
            {
              id: "cs-l14-q5",
              type: "short",
              prompt:
                "The wireless standard family for LANs (IEEE number).",
              answer: "802.11",
              keywords: ["802.11", "wifi", "wi-fi"],
              acceptable: ["802.11", "WiFi", "IEEE 802.11"],
              explanation:
                "IEEE 802.11 = Wi-Fi standards.",
            },
            {
              id: "cs-l14-q6",
              type: "short",
              prompt:
                "The TCP/IP layer handling routing and addressing = the ___ layer.",
              answer: "internet",
              keywords: ["internet", "network"],
              acceptable: ["internet layer", "network layer"],
              explanation:
                "Internet layer — equivalent to OSI layer 3.",
            },
          ],
        },
        {
          id: "cs-l15",
          title: "Network security: encryption, hashing, authentication",
          questions: [
            {
              id: "cs-l15-q1",
              type: "mcq",
              prompt: "Symmetric encryption uses",
              choices: [
                "two keys",
                "the same key to encrypt and decrypt",
                "no key",
                "public keys only",
              ],
              answerIndex: 1,
              explanation:
                "Fast but requires secure key exchange — e.g. AES.",
            },
            {
              id: "cs-l15-q2",
              type: "mcq",
              prompt: "Hashing passwords is preferred over encryption because hashing",
              choices: [
                "is reversible",
                "is one-way — the password can't be recovered from the hash",
                "is faster",
                "uses keys",
              ],
              answerIndex: 1,
              explanation:
                "One-way function; salting defeats rainbow tables.",
            },
            {
              id: "cs-l15-q3",
              type: "tf",
              prompt:
                "Two-factor authentication combines two different factor types, e.g. password + phone code.",
              answer: true,
              explanation:
                "Something you know / have / are — 2FA raises security.",
            },
            {
              id: "cs-l15-q4",
              type: "mcq",
              prompt: "Asymmetric (public-key) encryption solves",
              choices: [
                "speed",
                "secure communication without sharing a secret key first",
                "compression",
                "storage",
              ],
              answerIndex: 1,
              explanation:
                "Public key encrypts, private key decrypts — foundation of TLS.",
            },
            {
              id: "cs-l15-q5",
              type: "short",
              prompt:
                "Adding random data to a password before hashing = ___.",
              answer: "salting",
              keywords: ["salt"],
              acceptable: ["salting", "a salt"],
              explanation:
                "Salts make precomputed hash attacks useless.",
            },
            {
              id: "cs-l15-q6",
              type: "short",
              prompt:
                "A digital ___ binds a public key to an identity, issued by a CA.",
              answer: "certificate",
              keywords: ["certificate"],
              acceptable: ["certificate", "cert"],
              explanation:
                "Certificates prove you hold the public key you claim.",
            },
          ],
        },
        {
          id: "cs-l16",
          title: "Databases: normalisation, joins, ACID and NoSQL",
          questions: [
            {
              id: "cs-l16-q1",
              type: "mcq",
              prompt: "First normal form (1NF) requires",
              choices: [
                "foreign keys",
                "atomic values — no repeating groups in a field",
                "no nulls",
                "one table",
              ],
              answerIndex: 1,
              explanation:
                "Each cell holds a single value.",
            },
            {
              id: "cs-l16-q2",
              type: "mcq",
              prompt: "An INNER JOIN returns",
              choices: [
                "all rows from both tables",
                "only rows with matching keys in both tables",
                "all left rows",
                "nothing",
              ],
              answerIndex: 1,
              explanation:
                "INNER = intersection; LEFT keeps unmatched left rows.",
            },
            {
              id: "cs-l16-q3",
              type: "tf",
              prompt:
                "ACID transactions guarantee Atomicity, Consistency, Isolation and Durability.",
              answer: true,
              explanation:
                "e.g. bank transfers must be all-or-nothing.",
            },
            {
              id: "cs-l16-q4",
              type: "mcq",
              prompt: "A reason to choose NoSQL is",
              choices: [
                "SQL is broken",
                "flexible schema and horizontal scaling for huge unstructured data",
                "it needs no servers",
                "it's always faster",
              ],
              answerIndex: 1,
              explanation:
                "Document/key-value stores trade strict consistency for scale.",
            },
            {
              id: "cs-l16-q5",
              type: "short",
              prompt:
                "SQL aggregate returning the number of rows: ___.",
              answer: "COUNT",
              keywords: ["count"],
              acceptable: ["COUNT()", "count"],
              explanation:
                "COUNT, SUM, AVG, MAX, MIN.",
            },
            {
              id: "cs-l16-q6",
              type: "short",
              prompt:
                "Removing partial dependencies on part of a composite key gives ___ normal form (abbrev).",
              answer: "2NF",
              keywords: ["2nf", "second"],
              acceptable: ["2NF", "second normal form"],
              explanation:
                "2NF: 1NF + no partial dependency; 3NF removes transitive ones.",
            },
          ],
        },
      ],
    },
    {
      id: "cs-u3",
      code: "Theme A4",
      title: "Machine learning",
      level: "HL",
      lessons: [
        {
          id: "cs-l5",
          title: "Machine learning fundamentals",
          level: "HL",
          questions: [
            {
              id: "cs-l5-q1",
              type: "mcq",
              prompt:
                "Supervised learning requires",
              choices: [
                "unlabelled data",
                "labelled training data",
                "no data",
                "a reward signal only",
              ],
              answerIndex: 1,
              explanation:
                "Inputs are paired with correct outputs so the model learns the mapping.",
            },
            {
              id: "cs-l5-q2",
              type: "mcq",
              prompt:
                "Overfitting means a model",
              choices: [
                "performs well on new data",
                "memorises the training data and generalises poorly",
                "trains too fast",
                "uses too few features",
              ],
              answerIndex: 1,
              explanation:
                "It fits noise as well as signal → high training accuracy, poor test accuracy.",
            },
            {
              id: "cs-l5-q3",
              type: "mcq",
              prompt:
                "Clustering is an example of",
              choices: [
                "supervised learning",
                "unsupervised learning",
                "reinforcement learning",
                "classification",
              ],
              answerIndex: 1,
              explanation:
                "Unlabelled data is grouped by similarity — no target output is given.",
            },
            {
              id: "cs-l5-q4",
              type: "tf",
              prompt:
                "A training set and a test set should contain the same data for the most accurate evaluation.",
              answer: false,
              explanation:
                "The test set must be unseen data — otherwise you measure memorisation, not generalisation.",
            },
            {
              id: "cs-l5-q5",
              type: "short",
              prompt:
                "Distinguish between classification and regression tasks.",
              answer:
                "Classification predicts discrete categories; regression predicts continuous numeric values.",
              keywords: ["categor", "continuous", "numeric", "discrete"],
              explanation:
                "Spam/not-spam is classification; predicting a price is regression.",
            },
            {
              id: "cs-l5-q6",
              type: "short",
              prompt:
                "Give one ethical concern raised by training ML models on biased data.",
              answer:
                "The model can reproduce or amplify discrimination against groups underrepresented in the data.",
              keywords: ["bias", "discrimin", "fair", "represent"],
              explanation:
                "Garbage in, garbage out — biased labels produce biased decisions (hiring, loans, policing).",
            },
          ],
        },
        {
          id: "cs-l6",
          title: "Neural networks",
          level: "HL",
          questions: [
            {
              id: "cs-l6-q1",
              type: "mcq",
              prompt:
                "A neuron in a neural network computes",
              choices: [
                "a sum of weighted inputs passed through an activation function",
                "a SQL query",
                "a sorting algorithm",
                "a hash of the input",
              ],
              answerIndex: 0,
              explanation:
                "output = activation(Σ wᵢxᵢ + b).",
            },
            {
              id: "cs-l6-q2",
              type: "mcq",
              prompt:
                "Backpropagation is used to",
              choices: [
                "increase the learning rate",
                "adjust weights based on the error gradient",
                "label the data",
                "split the dataset",
              ],
              answerIndex: 1,
              explanation:
                "It propagates error backwards to update each weight via gradient descent.",
            },
            {
              id: "cs-l6-q3",
              type: "mcq",
              prompt:
                "The purpose of an activation function is to",
              choices: [
                "remove bias",
                "introduce non-linearity so the network can learn complex patterns",
                "speed up the CPU",
                "reduce the input size",
              ],
              answerIndex: 1,
              explanation:
                "Without non-linearity, any depth of layers collapses to a single linear map.",
            },
            {
              id: "cs-l6-q4",
              type: "tf",
              prompt:
                "The weights of a neural network are set manually by the programmer.",
              answer: false,
              explanation:
                "Weights are learned automatically during training via backpropagation.",
            },
            {
              id: "cs-l6-q5",
              type: "short",
              prompt:
                "Name the three layers found in a feed-forward neural network.",
              answer: "Input layer, hidden layer(s) and output layer.",
              keywords: ["input", "hidden", "output"],
              explanation:
                "Input receives features, hidden layers transform, output produces the prediction.",
            },
            {
              id: "cs-l6-q6",
              type: "short",
              prompt:
                "Explain what happens if a neural network's learning rate is set too high.",
              answer:
                "Training may overshoot the minimum and diverge or oscillate instead of converging.",
              keywords: ["overshoot", "diverge", "converge", "oscillat"],
              explanation:
                "Large steps bounce over the error minimum; too small makes training painfully slow.",
            },
          ],
        },
        {
          id: "cs-l17",
          title: "ML: training, testing and overfitting",
          questions: [
            {
              id: "cs-l17-q1",
              type: "mcq",
              prompt: "The training/test split exists to",
              choices: [
                "speed up training",
                "evaluate the model on unseen data, revealing generalisation",
                "reduce data",
                "label data",
              ],
              answerIndex: 1,
              explanation:
                "Typical splits: 80/20 — test performance estimates real-world skill.",
            },
            {
              id: "cs-l17-q2",
              type: "mcq",
              prompt: "Overfitting means the model",
              choices: [
                "is too simple",
                "memorises noise in the training set and fails on new data",
                "can't train",
                "generalises perfectly",
              ],
              answerIndex: 1,
              explanation:
                "High training accuracy, poor test accuracy = overfit.",
            },
            {
              id: "cs-l17-q3",
              type: "tf",
              prompt:
                "Regression predicts continuous values; classification predicts categories.",
              answer: true,
              explanation:
                "House price → regression; spam/not-spam → classification.",
            },
            {
              id: "cs-l17-q4",
              type: "mcq",
              prompt: "A remedy for overfitting is",
              choices: [
                "more layers always",
                "more data, regularisation or a simpler model",
                "longer training",
                "removing test data",
              ],
              answerIndex: 1,
              explanation:
                "Simplify the model or increase data — classic cures.",
            },
            {
              id: "cs-l17-q5",
              type: "short",
              prompt:
                "Data used to check a model's skill on unseen examples = the ___ set.",
              answer: "test",
              keywords: ["test", "testing"],
              acceptable: ["test set", "testing set"],
              explanation:
                "Held-out test set — never trained on.",
            },
            {
              id: "cs-l17-q6",
              type: "short",
              prompt:
                "Predicting a continuous output like temperature is called ___.",
              answer: "regression",
              keywords: ["regression"],
              acceptable: ["regression"],
              explanation:
                "Regression vs classification.",
            },
          ],
        },
        {
          id: "cs-l18",
          title: "ML algorithms: k-NN and decision trees",
          questions: [
            {
              id: "cs-l18-q1",
              type: "mcq",
              prompt: "k-nearest neighbours classifies a point by",
              choices: [
                "building a tree",
                "the majority class of its k closest training examples",
                "a linear equation",
                "random choice",
              ],
              answerIndex: 1,
              explanation:
                "Lazy learning — no model, just distance to neighbours.",
            },
            {
              id: "cs-l18-q2",
              type: "mcq",
              prompt: "A decision tree splits data by",
              choices: [
                "random cuts",
                "the feature giving the best separation (e.g. information gain)",
                "alphabetical order",
                "row order",
              ],
              answerIndex: 1,
              explanation:
                "Each node tests a feature; leaves hold predictions.",
            },
            {
              id: "cs-l18-q3",
              type: "tf",
              prompt:
                "Choosing k too small in k-NN makes the model sensitive to noise (overfitting).",
              answer: true,
              explanation:
                "k=1 memorises; larger k smooths the boundary.",
            },
            {
              id: "cs-l18-q4",
              type: "mcq",
              prompt: "Decision trees are valued because they",
              choices: [
                "are always most accurate",
                "are interpretable — you can read the decision rules",
                "need no data",
                "can't overfit",
              ],
              answerIndex: 1,
              explanation:
                "Readable rules — but deep trees overfit; pruning helps.",
            },
            {
              id: "cs-l18-q5",
              type: "short",
              prompt:
                "k-NN measures closeness usually with ___ distance.",
              answer: "Euclidean",
              keywords: ["euclidean", "distance"],
              acceptable: ["euclidean", "Euclidean distance"],
              explanation:
                "Euclidean distance in feature space.",
            },
            {
              id: "cs-l18-q6",
              type: "short",
              prompt:
                "The end nodes of a decision tree holding predictions are called ___.",
              answer: "leaves",
              keywords: ["leav", "leaf"],
              acceptable: ["leaf nodes", "leaves"],
              explanation:
                "Leaf nodes output the final class/value.",
            },
          ],
        },
        {
          id: "cs-l19",
          title: "HL: model evaluation metrics",
          level: "HL",
          questions: [
            {
              id: "cs-l19-q1",
              type: "mcq",
              prompt: "Precision measures",
              choices: [
                "all positives found",
                "the share of predicted positives that are truly positive",
                "overall accuracy",
                "speed",
              ],
              answerIndex: 1,
              explanation:
                "Precision = TP / (TP + FP).",
            },
            {
              id: "cs-l19-q2",
              type: "mcq",
              prompt: "Recall (sensitivity) measures",
              choices: [
                "precision",
                "the share of actual positives the model caught",
                "false positives",
                "accuracy",
              ],
              answerIndex: 1,
              explanation:
                "Recall = TP / (TP + FN) — vital in medical screening.",
            },
            {
              id: "cs-l19-q3",
              type: "tf",
              prompt:
                "On imbalanced data (e.g. 1% fraud), accuracy alone is misleading — a trivial 'always negative' model scores 99%.",
              answer: true,
              explanation:
                "Use precision, recall, F1 or a confusion matrix instead.",
            },
            {
              id: "cs-l19-q4",
              type: "mcq",
              prompt: "The F1 score is",
              choices: [
                "the average of precision and recall",
                "the harmonic mean of precision and recall",
                "accuracy squared",
                "a dataset",
              ],
              answerIndex: 1,
              explanation:
                "F1 = 2PR/(P+R) — balances the two metrics.",
            },
            {
              id: "cs-l19-q5",
              type: "short",
              prompt:
                "TP=40, FP=10. Precision = ___ (decimal).",
              answer: "0.8",
              keywords: ["0.8", "80"],
              acceptable: ["0.8", "80%", "4/5"],
              explanation:
                "40/(40+10) = 0.8.",
            },
            {
              id: "cs-l19-q6",
              type: "short",
              prompt:
                "A table showing TP, FP, FN, TN for a classifier = a ___ matrix.",
              answer: "confusion",
              keywords: ["confusion"],
              acceptable: ["confusion matrix"],
              explanation:
                "The confusion matrix breaks down all outcomes.",
            },
          ],
        },
      ],
    },
    {
      id: "cs-u4",
      code: "Themes B1 & B2",
      title: "Computational thinking and programming",
      lessons: [
        {
          id: "cs-l7",
          title: "Algorithms and computational thinking",
          questions: [
            {
              id: "cs-l7-q1",
              type: "mcq",
              prompt:
                "Binary search requires the input data to be",
              choices: [
                "unsorted",
                "sorted",
                "numeric only",
                "unique",
              ],
              answerIndex: 1,
              explanation:
                "It halves the search space each step — only possible on ordered data.",
            },
            {
              id: "cs-l7-q2",
              type: "mcq",
              prompt:
                "Abstraction in computational thinking means",
              choices: [
                "hiding irrelevant detail and focusing on essential features",
                "writing more code",
                "encrypting the algorithm",
                "copying code",
              ],
              answerIndex: 0,
              explanation:
                "Ignore the irrelevant, model the essential — e.g. a metro map vs geography.",
            },
            {
              id: "cs-l7-q3",
              type: "mcq",
              prompt:
                "The time complexity of binary search on n items is",
              choices: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
              answerIndex: 1,
              explanation:
                "Each comparison halves the remaining items → logarithmic.",
            },
            {
              id: "cs-l7-q4",
              type: "tf",
              prompt:
                "Decomposition breaks a large problem into smaller sub-problems that can be solved separately.",
              answer: true,
              explanation:
                "One of the cornerstones of computational thinking alongside abstraction and pattern recognition.",
            },
            {
              id: "cs-l7-q5",
              type: "short",
              prompt:
                "Trace linear search for value 7 in the list [4, 9, 7, 2]: how many comparisons?",
              answer: "3",
              acceptable: ["three"],
              keywords: ["3"],
              explanation: "Compare 4 (1), 9 (2), 7 (3) — found at index 2.",
            },
            {
              id: "cs-l7-q6",
              type: "short",
              prompt:
                "Write pseudocode to output the largest of two numbers A and B.",
              answer:
                "if A > B then output A else output B",
              acceptable: ["if a > b then print a else print b"],
              keywords: ["if", "else", "output", "a", "b"],
              explanation:
                "Compare and branch: IF A > B THEN OUTPUT A ELSE OUTPUT B END IF.",
            },
          ],
        },
        {
          id: "cs-l8",
          title: "Programming constructs and pseudocode",
          questions: [
            {
              id: "cs-l8-q1",
              type: "mcq",
              prompt:
                "The loop `for i = 1 to 5` executes its body",
              choices: ["4 times", "5 times", "6 times", "until a condition"],
              answerIndex: 1,
              explanation: "i takes 1,2,3,4,5 — five iterations.",
            },
            {
              id: "cs-l8-q2",
              type: "mcq",
              prompt:
                "An array index error (out of bounds) occurs when",
              choices: [
                "the array is sorted",
                "code accesses an index outside the array's range",
                "two variables have the same name",
                "a loop is too fast",
              ],
              answerIndex: 1,
              explanation:
                "Accessing element n in a size-n array (0-indexed) is a classic off-by-one error.",
            },
            {
              id: "cs-l8-q3",
              type: "mcq",
              prompt:
                "Which is a correct use of selection?",
              choices: [
                "Repeating a block 10 times",
                "Choosing between two paths with IF/ELSE based on a condition",
                "Storing data in an array",
                "Calling a function",
              ],
              answerIndex: 1,
              explanation:
                "Selection = branching on a condition; repetition = loops; functions are abstraction.",
            },
            {
              id: "cs-l8-q4",
              type: "tf",
              prompt:
                "A WHILE loop may execute zero times if its condition is false initially.",
              answer: true,
              explanation:
                "Pre-condition loop — unlike a REPEAT/UNTIL loop which runs at least once.",
            },
            {
              id: "cs-l8-q5",
              type: "short",
              prompt:
                "Write pseudocode to sum all elements of an array NUMS of length N.",
              answer:
                "total = 0; loop i from 0 to N-1; total = total + NUMS[i]; end loop",
              acceptable: ["sum = 0 for i in nums"],
              keywords: ["total", "loop", "sum", "nums"],
              explanation:
                "Initialise accumulator to 0, iterate and add each element.",
            },
            {
              id: "cs-l8-q6",
              type: "short",
              prompt:
                "Explain the difference between a variable and a constant.",
              answer:
                "A variable's value can change during execution; a constant is fixed once set.",
              keywords: ["change", "fixed", "value"],
              explanation:
                "Constants prevent accidental mutation and document intent.",
            },
          ],
        },
        {
          id: "cs-l20",
          title: "Big-O, searching and sorting",
          questions: [
            {
              id: "cs-l20-q1",
              type: "mcq",
              prompt: "Binary search on a sorted list of n items is",
              choices: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
              answerIndex: 1,
              explanation:
                "Halves the search space each step — but requires sorted data.",
            },
            {
              id: "cs-l20-q2",
              type: "mcq",
              prompt: "Bubble sort's worst-case complexity is",
              choices: ["O(n)", "O(log n)", "O(n²)", "O(n log n)"],
              answerIndex: 2,
              explanation:
                "Nested passes over the list — quadratic.",
            },
            {
              id: "cs-l20-q3",
              type: "tf",
              prompt:
                "Linear search works on unsorted data and is O(n).",
              answer: true,
              explanation:
                "Checks every element — simple but slow at scale.",
            },
            {
              id: "cs-l20-q4",
              type: "mcq",
              prompt: "Sorting [5,2,9,1] — after ONE bubble-sort pass (left-to-right swaps) you get",
              choices: [
                "[1,2,5,9]",
                "[2,5,1,9]",
                "[2,5,9,1]",
                "[9,5,2,1]",
              ],
              answerIndex: 1,
              explanation:
                "5↔2? swap→[2,5,9,1]… 9 then bubbles to the end: [2,5,1,9].",
            },
            {
              id: "cs-l20-q5",
              type: "short",
              prompt:
                "Binary search on 1,024 sorted items needs at most ___ comparisons.",
              answer: "10",
              keywords: ["10"],
              acceptable: ["10"],
              explanation:
                "log₂ 1024 = 10.",
            },
            {
              id: "cs-l20-q6",
              type: "short",
              prompt:
                "Merge sort's time complexity (big-O).",
              answer: "O(n log n)",
              keywords: ["n log n", "nlogn"],
              acceptable: ["O(nlogn)", "n log n"],
              explanation:
                "Divide-and-conquer gives n log n reliably.",
            },
          ],
        },
        {
          id: "cs-l21",
          title: "Pseudocode, arrays and string handling",
          questions: [
            {
              id: "cs-l21-q1",
              type: "mcq",
              prompt:
                "Trace: TOTAL ← 0; loop I from 0 to 4; TOTAL ← TOTAL + A[I]; end loop. With A = [2,4,6,8,10], TOTAL =",
              choices: ["10", "30", "20", "28"],
              answerIndex: 1,
              explanation:
                "2+4+6+8+10 = 30 — a standard trace.",
            },
            {
              id: "cs-l21-q2",
              type: "mcq",
              prompt: "A 2-D array A[3][4] holds",
              choices: ["7 elements", "12 elements", "34 elements", "1 element"],
              answerIndex: 1,
              explanation:
                "3 rows × 4 columns = 12 elements.",
            },
            {
              id: "cs-l21-q3",
              type: "tf",
              prompt:
                "In many languages, string indexes start at 0, so 'CAT'[1] is 'A'.",
              answer: true,
              explanation:
                "Zero-based indexing — a frequent exam trace trap.",
            },
            {
              id: "cs-l21-q4",
              type: "mcq",
              prompt: "Concatenation of 'IB' + 'OOST' produces",
              choices: ["IB OOST", "IBOOST", "OSTIB", "error"],
              answerIndex: 1,
              explanation:
                "Strings join end to end.",
            },
            {
              id: "cs-l21-q5",
              type: "short",
              prompt:
                "Trace: S ← 'HELLO'; output S[2] (0-indexed).",
              answer: "L",
              keywords: ["l"],
              acceptable: ["L"],
              explanation:
                "H=0, E=1, L=2.",
            },
            {
              id: "cs-l21-q6",
              type: "short",
              prompt:
                "Array A = [1,2,3]; after A[1] ← 9, the array is ___.",
              answer: "[1,9,3]",
              keywords: ["1,9,3", "1 9 3"],
              acceptable: ["1,9,3", "[1,9,3]", "1 9 3"],
              explanation:
                "Index 1 (second slot) becomes 9.",
            },
          ],
        },
        {
          id: "cs-l22",
          title: "Recursion, debugging and testing",
          questions: [
            {
              id: "cs-l22-q1",
              type: "mcq",
              prompt: "A recursive function must have",
              choices: [
                "a loop",
                "a base case that stops the recursion",
                "no parameters",
                "a global variable",
              ],
              answerIndex: 1,
              explanation:
                "No base case → infinite recursion → stack overflow.",
            },
            {
              id: "cs-l22-q2",
              type: "mcq",
              prompt: "factorial(3) computed recursively returns",
              choices: ["3", "6", "9", "1"],
              answerIndex: 1,
              explanation:
                "3 × 2 × 1 = 6.",
            },
            {
              id: "cs-l22-q3",
              type: "tf",
              prompt:
                "A syntax error is caught before running; a logic error runs but gives wrong results.",
              answer: true,
              explanation:
                "Syntax vs runtime vs logic — three error types to know.",
            },
            {
              id: "cs-l22-q4",
              type: "mcq",
              prompt: "Boundary (edge-case) testing checks",
              choices: [
                "the average case",
                "values at the extremes of valid input",
                "the GUI",
                "comments",
              ],
              answerIndex: 1,
              explanation:
                "Test 0, max values, empty input — where bugs hide.",
            },
            {
              id: "cs-l22-q5",
              type: "short",
              prompt:
                "Dry-running code line by line with a table of variables = a ___ table/trace.",
              answer: "trace",
              keywords: ["trace", "dry run", "walkthrough"],
              acceptable: ["trace table", "dry run"],
              explanation:
                "Trace tables expose logic errors manually.",
            },
            {
              id: "cs-l22-q6",
              type: "short",
              prompt:
                "In factorial(n): return n × factorial(n−1), the base case is n = ___ (number).",
              answer: "0",
              keywords: ["0", "1"],
              acceptable: ["1", "0"],
              explanation:
                "factorial(0) = 1 (or stop at 1) — ends recursion.",
            },
          ],
        },
      ],
    },
    {
      id: "cs-u5",
      code: "Themes B3 & B4",
      title: "OOP and abstract data types",
      lessons: [
        {
          id: "cs-l9",
          title: "Object-oriented programming",
          questions: [
            {
              id: "cs-l9-q1",
              type: "mcq",
              prompt:
                "Encapsulation means",
              choices: [
                "copying classes",
                "bundling data with methods and restricting direct access to fields",
                "inheritance only",
                "making all fields public",
              ],
              answerIndex: 1,
              explanation:
                "Data hiding via private fields + public getters/setters protects object state.",
            },
            {
              id: "cs-l9-q2",
              type: "mcq",
              prompt:
                "A class is to an object as",
              choices: [
                "an object is to a method",
                "a blueprint is to a building",
                "a variable is to a value",
                "a loop is to a condition",
              ],
              answerIndex: 1,
              explanation:
                "The class defines the template; objects are its instances.",
            },
            {
              id: "cs-l9-q3",
              type: "mcq",
              prompt:
                "Polymorphism lets you",
              choices: [
                "use a subclass object wherever its parent type is expected, with overridden behaviour",
                "create two classes with the same name",
                "skip constructors",
                "have multiple return types always",
              ],
              answerIndex: 0,
              explanation:
                "Same interface, different implementations — e.g. Shape.draw() vs Circle.draw().",
            },
            {
              id: "cs-l9-q4",
              type: "tf",
              prompt:
                "A subclass inherits all public and protected members of its superclass.",
              answer: true,
              explanation:
                "Inheritance passes accessible fields/methods down the hierarchy.",
            },
            {
              id: "cs-l9-q5",
              type: "short",
              prompt:
                "Define a constructor.",
              answer:
                "A special method that initialises a new object's state when it is created.",
              keywords: ["initiali", "creat", "object", "new"],
              explanation:
                "Runs on `new ClassName(...)`, setting up fields to valid initial values.",
            },
            {
              id: "cs-l9-q6",
              type: "short",
              prompt:
                "Give one benefit of using inheritance in a program.",
              answer:
                "Code reuse — shared behaviour is defined once in the superclass rather than duplicated.",
              keywords: ["reuse", "duplicat", "share"],
              explanation:
                "Subclasses get common functionality free; changes propagate from the parent.",
            },
          ],
        },
        {
          id: "cs-l10",
          title: "Abstract data types",
          level: "HL",
          questions: [
            {
              id: "cs-l10-q1",
              type: "mcq",
              prompt:
                "A stack processes items in",
              choices: [
                "FIFO order",
                "LIFO order",
                "random order",
                "sorted order",
              ],
              answerIndex: 1,
              explanation:
                "Last in, first out — push and pop at the same end (e.g. call stack).",
            },
            {
              id: "cs-l10-q2",
              type: "mcq",
              prompt:
                "A queue's enqueue and dequeue operations happen",
              choices: [
                "at the same end",
                "at opposite ends — enqueue at rear, dequeue at front",
                "at the middle",
                "only when empty",
              ],
              answerIndex: 1,
              explanation:
                "FIFO: join at the back, leave from the front.",
            },
            {
              id: "cs-l10-q3",
              type: "mcq",
              prompt:
                "A linked list node typically contains",
              choices: [
                "only data",
                "data plus a reference (pointer) to the next node",
                "an index",
                "a hash key",
              ],
              answerIndex: 1,
              explanation:
                "Nodes chain via pointers — allowing O(1) insertion/removal with a reference.",
            },
            {
              id: "cs-l10-q4",
              type: "tf",
              prompt:
                "In a binary search tree, every left subtree contains values greater than its parent node.",
              answer: false,
              explanation:
                "Left subtree values are SMALLER; right subtree values are larger.",
            },
            {
              id: "cs-l10-q5",
              type: "short",
              prompt:
                "Give one real-world application of a stack.",
              answer:
                "Undo/redo in editors, or the function call stack.",
              keywords: ["undo", "call", "browser", "back"],
              explanation:
                "Undo history, back button, call stack — all LIFO structures.",
            },
            {
              id: "cs-l10-q6",
              type: "short",
              prompt:
                "Explain why an ADT is called 'abstract'.",
              answer:
                "It is defined by operations and behaviour, not by a specific implementation.",
              keywords: ["implementation", "operations", "behaviour", "interface"],
              explanation:
                "A stack can be built on an array or a linked list — the interface is what matters.",
            },
          ],
        },
        {
          id: "cs-l23",
          title: "OOP: classes, inheritance, polymorphism, UML",
          questions: [
            {
              id: "cs-l23-q1",
              type: "mcq",
              prompt: "A class is",
              choices: [
                "an object",
                "a blueprint defining attributes and methods for objects",
                "a variable",
                "a loop",
              ],
              answerIndex: 1,
              explanation:
                "Objects are instances of classes.",
            },
            {
              id: "cs-l23-q2",
              type: "mcq",
              prompt: "Inheritance lets a subclass",
              choices: [
                "hide data",
                "reuse and extend a parent class's attributes and methods",
                "run faster",
                "avoid errors",
              ],
              answerIndex: 1,
              explanation:
                "Dog extends Animal — 'is-a' relationship.",
            },
            {
              id: "cs-l23-q3",
              type: "tf",
              prompt:
                "Polymorphism means different classes can respond to the same method call differently (e.g. draw() on Circle vs Square).",
              answer: true,
              explanation:
                "One interface, many implementations.",
            },
            {
              id: "cs-l23-q4",
              type: "mcq",
              prompt: "In UML, a solid line with a hollow triangle arrowhead shows",
              choices: [
                "association",
                "inheritance (generalisation)",
                "composition",
                "a comment",
              ],
              answerIndex: 1,
              explanation:
                "Hollow triangle → parent = 'is-a' inheritance arrow.",
            },
            {
              id: "cs-l23-q5",
              type: "short",
              prompt:
                "Hiding internal state behind methods is called ___.",
              answer: "encapsulation",
              keywords: ["encapsulat"],
              acceptable: ["encapsulation"],
              explanation:
                "Encapsulation — private fields, public methods.",
            },
            {
              id: "cs-l23-q6",
              type: "short",
              prompt:
                "The special method that runs when an object is created = the ___.",
              answer: "constructor",
              keywords: ["constructor"],
              acceptable: ["constructor", "init", "__init__"],
              explanation:
                "Constructor (__init__ in Python).",
            },
          ],
        },
        {
          id: "cs-l24",
          title: "Data structures: stacks, queues, linked lists",
          questions: [
            {
              id: "cs-l24-q1",
              type: "mcq",
              prompt: "A stack is accessed in",
              choices: ["FIFO order", "LIFO order", "random order", "sorted order"],
              answerIndex: 1,
              explanation:
                "Last In, First Out — push/pop at the top.",
            },
            {
              id: "cs-l24-q2",
              type: "mcq",
              prompt: "A queue's removal operation happens at",
              choices: ["the top", "the front (FIFO)", "the middle", "random"],
              answerIndex: 1,
              explanation:
                "Enqueue at rear, dequeue at front.",
            },
            {
              id: "cs-l24-q3",
              type: "tf",
              prompt:
                "A linked list stores elements in nodes, each holding data plus a pointer to the next node.",
              answer: true,
              explanation:
                "No contiguous memory needed — insertions are cheap.",
            },
            {
              id: "cs-l24-q4",
              type: "mcq",
              prompt: "Undo functionality in an editor is typically implemented with a",
              choices: ["queue", "stack", "tree", "graph"],
              answerIndex: 1,
              explanation:
                "Most recent action pops first — LIFO.",
            },
            {
              id: "cs-l24-q5",
              type: "short",
              prompt:
                "Removing the top item of a stack is called ___.",
              answer: "pop",
              keywords: ["pop"],
              acceptable: ["pop", "popping"],
              explanation:
                "push / pop.",
            },
            {
              id: "cs-l24-q6",
              type: "short",
              prompt:
                "The pointer in the last node of a singly linked list points to ___.",
              answer: "null",
              keywords: ["null", "none", "nothing"],
              acceptable: ["null", "None", "nil", "nothing"],
              explanation:
                "Null marks the end of the list.",
            },
          ],
        },
        {
          id: "cs-l25",
          title: "HL: trees and graphs",
          level: "HL",
          questions: [
            {
              id: "cs-l25-q1",
              type: "mcq",
              prompt: "In a binary search tree, smaller values go",
              choices: [
                "to the right",
                "to the left subtree",
                "to the root",
                "anywhere",
              ],
              answerIndex: 1,
              explanation:
                "Left < node < right — enabling O(log n) search.",
            },
            {
              id: "cs-l25-q2",
              type: "mcq",
              prompt: "An in-order traversal of a BST visits nodes in",
              choices: [
                "random order",
                "ascending sorted order",
                "level order",
                "reverse",
              ],
              answerIndex: 1,
              explanation:
                "Left → root → right = sorted output.",
            },
            {
              id: "cs-l25-q3",
              type: "tf",
              prompt:
                "A graph can contain cycles; a tree is a connected graph with no cycles.",
              answer: true,
              explanation:
                "Trees are acyclic by definition.",
            },
            {
              id: "cs-l25-q4",
              type: "mcq",
              prompt: "Breadth-first search explores a graph",
              choices: [
                "depth first",
                "level by level using a queue",
                "randomly",
                "using a stack",
              ],
              answerIndex: 1,
              explanation:
                "BFS = queue; DFS = stack/recursion.",
            },
            {
              id: "cs-l25-q5",
              type: "short",
              prompt:
                "Traversal order visiting root first, then subtrees = ___-order.",
              answer: "pre",
              keywords: ["pre", "preorder"],
              acceptable: ["pre-order", "preorder"],
              explanation:
                "Pre-order: root → left → right.",
            },
            {
              id: "cs-l25-q6",
              type: "short",
              prompt:
                "The top node of a tree is called the ___.",
              answer: "root",
              keywords: ["root"],
              acceptable: ["root node"],
              explanation:
                "The root — every other node descends from it.",
            },
          ],
        },
      ],
    },
  ],
};
