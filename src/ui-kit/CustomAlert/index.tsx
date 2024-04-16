import React from 'react';
import Alert, { AlertProps } from '@mui/material/Alert';
import { Typography } from '@mui/material';

const CustomAlert: React.FC<AlertProps> = ({ children, ...props }) => {
  return (
    <Alert
      {...props}
      sx={{
        borderRadius: '16px',
        boxShadow: '0px 6px 16px rgba(0, 20, 51, 0.15)',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{ fontSize: '18px', fontWeight: '500', color: '#222222' }}
      >
        {children}
      </Typography>
    </Alert>
  );
};

export default CustomAlert;
