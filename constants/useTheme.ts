
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";

export function useTheme() {
  const context = useContext<ThemeContextType | undefined>(ThemeContext);
  return context?.theme;
}
