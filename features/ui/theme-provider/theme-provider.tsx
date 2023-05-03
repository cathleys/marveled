import React, { createContext, useState } from "react";

type ThemeContextProps = {
  children: React.ReactNode;
};

const defaultContext = {
  isDarkMode: false,
  toggleColorMode: () => {},
};

export const ThemeContext = createContext(defaultContext);

export function ThemeProvider({ children }: ThemeContextProps) {
  const [isDarkMode, setDarkMode] = useState(defaultContext.isDarkMode);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleColorMode: () => setDarkMode((isDark) => !isDark),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
