'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface IThemeProviderProps {
  children: ReactNode;
}

interface IThemeContextProps {
  userTheme: string;
  setUserTheme: (userTheme: string) => void;
  isOpenSidebarMenu: boolean;
  setIsOpenSidebarMenu: (isOpenSidebarMenu: boolean) => void;
}

export const lightTheme = 'light';
export const darkTheme = 'dark';
export const bodyAttribute = 'data-app-theme';

export const ThemeContext = createContext<IThemeContextProps>({
  userTheme: darkTheme,
  setUserTheme: () => {},
  isOpenSidebarMenu: false,
  setIsOpenSidebarMenu: () => {},
});

export default function ThemeProvider({
  children,
}: Readonly<IThemeProviderProps>) {
  const [userTheme, setUserTheme] = useState(darkTheme);
  const [isOpenSidebarMenu, setIsOpenSidebarMenu] = useState(false);

  const handleSetUserTheme = useCallback((theme: string) => {
    setUserTheme(String(document.body.getAttribute(bodyAttribute)));
    document.body.setAttribute(bodyAttribute, theme);
  }, []);

  useEffect(() => {
    handleSetUserTheme(userTheme);
  }, [handleSetUserTheme]);

  useEffect(() => {
    document.body.setAttribute(bodyAttribute, userTheme);
  }, [userTheme, setUserTheme]);

  const value = useMemo<IThemeContextProps>(
    () => ({
      userTheme,
      setUserTheme,
      isOpenSidebarMenu,
      setIsOpenSidebarMenu,
    }),
    [userTheme, setUserTheme, isOpenSidebarMenu, setIsOpenSidebarMenu]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
