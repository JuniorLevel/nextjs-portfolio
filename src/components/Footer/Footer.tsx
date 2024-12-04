import React from 'react';
import styles from './footer.module.scss';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className={styles.footer}>
      © 2024 Frontend Web Development. Все права защищены.
    </footer>
  );
}
