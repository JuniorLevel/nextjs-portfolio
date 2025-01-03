import React from 'react';
import { Line, LineChart, Tooltip, XAxis } from 'recharts';
import { coins } from '@/api/fake.data';
import styles from './line.chart.module.scss';
import { DARK_COLORS_CHART, LIGHT_COLORS_CHART } from '@/config/colors.config';

type Props = {};

const { result } = coins;

const CustomTooltip = ({
  active,
  payload,
}: {
  active: boolean;
  payload: any;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p>Название валюты: {payload[0].payload.name}</p>
        <p>Оценка ликвидности: {payload[0].value}$</p>
        <p>Оценка волатильности: {payload[1].value}$</p>
        <p>Показатель рисков: {payload[2].value}$</p>
        <p>Оценка рыночной капитализации: {payload[3].value}$</p>
      </div>
    );
  }
};

function LinesChart({}: Props) {
  return (
    <LineChart
      width={700}
      height={185}
      data={result}
      margin={{
        top: 5,
        bottom: 5,
      }}
    >
      <Tooltip content={<CustomTooltip active payload />} />
      <XAxis dataKey='name' />
      <Line
        type='monotone'
        dataKey='liquidityScore'
        stroke={
          document.body.getAttribute('data-app-theme') === 'dark'
            ? `${DARK_COLORS_CHART.chartColor1}`
            : `${LIGHT_COLORS_CHART.chartColor1}`
        }
        strokeWidth={2}
        dot={false}
      />
      <Line
        type='monotone'
        dataKey='volatilityScore'
        stroke={
          document.body.getAttribute('data-app-theme') === 'dark'
            ? `${DARK_COLORS_CHART.chartColor2}`
            : `${LIGHT_COLORS_CHART.chartColor2}`
        }
        strokeWidth={2}
        dot={false}
      />
      <Line
        type='monotone'
        dataKey='riskScore'
        stroke={
          document.body.getAttribute('data-app-theme') === 'dark'
            ? `${DARK_COLORS_CHART.chartColor3}`
            : `${LIGHT_COLORS_CHART.chartColor3}`
        }
        strokeWidth={2}
        dot={false}
      />
      <Line
        type='monotone'
        dataKey='marketCapScore'
        stroke={
          document.body.getAttribute('data-app-theme') === 'dark'
            ? `${DARK_COLORS_CHART.chartColor4}`
            : `${LIGHT_COLORS_CHART.chartColor4}`
        }
        strokeWidth={2}
        dot={false}
      />
    </LineChart>
  );
}

export default LinesChart;
