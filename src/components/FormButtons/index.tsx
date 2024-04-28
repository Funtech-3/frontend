import { Box } from '@mui/material';
import { CustomButton } from '../../ui-kit';
import styles from './styles.module.scss';

export default function FormButtons({
  revertChanges,
  handleSubmit,
  revertText = 'Отменить',
  submitText = 'Сохранить изменения',
}: {
  revertChanges: () => void;
  handleSubmit: () => void;
  revertText?: string;
  submitText?: string;
}) {
  return (
    <Box className={styles.buttons}>
      <CustomButton color="primary" variant="outlined" onClick={revertChanges}>
        {revertText}
      </CustomButton>
      <CustomButton onClick={handleSubmit}>{submitText}</CustomButton>
    </Box>
  );
}
