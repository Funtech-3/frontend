/* eslint-disable @typescript-eslint/no-explicit-any */
declare const YaAuthSuggest: any;

import { useActions } from '../../hooks/actions';
import { usePostYaUserInfoMutation } from '../../store/funtech/funtech.api';
import { useGetYaUserInfoQuery } from '../../store/funtech/ya.api';
import { CustomButton } from '../../ui-kit';

export default function Auth() {
  const { setUser, setLoggedIn } = useActions();

  const [postData] = usePostYaUserInfoMutation();

  const { refetch } = useGetYaUserInfoQuery();

  function handleAuth() {
    YaAuthSuggest.init(
      {
        client_id: '015159bd0d5347e8bb7874bd053e25c1',
        response_type: 'token',
        redirect_uri: 'https://funtech.myddns.me',
      },
      'https://funtech.myddns.me',
    )
      .then(({ handler }: { handler: () => void }) => handler())
      .then((data: any) => {
        localStorage.setItem('yaAuthToken', data.access_token);
      })
      .then(() => {
        refetch()
          .unwrap()
          .then((data: any) => {
            localStorage.setItem('yandex_id', data.id);
            postData(data)
              .unwrap()
              .then(res => {
                localStorage.setItem('authToken', res.access_token);
                setUser(res.user);
                setLoggedIn(true);
              });
          });
      })
      .catch((error: any) => console.log('Обработка ошибки', error));
  }

  return (
    <CustomButton variant="outlined" color="primary" onClick={handleAuth}>
      Войти
    </CustomButton>
  );
}
