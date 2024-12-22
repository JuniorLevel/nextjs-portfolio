import React from 'react';
import {
  Bar,
  BarChart as BrChart,
  Legend,
  Rectangle,
  XAxis,
  Tooltip,
} from 'recharts';
import styles from './bar.chart.module.scss';
import { coins } from '../../../../api/fake.data';

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
        <p>Оценка рыночной капитализации: {payload[0].value}$</p>
        <p>Оценка рыночной капитализации: {payload[1].value}$</p>
      </div>
    );
  }
};

function BarChart({}: Props) {
  return (
    <BrChart
      className={styles.barChart}
      width={500}
      height={170}
      data={result}
      margin={{
        top: -1250,
        left: 20,
      }}
    >
      <XAxis dataKey='name' />
      <Tooltip content={<CustomTooltip active payload />} />
      <Legend />
      <Bar
        dataKey='volume'
        name='Объём торгов'
        fill='#ba4fd2'
        activeBar={<Rectangle fill='pink' stroke='blue' />}
      />
      <Bar
        dataKey='marketCap'
        name='Рыночная капитализация'
        fill='#17ffc1'
        activeBar={<Rectangle fill='gold' stroke='purple' />}
      />
    </BrChart>
  );
}

export default BarChart;
