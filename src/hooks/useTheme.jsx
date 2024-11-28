import React, { useState, useEffect, useContext, createContext } from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const previouslySetTheme = localStorage.getItem('themePreference');
        if (previouslySetTheme) {
            return previouslySetTheme;
        }

        let isWindowsDefaultThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isWindowsDefaultThemeDark) {
            return 'dark';
        } else {
            return 'light';
        }
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme])


    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('themePreference', newTheme);
        document.documentElement.setAttribute('data-theme', theme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    let context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context
}