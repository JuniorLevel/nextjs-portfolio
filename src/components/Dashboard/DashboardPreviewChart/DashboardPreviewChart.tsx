'use client';

import dynamic from 'next/dynamic';
import Loader from 'ui/Loader/Loader';
import styles from './dashboard.preview.chart.module.scss';

type Props = {};

const LineChart = dynamic(() => import('./LineChart/LineChart'), {
  loading: () => <Loader height={185} />,
  ssr: false,
});

function DashboardPreviewChart({}: Props) {
  return (
    <div className={styles.previewChart}>
      <h3>
        Оценка различных показателей <br /> криптовалют
      </h3>
      <div>{<LineChart />}</div>
    </div>
  );
}

export default DashboardPreviewChart;
