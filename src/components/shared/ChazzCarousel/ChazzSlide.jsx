export const ChazzSlide = ({ slideSettings }) => {
  console.log(slideSettings);
  const { image, title, subtitle, width, height, top } = slideSettings;

  return (
    <>
      <div style={{ paddingTop: top }}>
        <img src={image} width={width} heigth={height} />
        <br />
      </div>
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
    </>
  );
};
