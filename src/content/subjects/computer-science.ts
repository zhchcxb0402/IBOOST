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
  resources: [
    {
      name: "IB Official",
      url: "https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/",
      note: "Subject brief and syllabus outline",
    },
    {
      name: "RevisionDojo",
      url: "https://www.revisiondojo.com/",
      note: "Topic questions with worked solutions",
    },
    {
      name: "Clastify",
      url: "https://www.clastify.com/",
      note: "Past papers and exemplar work",
    },
    {
      name: "Nail IB",
      url: "https://nailib.com/",
      note: "Past-paper practice and study guides",
    },
  ],
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
      ],
    },
  ],
};
