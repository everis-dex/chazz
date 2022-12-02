export const ChazzSlide = ({ slideSettings }) => {
  const { imageUrl, title, description, width, height, top } = slideSettings;

  console.log(imageUrl);

  return (
    <>
      <div style={{ paddingTop: top }}>
        <img src={imageUrl} width={width} heigth={height} />
        <br />
      </div>
      <h2>{title}</h2>
      <h4>{description}</h4>
    </>
  );
};
