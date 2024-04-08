import { Switch, SwitchProps } from '@mui/material';

const CustomSwitch: React.FC<SwitchProps> = props => {
  return (
    <Switch
      {...props}
      sx={{
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: 'text.primary',
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: 'text.primary',
        },
      }}
    />
  );
};

export default CustomSwitch;
