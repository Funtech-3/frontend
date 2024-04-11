import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import heart from '../../assets/images/heart.svg';
import back from '../../assets/images/back.svg';
import './index.scss';

export default function EventPage() {
  return (
    <Typography variant="h1">
      <main className="EventPage">
        <section className="about__section">
          <Link to="/" className="about__link">
            <img src={back} alt="Назад" /> Назад
          </Link>
          <Button className="button__black1">Программирование</Button>
          <Button className="button__black2">Митап</Button>
          <h1>About:сloud — infrastructure</h1>
          <div className="about__paragraph">
            <p className="about__text1">4 апреля 2024, 16:00 </p>
            <p className="about__text2">Москва, Экстрополис</p>
          </div>
          <Button className="about__button">Зарегистрироваться</Button>
          <Button className="about__like-button">
            <Button className="registry_open">Регистрация открыта</Button>
            <img src={heart} alt="like" />
          </Button>
        </section>
      </main>
    </Typography>
  );
}
