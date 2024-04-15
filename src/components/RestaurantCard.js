import {CDN_URL} from "../utils/constants.js";
import {styleCard} from "../utils/constants.js";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
  const {deliveryTime} = resData?.info?.sla;
  return (
    <div className="restaurant-card" style={styleCard}>
      <img className="res-logo" alt="food-img"
        src={CDN_URL + cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  )
};
export default RestaurantCard;