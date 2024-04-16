import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const CustomTextField: React.FC<TextFieldProps> = props => {
  return (
    <TextField
      {...props}
      InputLabelProps={{
        sx: {
          color: 'rgba(0, 0, 0, 0.6)',
          fontSize: '13px',
          fontWeight: 500,
          transform: 'translate(20px, -30px) scale(1)',
          '&.Mui-focused': {
            color: 'primary.main',
          },
        },
      }}
      InputProps={{
        disableUnderline: true,
      }}
      sx={{
        borderRadius: '40px',
        backgroundColor: 'grey.100',
        width: '100%',
        height: '40px',
        margin: '20px 0px ',
        boxShadow: '0px 2px 8px rgba(0, 20, 51, 0.15)',

        color: 'rgba(0, 0, 0, 0.87)',
        '& .MuiInputBase-input': {
          padding: '0px 20px',
          margin: '0px',
        },

        '& .MuiInputBase-root': {
          height: '40px',
          margin: '0px',
        },

        ...props.sx,
      }}
    />
  );
};

export default CustomTextField;
