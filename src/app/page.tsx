import Link from 'next/link';
import styles from './layout.module.scss';

export default function IndexPage() {
  return (
    <section className={styles.layout}>
      <div className={styles.container}>
        <h1>Страница приветствия</h1>
        <Link href='dashboard'>Перейти</Link>
        <Link href='projects'>Перейти</Link>
      </div>
    </section>
  );
}
