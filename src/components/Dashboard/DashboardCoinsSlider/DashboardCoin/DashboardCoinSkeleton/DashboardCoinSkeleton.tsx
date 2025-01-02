import { Skeleton } from '@mui/material';
import styles from './dashboard.coin.skeleton.module.scss';

type Props = {};

export default function DashboardCoinSkeleton({}: Props) {
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
