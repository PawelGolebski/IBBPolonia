import React from "react";
//Assets
import poloniaLogo from '../../../assets/poloniaLogo.png'
import oponentLogo from '../../../assets/richmondLogo.png'

const LastGameResult = () => {
    return <div className="lastGame">

        <p className="lastGame__date">
            PON 03.08
        </p>
        <div className="lastGame__result">
            <div className="lastGame__poloniaLogo">
                <img src={ poloniaLogo }/>
            </div>
            <p className="result__poloniaSets">3</p>
            <p>:</p>
            <p className="result__oponentSets">0</p>
            <div className="lastGame__oponentLogo">
                <img src={ oponentLogo }/>
            </div>
        </div>
        <p className="lastGame__points">
            (25:21, 25:19, 25:23)
        </p>

    </div>
    
    
}

export default LastGameResult