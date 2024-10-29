/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;
  const {name, costForTwo, cloudinaryImageId, avgRating, cuisines} = resData?.info;
  const {slaString} = resData.info.sla;
  
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL+cloudinaryImageId}
      />

      <div className="res-info-container">
        <h3 className="res-name">{name}</h3>
        <h4 className="cuisines">{cuisines.join(", ")}</h4>
        <h4 className="ratings">⭐{avgRating} - {costForTwo}</h4>
        <h4 className="time">{slaString}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
