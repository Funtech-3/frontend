type CityType = {
  id: number;
  name: string;
};

type TagType = {
  id: number;
  title: string;
};

type EventType = {
  event_id: number;
  slug: string;
  name: string;
  city: string;
  description: string;
  date_event: string;
  registration_status: string;
  tags: TagType[];
  preview_image: string;
  is_in_favorites?: boolean;
  is_registrated?: boolean;
  user_registration_status?: string;
};

type DetailedEventType = {
  event_id: number;
  slug: string;
  name: string;
  city: string;
  address: string;
  date_event: string;
  registration_status: string;
  tags: TagType[];
  event_detail_image: string;
  event_description: string;
  event_type: string;
  event_format: string;
  event_program: EventProgram[];
  is_in_favorites: boolean;
  is_registrated: boolean;
  user_registration_status: string;
};

type EventProgramType = {
  start_time: string;
  title: string;
  description: string;
  speakers: Speaker[];
};

type SpeakerType = {
  speaker_id: string;
  speaker_name: string;
  work_place: string;
  position: string;
  image: string;
};

type ApiResponseType<T> = {
  count: number;
  next: string;
  previous: string;
  results: T[];
};

type FiltersStateType = {
  city?: number[];
  date_after?: string;
  date_before?: string;
  is_favorited?: boolean;
  is_registrated?: boolean;
  limit?: number;
  offset?: number;
  search?: string;
  show_old?: true | false | null;
  tags?: number[];
};

type UserType = {
  yandex_id?: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  email?: string;
  telegram_username?: string;
  position?: string;
  work_place?: string;
  avatar?: string;
};

type YaIdResponseType = {
  id: string;
  login: string;
  client_id: string;
  display_name: string;
  real_name: string;
  first_name: string;
  last_name: string;
  sex?: string;
  default_email: string;
  emails: string[];
  birthday: string;
  default_avatar_id: string;
  is_avatar_empty: boolean;
  default_phone: DefaultPhoneType;
  psuid: string;
};

type DefaultPhoneType = {
  id: number;
  number: string;
};
