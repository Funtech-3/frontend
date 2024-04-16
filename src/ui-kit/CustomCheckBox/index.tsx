import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';

const CustomCheckBox: React.FC<CheckboxProps> = props => {
  return (
    <Checkbox
      sx={{
        '& .MuiSvgIcon-root': {
          borderRadius: '8px',
        },
      }}
      {...props}
    />
  );
};
export default CustomCheckBox;
