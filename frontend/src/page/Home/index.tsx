import React, {useState, useEffect} from 'react'
import Container from "../../components/Container/";
import Title from "../../components/Title/"
import Posts from './Posts';
import Input from '../../components/Input';
import { getPosts,setPost, Post as PostInterface } from "../../services/api";

const Home = () => {
  const [posts, setPosts] = useState<PostInterface[] | undefined>();
  const [postContent,setPostContent] = useState("")
  useEffect(() => {
    (async () => {
      const data = await getPosts();
      setPosts(data);
    })();
  }, []);

  const submitPost = async () => {
    const sendPostContent: PostInterface ={content: postContent}
    const resp = await setPost(sendPostContent)
    if (resp) {
      setPosts((prev) => {
        if(prev) return [resp, ...prev ];
      });
    }
  }
  return (
    <>
      <Container className="header">
        <Title>Ultimos Posts @Techagrbook</Title>
      </Container>
      <Posts posts={posts}/>
      <Input onClick={submitPost} setState={setPostContent} state={postContent}/>
    </>
  );
};

export default Home;
