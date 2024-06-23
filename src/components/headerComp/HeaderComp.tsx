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
                    <Link to={'/homePage'}> home page </Link>
                </span><br/>
                <span className={'navigationLinks'}>
                    <Link to={'/allMovies'}>all movies</Link>
                </span><br/>
                <span className={'navigationLinks'}>
                    <Link to={'/genres'}>genres</Link>
                </span><br/>
                <span className={'userIcon'}>
                    user photo and name
                </span>
            </div>
            <div className={'searchBar'}>
                <span>
                    <Link to={'/search'}>you can search any movie right here </Link>

                </span></div>

        </div>
    );
};

export default HeaderComp;