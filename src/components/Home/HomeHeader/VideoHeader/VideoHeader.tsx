import React, { useState, useRef, useEffect } from "react";

import "./VideoHeader.style.scss";

type Props = {
  isPlaying: boolean;
  setIsPlaying: (a: boolean) => void;
  isNavVisible: boolean;
  setIsNavVisible: (a: boolean) => void;
  isBurgerMenuOpen: boolean;
};

export const VideoHeader = ({ isPlaying, setIsPlaying, isNavVisible, setIsNavVisible, isBurgerMenuOpen }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [controlText, setControlText] = useState<string>("Play");
  const pixelatedCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const videoCanvasRef = useRef<HTMLCanvasElement | null>(null)

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
      setTimeout(() => setIsNavVisible(!isNavVisible), 1000);
    }
  };

  const forcePause = () => {
    setIsPlaying(false);
    setControlText("Play");
  }

  const resetVideo = () => {
    setIsPlaying(false);
    setControlText("Play");
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (controlRef.current) {
        if (event.clientY > 70 && event.clientX < window.innerWidth - 120) {
          const scrollY = window.scrollY;
          const postY = event.clientY;
          const scrollFinalY = scrollY + postY - 10;
          const scrollX = window.scrollX;
          const postX = event.clientX;
          const scrollFinalX = scrollX + postX - 50;

          if (window.innerWidth >= 1040) {
            controlRef.current.style.top = scrollFinalY.toString().concat("px");
            controlRef.current.style.left = scrollFinalX.toString().concat("px");
            controlRef.current.style.opacity = "1";
          } else {
            controlRef.current.style.top = (window.innerHeight - 40).toString().concat("px");
            controlRef.current.style.left = "5%";
          }
        } else {
          controlRef.current.style.opacity = "0";
        }
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const controlRef = useRef<HTMLDivElement>(null);

  //////////////////////////////////////////////////////////////////////////////////////////////////////
  const videoWidth: number = window.innerWidth;
  const videoHeight: number = window.innerHeight;
  useEffect(() => {

    const videoCanvas = videoCanvasRef.current;
    const pixelatedCanvas = pixelatedCanvasRef.current;

    if (!videoCanvas) { return };
    const videoCanvasContext = videoCanvas.getContext('2d');
    if (!videoCanvasContext) { return };
    const myVideo = new Image();
    myVideo.src = "video.mp4";
    myVideo.src = "image.jpg";
    videoCanvasContext.drawImage(myVideo, 0, 0, videoWidth, videoHeight);

    if (!pixelatedCanvas) { return };
    const pixelatedCanvasContext = pixelatedCanvas.getContext('2d');
    if (!pixelatedCanvasContext) { return };
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
        pixelatedCanvasContext.strokeStyle = 'white';
        pixelatedCanvasContext.fillRect(x, y, x + tiling - 1, y + tiling - 1);
        pixelatedCanvasContext.globalAlpha = 0.1;
      }
    }

  }, [])

  //////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      {!isBurgerMenuOpen && (
        <>
          <div className="player-video-mobile-switcher">
            <div className="player-video">
              <div className={`play-icon-${isPlaying ? "in" : "out"}`} onClick={switchPlayPause}></div>
              <div className={`stop-icon-${isPlaying ? "in" : "out"}`} onClick={switchPlayPause}></div>
              <span className="player-text" onClick={switchPlayPause}>
                {controlText} reel
              </span>
            </div>
          </div>

          <div className="player-video-desktop-switcher">
            <div className="player-video" ref={controlRef}>
              <div className={`play-icon-${isPlaying ? "in" : "out"}`} onClick={switchPlayPause}></div>
              <div className={`stop-icon-${isPlaying ? "in" : "out"}`} onClick={switchPlayPause}></div>
              <span className="player-text" onClick={switchPlayPause}>
                {controlText} reel
              </span>
            </div>
          </div>
        </>
      )}
      <video
        id="videoId"
        className={`video-header video-header-${isPlaying ? "color" : "no-color"}`}
        ref={videoRef}
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
};
