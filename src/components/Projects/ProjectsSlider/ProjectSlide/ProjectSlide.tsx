import React from 'react';
import styles from './project.slide.module.scss';
import Image from 'next/image';
import { IProjectData } from './projects.data';
import { Button } from '@mui/material';
import { FaGithub } from 'react-icons/fa';
import { useSlideHover } from '@/hooks/useSlideHover';

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
          priority
        />
      </div>
      <div className={styles.buttons}>
        <Button className={styles.btn} variant='outlined'>
          <a href={project.url} target='_blank'>
            Перейти на сайт
          </a>
        </Button>
        <div className={styles.icon}>
          <a href={project.repositoryUrl} target='_blank'>
            <FaGithub />
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
