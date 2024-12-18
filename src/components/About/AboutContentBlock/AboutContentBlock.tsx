import React from 'react';
import styles from './about.content.block.module.scss';
import AboutSkillsBlock from './AboutSkillsBlock/AboutStackBlock';
import AboutImageBlock from './AboutImageBlock/AboutImageBlock';

export default function AboutContentBlock() {
  return (
    <article className={styles.contentBlock}>
      <AboutImageBlock />
      <AboutSkillsBlock />
    </article>
  );
}
