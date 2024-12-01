import Link from 'next/link';

export default function IndexPage() {
  return (
    <section>
      <h1>Страница приветствия</h1>
      <Link href='dashboard'>Перейти</Link>
      <Link href='projects'>Перейти</Link>
    </section>
  );
}
