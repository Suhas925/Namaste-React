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
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
  const {deliveryTime} = resData?.info?.sla;
  return (
    <div className="restaurant-card" style={styleCard}>
      <img className="res-logo" alt="food-img"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  )
};


// Below the 'resList' is imported from 'Data.js' file.
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="restaurants-container">
        {
          resList.map(restaurant => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))

          /* we can also use 'index' as 'key'
          resList.map((restaurant, index) => (
            <RestaurantCard key={index} resData={restaurant}/>
          ))
          But React itself says that never use 'index' as the 'key'.
          Its okay to use but it is not recommended.
          Whenever you don't have a unique id, then only use 'index' as 'key'.
          Not using keys is not acceptable.
          $ Unique Id >>>>> index as key >> not using key
          */
        }
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