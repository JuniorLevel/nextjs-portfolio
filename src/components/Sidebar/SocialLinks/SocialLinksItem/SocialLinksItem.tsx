'use client';

import { SvgIconComponent } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import React from 'react';
import styles from './social.links.item.module.scss';

type Props = {
  title: string;
  href: string;
  icon: SvgIconComponent;
};

export default function SocialLinksItem({
  title,
  href,
  icon,
}: Readonly<Props>) {
  return (
    <li className={styles.link}>
      <Tooltip title={title} placement='right'>
        <a href={href} target='_blank'>
          {React.createElement(icon)}
        </a>
      </Tooltip>
    </li>
  );
}
