import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`
  position: relative;
  display: flex;
  background-color: ${Theme.colors.mainBg};
  min-height: 100vh;
  
  h1 {
    margin-left: calc(20% + 15px);
  }
`;