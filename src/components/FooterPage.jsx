function FooterPage() {
  return (
    <div className="footer-page">
      <img id="footer-logo" src="../assets/logo-footer.png" />
      <div className="footer-content">
        <div className="assortiment">
          <h3>Assortiment</h3>
          <p>Dak</p>
          <p>Isolatie</p>
          <p>Plaat & folie</p>
          <p>Leiding</p>
          <p>Bekleding</p>
          <p>Tuin</p>
          <p>Diverse</p>
        </div>
        <div className="contact">
          <h3>Bezoek ons</h3>
          <div className="location">
            <img src="../assets/pin-white.png" alt="pin" />
            <div className="location-details">
              <p className="city">Deurne (Antwerpen)</p>
              <p>Oude Bosuilbaan 43, 2100 Deurne</p>
            </div>
          </div>
          <div className="location">
            <img src="../assets/pin-white.png" alt="pin" />
            <div className="location-details">
              <p className="city">Deurne (Antwerpen)</p>
              <p>Oude Bosuilbaan 43, 2100 Deurne</p>
            </div>
          </div>
          <div className="location">
            <img src="../assets/pin-white.png" alt="pin" />
            <div className="location-details">
              <p className="city">Deurne (Antwerpen)</p>
              <p>Oude Bosuilbaan 43, 2100 Deurne</p>
            </div>
          </div>
          <span>Volg ons</span>
          <div className="social-container">
            <img src="../assets/facebook.png" alt="fb" />
            <img src="../assets/linkedin.png" alt="linkedin" />
            <img src="../assets/youtube.png" alt="youtube" />
            <img src="../assets/instagram.png" alt="instagram" />
          </div>
        </div>
        <div className="footer-blocks">
          <div className="footer-block">
            <h3>Installateur</h3>
            <p>Graag installateur worden?</p>
            <img src="../assets/footer-img1.png" alt="img1" />
            <button className="btn-secondary">Meer informatie</button>
          </div>
          <div className="footer-block">
            <h3>Werken bij?</h3>
            <p>Van Wauwe werft aan…</p>
            <img src="../assets/footer-img2.png" alt="img1" />
            <button className="btn-secondary">Meer informatie</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
