import React from 'react';
import { ThemeProvider, createTheme, Arwes } from 'arwes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes>
        <h1>My App</h1>
        <p>A SciFi Project</p>
      </Arwes>
    </ThemeProvider>
  );
}

export default App;
