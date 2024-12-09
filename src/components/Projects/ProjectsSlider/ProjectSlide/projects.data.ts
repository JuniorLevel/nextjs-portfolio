export interface IProjectData {
  id: number;
  title: string;
  img: string;
  url: string;
  description: string;
  labels: string[];
  repositoryUrl: string;
}

export const projectsData: IProjectData[] = [
  {
    id: 0,
    title: 'Cloud App',
    description: 'Облачное хранилище',
    labels: [
      'ReactJS',
      'Typescript',
      'Zustand',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
    ],
    img: '/projects/cloud-app.png',
    url: 'https://cloud-app.netlify.app/',
    repositoryUrl: 'https://github.com/JuniorLevel/cloud-app',
  },
  {
    id: 1,
    title: 'Qpick Store App E-commerce',
    description: 'Интернет магазин на основе API Platzi Fake Store',
    labels: ['ReactJS', 'Typescript', 'Redux Toolkit'],
    img: '/projects/qpick-store.png',
    url: 'https://zesty-sprite-912bbd.netlify.app/',
    repositoryUrl: 'https://github.com/JuniorLevel/qpick-store-app',
  },
  {
    id: 2,
    title: 'Qpick store telegram bot',
    description: 'Телеграм бот c мини веб приложением Qpick Store',
    labels: ['ReactJS', 'Typescript', 'NodeJS', 'PostgreSQL'],
    img: '/projects/qpick-tg.jpg',
    url: 'https://t.me/qpick_store_bot',
    repositoryUrl: 'https://github.com/JuniorLevel/qpick-store-tg-web-app',
  },
  {
    id: 3,
    title: 'Landing Prime Car',
    description: 'Одностраничный сайт по продаже машин',
    labels: ['HTML (BEM naming)', 'CSS', 'JavaScript'],
    img: '/projects/prime-car.png',
    url: 'https://boisterous-cranachan-8377fa.netlify.app/',
    repositoryUrl: 'https://github.com/JuniorLevel/landing-prime-car',
  },
  {
    id: 4,
    title: 'Hacker News App',
    description: 'Новостное приложение на основе API Hacker News App',
    labels: ['ReactJS', 'Redux'],
    img: '/projects/hacker-news.png',
    url: 'https://magenta-pastelito-59edd7.netlify.app/',
    repositoryUrl: 'https://github.com/JuniorLevel/hacker-news-app',
  },
];
