import React from 'react';
import ProfileTabs from '../../ui-kit/CustomTabs';
import { Typography } from '@mui/material';
import styles from './styles.module.scss';
import { MY_EVENTS_TABS } from '../../utils/constants';
import BackButton from '../../ui-kit/BackButton';
import { useGetEventsQuery } from '../../store/funtech/funtech.api';
import CardsList from '../../components/CardsList';

export default function MyEventsPage() {
  const [currentTabValue, setCurrentTabValue] = React.useState<string>(
    MY_EVENTS_TABS[0],
  );

  function defineQueryParams(tabValue: string) {
    switch (tabValue) {
      case 'Прошедшие':
        return { is_registrated: true, show_old: true };
      case 'Избранное':
        return { is_favorited: true };
      default:
        return { is_registrated: true, show_old: false };
    }
  }

  const { data: myEvents } = useGetEventsQuery(
    defineQueryParams(currentTabValue),
  );

  function handleTabChange(target: string) {
    setCurrentTabValue(target);
  }

  return (
    <main className={styles.myEventsPage}>
      <BackButton />
      <Typography variant="h1">Мои события</Typography>
      <ProfileTabs
        currentTabValue={currentTabValue}
        handleTabChange={handleTabChange}
        tabs={MY_EVENTS_TABS}
      />
      {myEvents && (
        <CardsList
          events={myEvents}
          handleShowMore={() => {}}
          isRegistered={currentTabValue === 'Предстоящие'}
        />
      )}
    </main>
  );
}
