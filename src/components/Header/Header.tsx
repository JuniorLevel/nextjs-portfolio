'use client';

import React, { useContext } from 'react';
import styles from './header.module.scss';
import { usePathname } from 'next/navigation';
import { getCurrentHeaderInfo } from '../../utils/getCurrentHeaderInfo';
import { Oswald } from 'next/font/google';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {
  darkTheme,
  defaultTheme,
  ThemeContext,
} from '@/context/ThemeProvider/ThemeProvider';
import { updateCookiesValue } from '@/app/actions';

const oswald = Oswald({ subsets: ['latin'], weight: ['400'] });

export default function Header() {
  const pathname = usePathname();
  const info = getCurrentHeaderInfo(pathname);
  const { userTheme, setUserTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1 className={oswald.className}>{info?.text ?? ''}</h1>
      </div>
      <div className={styles.panel}>
        {userTheme === defaultTheme && (
          <button
            className={styles.switchBtn}
            onClick={() => {
              updateCookiesValue(darkTheme);
              setUserTheme(darkTheme);
            }}
          >
            <DarkModeIcon />
          </button>
        )}
        {userTheme === darkTheme && (
          <button
            className={styles.switchBtn}
            onClick={() => {
              updateCookiesValue(defaultTheme);
              setUserTheme(defaultTheme);
            }}
          >
            <WbSunnyIcon />
          </button>
        )}
      </div>
    </header>
  );
}
