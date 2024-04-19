import RestaurantCard from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer.js";


const Body = () => {

  // State Variable - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(()=>{
    fetchData();
  },
  []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    /*
    This is not a good way of writing code. We can use Optional Chaining.
    setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    */

    // Optional Chaining
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // Conditional Rendering
  return !listOfRestaurants.length ? ( 
    <Shimmer/> 
    ) : (
    <div className="body">
      <div className="filter">
        <button className="filterBtn"
          onClick={() => {
            // Filter Logic Here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestaurants(filteredList);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurants-container">
        {
          listOfRestaurants.map(restaurant => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))
        }
      </div>
    </div>
  )
};
export default Body;