'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import dynamic from 'next/dynamic';
import { useResponsiveSwiperContainer } from '@/hooks/useResponsiveSwiperContainer';
import { coins } from '@/api/fake.data';

const DashboardCoin = dynamic(() => import('./DashboardCoin/DashboardCoin'), {
  ssr: false,
});

const { result } = coins;

function DashboardCoinsSlider() {
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
        disableOnInteraction: true,
      }}
      modules={[Autoplay, Navigation]}
    >
      {result.map((coin, idx) => (
        <SwiperSlide key={coin.name} style={{ maxWidth: '455px' }}>
          <DashboardCoin coin={coin} coinIndex={idx} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default DashboardCoinsSlider;
