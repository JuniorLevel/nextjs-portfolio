import React from 'react';
import { Line, LineChart, Tooltip, XAxis } from 'recharts';
import { coins } from '@/api/fake.data';
import styles from './line.chart.module.scss';

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
      height={200}
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
        stroke='#17ffc1'
        strokeWidth={2}
        dot={false}
      />
      <Line
        type='monotone'
        dataKey='volatilityScore'
        stroke='#bf24e3'
        strokeWidth={2}
        dot={false}
      />
      <Line
        type='monotone'
        dataKey='riskScore'
        stroke='red'
        strokeWidth={2}
        dot={false}
      />
      <Line
        type='monotone'
        dataKey='marketCapScore'
        stroke='aqua'
        strokeWidth={2}
        dot={false}
      />
    </LineChart>
  );
}

export default LinesChart;
