import { Link, useLocation } from "react-router-dom";

import "../styles/navbar.scss";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav>
      <ul>
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
