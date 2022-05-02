import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../images/Techdepo.webp";
import MenuLink from "./sub/MenuLink";

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
    {
      id: 3,
      name: "Register",
      to: "/register",
    },
    {
      id: 4,
      name: "Login",
      to: "/login",
    },
  ];

  return (
    <header>
      <Link className="header--logo-container" to="/">
        <img src={logo} alt="logo" className="header--logo" />
      </Link>

      {menu.map((m) => (
        <MenuLink {...m} key={m.id} />
      ))}
    </header>
  );
}

export default Header;
