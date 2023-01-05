import React, { useState, useRef, useEffect } from "react";
import "../VideoHeader/VideoHeader.style.scss";

type Props = {
  isPlaying: boolean;
  setIsPlaying: (a: boolean) => void;
  isNavVisible: boolean;
  setIsNavVisible: (a: boolean) => void;
};

export const VideoHeader = ({ isPlaying, setIsPlaying, isNavVisible, setIsNavVisible }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [controlText, setControlText] = useState<string>("Play");

  useEffect(() => {
    if (!isPlaying && !isNavVisible) {
      setIsNavVisible(true);
    }
  }, [isNavVisible, isPlaying, setIsNavVisible])


  const switchPlayPause = () => {
    setIsPlaying(!isPlaying);

    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsNavVisible(!isNavVisible);
      setControlText("Play");
    }
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
      setControlText("Stop");
      setTimeout(() => {
        setIsNavVisible(!isNavVisible);
      }, 1000);
    }
  };

  const resetVideo = () => {
    setIsPlaying(false);
    setControlText("Play");
  }

  return (
    <>
      <div className="player-video">
        {isPlaying}

        <div className={!isPlaying ? "play-icon-out" : "play-icon-in"} onClick={switchPlayPause}></div>
        <div className={!isPlaying ? "stop-icon-out" : "stop-icon-in"} onClick={switchPlayPause}></div>

        <span style={{ marginLeft: 20 }} onClick={switchPlayPause}>
          {controlText} reel
        </span>
      </div>

      <video
        className="video-header"
        ref={videoRef}
        src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
        onEnded={() => resetVideo()}
      ></video>
    </>
  );
};
