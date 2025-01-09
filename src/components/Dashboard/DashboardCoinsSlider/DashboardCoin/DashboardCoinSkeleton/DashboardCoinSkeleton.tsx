import { Skeleton } from '@mui/material';
import styles from './dashboard.coin.skeleton.module.scss';

export default function DashboardCoinSkeleton() {
  return (
    <Skeleton
      className={styles.skeleton}
      animation='wave'
      variant='rounded'
      width={455}
      height={240}
    />
  );
}
