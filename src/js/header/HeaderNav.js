import React from "react";
// Assets
import loupeIcon from '../../../assets/loupeIcon.png';
import flagEN from '../../../assets/flagEN.png'



const HeaderNav = () => {
    return <nav className="header__nav">
        <a href="#" className="nav__link">home</a>
        <a href="#" className="nav__link">aktualności</a>
        <a href="#" className="nav__link">mecze</a>
        <a href="#" className="nav__link">zespół</a>
        <a href="#" className="nav__link">klub</a>
        <a href="#" className="nav__link">kontakt</a>
        <a href="#" className="nav__link">bilety</a>
        <a href="#" className="nav__link">reklama</a>
        <img src={ loupeIcon } alt="search icon" style={{cursor: "pointer"}}/>
        <a className="nav__flag" href="https://www.ibb.uk/">
            <img src={ flagEN } alt="Great Britain flag" ></img>
        </a>
    </nav>
}

export default HeaderNav