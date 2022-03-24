import React from "react";
//Partials
import NextGameLinks from "./NextGameLinks";
import NextGameInfo from "./NextGameInfo";



const NextGame = () => {
    return <div className="games__nextGame">
        
            <NextGameLinks/>
            <NextGameInfo/>
        
    </div>
}

export default NextGame