import React from "react";
// Partials
import ShopCard from "./ShopCard";
// Assets

import shopProduct1 from "../../../assets/shopProduct1.png";
import shopProduct2 from "../../../assets/shopProduct2.png";

const ShopCards = () => {
    return <div className="container">
        <div className="shop__info">
            <p className="shop__title">sklep klubowy</p>
            <a href="#">Otwórz sklep</a>
        </div>
        <div className="shop__cards">
            <div className="shop__cardsWrapper">
                <ShopCard photo={ shopProduct1 } 
                    title="lorem ipsum dolor sit amet" 
                    description="Vivamus sit amet tellus quis eros posuere sodales. Phasell us interdum turpis ut augue lobortis pharetra." 
                    status="dostępny w magazynie"
                    price="259zł"
                    />
                    
                <ShopCard photo={ shopProduct2 } 
                    title="lorem ipsum dolor sit amet" 
                    description="Vivamus sit amet tellus quis eros posuere sodales. Phasell us interdum turpis ut augue lobortis pharetra."
                    status="dostępny w magazynie"
                    price="259zł"
                 />
            </div>

            <div className="shop__cardsWrapper">
                <ShopCard photo={ shopProduct2 } 
                    title="lorem ipsum dolor sit amet" 
                    description="Vivamus sit amet tellus quis eros posuere sodales. Phasell us interdum turpis ut augue lobortis pharetra." 
                    status="dostępny w magazynie"
                    price="259zł"
                    />
                    
                <ShopCard photo={ shopProduct1 } 
                    title="lorem ipsum dolor sit amet" 
                    description="Vivamus sit amet tellus quis eros posuere sodales. Phasell us interdum turpis ut augue lobortis pharetra."
                    status="dostępny w magazynie"
                    price="259zł"
                 />
            </div>
        </div>
    </div>
}

export default ShopCards