import styled from "styled-components";
import { Theme } from "../../styles/Theme";

type Props = {
  isDisabled: boolean
}

export const Container = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  padding-top: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 1em;

  h1 {
    margin-bottom: 3rem;
  }

  form {
    display: flex;
    width: 20%;
    gap: 1rem;

    input {
      border-bottom: 1px solid lightgray;
      padding: 10px;
      outline: none;
    }

    button {
      margin-top: 1.3rem;
      background: none;
      background-color: ${({isDisabled}) => isDisabled ? `lightgray` : Theme.colors.secondaryBg};
      height: 2.6rem;
      border-radius: 5px;
      transition: .4s;
      color: ${({isDisabled}) => isDisabled ? `white` : `lightgray`};
      cursor: ${({isDisabled}) => isDisabled ? `not-allowed` : `pointer` };
    }
  }
`