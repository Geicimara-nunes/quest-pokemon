import { ThemeButton } from "../themeButton/theme-button";
import { ThemeContext, themes } from "../../../context/theme-context";
import { useContext } from "react";


const ThemeTogglerButton = () => {

  const { theme, handleThemeChange } = useContext(ThemeContext);

  return (
    <div>
      <ThemeButton onClick={() => handleThemeChange(theme.name === "light" ? themes.dark : themes.light)}>Dark/Light</ThemeButton>
    </div>
  );
};

export { ThemeTogglerButton }