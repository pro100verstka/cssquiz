import './App.css'
import {Title} from "@/entities/question/ui/Title";
import {Progress} from "@/entities/question/ui/Progress";
import {questions} from "@/data/questions";
import {Preview} from "@/entities/question/ui/Preview";
import {useReducer} from "react";
import Option from "@/entities/question/ui/Option";
import {Button} from "@/shared/ui/Button";
import {Result} from "@/entities/question/ui/Result";
import {Footer} from "@/shared/ui/Footer";
import type {Question} from "@/entities/question/model/types";
import {initialState, reducer} from "@/entities/question/model/reducer";

function App() {
  function getRandomQuestions(count: number): Question[] {
    return [...questions].sort(() => Math.random() - 0.5).slice(0, count);
  }

  const [state, dispatch] = useReducer(reducer, getRandomQuestions(10), initialState);

  const question = state.questions[state.current];
  const isCorrect = state.selected === question.correct

  if(state.finished) {
    return (
      <div className="app">
        <Title text="CSS без зубрёжки" className="app-title"/>
        <h2>Тест завершён 🎉</h2>
        <p> Ты ответил правильно на {state.score} из {state.questions.length} вопросов.</p>
        <Button onClick={() => dispatch({type: "RESTART", payload: getRandomQuestions(10)})}>
          Пройти еще раз
        </Button>
        <Footer/>
      </div>
    )
  }
  return (
    <div className="app">
      <Title text="CSS без зубрёжки" className="app-title"/>
      <Progress current={state.current + 1} total={state.questions.length} />
      <h2>{question.title}</h2>
      <Preview style={question.previewStyle} content={question.previewContent}/>

      <ul className="app-options">
        {question.options.map((opt, index) => {
          let stateType: "default" | "selected" | "correct" |"wrong" = "default"
          if(state.selected === index) stateType = "selected"
          if(state.isChecked && index === question.correct) stateType = "correct"
          if(state.isChecked && state.selected === index && !isCorrect) stateType = "wrong"

          return (
            <Option text={opt} state={stateType} onClick={() => !state.isChecked && dispatch({type: "SELECT", payload: index})}/>
          )
        })}
      </ul>

      {!state.isChecked ? (
        <Button disabled={state.selected === null} onClick={() => dispatch({type: "CHECK"})}>Проверить себя</Button>
      ) : (
        <>
          <Result correct={isCorrect} explanation={question.explanation}/>
          <Button onClick={() => dispatch({type: "NEXT"})}>
            {state.current + 1 === state.questions.length ? "Завершить тест" : "Следующий вопрос"}
          </Button>
        </>
      )}

      <Footer/>
    </div>
  )
}

export default App
