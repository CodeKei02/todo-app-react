import { useEffect, useState } from "react"

export const useDarkMode = (initialValue = false) => {
  const [isDarkMode, setIsDarkMode] = useState(initialValue);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
}
