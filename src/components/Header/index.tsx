import logo from '../../assets/images/logo.svg';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EventIcon from '@mui/icons-material/Event';
import { useAppSelector } from '../../hooks/redux';
import Auth from '../Auth';

import defaultAvatar from '../../assets/images/avatar.webp';

const Header = () => {
  const avatar = useAppSelector(state => state.user.user.avatar);

  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  function handleAvatarUrl(url: string) {
    return url.replace(/^\/media\/https%3A/, 'https://');
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" className={styles.linkLogo}>
          <img src={logo} alt="Лого" />
        </Link>
      </div>
      <TextField
        placeholder="Поиск по названию"
        size="small"
        sx={{
          width: '400px',

          '& .MuiInputBase-root': {
            backgroundColor: 'rgba(244, 246, 249, 1)',
            borderRadius: '40px',
            boxShadow: '0px 2px 8px rgba(0, 20, 51, 0.15)',
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {isLoggedIn ? (
        <div className={styles.profile}>
          <Link to="/my-events" className={styles.link}>
            <EventIcon />
            <Typography sx={{ fontSize: '18px', fontWeight: '500' }}>
              Мои события
            </Typography>
          </Link>
          <Link to="/profile" className={styles.link}>
            <img
              className={styles.avatar}
              src={(avatar && handleAvatarUrl(avatar)) || defaultAvatar}
              alt="Аватар"
            />
          </Link>
        </div>
      ) : (
        <Auth />
      )}
    </header>
  );
};

export default Header;
