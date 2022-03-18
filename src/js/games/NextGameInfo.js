import React from "react";
//Assets

import poloniaLogo from "../../../assets/nextPoloniaLogo.png"
import oponentLogo from "../../../assets/nextOponentLogo.png"



const NextGameInfo = () => {
    return <div className="nextGame__info">
        <div className="info__poloniaLogo">
            <img src={ poloniaLogo } />
        </div>
        <div className="info__text">
            <p className="info__league">
                National Volleyball League
            </p>
            <p className="info__polonia">
                IBB POLONIA VC
            </p>
            <p className="info__oponent">
                Durham Palatinates
            </p>
            <p className="info__date">
                Środa, 10.08.2021 r.
            </p>
            <p className="info__time">
                Godz: 20:00
            </p>
        </div>
        <div className="info__oponentLogo">
            <img src={ oponentLogo } />
        </div>
    </div>
}

export default NextGameInfo