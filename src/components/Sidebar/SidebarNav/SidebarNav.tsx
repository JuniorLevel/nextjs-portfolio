import React from 'react';
import { ISidebarNavItem } from './sidebar.nav';
import SidebarNavLink from './SidebarNavLink/SidebarNavLink';
import styles from './sidebar.nav.module.scss';

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
