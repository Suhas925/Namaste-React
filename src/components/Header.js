import {LOGO_URL} from "../utils/constants.js";
import {useState, useEffect} from 'react';

const Header = () => {
  console.log("Header Rendered");

  const [sign, setSign] = useState('Sign In');
  // Never create the local state variables and never use 'useState()' hook outside of the component.
  // useState() is used to create local state variables inside the functional components.
  // Don't use useState() hook inside the 'if' block as well as 'for' loop.
  // Don't create the state variables inside a function.

  // Always use the 'useState()' hook inside a component.
  // Best practice is to use it at the top level inside the component.

  

  // If there is no dependency array, useEffect will be called everytime the component is rendered.
  // If the dependency array is empty [], useEffect will be called at the initial render only.
  useEffect(() => {
  console.log("useEffect called");
  },
  [sign]);
  // When we put something inside the dependency array, useEffect will be called only when the dependency changes.
  // If the dependency array is [sign], then useEffect is called everytime the 'sign' is updated.

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