import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../images/Techdepo.webp";
import MenuLink from "./elements/MenuLink";

function Header() {
  const menu = [
    {
      id: 1,
      name: "Home",
      to: "/",
    },
    {
      id: 2,
      name: "Categories",
      to: "/categories",
    },
  ];

  return (
    <header>
      <Link className="header--logo-container" to="/">
        <img src={logo} alt="logo" className="header--logo" />
      </Link>

      {menu.map((m) => (
        <MenuLink {...m} />
      ))}
    </header>
  );
}

export default Header;
