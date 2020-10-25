import React from "react";

import Container from "../../components/Container/";
import Title from "../../components/Title/";
import Wrapper  from "../../components/WrapperPosts";
import { Comment as CommentInterface } from "../../services/api";
import Post from "../../components/Post/";

type CommentListProps = {
  comments: CommentInterface[] | undefined;
};

const CommentList: React.FC<CommentListProps> = ({comments}) => {
  return (
    <>
      {comments ? (
        <Wrapper>
          {comments.map((value, idx) => (
            <Post
              key={idx}
              postContent={value}
            />
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

export default CommentList;
