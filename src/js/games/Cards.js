import React from "react";
import CardShares from './CardShares'
import CardAdv from './CardAdv'
import CardTable from "./CardTable";
import CardLastGame from "./CardLastGame";


const Cards = () => {
    return <div className="games__cards">
        
        <div className="lastGame__cardsWrapper">
            <CardShares/>
            <CardAdv/>
        </div>
        
        <div className="lastGame__cardsWrapper">
            <CardTable/>
            <CardLastGame/>
        </div>
        
    </div>
}

export default Cards