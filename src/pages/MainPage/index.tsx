import Filters from '../../components/Filters';
import styles from './styles.module.scss';

export default function MainPage() {
  return (
    <main className={styles.main}>
      <Filters />
    </main>
  );
}
