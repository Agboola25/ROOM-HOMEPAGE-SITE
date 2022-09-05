import "./Home.css";

import { useState } from "react";
import Arrow from "./icons/Arrow";

const Home = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previous = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const Next = () => {
    const isNextSlide = currentIndex === slides.length - 1;
    const newIndex = isNextSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };
  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    height: "100%",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="mainDiv">
      <div className="topdiv">
        <div className="TopDivImg">
          <div style={slideStyles}></div>
        </div>

        <div className="TopDivShop">
          <div className="shopTop">
            <div className="shopTopText">
              <h1>{slides[currentIndex].header}</h1>
              <p>{slides[currentIndex].desc}</p>
            </div>

            <div className="shopNow">
              <p>SHOP NOW</p>
              <Arrow />
            </div>
          </div>

          <div className="shopBtn">
            <button className="previous" onClick={previous}>
              previous
            </button>

            <button className="Next" onClick={Next}>
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
