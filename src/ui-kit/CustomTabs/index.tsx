import CustomButton from '../CustomButton/index';

import styles from './styles.module.scss';

export default function CustomTabs({
  currentTabValue,
  handleTabChange,
  tabs,
}: {
  currentTabValue: string;
  handleTabChange: (target: string) => void;
  tabs: string[];
}) {
  function defineColor(tabValue: string) {
    if (tabValue !== currentTabValue) return 'primary';
    return 'hsla(220, 23%, 90%, 1)';
  }

  return (
    <div className={styles.tabs}>
      {tabs.map(tab => (
        <CustomButton
          key={tab}
          variant="outlined"
          color="primary"
          value={tab}
          sx={{
            backgroundColor: defineColor(tab),
            padding: '10px 24px',
            lineHeight: 1.25,
            fontWeight: '400',
            border: 'none',
            boxShadow: '0px 2px 8px rgba(0, 20, 51, 0.15)',

            '&:hover': {
              border: 'none',
            },
          }}
          onClick={e => {
            handleTabChange(e.currentTarget.value);
          }}
        >
          {tab}
        </CustomButton>
      ))}
    </div>
  );
}
