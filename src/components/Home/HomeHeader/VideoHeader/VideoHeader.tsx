import React, { useState, useRef, useEffect } from "react";
import "./VideoHeader.style.scss";

type Props = {
  isPlaying: boolean;
  setIsPlaying: (a: boolean) => void;
  toggleNavVisible: (value?: boolean) => void;
  isBurgerMenuOpen: boolean;
};

const ControlTextOptions = { play: "Play", stop: "Stop" };

export const VideoHeader = ({ isPlaying, setIsPlaying, toggleNavVisible, isBurgerMenuOpen }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlRef = useRef<HTMLDivElement>(null);
  const [controlText, setControlText] = useState<string>(ControlTextOptions.play);

  useEffect(() => {
    if (isPlaying) return;
    toggleNavVisible(true);
  }, [isPlaying, toggleNavVisible]);

  function switchPlayPause(): void {
    setIsPlaying(!isPlaying);
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setControlText(ControlTextOptions.play);
      toggleNavVisible();
    } else {
      videoRef.current.play();
      setControlText(ControlTextOptions.stop);
      setTimeout(() => toggleNavVisible(), 1000);
    }
  }

  function forcePause(): void {
    setIsPlaying(false);
    setControlText(ControlTextOptions.play);
  }

  function resetVideo(): void {
    setIsPlaying(false);
    setControlText(ControlTextOptions.play);
    if (videoRef.current) videoRef.current.currentTime = 0;
  }

  useEffect(() => {
    function handleMouseMove(event: any): void {
      if (!controlRef.current) return;

      if (event.clientY > 70 && event.clientX < window.innerWidth - 120) {
        const scrollFinalY = event.pageY - 10;
        const scrollFinalX = event.pageX - 50;

        if (window.innerWidth >= 1040) {
          controlRef.current.style.top = scrollFinalY.toString().concat("px");
          controlRef.current.style.left = scrollFinalX.toString().concat("px");
          controlRef.current.style.opacity = "1";
        } else {
          controlRef.current.style.top = (window.innerHeight - 40).toString().concat("px");
          controlRef.current.style.left = "5%";
          controlRef.current.style.opacity = "0";
        }
      } else {
        controlRef.current.style.opacity = "0";
      }
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {!isBurgerMenuOpen && (
        <>
          <div className="player-video-mobile-switcher">
            <div className="player-video">
              <div className={`play-icon-${isPlaying ? "in" : "out"}`} onClick={switchPlayPause} />
              <div className={`stop-icon-${isPlaying ? "in" : "out"}`} onClick={switchPlayPause} />
              <span className="player-text" onClick={switchPlayPause}>
                {controlText} reel
              </span>
            </div>
          </div>

          <div className="player-video-desktop-switcher">
            <div className="player-video" ref={controlRef}>
              <div className={`play-icon-${isPlaying ? "in" : "out"}`} onClick={switchPlayPause} />
              <div className={`stop-icon-${isPlaying ? "in" : "out"}`} onClick={switchPlayPause} />
              <span className="player-text" onClick={switchPlayPause}>
                {controlText} reel
              </span>
            </div>
          </div>
        </>
      )}
      <video
        className={`video-header ${isPlaying ? "color" : "no-color"}`}
        ref={videoRef}
        onEnded={resetVideo}
        onPause={forcePause}
        preload="auto"
      >
        <source src="uploads/reel_chazz_1080.mp4" media="(min-width: 850px)" />
        <source src="uploads/reel_chazz_540.mp4" />
      </video>
    </>
  );
};
