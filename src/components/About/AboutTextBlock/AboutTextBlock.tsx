import { appRoutes } from '@/config/routes.config';
import Link from 'next/link';
import styles from './about.text.block.module.scss';

export default function AboutTextBlock() {
  return (
    <article className={styles.textBlock}>
      <div className={styles.textBlockItem}>
        <h2 className={styles.title}>Биография</h2>
        <div className={styles.info}>
          <p>
            Приветствую, меня зовут Дмитрий! Мне 23, разработчик с незаконченным
            высшим образованием. Закончил 3 курса университета ХНУРЭ, факультет
            "Компьютерная инженерия и управление". Живу в России 🇷🇺
          </p>
          <br />
          <p>
            Имею некоммерческий опыт в разработке SPA приложений с
            использованием библиотеки ReactJS.{' '}
            <span>Опыт в разработке 2 года.</span> С исходниками проектов можно
            ознакомиться на GitHub.
          </p>
          <br />
          <p>
            Весь перечисленный стек технологий состоит{' '}
            <span>
              исключительно из инструментов, которые использовал в своих
              проектах!
            </span>
          </p>
          <br />
          <p>
            Используемые технологии знаю на базовом уровне. Стремлюсь изучать
            всё больше новых инструментов разработки и закреплять полученные
            знания при создании проектов.
          </p>
          <br />
          <p>
            Ищу возможность реализовать полученные знания и опыт разработки на
            реальных проектах. Если у Вас есть предложение,{' '}
            <Link className={styles.link} href={appRoutes.CONTACTS}>
              напишите мне на почту
            </Link>
            . Готов к сотрудничеству!
          </p>
        </div>
      </div>
      <div className={styles.textBlockItem}>
        <h3 className={styles.title}>Коммерческий опыт работы (6 месяцев)</h3>
        <ul>
          <li>
            Развитие df_boilerplate проекта на ReactJS с использованием UI
            библиотеки Ant Design. Подробнее на странице{' '}
            <Link className={styles.link} href={appRoutes.PROJECTS}>
              "Мои проекты"
            </Link>
            .
          </li>
        </ul>
      </div>
    </article>
  );
}
