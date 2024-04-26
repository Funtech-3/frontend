import { Box, Tooltip } from '@mui/material';

import styles from './styles.module.scss';
import { useAppSelector } from '../../hooks/redux';
import AvatarImg from '../AvatarImg';

import { CustomButton } from '../../ui-kit';
import { usePostUserProfileChangesMutation } from '../../store/funtech/funtech.api';
import { useActions } from '../../hooks/actions';
import OutputIcon from '@mui/icons-material/Output';
import { useNavigate } from 'react-router-dom';
import ProfileFormInfo from '../ProfileFormInfo';
import UserCard from '../UserCard';

export default function PersonalData() {
  const navigate = useNavigate();
  const { user, updatedUser } = useAppSelector(state => state.user);
  const { setUser, setAlert, setUpdatedUser } = useActions();
  const [postUserProfileChanges] = usePostUserProfileChangesMutation();

  function handleSubmit() {
    setUser(updatedUser);

    const formData = {
      first_name: updatedUser.first_name,
      last_name: updatedUser.last_name,
      email: updatedUser.email,
      phone_number: updatedUser.phone_number,
      telegram_username: updatedUser.telegram_username,
      work_place: updatedUser.work_place,
      position: updatedUser.position,
    };

    postUserProfileChanges({ data: formData, id: user.yandex_id! })
      .unwrap()
      .then(() =>
        setAlert({
          isOpen: true,
          severity: 'success',
          message: 'Данные успешно обновлены',
        }),
      )
      .catch(err =>
        setAlert({ isOpen: true, severity: 'error', message: err.data.detail }),
      );
  }

  function revertChanges() {
    setUpdatedUser(user);
  }

  function handleExit() {
    localStorage.clear();
    window.location.reload();
    navigate('/');
  }

  return (
    <Box className={styles.personalDataContainer}>
      <Box gap={4} display="flex" flexDirection="column">
        <Box className={styles.personalDataHeader}>
          <AvatarImg />
          <UserCard />
          <CustomButton
            variant="text"
            color="error"
            onClick={() => handleExit()}
            size="small"
          >
            <Tooltip title="Выйти из приложения">
              <OutputIcon />
            </Tooltip>
          </CustomButton>
        </Box>
        <ProfileFormInfo />
      </Box>
      <Box className={styles.personalDataFooter}>
        <CustomButton
          color="primary"
          variant="outlined"
          onClick={() => {
            revertChanges();
          }}
        >
          Отменить
        </CustomButton>
        <CustomButton
          onClick={() => {
            handleSubmit();
          }}
        >
          Сохранить изменения
        </CustomButton>
      </Box>
    </Box>
  );
}
