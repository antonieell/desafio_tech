import React, {CSSProperties} from "react";

interface TitleProps extends CSSProperties {
}

const Title: React.FC<TitleProps> = ({ children, textAlign = 'center'}) => {
  return <h1 style={{ textAlign }}>{children}</h1>;
};

export default Title;
