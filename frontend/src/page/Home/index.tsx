import React from 'react'
import Container from "../../components/Container/";
import Title from "../../components/Title/"
import Posts from './Posts';

const Home = () => {
  return (
    <>
      <Container className="title">
        <Title>Ultimos Posts @Techagrbook</Title>
      </Container>
      <Posts />
    </>
  );
};

export default Home;
