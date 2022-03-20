import React from "react";



const NewsCard = ({ img , date , category , title, description }) => {
    return <div className="news__card">
        <div className="newsCard__photo">
            <img src={ img } alt="news photograph" />
        </div>
        <div className="newsCard__date">
            { date } 
        </div>
        <p className="newsCard__category">
            { category }
        </p>
        <h3 className="newsCard__title">
            { title }
        </h3>
        <p className="newsCard__description">
            { description }
        </p>
    </div>
}

export default NewsCard