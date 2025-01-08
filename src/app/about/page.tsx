import AboutContentBlock from '@/components/About/AboutContentBlock/AboutContentBlock';
import AboutTextBlock from '@/components/About/AboutTextBlock/AboutTextBlock';
import styles from './about.module.scss';

export default function AboutPage() {
  return (
    <section className={styles.container}>
      <AboutTextBlock />
      <AboutContentBlock />
    </section>
  );
}
