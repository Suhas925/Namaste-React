import { LOGO_URL } from "../utils/constants.js";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { BsCart } from "react-icons/bs";

import {useSelector} from "react-redux";

const Header = () => {
  const [logBtn, setLogBtn] = useState("Login");
  const handleButton = () => {
    logBtn === "Login" ? setLogBtn("Logout") : setLogBtn("Login");
  };

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  console.log("context data:", loggedInUser);

  // Subscribing to the Store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

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
          <li className="relative">
            <Link className="flex hover:text-orange-500" to="/cart">
              <BsCart className="text-3xl"/>
              <span className="absolute bottom-[5px] left-3 font-bold text-base">
                {cartItems.length}
              </span>
              <p className="ml-1">Cart</p>
            </Link>
          </li>
          <button
            onClick={handleButton}
            className="text-white bg-green-500 font-bold px-4 py-1 rounded-2xl border-2 border-solid border-green-500 hover:text-green-500 hover:bg-white w-24"
          >
            {logBtn}
          </button>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
