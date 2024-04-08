import { useNavigate } from 'react-router-dom';
import {
  CustomButton,
  CustomCheckBox,
  CustomSwitch,
  StatusLabel,
} from '../../ui-kit';
import { FormControlLabel, useTheme } from '@mui/material';

export default function NotFoundPage() {
  const theme = useTheme();
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
      <StatusLabel
        label="Success"
        statusColor="success"
        tooltip="Everything is operating normally."
      />
      <StatusLabel
        label="Warning"
        statusColor="warning"
        tooltip="There might be some issues."
      />
      <StatusLabel
        label="Error"
        statusColor="error"
        backgroundColor={theme.palette.text.secondary}
        tooltip="Something went wrong!"
      />
    </div>
  );
}
