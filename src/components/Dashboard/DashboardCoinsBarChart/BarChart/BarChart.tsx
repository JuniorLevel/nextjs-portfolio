import { DARK_COLORS_CHART, LIGHT_COLORS_CHART } from '@/config/colors.config';
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
    <ResponsiveContainer
      width='100%'
      height={170}
      initialDimension={{ width: 500, height: 170 }}
    >
      <BrChart
        className={styles.barChart}
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
          fill={
            document.body.getAttribute('data-app-theme') === 'dark'
              ? `${DARK_COLORS_CHART.chartColor2}`
              : `${LIGHT_COLORS_CHART.chartColor2}`
          }
          activeBar={<Rectangle fill='pink' stroke='blue' />}
        />
        <Bar
          dataKey='marketCap'
          name='Рыночная капитализация'
          fill={
            document.body.getAttribute('data-app-theme') === 'dark'
              ? `${DARK_COLORS_CHART.chartColor1}`
              : `${LIGHT_COLORS_CHART.chartColor1}`
          }
          activeBar={<Rectangle fill='gold' stroke='purple' />}
        />
      </BrChart>
    </ResponsiveContainer>
  );
}

export default BarChart;
