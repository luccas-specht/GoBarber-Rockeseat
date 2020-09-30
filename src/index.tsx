import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ThemeProvider } from 'styled-components';
import { CreateGlobalStyle, theme } from './ui/styles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
        <CreateGlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
