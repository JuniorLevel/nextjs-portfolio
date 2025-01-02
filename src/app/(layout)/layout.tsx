'use client';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import { ThemeContext } from '@/context/ThemeProvider/ThemeProvider';
import { Drawer } from '@mui/material';
import { ReactNode, useContext, useEffect } from 'react';
import styles from './layout.module.scss';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Readonly<Props>) {
  const { isOpenSidebarMenu, setIsOpenSidebarMenu } = useContext(ThemeContext);
  const handleCloseSidebar = () => setIsOpenSidebarMenu(false);

  useEffect(() => {
    document.addEventListener('click', handleCloseSidebar, true);
    return () => {
      document.removeEventListener('click', handleCloseSidebar, true);
    };
  }, [setIsOpenSidebarMenu]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebarWrapper}>
        <Sidebar />
      </div>
      <div className={styles.container}>
        <Header />
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
      <Drawer
        className={styles.drawer}
        open={isOpenSidebarMenu}
        onClose={handleCloseSidebar}
      >
        <Sidebar />
      </Drawer>
    </div>
  );
}
