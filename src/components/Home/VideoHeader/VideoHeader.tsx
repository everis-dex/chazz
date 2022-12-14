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
  }, [isNavVisible, isPlaying, setIsNavVisible]);

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
  };


  useEffect(() => {
    const handleMouseMove = (event: any) => {
      console.log(window.innerWidth);
      if (controlRef.current){
          if(event.clientY > 70 && event.clientX < window.innerWidth - 120){
          const scrollY = window.scrollY;
          const postY = event.clientY;
          const scrollFinalY = scrollY + postY - 10;
          const scrollX = window.scrollX;
          const postX = event.clientX;
          const scrollFinalX = scrollX + postX - 50;
  
          controlRef.current.style.top = scrollFinalY.toString().concat('px');
          controlRef.current.style.left = scrollFinalX.toString().concat('px');
          controlRef.current.style.opacity = '1'; 
          // controlRef.current.style.left = event.clientX.toString().concat('px'); 
        }else{
          controlRef.current.style.opacity = '0'; 
        };
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  const controlRef = useRef<HTMLDivElement>(null); 

  return (
    <>
      <div className="player-video" ref={controlRef}>
        {isPlaying}

        <div className={!isPlaying ? "play-icon-out" : "play-icon-in"} onClick={switchPlayPause}></div>
        <div className={!isPlaying ? "stop-icon-out" : "stop-icon-in"} onClick={switchPlayPause}></div>

        <span className="player-text" onClick={switchPlayPause}>
          {controlText} reel
        </span>
      </div>

      <video
        className={isPlaying ? "video-header-color" : "video-header"}
        ref={videoRef}
        src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
        onEnded={resetVideo}
      ></video>
    </>
  );
};
