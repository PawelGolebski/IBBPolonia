import React from "react";
import CardShares from './CardShares'
import CardAdv from './CardAdv'
import CardTable from "./CardTable";
import CardLastGame from "./CardLastGame";


const Cards = () => {
    return <div className="games__cards">
        <CardShares/>
        <CardAdv/>
        <CardTable/>
        <CardLastGame/>
    </div>
}

export default Cards