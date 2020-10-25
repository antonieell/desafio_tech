import React from 'react'
import {InputWrapper} from './style'
import { AiOutlineSend } from "react-icons/ai";

//state e setState props podem ser utilizadas para
//caso necessário poder trabalahr o estado no component acima
interface InputProps {
  state:  any;
  setState: React.SetStateAction<any>;
  onClick: () => void;
}
const Input: React.FC<InputProps> = ({state, setState, onClick}) => {
  const handleState = (callback: any) => {
    setState("")
    callback()
  }
  return (
    <InputWrapper>
      <input
        placeholder="No que você está pensando ?"
        value={state}
        onChange={(e) =>setState(e.target.value)}
      />
      <button onClick={() => handleState(onClick)}>
        <AiOutlineSend size={32} color="#0b0" />
      </button>
    </InputWrapper>
  );
};
export default Input
