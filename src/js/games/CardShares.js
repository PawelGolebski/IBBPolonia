import React from "react"

import sharesCertificate from "../../../assets/sharesCertificate.png"

const CardShares = ({}) => {
    return <div className="games__card">
        <p className="card__title">Kup udziały Klubu</p>
        <div className="card__image">
            <img src={ sharesCertificate } alt="shares certificate"/>
        </div>
        <p className="card__description">
            Dołącz do Klubu, stań się udziałowcem i przeżywaj emocje będąc częścią Klubu.
        </p>
        <a href="#" className="card__button">
            Dowiedz się więcej
        </a>
    </div>
}

export default CardShares