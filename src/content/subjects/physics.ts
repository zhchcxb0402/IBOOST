import type { Subject } from "../types";

export const physics: Subject = {
  slug: "physics",
  name: "Physics",
  short: "Physics",
  color: "#CE82FF",
  emoji: "⚛️",
  group: "Sciences",
  levels: ["SL", "HL"],
  comingSoon: true,
  description:
    "Space, time & motion; the particulate nature of matter; wave behaviour; fields; nuclear & quantum physics.",
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
      url: "https://www.thinkib.net/physics",
      note: "Teacher-written lessons and IA guidance",
    },
  ],
  units: [],
};
