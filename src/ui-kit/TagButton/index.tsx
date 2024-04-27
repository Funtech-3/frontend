import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import CustomButton from '../CustomButton';

export default function TagButton({
  label,
  filled = false,
  onClick,
}: {
  label: string;
  filled?: boolean;
  onClick?: () => void;
}) {
  return (
    <CustomButton
      variant={filled ? 'contained' : 'outlined'}
      color="primary"
      size="medium"
      sx={{
        fontWeight: '400',
        fontSize: '13px',
      }}
      endIcon={filled ? <DoneIcon /> : <AddIcon color="disabled" />}
      onClick={onClick}
    >
      {label}
    </CustomButton>
  );
}
