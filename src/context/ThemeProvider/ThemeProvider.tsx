'use client';

import React, {
  createContext,
  ReactNode,
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
export const bodyAttribute = 'app-theme';

export const ThemeContext = createContext<IThemeContextProps>({
  userTheme: defaultTheme,
  setUserTheme: () => {},
});

export default function ThemeProvider({
  children,
}: Readonly<IThemeProviderProps>) {
  const [userTheme, setUserTheme] = useState(
    localStorage.getItem(bodyAttribute) ?? defaultTheme
  );

  useEffect(() => {
    if (!localStorage.getItem(bodyAttribute)) {
      const currentUserBrowserTheme = window.matchMedia(
        `(prefers-color-scheme: light)`
      ).matches
        ? defaultTheme
        : darkTheme;
      document.body.setAttribute(bodyAttribute, currentUserBrowserTheme);
      localStorage.setItem(bodyAttribute, currentUserBrowserTheme);
    } else {
      document.body.setAttribute(
        bodyAttribute,
        String(localStorage.getItem(bodyAttribute))
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(bodyAttribute, userTheme);
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
