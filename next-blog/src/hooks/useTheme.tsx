import { useEffect, useState } from "react";
export default function useTheme() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-sch)");
    setTheme(darkModeMediaQuery.matches ? "dark" : "light");
    const listener = (e: MediaQueryListEvent) => {
      //   console.log("e", e);
      setTheme(e.matches ? "dark" : "light");
    };
    darkModeMediaQuery.addEventListener("change", listener);
    return () => darkModeMediaQuery.removeEventListener("change", listener);
  }, []);
  return {
    theme,
    isDarkMode: theme === "dark",
    isLightMode: theme === "light",
  };
}
