import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 * {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  font-family: 'Orbitron', sans-serif;
}
  body {
    min-height: 100vh;
    overflow-x: hidden;
  }
`;