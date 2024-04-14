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
  name: string;
  city: string;
  date_event: string;
  registration_status: string;
  tags: TagType[];
  preview_image: string;
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
