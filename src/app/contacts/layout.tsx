import { ReactNode } from 'react';
import styles from './layout.module.scss';

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return <div className={styles.layout}>{children}</div>;
}
