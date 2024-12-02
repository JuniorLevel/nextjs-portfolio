import { ReactNode } from 'react';
import styles from './layout.module.scss';
import Sidebar from '@/src/ui/Sidebar/Sidebar';
import Footer from '@/src/ui/Footer/Footer';
import Header from '@/src/ui/Header/Header';

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
