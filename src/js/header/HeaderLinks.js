import React from "react";

import HeaderContacts from "./HeaderContacts";
import HeaderMedia from "./HeaderMedia";
import HeaderNav from "./HeaderNav";

const HeaderLinks = () => {
    return <div className="header__links">
        
        <div className="media__wrapper">
            <HeaderContacts/>
            <HeaderMedia/>
        </div>
        <HeaderNav/>

    </div>
    
}

export default HeaderLinks