import styled from "styled-components";

type IISOpen = {
  isOpen: boolean;
}

export const Header = styled.header<IISOpen>`
  display: flex;
  margin-left: ${({isOpen}) => isOpen ? `20%` : `5%`};
  transition: .5s;
  height: 8vh;
  width: 100vw;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;

  button{
    background: none;
    font-size: 1.3rem;
    transition: .3s;

    :hover {
      cursor: pointer;
      opacity: .6;
      font-size: 1.6rem;
    }
  }
`;