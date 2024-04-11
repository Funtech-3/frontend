import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/avatar.webp';

import TextFields from '../../ui-kit/CustomTextField/CustomTextField';

import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
// попозже надо починить верстку немного

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" className={styles.linkLogo}>
          <img src={logo} alt="Лого" />
        </Link>
      </div>
      <div className={styles.textFields}>
        <TextFields />
      </div>
      <div className={styles.myProfile}>
        <span className={styles.textProfile}>Мои события</span>
        <img className={styles.avatar} src={avatar} alt="Аватар" />
      </div>
    </header>
  );
};

export default Header;
