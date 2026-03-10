type ProgressPropsType = {
  current: number
  total: number
}

export const Progress = ({current, total}: ProgressPropsType) => {
  return (
    <p className="app-progress"> Вопрос {current} из {total}</p>
  );
};
