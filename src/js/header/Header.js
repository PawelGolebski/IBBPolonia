import React from "react";

import HeaderLogos from './HeaderLogos'
import HeaderLinks from "./HeaderLinks";
import HeaderMobileNav from "./HeaderMobileNav";


const Header = () => {
    return <header className="header">
        <div className="container">
        <HeaderLogos/>
        <HeaderLinks/>
        
        </div>
        <HeaderMobileNav />
    </header>
}

export default Header