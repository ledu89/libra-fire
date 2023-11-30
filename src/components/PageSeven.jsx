import { FaArrowRight } from "react-icons/fa";

function PageSeven() {
  return (
    <div className="page-seven">
      <h2>Nieuws</h2>
      <div className="page-seven-items-container">
        <div className="page-seven-item">
          <img src="../assets/nieuws1.png" alt="nieuws1" />
          <h3>Opleiding Tridex Deurne</h3>
          <span id="event">EVENEMENTEN</span>
          <span>21/01/2019</span>
          <p>
            Op donderdag 18 november konden onze professionele klanten een
            opleiding volgen…
          </p>
          <a href="#">
            Klik hier voor meer informatie
            <FaArrowRight />
          </a>
        </div>
        <div className="page-seven-item">
          <img src="../assets/nieuws2.png" alt="nieuws2" />
          <h3>Vernieuwde showroom Deurne</h3>
          <span id="event">EVENEMENTEN</span>
          <span>21/01/2019</span>
          <p>
            Opening van onze vernieuwde showroom in Deurne. En net als wij
            vonden jullie het - als we de vele…
          </p>
          <a href="#">
            Klik hier voor meer informatie
            <FaArrowRight />
          </a>
        </div>
        <div className="page-seven-item">
          <img src="../assets/nieuws3.png" alt="nieuws3" />
          <h3>Vernieuwde showroom Lubbeek</h3>
          <span id="event">EVENEMENTEN</span>
          <span>21/01/2019</span>
          <p>
            Opening van onze vernieuwde showroom in Lubbeek. En net als wij
            vonden jullie het - als we…
          </p>
          <a href="#">
            Klik hier voor meer informatie
            <FaArrowRight />
          </a>
        </div>
      </div>
      <button className="btn-secondary">Nieuws</button>
    </div>
  );
}

export default PageSeven;
