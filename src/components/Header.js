import { LOGO_URL } from "../utils/constants.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  const [logBtn, setLogBtn] = useState("Login");
  const handleButton = () => {
    logBtn === "Login" ? setLogBtn("Logout") : setLogBtn("Login");
  };

  const onlineStatus = useOnlineStatus();

  useEffect(() => {}, []);

  return (
    <div className="flex justify-between items-center shadow-lg mb-4">
      <div className="px-4">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center px-8 text-lg">
        <ul className="flex gap-8 items-center m-4">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
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
          <li>
            <Link to="/grocery" className="Link">
              Grocery
            </Link>
          </li>
          <li>Cart</li>
          <button
            onClick={handleButton}
            className="text-white bg-green-500 font-bold px-4 py-1 rounded-2xl border-2 border-solid border-green-500 hover:text-green-500 hover:bg-white w-24"
          >
            {logBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
