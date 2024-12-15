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
    title: 'React df-boilerplate',
    description:
      'Df-boilerplate проект с принципиальным дизайном, реализованным при помощи UI библиотеки Ant Design',
    labels: [
      'ReactJS',
      'TypeScript',
      'Styled components',
      'React Context',
      'Tanstack Router',
      'Styleguidist',
      'React Testing Library',
      'Formik',
      'Ant Design',
      'ESlint 9',
      'Husky',
    ],
    img: '/projects/df-boilerplate.png',
    url: 'https://juniorlevel.github.io/df_boilerplate-main/styleguide/',
    repositoryUrl: 'https://github.com/JuniorLevel/df_boilerplate-main',
  },
  {
    id: 1,
    title: 'Cloud App',
    description: 'Облачное хранилище',
    labels: [
      'ReactJS',
      'Typescript',
      'Tailwind CSS',
      'React Router Dom',
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
    id: 2,
    title: 'Qpick Store App E-commerce',
    description: 'Интернет магазин на основе API Platzi Fake Store',
    labels: ['ReactJS', 'Typescript', 'Redux Toolkit', 'React Router Dom'],
    img: '/projects/qpick-store.png',
    url: 'https://zesty-sprite-912bbd.netlify.app/',
    repositoryUrl: 'https://github.com/JuniorLevel/qpick-store-app',
  },
  {
    id: 3,
    title: 'Qpick store telegram bot',
    description: 'Телеграм бот c мини веб приложением Qpick Store',
    labels: [
      'ReactJS',
      'Typescript',
      'React Router Dom',
      'NodeJS',
      'PostgreSQL',
    ],
    img: '/projects/qpick-tg.jpg',
    url: 'https://t.me/qpick_store_bot',
    repositoryUrl: 'https://github.com/JuniorLevel/qpick-store-tg-web-app',
  },
  {
    id: 4,
    title: 'Portfolio App 1.0',
    description: 'React portfolio app',
    labels: ['ReactJS', 'Typescript', 'Tailwind CSS', 'React Router Dom'],
    img: '/projects/portfolio-app-1.0.png',
    url: 'https://flourishing-twilight-f30fd2.netlify.app/',
    repositoryUrl: 'https://github.com/JuniorLevel/portfolio-app',
  },
  {
    id: 5,
    title: 'Landing Prime Car',
    description: 'Одностраничный сайт по продаже машин',
    labels: ['HTML (BEM naming)', 'CSS', 'JavaScript'],
    img: '/projects/prime-car.png',
    url: 'https://boisterous-cranachan-8377fa.netlify.app/',
    repositoryUrl: 'https://github.com/JuniorLevel/landing-prime-car',
  },
  {
    id: 6,
    title: 'Hacker News App',
    description: 'Новостное приложение на основе API Hacker News App',
    labels: ['ReactJS', 'Redux', 'React Router Dom'],
    img: '/projects/hacker-news.png',
    url: 'https://magenta-pastelito-59edd7.netlify.app/',
    repositoryUrl: 'https://github.com/JuniorLevel/hacker-news-app',
  },
];
