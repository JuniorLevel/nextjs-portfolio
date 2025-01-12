import { getCurrentLineChartColor } from '@/utils/getCurrentLineChartColor';
import { Line, LineChart, ResponsiveContainer, Tooltip, YAxis } from 'recharts';
import CustomTooltip from '../CustomTooltip/CustomTooltip';
import styles from '../dashboard.coin.module.scss';

type Props = { currentData: any[] | undefined; coinPriceChange: number };

export default function DashboardCoinLineChart({
  currentData,
  coinPriceChange,
}: Readonly<Props>) {
  console.log(coinPriceChange);
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
              coinPriceChange > 0
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
