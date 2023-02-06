import React, { forwardRef, useEffect, useRef, useState } from "react";
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

export const VideoHeader = forwardRef(
  (
    {
      isPlaying,
      setIsPlaying,
      isNavVisible,
      setIsNavVisible,
      isBurgerMenuOpen,
      controlTextOptions,
      controlText,
      setControlText
    }: Props,
    ref: React.LegacyRef<HTMLVideoElement>
  ) => {
    useEffect(() => {
      if (!isPlaying && !isNavVisible) {
        setIsNavVisible(true);
      }
    }, [isNavVisible, isPlaying, setIsNavVisible]);

    const videoRef = useRef<HTMLVideoElement>(null);
    const pixelatedCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const videoCanvasRef = useRef<HTMLCanvasElement | null>(null);

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
      }
    };

    const switchPlayPause = () => {
      setIsPlaying(!isPlaying);

      if (videoRef.current && isPlaying) {
        videoRef.current.pause();
        setIsNavVisible(!isNavVisible);

        if (videoRef.current && !isPlaying) {
          videoRef.current.play();
          setControlText("Stop");
          setTimeout(() => setIsNavVisible(!isNavVisible), 1000);
        }
      }
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    const videoWidth: number = window.innerWidth;
    const videoHeight: number = window.innerHeight;

    useEffect(() => {
      const videoCanvas = videoCanvasRef.current;
      const pixelatedCanvas = pixelatedCanvasRef.current;

      if (!videoCanvas) {
        return;
      }
      const videoCanvasContext = videoCanvas.getContext("2d");
      if (!videoCanvasContext) {
        return;
      }
      const myVideo = new Image();
      myVideo.src = "video.mp4";
      myVideo.src = "image.jpg";
      videoCanvasContext.drawImage(myVideo, 0, 0, videoWidth, videoHeight);

      if (!pixelatedCanvas) {
        return;
      }
      const pixelatedCanvasContext = pixelatedCanvas.getContext("2d");
      if (!pixelatedCanvasContext) {
        return;
      }
      pixelatedCanvasContext.beginPath();
      pixelatedCanvasContext.fillStyle = "red";
      console.log({ videoWidth, videoHeight });
      videoCanvasContext.globalAlpha = 0.1;

      const tiling: number = 18;
      for (let x = 1; x < videoWidth; x += tiling) {
        for (let y = 1; y < videoHeight; y += tiling) {
          // Detectar el color del pixel
          // const pixelData = videoCanvasContext.getImageData(0, 0, 1, 1).data;
          // console.log(pixelData);
          pixelatedCanvasContext.beginPath();
          pixelatedCanvasContext.fillStyle = "rgb(225,225,225)";
          pixelatedCanvasContext.strokeStyle = "white";
          pixelatedCanvasContext.fillRect(x, y, x + tiling - 1, y + tiling - 1);
          pixelatedCanvasContext.globalAlpha = 0.1;
        }
      }
    }, []);

    //////////////////////////////////////////////////////////////////////////////////////////////////////

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
        {/* <canvas id="pixelatedCanvas" className="canvas" ref={pixelatedCanvasRef} width={videoWidth} height={videoHeight}></canvas> */}
        {/* <canvas id="videoCanvas" className="canvas" ref={videoCanvasRef} width={videoWidth} height={videoHeight}></canvas> */}
      </>
    );
  }
);
