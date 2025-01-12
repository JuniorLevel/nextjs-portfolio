import styles from '../bar.chart.module.scss';

export default function CustomTooltip({
  active,
  payload,
}: Readonly<{
  active: boolean;
  payload: any;
}>) {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p>Название валюты: {payload[0].payload.name}</p>
        <p>Объём торгов: {payload[0].value}$</p>
        <p>Оценка рыночной капитализации: {payload[1].value}$</p>
      </div>
    );
  }
}
