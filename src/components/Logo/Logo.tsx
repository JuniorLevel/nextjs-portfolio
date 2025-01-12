import { appRoutes } from '@/config/routes.config';
import Image from 'next/image';
import Link from 'next/link';
import styles from './logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link href={appRoutes.DASHBOARD}>
        <Image src='/logo.svg' alt='logo' width={50} height={50} />
      </Link>
    </div>
  );
}
