import { createTheme } from 'arwes';
import { createMuiTheme } from '@material-ui/core/styles';

export const ArwesTheme = createTheme({
  typography: {
    fontFamily: '"Langar","Noto Sans JP","sans-serif"',
    headerFontFamily: '"Langar","Noto Sans JP","sans-serif"',
    headerSizes: {
      h1: 32,
      h2: 28,
      h3: 21,
      h4: 18,
      h5: 16,
      h6: 16,
    },
    fontSize: 16,
    lineHeight: 1.5,
  },
});

export const MaterialTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});
