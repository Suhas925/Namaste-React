import resList from "../utils/dataObj.js";
import RestaurantCard from "./RestaurantCard.js";
import { useState } from "react";


const Body = () => {

  // React Hook -> useState()
  // State Variable - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);


  return (
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