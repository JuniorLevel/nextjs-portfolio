import { listOfExchanges } from '@/api/fake.data';
import { useCalcPaginationPages } from '@/hooks/useCalcPaginationPages';
import { Pagination } from '@mui/material';
import DashboardCoinsExchangesItem from './DashboardCoinsExchangesItem/DashboardCoinsExchangesItem';
import styles from './dashboard.coins.exchanges.module.scss';

type Props = {};

export default function DashboardCoinsExchanges({}: Props) {
  const filteredList = listOfExchanges
    ? listOfExchanges
        .filter((item) => item.icon !== undefined)
        .sort((a, b) => b.rank - a.rank)
    : [];

  const { currentItems, totalPages, handleChange } = useCalcPaginationPages(
    filteredList,
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
