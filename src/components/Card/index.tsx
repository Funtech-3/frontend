import { Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import styles from './styles.module.scss';
import { StatusLabel, CustomChip } from '../../ui-kit';
import {
  CITIES,
  PROGRAMMES,
  REGISTRATION_STATUSES,
} from '../../utils/constants';
import theme from '../../theme';

export default function Card({ event }: { event: EventType }) {
  function defineCity(city: number) {
    return CITIES.find(c => c.id === city)?.name;
  }

  function defineLocation(mode: string, city?: number) {
    switch (mode) {
      case 'ONLINE':
        return (
          <div className={styles.location}>
            <VideoCameraFrontIcon htmlColor={theme.palette.text.secondary} />
            <Typography>Онлайн</Typography>
          </div>
        );
      case 'OFFLINE':
        return (
          <div className={styles.location}>
            <PlaceIcon htmlColor={theme.palette.text.secondary} />
            <Typography>{city && defineCity(city)}</Typography>
          </div>
        );
      default:
        return null;
    }
  }

  function defineStatus(status: string) {
    return (
      <StatusLabel
        label={REGISTRATION_STATUSES[status].label}
        statusColor={REGISTRATION_STATUSES[status].color}
      />
    );
  }

  function defineProgramChips(id: number) {
    return PROGRAMMES.find(p => p.id === id)?.title;
  }

  function handleLike() {}

  function defineLike(favorited: number) {
    if (favorited) {
      return <FavoriteBorderIcon color="secondary" fontSize="large" />;
    }
    return <FavoriteBorderIcon color="disabled" fontSize="large" />;
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${event.image})` }}
        ></div>

        <div className={styles.imageBody}>
          <div className={styles.imageTopContainer}>
            <div className={styles.imageTags}>
              <CustomChip label={defineProgramChips(event.tags_id)} />
            </div>
            <button className={styles.likeButton} onClick={handleLike}>
              {defineLike(event.favorited_by)}
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
            {event.title}
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
            {event.date}
          </Typography>
          {defineStatus(event.registration_status)}
        </div>
        <Typography
          color="text.secondary"
          className={styles.description}
          fontSize={16}
          lineHeight={1.4}
        >
          {event.description}
        </Typography>
        {defineLocation(event.mode, event.city_id)}
      </div>
    </div>
  );
}
