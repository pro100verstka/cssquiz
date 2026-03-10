type ButtonPropsType = {
  children: string
  onClick: () => void
  disabled?: boolean
}

export const Button = ({children, onClick, disabled}: ButtonPropsType) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>{children}</button>
  );
};
