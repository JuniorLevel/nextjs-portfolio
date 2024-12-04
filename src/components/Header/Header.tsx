'use client';

import React from 'react';
import styles from './header.module.scss';
import { Avatar } from '@mui/material';
import { usePathname } from 'next/navigation';
import { getCurrentHeaderInfo } from '../../utils/getCurrentHeaderInfo';
import { Oswald } from 'next/font/google';

type Props = {};

const oswald = Oswald({ subsets: ['latin'], weight: ['400'] });

export default function Header({}: Props) {
  const pathname = usePathname();
  const info = getCurrentHeaderInfo(pathname);

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <span className={oswald.className}>{info?.text ?? ''}</span>
      </div>
      <div className={styles.panel}>
        <Avatar className={styles.avatar} sx={{ width: 47, height: 47 }} />
      </div>
    </header>
  );
}
