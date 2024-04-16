import React, { useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import styles from './styles.module.scss';

const ConfirmRegisterModal = ({ onGoToMyEvents }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGoToMyEvents = () => {
    handleClose();
    onGoToMyEvents();
  };

  const body = (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '740px',
        height: '688px',
        bgcolor: 'background.paper',
        padding: '48px 64px 32px 64px',
        boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.15)',
        borderRadius: '40px',
        p: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Регистрация на участие
      </Typography>
      <Typography mt={2} variant="subtitle1" gutterBottom>
        About:сloud — infrastructure
      </Typography>
      <Typography mt={2} variant="subtitle1" gutterBottom>
        4 апреля 2024, 16:00 Москва, Экстрополис
      </Typography>
      <Typography
        mt={2}
        variant="body1"
        gutterBottom
        sx={{
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '24px',
          letterSpacing: '0%',
        }}
      >
        Поздравляем! Вы зарегистрированы на мероприятие. Отправим вам
        уведомление, когда заявка будет одобрена (не более 2 дней), а также за
        день до мероприятия. Настроить уведомления можно в разделе «Настройки
        профиля». Просмотреть статус регистрации и отменить регистрацию можно в
        разделе«Мои события».
      </Typography>

      <div className={styles.buttons}>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            border: '1px solid rgb(216, 220, 230)',
            color: 'rgb(34, 34, 34)',
            borderRadius: '40px',
          }}
        >
          Отменить
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          margin="normal"
          onClick={handleGoToMyEvents}
          sx={{
            borderRadius: '40px',
          }}
        >
          Перейти в "Мои события"
        </Button>
      </div>
    </Box>
  );

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Зарегистрироваться
      </Button>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
};

export default ConfirmRegisterModal;
