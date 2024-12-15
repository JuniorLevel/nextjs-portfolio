import React from 'react';
import styles from './layout.module.scss';
import Link from 'next/link';
import { appRoutes } from '../config/routes.config';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFound404}>
        <h1>404</h1>
        <p>Page not found</p>
        <Link href={appRoutes.DASHBOARD} className={styles.btn}>
          Go back
        </Link>
      </div>
    </div>
  );
}
