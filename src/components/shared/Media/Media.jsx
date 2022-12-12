// import Lottie from "lottie-react";

const supportedVideoTags = ["mp4", "webm", "ogg"];
const supportedImageTags = ["jpg", "jpeg", "gif", "png", "apng", "svg", "bmp"];

const Media = ({ data, style = {}, alt }) => {
  const { width, height } = style;
  const extension = data
    .substring(data.lastIndexOf(".") + 1)
    .toLowerCase()
    .replace("\r", "");

  return (
    <>
      {data && (
        <>
          {supportedVideoTags.includes(extension) && (
            <video
              className={style}
              width={width}
              height={height}
              controls
              onError={(error) => console.error(error)}
              muted={true}
              loop={false}
              src={data}
              type="video/mp4"
            >
              Video not supported.
            </video>
          )}
          {supportedImageTags.includes(extension) && (
            <img className={style} src={data} alt={alt} />
          )}
          {extension === "json" && (
            <></>
            // <Lottie
            //   className={style}
            //   animationData={data}
            //   loop={true}
            //   autoplay={true}
            // />
          )}
        </>
      )}
    </>
  );
};

export default Media;
