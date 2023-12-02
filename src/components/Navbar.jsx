import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import PositionedMenu from "./PositionedMenu";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="main-logo">
          <img src="../assets/Logo.png" alt="logo" />
        </div>
        <div className="navbar-links-container">
          <a href="#">Asortimen</a>
          <a href="#">Vestigingen</a>
          <a href="#">Installateursnetwerk</a>
        </div>
        <div className="navbar-user-container">
          <CiSearch id="navbar-icon" />
          <CiShoppingCart id="navbar-icon" />
          <CiUser id="navbar-icon" />
        </div>
        <div className="contact-btn-container">
          <button className="contact-btn">Maak een afspraak</button>
        </div>
        <div id="hamburger-menu">
          <PositionedMenu />
        </div>
      </div>
      <div className="sidebar">
        {" "}
        <a href="#">
          Assortiment{" "}
          <span>
            <FaArrowRight />
          </span>
        </a>
        <a href="#">
          Up-To-Date{" "}
          <span>
            <FaArrowRight />
          </span>
        </a>
        <a href="#">
          Wie zijn wij{" "}
          <span>
            <FaArrowRight />
          </span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
