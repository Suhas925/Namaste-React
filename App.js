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

const RestaurantCard = () => {
  return (
    <div className="restaurant-card" style={styleCard}>
      <img className="res-logo" alt="food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqwpuhgnsaf18te7zvtv"/>
      <h3>Meghana Food</h3>
      <h4>Biryani, South Indian, Chinese</h4>
      <h4>4.4 Stars</h4>
      <h4>38 minutes</h4>
    </div>
  )
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="restaurants-container">
        <RestaurantCard/> <RestaurantCard/>
        <RestaurantCard/> <RestaurantCard/>
        <RestaurantCard/> <RestaurantCard/>
        <RestaurantCard/> <RestaurantCard/>
        <RestaurantCard/> <RestaurantCard/>
        <RestaurantCard/> <RestaurantCard/>
        <RestaurantCard/> <RestaurantCard/>
        <RestaurantCard/> <RestaurantCard/>
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