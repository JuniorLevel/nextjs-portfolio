import React from 'react';
import styles from './sidebar.module.scss';
import SidebarNav from './SidebarNav/SidebarNav';
import { sidebarLinks } from './SidebarNav/sidebar.nav';
import Logo from '../Logo/Logo';

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <SidebarNav sidebarLinks={sidebarLinks} />
    </div>
  );
}
