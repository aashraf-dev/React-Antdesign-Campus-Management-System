import React, { useState, useEffect, useContext, createContext } from 'react'

const ScreenSizeContext = createContext()

export const ScreenSizeProvider = ({ children }) => {
    let getScreenType = () => {
        let screenWidth = window.innerWidth;
        if (screenWidth <= 520) {
            return 'mobile'
        } else if (screenWidth > 520 && screenWidth <= 768) {
            return 'tablet'
        } else if (screenWidth > 768 && screenWidth <= 1440) {
            return 'laptop'
        } else {
            return 'desktop'
        }
    }
    const [screenType, setScreenType] = useState(getScreenType())

    useEffect(() => {
        const handleResize = () => {
            setScreenType(getScreenType());
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ScreenSizeContext.Provider value={{ screenType }}>
            {children}
        </ScreenSizeContext.Provider>
    )
}

export const useScreenType = () => {
    let context = useContext(ScreenSizeContext)
    if (!context) {
        throw new Error('useScreenSize must be used within a ScreenSizeProvider');
    }

    return context
}