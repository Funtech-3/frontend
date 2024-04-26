import { useActions } from '../../hooks/actions';
import { usePostRegisterMutation } from '../../store/funtech/funtech.api';
import { CustomButton } from '../../ui-kit';
import AvatarImg from '../AvatarImg';
import ProfileFormInfo from '../ProfileFormInfo';
import UserCard from '../UserCard';
import styles from './styles.module.scss';
import { Typography } from '@mui/material';

export default function EventRegister({ event }: { event: EventData }) {
  const { setIsModalOpen, setAlert } = useActions();
  const [register] = usePostRegisterMutation();

  console.log(event);
  function handleSubmit() {
    register(event.slug)
      .unwrap()
      .then(() =>
        setAlert({
          isOpen: true,
          severity: 'success',
          message: 'Вы успешно зарегестрировались',
        }),
      )
      .catch(err =>
        setAlert({ isOpen: true, severity: 'error', message: new Error(err) }),
      )
      .finally(() => setIsModalOpen(false));
  }

  function handleCancel() {
    setIsModalOpen(false);
  }

  return (
    <div className={styles.eventRegisterContainer}>
      <Typography fontSize={34} fontWeight={500}>
        Регистрация на участие
      </Typography>
      <Typography fontSize={18} fontWeight={500}>
        {event.name}
        <br />
        {event.date_event} | {event.city} {event.address}
      </Typography>
      <Typography fontSize={18}>
        Вы почти у цели! Укажите ваши данные. Если всё верно, нажмите
        «Зарегистрироваться». Вы можете внести изменения перед регистрацией.
      </Typography>
      <div className={styles.personalData}>
        <div className={styles.personalDataHeader}>
          <AvatarImg /> <UserCard />
        </div>
        <ProfileFormInfo />
      </div>
      <Typography fontSize={14} fontWeight={400}>
        Я даю согласие на передачу ООО «Яндекс» анкеты, содержащей мои
        персональные данные, которые могут быть использованы в соответствии с
        <strong> Политикой обработки персональных данных</strong>.
      </Typography>
      <div className={styles.buttonContainer}>
        <CustomButton variant="outlined" color="primary" onClick={handleCancel}>
          Отменить
        </CustomButton>
        <CustomButton onClick={handleSubmit}>Зарегистрироваться</CustomButton>
      </div>
    </div>
  );
}
