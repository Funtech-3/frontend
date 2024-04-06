import { createTheme } from '@mui/material/styles';
import './assets/fonts/fonts.module.css';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#FEF339', // Цвет акцентных кнопок
      dark: '#222222', // Цвет черных кнопок
      light: '#F4F6F9', // Цвет контролов, инпутов
      contrastText: '#FFFFFF',
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

  // Ниже можно прописать override компонентом Mui

  // components: {
  //   MuiCheckbox: {
  //     styleOverrides: {
  //       root: {
  //         fontFamily: 'YS Text, sans-serif',

  //       },
  //     },
  //   },
  // },
});

export default theme;
