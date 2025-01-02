'use client';

import { coins } from '@/api/fake.data';
import { useResponsiveSwiperContainer } from '@/hooks/useResponsiveSwiperContainer';
import dynamic from 'next/dynamic';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DashboardCoinSkeleton from './DashboardCoin/DashboardCoinSkeleton/DashboardCoinSkeleton';

const DashboardCoin = dynamic(() => import('./DashboardCoin/DashboardCoin'), {
  loading: () => <DashboardCoinSkeleton />,
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
      scrollbar={true}
      spaceBetween={16}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay]}
    >
      {result.map((coin, idx) => (
        <SwiperSlide
          key={coin.name}
          style={{ maxWidth: '455px', marginRight: '16px' }}
        >
          <DashboardCoin coin={coin} coinIndex={idx} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default DashboardCoinsSlider;
