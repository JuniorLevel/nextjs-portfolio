import { ReactNode } from 'react';
import styles from './dashboard.block.module.scss';

type Props = {
  children: ReactNode;
  bgImage?: string;
};

function DashboardBlock({ children, bgImage }: Readonly<Props>) {
  return (
    <div
      className={styles.block}
      style={{
        backgroundImage: `url(${bgImage ?? ''})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundPositionX: '120px',
      }}
    >
      {children}
    </div>
  );
}

export default DashboardBlock;
