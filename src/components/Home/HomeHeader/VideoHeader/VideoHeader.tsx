import React, { useEffect, forwardRef } from "react";
import "./VideoHeader.style.scss";

type Props = {
  AlertVideoParent?: (v: boolean) => void;
  toggleNavVisible: (value?: boolean) => void;
  burgerMenuOpen: boolean;
};

export const VideoHeader = forwardRef(
  ({ AlertVideoParent, toggleNavVisible, burgerMenuOpen }: Props, ref: React.LegacyRef<HTMLVideoElement>) => {
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
        const newRef = ref as React.RefObject<HTMLVideoElement>;
        if (newRef.current) {
          newRef.current.currentTime = 0;
        }
      } else {
        controlRef.current.style.opacity = "0";
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
  }
);
