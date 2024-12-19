'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import dynamic from 'next/dynamic';
import { useResponsiveSwiperContainer } from '@/hooks/useResponsiveSwiperContainer';

type Props = {};

const DashboardCoin = dynamic(() => import('./DashboardCoin/DashboardCoin'), {
  ssr: false,
});

function DashboardCoinsSlider({}: Props) {
  const { windowWidth } = useResponsiveSwiperContainer();

  return (
    <Swiper
      style={{
        maxWidth: `${!windowWidth ? 1920 * 0.8 : windowWidth * 0.8}px`,
        overflow: 'visible',
        margin: 0,
      }}
      loop={true}
      slidesPerView={'auto'}
      spaceBetween={16}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
    >
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <SwiperSlide key={item} style={{ maxWidth: '455px' }}>
          <DashboardCoin />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default DashboardCoinsSlider;
