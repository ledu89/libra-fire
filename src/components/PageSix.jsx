function PageSix() {
  return (
    <div className="page-six-section">
      <img id="logo-big" src="../assets/logo-big.png" alt="logo" />
      <h2>Bezoek één van onze showrooms</h2>
      <div className="page-six-container">
        <div className="page-six-item">
          <h3>Deurne (Antwerpen)</h3>
          <div className="page-six-info-container">
            <img src="../assets/pin-location.svg" alt="pin" />
            <p>Oude Bosuilbaan 43, 2100 Deurne</p>
          </div>

          <div className="page-six-info-container">
            <img src="../assets/phone.svg" alt="pin" />
            <p>03/326 75 70</p>
          </div>
          <div className="page-six-info-container">
            <img src="../assets/email.svg" alt="pin" />
            <p>verkoop@vanwauwe.com</p>
          </div>
          <div className="page-six-info-container">
            <div className="more-details">
              <div className="page-six-info-container">
                <img src="../assets/time.svg" alt="pin" />
                <h4>Maandag - Vrijdag</h4>
              </div>
              <div id="details">
                <p>
                  van 7u tot <br />
                  8u Op afspraak via nummer <span>03 360 79 99</span>
                </p>
                <h4>Maandag - Vrijdag</h4>
                <p>Van 8u tot 17u</p>
                <h4>Woensdag - Donderdag & Vrijdag</h4>
                <p>
                  van 17u tot 18u op <br />
                  Op afspraak via nummer <span>03 360 79 99</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="page-six-item">
          <h3>Lubbeek (Leuven)</h3>
          <div className="page-six-info-container">
            <img src="../assets/pin-location.svg" alt="pin" />
            <p>Staatsbaan 4E, 3210 Lubbeek</p>
          </div>

          <div className="page-six-info-container">
            <img src="../assets/phone.svg" alt="pin" />
            <p>016/62 09 01</p>
          </div>
          <div className="page-six-info-container">
            <img src="../assets/email.svg" alt="pin" />
            <p>verkoop@vanwauwe.com</p>
          </div>
          <div className="page-six-info-container">
            <div className="more-details">
              <div className="page-six-info-container">
                <img src="../assets/time.svg" alt="pin" />
                <h4>Maandag - Vrijdag</h4>
              </div>
              <div id="details">
                <p>
                  van 7u tot <br />
                  8u Op afspraak via nummer <span>016/62 09 01</span>
                </p>
                <h4>Maandag - Vrijdag</h4>
                <p>Van 8u tot 17u</p>
                <h4>Woensdag - Donderdag & Vrijdag</h4>
                <p>
                  van 17u tot 18u op <br />
                  Op afspraak via nummer <span>016/62 09 01</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="page-six-item">
          <h3>Kontich</h3>
          <div className="page-six-info-container">
            <img src="../assets/pin-location.svg" alt="pin" />
            <p>Prins Boudewijnlaan 17 - unit 1, 2550 Kontich</p>
          </div>

          <div className="page-six-info-container">
            <img src="../assets/phone.svg" alt="pin" />
            <p>123/4567 890</p>
          </div>
          <div className="page-six-info-container">
            <img src="../assets/email.svg" alt="pin" />
            <p>verkoop@vanwauwe.com</p>
          </div>
          <div className="page-six-info-container">
            <div className="more-details">
              <div className="page-six-info-container">
                <img src="../assets/time.svg" alt="pin" />
                <h4>Maandag - Vrijdag</h4>
              </div>
              <div id="details">
                <p>van 8u tot 12u30 van 13u tot 16u</p>
                <h4>Zaterdag en zondag</h4>
                <p>gesloten</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="btn-primary">Onze showrooms</button>
    </div>
  );
}

export default PageSix;
