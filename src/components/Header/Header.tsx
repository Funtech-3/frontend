import React from 'react';
import './Header.scss';
import avatar from '../../images/avatar.svg';
import logo from '../../images/logo.svg';
import TextFields from '../../ui-kit/TextFields/TextFields';

// попозже надо починить верстку немного

const Header = () => {
  return (
    <header className="Header">
      <div className="header__logo">
        <img src={logo} alt="Лого" />
        <span className="text-logo">Яндекс События</span>
      </div>
      <div className="textFields">
        <TextFields />
      </div>
      <div className="my-profile">
        <span className="text-profile">Мои события</span>
        <img className="avatar" src={avatar} alt="Аватар" />
      </div>
    </header>
  );
};

export default Header;
