'use client';

import { coins } from '@/api/fake.data';
import dynamic from 'next/dynamic';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DashboardCoinSkeleton from './DashboardCoin/DashboardCoinSkeleton/DashboardCoinSkeleton';
import styles from './dashboard.coins.slider.module.scss';

const DashboardCoin = dynamic(() => import('./DashboardCoin/DashboardCoin'), {
  loading: () => <DashboardCoinSkeleton />,
  ssr: false,
});

type Props = {
  data: { result: any[] };
};

export default function DashboardCoinsSlider({ data }: Readonly<Props>) {
  const currentData = data?.result ? data.result : coins.result;
  return (
    <Swiper
      className={styles.mySwiper}
      style={{
        overflow: 'visible',
        margin: 0,
      }}
      loop={true}
      slidesPerView={'auto'}
      spaceBetween={16}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay]}
      onSlideChange={(swiper) => {
        if (swiper.activeIndex === swiper.slides.length - 3) {
          swiper.slideTo(0);
          swiper.autoplay.start();
        }
      }}
    >
      {currentData.map((coin, idx) => (
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
