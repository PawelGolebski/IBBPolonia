import React from "react";
// Partials
import NewsCards from "./NewsCards";
// Assets
import adImg from "../../../assets/newsAd.png"



const News = () => {
    return <section className="news">
        <header className="news__header">
            <div className="container">
                <h2>aktualności</h2>
                <a href="#">Zobacz wszystkie</a>
            </div>
        </header>
        <div className="container">
            <NewsCards />
            <a className="news__ad">
                <img src={ adImg } /> 
            </a>
        </div>
    </section>
}

export default News