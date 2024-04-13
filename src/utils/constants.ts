export const CITIES = [
  {
    id: 1,
    name: 'Москва',
  },
  {
    id: 2,
    name: 'Санкт-Петербург',
  },
  {
    id: 3,
    name: 'Новосибирск',
  },
  {
    id: 4,
    name: 'Екатеринбург',
  },
  {
    id: 5,
    name: 'Казань',
  },
  {
    id: 6,
    name: 'Нижний Новгород',
  },
  {
    id: 7,
    name: 'Красноярск',
  },
  {
    id: 8,
    name: 'Челябинск',
  },
  {
    id: 9,
    name: 'Самара',
  },
  {
    id: 10,
    name: 'Уфа',
  },
  {
    id: 11,
    name: 'Ростов-на-Дону',
  },
  {
    id: 12,
    name: 'Краснодар',
  },
  {
    id: 13,
    name: 'Омск',
  },
  {
    id: 14,
    name: 'Владивосток',
  },
  {
    id: 15,
    name: 'Калининград',
  },
  {
    id: 16,
    name: 'Иннополис',
  },
];

export const PROGRAMMES = [
  {
    id: 1,
    title: 'Программирование',
  },
  {
    id: 2,
    title: 'IT-Архитектура',
  },
  {
    id: 3,
    title: 'Аналитика',
  },
  {
    id: 4,
    title: 'Дизайн',
  },
  {
    id: 5,
    title: 'Тестирование',
  },
  {
    id: 6,
    title: 'Нейросети',
  },
  {
    id: 7,
    title: 'Data Science',
  },
  {
    id: 8,
    title: 'Машинное обучение',
  },
  {
    id: 9,
    title: 'Карьера',
  },
  {
    id: 10,
    title: 'Менеджмент',
  },
  {
    id: 11,
    title: 'Бизнес',
  },
  {
    id: 12,
    title: 'Маркетинг',
  },
];

export const EVENTS = [
  {
    id: 1,
    title: 'Митапчик',
    description:
      'Какой-то митап о чем-то там, все как обычно, лишь бы базу наполнить',
    slug: 'event-slug-1',
    city_id: 1,
    address: 'адрес',
    date: '2024-04-18',
    registration_status: 'OPEN',
    tags_id: 2,
    mode: 'ONLINE',
    type_id: 4,
    preview_image:
      'https://avatars.mds.yandex.net/get-events/1525030/2a0000018a4d7bd8a61be3300e14a28fe940/286x137x2',
    image:
      'https://avatars.mds.yandex.net/get-lpc/10704932/2bf2b0af-acf6-4696-acf2-71f4e83bbcf1/width_2560_q70',
    favorited_by: 3,
  },
  {
    id: 2,
    title: 'About:сloud — infrastructure',
    description:
      'Yet Another Level — это серия митапов про жизнь в IT-индустрии. Саморазвитие, прокачка софт-скилов, карьера, управление в IT, нетворкинг и многое другое. В прошлом году мы говорили о том, как управлять собой, командой, проектом, компанией — и не поседеть к тридцати годам. В этот раз обсудим подход к карьере и жизни, а главное — как оставаться счастливыми на работе. About:cloud — infrastructure — традиционный ежегодный митап, на котором разработчики Yandex Cloud рассказывают об устройстве наших сервисов, делятся примерами их применения и обмениваются опытом с гостями.',
    slug: 'event-slug-2',
    city_id: 3,
    address: 'Петербургская 18',
    date: '2024-04-21',
    registration_status: 'OPEN',
    tags_id: 3,
    mode: 'OFFLINE',
    type_id: 1,
    preview_image:
      'https://avatars.mds.yandex.net/get-events/1525060/2a0000018eaf06a3350d5649a9f458dfc7da/286x137x2',
    image:
      'https://avatars.mds.yandex.net/get-lpc/12373972/42e287a9-c99b-40d8-87cd-64e0f2783a0c/width_2560_q70',
    favorited_by: 2,
  },
  {
    id: 3,
    title: 'About:сloud — infrastructure',
    description: '',
    slug: 'event-slug-3',
    city_id: 6,
    address: 'Космонавтов 36',
    date: '2024-04-12',
    registration_status: 'CLOSED',
    tags_id: 1,
    mode: 'OFFLINE',
    type_id: 1,
    preview_image:
      'https://static.tildacdn.com/tild3236-6165-4262-b565-373866613339/Group_2087327904.png',
    image:
      'https://avatars.mds.yandex.net/get-events/1522412/2a0000018ea438f1886a7af4f070ac757e83/286x137x2',
    favorited_by: 1,
  },
  {
    id: 4,
    title: 'About:сloud — infrastructure',
    description: '',
    slug: 'event-slug-4',
    city_id: 4,
    address: 'Интситутская 4/1',
    date: '2024-04-28',
    registration_status: 'PENDING',
    tags_id: 1,
    mode: 'OFFLINE',
    type_id: 2,
    preview_image:
      'https://avatars.mds.yandex.net/get-events/1651727/2a0000018e8410b18e212fad3d8a763064ec/286x137x2',
    image:
      'https://avatars.mds.yandex.net/get-lpc/12373972/f1b832b2-8234-474e-9624-6d0d150e8f94/width_2560_q70',
    favorited_by: 2,
  },
];

export const REGISTRATION_STATUSES: {
  [key: string]: { label: string; color: 'success' | 'error' | 'warning' };
} = {
  OPEN: { label: 'Регистрация открыта', color: 'success' },
  CLOSED: { label: 'Регистрация закрыта', color: 'error' },
  PENDING: { label: 'Ожидание регистрации', color: 'warning' },
};
