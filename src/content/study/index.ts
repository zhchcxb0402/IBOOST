import type { StudyNotes } from "../types";
import { physicsStudy } from "./physics";
import { chemistryStudy } from "./chemistry";
import { economicsStudy } from "./economics";

export const studyBySubject: Record<string, StudyNotes> = {
  physics: physicsStudy,
  chemistry: chemistryStudy,
  economics: economicsStudy,
};
