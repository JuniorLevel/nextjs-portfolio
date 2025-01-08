import { ISidebarNavItem } from './sidebar.nav';
import styles from './sidebar.nav.module.scss';
import SidebarNavLink from './SidebarNavLink/SidebarNavLink';

type Props = { sidebarLinks: ISidebarNavItem[] };

export default function SidebarNav({ sidebarLinks }: Readonly<Props>) {
  return (
    <div>
      <nav className={styles.navigation}>
        <ul>
          {sidebarLinks.map((link) => (
            <SidebarNavLink
              key={link.id}
              title={link.title}
              path={link.path}
              icon={link.icon}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
