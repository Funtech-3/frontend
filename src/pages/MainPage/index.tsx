import Card from '../../components/Card';
import Filters from '../../components/Filters';
import { EVENTS } from '../../utils/constants';
import styles from './styles.module.scss';

export default function MainPage() {
  return (
    <main className={styles.main}>
      <Filters />
      <section className={styles.cards}>
        {EVENTS.map(event => (
          <Card key={event.id} event={event} />
        ))}
      </section>
    </main>
  );
}
