import Lottie from "lottie-react";

const Media = ({ data, style = {}, id }) => {
  return (
    <>
      {data && (
        <>
          {data instanceof Blob ? (
            <video
              className={style}
              width="auto"
              height="auto"
              onError={(error) => console.error(error)}
              muted={true}
              loop={false}
              src={URL.createObjectURL(data)}
              type="video/mp4"
            >
              Video not supported.
            </video>
          ) : (
            <>
              {typeof data === "object" ? (
                <Lottie
                  id={id}
                  className={style}
                  animationData={data}
                  loop={true}
                  autoplay={true}
                />
              ) : (
                <img id={id} className={style} src={data} alt="" />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Media;
