import React from 'react';
import styles from './about.stack.block.module.scss';
import { stack } from './stack';

export default function AboutStackBlock() {
  return (
    <div className={styles.stackBlock}>
      <h3>Используемый стек технологий</h3>
      <ul className={styles.stack}>
        {stack.map((item) => (
          <li key={item.id}>
            <span>{item.label}</span>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
