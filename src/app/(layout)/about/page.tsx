import React from 'react';
import styles from './about.module.scss';
import AboutTextBlock from '@/src/components/About/AboutTextBlock/AboutTextBlock';
import AboutContentBlock from '@/src/components/About/AboutContentBlock/AboutContentBlock';

export default function AboutPage() {
  return (
    <section className={styles.container}>
      <AboutTextBlock />
      <AboutContentBlock />
    </section>
  );
}
