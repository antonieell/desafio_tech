import styled from "styled-components";
import {Container} from "../../components/Container/style";

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  background-color: transparent;
  max-height: 60vh;
  overflow-y: auto;
  div {
    margin: 16px auto;
  }
`;

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
`;
