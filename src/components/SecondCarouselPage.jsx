import { FaArrowRight } from "react-icons/fa";

function SecondCarouselPage() {
  return (
    <div className="second-carousel-section">
      <div className="carousel-overlay">
        <h2>Tevreden klanten vertellen</h2>
        <div className="carousel-items">
          <div className="item">
            <img src="../assets/item1-img.png" alt="item1" />
            <div className="item-text-container">
              <h3>Robby Stordeur - Toyota Motor Europe</h3>
              <p>
                “Toyota kiest milieubewust voor banken uit <br /> recycling
                materiaal. Wij zijn zeer tevreden van...
              </p>

              <a href="#">
                Klik hier voor meer informatie
                <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="item">
            <img src="../assets/item2-img.png" alt="item1" />
            <div className="item-text-container">
              <h3>Steve Drechsel zaakvoerder van SD Dakwerken</h3>
              <p>
                “In een van mijn gesprekken met Chris Leurs, de
                projectverantwoordelijke Dak & Gevel bij Van Wauwe…
              </p>

              <a href="#">
                Klik hier voor meer informatie
                <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="item">
            <img src="../assets/item3-img.png" alt="item1" />
            <div className="item-text-container">
              <h3>Bob Lauman - zaakvoerder Dakrubbercentrale</h3>
              <p>
                Snelheid, wendbaarheid en de beste marktprijzen, dat zijn naar
                mijn aanvoelen de belangrijkste troeven van Van Wauwe…
              </p>

              <a href="#">
                Klik hier voor meer informatie
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="arrows-container">
          <img src="../assets/left-arrow-circle.png" alt="arrow" />
          <img src="../assets/right-arrow-circle.png" alt="arrow" />
        </div>
        <button className="btn-primary">Getuigenissen klanten</button>
      </div>
    </div>
    // <div className="second-carousel">
    //   <div className="carousel-overlay">
    //     {" "}
    //     <div className="second-carousel-content">
    //       <h2>Tevreden klanten vertellen</h2>
    //       <div className="carousel-item-container">
    //         <div className="carousel-item"></div>
    //         <div className="carousel-item"></div>
    //         <div className="carousel-item"></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default SecondCarouselPage;
