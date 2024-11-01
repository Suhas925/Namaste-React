/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;
  const {name, costForTwo, cloudinaryImageId, avgRating, cuisines, areaName} = resData?.info;
  const {slaString} = resData.info.sla;
  
  return (
    <div className="res-card w-[290px] p-1 cursor-pointer flex flex-col transform ease duration-300 hover:transform hover:scale-95">
      <img
        className="res-logo w-full h-[200px] rounded-2xl object-cover"
        alt="res-logo"
        src={CDN_URL+cloudinaryImageId}
      />

      <div className="res-info-container width-[290px] p-2">
        <h1 className="res-name text-nowrap overflow-hidden text-ellipsis font-bold text-lg">{name}</h1>
        <h4 className="ratings font-bold">⭐{avgRating} - {costForTwo}</h4>
        <h4 className="cuisines text-nowrap overflow-hidden text-ellipsis">{cuisines.join(", ")}</h4>
        <h4 className="time">{slaString} - {areaName}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
