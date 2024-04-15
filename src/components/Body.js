import resList from "../utils/dataObj.js";
import RestaurantCard from "./RestaurantCard.js";
import { useState } from "react";


const Body = () => {

  // React Hook -> useState()
  // State Variable - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(
    [
      {
        "info": {
          "id": "38634",
          "name": "Third Wave Coffee",
          "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Beverages",
            "Bakery",
            "Continental"
          ],
          "avgRating": 4.5,
          "sla": {"deliveryTime": 25}
        }
      },
      {
        "info": {
          "id": "381853",
          "name": "ITC Master Chef Creations",
          "cloudinaryImageId": "c8439641cf359075cbbe91f6b3a1bb6e",
          "costForTwo": "₹650 for two",
          "cuisines": [
            "North Indian",
            "Biryani",
            "Kebabs"
          ],
          "avgRating": 3.9,
          "sla": {"deliveryTime": 39}
        }
      },
      {
        "info": {
          "id": "107443",
          "name": "Lo! - Low Carb and Keto Foods",
          "cloudinaryImageId": "o8t0w5gdlujpigauaflw",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Healthy Food",
              "Keto",
              "Continental"
          ],
          "avgRating": 4.2,
          "sla": {"deliveryTime": 28}
        }
      }
    ]
  );

  // Normal JavaScript Variable
  /*
  let listOfRestaurants = [
    {
      "info": {
        "id": "38634",
        "name": "Third Wave Coffee",
        "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Bakery",
          "Continental"
        ],
        "avgRating": 4.5,
        "sla": {"deliveryTime": 25}
      }
    },
    {
      "info": {
        "id": "381853",
        "name": "ITC Master Chef Creations",
        "cloudinaryImageId": "c8439641cf359075cbbe91f6b3a1bb6e",
        "costForTwo": "₹650 for two",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Kebabs"
        ],
        "avgRating": 3.9,
        "sla": {"deliveryTime": 39}
      }
    },
    {
      "info": {
        "id": "107443",
        "name": "Lo! - Low Carb and Keto Foods",
        "cloudinaryImageId": "o8t0w5gdlujpigauaflw",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Healthy Food",
            "Keto",
            "Continental"
        ],
        "avgRating": 4.2,
        "sla": {"deliveryTime": 28}
      }
    }];
  */

  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="filter">
        <button className="filterBtn"
          onClick={() => {
            // Filter Logic Here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.0
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