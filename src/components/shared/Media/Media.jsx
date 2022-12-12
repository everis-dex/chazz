import Lottie from "lottie-react";
import Video from "../../../../Video/Video";

const Media = ({ data, style = {}, id }) => {
  return (
    <>
      {data && (
        <>
          {data instanceof Blob ? (
            <Video id={id} style={style} data={data} />
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
