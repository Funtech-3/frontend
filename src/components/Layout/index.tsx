import { Outlet } from 'react-router-dom';
import ScrollToTop from '../../utils/ScrollToTop';
import { Suspense } from 'react';
import styles from './styles.module.scss';
import Header from '../Header';
import Footer from '../Footer';
import { Loader } from '../../ui-kit';

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
                <Loader />
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
