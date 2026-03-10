import type {ReactNode, CSSProperties} from "react";

export type Question = {
  id: number;
  title: string;
  previewStyle: CSSProperties;
  previewContent: ReactNode;
  options: string[];
  correct: number;
  explanation: string;
};

export type State = {
  current: number
  selected: number | null
  isChecked: boolean
  score: number
  finished: boolean
  questions: Question[]
}

export type Action =
  | {type: "SELECT"; payload: number}
  | {type: "CHECK"}
  | {type: "NEXT"}
  | {type: "RESTART"; payload: Question[]}