import React, { useState, Dispatch, SetStateAction } from "react";
import { setPost, Post } from "../../services/api";
import Input from "../../components/Input";

type UpdatePosts = {
  setPostState: Dispatch<SetStateAction<Post[] | undefined>>;
};

const InputContainer: React.FC<UpdatePosts> = ({ setPostState }) => {
  const [content, setContent] = useState("");

  const sentPost = async () => {
    setContent("");
    const data = await setPost({ content });
    //Update post update
    if (data !== undefined) {
      setPostState((prevState) => (prevState ? [...prevState, data] : [data]));
    }
  };

  return (
    <Input state={content} setState={setContent} onClick={sentPost}/>
  );
};



export default InputContainer;
