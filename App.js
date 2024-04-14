import React from "react";
import ReactDOM from "react-dom/client";


/**
 * "Header" Component
 *  -> Logo
 *  -> Nav Items
 *    -> Home, AboutUs, Cart
 * 
 * "Body" Component
 *  -> Search Bar
 *  -> RestaurantContainer
 *    -> "RestaurantCard" Component
 * 
 * "RestaurantCard" Component
 *  -> FoodImage
 *  -> Info
 *    ->Name of the Reataurant, Cuisine, Ratings, Stars, Delivery Time etc..
 * 
 * "Footer" Component
 *  -> CopyRights
 *  -> Links
 *  -> Contact
 *  -> Address
 **/


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Offers</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};

const styleCard = {
  backgroundColor : "#f0f0f0"
};


// Now we are gonna make the RestaurantCard dynamic using "props"
// props ---> properties.
// props are something which we can pass it to the component.
// Here I want to dynamically pass data to the RestaurantCard component, I can pass the data as a "prop".

// Functional Component  ----> Normal JavaScript Function.
// Props -----> Arguments to a Normal JavaScript Fucntion.

// Function(arguments) -----> Component(props)
// passing props to a component is similar to passing arguments to a function.

// React basicaly takes all the properties (props) and it will wrap them inside an object, then it will pass them to the component as props.
// Here 'props' is an object.




/* Style-1 of using props
=========================

const RestaurantCard = (props) => {
  return (
    <div className="restaurant-card" style={styleCard}>
      <img className="res-logo" alt="food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqwpuhgnsaf18te7zvtv"/>
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.stars}</h4>
      <h4>{props.eta}</h4>
    </div>
  )
};
*/


// Style-2 of using props
// ======================

const RestaurantCard = (props) => {
  const {resName, cuisine, stars, eta} = props;
  return (
    <div className="restaurant-card" style={styleCard}>
      <img className="res-logo" alt="food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqwpuhgnsaf18te7zvtv"/>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{stars}</h4>
      <h4>{eta}</h4>
    </div>
  )
};



/* Style-3 of using props
=========================
Destructuring the object 'props' on the fly.
-------------------------------------------

const RestaurantCard = ({resName, cuisine, stars, eta}) => {
  return (
    <div className="restaurant-card" style={styleCard}>
      <img className="res-logo" alt="food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqwpuhgnsaf18te7zvtv"/>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{stars}</h4>
      <h4>{eta}</h4>
    </div>
  )
};
*/


const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="restaurants-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani, South Indian, Chinese"
          stars="4.4 Stars"
          eta="38 minutes"/>
        <RestaurantCard
          resName="KFC"
          cuisine="Fried Chicken, Burgers, Wings"
          stars="4.5 Stars"
          eta="27 minutes"/>
      </div>
    </div>
  )
};


const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<AppLayout/>);