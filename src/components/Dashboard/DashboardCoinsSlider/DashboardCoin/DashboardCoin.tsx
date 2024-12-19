'use client';

import React from 'react';
import styles from './dashboard.coin.module.scss';
import Image from 'next/image';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

import { LineChart, Line } from 'recharts';

type Props = {};

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const percent = 6.2;

function DashboardCoin({}: Props) {
  return (
    <div className={styles.coin}>
      <div className={styles.coinIcon}>
        <Image
          src='https://static.coinstats.app/coins/1650455588819.png'
          alt='coin-icon'
          width={60}
          height={60}
        />
      </div>
      <div className={styles.coinData}>
        <div className={styles.panel}>
          <div className={styles.ratio}>
            <span>BTC</span>
            <SyncAltIcon fontSize='small' />
            <span>USD</span>
          </div>
          <div className={styles.dynamic}>
            {percent < 0 ? (
              <ArrowCircleDownIcon fontSize='small' sx={{ color: 'red' }} />
            ) : (
              <ArrowCircleUpIcon fontSize='small' sx={{ color: '#17ffc1' }} />
            )}
            <span
              className={percent < 0 ? styles.percentDown : styles.percentUp}
            >
              {percent}%
            </span>
          </div>
        </div>
        <div>8442.55</div>
      </div>
      <div className={styles.chart}>
        <LineChart width={380} height={140} data={data}>
          <Line
            type='monotone'
            dataKey='pv'
            stroke={percent < 0 ? 'aqua' : '#bf24e3'}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </div>
    </div>
  );
}

export default DashboardCoin;
