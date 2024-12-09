import ProjectsSlider from '@/src/components/Projects/ProjectsSlider/ProjectsSlider';
import React from 'react';
import style from './projects.module.scss';

export default function ProjectsPage() {
  return (
    <section className={style.container}>
      <ProjectsSlider />
    </section>
  );
}
