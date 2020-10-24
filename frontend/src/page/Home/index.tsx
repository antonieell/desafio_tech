import React from 'react'
import Container from "../../components/Container/";
import Title from "../../components/Title/"
import Posts from './Posts';
import Input from './Input';

const Home = () => {
  return (
    <>
      <Container className="header">
        <Title>Ultimos Posts @Techagrbook</Title>
      </Container>
      <Posts/>
      <Input/>
    </>
  );
};

export default Home;
