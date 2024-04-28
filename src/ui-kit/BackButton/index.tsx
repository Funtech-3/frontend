import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import { Link } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function BackButton({
  color = 'text.secondary',
}: {
  color?: string;
}) {
  const navigate = useNavigate();

  return (
    <Link
      color={color}
      underline="hover"
      variant="body1"
      onClick={() => navigate(-1)}
      className={styles.backButton}
    >
      <ChevronLeftIcon /> Назад
    </Link>
  );
}
