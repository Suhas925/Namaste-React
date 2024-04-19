import {LOGO_URL} from "../utils/constants.js";
import {useState} from 'react';

const Header = () => {

  const [sign, setSign] = useState('Sign In');

  const handleButton = () => {
    sign === 'Sign In'
      ? setSign('Sign Up')
      : setSign('Sign In')
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Offers</li>
          <li>Sign In</li>
          <li>Cart</li>
          <button onClick={handleButton} className="Btn">{sign}</button>
        </ul>
      </div>
    </div>
  )
};
export default Header;