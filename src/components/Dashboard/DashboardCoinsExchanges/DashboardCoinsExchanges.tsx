'use client';

import { listOfExchanges } from '@/api/fake.data';
import { getAppData } from '@/app/actions';
import { useCalcPaginationPages } from '@/hooks/useCalcPaginationPages';
import useSWR from 'swr';
import styles from './dashboard.coins.exchanges.module.scss';
import DashboardCoinsExchangesList from './DashboardCoinsExchangesList/DashboardCoinsExchangesList';

export default function DashboardCoinsExchanges() {
  const { data } = useSWR(
    'https://openapiv1.coinstats.app/tickers/exchanges',
    getAppData
  );

  const exchangesWithIcons = () => {
    const currentData =
      Array.isArray(data) && data.length ? data : listOfExchanges;
    return currentData.filter((exchange: any) => exchange.icon !== undefined);
  };

  const sortedExchanges = () => {
    const filteredExchanges = exchangesWithIcons();

    return [...filteredExchanges].sort((a, b) => b.rank - a.rank);
  };

  const { currentItems, totalPages, handleChange } = useCalcPaginationPages(
    sortedExchanges(),
    3
  );

  return (
    <div className={styles.exchanges}>
      <h3>
        Доступные биржи для <br /> сделок
      </h3>
      <DashboardCoinsExchangesList
        currentItems={currentItems}
        totalPages={totalPages}
        handleChange={handleChange}
      />
    </div>
  );
}
