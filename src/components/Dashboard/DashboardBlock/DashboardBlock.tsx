import React, { ReactNode } from 'react';
import styles from './dashboard.block.module.scss';

type Props = {
  children: ReactNode;
};

function DashboardBlock({ children }: Readonly<Props>) {
  return <div className={styles.block}>{children}</div>;
}

export default DashboardBlock;
