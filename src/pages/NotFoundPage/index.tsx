import { useNavigate } from 'react-router-dom';
import { CustomButton, CustomCheckBox, CustomSwitch } from '../../ui-kit';
import { FormControlLabel } from '@mui/material';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      <CustomButton
        onClick={() => navigate('/')}
        size="large"
        variant="contained"
      >
        Назад
      </CustomButton>
      <FormControlLabel
        control={<CustomCheckBox defaultChecked />}
        label="Чекбокс"
      />
      <FormControlLabel control={<CustomSwitch />} label="Свитч " />
    </div>
  );
}
