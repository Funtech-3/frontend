import { Box, Typography } from '@mui/material';
import styles from './styles.module.scss';
import { useGetUserInfoQuery } from '../../store/funtech/funtech.api';
import { useAppSelector } from '../../hooks/redux';

export default function UserCard() {
  const user = useAppSelector(state => state.user.user);
  const { data: userInfo } = useGetUserInfoQuery({ id: user.yandex_id! });

  return (
    <Box className={styles.personalDataHeaderInfo}>
      <Typography fontWeight="bold">{userInfo?.full_name}</Typography>
      <Typography color="text.secondary">{userInfo?.email}</Typography>
    </Box>
  );
}
