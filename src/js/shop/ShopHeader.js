import React from "react";
//Assets
// import homeJersey from "../../../homeJersey.png"
// import awayJersey from "../../../awayJersey.png"
// import poloniaLogo from "../../../poloniaLogo.png"
import shopHeader from "../../../assets/shopHeader.png"

 const ShopHeader = () => {
    return <header className="shop__header">
        
        {/* <img src={ homeJersey } alt="home jersey" class="shop__homeJersey"/>
        <img src={ awayJersey } alt="away jersey" class="shop__awayJersey"/>
        <img src={ poloniaLogo } alt="IBB Plonia club logo" class="shop__clubLogo" /> */}
        <img src={ shopHeader } alt="shop header" className="shop__headerImg"/>
        
    </header>
}


export default ShopHeader 