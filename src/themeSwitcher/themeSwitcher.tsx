import React, { useState } from 'react';

const ThemeSwitcher = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };


    const themeBtn = {
        backgroundColor: isDarkTheme ? '#FFFFFF' : '#000000',
        color: isDarkTheme ? '#000000' : '#FFFFFF',
        padding: '10px',
        border: 'none',
        cursor: 'pointer',
        borderRadius:'10px',

    };

    return (
        <button style={themeBtn} onClick={toggleTheme}>
            {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        </button>
    );
};

export default ThemeSwitcher;