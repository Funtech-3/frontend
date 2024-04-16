import Chip, { ChipProps } from '@mui/material/Chip';

export default function CustomChip(props: ChipProps) {
  return (
    <Chip
      {...props}
      sx={{
        color: 'primary.contrastText',
        backgroundColor: 'text.secondary',
        ...props.sx,
      }}
    />
  );
}
