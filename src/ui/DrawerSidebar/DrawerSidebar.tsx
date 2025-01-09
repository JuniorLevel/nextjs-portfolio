'use client';

import Sidebar from '@/components/Sidebar/Sidebar';
import { ThemeContext } from '@/context/ThemeProvider/ThemeProvider';
import { Drawer } from '@mui/material';
import { useCallback, useContext, useEffect } from 'react';
import styles from './drawer.sidebar.module.scss';

export default function DrawerSidebar() {
  const { isOpenSidebarMenu, setIsOpenSidebarMenu } = useContext(ThemeContext);
  const handleCloseSidebar = useCallback(() => {
    setIsOpenSidebarMenu(false);
  }, [setIsOpenSidebarMenu]);

  useEffect(() => {
    document.addEventListener('click', handleCloseSidebar, true);
    return () => {
      document.removeEventListener('click', handleCloseSidebar, true);
    };
  }, [handleCloseSidebar, setIsOpenSidebarMenu]);

  return (
    <Drawer
      className={styles.drawer}
      open={isOpenSidebarMenu}
      onClose={handleCloseSidebar}
    >
      <Sidebar />
    </Drawer>
  );
}
