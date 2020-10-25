import React, {useState, useEffect} from 'react'
import Container from "../../components/Container/";
import Title from "../../components/Title/"
import Posts from './Posts';
import Input from './Input';
import { getPosts, Post as PostInterface } from "../../services/api";

const Home = () => {
  const [posts, setPosts] = useState<PostInterface[] | undefined>();
  useEffect(() => {
    (async () => {
      const data = await getPosts();
      setPosts(data);
    })();
  }, []);
  return (
    <>
      <Container className="header">
        <Title>Ultimos Posts @Techagrbook</Title>
      </Container>
      <Posts posts={posts}/>
      <Input setPostState={setPosts}/>
    </>
  );
};

export default Home;
