interface IStack {
  id: number;
  label: string;
  description: string;
}

export const stack: IStack[] = [
  { id: 0, label: 'Вёрстка:', description: 'HTML5 (методология BEM)' },
  {
    id: 1,
    label: 'Стилизация:',
    description: 'CSS (SCSS, Tailwindcss, CSS In JS - Styled Components)',
  },
  {
    id: 2,
    label: 'Язык программирования:',
    description: 'JavaScript (TypeScript)',
  },
  {
    id: 3,
    label: 'JavaScript библиотеки и фреймворки:',
    description: 'ReactJS + Typescript, NextJS + Typescript',
  },
  { id: 4, label: 'Сборщик модулей:', description: 'Webpack 5' },
  {
    id: 5,
    label: 'State менеджеры:',
    description: 'React Context, Redux Toolkit, Zustand',
  },
  {
    id: 6,
    label: 'Валидация форм:',
    description: 'React Hook Form, Formik',
  },
  {
    id: 7,
    label: 'React Routing:',
    description: 'React-routing-dom, TanStack Router, NextJS Routing',
  },
  {
    id: 8,
    label: 'Базы данных',
    description: 'MongoDB + Mongoose',
  },
  { id: 9, label: 'Тестирование:', description: 'Jest, React Testing Library' },
  { id: 10, label: 'Документирование:', description: 'Styleguidist' },
  { id: 11, label: 'Линтеры:', description: 'ESlint 8,9 версии' },
  {
    id: 12,
    label: 'UI библиотеки:',
    description: 'Ant Design, Material UI',
  },
  { id: 13, label: 'Система контроля версий:', description: 'Git' },
  {
    id: 14,
    label: 'Хостинги:',
    description: 'GitHub (GitHub Pages), Netlify, Vercel',
  },
  { id: 15, label: 'ОС:', description: 'Linux' },
];
