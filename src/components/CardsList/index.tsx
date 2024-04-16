import { Typography } from '@mui/material';
import { CustomButton } from '../../ui-kit';

import styles from './styles.module.scss';
import Card from '../Card';

export default function CardsList({
  events,
  handleShowMore,
}: {
  events: ApiResponseType<EventType>;
  handleShowMore: () => void;
}) {
  return (
    <section className={styles.cards}>
      <div className={styles.cardsContainer}>
        {events && events.results && events.results.length === 0 ? (
          <Typography color="error">
            По вашему запросу ничего не найдено
          </Typography>
        ) : (
          events &&
          events.results.map(event => (
            <Card key={event.event_id} event={event} />
          ))
        )}
      </div>
      {events && events.next !== null && (
        <CustomButton
          onClick={handleShowMore}
          variant="outlined"
          color="primary"
        >
          + Показать еще
        </CustomButton>
      )}
    </section>
  );
}
