import brand from "../assets/brand.png";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <header className="navbar">
        <div className="left">
          <img src={brand} alt="" />
        </div>
        <div className="right">
          <NavLink to="/" className="nav-link">
            home
          </NavLink>
          <NavLink to="/product" className="nav-link">
            product
          </NavLink>
          <NavLink to="/About" className="nav-link">
            about
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            contact
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Header;
