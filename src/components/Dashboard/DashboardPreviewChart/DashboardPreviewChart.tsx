'use client';

import { getCoinsData } from '@/app/actions';
import dynamic from 'next/dynamic';
import useSWR from 'swr';
import Loader from 'ui/Loader/Loader';
import styles from './dashboard.preview.chart.module.scss';

const LineChart = dynamic(() => import('./LineChart/LineChart'), {
  loading: () => <Loader height={185} />,
  ssr: false,
});

export default function DashboardPreviewChart() {
  const { data } = useSWR(
    'https://openapiv1.coinstats.app/coins',
    getCoinsData
  );
  return (
    <div className={styles.previewChart}>
      <h3>
        Оценка различных показателей <br /> криптовалют
      </h3>
      <div>{<LineChart data={data} />}</div>
    </div>
  );
}
