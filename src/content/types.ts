export type Level = "SL" | "HL";

export type Question =
  | {
      id: string;
      type: "mcq";
      prompt: string;
      choices: string[];
      answerIndex: number;
      explanation: string;
    }
  | {
      id: string;
      type: "tf";
      prompt: string;
      answer: boolean;
      explanation: string;
    }
  | {
      id: string;
      type: "short";
      prompt: string;
      answer: string;
      keywords: string[];
      acceptable?: string[];
      explanation: string;
    };

export type Lesson = {
  id: string;
  title: string;
  level?: Level /* "HL" = HL-only */;
  questions: Question[];
};
export type Unit = {
  id: string;
  title: string;
  code?: string /* e.g. "Topic 1", "Unit 3" */;
  level?: Level;
  lessons: Lesson[];
};
export type Resource = {
  name: "InThinking" | "RevisionDojo" | "Clastify" | "Nail IB" | "IB Official";
  url: string;
  note: string;
};
export type Subject = {
  slug: string;
  name: string;
  short: string;
  color: string;
  emoji: string;
  group: string;
  levels: Level[];
  comingSoon?: boolean;
  description: string;
  resources: Resource[];
  units: Unit[];
};
export type Card = { id: string; front: string; back: string };
export type Deck = {
  id: string;
  subjectSlug: string;
  title: string;
  cards: Card[];
};
