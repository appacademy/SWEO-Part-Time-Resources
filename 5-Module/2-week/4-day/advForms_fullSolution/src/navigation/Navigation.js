import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <div className="nav-header">
        <img className="logo" src={logo} alt="logo" />
        <h1>Survey Tool</h1>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/sample">Sample Survey</NavLink>
        </li>
        <li>
          <NavLink to="/spi">Sensory Preferences</NavLink>
        </li>
        <li>
          <NavLink to="/likert">Likert Survey</NavLink>
        </li>
        <li>
          <NavLink to="/report">Report</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
