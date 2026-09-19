import type { Subject } from "../types";

export const chemistry: Subject = {
  slug: "chemistry",
  name: "Chemistry",
  short: "Chem",
  color: "#FF9600",
  emoji: "🧪",
  group: "Sciences",
  levels: ["SL", "HL"],
  comingSoon: true,
  description:
    "Models of the particulate nature of matter, bonding, classification, and what drives chemical change.",
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
      name: "InThinking",
      url: "https://www.thinkib.net/chemistry",
      note: "Teacher-written lessons and IA guidance",
    },
  ],
  units: [],
};
