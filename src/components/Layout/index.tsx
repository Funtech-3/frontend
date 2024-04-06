import { Outlet } from 'react-router-dom';
// import Header from '../Header';
import ScrollToTop from '../../utils/ScrollToTop';

import { Suspense } from 'react';
import { CircularProgress } from '@mui/material';

export default function Layout() {
  return (
    <ScrollToTop>
      <main>
        <Suspense
          fallback={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <CircularProgress color="primary" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </ScrollToTop>
  );
}
