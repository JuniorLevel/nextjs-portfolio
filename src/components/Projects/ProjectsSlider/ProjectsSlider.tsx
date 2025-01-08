'use client';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './projects.slider.module.scss';
import { projectsData } from './ProjectSlide/projects.data';
import ProjectSlide from './ProjectSlide/ProjectSlide';

function ProjectsSlider() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return (
    <>
      <Swiper
        effect={isDesktopOrLaptop ? 'coverflow' : 'slide'}
        speed={isDesktopOrLaptop ? 300 : 10}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        navigation
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 25,
          depth: 250,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className={styles.mySwiper}
      >
        {projectsData.map((project) => (
          <SwiperSlide key={project.id} className={styles.swiperSlide}>
            <ProjectSlide project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.mobileListProjects}>
        {projectsData.map((project) => (
          <div key={project.id} className={styles.container}>
            <Image
              className={styles.image}
              src={project.img}
              alt={`project-${project.id}-img`}
              width={250}
              height={250}
              {...(project.id === 0 ? { priority: true } : { loading: 'lazy' })}
            />
            <div>
              <div className={styles.title}>{project.title}</div>
              <div className={styles.description}>
                <p>{project.description}</p>
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
              <div className={styles.labels}>
                {project.labels.map((label, idx) => (
                  <span key={idx}>{label}</span>
                ))}
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}
export default ProjectsSlider;
