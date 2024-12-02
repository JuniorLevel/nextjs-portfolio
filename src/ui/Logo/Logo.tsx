import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { appRoutes } from '@/src/app/config/routes.config';
import styles from './logo.module.scss';

type Props = {};

export default function Logo({}: Props) {
  return (
    <div className={styles.logo}>
      <Link href={appRoutes.DASHBOARD}>
        <Image src='/logo.png' alt='logo' width={60} height={60} priority />
      </Link>
    </div>
  );
}
