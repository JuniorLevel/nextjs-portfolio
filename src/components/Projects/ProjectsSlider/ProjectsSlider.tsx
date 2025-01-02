'use client';
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
  );
}
export default ProjectsSlider;
