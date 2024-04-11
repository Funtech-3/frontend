import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/avatar.webp';

import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EventIcon from '@mui/icons-material/Event';

const Header = () => {
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

      <div className={styles.profile}>
        <Link to="/my-events" className={styles.link}>
          <EventIcon />
          <Typography sx={{ fontSize: '18px', fontWeight: '500' }}>
            Мои события
          </Typography>
        </Link>
        <Link to="/profile" className={styles.link}>
          <img className={styles.avatar} src={avatar} alt="Аватар" />{' '}
        </Link>
      </div>
    </header>
  );
};

export default Header;
