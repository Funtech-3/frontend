import { Box, FormControlLabel } from '@mui/material';
import CustomSwitch from '../../ui-kit/CustomSwitch/index';
import {
  useGetNotificationInfoQuery,
  usePatchNotificationInfoMutation,
} from '../../store/funtech/funtech.api';

import styles from './styles.module.scss';
import { useState, useEffect } from 'react';
import { useActions } from '../../hooks/actions';
import FormButtons from '../FormButtons';

export default function Notifications() {
  const { data } = useGetNotificationInfoQuery();
  const [patchNotificationInfo] = usePatchNotificationInfoMutation();
  const { setAlert } = useActions();

  const [notificationValues, setNotificationValues] = useState({
    isNotification: false,
    isPush: false,
    isEmail: false,
    isPhone: false,
  });

  useEffect(() => {
    if (data) {
      setNotificationValues({
        isNotification: data.is_notification,
        isPush: data.is_push,
        isEmail: data.is_email,
        isPhone: data.is_phone,
      });
    }
  }, [data]);

  function revertChanges() {
    if (data) {
      setNotificationValues({
        isNotification: data?.is_notification,
        isPush: data?.is_push,
        isEmail: data?.is_email,
        isPhone: data?.is_phone,
      });
    }
  }

  function handleSubmit() {
    patchNotificationInfo({
      is_notification: notificationValues.isNotification,
      is_push: notificationValues.isPush,
      is_email: notificationValues.isEmail,
      is_phone: notificationValues.isPhone,
    })
      .unwrap()
      .then(() =>
        setAlert({
          isOpen: true,
          severity: 'success',
          message: 'Данные успешно обновлены',
        }),
      )
      .catch(error =>
        setAlert({
          isOpen: true,
          severity: 'error',
          message: error.data.detail || 'Не удалось обновить данные',
        }),
      );
  }

  return (
    <Box className={styles.notifications}>
      <Box className={styles.notificationsContainer}>
        <FormControlLabel
          control={<CustomSwitch />}
          label="Присылать уведомления о событиях"
          checked={notificationValues.isNotification}
          onChange={() => {
            setNotificationValues({
              ...notificationValues,
              isNotification: !notificationValues.isNotification,
            });
          }}
        />
        <FormControlLabel
          control={<CustomSwitch />}
          label="Пуш-уведомления"
          checked={notificationValues.isPush}
          onChange={() => {
            setNotificationValues({
              ...notificationValues,
              isPush: !notificationValues.isPush,
            });
          }}
        />
        <FormControlLabel
          control={<CustomSwitch />}
          label="Электронные письма"
          checked={notificationValues.isEmail}
          onChange={() => {
            setNotificationValues({
              ...notificationValues,
              isEmail: !notificationValues.isEmail,
            });
          }}
        />
        <FormControlLabel
          control={<CustomSwitch />}
          label="СМС-сообщения"
          checked={notificationValues.isPhone}
          onChange={() => {
            setNotificationValues({
              ...notificationValues,
              isPhone: !notificationValues.isPhone,
            });
          }}
        />
      </Box>
      <FormButtons revertChanges={revertChanges} handleSubmit={handleSubmit} />
    </Box>
  );
}
