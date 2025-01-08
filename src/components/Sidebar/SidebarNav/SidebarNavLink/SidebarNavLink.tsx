'use client';

import { SvgIconComponent } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './sidebar.nav.link.module.scss';

type Props = {
  title: string;
  path: string;
  icon: SvgIconComponent;
};

export default function SidebarNavLink({ title, path, icon }: Readonly<Props>) {
  const pathname = usePathname();

  return (
    <li className={pathname === path ? styles.linkActive : styles.link}>
      <Tooltip title={title} placement='right'>
        <Link href={path}>{React.createElement(icon)}</Link>
      </Tooltip>
    </li>
  );
}
