import * as React from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import styles from './styles.module.scss';
import { Typography } from '@mui/material';
import { CustomSelect } from '../../ui-kit';

const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
    },
  },
};

const customStyles = {
  borderRadius: '40px',
  boxShadow: '0px 2px 8px rgba(0, 20, 51, 0.15)',
  border: 'none',
  width: '200px',
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function Filters() {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
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
          value={personName}
          MenuProps={MenuProps}
          sx={customStyles}
          onChange={handleChange}
          input={<OutlinedInput label="Направление" />}
          renderValue={selected => handleAdditionalValues(selected as string[])}
        >
          {names.map(name => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </CustomSelect>
      </FormControl>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-name-label" className={styles.label}>
          Дата события
        </InputLabel>
        <CustomSelect
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personName}
          MenuProps={MenuProps}
          onChange={handleChange}
          input={<OutlinedInput label="Дата события" />}
          renderValue={selected => handleAdditionalValues(selected as string[])}
        >
          {names.map(name => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </CustomSelect>
      </FormControl>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-name-label" className={styles.label}>
          Место проведения
        </InputLabel>
        <CustomSelect
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          MenuProps={MenuProps}
          sx={customStyles}
          onChange={handleChange}
          input={<OutlinedInput label="Место проведения" />}
          renderValue={selected => handleAdditionalValues(selected as string[])}
        >
          {names.map(name => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </CustomSelect>
      </FormControl>
    </div>
  );
}
