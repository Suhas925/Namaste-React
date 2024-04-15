import resList from "../utils/dataObj.js";
import RestaurantCard from "./RestaurantCard.js";
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="restaurants-container">
        {
          resList.map(restaurant => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))
        }
      </div>
    </div>
  )
};
export default Body;