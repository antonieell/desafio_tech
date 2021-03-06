// @ts-nocheck
import styled from "styled-components";
import {Container} from "../../components/Container/style";

export const InputWrapper= styled(Container)`
  padding: 0px;
  display: flex;
  align-items: center;
  input {
    width: 90%;
    padding: 2rem;
    border-radius: 30px;
    border: none;
  }
  button{
    border-radius: 50%;
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: none;
    background-color: rgba(256,256,256, 0.5);
    &:hover{
    background-color: rgba(200,200,200, 0.5);

    }
  }
`;
