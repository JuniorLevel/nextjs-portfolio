import React from 'react';
import styles from './social.links.module.scss';
import { ISocialLinksItem } from './social.links';
import SocialLinksItem from './SocialLinksItem/SocialLinksItem';

type Props = {
  socialLinks: ISocialLinksItem[];
};

function SocialLinks({ socialLinks }: Readonly<Props>) {
  return (
    <ul className={styles.social}>
      {socialLinks.map((link) => (
        <SocialLinksItem
          key={link.id}
          title={link.title}
          href={link.href}
          icon={link.icon}
        />
      ))}
    </ul>
  );
}

export default SocialLinks;
