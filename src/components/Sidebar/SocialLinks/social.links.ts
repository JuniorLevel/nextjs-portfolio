import { SvgIconComponent } from '@mui/icons-material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';

export interface ISocialLinksItem {
  id: number;
  title: string;
  href: string;
  icon: SvgIconComponent;
}

export const socialLinks: ISocialLinksItem[] = [
  {
    id: 0,
    title: 'Mail.ru',
    href: 'mailto:work.junior@mail.ru',
    icon: AlternateEmailIcon,
  },
  {
    id: 1,
    title: 'Github profile',
    href: 'https://github.com/JuniorLevel?tab=repositories',
    icon: GitHubIcon,
  },
  {
    id: 2,
    title: 'Codewars profile',
    href: 'https://www.codewars.com/users/JuniorLevel',
    icon: CodeIcon,
  },
];
