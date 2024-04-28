import Chip, { ChipProps } from '@mui/material/Chip';

export default function CustomChip(props: ChipProps) {
  return (
    <Chip
      {...props}
      sx={{
        color: 'primary.contrastText',
        backgroundColor: 'hsla(0, 0%, 13%, 0.55)',
        ...props.sx,
      }}
    />
  );
}
