import { createContext } from "react";

export type Theme = "light" | "dark";

export type Ctx = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<Ctx>({
  theme: "light",
  toggleTheme: () => {},
});
