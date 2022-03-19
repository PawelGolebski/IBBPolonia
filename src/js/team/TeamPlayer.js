import React from "react";

import playerImg from "../../../assets/playerImg.png"
import arrowRight from "../../../assets/arrowRight.png"
import arrowLeft from "../../../assets/arrowLeft.png"




const TeamPlayer = () => {
    return <div className="player__wrapper">
        <div className="team__player">
            <div className="player__name">
                <p className="player__firstName">
                    Bartosz
                </p>
                <p className="player__lastName">
                    Kisielewicz
                </p>
            </div>
            <div className="player__image">
                <img src={ playerImg } alt="player image" />
            </div>
            <div className="player__stats">
                <div className="stats__position">
                    <p>
                        Pozycja:
                    </p>
                    <p>
                        Atakujący 
                    </p>
                </div>
                <div className="stats__height">
                    <p>
                        Wzrost:
                    </p>
                    <p>
                        208cm 
                    </p>
                </div>
                <div className="stats__weight">
                    <p>
                        Waga:
                    </p>
                    <p>
                        96kg
                    </p>
                </div>
                <div className="stats__reach">
                    <p>
                        Zasięg:
                    </p>
                    <p>
                        340cm 
                    </p>
                </div>
            </div>
         </div>
         <div className="player__buttons">
            <div className="player__buttonLeft">
                <img src={ arrowLeft } ale="arrow left"/>
            </div>
            <div className="player__buttonRight">
                <img src={arrowRight } ale="arrow right"/>
            </div>
         </div>
    </div>
    
}

export default TeamPlayer