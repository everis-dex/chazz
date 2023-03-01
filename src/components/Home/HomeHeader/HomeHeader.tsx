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
  const [isMouseInside, setIsMouseInside] = useState<boolean>(false);

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
  const handlerNavEnter = () => {
    if (!isPlaying) setIsMouseInside(true);
  };

  const handlerNavLeave = () => {
    setIsMouseInside(false);
  };
  // Event functions

  const handleOnWheel: React.WheelEventHandler<HTMLDivElement> = e => {
    if (!isPlaying && windowWidth > 1200) {
      if (e.deltaY > 0) {
        setNavHeight(Math.max(navHeight - 2, 10));
        setTitleLeft(Math.max(titleLeft - 8, 0));

        if (titleLeft === 0 && navHeight === 10) {
          setAnimationComplete(true);
          setTimeout(() => document.body.classList.remove("no-scroll"), 1000);
        }
      } else {
        setAnimationComplete(false);
        setNavHeight(Math.min(navHeight + 2, 25));
        setTitleLeft(Math.min(titleLeft + 8, 100));

        if (titleLeft === 100 && navHeight === 25) {
          document.body.classList.add("no-scroll");
        }
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
      if (!controlRef.current) return;
      // Desktop format
      if (window.innerWidth >= 1024) {
        // Get page height to adjust cursor limits to navbar height - 11vh
        const height = !isPlaying ? document.documentElement.clientHeight * 0.11 : 0;
        controlRef.current.style.top = Math.max(e.pageY - 10, height) + "px";
        controlRef.current.style.left = Math.min(e.pageX - 50, window.innerWidth - 120) + "px";
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
  }, [isPlaying]);

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
          <span
            className={isPlaying ? "nav-out" : "nav-in"}
            onMouseEnter={handlerNavEnter}
            onMouseLeave={handlerNavLeave}
          >
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
      {animationComplete && !isMouseInside && (
        <div className="player-video-desktop-switcher">
          <div className="player-video" ref={controlRef}>
            <PlayerControler />
          </div>
        </div>
      )}

      {/* For iPhone users, display image of first frame as video doesn't show it in first place */}
      {!isPlaying && <img src="/assets/first_frame.jpg" alt="" className="grayscale" />}

      <VideoHeader isPlaying={isPlaying} pauseVideo={pauseVideo} ref={videoRef} />
      <AllowCookies />
    </div>
  );
};
