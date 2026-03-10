type TitlePropsType = {
  text: string
  className?: string
}

export const Title = ({text, className}: TitlePropsType) => {
  return (
    <h1 className={className}>{text}</h1>
  );
};
