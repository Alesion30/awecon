import React from 'react';
import { ThemeProvider, createTheme } from 'arwes';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
