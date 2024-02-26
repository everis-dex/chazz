// VideoPresentation.tsx
import React, { useEffect, useRef } from "react";
import "./VideoPresentation.styles.scss";

export const VideoPresentation = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const playVideo = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play();
    }
  };

  useEffect(() => {
    playVideo();
  }, []);

  return (
    <div className="video__wrapper">
      <video ref={videoRef} controls={false} className="video__container" autoPlay muted>
        <source src="/assets/Chazz_Tangity_Mobile_V3 1.mp4" type="video/mp4" media="(max-width: 1224px)" />
        <source src="/assets/Chazz_Tangity_V3 1.mp4" type="video/mp4" media="(min-width: 1224px)" />
        Tu navegador no soporta el tag de video.
      </video>
    </div>
  );
};
