import { Link, useLocation } from "react-router-dom";

import "../styles/navbar.scss";

export default function Navbar() {
  const location = useLocation();
  console.log(location);

  return (
    <nav>
      <ul>
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
    </nav>
  );
}
