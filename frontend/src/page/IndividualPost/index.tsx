import React, { useState, useEffect } from "react";
import Container from "../../components/Container/";
import Title from "../../components/Title/";
import Input from "../../components/Input";
import { getCommentsById, Comment, setCommentsById } from "../../services/api";
import { useParams} from "react-router-dom";
import CommentList from "./Comments";

const PostById = () => {
  const [commentList, setCommentList] = useState<Comment[] | undefined>([]);
  const [commentContent, setCommentContent] = useState();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getCommentsById(id);
      setCommentList(data);
    })();
  }, [id]);

  const submitContent = async () => {
    const sendCommentContent: Comment = { content: commentContent };
    console.log(sendCommentContent);
    const resp = await setCommentsById(id, sendCommentContent);
    console.log(resp);
    if (resp) {
      if (!resp.err) {
        setCommentList((prev) => {
          if (prev) return [resp, ...prev];
        });
      }
    }
  };

  return (
    <>
      <Title>Post de id: {id}</Title>
      <Container className="header">
        <Title>Ultimos Posts @Techagrbook</Title>
      </Container>
      <Title>Comentários: </Title>
      <CommentList comments={commentList} />
      <Input
        setState={setCommentContent}
        state={commentContent}
        onClick={submitContent}
      />
    </>
  );
};

export default PostById;
