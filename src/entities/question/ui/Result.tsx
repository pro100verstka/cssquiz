type ResultPropsType = {
  correct: boolean
  explanation: string
}

export const Result = ({correct, explanation}: ResultPropsType) => {
  return (
    <div className="result">
      <p className={correct ? "succes" : "error"}>{correct ? "✅ Верно!" : "❌ Не совсем"}</p>
      <p className="explanation">💡 {explanation}</p>
    </div>
  );
};
