import React from 'react';
import {Container} from './style'

const ContainerComponent: React.FC<{ className?: string }> = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default ContainerComponent;
