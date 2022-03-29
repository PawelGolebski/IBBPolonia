import React from "react";
// Assets
import phoneIcon from "../../../assets/phoneIcon.png"
import pinIcon from "../../../assets/pinIcon.png"

const HeaderContacts = () => {
    return <div className="header__contacts">
        <div className="contacts__wrapper">
            <div className="contact__phoneIcon">
                <img src={ phoneIcon } alt="phone number"/>
            </div>
            <p className="contacts__phoneNumber">+44 123 123 123</p>
        </div>
        
        <div className="contacts__wrapper">
            <i className="fa-regular fa-envelope contacts__emailIcon"></i>
            <p className="contacts__email">office@ibbpolonia.vc</p>
        </div>

        <div className="contacts__wrapper">
            <div className="contact__locationIcon">
                <img src={ pinIcon } alt="location"/>
            </div>
            <p className="contacts__location">658 Chiswick High Rd, Brentford, London TW8 0HJ</p>
        </div>
        
     </div>
}

export default HeaderContacts