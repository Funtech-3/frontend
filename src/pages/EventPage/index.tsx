import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import heart from '../../images/heart.svg';
import back from '../../images/back.svg';
import speaker from '../../images/speaker.svg';
>>>>>>> ca4722a (add speakers section)
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

        <section className="paragraph__section">
          <h2>О чем этот митап?</h2>
          <p className="text">
            Yet Another Level — это серия митапов про жизнь в IT-индустрии.
            Саморазвитие, прокачка софт-скилов, карьера, управление в IT,
            нетворкинг и многое другое. В прошлом году мы говорили о том, как
            управлять собой, командой, проектом, компанией — и не поседеть к
            тридцати годам. В этот раз обсудим подход к карьере и жизни, а
            главное — как оставаться счастливыми на работе.
          </p>
          <h2>Для кого?</h2>
          <p className="text">
            Митап будет интересен: архитекторам, разработчикам,
            DevOps-специалистам, продакт-менеджерам, администраторам систем
            виртуализации, руководителям, отвечающим за технологии и
            инфраструктуру
          </p>
          <div className="chips-container">
            <span className="chips">Архитекторы</span>
            <span className="chips">Разработчики</span>
            <span className="chips">DevOps-специалисты</span>
            <span className="chips">Продакт-менеджеры</span>
            <span className="chips">Администраторы систем виртуализации</span>
          </div>
        </section>

        <section className="speakers__section">
          <h2>Спикеры</h2>
          <div className="cards">
            <div className="card">
              <img src={speaker} alt="Speaker" />
              <span className="card__name">Григорий Орлов</span>
              <p className="yandex_cloud">Yandex Cloud</p>
              <p className="card__profession">
                Руководитель команды разработки
              </p>
            </div>

            <div className="card">
              <img src={speaker} alt="Speaker" />
              <span className="card__name">Григорий Орлов</span>
              <p className="yandex_cloud">Yandex Cloud</p>
              <p className="card__profession">
                Руководитель команды разработки
              </p>
            </div>

            <div className="card">
              <img src={speaker} alt="Speaker" />
              <span className="card__name">Григорий Орлов</span>
              <p className="yandex_cloud">Yandex Cloud</p>
              <p className="card__profession">
                Руководитель команды разработки
              </p>
            </div>

            <div className="card">
              <img src={speaker} alt="Speaker" />
              <span className="card__name">Григорий Орлов</span>
              <p className="yandex_cloud">Yandex Cloud</p>
              <p className="card__profession">
                Руководитель команды разработки
              </p>
            </div>
          </div>
        </section>
      </main>
    </Typography>
  );
}
