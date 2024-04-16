import React from 'react';
import { CustomTabs } from '../../ui-kit/';
import { Typography } from '@mui/material';
import styles from './styles.module.scss';
import { PROFILE_TABS } from '../../utils/constants';
import BackButton from '../../ui-kit/BackButton';
import PersonalData from '../../components/PersonalData';

export default function ProfilePage() {
  const [currentTabValue, setCurrentTabValue] = React.useState<string>(
    PROFILE_TABS[0],
  );

  function handleTabChange(target: string) {
    setCurrentTabValue(target);
  }

  const tabData = [<PersonalData />, <PersonalData />, <PersonalData />];

  function defineTabData(tabValue: string) {
    return tabData[PROFILE_TABS.indexOf(tabValue)];
  }

  return (
    <main className={styles.profilePage}>
      <BackButton />
      <Typography variant="h1">Настройки</Typography>
      <CustomTabs
        currentTabValue={currentTabValue}
        handleTabChange={handleTabChange}
        tabs={PROFILE_TABS}
      />
      {defineTabData(currentTabValue)}
    </main>
  );
}
