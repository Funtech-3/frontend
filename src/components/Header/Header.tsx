import React from 'react';
import './Header.scss';


interface HeaderProps {
    isAuthenticated: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated }) => {
    return (
        <header className="Header">
            <div className="logo">
                <img src="/logo.svg" alt="Лого" />
                {!isAuthenticated && <button>Войти</button>}
                {isAuthenticated && (
                    <>
                        <div className="My profile">
                            <span>Мои события</span>
                            <img src="/avatar.svg" alt="Аватар" />
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
