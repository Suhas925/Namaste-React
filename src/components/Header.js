import "../css/Header.css";
import { LOGO_URL } from "../utils/constants.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [logBtn, setLogBtn] = useState("Login");
  const handleButton = () => {
    logBtn === "Login" ? setLogBtn("Logout") : setLogBtn("Login");
  };

  useEffect(() => {
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="Link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="Link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="Link">
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <button onClick={handleButton} className="log-btn">
            {logBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
