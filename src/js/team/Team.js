import React from "react";
// Partials
import TeamIntro from "./TeamIntro";
import TeamPlayer from "./TeamPlayer";
//Assets
import backgroundLogo from "../../../assets/backgroundLogo.png"
// import backgroundImage from "../../../assets/backgroundImage.png"
import playerImg from "../../../assets/playerImg.png"
import playerNumber from "../../../assets/playerNumber.png"

const Team = () => {
    return <section className="team">
        <img src={ backgroundLogo } alt="background club logo" className="team__backgroundLogo"/>
        <div class="team__background">
            {/* <img src={ backgroundImage } alt="background layer"/> */}
        </div>
        <div className="container">
            <div className="player__imgs">
                <div className="player__image">
                    <img src={ playerImg } alt="player image" />
                </div>
                <div className="player__number">
                    <img src={ playerNumber } alt="player number" />
                </div>
            </div>
            
            <TeamIntro/>
            <TeamPlayer/>
        </div>
    </section>
}

export default Team