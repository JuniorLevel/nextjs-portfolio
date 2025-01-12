import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DrawerSidebar from 'ui/DrawerSidebar/DrawerSidebar';
import ThemeProvider from '../context/ThemeProvider/ThemeProvider';
import '../themes/global.scss';
import styles from './layout.module.scss';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Crypto & Portfolio app',
  description:
    'Крипто-приложение для отслеживания текущего курса цифровых валют',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={roboto.className} data-app-theme='dark'>
        <ThemeProvider>
          <div className={styles.wrapper}>
            <div className={styles.sidebarWrapper}>
              <Sidebar />
            </div>
            <div className={styles.container}>
              <Header />
              <main className={styles.content}>{children}</main>
              <Footer />
            </div>
            <DrawerSidebar />
          </div>
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
