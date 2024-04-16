import { Stack, CircularProgress } from '@mui/material';

export default function Loader() {
  return (
    <Stack spacing={2} direction="row">
      <CircularProgress color="secondary" />
    </Stack>
  );
}
