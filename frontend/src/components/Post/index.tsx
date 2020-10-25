import React from "react";
import Container from "../../components/Container/";
import Title from "../../components/Title/";
import { Post as PostInterface } from "../../services/api";
import {useHistory} from "react-router-dom";

const Post: React.FC<{ postContent: PostInterface }> = ({ postContent }) => {
  const history = useHistory()
  const pushToPost = (postId: string|undefined) => {
    if(postId) history.push(`/post/${postId}`)
  }
  return (
    <Container className="clicable" onClick={() => pushToPost(postContent._id)}>
      <Title textAlign="left">{postContent.content}</Title>
    </Container>
  );
};

export default Post;
