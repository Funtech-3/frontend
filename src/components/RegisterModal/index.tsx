import React, { useState } from 'react';
import { Button, Modal, Box, TextField, Typography } from '@mui/material';
import styles from './styles.module.scss';
import CustomCheckBox from '../../ui-kit/CustomCheckBox/index';
import avatar from '../../assets/images/avatar.webp';

const RegisterModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '740px',
        height: '688px',
        bgcolor: 'background.paper',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
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
        Вы почти у цели! Укажите ваши данные. Если всё верно, нажмите
        «Зарегистрироваться». Вы можете внести изменения перед регистрацией.
      </Typography>
      <div className={styles.user}>
        <img src={avatar} alt="Аватар" />
        <div className={styles.username}>
          <Typography variant="body2" gutterBottom>
            Константин Преображенский
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{
              color: 'rgba(34, 34, 34, 0.55)',
            }}
          >
            ka.preobrazh@mail.com
          </Typography>
        </div>
      </div>
      <form className={styles.form}>
        <Typography
          variant="subtitle2"
          sx={{
            position: 'absolute',
            top: 10,
            left: 8,
            color: 'rgb(34, 34, 34)',
            fontWeight: '400',
          }}
        >
          Имя*
        </Typography>
        <TextField
          label="Константин"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          sx={{
            borderRadius: '40px',
            background: 'rgb(244, 246, 249)',
            width: '200px',
            height: '40px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '40px',
              '& fieldset': {
                border: 'none',
              },
            },
          }}
        />

        <Typography
          variant="subtitle2"
          sx={{
            position: 'absolute',
            top: 10,
            left: 230,
            color: 'rgb(34, 34, 34)',
            fontWeight: '400',
          }}
        >
          Фамилия*
        </Typography>
        <TextField
          label="Преображенский"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          sx={{
            borderRadius: '40px',
            background: 'rgb(244, 246, 249)',
            width: '200px',
            height: '40px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '40px',
              '& fieldset': {
                border: 'none',
              },
            },
          }}
        />
        <Typography
          variant="subtitle2"
          sx={{
            position: 'absolute',
            top: 10,
            left: 440,
            color: 'rgb(34, 34, 34)',
            fontWeight: '400',
          }}
        >
          E-mail*
        </Typography>
        <TextField
          type="email"
          label="ka.preobrazh@mail.com"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          sx={{
            borderRadius: '40px',
            background: 'rgb(244, 246, 249)',
            width: '200px',
            height: '40px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '40px',
              '& fieldset': {
                border: 'none',
              },
            },
          }}
        />
        <Typography
          variant="subtitle2"
          sx={{
            position: 'absolute',
            top: 95,
            left: 8,
            color: 'rgb(34, 34, 34)',
            fontWeight: '400',
          }}
        >
          Номер телефона*
        </Typography>
        <TextField
          type="email"
          label="+7-987-654-32-10"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          sx={{
            borderRadius: '40px',
            background: 'rgb(244, 246, 249)',
            width: '200px',
            height: '40px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '40px',
              '& fieldset': {
                border: 'none',
              },
            },
          }}
        />
        <Typography
          variant="subtitle2"
          sx={{
            position: 'absolute',
            top: 95,
            left: 230,
            color: 'rgb(34, 34, 34)',
            fontWeight: '400',
          }}
        >
          Ник в Telegram
        </Typography>
        <TextField
          label="@telegram"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          sx={{
            borderRadius: '40px',
            background: 'rgb(244, 246, 249)',
            width: '200px',
            height: '40px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '40px',
              '& fieldset': {
                border: 'none',
              },
            },
          }}
        />
        <Typography
          variant="subtitle2"
          sx={{
            position: 'absolute',
            top: 95,
            left: 440,
            color: 'rgb(34, 34, 34)',
            fontWeight: '400',
          }}
        >
          Место работы*
        </Typography>
        <TextField
          label="ООО Яндекс Вертикали"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          sx={{
            borderRadius: '40px',
            background: 'rgb(244, 246, 249)',
            width: '200px',
            height: '40px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '40px',
              '& fieldset': {
                border: 'none',
              },
            },
          }}
        />
        <Typography
          variant="subtitle2"
          sx={{
            position: 'absolute',
            top: 170,
            left: 8,
            color: 'rgb(34, 34, 34)',
            fontWeight: '400',
          }}
        >
          Должность*
        </Typography>
        <TextField
          label="младший разработчик"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          sx={{
            borderRadius: '40px',
            background: 'rgb(244, 246, 249)',
            width: '200px',
            height: '40px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '40px',
              '& fieldset': {
                border: 'none',
              },
            },
          }}
        />
        <Typography
          variant="body2"
          sx={{
            fontWeight: '400',
            lineHeight: '20px',
          }}
          gutterBottom
        >
          <CustomCheckBox />Я даю согласие на передачу ООО «Яндекс» анкеты,
          содержащей мои персональные данные, которые могут быть использованы в
          соответствии с Политикой обработки персональных данных
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
            sx={{
              borderRadius: '40px',
            }}
          >
            Зарегистрироваться
          </Button>
        </div>
      </form>
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

export default RegisterModal;
