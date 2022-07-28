import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { Theme } from "./styles/Theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);