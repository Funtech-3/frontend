import * as React from 'react';

import styles from './styles.module.scss';
import {
  FormControl,
  InputLabel,
  ListItemText,
  OutlinedInput,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { Calendar, CustomMenuItem, CustomSelect } from '../../ui-kit';
import DoneIcon from '@mui/icons-material/Done';
import { CITIES, PROGRAMMES } from '../../utils/constants';

const customStyles = {
  borderRadius: '40px',
  boxShadow: '0px 2px 8px rgba(0, 20, 51, 0.15)',
  border: 'none',
  width: '200px',
};

export default function Filters() {
  const [discipline, setDiscipline] = React.useState<string[]>([]);
  const [city, setCity] = React.useState<string[]>([]);

  const handleChange = (
    event: SelectChangeEvent<unknown>,
    setter: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    console.log(event);
    const {
      target: { value },
    } = event;
    setter(
      typeof value === 'string'
        ? (value as string).split(',')
        : (value as string[]),
    );
  };
  function handleAdditionalValues(items: string[]) {
    return (
      <div className={styles.selected}>
        <Typography>{items.at(-1)}</Typography>
        <Typography color="grey" sx={{ fontWeight: '500' }}>
          {items.length > 1 ? ` +${items.length - 1}` : ''}
        </Typography>
      </div>
    );
  }

  return (
    <div className={styles.filters}>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-name-label" className={styles.label}>
          Направление
        </InputLabel>
        <CustomSelect
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={discipline}
          sx={customStyles}
          onChange={event => handleChange(event, setDiscipline)}
          input={<OutlinedInput label="Направление" />}
          renderValue={selected => handleAdditionalValues(selected as string[])}
        >
          {PROGRAMMES.map(({ title, id }) => (
            <CustomMenuItem key={id} value={title}>
              <ListItemText primary={title} />
              {discipline.indexOf(title) > -1 && <DoneIcon />}
            </CustomMenuItem>
          ))}
        </CustomSelect>
      </FormControl>

      <Calendar />

      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-name-label" className={styles.label}>
          Место проведения
        </InputLabel>
        <CustomSelect
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={city}
          sx={customStyles}
          onChange={event => handleChange(event, setCity)}
          input={<OutlinedInput label="Место проведения" />}
          renderValue={selected => handleAdditionalValues(selected as string[])}
        >
          {CITIES.map(({ id, name }) => (
            <CustomMenuItem key={id} value={name}>
              <ListItemText primary={name} />
              {city.indexOf(name) > -1 && <DoneIcon />}
            </CustomMenuItem>
          ))}
        </CustomSelect>
      </FormControl>
    </div>
  );
}
