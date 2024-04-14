import Card from '../../components/Card';
import Filters from '../../components/Filters';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';
import { useGetEventsQuery } from '../../store/funtech/funtech.api';
import { CustomButton } from '../../ui-kit';

import styles from './styles.module.scss';

export default function MainPage() {
  const { limit, offset, ...filters } = useAppSelector(state => state.filters);
  const { setLimit } = useActions();

  const { data: events } = useGetEventsQuery({
    limit: limit,
    offset: offset,
    ...filters,
  });

  function handleShowMore() {
    setLimit(limit + limit);
  }

  return (
    <main className={styles.main}>
      <Filters />
      <section className={styles.cards}>
        <div className={styles.cardsContainer}>
          {events &&
            events.results.map(event => (
              <Card key={event.event_id} event={event} />
            ))}
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
    </main>
  );
}
