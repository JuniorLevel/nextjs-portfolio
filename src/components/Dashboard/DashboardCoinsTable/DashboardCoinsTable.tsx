import React from 'react';
import styles from './dashboard.coins.table.module.scss';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type Props = {};

function DashboardCoinsTable({}: Props) {
  const isFallCoin = (price: number, percent: number) => {
    return (Math.round(price) * (Math.round(percent) / 100)).toFixed(3);
  };

  const item = isFallCoin(106.305, -2.54);
  const item2 = isFallCoin(106.305, 2.54);

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
          {[1.255, -2.305, 5.323, -1.121, 6.305, -1.305, 7.323, -3.305].map(
            (item) => (
              <tr key={item}>
                <td>
                  <span className={styles.symbol}>BTC</span>
                  <span className={styles.name}>Bitcoin</span>
                </td>
                <td>$106305</td>
                <td>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <span>{item}</span>
                    {Number(item) < 0 ? (
                      <ArrowDropDownIcon
                        fontSize='large'
                        sx={{ color: 'red' }}
                      />
                    ) : (
                      <ArrowDropUpIcon
                        fontSize='large'
                        sx={{ color: '#17ffc1' }}
                      />
                    )}
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardCoinsTable;
