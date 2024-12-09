import React from 'react';
import styles from './about.image.block.module.scss';
import Image from 'next/image';

type Props = {};

export default function AboutImageBlock({}: Props) {
  return (
    <div className={styles.imageBlock}>
      <div className={styles.image}>
        <Image src='/profile.jpg' alt='profile' width={250} height={250} />
      </div>
      <p>Frontend Developer 🧑‍💻</p>
    </div>
  );
}
