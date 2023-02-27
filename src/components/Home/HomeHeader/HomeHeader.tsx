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

  // Nav / burger menu states
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  // Entrance animation states
  const [titleLeft, setTitleLeft] = useState<number>(100);
  const [navHeight, setNavHeight] = useState<number>(windowWidth < 1200 ? 11 : 25);
  const [animationComplete, setAnimationComplete] = useState<boolean>(windowWidth < 1200);

  // References
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlRef = useRef<HTMLDivElement>(null);

  // ---- Methods

  window.onresize = () => {
    setWindowWidth(window.innerWidth);
    // If device is mobile, animation is already completed (disabled)
    if (windowWidth < 1200) setAnimationComplete(true);
  };

  function switchPlayPause(): void {
    if (!animationComplete || !videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setControlText(controlTextOptions.play);
      setIsNavVisible(!isNavVisible);
    } else {
      videoRef.current.play();
      setControlText(controlTextOptions.stop);
      setTimeout(() => setIsNavVisible(!isNavVisible), 1000);
    }
    setIsPlaying(!isPlaying);
  }

  // Handler function for children components
  function pauseVideo(): void {
    setIsPlaying(false);
    setControlText(controlTextOptions.play);
  }

  // Event functions

  const handleOnWheel: React.WheelEventHandler<HTMLDivElement> = e => {
    if (!isPlaying) {
      if (e.deltaY > 0) {
        if (navHeight > 10) setNavHeight(navHeight - 2);
        else setNavHeight(10);

        if (titleLeft > 0) setTitleLeft(titleLeft - 8 >= 0 ? titleLeft - 8 : 0);
        else setTitleLeft(0);

        if (titleLeft === 0 && navHeight === 10) {
          setAnimationComplete(true);
          setTimeout(() => document.body.classList.remove("no-scroll"), 1000);
        }
      } else {
        setAnimationComplete(false);
        if (navHeight < 25) setNavHeight(navHeight + 2 > 25 ? 25 : navHeight + 2);
        else setNavHeight(25);

        if (titleLeft < 100) setTitleLeft(titleLeft + 8 <= 100 ? titleLeft + 8 : 100);
        else setTitleLeft(100);

        if (titleLeft === 100 && navHeight === 25) {
          document.body.classList.add("no-scroll");
        }
        //if (!animationComplete)
      }
    }
  };

  // ---- useEffects

  useEffect(() => {
    if (!isPlaying && !isNavVisible) setIsNavVisible(true);
  }, [isNavVisible, isPlaying, setIsNavVisible]);

  // Make the Play / Stop reel text follow cursor
  useEffect(() => {
    function handleMouseMove(e: MouseEvent): void {
      if (!controlRef.current || e.clientY < 90 || e.clientX > window.innerWidth - 120) return;
      // Desktop format
      if (window.innerWidth >= 1024) {
        controlRef.current.style.top = e.pageY - 10 + "px";
        controlRef.current.style.left = e.pageX - 50 + "px";
        controlRef.current.style.opacity = "1";
      }
      // Mobile format
      else {
        controlRef.current.style.top = window.innerHeight - 40 + "px";
        controlRef.current.style.left = "5%";
      }
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
              displayBurgerMenu={setIsBurgerMenuOpen}
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
          {/* Mobile format for Play / Stop reel */}
          {!isBurgerMenuOpen && (
            <div className="player-video-mobile-switcher">
              <div className="player-video">
                <PlayerControler />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Desktop format for Play / Stop reel */}
      {animationComplete && (
        <div className="player-video-desktop-switcher">
          <div className="player-video" ref={controlRef}>
            <PlayerControler />
          </div>
        </div>
      )}
      <VideoHeader isPlaying={isPlaying} pauseVideo={pauseVideo} ref={videoRef} />
      <AllowCookies />
    </div>
  );
};
