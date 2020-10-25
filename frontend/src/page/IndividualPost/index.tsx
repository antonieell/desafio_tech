import React, {useState, useEffect} from 'react'
import Container from "../../components/Container/";
import Title from "../../components/Title/"
import Posts from './Posts';
import Input from './Input';
import { getPosts, Post as PostInterface } from "../../services/api";
import {useParams} from 'react-router-dom';

const Post= () => {
  const [posts, setPosts] = useState<PostInterface[] | undefined>();
  const {id}= useParams()
console.log(id)
  useEffect(() => {
    (async () => {
      const data = await getPosts();
      setPosts(data);
    })();
  }, []);
  return (
    <>
      <Title>Post individual</Title>
      <Container className="header">
        <Title>Ultimos Posts @Techagrbook</Title>
      </Container>
      <Posts posts={posts}/>
      <Input setPostState={setPosts}/>
    </>
  );
};

export default Post;
