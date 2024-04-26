import { CustomButton, CustomChip } from '../../ui-kit';
import { Dialog } from '@mui/material';

import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import map from '../../assets/images/map.svg';
import yandexgo from '../../assets/images/yandexgo.svg';
import styles from './styles.module.scss';
import { useGetEventQuery } from '../../store/funtech/funtech.api';
import { BackButton } from '../../ui-kit/';
import SpeakerInfo from '../../components/SpeakerInfo';
import defineFavoriteIcon from '../../utils/defineFavoriteIcon';
import { useHandleLike } from '../../hooks/useHandleLike';
import defineStatus from '../../utils/defineStatus';
import ProgrammList from '../../components/ProgrammList';
import EventRegister from '../../components/EventRegister';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/actions';

export default function EventPage() {
  const { id } = useParams();
  const { handleLike } = useHandleLike();

  const { data } = useGetEventQuery(id as string);
  console.log(data);

  const { isModalOpen } = useAppSelector(state => state.modal);
  const { setIsModalOpen } = useActions();

  if (!data) return null;

  return (
    <>
      <header className={styles.header}>
        <BackButton color="primary.contrastText" />

        <div
          className={styles.headerImage}
          style={{ backgroundImage: `url(${data.event_detail_image})` }}
        ></div>
        <div className={styles.headerContainer}>
          <div className={styles.headerInfo}>
            <div className={styles.tags}>
              {data.tags.map(item => (
                <CustomChip key={item.id} label={item.title} />
              ))}
            </div>

            <Typography
              variant="h1"
              fontSize={48}
              fontWeight={500}
              color="primary.contrastText"
            >
              {data.name}
            </Typography>
            <div className={styles.infoContainer}>
              <Typography
                variant="body1"
                color="secondary"
                fontWeight={500}
                fontSize={18}
              >
                {data.date_event}
              </Typography>
              <Typography
                variant="body1"
                fontWeight={500}
                fontSize={18}
                color="primary.contrastText"
              >
                | {data.city}, {data.address}
              </Typography>
            </div>

            <div className={styles.headerButtons}>
              {data.user_registration_status === 'PENDING' ||
              data.user_registration_status === 'REGISTERED' ? (
                <CustomButton
                  disabled
                  sx={{
                    padding: '19px 40px',
                    '&:disabled': {
                      color: 'text.disabled',
                      backgroundColor: 'hsla(220, 10%, 94%, 1)',
                    },
                  }}
                >
                  Вы участвуете
                </CustomButton>
              ) : (
                <>
                  <CustomButton
                    sx={{ padding: '19px 40px' }}
                    onClick={() => setIsModalOpen(true)}
                  >
                    Зарегистрироваться
                  </CustomButton>

                  <CustomButton
                    sx={{ padding: '0' }}
                    onClick={(e: React.MouseEvent) =>
                      handleLike(data.is_in_favorites, data.slug, e)
                    }
                  >
                    {defineFavoriteIcon(data.is_in_favorites, 'black')}
                  </CustomButton>
                </>
              )}
            </div>
          </div>
          {defineStatus(data.registration_status)}
        </div>
      </header>

      <section className={styles.section}>
        <Typography variant="h2" fontWeight={500} fontSize={34}>
          О чем этот митап?
        </Typography>
        <Typography variant="body1">{data.event_description}</Typography>
      </section>

      <section className={styles.section}>
        <Typography variant="h2" fontWeight={500} fontSize={34}>
          Спикеры
        </Typography>
        <div className={styles.cards}>
          {data?.event_program[0].speakers.map(speaker => (
            <SpeakerInfo key={speaker.speaker_id} data={speaker} />
          ))}
        </div>
      </section>

      <ProgrammList programs={data.event_program} />

      <section className={styles.section}>
        <Typography variant="h2" fontWeight={500} fontSize={34}>
          Адрес
        </Typography>
        <div className={styles.addressInfo}>
          <Typography fontSize={18}>
            {data.city}, {data.address}
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
              4 апреля 2024, 16: 00
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
            ></CustomButton>
            <CustomButton
              size="medium"
              variant="contained"
              color="secondary"
              onClick={() => setIsModalOpen(true)}
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

      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        scroll="paper"
        maxWidth={false}
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '40px',
          },
        }}
      >
        <EventRegister event={data} />
      </Dialog>
    </>
  );
}
