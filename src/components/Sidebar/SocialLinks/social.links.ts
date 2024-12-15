import { MdAlternateEmail } from 'react-icons/md';
import { SiCodewars } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface ISocialLinksItem {
  id: number;
  title: string;
  href: string;
  icon: IconType;
}

export const socialLinks: ISocialLinksItem[] = [
  {
    id: 0,
    title: 'Mail.ru',
    href: 'mailto:work.junior@mail.ru',
    icon: MdAlternateEmail,
  },
  {
    id: 1,
    title: 'Github profile',

    href: 'https://github.com/JuniorLevel?tab=repositories',
    icon: FaGithub,
  },
  {
    id: 2,
    title: 'Codewars profile',
    href: 'https://www.codewars.com/users/JuniorLevel',
    icon: SiCodewars,
  },
];
