import React from "react"
import LastGameResult from "./LastGameResult"



const CardLastGame = () => {
    return <div className="games__card">
        <p className="card__title">
            Ostatni mecz
        </p>
        {/* <p className="card__gameDate">
            PON. 03.08
        </p> */}
        <LastGameResult/>
        <a href="#" className="card__button">
            Szczegóły spotkania
        </a>
    </div>
}

export default CardLastGame