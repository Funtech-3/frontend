import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
  return (
    <Stack sx={{ color: 'yellow.500' }} spacing={2} direction="row">
      <CircularProgress color="inherit" />
    </Stack>
  );
}
