import React from "react";
// Partials
import TeamIntro from "./TeamIntro";
import TeamPlayer from "./TeamPlayer";
//Assets
import backgroundLogo from "../../../assets/backgroundLogo.png"
import backgroundImage from "../../../assets/backgroundImage.png"

const Team = () => {
    return <section class="team">
        <img src={ backgroundLogo } alt="background club logo" class="team__backgroundLogo"/>
        {/* <div class="team__background">
            <img src={ backgroundImage } alt="background layer"/>
        </div> */}
        <div class="container">
            <TeamIntro/>
            <TeamPlayer/>
        </div>
    </section>
}

export default Team