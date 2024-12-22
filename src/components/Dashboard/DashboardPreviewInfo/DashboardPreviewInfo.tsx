import React from 'react';
import styles from './dashboard.preview.info.module.scss';

type Props = {};

function DashboardPreviewInfo({}: Props) {
  return (
    <div className={styles.preview}>
      <h2>
        Актуальная
        <br /> информация
        <br /> о курсе
        <br /> криптовалют
      </h2>
    </div>
  );
}

export default DashboardPreviewInfo;
