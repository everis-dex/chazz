import React, { useEffect, useRef, useState } from "react";

import { IHomeHeader } from "../../../interfaces/cms";
import { AllowCookies, LineBreakerSelector, Nav } from "../../shared/index";
import { VideoHeader } from "./VideoHeader/VideoHeader";

import "./HomeHeader.styles.scss";

const controlTextOptions = { play: "Play", stop: "Stop" };

export const HomeHeader = (headerData: IHomeHeader) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
  const [controlText, setControlText] = useState<string>(controlTextOptions.play);
  const [navHeight, setNavHeight] = useState<number>(25);
  const [titleLeft, setTitleLeft] = useState<number>(100);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);

  // Creamos una función que nos re calcula el ancho de la pantalla:
  window.onresize = () => setWindowWidth(window.innerWidth);

  const videoRef = useRef<HTMLVideoElement>(null);
  const controlRef = useRef<HTMLDivElement>(null);

  const switchPlayPause = () => {
    if (animationComplete) {
      setIsPlaying(!isPlaying);

      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
          setIsNavVisible(!isNavVisible);
          setControlText(controlTextOptions.play);
        } else {
          videoRef.current.play();
          setControlText(controlTextOptions.stop);
          setTimeout(() => setIsNavVisible(!isNavVisible), 1000);
        }
      }
    }
  };

  const AlertNavParent = (value: boolean): void => setIsBurgerMenuOpen(value);

  useEffect(() => {
    const handleMouseMove = (event: any): void => {
      if (!controlRef.current) return;

      if (event.clientY > 70 && event.clientX < window.innerWidth - 120) {
        const scrollFinalY = event.pageY - 10;
        const scrollFinalX = event.pageX - 50;

        if (window.innerWidth >= 1024) {
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
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (titleLeft > 16) {
        if (navHeight > 11) setNavHeight(11);
        setTitleLeft(16);
      } else {
        setAnimationComplete(true);
        document.body.classList.remove("no-scroll");
      }
    }, 1000);
  }, [navHeight, titleLeft]);

  function appHeight(): void {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  }
  window.addEventListener("resize", appHeight);
  appHeight();

  return (
    <div className="chazz-header">
      <div className={isPlaying ? "velo-out" : "velo-in"}>
        <div className={isPlaying ? "simply-out" : "simply-in"}>
          <span className={isPlaying ? "nav-out" : "nav-in"}>
            <Nav isPlaying={isPlaying} AlertNavParent={AlertNavParent} height={navHeight} />
          </span>
        </div>
        <div
          className={isPlaying ? "chazz-title-out" : "chazz-title"}
          style={windowWidth >= 1200 ? { left: `${titleLeft}%` } : {}}
        >
          <div className={isPlaying ? "simply-out" : ""}>
            <h1>
              <LineBreakerSelector typedLines={headerData.title} />
            </h1>
            <h4>{headerData.subtitle}</h4>
          </div>
          {!isBurgerMenuOpen && (
            <div className="player-video-mobile-switcher">
              <div className="player-video">
                <div className={`play-icon-${isPlaying ? "in" : "out"}`} onClick={switchPlayPause} />
                <div className={`stop-icon-${isPlaying ? "in" : "out"}`} onClick={switchPlayPause} />
                <span className="player-text" onClick={switchPlayPause}>
                  {controlText} reel
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      {animationComplete && (
        <div className="player-video-desktop-switcher">
          <div className="player-video" ref={controlRef}>
            <div className={`play-icon-${isPlaying ? "in" : "out"}`} onClick={switchPlayPause} />
            <div className={`stop-icon-${isPlaying ? "in" : "out"}`} onClick={switchPlayPause} />
            <span className="player-text" onClick={switchPlayPause}>
              {controlText} reel
            </span>
          </div>
        </div>
      )}

      {!isPlaying && <img src="/uploads/first_frame.jpg" alt="" className="grayscale" />}

      <VideoHeader
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        isNavVisible={isNavVisible}
        setIsNavVisible={setIsNavVisible}
        isBurgerMenuOpen={isBurgerMenuOpen}
        controlTextOptions={controlTextOptions}
        controlText={controlText}
        setControlText={setControlText}
        ref={videoRef}
      />

      <AllowCookies />
    </div>
  );
};
