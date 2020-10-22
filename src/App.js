import React from 'react';
import GlobalStyle from './Styles/GlobalStyle';
import Routes from './Routes';
import { ThemeProvider, theme } from '@chakra-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
