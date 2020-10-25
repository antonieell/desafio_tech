import React from "react";
import Container from "../../components/Container/";
import Title from "../../components/Title/";
import { Post as PostInterface, Comment } from "../../services/api";
import { useHistory } from "react-router-dom";

const Post: React.FC<{
  postContent: PostInterface | Comment;
  actionOnClick: () => void;
}> = ({ postContent, actionOnClick }) => {
  return (
    <Container className="clicable" onClick={() => actionOnClick()}>
      <Title textAlign="left">{postContent.content}</Title>
    </Container>
  );
};

export default Post;
