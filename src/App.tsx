import React from 'react';
import { ThemeProvider, createTheme } from 'arwes';
import Routes from './Router';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
