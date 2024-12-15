import { ReactNode } from 'react';
import styles from './layout.module.scss';
import Sidebar from '@/components/Sidebar/Sidebar';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Readonly<Props>) {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.container}>
        <Header />
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
