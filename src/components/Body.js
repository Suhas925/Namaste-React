import "../css/Body.css";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [text, setText] = useState("Top Rated Restaurants");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await response.json();
    console.log(jsonData);
    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const handleButton = () => {
    if (text === "Top Rated Restaurants") {
      setText("View All Restaurants");
      setFilteredRestaurants(
        listOfRestaurants.filter((res) => res?.info?.avgRating > 4.5)
      );
    } else {
      setText("Top Rated Restaurants");
      setFilteredRestaurants(listOfRestaurants);
    }
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  }

  const handleSearchBtn = () => {
    console.log(searchText);
    const filteredRestaurants = listOfRestaurants.filter(
      (res) => (
        res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') handleSearchBtn();
  };

  const onlineStatus = useOnlineStatus();

  if(!onlineStatus) return (<h1>Looks like you're offline. Please check your internet connection.</h1>)

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search-container">
        <p>Search</p>
      </div> */}
      <div className="btn-container">
        <div className="search-container">
          <input className="search-input" type="text" value={searchText}
            onChange={handleChange} onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearchBtn} className="search-btn">Search</button>
        </div>
        <div>
        <button onClick={handleButton} className="filter-btn">
          {text}
        </button></div>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link className="Link" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard  resData={restaurant} />
          </Link>
        ))}
        {/* <RestaurantCard resData={resList[0]}/>*/}
      </div>
    </div>
  );
};
export default Body;
