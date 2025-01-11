import { getCurrentLineChartColor } from '@/utils/getCurrentLineChartColor';
import { Line, LineChart, ResponsiveContainer, Tooltip, YAxis } from 'recharts';
import CustomTooltip from '../CustomTooltip/CustomTooltip';
import styles from '../dashboard.coin.module.scss';

type Props = { currentData: any[] | undefined; coinIndex: number };

export default function DashboardCoinLineChart({
  currentData,
  coinIndex,
}: Readonly<Props>) {
  return (
    <div className={styles.chart}>
      <ResponsiveContainer
        width='100%'
        height={110}
        initialDimension={{ width: 380, height: 110 }}
      >
        <LineChart
          data={currentData}
          margin={{
            top: 0,
            right: 20,
            left: 20,
            bottom: 10,
          }}
        >
          <YAxis domain={['auto', 'auto']} hide />
          <Tooltip content={<CustomTooltip active payload />} />
          <Line
            type='monotone'
            dataKey='1'
            stroke={
              coinIndex % 2 !== 0
                ? getCurrentLineChartColor(1)
                : getCurrentLineChartColor(2)
            }
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
