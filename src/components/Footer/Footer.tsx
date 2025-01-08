import styles from './footer.module.scss';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © {currentYear} Frontend Web Development. Все права защищены.
    </footer>
  );
}
