import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';
import { RouterProvider } from 'react-router-dom';
import router from '../../routes';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <Header />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
