import { Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
// import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import styles from './styles.module.scss';
import { StatusLabel, CustomChip } from '../../ui-kit';
import { REGISTRATION_STATUSES } from '../../utils/constants';
import theme from '../../theme';
import { useState } from 'react';
import { Favorite } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function Card({ event }: { event: EventType }) {
  const [favorited, setFavorited] = useState(false);

  const navigate = useNavigate();

  // function defineLocation(mode: string, city?: string) {
  //   switch (mode) {
  //     case 'ONLINE':
  //       return (
  //         <div className={styles.location}>
  //           <VideoCameraFrontIcon htmlColor={theme.palette.text.secondary} />
  //           <Typography>Онлайн</Typography>
  //         </div>
  //       );
  //     case 'OFFLINE':
  //       return (
  //         <div className={styles.location}>
  //           <PlaceIcon htmlColor={theme.palette.text.secondary} />
  //           <Typography>{city}</Typography>
  //         </div>
  //       );
  //     default:
  //       return null;
  //   }
  // }

  function defineStatus(status: string) {
    return (
      <StatusLabel
        label={REGISTRATION_STATUSES[status].label}
        statusColor={REGISTRATION_STATUSES[status].color}
      />
    );
  }

  function handleLike(event: React.MouseEvent) {
    event.stopPropagation();
    setFavorited(prev => !prev);
  }

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/event/${event.event_id}`)}
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
            <button className={styles.likeButton} onClick={handleLike}>
              {favorited ? (
                <Favorite fontSize="large" htmlColor="#fff" />
              ) : (
                <FavoriteBorderIcon fontSize="large" htmlColor="#fff" />
              )}
            </button>
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
          {defineStatus(event.registration_status)}
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
