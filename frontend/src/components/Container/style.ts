import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1000px;
  background: #fff;
  border-radius: 30px;
  width: 100%;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  padding: 2rem;
  margin: 0 2rem;
  &.header{
    margin-bottom: 2.4rem;
  }
  &.clicable:hover{
    cursor: pointer;
    background: #ded;
    transform: scale(1.05);
    transition: all 0.05s ease-in
  }
  @media (min-width: 1180px) {
    margin: 0 1.6rem;
  }

`;
