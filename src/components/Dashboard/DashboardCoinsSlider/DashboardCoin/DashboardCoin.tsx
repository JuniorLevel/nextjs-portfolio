'use client';

import { coinsPriceMonthHistory } from '@/api/fake.data';
import { ArrowCircleDown } from '@mui/icons-material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import useSWR from 'swr';
import styles from './dashboard.coin.module.scss';

type Props = {
  coin: any;
  coinIndex: number;
};

const getCoinsData = async (url: string) => {
  const options: any = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': process.env.NEXT_PUBLIC_COINSTATS_API_KEY,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {}
};

const DashboardCoinLineChart = dynamic(
  () => import('./DashboardCoinLineChart/DashboardCoinLineChart'),
  { ssr: false }
);

export default function DashboardCoin({ coin, coinIndex }: Readonly<Props>) {
  const { data } = useSWR(
    `https://openapiv1.coinstats.app/coins/${coin.id}/charts?period=1m`,
    getCoinsData
  );

  const currentData =
    Array.isArray(data) && data.length
      ? data
      : coinsPriceMonthHistory.find((item) => item.id === coin.id)?.history;

  return (
    <div className={styles.coin}>
      <div className={styles.coinIcon}>
        <Image
          src={coin.icon}
          alt={`coin-${coin.symbol}`}
          width={60}
          height={60}
          loading='lazy'
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
      <DashboardCoinLineChart currentData={currentData} coinIndex={coinIndex} />
    </div>
  );
}
