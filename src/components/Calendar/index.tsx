import { useMemo } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CustomButton from '../../ui-kit/CustomButton';

import './calendar.scss';

import { ru } from 'date-fns/locale/ru';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';
import { ButtonProps } from '@mui/material';

registerLocale('ru', ru);
setDefaultLocale('ru');

export function Calendar() {
  const { date_after, date_before } = useAppSelector(state => state.filters);
  const { setDateAfter, setDateBefore } = useActions();

  const dateRange = useMemo(
    () =>
      [date_after || null, date_before || null] as [Date | null, Date | null],
    [date_after, date_before],
  );

  const handleChange = (dates: [Date | null, Date | null]) => {
    setDateAfter(dates[0]);
    setDateBefore(dates[1]);
  };

  const CustomInput: React.FC<ButtonProps> = props => {
    const { onClick, value } = props;

    return (
      <CustomButton
        color="inherit"
        sx={{
          width: '200px',
          height: '53px',
          fontWeight: 400,
          fontSize: '14px',
          backgroundColor: 'white',
          border: '1px solid rgba(0, 0, 0, 0.23)',
          boxShadow: '0px 2px 8px rgba(0, 20, 51, 0.15)',
          borderRadius: '40px',
          ...props.sx,
        }}
        onClick={onClick}
      >
        {value || 'Даты события'}
      </CustomButton>
    );
  };

  return (
    <DatePicker
      dateFormat="dd.MM.yyyy"
      selectsRange
      startDate={dateRange[0]}
      endDate={dateRange[1]}
      onChange={handleChange}
      customInput={<CustomInput />}
      isClearable
    />
  );
}
