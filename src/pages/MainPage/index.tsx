import CardsList from '../../components/CardsList';
import Filters from '../../components/Filters';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';
import { useGetEventsQuery } from '../../store/funtech/funtech.api';

import styles from './styles.module.scss';

export default function MainPage() {
  const {
    limit = 0,
    offset,
    ...filters
  } = useAppSelector(state => state.filters);
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
    <div className={styles.mainPage}>
      <Filters />
      {events && <CardsList events={events} handleShowMore={handleShowMore} />}
    </div>
  );
}
