import React, { forwardRef } from "react";
import "./VideoHeader.style.scss";

type Props = { isPlaying: boolean; pauseVideo: () => void };

export const VideoHeader = forwardRef(({ isPlaying, pauseVideo }: Props, ref: any) => {
  function resetVideo(): void {
    pauseVideo();
    const videoRef = ref as React.RefObject<HTMLVideoElement>;
    if (videoRef && videoRef.current) videoRef.current.currentTime = 0;
  }

  return (
    <video
      className={`video-header ${isPlaying ? "color" : "no-color"}`}
      ref={ref}
      onEnded={resetVideo}
      onPause={pauseVideo}
      preload="auto"
    >
      <source src="/uploads/reel_chazz_1080.mp4" media="(min-width: 850px)" />
      <source src="/uploads/reel_chazz_540.mp4" />
    </video>
  );
});
