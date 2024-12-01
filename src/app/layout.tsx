import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './global.scss';
import ThemeProvider from './themes/context/ThemeProvider/ThemeProvider';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Finance & Portfolio app',
  description:
    'Финансовое приложение для отслеживание затрат на определённые категории',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={roboto.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
