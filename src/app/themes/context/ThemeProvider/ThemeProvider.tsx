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

const defaultTheme = 'light';
const bodyAttribute = 'app-theme';

export const ThemeContext = createContext<IThemeContextProps>({
  userTheme: defaultTheme,
  setUserTheme: () => {},
});

export default function ThemeProvider({
  children,
}: Readonly<IThemeProviderProps>) {
  const [userTheme, setUserTheme] = useState(defaultTheme);

  useEffect(() => {
    if (!localStorage.getItem(bodyAttribute)) {
      const currentUserBrowserTheme = window.matchMedia(
        `(prefers-color-scheme: light)`
      ).matches
        ? 'light'
        : 'dark';
      document.body.setAttribute(bodyAttribute, currentUserBrowserTheme);
      localStorage.setItem(bodyAttribute, currentUserBrowserTheme);
      console.log(document.body.getAttribute(bodyAttribute));
    } else {
      document.body.setAttribute(
        bodyAttribute,
        String(localStorage.getItem(bodyAttribute))
      );
    }
  }, []);

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
