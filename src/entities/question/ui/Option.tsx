type OptionPropsType = {
  text: string
  onClick: () => void
  state?: "default" | "selected" | "correct" | "wrong"
}

export const Option = ({text, onClick, state}: OptionPropsType) => {
  return (
    <li className={`option ${state}`} onClick={onClick}>{text}</li>
  );
};

export default Option;