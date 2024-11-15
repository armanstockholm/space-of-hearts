import SOH from "../Logo2 SOH.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 400) {
      // Skrollar ner och är längre än 100px, dölj headern
      setIsHidden(true);
    } else {
      // Skrollar upp, visa headern
      setIsHidden(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Gör att skrollningen blir mjuk
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
      <Link to="/" className="round-link" onClick={scrollToTop} >
          Home
        </Link>
      <Link to="/about" className="round-link" onClick={scrollToTop} >
          About
        </Link>
      </div>

    </header>



   
  );
}

export default Header;
