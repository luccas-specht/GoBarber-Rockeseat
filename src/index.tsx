import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, CreateGlobalStyle } from "./ui/styles";
import ReactDOM from "react-dom";
import { App } from "./App";

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      <CreateGlobalStyle />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
