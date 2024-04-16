import { Stack, Autocomplete, TextField } from '@mui/material';

export default function CustomTextField() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="event"
        disableClearable
        options={events.map(option => option.title)}
        renderInput={params => (
          <TextField
            {...params}
            label="Поиск события"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}

const events = [
  { title: 'Ice Cream Festival' },
  { title: 'VK Fest' },
  { title: 'StereoLeto' },
];
