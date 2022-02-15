import React, { useEffect } from "react";
import { useState } from "react";

const ThemeContext = React.createContext({
  darkMode: false,
  toggleThemeHandler: () => {}
});

export const ThemeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleThemeHandler = () => {
    setDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkTheme");
      document.body.classList.remove("lightTheme");
    } else {
      document.body.classList.add("lightTheme");
      document.body.classList.remove("darkTheme");
    }
  });
  
  return (
    <ThemeContext.Provider value={{ darkMode, toggleThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
