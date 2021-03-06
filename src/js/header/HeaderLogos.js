import React, { useState } from "react";

// Assets

import clubLogo from "../../../assets/clubLogo.png"
import mainSponsorLogo from "../../../assets/mainSponsor.png"



const HeaderLogos = () => {
  
    return <>
    <div className = "header__logos" >
        <div className="logos__wrapper">
          <a  className = "logos__club" href="https://polonia.vc" >
            <img src = { clubLogo } alt = "IBB Plonia club logo" / >
          </a>

          <a  className = "logos__sponsor" href="https://ibb.uk" >
            <img src = { mainSponsorLogo } alt = "Main sponsor logo" / >     
          </a>
        </div>
        
       
    </div>
    
  </>
}

export default HeaderLogos