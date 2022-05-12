import { Link } from "react-router-dom";
import logo from "../../images/Techdepo.webp";

const Logo = () => {
  return (
    <Link className="header--logo-container" to="/">
      <img src={logo} alt="logo" className="header--logo" />
    </Link>
  );
};

export default Logo;
