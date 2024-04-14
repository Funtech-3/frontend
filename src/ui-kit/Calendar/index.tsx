import { ForwardedRef, forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CustomButton from '../CustomButton';

import './calendar.scss';

import { ru } from 'date-fns/locale/ru';
import { useActions } from '../../hooks/actions';
import { formatDate } from '../../utils/formatDate';

registerLocale('ru', ru);
setDefaultLocale('ru');

export function Calendar() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  const { setDateAfter, setDateBefore } = useActions();

  const handleChange = (dates: [Date | null, Date | null]) => {
    setDateRange(dates);

    setDateAfter(dates[0] ? formatDate(dates[0].toString(), 'numeric') : '');
    setDateBefore(dates[1] ? formatDate(dates[1].toString(), 'numeric') : '');
  };

  const CustomInput = forwardRef((props, ref) => {
    const shadowProps = props as {
      value: string | undefined;
      onClick: () => void;
    };
    const shadowRef = ref as ForwardedRef<HTMLButtonElement>;

    return (
      <CustomButton
        sx={{
          width: '200px',
          height: '53px',
          fontWeight: 400,
          fontSize: '14px',
          backgroundColor: 'white',
          border: '1px solid rgba(0, 0, 0, 0.23)',
          boxShadow: '0px 2px 8px rgba(0, 20, 51, 0.15)',

          '&:hover': {
            backgroundColor: 'white',
            boxShadow: '0px 2px 8px rgba(0, 20, 51, 0.15)',
            border: '1px solid hsla(0, 0%, 13%, 0.85)',
          },
        }}
        onClick={shadowProps.onClick}
        ref={shadowRef}
      >
        {shadowProps.value || 'Даты события'}
      </CustomButton>
    );
  });

  return (
    <div className="calendar">
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={update => handleChange(update)}
        customInput={<CustomInput />}
        isClearable
      />
    </div>
  );
}
