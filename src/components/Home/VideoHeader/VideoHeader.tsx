import React, { useState, useRef } from "react";
import "../VideoHeader/VideoHeader.style.scss";

type Props = {
  isPlaying: boolean;
  setIsPlaying: (a: boolean) => void;
};

export const VideoHeader = ({ isPlaying, setIsPlaying }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [controlText, setControlText] = useState<string>("Play");

  const switchPlayPause = () => {
    setIsPlaying(!isPlaying);

    if (videoRef.current && isPlaying) {
      videoRef.current.pause()
      setControlText("Play");
    };
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
      setControlText("Stop");
    };
  };

  return (
    <>
      <div className="player-video">{isPlaying}

        <div className={!isPlaying ? "play-icon-out" : "play-icon-in"} onClick={switchPlayPause}></div>
        <div className={!isPlaying ? "stop-icon-out" : "stop-icon-in"} onClick={switchPlayPause}></div>

        <span style={{ marginLeft: 20 }} onClick={switchPlayPause}>{controlText} reel</span>
      </div>

      <video
        className="video-header"
        ref={videoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
      ></video>
    </>
  );
};

