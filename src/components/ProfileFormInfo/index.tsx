import { Box } from '@mui/material';
import CustomTextField from '../../ui-kit/CustomTextField/CustomTextField';

import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';

import { useEffect } from 'react';
import styles from './styles.module.scss';

export default function ProfileFormInfo() {
  const { user, updatedUser } = useAppSelector(state => state.user);

  const { setUpdatedUser } = useActions();

  useEffect(() => {
    setUpdatedUser(user);
  }, []);

  return (
    <Box component="form" noValidate className={styles.personalData}>
      <CustomTextField
        id="first_name"
        label="Имя"
        fullWidth
        value={updatedUser.first_name || ''}
        autoComplete="given-name"
        variant="standard"
        onChange={e =>
          setUpdatedUser({ ...updatedUser, first_name: e.target.value })
        }
      />
      <CustomTextField
        id="family-name"
        label="Фамилия"
        fullWidth
        autoComplete="family-name"
        variant="standard"
        value={updatedUser.last_name || ''}
        onChange={e =>
          setUpdatedUser({ ...updatedUser, last_name: e.target.value })
        }
      />
      <CustomTextField
        id="email"
        label="Email"
        fullWidth
        autoComplete="email"
        variant="standard"
        value={updatedUser.email || ''}
        onChange={e =>
          setUpdatedUser({ ...updatedUser, email: e.target.value })
        }
      />
      <CustomTextField
        id="tel"
        label="Телефон"
        fullWidth
        autoComplete="tel"
        variant="standard"
        value={updatedUser.phone_number || ''}
        onChange={e =>
          setUpdatedUser({ ...updatedUser, phone_number: e.target.value })
        }
      />
      <CustomTextField
        id="telegram"
        label="Ник в Telegram"
        fullWidth
        variant="standard"
        value={updatedUser.telegram_username || ''}
        onChange={e =>
          setUpdatedUser({ ...updatedUser, telegram_username: e.target.value })
        }
      />
      <CustomTextField
        id="work"
        label="Место работы"
        fullWidth
        variant="standard"
        autoComplete="organization-title"
        value={updatedUser.work_place || ''}
        onChange={e =>
          setUpdatedUser({ ...updatedUser, work_place: e.target.value })
        }
      />
      <CustomTextField
        id="position"
        label="Должность"
        fullWidth
        variant="standard"
        value={updatedUser.position || ''}
        onChange={e =>
          setUpdatedUser({ ...updatedUser, position: e.target.value })
        }
      />
    </Box>
  );
}
