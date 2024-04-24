import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './styles.module.scss';
import SpeakerInfo from '../SpeakerInfo';

export default function ProgrammList({
  programs,
}: {
  programs: EventProgram[];
}) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={styles.programList}>
      <div className={styles.programListHeader}>
        <Typography fontSize={20} sx={{ width: '30%' }}>
          Время
        </Typography>
        <Typography fontSize={20}>Описание</Typography>
      </div>

      {programs.map((program: EventProgram, index) => (
        <Accordion
          expanded={expanded === program.title}
          onChange={handleChange(program.title)}
          sx={{
            padding: '16px 24px',
            backgroundColor:
              index % 2 === 1 ? 'rgba(0, 0, 0, 0.05)' : 'inherit',

            boxShadow: 'none',
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontSize={24} sx={{ width: '30%' }}>
              {program.start_time}
            </Typography>
            <Typography fontSize={24} fontWeight={500} sx={{ flexGrow: 1 }}>
              {program.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingLeft: '30%' }}>
            <Typography fontSize={18}>{program.description}</Typography>
            <div className={styles.speakers}>
              {program.speakers.map(speaker => (
                <SpeakerInfo
                  key={speaker.speaker_id}
                  small
                  data={speaker}
                ></SpeakerInfo>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
