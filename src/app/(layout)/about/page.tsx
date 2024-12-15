'use client';

import React from 'react';
import styles from './about.module.scss';
import AboutTextBlock from '@/components/About/AboutTextBlock/AboutTextBlock';
import AboutContentBlock from '@/components/About/AboutContentBlock/AboutContentBlock';

export default function AboutPage() {
  return (
    <section className={styles.container}>
      <AboutTextBlock />
      <AboutContentBlock />
    </section>
  );
}
