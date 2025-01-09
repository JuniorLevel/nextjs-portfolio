import styles from '../dashboard.coin.module.scss';

export default function CustomTooltip({
  active,
  payload,
}: Readonly<{
  active: boolean;
  payload: any;
}>) {
  if (active && payload?.length) {
    return (
      <div className={styles.tooltip}>
        <p>
          Дата: {new Date(payload[0].payload[0] * 1000).toLocaleDateString()}
        </p>
        <p>Цена: {payload[0].value.toFixed(5)}$</p>
      </div>
    );
  }
}
