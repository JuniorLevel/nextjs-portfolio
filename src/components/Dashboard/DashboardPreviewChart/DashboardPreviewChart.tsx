'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import styles from './dashboard.preview.chart.module.scss';

type Props = {};

const LineChart = dynamic(() => import('./LineChart/LineChart'), {
  ssr: false,
});

function DashboardPreviewChart({}: Props) {
  return (
    <div className={styles.previewChart}>
      <h3>Доступные биржи для сделок</h3>
      <div>{<LineChart />}</div>
    </div>
  );
}

export default DashboardPreviewChart;
