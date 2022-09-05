import "./Home.css";

import { useState } from "react";
import Arrow from "./icons/Arrow";
import Right from "./icons/Right";
import Left from "./icons/Left";
import dark from "./images/image-about-dark.jpg";
import light from "./images/image-about-light.jpg";

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
              <Left />
            </button>

            <button className="Next" onClick={Next}>
              <Right />
            </button>
          </div>
        </div>
      </div>

      <div className="bottomDiv">
        <div className="firstBtm">
          <img src={dark} alt="" />
        </div>

        <div className="secondBtm">
          <h1>About our furniture</h1>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>

        <div className="thirdBtm">
          <img src={light} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
