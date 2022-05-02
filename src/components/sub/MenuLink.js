import { NavLink } from "react-router-dom";

function MenuLink({ name, to }) {
  return (
    <NavLink className="header--link" to={to}>
      <p>{name}</p>
    </NavLink>
  );
}

export default MenuLink;
