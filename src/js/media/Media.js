import React from "react";
// Partials
import MediaHeader from "./MediaHeader";
import MediaGallery from "./MediaGallery";




const Media = () => {
    return <section className="media">
        <div className="container">
            <MediaHeader />
            <MediaGallery />
        </div>
    </section>
}

export default Media