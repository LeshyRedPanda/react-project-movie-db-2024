import React, {useState} from 'react';
import HeaderComp from "../headerComp/HeaderComp";
import {Outlet} from "react-router-dom";
import FooterComp from "../footerComp/FooterComp";
import ThemeSwitcher from "../../themeSwitcher/themeSwitcher";

const MainComp = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // const toggleTheme = () => {
    //     setIsDarkTheme(prevTheme => !prevTheme);
    // };
    return (
            <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
                {/*<ThemeSwitcher toggleTheme={toggleTheme} />*/}
            <HeaderComp/>
            <Outlet/>
            <FooterComp/>
        </div>
    );
};

export default MainComp;