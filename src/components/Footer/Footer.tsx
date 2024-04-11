import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <div className="Footer">
      <div className="footer-content">
        <span className="copyright">© 2024 ООО "Яндекс"</span>
        <span className="footer-paragraph">
          Видеоматериалы доступны по лицензии CC-BY-NC 3.0 с обязательным
          указанием: © ООО "Яндекс"
        </span>
      </div>
    </div>
  );
};

export default Footer;
