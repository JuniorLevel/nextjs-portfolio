'use client';

import { getCookiesValue, updateCookiesValue } from '@/app/actions';
import React, {
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
}

export const defaultTheme = 'light';
export const darkTheme = 'dark';
export const bodyAttribute = 'data-app-theme';

export const ThemeContext = createContext<IThemeContextProps>({
  userTheme: defaultTheme,
  setUserTheme: () => {},
});

export default function ThemeProvider({
  children,
}: Readonly<IThemeProviderProps>) {
  const [userTheme, setUserTheme] = useState(defaultTheme);

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
    }),
    [userTheme, setUserTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
