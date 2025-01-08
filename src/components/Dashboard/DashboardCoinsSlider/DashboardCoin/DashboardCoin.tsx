'use client';

import { coinsPriceMonthHistory } from '@/api/fake.data';
import { DARK_COLORS_CHART, LIGHT_COLORS_CHART } from '@/config/colors.config';
import { ArrowCircleDown } from '@mui/icons-material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import Image from 'next/image';
import { Line, LineChart, ResponsiveContainer, Tooltip, YAxis } from 'recharts';
import styles from './dashboard.coin.module.scss';

type Props = {
  coin: any;
  coinIndex: number;
};

const CustomTooltip = ({
  active,
  payload,
}: {
  active: boolean;
  payload: any;
}) => {
  if (active && payload?.length) {
    return (
      <div className={styles.tooltip}>
        <p>
          Дата: {new Date(payload[0].payload[0] * 1000).toLocaleDateString()}
        </p>
        <p>Цена: {payload[0].value.toFixed(5)}$</p>
      </div>
    );
  }
};

const getThemeColors = () => {
  return document.body.getAttribute('data-app-theme') === 'dark'
    ? DARK_COLORS_CHART
    : LIGHT_COLORS_CHART;
};

function DashboardCoin({ coin, coinIndex }: Readonly<Props>) {
  const filteredData =
    coinsPriceMonthHistory.find((item) => item.id === coin.id)?.history ?? [];
  const themeColors = getThemeColors();
  const chartStrokeColor1 = themeColors.chartColor1;
  const chartStrokeColor2 = themeColors.chartColor2;

  return (
    <div className={styles.coin}>
      <div className={styles.coinIcon}>
        <Image
          src={coin.icon}
          alt={`coin-${coin.symbol}`}
          width={60}
          height={60}
        />
      </div>
      <div className={styles.coinData}>
        <div className={styles.panel}>
          <div className={styles.ratio}>
            <span>{coin.symbol}</span>
            <SyncAltIcon fontSize='small' />
            <span>USD</span>
          </div>
          <div className={styles.dynamic}>
            За последний час
            {coin.priceChange1h < 0 ? (
              <ArrowCircleDown className={styles.downIcon} fontSize='small' />
            ) : (
              <ArrowCircleUpIcon className={styles.upIcon} fontSize='small' />
            )}
            <span
              className={
                coin.priceChange1h < 0 ? styles.percentDown : styles.percentUp
              }
            >
              {coin.priceChange1h}%
            </span>
          </div>
        </div>
        <div>{Number(coin.price).toFixed(5)}$</div>
      </div>
      <div className={styles.chart}>
        <ResponsiveContainer
          width='100%'
          height={110}
          initialDimension={{ width: 380, height: 110 }}
        >
          <LineChart
            data={filteredData}
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
                coinIndex % 2 !== 0 ? chartStrokeColor1 : chartStrokeColor2
              }
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DashboardCoin;
