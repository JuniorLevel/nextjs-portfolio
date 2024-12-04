'use client';

import React from 'react';
import styles from './header.module.scss';
import { Avatar } from '@mui/material';
import { usePathname } from 'next/navigation';
import { getCurrentHeaderInfo } from '../../utils/getCurrentHeaderInfo';

type Props = {};

export default function Header({}: Props) {
  const pathname = usePathname();
  const info = getCurrentHeaderInfo(pathname);

  return (
    <header className={styles.header}>
      <div className={styles.title}>{info?.text ?? ''}</div>
      <div className={styles.panel}>
        <Avatar className={styles.avatar} sx={{ width: 47, height: 47 }} />
      </div>
    </header>
  );
}
