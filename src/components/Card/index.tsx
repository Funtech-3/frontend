import { Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import styles from './styles.module.scss';
import { CustomChip } from '../../ui-kit';
import theme from '../../theme';

import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

import defineFavoriteIcon from '../../utils/defineFavoriteIcon';
import { useHandleLike } from '../../hooks/useHandleLike';
import defineStatus from '../../utils/defineStatus';
import { useActions } from '../../hooks/actions';
import { useDeleteRegisterMutation } from '../../store/funtech/funtech.api';

export default function Card({
  event,
  isRegistered = false,
}: {
  event: EventType;
  isRegistered?: boolean;
}) {
  const { handleLike } = useHandleLike();
  const { setAlert } = useActions();
  const [deleteRegister] = useDeleteRegisterMutation();

  const navigate = useNavigate();

  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  function defineOld(date: string) {
    const dateNow = new Date();
    const dateEvent = new Date(date);
    return dateNow < dateEvent;
  }

  function removeRegistration(e: React.MouseEvent, id: string) {
    e.stopPropagation();
    deleteRegister(id)
      .unwrap()
      .then(() => {
        setAlert({
          isOpen: true,
          severity: 'success',
          message: 'Мероприятие отменено',
        });
      })
      .catch(error => {
        setAlert({
          isOpen: true,
          severity: 'error',
          message: error.data.detail || 'Не удалось отменить мероприятие ',
        });
      });
  }

  return (
    <div
      className={
        styles.card + ' ' + (defineOld(event.date_event) ? styles.card_old : '')
      }
      onClick={() => navigate(`/event/${event.slug}`)}
    >
      <div className={styles.imageContainer}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${event.preview_image})` }}
        ></div>

        <div className={styles.imageBody}>
          <div className={styles.imageTopContainer}>
            <div className={styles.imageTags}>
              {event.tags.map(tag => (
                <CustomChip key={tag.id} label={tag.title} />
              ))}
            </div>
            {isLoggedIn && !isRegistered ? (
              <button
                className={styles.likeButton}
                onClick={(e: React.MouseEvent) =>
                  handleLike(!!event.is_in_favorites, event.slug, e)
                }
              >
                {defineFavoriteIcon(!!event.is_in_favorites)}
              </button>
            ) : (
              <button
                className={styles.likeButton}
                onClick={e => removeRegistration(e, event.slug)}
              >
                <CancelOutlinedIcon
                  htmlColor={theme.palette.primary.contrastText}
                  fontSize="large"
                />
              </button>
            )}
          </div>
          <Typography
            className={styles.title}
            color="primary.contrastText"
            variant="h2"
            fontFamily={'YS Display, Arial, sans-serif'}
            fontWeight={500}
            fontSize={24}
          >
            {event.name}
          </Typography>
        </div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.bodyTopContainer}>
          <Typography
            className={styles.date}
            color="text.primary"
            fontSize={18}
          >
            {event.date_event}
          </Typography>
          {defineStatus(event.registration_status, true)}
        </div>
        <Typography
          color="text.secondary"
          className={styles.description}
          fontSize={16}
          lineHeight={1.4}
        >
          {event.description || 'Описание отсутствует'}
        </Typography>
        {/* {defineLocation(event.mode, event.city_id)} */}
        <div className={styles.location}>
          <PlaceIcon htmlColor={theme.palette.text.secondary} />
          <Typography>{event.city}</Typography>
        </div>
      </div>
    </div>
  );
}
