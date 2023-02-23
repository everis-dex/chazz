import React, { useEffect, useRef, useState } from "react";

import { IHomeHeader } from "../../../interfaces/cms";
import { AllowCookies, Nav } from "../../shared/index";
import { VideoHeader } from "./VideoHeader/VideoHeader";

import "./HomeHeader.styles.scss";

const controlTextOptions = { play: "Play", stop: "Stop" };

export const HomeHeader = (headerData: IHomeHeader) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // Video states
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [controlText, setControlText] = useState<string>(controlTextOptions.play);

  // Nav bar / burger menu states
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  // Animation states
  const [titleLeft, setTitleLeft] = useState<number>(100);
  const [navHeight, setNavHeight] = useState<number>(windowWidth > 1200 ? 25 : 11);
  const [animationComplete, setAnimationComplete] = useState<boolean>(windowWidth < 1200);

  window.onresize = () => {
    setWindowWidth(window.innerWidth);
    // If device is mobile, animation is already completed (disabled)
    if (windowWidth < 1200) setAnimationComplete(true);
  };

  const videoRef = useRef<HTMLVideoElement>(null);
  const controlRef = useRef<HTMLDivElement>(null);

  const switchPlayPause = () => {
    if (!animationComplete) return;
    setIsPlaying(!isPlaying);
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setControlText(controlTextOptions.play);
      setIsNavVisible(!isNavVisible);
    } else {
      videoRef.current.play();
      setControlText(controlTextOptions.stop);
      setTimeout(() => setIsNavVisible(!isNavVisible), 1000);
    }
  };

  const AlertNavParent = (value: boolean): void => setIsBurgerMenuOpen(value);

  function pauseVideo(): void {
    setIsPlaying(false);
    setControlText(controlTextOptions.play);
  }

  useEffect(() => {
    function handleMouseMove(event: any): void {
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
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleOnWheel: React.WheelEventHandler<HTMLDivElement> = e => {
    if (e.deltaY > 0) {
      if (navHeight > 10) setNavHeight(navHeight - 2);
      else setNavHeight(10);

      if (titleLeft > 0) setTitleLeft(titleLeft - 8 >= 0 ? titleLeft - 8 : 0);
      else setTitleLeft(0);

      if (titleLeft === 0 && navHeight === 10) {
        setAnimationComplete(true);
      }
      if (animationComplete) setTimeout(() => document.body.classList.remove("no-scroll"), 1000);
    }
  };

  function reload() {
    // Agregar la clase al body para ocultar el overflow
    if (window.pageYOffset !== 0) window.scrollTo(0, 0);
    else document.body.classList.add("no-scroll");

    setTimeout(() => document.body.classList.add("no-scroll"), 500);
  }

  document.addEventListener("load", reload);
  useEffect(() => reload(), []);

  function appHeight(): void {
    document.documentElement?.style.setProperty("--app-height", `${window.innerHeight}px`);
  }
  window.addEventListener("resize", appHeight);
  appHeight();

  useEffect(() => {
    if (!isPlaying && !isNavVisible) setIsNavVisible(true);
  }, [isNavVisible, isPlaying, setIsNavVisible]);

  const PlayerControler = () => (
    <>
      <div className={`play-icon-${isPlaying ? "in" : "out"}`} onClick={switchPlayPause} />
      <div className={`stop-icon-${isPlaying ? "in" : "out"}`} onClick={switchPlayPause} />
      <span className="player-text" onClick={switchPlayPause}>
        {controlText} reel
      </span>
    </>
  );

  return (
    <div className="chazz-header" onWheel={handleOnWheel}>
      <div className={isPlaying ? "velo-out" : "velo-in"} onWheel={handleOnWheel}>
        <div className={isPlaying ? "simply-out" : "simply-in"}>
          <span className={isPlaying ? "nav-out" : "nav-in"}>
            <Nav
              isPlaying={isPlaying}
              AlertNavParent={AlertNavParent}
              height={navHeight}
              darkMode={windowWidth < 768}
            />
          </span>
        </div>
        <div className="chazz-title" style={windowWidth >= 1200 ? { left: `${titleLeft}vw` } : {}}>
          <div className={isPlaying ? "simply-out" : ""}>
            <h1>{headerData.title}</h1>
            <h4>{headerData.subtitle}</h4>
          </div>
          {!isBurgerMenuOpen && (
            <div className="player-video-mobile-switcher">
              <div className="player-video">
                <PlayerControler />
              </div>
            </div>
          )}
        </div>
      </div>
      {animationComplete && (
        <div className="player-video-desktop-switcher">
          <div className="player-video" ref={controlRef}>
            <PlayerControler />
          </div>
        </div>
      )}

      {!isPlaying && <img src="/assets/first_frame.jpg" alt="" className="grayscale" />}

      <VideoHeader isPlaying={isPlaying} pauseVideo={pauseVideo} ref={videoRef} />
      <AllowCookies />
    </div>
  );
};
