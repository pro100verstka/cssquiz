import type {Action, State} from "@/entities/question/model/types";

export const initialState = (questions: State["questions"]): State => ({
  current: 0,
  selected: null,
  isChecked: false,
  score: 0,
  finished: false,
  questions
})

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SELECT":
      return {...state, selected: action.payload}

    case "CHECK":
      return {...state, isChecked: true, score: state.selected === state.questions[state.current].correct ? state.score + 1 : state.score}
    case "NEXT": {
      const isLast = state.current + 1 === state.questions.length
      return isLast
      ? {...state, finished: true}
        : {...state, current: state.current + 1, selected: null, isChecked:false}
    }
    case "RESTART":
      return initialState(action.payload)

    default:
      return state
  }



}