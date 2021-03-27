import React, { useState } from 'react';

interface ITheme {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const useDarkMode = (): ITheme => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (): void => {
    setDarkMode((prevMode) => !prevMode);
  };

  return { darkMode, toggleDarkMode };
};

export default useDarkMode;
