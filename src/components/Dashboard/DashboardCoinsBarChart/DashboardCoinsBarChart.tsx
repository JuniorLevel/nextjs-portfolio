'use client';

import { getAppData } from '@/app/actions';
import dynamic from 'next/dynamic';
import useSWR from 'swr';
import Loader from 'ui/Loader/Loader';
import styles from './dashboard.coins.bar.chart.module.scss';

const BarChart = dynamic(() => import('./BarChart/BarChart'), {
  loading: () => <Loader height={155} />,
  ssr: false,
});

export default function DashboardCoinsBarChart() {
  const { data } = useSWR('https://openapiv1.coinstats.app/coins', getAppData);
  return (
    <div className={styles.barChartBlock}>
      <h3>
        Объём торгов и рыночная <br /> капитализация
      </h3>
      <div className={styles.container}>
        <BarChart data={data} />
      </div>
    </div>
  );
}
