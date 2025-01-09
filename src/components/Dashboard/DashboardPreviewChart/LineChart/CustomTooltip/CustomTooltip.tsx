import styles from '../line.chart.module.scss';

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
        <p>Оценка ликвидности: {payload[0].value}$</p>
        <p>Оценка волатильности: {payload[1].value}$</p>
        <p>Показатель рисков: {payload[2].value}$</p>
        <p>Оценка рыночной капитализации: {payload[3].value}$</p>
      </div>
    );
  }
}
