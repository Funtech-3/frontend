import { lazy } from 'react';

const MainPage = lazy(() => import('../pages/MainPage'));
const MyEventsPage = lazy(() => import('../pages/MyEventsPage'));
const EventPage = lazy(() => import('../pages/EventPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export { MainPage, MyEventsPage, EventPage, ProfilePage, NotFoundPage };
