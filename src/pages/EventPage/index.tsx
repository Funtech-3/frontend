import Button from '@mui/material/Button';
import { useState } from 'react';
import { CustomButton } from '../../ui-kit/index';
import { Modal } from '@mui/material';
import { CustomChip } from '../../ui-kit/index';
import RegisterModal from '../../components/RegisterModal/index';
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
import { useParams } from 'react-router-dom';
import heart from '../../assets/images/heart.svg';
import eclipse from '../../assets/images/eclipse.svg';
import speaker from '../../assets/images/speaker.svg';
import speaker2 from '../../assets/images/speaker2.svg';
import speaker3 from '../../assets/images/speaker3.svg';
import speaker4 from '../../assets/images/speaker4.svg';
import map from '../../assets/images/map.svg';
import yandexgo from '../../assets/images/yandexgo.svg';
import styles from './styles.module.scss';
import { useGetEventQuery } from '../../store/funtech/funtech.api';
import { BackButton } from '../../ui-kit/';

export default function EventPage() {
  const { id } = useParams();

  const { data } = useGetEventQuery(id as string);
  console.log(data);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <main className={styles.EventPage}>
      <header className={styles.about__section}>
        <BackButton />
        <div className={styles.buttons}>
          <CustomButton
            variant="contained"
            color="primary"
            sx={{
              borderRadius: '40px',
              background: 'rgba(34, 34, 34, 0.55)',
            }}
          >
            Программирование
          </CustomButton>
          <CustomButton
            variant="contained"
            color="primary"
            sx={{
              borderRadius: '40px',
              background: 'rgba(34, 34, 34, 0.55)',
            }}
          >
            Митап
          </CustomButton>
        </div>
        <div className={styles.register}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderRadius: '40px',
              height: '30px',
              color: 'rgb(255, 255, 255)',
              textTransform: 'none',
              fontWeight: '500',
              fontSize: '16px',
              lineHeight: '20px',
            }}
          >
            <img
              className={styles.eclipse}
              src={eclipse}
              alt="Регистрация открыта"
            />
            Регистрация открыта
          </Button>
        </div>
        <Typography variant="h3">About:сloud — infrastructure</Typography>
        <div className={styles.about__paragraph}>
          <Typography
            variant="body1"
            color="secondary"
            sx={{
              paddingRight: '5px',
            }}
          >
            4 апреля 2024, 16:00{' '}
          </Typography>
          <Typography variant="body1">| Москва, Экстрополис</Typography>
        </div>
        <div className={styles.buttons}>
          <CustomButton
            variant="contained"
            color="secondary"
            onClick={toggleModal}
            sx={{
              borderRadius: '40px',
            }}
          >
            Зарегистрироваться
          </CustomButton>

          <CustomButton
            variant="contained"
            color="secondary"
            sx={{
              borderRadius: '40px',
              width: '62px',
              height: '62px',
            }}
          >
            <img src={heart} alt="like" />
          </CustomButton>
        </div>
      </header>

      <section className={styles.paragraph__section}>
        <Typography variant="h4">О чем этот митап?</Typography>
        <Typography
          variant="body1"
          sx={{
            padding: '14px 0',
            width: '816px',
            fontWeight: '400',
            lineHeight: '24px',
            letterSpacing: '0%',
            textAlign: 'left',
            '& span': {
              display: 'block',
              marginBottom: '5px',
            },
          }}
        >
          <span>
            Yet Another Level — это серия митапов про жизнь в IT-индустрии.
            Саморазвитие, прокачка софт-скилов, карьера, управление в IT,
            нетворкинг и многое другое.
          </span>
          <span>
            В прошлом году мы говорили о том, как управлять собой, командой,
            проектом, компанией — и не поседеть к тридцати годам. В этот раз
            обсудим подход к карьере и жизни, а главное — как оставаться
            счастливыми на работе.
          </span>
          <span>
            About:cloud — infrastructure — традиционный ежегодный митап, на
            котором разработчики Yandex Cloud рассказывают об устройстве наших
            сервисов, делятся примерами их применения и обмениваются опытом с
            гостями.
          </span>
        </Typography>
        <Typography variant="h4">Для кого?</Typography>
        <Typography
          variant="body1"
          sx={{
            padding: '14px 0',
            width: '816px',
            fontWeight: '400',
            lineHeight: '24px',
            letterSpacing: '0%',
            textAlign: 'left',
            '& span': {
              display: 'block',
              marginBottom: '5px',
            },
          }}
        >
          <span>
            Митап будет интересен: архитекторам, разработчикам,
            DevOps-специалистам, продакт-менеджерам, администраторам систем
            виртуализации, руководителям, отвечающим за технологии и
            инфраструктуру.
          </span>
        </Typography>
        <div className={styles.chips}>
          <CustomChip label="Архитекторы" />
          <CustomChip label="Разработчики" />
          <CustomChip label="DevOps-специалисты" />
          <CustomChip label="Продакт-менеджеры" />
          <CustomChip label="Администраторы систем виртуализации" />
        </div>
      </section>

      <section className={styles.speakers__section}>
        <Typography variant="h4">Спикеры</Typography>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={speaker} alt="Speaker" />
            <Typography variant="h5">Григорий Орлов</Typography>
            <Typography variant="subtitle2">Yandex Cloud</Typography>
            <Typography variant="body1">Руководитель разработки</Typography>
          </div>

          <div className={styles.card}>
            <img src={speaker2} alt="Speaker" />
            <Typography variant="h5">Евгений Козев</Typography>
            <Typography variant="subtitle2">Yandex Cloud</Typography>
            <Typography variant="body1">Руководитель подразделения</Typography>
          </div>

          <div className={styles.card}>
            <img src={speaker3} alt="Speaker" />
            <Typography variant="h5">Даниил Пересторонин</Typography>
            <Typography variant="subtitle2">Yandex Cloud</Typography>
            <Typography variant="body1">Разработчик</Typography>
          </div>

          <div className={styles.card}>
            <img src={speaker4} alt="Speaker" />
            <Typography variant="h5">Антон Пионтковский</Typography>
            <Typography variant="subtitle2">Yandex Cloud</Typography>
            <Typography variant="body1">Разработчик</Typography>
          </div>
        </div>
      </section>

      <section className={styles.program__section}>
        <Typography
          sx={{
            padding: '20px',
          }}
          variant="h4"
        >
          Программа
        </Typography>
        <TableContainer component={Paper}>
          <Table className="schedule-table" aria-label="simple table">
            <TableHead
              sx={{
                width: '1228px',
              }}
            >
              <TableRow>
                <TableCell>
                  <Typography>Время</Typography>
                </TableCell>
                <TableCell>
                  <Typography>Описание</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{
                  borderBottom: '1px solid rgb(216, 220, 230)',
                  background: 'rgb(244, 246, 249)',
                }}
              >
                <TableCell>
                  {' '}
                  <Typography>16:00 - 17:00</Typography>
                </TableCell>
                <TableCell>
                  <Typography>Начало регистрации</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography>17:00 - 17:40</Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    Yandex Cloud Interconnect как реализация сетевого сервиса
                    гибридных облаков.
                  </Typography>
                  <Typography sx={{ width: '604px' }}>
                    Расскажем, как устроен сервис, связывающий мир виртуальных
                    сетей с классическими маршрутизаторами и сетевыми
                    устройствами, и как он позволяет создавать гибридную
                    облачную инфраструктуру.
                  </Typography>
                  <div className={styles.details}>
                    <img src={speaker} alt="Speaker" />
                    <div className={styles.details__text}>
                      <Typography variant="body1">Григорий Орлов</Typography>
                      <Typography variant="subtitle2">Yandex Cloud</Typography>
                      <Typography variant="body2">
                        Руководитель команды разработки
                      </Typography>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  borderBottom: '1px solid rgb(216, 220, 230)',
                  background: 'rgb(244, 246, 249)',
                }}
              >
                <TableCell>
                  <Typography>17:40-18:20</Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    Сетевое блочное хранилище NBS: внутреннее устройство, типы
                    дисков
                  </Typography>
                  <Typography variant="subtitle2">Григорий Орлов</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography>18:20-18:50</Typography>
                </TableCell>
                <TableCell>
                  <Typography>Перерыв</Typography>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  borderBottom: '1px solid rgb(216, 220, 230)',
                  background: 'rgb(244, 246, 249)',
                }}
              >
                <TableCell>
                  <Typography>18:50-19:30</Typography>
                </TableCell>
                <TableCell>
                  <Typography>Внутреннее устройство Cloud DNS</Typography>
                  <Typography variant="subtitle2">Григорий Орлов</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography>19:30-20:10</Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    Под капотом Managed Service for Prometheus®
                  </Typography>
                  <Typography variant="subtitle2">Григорий Орлов</Typography>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  borderBottom: '1px solid rgb(216, 220, 230)',
                  background: 'rgb(244, 246, 249)',
                }}
              >
                <TableCell>
                  <Typography>20:10-23:00</Typography>
                </TableCell>
                <TableCell>
                  <Typography>Афтепати и активный нетворкинг</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </section>

      <section className={styles.adress__section}>
        <Typography variant="h4">Адрес</Typography>
        <div className={styles.adress__info}>
          <Typography variant="body1">
            Россия, Москва, улица Льва Толстого, 16, подъезд Экстрополис
          </Typography>
          <CustomButton
            size="medium"
            sx={{
              background: 'rgb(244, 246, 249)',
            }}
          >
            <img src={yandexgo} alt="ЯндексGo" />
            Поехать на такси
          </CustomButton>
        </div>
        <img className={styles.adress__map} src={map} alt="Карта" />
      </section>

      <footer className={styles.footer__info}>
        <div className={styles.footer__paragraph}>
          <div className={styles.footer__paragraph2}>
            <Typography
              variant="body1"
              color="secondary"
              sx={{
                color: 'rgba(34, 34, 34, 0.55)',
                paddingRight: '5px',
              }}
            >
              4 апреля 2024, 16: 00{' '}
            </Typography>
            <Typography
              sx={{
                color: 'rgba(34, 34, 34, 0.55)',
                paddingRight: '5px',
              }}
              variant="body1"
            >
              | Москва, Экстрополис
            </Typography>
            <Typography
              sx={{
                paddingTop: '5px',
              }}
              variant="h3"
            >
              About: сloud — infrastructure
            </Typography>
          </div>
          <div className={styles.footer__buttons}>
            <CustomButton
              variant="contained"
              color="secondary"
              sx={{
                width: '52px',
                height: '52px',
              }}
            >
              <img src={heart} alt="like" />
            </CustomButton>
            <CustomButton
              size="medium"
              variant="contained"
              color="secondary"
              onClick={toggleModal}
              sx={{
                width: '182px',
                height: '62px',
              }}
            >
              Зарегистрироваться
            </CustomButton>
          </div>
        </div>
      </footer>

      <Modal open={isModalOpen} onClose={toggleModal}>
        <RegisterModal />
      </Modal>
    </main>
  );
}
