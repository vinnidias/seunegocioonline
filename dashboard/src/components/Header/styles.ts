import styled from "styled-components";

type IISOpen = {
  isOpen: boolean;
}

export const Header = styled.header<IISOpen>`
  display: flex;
  margin-left: ${({isOpen}) => isOpen ? `20%` : `6%`};
  transition: .5s;
  height: 8vh;
  width: 100vw;
  border: 1px solid red;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;