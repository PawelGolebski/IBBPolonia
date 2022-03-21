import React from "react";
// Assets
import media1 from "../../../assets/media1.png";
import media2 from "../../../assets/media2.png";
import media3 from "../../../assets/media3.png";
import media4 from "../../../assets/media4.png";
import media5 from "../../../assets/media5.png";
import media6 from "../../../assets/media6.png";


const MediaGallery = () => {
    return <div className="media__gallery">
        <div className="mediaGallery__photo">
            <img src={ media1 } alt="gallery tile"/>
        </div>
        <div className="mediaGallery__photo">
            <img src={ media2 } alt="gallery tile"/>
        </div>
        <div className="mediaGallery__photo">
            <img src={ media3 } alt="gallery tile"/>
        </div>
        <div className="mediaGallery__photo">
            <img src={ media4 } alt="gallery tile"/>
        </div>
        <div className="mediaGallery__photo">
            <img src={ media5 } alt="gallery tile"/>
        </div>
        <div className="mediaGallery__photo">
            <img src={ media6 } alt="gallery tile"/>
        </div>

        <div className="mediaGallery__photo">
            <img src={ media6 } alt="gallery tile"/>
        </div>

        <div className="mediaGallery__photo">
            <img src={ media3 } alt="gallery tile"/>
        </div>

        <div className="mediaGallery__photo">
            <img src={ media2 } alt="gallery tile"/>
        </div>

        <div className="mediaGallery__photo">
            <img src={ media4 } alt="gallery tile"/>
        </div>

        <div className="mediaGallery__photo">
            <img src={ media5 } alt="gallery tile"/>
        </div>

        <div className="mediaGallery__photo">
            <img src={ media1 } alt="gallery tile"/>
        </div>
    </div>
}

export default MediaGallery