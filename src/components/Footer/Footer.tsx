import React, { useMemo } from 'react';
import styles from './footer.module.scss';

export default function Footer() {
  const currentYear = useMemo(() => {
    const date = new Date();
    return date.getFullYear();
  }, []);
  return (
    <footer className={styles.footer}>
      © {currentYear} Frontend Web Development. Все права защищены.
    </footer>
  );
}
