'use client';

import dynamic from 'next/dynamic';
import Loader from 'ui/Loader/Loader';
import styles from './dashboard.preview.chart.module.scss';

const LineChart = dynamic(() => import('./LineChart/LineChart'), {
  loading: () => <Loader height={185} />,
  ssr: false,
});

type Props = { data: { result: any[] } };

export default function DashboardPreviewChart({ data }: Readonly<Props>) {
  return (
    <div className={styles.previewChart}>
      <h3>
        Оценка различных показателей <br /> криптовалют
      </h3>
      <div>{<LineChart data={data} />}</div>
    </div>
  );
}
