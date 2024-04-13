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
