import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { coins } from '../../../api/fake.data';
import styles from './dashboard.coins.table.module.scss';

type Props = {};

function DashboardCoinsTable({}: Props) {
  const { result } = coins;

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
          {result.map((item) => (
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
                    <ArrowDropDownIcon fontSize='large' sx={{ color: 'red' }} />
                  ) : (
                    <ArrowDropUpIcon
                      fontSize='large'
                      sx={{ color: '#17ffc1' }}
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

export default DashboardCoinsTable;
