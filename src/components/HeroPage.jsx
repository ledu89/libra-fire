import { CiShoppingCart } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

function HeroPage() {
  return (
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
            <img src="../assets/window.png" alt="window" />
          </div>
          <div className="hero-right-text">
            <h3 id="hero-h3">Dak</h3>
            <h3>Lichtkoepels</h3>
            <p>
              De renovatie van bestaande koepels of het plaatsen van een nieuwe
              koepel ? Een traditionele…
            </p>

            <a href="#">
              <span>Klik hier voor meer informatie</span>
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
