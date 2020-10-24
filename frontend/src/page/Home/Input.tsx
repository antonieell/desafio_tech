import React, { useState } from "react";
import {InputWrapper } from "./styles";
import {setPost} from "../../services/api";
import {AiOutlineSend} from 'react-icons/ai'


const Input: React.FC = () => {
  const [content, setContent] = useState("");
  const sentMenssage = async () => {
    setContent("");
    await setPost({ content });
  };
  return (
    <InputWrapper>
      <input
        placeholder="No que você está pensando ?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={sentMenssage}>
        <AiOutlineSend size={32} color="#0b0" />
      </button>
    </InputWrapper>
  );
};

export default Input;
