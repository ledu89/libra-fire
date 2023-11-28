import { Carousel } from "antd";
const images = ["image1.png", "image2.png", "image3.png"];
const contentStyle = {
  height: "400px",

  textAlign: "center",
  background: "#364d79",
};
function FirstCarouselPage() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className="carousel-page">
      <div className="big-blue">
        <div className="carousel-container-top">
          <img src="../assets/desk.png" />
          <div className="carousel-top-text">
            <h2>Een ruime ervaring</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
              morbi non arcu risus. Pellentesque diam volutpat commodo sed
              egestas.
              <br />
              <br />
              Consectetur lorem donec massa sapien faucibus et molestie. Neque
              convallis a cras semper auctor neque vitae tempus quam. Arcu
              bibendum at varius vel pharetra vel turpis nunc. Aliquam sem
            </p>
            <br />
            <button className="btn-secondary">Meer lezen</button>
          </div>
        </div>
      </div>
      <div className="carousel-container">
        {images.map((image, i) => (
          <div className="image-container" id={i}>
            <img src={`../assets/${image}`} alt={i} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FirstCarouselPage;
