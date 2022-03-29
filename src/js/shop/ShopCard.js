import React from "react";

const ShopCard = ({photo, title, description, status, price}) => {
    return <div className="shop__card">
        <div className="shopCard__photo">
            <img src={ photo } alt="product image" />
        </div>
        <p className="shopCard__title">
            { title }
        </p>
        <p className="shopCard__description">
            { description }
        </p>
        <div className="shopCard__status">
            <p>Status:</p>
            <p> { status } </p>
        </div>
        <div className="shopCard__price">
            <p>Cena:</p>
            <p> { price } </p>
        </div>
        <a href="#" className="shopCard__button">
            zobacz w sklepie
        </a>
    </div>
}

export default ShopCard