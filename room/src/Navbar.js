import "./Navbar.css";
import Nav from "./icons/Nav";
import Close from "./icons/Close";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const show = () => {
    setToggle(true);
  };

  const hide = () => {
    setToggle(false);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="Navbar">
      <div className="span" onClick={show}>
        <Nav />
      </div>

      <p>room</p>

      {(toggle || screenWidth > 450) && (
        <div>
          <ul className="list">
            <div className="close" onClick={hide}>
              <Close />
            </div>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
          <div className="back"></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
