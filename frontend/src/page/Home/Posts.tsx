import React from "react";
import Container from "../../components/Container/";
import Title from "../../components/Title/";
import { Wrapper } from "./styles";
import { Post as PostInterface } from "../../services/api";
import Post from '../../components/Post'
import {useHistory} from "react-router-dom";

type postsProps = {
  posts: PostInterface[]|undefined
}

const Posts: React.FC<postsProps> = ({posts}) => {
  const history = useHistory()

  const pushToPost = (postId: string | undefined, state: any) => {
    if (postId) history.push({ pathname: `/post/${postId}`, state });
  };
  return (
    <>
      {posts ? (
        <Wrapper>
          {posts.map((value, idx) => (
            <Post actionOnClick={() => pushToPost(value._id, value)} key={idx} postContent={value} />
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
