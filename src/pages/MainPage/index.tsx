import { useEffect } from 'react';
import Card from '../../components/Card';
import Filters from '../../components/Filters';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';
import {
  useGetEventsQuery,
  useGetYaUserInfoQuery,
  usePostYaUserInfoMutation,
} from '../../store/funtech/funtech.api';
import { CustomButton } from '../../ui-kit';

import styles from './styles.module.scss';
import { Typography } from '@mui/material';

export default function MainPage() {
  const { limit, offset, ...filters } = useAppSelector(state => state.filters);
  const { setLimit } = useActions();

  const { setUser } = useActions();

  const { data: events } = useGetEventsQuery({
    limit: limit,
    offset: offset,
    ...filters,
  });

  const { data } = useGetYaUserInfoQuery();
  const [postData] = usePostYaUserInfoMutation();

  useEffect(() => {
    if (data) {
      postData(data)
        .unwrap()
        .then(res => setUser(res));
    }
  }, [data]);

  function handleShowMore() {
    setLimit(limit + limit);
  }

  return (
    <div className={styles.mainPage}>
      <Filters />
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
    </div>
  );
}
