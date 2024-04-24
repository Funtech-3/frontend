import Typography from '@mui/material/Typography';
import styles from './styles.module.scss';

export default function SpeakerInfo({
  small = false,
  data,
}: {
  small?: boolean;
  data: SpeakerType;
}) {
  return (
    <div className={`${styles.container} ${small && styles.container_small}`}>
      <img
        src={data.image}
        alt="Speaker"
        className={`${styles.image} ${small && styles.image_small}`}
      />
      <div
        className={`${styles.textContainer} ${small && styles.textContainer_small}`}
      >
        <Typography fontWeight={500} fontSize={!small ? 20 : 16}>
          {data.speaker_name}
        </Typography>
        <Typography color="text.secondary">{data.work_place}</Typography>
        <Typography fontSize={!small ? 16 : 14}>{data.position}</Typography>
      </div>
    </div>
  );
}
