import { useCallback, useMemo, useState, useEffect } from 'react';
import { Typography } from '@mui/material';

import styles from './styles.module.scss';
import FormButtons from '../FormButtons';
import { TagButton } from '../../ui-kit';
import {
  useGetCitiesQuery,
  useGetTagsQuery,
  useGetUserInterestsQuery,
  usePutUserInterestsMutation,
} from '../../store/funtech/funtech.api';
import { useActions } from '../../hooks/actions';

export default function PersonalTagList() {
  const { data: cities } = useGetCitiesQuery();
  const { data: tags } = useGetTagsQuery();
  const { data: userFilters } = useGetUserInterestsQuery();
  const [putInterests] = usePutUserInterestsMutation();

  const { setAlert } = useActions();

  const [interests, setInterests] = useState<UserInterests>({
    tags: [],
    cities: [],
  });

  useEffect(() => {
    if (userFilters) {
      setInterests(userFilters);
    }
  }, [userFilters]);

  const handleSubmit = useCallback(() => {
    putInterests(interests)
      .unwrap()
      .then(() =>
        setAlert({
          isOpen: true,
          severity: 'success',
          message: 'Данные успешно обновлены',
        }),
      )
      .catch(err =>
        setAlert({ isOpen: true, severity: 'error', message: err }),
      );
  }, [interests, putInterests, setAlert]);

  const revertChanges = useCallback(() => {
    if (!userFilters) return;
    setInterests(userFilters);
  }, [userFilters]);

  const toggleInterestItem = useCallback(
    (property: 'tags' | 'cities', itemId: number) => {
      setInterests((prev: UserInterests) => {
        const newItems = prev[property].includes(itemId)
          ? prev[property].filter(item => item !== itemId)
          : [...prev[property], itemId];

        return {
          ...prev,
          [property]: newItems,
        };
      });
    },
    [],
  );

  const tagButtons = useMemo(
    () =>
      tags?.map(tag => (
        <TagButton
          label={tag.title}
          key={tag.id}
          filled={interests?.tags.includes(tag.id)}
          onClick={() => toggleInterestItem('tags', tag.id)}
        />
      )),
    [tags, interests, toggleInterestItem],
  );

  const cityButtons = useMemo(
    () =>
      cities?.map(city => (
        <TagButton
          label={city.name}
          key={city.id}
          filled={interests?.cities.includes(city.id)}
          onClick={() => toggleInterestItem('cities', city.id)}
        />
      )),
    [cities, interests, toggleInterestItem],
  );

  return (
    <section className={styles.personalTagList}>
      <div className={styles.content}>
        <div className={styles.container}>
          <Typography variant="h2" fontSize={24} fontWeight={500}>
            Мои интересы
          </Typography>
          <div className={styles.list}>{tagButtons}</div>
        </div>
        <div className={styles.container}>
          <Typography variant="h2" fontSize={24} fontWeight={500}>
            Предпочитаемые места событий
          </Typography>
          <div className={styles.list}>{cityButtons}</div>
        </div>
      </div>
      <FormButtons revertChanges={revertChanges} handleSubmit={handleSubmit} />
    </section>
  );
}
