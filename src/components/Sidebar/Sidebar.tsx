import Logo from '../Logo/Logo';
import SidebarNav from './SidebarNav/SidebarNav';
import { sidebarLinks } from './SidebarNav/sidebar.nav';
import SocialLinks from './SocialLinks/SocialLinks';
import { socialLinks } from './SocialLinks/social.links';
import styles from './sidebar.module.scss';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <SidebarNav sidebarLinks={sidebarLinks} />
      <SocialLinks socialLinks={socialLinks} />
    </div>
  );
}
