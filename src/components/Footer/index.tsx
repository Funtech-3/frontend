import React from 'react';
import styles from './styles.module.scss';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <Typography className={styles.text}>© 2024 ООО "Яндекс"</Typography>
      <div className={styles.links}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.link} ${isActive && styles.link_active}`
          }
        >
          Все события
        </NavLink>
        <NavLink
          to="/my-events"
          className={({ isActive }) =>
            `${styles.link} ${isActive && styles.link_active}`
          }
        >
          Мои события
        </NavLink>
      </div>
      <Typography className={styles.text}>
        Видеоматериалы доступны по лицензии CC-BY-NC 3.0 с обязательным
        указанием: © ООО "Яндекс"
      </Typography>
    </div>
  );
};

export default Footer;
