import { NavLink } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <figure className="header--logo">LOGO</figure>
      <NavLink className="header--link" to="/">
        Home
      </NavLink>
      <NavLink className="header--link" to="/products">
        Products
      </NavLink>
      <NavLink className="header--link" to="/categories">
        Categories
      </NavLink>
    </header>
  );
}

export default Header;
