import * as React from 'react';

import styles from './styles.module.scss';
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  ListItemText,
  OutlinedInput,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { Calendar, CustomMenuItem, CustomSelect } from '../../ui-kit';
import DoneIcon from '@mui/icons-material/Done';

import {
  useGetCitiesQuery,
  useGetTagsQuery,
} from '../../store/funtech/funtech.api';
import { useActions } from '../../hooks/actions';
import CustomSwitch from '../../ui-kit/CustomSwitch/index';
import { useAppSelector } from '../../hooks/redux';

const customStyles = {
  borderRadius: '40px',
  boxShadow: '0px 2px 8px rgba(0, 20, 51, 0.15)',
  border: 'none',
  width: '200px',
};

export default function Filters() {
  const {
    show_old: showOldValue,
    tags: tagsValue,
    city: cityValue,
  } = useAppSelector(state => state.filters);

  const [discipline, setDiscipline] = React.useState<number[]>(tagsValue ?? []);
  const [city, setCity] = React.useState<number[]>(cityValue ?? []);

  const { data: cities } = useGetCitiesQuery();
  const { data: tags } = useGetTagsQuery();

  const filters = useActions();

  const handleChange = (
    event: SelectChangeEvent<unknown>,
    setter: React.Dispatch<React.SetStateAction<number[]>>,
  ) => {
    const {
      target: { value },
    } = event;

    setter(
      typeof value === 'string'
        ? (value.split(',').map(Number) as number[])
        : (value as number[]),
    );
  };

  function handleAdditionalValues(items: number[], selectName: string) {
    return (
      <div className={styles.selected}>
        <Typography>
          {selectName === 'city' &&
            cities?.find(item => item.id === items.at(-1))?.name}
          {selectName === 'discipline' &&
            tags?.find(item => item.id === items.at(-1))?.title}
        </Typography>
        <Typography color="grey" sx={{ fontWeight: '500' }}>
          {items.length > 1 ? ` +${items.length - 1}` : ''}
        </Typography>
      </div>
    );
  }

  return (
    <div className={styles.filters}>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="discipline-label" className={styles.label}>
          Направление
        </InputLabel>
        <CustomSelect
          labelId="discipline-label"
          id="discipline"
          name="discipline"
          multiple
          value={discipline}
          sx={customStyles}
          onChange={event => {
            handleChange(event, setDiscipline);
            filters.setTags(event.target.value as string[]);
          }}
          input={<OutlinedInput label="Направление" />}
          renderValue={selected =>
            handleAdditionalValues(selected as number[], 'discipline')
          }
        >
          {tags &&
            tags.map(({ title, id }) => (
              <CustomMenuItem key={id} value={id}>
                <ListItemText primary={title} />
                {discipline.indexOf(id) > -1 && <DoneIcon />}
              </CustomMenuItem>
            ))}
        </CustomSelect>
      </FormControl>

      <Calendar />

      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="city-label" className={styles.label}>
          Место проведения
        </InputLabel>
        <CustomSelect
          labelId="city-label"
          id="city"
          multiple
          name="city"
          value={city}
          sx={customStyles}
          onChange={event => {
            handleChange(event, setCity);
            filters.setCities(event.target.value as string[]);
          }}
          input={<OutlinedInput label="Место проведения" />}
          renderValue={selected =>
            handleAdditionalValues(selected as number[], 'city')
          }
        >
          {cities &&
            cities.map(({ id, name }) => (
              <CustomMenuItem key={id} value={id}>
                <ListItemText primary={name} />
                {city.indexOf(id) > -1 && <DoneIcon />}
              </CustomMenuItem>
            ))}
        </CustomSelect>
      </FormControl>

      <FormControlLabel
        control={<CustomSwitch />}
        label="Показывать прошедшие"
        checked={showOldValue !== false ? true : false}
        onChange={() =>
          filters.setShowOld(showOldValue === false ? null : false)
        }
      />
    </div>
  );
}
