import React, { useEffect, useRef, useState } from "react";

import { IHomeHeader } from "../../../interfaces/cms";
import { AllowCookies, Nav } from "../../shared/index";
import { VideoHeader } from "./VideoHeader/VideoHeader";

import "./HomeHeader.styles.scss";

const controlTextOptions = { play: "Play", stop: "Stop" };

export const HomeHeader = (headerData: IHomeHeader) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
  const [controlText, setControlText] = useState<string>(controlTextOptions.play);
  const [navHeight, setNavHeight] = useState<number>(window.innerWidth > 768 ? 25 : 11);
  const [titleLeft, setTitleLeft] = useState<number>(100);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);

  // Creamos una función que nos re calcula el ancho de la pantalla:
  window.onresize = () => setWindowWidth(window.innerWidth);

  const videoRef = useRef<HTMLVideoElement>(null);
  const controlRef = useRef<HTMLDivElement>(null);

  const switchPlayPause = () => {
    if (!animationComplete) return;
    setIsPlaying(!isPlaying);
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsNavVisible(!isNavVisible);
      setControlText(controlTextOptions.play);
    } else {
      videoRef.current.play();
      setControlText(controlTextOptions.stop);
      setTimeout(() => setIsNavVisible(!isNavVisible), 1000);
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
    console.log("🚀 ~ file: HomeHeader.tsx:89 ~ useEffect ~ window.top:", window);
    console.log("🚀 ~ file: HomeHeader.tsx:89 ~ useEffect ~ window.top:", window.pageYOffset);
    if (window.pageYOffset !== 0) window.scrollTo(0, 0);
    else {
      document.body.classList.add("no-scroll");
    }
    setTimeout(() => {
      document.body.classList.add("no-scroll");
    }, 500);
  }

  document.addEventListener("load", reload);

  useEffect(() => {
    reload();
  }, []);

  function appHeight(): void {
    document.documentElement?.style.setProperty("--app-height", `${window.innerHeight}px`);
  }
  window.addEventListener("resize", appHeight);
  appHeight();

  return (
    <div className="chazz-header" onWheel={handleOnWheel}>
      <div className={isPlaying ? "velo-out" : "velo-in"} onWheel={handleOnWheel}>
        <div className={isPlaying ? "simply-out" : "simply-in"}>
          <span className={isPlaying ? "nav-out" : "nav-in"}>
            <Nav
              isPlaying={isPlaying}
              AlertNavParent={AlertNavParent}
              height={navHeight}
              darkMode={window.innerWidth < 768}
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
