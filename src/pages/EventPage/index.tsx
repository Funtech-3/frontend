import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import heart from '../../assets/images/heart.svg';
import back from '../../assets/images/back.svg';
import speaker from '../../assets/images/speaker.svg';
import map from '../../assets/images/map.svg';
import yandexgo from '../../assets/images/yandexgo.svg';
import styles from './styles.module.scss';
import { useGetEventQuery } from '../../store/funtech/funtech.api';

export default function EventPage() {
  const { id } = useParams();

  const { data } = useGetEventQuery(id as string);
  console.log(data);

  return (
    <main className={styles.EventPage}>
      <section className={styles.about__section}>
        <Link to="/" className="about__link">
          <img src={back} alt="Назад" /> Назад
        </Link>
        <div className={styles.primary_buttons}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: '40px',
            }}
          >
            Программирование
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: '40px',
            }}
          >
            Митап
          </Button>
        </div>
        <Typography variant="h3">About:сloud — infrastructure</Typography>
        <div className={styles.about__paragraph}>
          <Typography variant="body1">4 апреля 2024, 16:00 </Typography>
          <Typography variant="body1">Москва, Экстрополис</Typography>
        </div>
        <div className={styles.secondary_buttons}>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              borderRadius: '40px',
            }}
          >
            Зарегистрироваться
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              borderRadius: '40px',
            }}
          >
            <Button
              color="secondary"
              sx={{
                borderRadius: '40px',
              }}
            >
              Регистрация открыта
            </Button>
            <img src={heart} alt="like" />
          </Button>
        </div>
      </section>

      <section className={styles.paragraph__section}>
        <Typography variant="h4">О чем этот митап?</Typography>
        <Typography variant="body1">
          Yet Another Level — это серия митапов про жизнь в IT-индустрии.
          Саморазвитие, прокачка софт-скилов, карьера, управление в IT,
          нетворкинг и многое другое.В прошлом году мы говорили о том, как
          управлять собой, командой, проектом, компанией — и не поседеть к
          тридцати годам.В этот раз обсудим подход к карьере и жизни, а главное
          — как оставаться счастливыми на работе.
        </Typography>
        <Typography variant="h4">Для кого?</Typography>
        <Typography variant="body1">
          Митап будет интересен: архитекторам, разработчикам,
          DevOps-специалистам, продакт-менеджерам, администраторам систем
          виртуализации, руководителям, отвечающим за технологии и
          инфраструктуру
        </Typography>
        <div className={styles.chips}>
          <Chip label="Архитекторы" variant="outlined" />
          <Chip label="Разработчики" variant="outlined" />
          <Chip label="DevOps-специалисты" variant="outlined" />
          <Chip label="Продакт-менеджеры" variant="outlined" />
          <Chip
            label="Администраторы систем виртуализации"
            variant="outlined"
          />
        </div>
      </section>

      <section className={styles.speakers__section}>
        <Typography variant="h5">Спикеры</Typography>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={speaker} alt="Speaker" />
            <Typography variant="body1">Григорий Орлов</Typography>
            <Typography variant="subtitle1">Yandex Cloud</Typography>
            <Typography variant="body1">Руководитель разработки</Typography>
          </div>

          <div className={styles.card}>
            <img src={speaker} alt="Speaker" />
            <Typography variant="body1">Григорий Орлов</Typography>
            <Typography variant="subtitle1">Yandex Cloud</Typography>
            <Typography variant="body1">Руководитель разработки</Typography>
          </div>

          <div className={styles.card}>
            <img src={speaker} alt="Speaker" />
            <Typography variant="body1">Григорий Орлов</Typography>
            <Typography variant="subtitle1">Yandex Cloud</Typography>
            <Typography variant="body1">Руководитель разработки</Typography>
          </div>

          <div className={styles.card}>
            <img src={speaker} alt="Speaker" />
            <Typography variant="body1">Григорий Орлов</Typography>
            <Typography variant="subtitle1">Yandex Cloud</Typography>
            <Typography variant="body1">Руководитель разработки</Typography>
          </div>
        </div>
      </section>

      <section className={styles.program__section}>
        <Typography variant="h1">Программы</Typography>
        <TableContainer component={Paper}>
          <Table className="schedule-table" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Время</TableCell>
                <TableCell>Описание</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>16:00 - 17:00</TableCell>
                <TableCell>Начало регистрации</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>17:00 - 17:40</TableCell>
                <TableCell>
                  Yandex Cloud Interconnect как реализация сетевого сервиса
                  гибридных облаков. Расскажем, как устроен сервис, связывающий
                  мир виртуальных сетей с классическими маршрутизаторами и
                  сетевыми устройствами, и как он позволяет создавать гибридную
                  облачную инфраструктуру.
                  <img src={speaker} alt="Speaker" />
                  <Typography variant="body1">Григорий Орлов</Typography>
                  <Typography variant="subtitle1">Yandex Cloud</Typography>
                  <Typography variant="body1">
                    Руководитель разработки
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </section>
      <section className={styles.adress__section}>
        <h2>Адрес</h2>
        <Typography variant="body1">
          Россия, Москва, улица Льва Толстого, 16, подъезд Экстрополис
        </Typography>
        <img className={styles.adress__map} src={map} alt="Карта" />
        <Button>
          <img src={yandexgo} alt="ЯндексGo" />
          Поехать на такси
        </Button>
      </section>
      <section className={styles.footer__info}>
        <div className={styles.about__paragraph}>
          <Typography variant="body1">4 апреля 2024, 16:00 </Typography>
          <Typography variant="body1">Москва, Экстрополис</Typography>
        </div>
        <Typography variant="h1">About:сloud — infrastructure</Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: '40px',
          }}
        >
          Зарегистрироваться
        </Button>
        <Button
          color="secondary"
          sx={{
            borderRadius: '40px',
          }}
        >
          Регистрация открыта
        </Button>
      </section>
    </main>
  );
}
