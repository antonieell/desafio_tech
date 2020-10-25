import React from "react";
import {Wrapper} from './style'

const WrapperPostsHOC: React.FC = ({children}) => {
  return <Wrapper> {children}</Wrapper>;
};

export default WrapperPostsHOC;
