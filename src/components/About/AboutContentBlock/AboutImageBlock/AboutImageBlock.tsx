import Image from 'next/image';
import styles from './about.image.block.module.scss';

export default function AboutImageBlock() {
  return (
    <div className={styles.imageBlock}>
      <div className={styles.image}>
        <Image
          src='/profile.jpg'
          alt='profile'
          width={250}
          height={250}
          loading='lazy'
        />
      </div>
      <p>Frontend Developer 🧑‍💻</p>
    </div>
  );
}
