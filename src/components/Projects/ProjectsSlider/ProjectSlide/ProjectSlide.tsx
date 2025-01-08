import { useSlideHover } from '@/hooks/useSlideHover';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material';
import Image from 'next/image';
import styles from './project.slide.module.scss';
import { IProjectData } from './projects.data';

type Props = { project: IProjectData };

function ProjectSlide({ project }: Readonly<Props>) {
  const { slideDivRef, glowDivRef } = useSlideHover();

  return (
    <div className={styles.slide} ref={slideDivRef}>
      <h2 className={styles.title}>{project.title}</h2>
      <div className={styles.image}>
        <Image
          src={project.img}
          alt={`project-${project.id}-img`}
          width={300}
          height={300}
          {...(project.id === 0 ? { priority: true } : { loading: 'lazy' })}
        />
      </div>
      <div className={styles.buttons}>
        <Button className={styles.btn} variant='outlined'>
          <a href={project.url} target='_blank'>
            Перейти на сайт
          </a>
        </Button>
        <div className={styles.icon}>
          <a
            href={project.repositoryUrl}
            target='_blank'
            aria-label='Открыть Github репозиторий проекта'
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className={styles.description}>
        <p>{project.description}</p>
      </div>
      <div className={styles.labels}>
        {project.labels.map((label, idx) => (
          <span key={idx}>{label}</span>
        ))}
      </div>
      <div className={styles.glow} ref={glowDivRef} />
    </div>
  );
}

export default ProjectSlide;
