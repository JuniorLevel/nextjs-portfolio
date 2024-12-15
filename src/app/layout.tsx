import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '../themes/global.scss';
import ThemeProvider from '../context/ThemeProvider/ThemeProvider';
import { cookies } from 'next/headers';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Crypto & Portfolio app',
  description:
    'Крипто-приложение для отслеживания текущего курса цифровых валют',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme');

  return (
    <html lang='ru'>
      <body
        className={roboto.className}
        data-app-theme={theme?.value ?? 'dark'}
      >
        <ThemeProvider>
          {children}
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
