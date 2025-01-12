import ProjectsSlider from '@/components/Projects/ProjectsSlider/ProjectsSlider';
import style from './projects.module.scss';

export default async function ProjectsPage() {
  return (
    <section className={style.container}>
      <ProjectsSlider />
    </section>
  );
}
