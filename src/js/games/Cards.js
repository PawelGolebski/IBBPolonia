import React from "react";
import CardShares from './CardShares'
import CardAdv from './CardAdv'
import CardTable from "./CardTable";
import CardLastGame from "./CardLastGame";


const Cards = () => {
    return <>
    <div className="games__cards">
        
        <div className="games__cardsWrapper">
            <CardShares/>
            <CardAdv/>
        </div>
        
        <div className="games__cardsWrapper">
            <CardTable/>
            <CardLastGame/>
        </div>
        
        
    </div>
    <h2 className="nextGame__title">
    następny mecz
    </h2>
    </>
}   
    

export default Cards