import React from "react";
// Assets
import instagram from "../../../assets/mediaInsta.png";
import facebook from "../../../assets/mediaFB.png";
import twitter from "../../../assets/mediaTwitter.png";
import youtube from "../../../assets/mediaYoutube.png";


const MediaHeader = () => {
    return <header className="media__header">
        <h2 className="mediaHeader__title">
            Nasze social media
        </h2>
        <div className="mediaHeader__buttons">
            <div className="mediaHeader__buttonsWraper">
                <a href="#" className="mediaHeader__button">
                    <img src={ instagram } alt="go to our instagram"/>
                </a>
                <a href="#" className="mediaHeader__button">
                    <img src={ facebook } alt="go to our facebook"/>
                </a>
            </div>
            
            <div className="mediaHeader__buttonsWraper">
                <a href="#" className="mediaHeader__button">
                    <img src={ twitter } alt="go to our twitter"/>
                </a>
                <a href="#" className="mediaHeader__button">
                    <img src={ youtube } alt="go to our youtube"/>
                </a>
            </div>
            
        </div>
    </header>
}

export default MediaHeader