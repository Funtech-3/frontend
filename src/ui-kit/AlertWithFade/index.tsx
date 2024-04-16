import { Snackbar, Alert } from '@mui/material';

import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/actions';

export default function AlertWithFade() {
  const {
    severity,
    message,
    timeout = 2000,
    isOpen,
  } = useAppSelector(state => state.alert);

  const { setAlert } = useActions();

  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={timeout}
      onClose={() =>
        setAlert({ isOpen: false, message: '', severity: severity })
      }
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
}
