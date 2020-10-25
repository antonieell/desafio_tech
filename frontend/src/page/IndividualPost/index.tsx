import React, { useState, useEffect } from "react";
import Container from "../../components/Container/";
import Title from "../../components/Title/";
import Input from "../../components/Input";
import { getCommentsById, Comment } from "../../services/api";
import { useParams, useLocation } from "react-router-dom";
import CommentList from "./Comments";

const PostById = () => {
  const [commentList, setCommentList] = useState<Comment[] | undefined>([]);
  const [commentContent, setCommentContent] = useState();

  const { id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    (async () => {
      const data = await getCommentsById(id);
      setCommentList(data);
      console.log("Comentários:", commentList);
    })();
  }, [id, state.postContent, commentList]);

  return (
    <>
      <Title>Post de id: {id}</Title>
      <Container className="header">
        <Title>Ultimos Posts @Techagrbook</Title>
      </Container>
        <Title>Comentários: </Title>
        <CommentList comments={commentList}/>
      <Input
        setState={setCommentContent}
        state={commentContent}
        onClick={() => {
          console.log("Comentario");
        }}
      />
    </>
  );
};

export default PostById;
