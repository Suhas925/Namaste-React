import RestaurantCard from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer.js";


const Body = () => {

  // State Variable - Super Powerful Variable
  // Whenever a state variable gets updated, react tirggers Reconciliation Cycle (re-renders the component).
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState('');

  console.log("Body Rendered");

  useEffect(()=>{
    fetchData();
  },
  []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    /*
    This is not a good way of writing code. We can use Optional Chaining.
    setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    */

    // Optional Chaining
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value) {
      fetchData();
    }
  };

  // Conditional Rendering
  return !listOfRestaurants.length ? ( 
    <Shimmer/> 
    ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText}
            onChange={handleChange} placeholder="search for restaurants and food"
          />
          <button onClick={() => {
            // Filter the restaurant cards and update the UI
            console.log(searchText);
            const filteredRestaurants = listOfRestaurants.filter(
              (res) => (
                res.info.name.toLowerCase().includes(searchText.toLowerCase()) || 
                res.info.cuisines.join(", ").toLowerCase().includes(searchText.toLowerCase())
              )
            );
            setFilteredRestaurants(filteredRestaurants);
          }}>
            Search
          </button>
        </div>
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
          filteredRestaurants.map(restaurant => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))
        }
      </div>
    </div>
  )
};
export default Body;