import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
const content = [
  {
    id: 1,
    image: "../assets/item1-img.png",
    title: "Robby Stordeur - Toyota Motor Europe",
    text: "“Toyota kiest milieubewust voor banken uit recycling materiaal. Wij zijn zeer tevreden van...",
  },
  {
    id: 2,
    image: "../assets/item2-img.png",
    title: "Steve Drechsel zaakvoerder van SD Dakwerken",
    text: "Robby Stordeur - Toyota Motor Europe",
  },
  {
    id: 3,
    image: "../assets/item3-img.png",
    title: "Bob Lauman - zaakvoerder Dakrubbercentrale",
    text: "Snelheid, wendbaarheid en de beste marktprijzen, dat zijn naar mijn aanvoelen de belangrijkste troeven van Van Wauwe…",
  },
];
function SecondCarouselPage() {
  const [items, setItems] = useState(content);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = items.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, items]);
  return (
    <div className="second-carousel-section">
      <div className="carousel-overlay">
        <h2>Tevreden klanten vertellen</h2>
        <div className="carousel-items">
          {items.map((item, i) => {
            let position = "previous";
            if (i === index) {
              position = "active";
            }
            if (i === (index - 1 + items.length) % items.length) {
              position = "next";
            }
            if (i === (index + 1) % items.length) {
              position = "previous";
            }
            const { id, image, title, text } = item;
            return (
              <div className={`item ${position}`} key={id}>
                <img src={image} alt="img1" />
                <div className="item-text-container">
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href="#">
                    Klik hier voor meer informatie
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="arrows-container">
          <img
            src="../assets/left-arrow-circle.png"
            alt="arrow"
            onClick={() => {
              setIndex(index - 1);
            }}
          />
          <img
            src="../assets/right-arrow-circle.png"
            alt="arrow"
            onClick={() => {
              setIndex(index + 1);
            }}
          />
        </div>
        <button className="btn-primary">Getuigenissen klanten</button>
      </div>
    </div>
  );
}

export default SecondCarouselPage;
