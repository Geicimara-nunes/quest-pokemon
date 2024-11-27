import { createContext, useState, useEffect } from "react";

const themes = {
    light: {
        name: "light",
        primary: "#87cefa",
        color: "#000000",
        background: "#ffffff",
    },
    dark: {
        name: "dark",
        primary: "#424242",
        color: "#ffffff",
        background: "#212121",
    },
};

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
const [theme, setSelectedTheme] = useState(themes.light);

    useEffect(() => {
        Object.entries(theme).forEach(([key, value])=>{
            document.documentElement.style.setProperty(key,value)
        });
        localStorage.setItem("theme",JSON.stringify(theme));
    }, [theme]);

    const handleThemeChange = (theme) => {
        setSelectedTheme(theme);
        localStorage.setItem("theme", JSON.stringify(theme));
    };

    return (
        <ThemeContext.Provider value={{ theme, handleThemeChange }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { themes, ThemeContext, ThemeProvider }