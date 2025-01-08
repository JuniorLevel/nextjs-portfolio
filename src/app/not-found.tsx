import { appRoutes } from '@/config/routes.config';
import Link from 'next/link';
import styles from './layout.module.scss';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFound404}>
        <h1>404</h1>
        <p>Ресурс не найден</p>
        <Link href={appRoutes.DASHBOARD} className={styles.btn}>
          На главную
        </Link>
      </div>
    </div>
  );
}
