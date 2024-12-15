'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import ProjectSlide from './ProjectSlide/ProjectSlide';
import { projectsData } from './ProjectSlide/projects.data';
import styles from './projects.slider.module.scss';
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/navigation';

function ProjectsSlider() {
  return (
    <Swiper
      effect={'coverflow'}
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
  );
}
export default ProjectsSlider;
