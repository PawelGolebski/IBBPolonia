import React from "react"
// Assets
import polsatIcon from '../../../assets/polsatIcon.png';
import bbcIcon from '../../../assets/bbcIcon.png'


const NextGameLinks = () => {
    return <div className="nextGame__links">
        <h2 className="links__title">
            następny mecz
        </h2>
        <a href="#" className="links__timetableButton">
            Sprawdź terminarz rozgrywek
        </a>
        <a href="#" className="links__buyButton">
            Zakup bilet
        </a>
        <a href="#" className="links__advButton">
            Zareklamuj się na meczu
        </a>
        <div className="links__streaming">
            <p>
                Oglądaj na żywo:
            </p>
            <div className="links__polsat">
                <img src={ polsatIcon }/>
            </div>
            <div className="links__bbcSport">
                <img src={ bbcIcon }/>
            </div>
        </div>
    </div>
       
    
    
    
}

export default NextGameLinks