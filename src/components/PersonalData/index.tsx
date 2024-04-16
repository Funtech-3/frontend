import { Box, Typography } from '@mui/material';
import CustomTextField from '../../ui-kit/CustomTextField/CustomTextField';
import styles from './styles.module.scss';
import { useAppSelector } from '../../hooks/redux';
import AvatarImg from '../AvatarImg';
import { useState } from 'react';
import { CustomButton } from '../../ui-kit';
import { usePostUserProfileChangesMutation } from '../../store/funtech/funtech.api';
import { useActions } from '../../hooks/actions';

export default function PersonalData() {
  const user = useAppSelector(state => state.user.user);
  const { setAlert } = useActions();
  const [postUserProfileChanges] = usePostUserProfileChangesMutation();

  const initialValues = {
    name: user?.first_name || '',
    familyName: user?.last_name || '',
    email: user?.email || '',
    tel: user?.phone_number || '',
    telegram: user?.telegram_username || '',
    work: user?.work_place || '',
    position: user?.position || '',
  };

  const [formValues, setFormValues] = useState(initialValues);

  function handleSubmit() {
    console.log(formValues);
    postUserProfileChanges({ ...formValues, id: user?.yandex_id })
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
    setFormValues(initialValues);
  }

  return (
    <Box className={styles.personalDataContainer}>
      <Box className={styles.personalDataHeader}>
        <AvatarImg />
        <Box className={styles.personalDataHeaderInfo}>
          <Typography fontWeight="bold">{user?.full_name}</Typography>
          <Typography color="text.secondary">{user?.email}</Typography>
        </Box>
      </Box>
      <Box component="form" noValidate className={styles.personalData}>
        <CustomTextField
          id="name"
          label="Имя"
          fullWidth
          value={formValues.name}
          autoComplete="given-name"
          variant="standard"
          onChange={e => setFormValues({ ...formValues, name: e.target.value })}
        />
        <CustomTextField
          id="family-name"
          label="Фамилия"
          fullWidth
          autoComplete="family-name"
          variant="standard"
          value={formValues.familyName}
          onChange={e =>
            setFormValues({ ...formValues, familyName: e.target.value })
          }
        />
        <CustomTextField
          id="email"
          label="Email"
          fullWidth
          autoComplete="email"
          variant="standard"
          value={formValues.email}
          onChange={e =>
            setFormValues({ ...formValues, email: e.target.value })
          }
        />
        <CustomTextField
          id="tel"
          label="Телефон"
          fullWidth
          autoComplete="tel"
          variant="standard"
          value={formValues.tel}
          onChange={({ target: { value } }) =>
            setFormValues(formValues => ({ ...formValues, tel: value }))
          }
        />
        <CustomTextField
          id="telegram"
          label="Ник в Telegram"
          fullWidth
          variant="standard"
          value={formValues.telegram}
          onChange={({ target: { value } }) =>
            setFormValues(formValues => ({ ...formValues, telegram: value }))
          }
        />
        <CustomTextField
          id="work"
          label="Место работы"
          fullWidth
          variant="standard"
          autoComplete="organization-title"
          value={formValues.work}
          onChange={({ target: { value } }) =>
            setFormValues(formValues => ({ ...formValues, work: value }))
          }
        />
        <CustomTextField
          id="position"
          label="Должность"
          fullWidth
          variant="standard"
          value={formValues.position}
          onChange={({ target: { value } }) =>
            setFormValues(formValues => ({ ...formValues, position: value }))
          }
        />
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
