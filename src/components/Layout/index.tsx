import { Outlet } from 'react-router-dom';
import ScrollToTop from '../../utils/ScrollToTop';
import { Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import styles from './styles.module.scss';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout() {
  return (
    <ScrollToTop>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>
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
        <Footer />
      </div>
    </ScrollToTop>
  );
}
