import { Pagination } from '@mui/material';
import styles from '../dashboard.coins.exchanges.module.scss';
import DashboardCoinsExchangesItem from '../DashboardCoinsExchangesItem/DashboardCoinsExchangesItem';

type Props = {
  currentItems: any;
  totalPages: any;
  handleChange: any;
};

export default function DashboardCoinsExchangesList({
  currentItems,
  totalPages,
  handleChange,
}: Readonly<Props>) {
  return (
    <>
      <div className={styles.exchangesList}>
        {currentItems.map((item: any) => (
          <DashboardCoinsExchangesItem key={item.id} item={item} />
        ))}
      </div>
      <Pagination
        hideNextButton
        hidePrevButton
        count={totalPages}
        onChange={handleChange}
      />
    </>
  );
}
