import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import TvHeader from "./TvHeader";
// Assets
import ad from "../../../assets/tvAd.png";
const vid1 = "eZ19dnl9Z_w";


export default function Tv() {
  return (
    <section className="tv">
        <div className="container">
            <TvHeader/>
            
            <div className="tv__windowsWrapper">
                <div className="tv__bigWindow">
                    <YoutubeEmbed embedId={ vid1 } w="50.625rem" h="29.75rem"/>
                </div>
                <div className="tv__smallWindows">
                    <div className="tv__smallWindow">
                        <YoutubeEmbed embedId={ vid1 } w="24.56rem" h="14.1rem"/>
                    </div>
                    <div className="tv__smallWindow">
                        <YoutubeEmbed embedId={ vid1 } w="24.56rem" h="14.1rem"/>
                    </div>
                    <div className="tv__smallWindow">
                        <YoutubeEmbed embedId={ vid1 } w="24.56rem" h="14.1rem"/>
                    </div>
                    <div className="tv__smallWindow">
                        <YoutubeEmbed embedId={ vid1 } w="24.56rem" h="14.1rem"/>
                    </div>
                </div>
            </div>
            <a className="tv__ad">
                <img src={ ad } alt="ad" />
            </a>
        </div>
        
    </section>
    
  );
}
