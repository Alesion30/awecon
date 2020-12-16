import React from 'react';
import { ThemeProvider as ArwesThemeProvider } from 'arwes';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import Routes from './Router';
import { ArwesTheme, MaterialTheme } from './resource/style/theme';

const App: React.FC = () => {
  return (
    <ArwesThemeProvider theme={ArwesTheme}>
      <MaterialThemeProvider theme={MaterialTheme}>
        <Routes />
      </MaterialThemeProvider>
    </ArwesThemeProvider>
  );
};

export default App;
