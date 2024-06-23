import React from 'react';
import HeaderComp from "../headerComp/HeaderComp";
import {Outlet} from "react-router-dom";
import FooterComp from "../footerComp/FooterComp";

const MainComp = () => {
    return (
        <div>
            <HeaderComp/>
            <Outlet/>
            <FooterComp/>
        </div>
    );
};

export default MainComp;