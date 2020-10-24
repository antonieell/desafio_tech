import React from "react";
import Container from "../../components/Container/";
import Title from "../../components/Title/";

const Posts = () => {
  return (
    <>
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
};

const Post = () => {
  return (
    <Container>
      <Title>Ultimos Posts @Techagrbook</Title>
    </Container>
  );
};
export default Posts;
