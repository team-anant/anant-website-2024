import { Link, useLocation } from "react-router-dom";

import "../styles/navbar.scss";
import { useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  // console.log(location);

  const openHamBurger = () => {
    document.querySelector(".mobile-nav").classList.toggle("open");
    document.querySelector(".hamBurger").classList.toggle("open");
  };

  const closeMobileNav = () => {
    const mobileNav = document.querySelector(".mobile-nav");
    const hamBurger = document.querySelector(".hamBurger");
    mobileNav.classList.remove("open");
    hamBurger.classList.remove("open");
  };

  useEffect(() => {
    const mobileNav = document.querySelector(".mobile-nav");
    mobileNav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        closeMobileNav();
      }
    });

    return () => {
      mobileNav.removeEventListener("click", (e) => {
        if (e.target.tagName === "A") {
          closeMobileNav();
        }
      });
    };
  }, []);

  return (
    <nav>
      <ul className="desktop">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/subsystems" ? "active" : ""}>
          <Link to="/subsystems">Subsystems</Link>
        </li>
        <li className={location.pathname === "/events" ? "active" : ""}>
          <Link to="/events">Events</Link>
        </li>
        <li className={location.pathname === "/achievements" ? "active" : ""}>
          <Link to="/achievements">Achievements</Link>
        </li>
        <li className={location.pathname === "/alumni" ? "active" : ""}>
          <Link to="/alumni">Alumni</Link>
        </li>
        <li className={location.pathname === "/archives" ? "active" : ""}>
          <Link to="/archives">Archives</Link>
        </li>
        <li className={location.pathname === "/team" ? "active" : ""}>
          <Link to="/team">Team</Link>
        </li>
      </ul>
      <button className="hamBurger" onClick={openHamBurger}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line last"></div>
      </button>
      <ul className="mobile-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/subsystems">Subsystems</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/achievements">Achievements</Link>
        </li>
        <li>
          <Link to="/alumni">Alumni</Link>
        </li>
        <li>
          <Link to="/archives">Archives</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
      </ul>
    </nav>
  );
}
