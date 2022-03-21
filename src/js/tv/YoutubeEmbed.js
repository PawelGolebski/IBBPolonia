import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId, w, h }) => (
  <div className="video-responsive">
    <iframe
      width={ w }
      height={ h }
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;