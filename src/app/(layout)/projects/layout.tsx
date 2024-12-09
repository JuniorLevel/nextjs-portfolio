import React, { ReactNode } from 'react';
import style from './projects.module.scss';

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return <div className={style.layout}>{children}</div>;
}
