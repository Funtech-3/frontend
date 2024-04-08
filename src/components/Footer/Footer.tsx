import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar className="Footer">
        <div className="footer-content">
          <span>© 2024 ООО "Яндекс"</span>
          <span className="copyright">Видеоматериалы доступны по лицензии CC-BY-NC 3.0 с обязательным указанием: © ООО "Яндекс"</span>
        </div>

      </Toolbar>
    </AppBar>
  );
};

export default Footer;
