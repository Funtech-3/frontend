import { createTheme } from '@mui/material/styles';
import './assets/fonts/fonts.module.css';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#222222', // Цвет основных кнопок
      dark: 'hsla(0, 0%, 10%, 1)', // Цвет hover
      light: 'hsla(0, 0%, 13%, 0.9)', // Цвет контролов, инпутов
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FEF339', // Цвет акцентных кнопок
      dark: '#F8E735', // Цвет hover
      light: '#F4F6F9', // Цвет контролов, инпутов
      // contrastText: '#FFFFFF',
    },
    error: {
      main: '#FF4544', // Цвет ошибки
    },
    warning: {
      main: '#FFCF53', // Цвет предупреждения
    },
    success: {
      main: '#29D46D', // Цвет успешного выполнения
    },
    background: {
      default: 'hsla(0, 0%, 100%, 1)', // Цвет фона по умолчанию
    },
    text: {
      primary: '#222222', // Основной цвет текста
      secondary: 'hsla(0, 0%, 13%, 0.55)', // Вторичный цвет текста
      disabled: 'hsla(0, 0%, 13%, 0.45)',
    },
  },
  typography: {
    fontFamily: 'YS Text, Arial, sans-serif', // Default font for most text
    fontSize: 14,
    h1: {
      fontFamily: 'YS Display, Arial, sans-serif', // Custom font for h1
    },
    button: {
      fontFamily: 'YS Text, Arial, sans-serif', // Custom font for buttons
    },
    // Add more font styles as needed
  },
  spacing: 4,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '5px' /* Change the width as needed */,
          },
          '*::-webkit-scrollbar-track': {
            margin: '10px',
            background:
              'transparent' /* Change the background color as needed */,
          },
          '*::-webkit-scrollbar-thumb': {
            background:
              'hsla(0, 0%, 13%, 0.55)' /* Change the color of the scrollbar thumb as needed */,
            borderRadius: '10px',
          },
        },
      },
    },
  },
});

export default theme;
