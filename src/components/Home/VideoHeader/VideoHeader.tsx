import React, { useRef } from "react";
import "../VideoHeader/VideoHeader.style.scss";
type Props = {
  isPlaying : boolean,
  setIsPlaying : (a : boolean) => void
}

export const VideoHeader = ({isPlaying , setIsPlaying} : Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current && videoRef.current.play();
  };
  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current && videoRef.current.pause();
  };


  return (
    <>
        <div className="player-video">
          {!isPlaying 
          ? <div className="play-icon" onClick={handlePlay}></div>
          : <div className="stop-icon" onClick={handlePause}></div>}
  
          {!isPlaying ? <span onClick={handlePlay}>Play reel</span> : <span onClick={handlePause}>Stop reel</span> }
        </div>
      
      <video className="video-header" ref={videoRef} src="https://file-examples.com/storage/feee4cd0b563b359f963e88/2017/04/file_example_MP4_480_1_5MG.mp4">
      </video>
      
    </>
  );
};
