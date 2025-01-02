'use client';

import { updateCookiesValue } from '@/app/actions';
import {
  darkTheme,
  lightTheme,
  ThemeContext,
} from '@/context/ThemeProvider/ThemeProvider';
import { getCurrentHeaderInfo } from '@/utils/getCurrentHeaderInfo';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Oswald } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import BurgerMenuButton from 'ui/SidebarToggleButton/SidebarToggleButton';
import styles from './header.module.scss';

const oswald = Oswald({ subsets: ['latin'], weight: ['400'] });

export default function Header() {
  const pathname = usePathname();
  const info = getCurrentHeaderInfo(pathname);
  const { userTheme, setUserTheme, isOpenSidebarMenu, setIsOpenSidebarMenu } =
    useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1 className={oswald.className}>{info?.text ?? ''}</h1>
      </div>
      <div className={styles.panel}>
        <button
          aria-label='Switch current theme'
          className={styles.switchBtn}
          onClick={() => {
            if (userTheme !== lightTheme) {
              updateCookiesValue(lightTheme);
              setUserTheme(lightTheme);
            } else {
              updateCookiesValue(darkTheme);
              setUserTheme(darkTheme);
            }
          }}
        >
          <WbSunnyIcon className={styles.darkThemeIcon} />
          <DarkModeIcon className={styles.lightThemeIcon} />
        </button>
        <BurgerMenuButton onClick={() => setIsOpenSidebarMenu(true)} />
      </div>
    </header>
  );
}
