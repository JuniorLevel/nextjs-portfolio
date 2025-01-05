import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import { appRoutes } from '@/config/routes.config';
import Link from 'next/link';
import styles from './(layout)/layout.module.scss';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebarWrapper}>
        <Sidebar />
      </div>
      <div className={styles.container}>
        <Header />
        <main className={styles.content}>
          <div className={styles.notFound}>
            <div className={styles.notFound404}>
              <h1>404</h1>
              <p>Ресурс не найден</p>
              <Link href={appRoutes.DASHBOARD} className={styles.btn}>
                На главную
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
