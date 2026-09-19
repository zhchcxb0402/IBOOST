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
      type: "fill";
      prompt: string;
      answer: string;
      acceptable?: string[];
      explanation: string;
    };

export type Lesson = { id: string; title: string; questions: Question[] };
export type Unit = { id: string; title: string; lessons: Lesson[] };
export type Subject = {
  slug: string;
  name: string;
  short: string;
  color: string;
  emoji: string;
  units: Unit[];
};
export type Card = { id: string; front: string; back: string };
export type Deck = {
  id: string;
  subjectSlug: string;
  title: string;
  cards: Card[];
};
