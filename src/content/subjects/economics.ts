import type { Subject } from "../types";

export const economics: Subject = {
  slug: "economics",
  name: "Economics",
  short: "Econ",
  color: "#16A34A",
  emoji: "📈",
  group: "Individuals and societies",
  levels: ["SL", "HL"],
  comingSoon: true,
  description:
    "Microeconomics, macroeconomics and the global economy — with the 9 key concepts threaded throughout.",
  resources: [
    {
      name: "IB Official",
      url: "https://www.ibo.org/programmes/diploma-programme/curriculum/individuals-and-societies/",
      note: "Subject brief and syllabus outline",
    },
    {
      name: "RevisionDojo",
      url: "https://www.revisiondojo.com/",
      note: "Topic questions with worked solutions",
    },
    {
      name: "InThinking",
      url: "https://www.thinkib.net/economics",
      note: "Teacher-written lessons and IA guidance",
    },
  ],
  units: [],
};
