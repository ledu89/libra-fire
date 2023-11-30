function SubFooter() {
  return (
    <div className="sub-footer">
      <div className="sub-footer-container">
        <p>
          Copyright © {new Date().getFullYear()} Alle rechten voorbehouden. Van
          Wauwe - BE 415.527.412
        </p>
        <div className="sub-footer-links">
          <a href="#">Disclaimer</a>
          <a href="#">Levervoorwaarden</a>
          <a href="#">Algemene voorwaarden</a>
          <a href="#">Clubvoorwaarden</a>
          <a href="#">Vacatures</a>
        </div>
      </div>
    </div>
  );
}

export default SubFooter;
