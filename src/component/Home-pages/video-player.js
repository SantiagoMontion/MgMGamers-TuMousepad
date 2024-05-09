import React, { useState, useRef } from "react";

const VideoPlayer = ({ video, autoplay, controls }) => {
  return (
    <div className="videoplayer">
      <video autoPlay={autoplay} loop controls={controls} className="video">
        <source src={video} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};

export default VideoPlayer;
