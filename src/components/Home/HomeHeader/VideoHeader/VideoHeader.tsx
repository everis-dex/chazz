import React, { useEffect, useRef, forwardRef } from "react";
import "./VideoHeader.style.scss";

type Props = {
  isPlaying: boolean;
  setIsPlaying: (a: boolean) => void;
  isNavVisible: boolean;
  setIsNavVisible: (a: boolean) => void;
  isBurgerMenuOpen: boolean;
  controlTextOptions: { play: string; stop: string };
  controlText: string;
  setControlText: (a: string) => void;
};

export const VideoHeader = forwardRef(({
  isPlaying,
  setIsPlaying,
  isNavVisible,
  setIsNavVisible,
  controlTextOptions,
  setControlText }: Props, ref: React.LegacyRef<HTMLVideoElement>) => {


  useEffect(() => {
    if (!isPlaying && !isNavVisible) {
      setIsNavVisible(true);
    }
  }, [isNavVisible, isPlaying, setIsNavVisible]);

  function forcePause(): void {
    setIsPlaying(false);
    setControlText(controlTextOptions.play);
  }

  const resetVideo = () => {
    setIsPlaying(false);
    setControlText("Play");
    if (ref) {
      const newRef = ref as React.RefObject<HTMLVideoElement>
      if (newRef.current) {
        newRef.current.currentTime = 0;
      }
    }
  };

  return (
    <>
      <video
        className={`video-header ${isPlaying ? "color" : "no-color"}`}
        ref={ref}
        onEnded={resetVideo}
        onPause={forcePause}
        preload="auto"
      >
        <source src="uploads/reel_chazz_1080.mp4" media="(min-width: 850px)" />
        <source src="uploads/reel_chazz_540.mp4" />
      </video>
    </>
  );
});
