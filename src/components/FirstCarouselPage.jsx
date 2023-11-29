import { Carousel } from "antd";

const photos = [
  "../assets/image1.png",
  "../assets/image2.png",
  "../assets/image3.png",
];

function FirstCarouselPage() {
  return (
    <>
      <div className="big-blue">
        <div className="big-blue-top">
          <img src="../assets/desk.png" alt="desk" />
          <div className="blue-top-text">
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
            <button className="btn-secondary">Meer lezen</button>{" "}
          </div>
        </div>
        <div className="carousel-container">
          <img src="../assets/image1.png" alt="slide1" />

          <img src="../assets/image2.png" className="active" alt="slide1" />

          <img src="../assets/image3.png" alt="slide1" className="next" />
        </div>
        <div className="carousel-btn-container">
          <img src="../assets/Group_34.png" alt="left" />
          <img src="../assets/Group_35.png" alt="left" />
        </div>
      </div>
    </>

    // <div className="carousel-page">
    //   <div className="big-blue">
    //     <div className="carousel-container-top">
    //       <img src="../assets/desk.png" />
    //       <div className="carousel-top-text">
    //         <h2>Een ruime ervaring</h2>
    //         <p>
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //           eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
    //           morbi non arcu risus. Pellentesque diam volutpat commodo sed
    //           egestas.
    //           <br />
    //           <br />
    //           Consectetur lorem donec massa sapien faucibus et molestie. Neque
    //           convallis a cras semper auctor neque vitae tempus quam. Arcu
    //           bibendum at varius vel pharetra vel turpis nunc. Aliquam sem
    //         </p>
    //         <br />
    //         <button className="btn-secondary">Meer lezen</button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="carousel-container">
    //     <div className="image-container">
    //       <img src="../assets/image1.png" alt="slide1" />
    //     </div>
    //     <div className="image-container">
    //       <img src="../assets/image2.png" className="active" alt="slide1" />
    //     </div>
    //     <div className="image-container">
    //       <img src="../assets/image3.png" alt="slide1" className="next" />
    //     </div>
    //   </div>
    //   <div className="carousel-btn-container">
    //     <img src="../assets/Group_34.png" alt="left" />
    //     <img src="../assets/Group_35.png" alt="left" />
    //   </div>
    // </div>
  );
}

export default FirstCarouselPage;
