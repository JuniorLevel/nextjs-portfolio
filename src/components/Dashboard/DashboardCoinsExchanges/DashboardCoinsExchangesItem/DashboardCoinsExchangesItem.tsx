import { Link } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './dashboard.coins.exchanges.item.module.scss';

type Props = { item: any };

export default function DashboardCoinsExchangesItem({ item }: Props) {
  return (
    <div className={styles.exchangesItem}>
      <Link href={item.url} target='_blank'>
        <Image
          src={item.icon}
          alt={`icon-${item.name}`}
          width={60}
          height={60}
        />
      </Link>
      <div>{item.name}</div>
      <div>
        Рейтинг: <span className={styles.rank}>{item.rank}</span>
      </div>
    </div>
  );
}
