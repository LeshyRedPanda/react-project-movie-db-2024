import React from 'react';
import {Link} from "react-router-dom";

const HeaderComp = () => {
    return (
        <div className={'header'}>
            <div className={'navigation'}>
                <span className={'themeSwitcher'}>
                    theme Switcher
                </span>
                <span className={'navigationLinks'}>
                    <Link to={'/homePage'}> Home page </Link>
                </span><br/>
                <span className={'navigationLinks'}>
                    <Link to={'/allMovies'}>All movies</Link>
                </span><br/>
                <span className={'navigationLinks'}>
                    <Link to={'/genres'}>Genres</Link>
                </span><br/>
                <div className={'userIcon'}>

                </div>

            </div>
            <div className={'searchBar'}>
                <span>
                    <Link to={'/search'}>↳ You can search any movie right here ↲</Link>

                </span></div>

        </div>
    );
};

export default HeaderComp;