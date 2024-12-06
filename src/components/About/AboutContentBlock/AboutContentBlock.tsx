import React from 'react';
import styles from './about.content.block.module.scss';
import AboutSkillsBlock from './AboutSkillsBlock/AboutStackBlock';
import AboutImageBlock from './AboutImageBlock/AboutImageBlock';

type Props = {};

export default function AboutContentBlock({}: Props) {
  return (
    <div className={styles.contentBlock}>
      <AboutImageBlock />
      <AboutSkillsBlock />
    </div>
  );
}
