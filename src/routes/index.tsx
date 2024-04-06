import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import {
  MainPage,
  EventPage,
  MyEventsPage,
  ProfilePage,
  NotFoundPage,
} from './components';

import Layout from '../components/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<NotFoundPage />}>
        <Route index element={<MainPage />} />
        <Route path="event" element={<EventPage />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path="my-events" element={<MyEventsPage />} />
        <Route path="profile" element={<ProfilePage />} />

        {/* </Route> */}
      </Route>
    </>,
  ),
  {
    basename: '/',
  },
);

export default router;
