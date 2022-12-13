import { useState } from "react";
import Lottie from "lottie-react";

const supportedVideoTags = ["mp4", "webm", "ogg"];
const supportedImageTags = ["jpg", "jpeg", "gif", "png", "apng", "svg", "bmp"];



export const Media = ({ src, style = {}, alt }) => {
  const [lottie, setLottie] = useState(null);
  const { width, height } = style;

  const extension = src
    .substring(src.lastIndexOf(".") + 1)
    .toLowerCase()
    .replace("\r", "");

  if (extension === "json" && !lottie) {
    try {
      fetch(src).then(response => {
        response.json().then(json => setLottie(json));
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {src && (
        <>
          {supportedVideoTags.includes(extension) && (
            <video
              className={style}
              width={width}
              height={height}
              controls
              onError={error => console.error(error)}
              muted={true}
              loop={false}
              src={src}
              type="video/mp4"
            >
              Video not supported.
            </video>
          )}
          {supportedImageTags.includes(extension) && <img className={style} src={src} alt={alt} />}
          {extension === "json" && (
            <>{lottie ? <Lottie animationData={lottie} loop={true} autoplay={true} /> : <>Loading</>}</>
          )}
        </>
      )}
    </>
  );
};