import React from 'react';

import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import { useAppSelector } from '../../hooks/redux';

const Footer: React.FC = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  return (
    <div className={styles.footer}>
      <Typography className={styles.text} sx={{ fontSize: '11px' }}>
        © 2024 ООО "Яндекс"
      </Typography>
      <div className={styles.links}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.link} ${isActive && styles.link_active}`
          }
        >
          Все события
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/my-events"
            className={({ isActive }) =>
              `${styles.link} ${isActive && styles.link_active}`
            }
          >
            Мои события
          </NavLink>
        )}
      </div>
      <Typography className={styles.text} sx={{ fontSize: '11px' }}>
        Видеоматериалы доступны по лицензии CC-BY-NC 3.0 с обязательным
        указанием: © ООО "Яндекс"
      </Typography>
    </div>
  );
};

export default Footer;
