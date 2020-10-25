import React from "react";
import Container from "../../components/Container/";
import Title from "../../components/Title/";
import { Post as PostInterface, Comment } from "../../services/api";

const Post: React.FC<{
  postContent: PostInterface | Comment;
  actionOnClick?: () => void;
}> = ({ postContent, actionOnClick }) => {
  return (
    <Container className="clicable" onClick={() => actionOnClick && actionOnClick()}>
      <Title textAlign="left">{postContent.content}</Title>
    </Container>
  );
};

export const CommentCard: React.FC<{
  commentContent: Comment;
  actionOnClick?: () => void;
}> = ({ commentContent, actionOnClick }) => {
  return (
    <Container className="clicable" onClick={() => actionOnClick && actionOnClick()}>
      <Title textAlign="left">{commentContent.comment}</Title>
    </Container>
  );
};

export default Post;
