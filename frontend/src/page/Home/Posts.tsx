import React, { useEffect, useState } from "react";
import Container from "../../components/Container/";
import Title from "../../components/Title/";
import { getPosts, Post as PostInterface } from "../../services/api";
import { Wrapper } from "./styles";

const Posts = () => {
  const [posts, setPosts] = useState<PostInterface[] | undefined>();
  useEffect(() => {
    (async () => {
      const data = await getPosts();
      setPosts(data);
    })();
  }, []);
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
    <Container key={postContent.__id}>
      <Title textAlign="left">{postContent.content}</Title>
    </Container>
  );
};


export default Posts;
