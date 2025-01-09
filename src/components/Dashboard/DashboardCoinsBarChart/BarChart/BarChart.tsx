'use client';

import { getCurrentLineChartColor } from '@/utils/getCurrentLineChartColor';
import dynamic from 'next/dynamic';
import {
  Bar,
  BarChart as BrChart,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';
import { coins } from '../../../../api/fake.data';
import styles from './bar.chart.module.scss';

type Props = {
  data: { result: any[] };
};

const CustomTooltip = dynamic(() => import('./CustomTooltip/CustomTooltip'), {
  ssr: false,
});

export default function BarChart({ data }: Readonly<Props>) {
  const finalData = data?.result ? data.result : coins.result;
  return (
    <ResponsiveContainer
      width='100%'
      height={170}
      initialDimension={{ width: 500, height: 170 }}
    >
      <BrChart
        className={styles.barChart}
        data={finalData}
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
          fill={getCurrentLineChartColor(2)}
          activeBar={<Rectangle fill='pink' stroke='blue' />}
        />
        <Bar
          dataKey='marketCap'
          name='Рыночная капитализация'
          fill={getCurrentLineChartColor(1)}
          activeBar={<Rectangle fill='gold' stroke='purple' />}
        />
      </BrChart>
    </ResponsiveContainer>
  );
}
