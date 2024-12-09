import React from 'react';
import { IconType } from 'react-icons';
import styles from './social.links.item.module.scss';
import { Tooltip } from '@mui/material';

type Props = {
  title: string;
  href: string;
  icon: IconType;
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
