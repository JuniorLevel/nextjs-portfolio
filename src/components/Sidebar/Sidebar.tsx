import React from 'react';
import styles from './sidebar.module.scss';
import SidebarNav from './SidebarNav/SidebarNav';
import { sidebarLinks } from './SidebarNav/sidebar.nav';
import Logo from '../Logo/Logo';
import SocialLinks from './SocialLinks/SocialLinks';
import { socialLinks } from './SocialLinks/social.links';

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <SidebarNav sidebarLinks={sidebarLinks} />
      <SocialLinks socialLinks={socialLinks} />
    </div>
  );
}
