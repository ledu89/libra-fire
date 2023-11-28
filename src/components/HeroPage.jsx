import { CiShoppingCart } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

function HeroPage() {
  return (
    <>
      <div className="hero">
        <div className="hero-overlay">
          <div className="hero-text">
            <h2>Dé specialist…</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore <br />{" "}
              magna aliqua.
            </p>
            <button className="btn-primary">
              <CiShoppingCart />

              <span>Winkel</span>
            </button>
            <div className="hero-arrows-container">
              <img src="../assets/Group_34.png" alt="left" />
              <img src="../assets/Group_35.png" alt="left" />
            </div>
          </div>
          <div className="hero-right">
            <div>
              <img id="swirl-hero" src="../assets/swirl.svg" alt="swirl" />
              <img id="window-hero" src="../assets/window.png" alt="window" />
            </div>
            <div className="hero-right-text">
              <h3 id="hero-h3">Dak</h3>
              <h3>Lichtkoepels</h3>
              <p>
                De renovatie van bestaande koepels of het plaatsen van een
                nieuwe koepel ? Een traditionele…
              </p>

              <a href="#">
                <span>Klik hier voor meer informatie</span>
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-footer">
          <div className="hero-footer-component">
            <div className="footer-icon-container">
              <img src="../assets/Group_76.png" alt="icon" />
            </div>
            <div className="hero-footer-content">
              <a href="#">
                Assortiment <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="hero-footer-component">
            <div className="footer-icon-container">
              <img src="../assets/testimonial.png" alt="icon" />
            </div>
            <div className="hero-footer-content">
              <a href="#">
                Getuigenissen <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="hero-footer-component">
            <div className="footer-icon-container">
              <img src="../assets/loop-arrow.png" alt="icon" />
            </div>
            <div className="hero-footer-content">
              <a href="#">
                Up-To-Date <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="hero-footer-component">
            <div className="footer-icon-container">
              <img src="../assets/customer-support.png" alt="icon" />
            </div>
            <div className="hero-footer-content">
              <a href="#">
                Services <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="hero-footer-component">
            <div className="footer-icon-container">
              <img src="../assets/logo-small.png" alt="icon" />
            </div>
            <div className="hero-footer-content">
              <a href="#">
                Wie zijn wij <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-extended">
          <h2>Een uitgebreid gamma</h2>
          <div className="hero-extended-paragraph-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
              morbi non arcu risus. Pellentesque diam volutpat commodo sed
              egestas.
            </p>
            <p>
              Consectetur lorem donec massa sapien faucibus et molestie. Neque
              convallis a cras semper auctor neque vitae tempus quam. Arcu
              bibendum at varius vel pharetra vel turpis nunc. Aliquam sem et
              tortor consequat.
            </p>
            <button className="btn-primary">Mehr lezen</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPage;
