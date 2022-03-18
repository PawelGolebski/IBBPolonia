import React from "react";
// Assets
import trophysImg from "../../../assets/trophysImg.png"
import arrowLeft from "../../../assets/arrowLeft.png"
import arrowRight from "../../../assets/arrowRight.png"

const AchievementsSlider = () => {
    return <div className="achievementsSlider">
        <h2 className="achievementsSlider__title">
            Nasze osiągnięcia      
        </h2>
        <div className="achievementsSlider__img">
            <img src={ trophysImg } />
        </div>
        <div className="achievementsSlider__buttons">
            <div className="achievementsSlider__buttonLeft">
                <img src={ arrowLeft } />
            </div>
            <div className="achievementsSlider__buttonRight">
                <img src={ arrowRight } />
            </div>
        </div>
    </div>
}

export default AchievementsSlider