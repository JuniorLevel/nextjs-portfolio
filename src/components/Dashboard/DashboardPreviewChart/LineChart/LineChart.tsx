import { coins } from '@/api/fake.data';
import { DARK_COLORS_CHART, LIGHT_COLORS_CHART } from '@/config/colors.config';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
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
    <ResponsiveContainer
      width='100%'
      height={185}
      initialDimension={{ width: 890, height: 185 }}
    >
      <LineChart
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
    </ResponsiveContainer>
  );
}

export default LinesChart;
