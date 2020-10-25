import React from "react";
import Container from "../../components/Container/";
import Title from "../../components/Title/";
import { Wrapper } from "./styles";
import { Post as PostInterface } from "../../services/api";
import Post from "../../components/Post/";

type postsProps = {
  posts: PostInterface|PostInterface[]|undefined
}
const Posts: React.FC<postsProps> = ({posts}) => {
  if(!Array.isArray(posts)){
    return (<>
      {posts ? (
        <Wrapper>
            <Post key={posts._id} postContent={posts} />
        </Wrapper>
      ) : (
        <Container>
          <Title>Carregando..</Title>
        </Container>
      )}
    </>)
  }

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



export default Posts;
