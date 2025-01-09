'use client';

import dynamic from 'next/dynamic';
import Loader from 'ui/Loader/Loader';
import styles from './dashboard.coins.bar.chart.module.scss';

type Props = {
  data: { result: any[] };
};

const BarChart = dynamic(() => import('./BarChart/BarChart'), {
  loading: () => <Loader height={150} />,
  ssr: false,
});

export default function DashboardCoinsBarChart({ data }: Readonly<Props>) {
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
