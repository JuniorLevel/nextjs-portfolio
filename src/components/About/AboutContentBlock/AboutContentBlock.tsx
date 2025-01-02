import styles from './about.content.block.module.scss';
import AboutImageBlock from './AboutImageBlock/AboutImageBlock';
import AboutSkillsBlock from './AboutSkillsBlock/AboutStackBlock';

export default function AboutContentBlock() {
  return (
    <article className={styles.contentBlock}>
      <AboutImageBlock />
      <AboutSkillsBlock />
    </article>
  );
}
