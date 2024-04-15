export const REGISTRATION_STATUSES: {
  [key: string]: { label: string; color: 'success' | 'error' | 'warning' };
} = {
  OPEN: { label: 'Регистрация открыта', color: 'success' },
  CLOSED: { label: 'Регистрация закрыта', color: 'error' },
  PENDING: { label: 'Ожидание регистрации', color: 'warning' },
};

export const PROFILE_TABS = ['Личные данные', 'Интересы', 'Уведомления'];

export const MY_EVENTS_TABS = ['Предстоящие', 'Прошедшие', 'Избранное'];
