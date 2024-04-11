import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import heart from '../../images/heart.svg';
import './index.scss';

export default function EventPage() {
  return (
    <Typography variant="h1">
      <main className="EventPage">
        <section className="about__section">
          <Link to="/main" className="about__link">
            Назад
          </Link>
          <button>Программирование</button>
          <button>Митап</button>
          <h1>About:сloud — infrastructure</h1>
          <div className="about__paragraph">
            <p className="about__text1">4 апреля 2024, 16:00 </p>
            <p className="about__text2">Москва, Экстрополис</p>
          </div>
          <Button className="about__button">Зарегистрироваться</Button>
          <Button className="about__like-button">
            <img src={heart} alt="like" />
          </Button>
        </section>
      </main>
    </Typography>
  );
}
