import React, { useContext } from 'react';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core';
import useTheme from '../hooks/useDarkMode';
import { darkTheme, lightTheme } from '../theme';

type ThemeProviderProps = {
  children?: React.ReactNode;
};

const ThemeUpdateContext = React.createContext(() => {
  return;
});

export function useThemeUpdate(): VoidFunction {
  return useContext(ThemeUpdateContext);
}

const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <MaterialThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <ThemeUpdateContext.Provider value={toggleDarkMode}>{children}</ThemeUpdateContext.Provider>
    </MaterialThemeProvider>
  );
};

export default ThemeProvider;
