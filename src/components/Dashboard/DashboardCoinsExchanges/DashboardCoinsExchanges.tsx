import { listOfExchanges } from '@/api/fake.data';
import React from 'react';
import DashboardCoinsExchangesItem from './DashboardCoinsExchangesItem/DashboardCoinsExchangesItem';
import styles from './dashboard.coins.exchanges.module.scss';

type Props = {};

export default function DashboardCoinsExchanges({}: Props) {
  const filteredList = listOfExchanges
    ? listOfExchanges
        .filter((item) => item.icon !== undefined)
        .sort((a, b) => b.rank - a.rank)
    : [];

  return (
    <div className={styles.exchanges}>
      <h3>
        Доступные биржи для <br /> сделок
      </h3>
      <div className={styles.exchangesList}>
        {filteredList.map((item) => (
          <DashboardCoinsExchangesItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
