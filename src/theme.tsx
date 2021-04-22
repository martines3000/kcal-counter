import { createMuiTheme } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#e6ffe6',
      paper: '#f0f0f0',
    },
    primary: {
      main: '#487e4c',
    },
    secondary: {
      main: '#666666',
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#a1b2a1',
      paper: '#415145',
    },
    primary: {
      main: '#8fdc9e',
    },
    secondary: {
      main: '#f0f0f0',
    },
  },
});
