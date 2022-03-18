import React from "react";
// Assets
import arrowLeft from "../../../assets/arrowLeft.png"
import arrowRight from "../../../assets/arrowRight.png"
import playerImg from "../../../assets/ambassadorImg.png"

const AchievementCard = () => {
    return <div className="achievementsCard__wrapper">
        <div className="achievements__card">
            <h2 className="achievementsCard__title">
                Ambasadorzy klubu
            </h2>
            <p className="achievementsCard__player">
                Krzysztof Ignaczak
            </p>
            <p className="achievementsCard__description">
                brazylijski siatkarz, grający na pozycji przyjmującego, wielokrotny 
                reprezentant kraju, mistrz olimpijski.
            </p>
            <p className="achievementsCard__quote">
                "Nunc ut est et quam semper semper in sed sapien. 
                Fusce volutpat enim eget nulla malesuada, non vene
                augue porta. In hac habitasse platea dictumst. Suspen 
                disse imperdiet lacinia enim, eu sagittis lacus."
            </p>
            <div className="achievementsCard__playerImg">
                <img src={ playerImg } />
            </div>
        </div>
        <div className="achievementsCard__buttons">
            <div className="achievementsCard__buttonRight">
                <img src={ arrowRight } />
            </div>
            <div className="achievementsCard__buttonLeft">
                <img src={ arrowLeft } />
            </div>
        </div>
    </div>
}

export default AchievementCard