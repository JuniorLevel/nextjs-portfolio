import styles from './footer.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      © {currentYear} Frontend Web Development. Все права защищены.
    </footer>
  );
}
