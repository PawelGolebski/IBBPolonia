import React from "react";

import HeaderLogos from './HeaderLogos'
import HeaderLinks from "./HeaderLinks";


const Header = () => {
    return <header className="header">
        <div className="container">
        <HeaderLogos/>
        <HeaderLinks/>
        </div>
    </header>
}

export default Header