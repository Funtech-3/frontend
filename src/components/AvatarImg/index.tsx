import defaultAvatar from '../../assets/images/avatar.webp';
import styles from './styles.module.scss';
import { useAppSelector } from '../../hooks/redux';

export default function AvatarImg() {
  const avatar = useAppSelector(state => state.user.user.avatar);

  function handleAvatarUrl(url: string) {
    return url.replace(/^\/media\/https%3A/, 'https://');
  }
  return (
    <img
      className={styles.avatar}
      src={(avatar && handleAvatarUrl(avatar)) || defaultAvatar}
      alt="Аватар"
    />
  );
}
