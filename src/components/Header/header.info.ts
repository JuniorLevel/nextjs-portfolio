import { appRoutes } from '@/config/routes.config';

export interface IHeaderInfo {
  id: number;
  path: string;
  text: string;
}

export const headerInfo: IHeaderInfo[] = [
  {
    id: 0,
    path: appRoutes.DASHBOARD,
    text: 'Главная',
  },
  {
    id: 1,
    path: appRoutes.ABOUT,
    text: 'Коротко о себе',
  },
  { id: 2, path: appRoutes.PROJECTS, text: 'Мои проекты' },
  { id: 3, path: appRoutes.CONTACTS, text: 'Связь со мной' },
];
