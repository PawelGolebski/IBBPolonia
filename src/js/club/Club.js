import React from "react";

import CardClub from "./CardClub";
// Assets
import coachImg from '../../../assets/coachImg.png'


const Club = () => {
    return <section className="club">
        <CardClub />
        <div className="club__coachImg">
            <img src={ coachImg } alt="Team coach" />
        </div>
</section>
}

export default Club