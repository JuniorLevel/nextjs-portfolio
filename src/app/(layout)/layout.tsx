import { ReactNode } from 'react';
import styles from './layout.module.scss';
import Sidebar from '@/src/ui/Sidebar/Sidebar';

interface IMainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: Readonly<IMainLayoutProps>) {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.container}>
        <header>Header</header>
        <main className={styles.content}>{children}</main>
        <footer>Footer</footer>
      </div>
    </div>
  );
}
