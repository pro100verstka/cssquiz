import type {ReactNode, CSSProperties} from "react";

type PreviewPropsType = {
  style?: CSSProperties
  content?: ReactNode
}

export const Preview = ({style, content}: PreviewPropsType) => {
  return (
    <div className="app-preview">
      <div style={style}>{content}</div>
    </div>
  );
};
