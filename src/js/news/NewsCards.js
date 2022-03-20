import React from "react";
import NewsCard from "./NewsCard";
// Assets

//          CARD - 1
import img1 from "../../../assets/news1.png";
const date1 = "03 SIE";
const category1 = "MECZE / TURNIEJE";
const title1 = "Praesent condimentum, nisl eget lobortis tincidunt, tortor";
const description1 = "Cras varius tellus eu dignissim bibendum. Cras tincidunt blandit sem, et porta sapien condiment um vitae. Aenean non libero tempor, mollis tortor et, egestas nulla."

//          CARD - 2
import img2 from"../../../assets/news2.png";
const date2 = "03 SIE";
const category2 = "MECZE / TURNIEJE";
const title2 = "Praesent condimentum, nisl eget lobortis tincidunt, tortor";
const description2 = "Cras varius tellus eu dignissim bibendum. Cras tincidunt blandit sem, et porta sapien condiment um vitae. Aenean non libero tempor, mollis tortor et, egestas nulla."

//          CARD - 3
import img3 from"../../../assets/news3.png";
const date3 = "03 SIE";
const category3 = "MECZE / TURNIEJE";
const title3 = "Praesent condimentum, nisl eget lobortis tincidunt, tortor";
const description3 = "Cras varius tellus eu dignissim bibendum. Cras tincidunt blandit sem, et porta sapien condiment um vitae. Aenean non libero tempor, mollis tortor et, egestas nulla."

//          CARD - 4
import img4 from"../../../assets/news4.png";
const date4 = "03 SIE";
const category4 = "MECZE / TURNIEJE";
const title4 = "Praesent condimentum, nisl eget lobortis tincidunt, tortor";
const description4 = "Cras varius tellus eu dignissim bibendum. Cras tincidunt blandit sem, et porta sapien condiment um vitae. Aenean non libero tempor, mollis tortor et, egestas nulla."





const NewsCards = () => {
    return <div className="news__cards">
        <NewsCard img={ img1 } date= {date1 } category= {category1 } title= {title1 } description= {description1 } />
        <NewsCard img={ img2 } date= {date2 } category= {category2 } title= {title2 } description= {description2 } />
        <NewsCard img={ img3 } date= {date3 } category= {category3 } title= {title3 } description= {description3 } />
        <NewsCard img={ img4 } date= {date4 } category= {category4 } title= {title4 } description= {description4 } />
    </div>
}

export default NewsCards