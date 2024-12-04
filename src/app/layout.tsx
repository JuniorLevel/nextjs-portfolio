import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '../themes/global.scss';
import ThemeProvider from '../context/ThemeProvider/ThemeProvider';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Crypto & Portfolio app',
  description:
    'Крипто-приложение для отслеживания текущего курса цифровых валют',
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
