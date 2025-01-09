import { listOfExchanges } from '@/api/fake.data';
import { useCalcPaginationPages } from '@/hooks/useCalcPaginationPages';
import { Pagination } from '@mui/material';
import useSWR from 'swr';
import DashboardCoinsExchangesItem from './DashboardCoinsExchangesItem/DashboardCoinsExchangesItem';
import styles from './dashboard.coins.exchanges.module.scss';

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

export default function DashboardCoinsExchanges() {
  const { data } = useSWR(
    'https://openapiv1.coinstats.app/tickers/exchanges',
    getCoinsData
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
      <div className={styles.exchangesList}>
        {currentItems.map((item) => (
          <DashboardCoinsExchangesItem key={item.id} item={item} />
        ))}
      </div>
      <Pagination
        hideNextButton
        hidePrevButton
        count={totalPages}
        onChange={handleChange}
      />
    </div>
  );
}
