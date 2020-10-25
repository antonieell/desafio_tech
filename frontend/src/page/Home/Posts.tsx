import React, { useEffect, useState } from "react";
import Container from "../../components/Container/";
import Title from "../../components/Title/";
import { Wrapper } from "./styles";
import { Post as PostInterface } from "../../services/api";
type postsProps = {
  posts: PostInterface[]|undefined
}
const Posts: React.FC<postsProps> = ({posts}) => {
  return (
    <>
      {posts ? (
        <Wrapper>
          {posts.map((value, idx) => (
            <Post key={idx} postContent={value} />
          ))}
        </Wrapper>
      ) : (
        <Container>
          <Title>Carregando..</Title>
        </Container>
      )}
    </>
  );
};

const Post: React.FC<{ postContent: PostInterface }> = ({ postContent }) => {
  return (
    <Container className="clicable" key={postContent.__id}>
      <Title textAlign="left">{postContent.content}</Title>
    </Container>
  );
};


export default Posts;
