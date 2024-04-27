import { createTheme } from '@mui/material/styles';
import './assets/fonts/fonts.module.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#222222',
      dark: 'hsla(0, 0%, 10%, 1)',
      light: 'hsla(0, 0%, 13%, 0.9)',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FEF339',
      dark: '#F8E735',
      light: '#F4F6F9',
    },
    error: {
      main: '#FF4544',
    },
    warning: {
      main: '#FFCF53',
    },
    success: {
      main: '#29D46D',
    },
    background: {
      default: 'hsla(0, 0%, 100%, 1)',
    },
    text: {
      primary: '#222222',
      secondary: 'hsla(0, 0%, 13%, 0.55)',
      disabled: 'hsla(0, 0%, 13%, 0.45)',
    },
  },
  typography: {
    fontFamily: 'YS Text, Arial, sans-serif',
    fontSize: 14,
    h1: {
      fontFamily: 'YS Display, Arial, sans-serif',
      fontSize: 34,
    },
    button: {
      fontFamily: 'YS Text, Arial, sans-serif',
    },
  },
  spacing: 4,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '5px',
          },
          '*::-webkit-scrollbar-track': {
            margin: '10px',
            background: 'transparent',
          },
          '*::-webkit-scrollbar-thumb': {
            background: 'hsla(0, 0%, 13%, 0.55)',
            borderRadius: '10px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          height: 48,
        },
        root: {
          borderColor: 'hsla(223, 22%, 87%, 1)',
        },
      },
    },
  },
});

export default theme;
