import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';
import { RouterProvider } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import router from '../../routes';
import { useEffect } from 'react';
import { usePostYaUserInfoMutation } from '../../store/funtech/funtech.api';
import { useActions } from '../../hooks/actions';

function App() {
  const yaAuthToken = localStorage.getItem('yaAuthToken');
  const yandexId = localStorage.getItem('yandex_id');
  const [postUser] = usePostYaUserInfoMutation();
  const { setUser } = useActions();

  useEffect(() => {
    if (yaAuthToken)
      postUser({ yandex_id: yandexId })
        .unwrap()
        .then(res => setUser(res.user));
  }, [yaAuthToken]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
