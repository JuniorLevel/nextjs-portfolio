import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import { appRoutes } from '@/src/app/config/routes.config';
import { SvgIconComponent } from '@mui/icons-material';

export interface ISidebarNavItem {
  id: number;
  title: string;
  path: string;
  icon: SvgIconComponent;
}

export const sidebarLinks: ISidebarNavItem[] = [
  {
    id: 0,
    title: 'Dashboard',
    path: appRoutes.DASHBOARD,
    icon: HomeOutlinedIcon,
  },
  {
    id: 1,
    title: 'About',
    path: appRoutes.ABOUT,
    icon: BadgeOutlinedIcon,
  },
  {
    id: 2,
    title: 'Projects',
    path: appRoutes.PROJECTS,
    icon: StorageOutlinedIcon,
  },
  {
    id: 3,
    title: 'Contacts',
    path: appRoutes.CONTACTS,
    icon: ContactMailOutlinedIcon,
  },
];
