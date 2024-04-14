import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./Data.js";


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



const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="restaurant-card" style={styleCard}>
      <img className="res-logo" alt="food-img"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + resData.info.cloudinaryImageId}/>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating} Stars</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  )
};


// Below the 'resList' is imported from 'Data.js' file.
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="restaurants-container">
        <RestaurantCard resData={ resList[0]}/>
        <RestaurantCard resData={ resList[1]}/>
        <RestaurantCard resData={ resList[2]}/>
        <RestaurantCard resData={ resList[3]}/>
        <RestaurantCard resData={ resList[4]}/>
        <RestaurantCard resData={ resList[5]}/>
        <RestaurantCard resData={ resList[6]}/>
        <RestaurantCard resData={ resList[7]}/>
        <RestaurantCard resData={ resList[8]}/>
        <RestaurantCard resData={ resList[9]}/>
        <RestaurantCard resData={ resList[10]}/>
        <RestaurantCard resData={ resList[11]}/>
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