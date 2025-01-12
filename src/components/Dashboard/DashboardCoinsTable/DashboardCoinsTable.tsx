'use client';

import { coins } from '@/api/fake.data';
import { getAppData } from '@/app/actions';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import useSWR from 'swr';
import styles from './dashboard.coins.table.module.scss';

export default function DashboardCoinsTable() {
  const { data } = useSWR('https://openapiv1.coinstats.app/coins', getAppData);
  const currentData =
    Array.isArray(data?.result) && data.result.length
      ? data.result
      : coins.result;

  return (
    <div className={styles.coinsTable}>
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Текущая цена</th>
            <th>Изменения за сутки</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item: any) => (
            <tr key={item.name}>
              <td>
                <span className={styles.symbol}>{item.symbol}</span>
                <span className={styles.name}>{item.name}</span>
              </td>
              <td>{item.price.toFixed(5)}$</td>
              <td>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <span>{String(item.priceChange1d).replace('-', '')}%</span>
                  {Number(item.priceChange1d) < 0 ? (
                    <ArrowDropDownIcon
                      className={styles.arrowDownIcon}
                      fontSize='large'
                    />
                  ) : (
                    <ArrowDropUpIcon
                      className={styles.arrowUpIcon}
                      fontSize='large'
                    />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
