import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ThemeProvider } from 'styled-components';
import { CreateGlobalStyle, theme } from './ui/styles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
      <CreateGlobalStyle />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
