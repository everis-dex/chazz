import Lottie from "lottie-react";
import React, { useState } from "react";

const supportedVideoTags: Array<string> = ["mp4", "webm", "ogg", "mov"];
const supportedImageTags: Array<string> = ["jpg", "jpeg", "gif", "png", "apng", "svg", "bmp"];

type Props = {
  src: string;
  style: { width: string; height?: string };
  alt: string;
  format?: string;
};

export const Media = ({ src, style, alt, format }: Props) => {
  const [lottie, setLottie] = useState<Object | null>(null);

  if (window.innerWidth > 1900 && format === "auto") style.height = "auto";

  const extension: string = src
    .substring(src.lastIndexOf(".") + 1)
    .toLowerCase()
    .replace("\r", "");

  if (extension === "json" && !lottie) {
    try {
      const url: URL = new URL(src);
      fetch(url).then(response => {
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
              width={style.width}
              height="auto"
              onError={error => console.error(error)}
              muted={true}
              loop
              autoPlay
              preload="auto"
              playsInline
              src={src}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-once="true"
              data-aos-duration="700"
            >
              Video not supported.
            </video>
          )}
          {supportedImageTags.includes(extension) && (
            <img
              style={style}
              src={src}
              alt={alt}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-once="true"
              data-aos-duration="700"
            />
          )}
          {extension === "json" && (
            <>{lottie ? <Lottie animationData={lottie} loop={true} autoplay={true} /> : <>Loading</>}</>
          )}
        </>
      )}
    </>
  );
};
