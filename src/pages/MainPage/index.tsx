import Card from '../../components/Card';
import Filters from '../../components/Filters';
import { useGetEventsQuery } from '../../store/funtech/funtech.api';

import styles from './styles.module.scss';

export default function MainPage() {
  const { data: events } = useGetEventsQuery();

  return (
    <main className={styles.main}>
      <Filters />
      <section className={styles.cards}>
        {events &&
          events.map(event => <Card key={event.event_id} event={event} />)}
      </section>
    </main>
  );
}
