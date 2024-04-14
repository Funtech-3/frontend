export const REGISTRATION_STATUSES: {
  [key: string]: { label: string; color: 'success' | 'error' | 'warning' };
} = {
  OPEN: { label: 'Регистрация открыта', color: 'success' },
  CLOSED: { label: 'Регистрация закрыта', color: 'error' },
  PENDING: { label: 'Ожидание регистрации', color: 'warning' },
};
