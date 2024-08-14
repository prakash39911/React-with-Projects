import { createContext, useContext } from "react";

// if we want that some data is already feeded as soon as context is created.we can do that in the createContext function.

export const ThemeContext = createContext({
  themeMode: "Light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
