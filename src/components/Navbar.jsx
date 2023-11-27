import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";

function Navbar() {
  return (
    <nav className="navbar">
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
    </nav>
  );
}

export default Navbar;
