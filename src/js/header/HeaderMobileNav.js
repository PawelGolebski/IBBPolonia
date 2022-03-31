import React, {useState} from "react";
// Assets
import loupeIcon from '../../../assets/loupeIcon.png';
import flagEN from '../../../assets/flagEN.png'


const HeaderMobileNav = () => {
    const [active, setActive] = useState({showHamburger: false, showNav: ''});
    const handleClick = () => {
        if(active.showHamburger){
        setActive({showHamburger: false, showNav: ''});
        }
        else {
        setActive({showHamburger: true, showNav: 'header__mobileNav-open'});
        }
    }


    return <>
     <div  onClick={ handleClick } 
            className={!active.showHamburger ? "header__hamburger" : "header__hamburger header__hamburger-open"}>
        <div className="header__hamburgerButton"></div>
    </div>
    <div className={`header__mobileNav ${ active.showNav }`}>
        {/* <img src={ loupeIcon } alt="search icon" style={{cursor: "pointer"}}/>
        <a className="nav__flag" href="https://www.ibb.uk/">
            <img src={ flagEN } alt="Great Britain flag" ></img>
        </a> */}
        <a href="#" className="nav__link">home</a>
        <a href="#" className="nav__link">aktualności</a>
        <a href="#" className="nav__link">mecze</a>
        <a href="#" className="nav__link">zespół</a>
        <a href="#" className="nav__link">klub</a>
        <a href="#" className="nav__link">kontakt</a>
        <a href="#" className="nav__link">bilety</a>
        <a href="#" className="nav__link">reklama</a>
        
    </div>
    </>
}

export default HeaderMobileNav