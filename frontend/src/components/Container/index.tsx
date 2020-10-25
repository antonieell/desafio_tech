import React from 'react';
import {Container} from './style'

interface ContainerProps {
  className?: string;
  onClick?: () => void;
}
const ContainerComponent: React.FC<ContainerProps> = ({ children, className, onClick }) => {
  return <Container onClick={onClick} className={className}>{children}</Container>;
};

export default ContainerComponent;
