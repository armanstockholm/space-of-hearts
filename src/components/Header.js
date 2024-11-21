import SOH from "../LogoSOH.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isHidden, setIsHidden] = useState(false); // Headerns synlighet
  const [lastScrollY, setLastScrollY] = useState(0); // För att spåra tidigare scrollposition

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else if (lastScrollY - currentScrollY > 10 || currentScrollY === 0) {
        setIsHidden(false);
      }
  
      setLastScrollY(currentScrollY);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Endast beroende av lastScrollY

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Mjuk skrollning
    });
  };

  return (
    <header className={`App-header ${isHidden ? "hidden" : ""}`}>
      <div>
        <Link to="/">
          <img src={SOH} alt="Logga" className="Logo" onClick={scrollToTop} />
        </Link>
      </div>

      <div className="HeadLine">Space of Hearts</div>
      <div className="LinksParent">
        <Link to="/" className="round-link" onClick={scrollToTop}>
          Home
        </Link>
        <Link to="/about" className="round-link" onClick={scrollToTop}>
          About
        </Link>
        <Link to="/contact" className="round-link" onClick={scrollToTop}>
          Contact
        </Link>
      </div>
    </header>
  );
}

export default Header;
