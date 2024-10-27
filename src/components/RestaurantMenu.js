import { useState, useEffect } from "react";
import "../css/RestaurantMenu.css";

import { useParams } from "react-router-dom";

import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);
  /*201224  682268 */
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };

  if (resInfo === null) {
    return <h1 style={{textAlign:'center'}}>Loading...</h1>;
  }

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
  } = resInfo?.cards[2]?.card?.card?.info ?? {};

  const { slaString } = resInfo?.cards[2]?.card?.card?.info?.sla ?? {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <div className="main-menu">
      <div>
        {/* <h1 className="resName">{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
           <h4>
                ⭐{resInfo?.cards[2]?.card?.card?.info?.avgRating}({resInfo?.cards[2]?.card?.card?.info?.totalRatingsString}) - 
                {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
           </h4>
           <h4 className="cuisines">{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h4>
           <h4>Outlet : {resInfo?.cards[2]?.card?.card?.info?.areaName}</h4>
           <h4>{resInfo?.cards[2]?.card?.card?.info?.sla?.slaString}</h4> */}

        <h1 className="resName">{name}</h1>
        <h3 className="ratings">
          ⭐{avgRating}({totalRatingsString}) - {costForTwoMessage}
        </h3>
        <h3 classNames="menu-cuisines">{cuisines.join(", ")}</h3>
        <h3>Outlet: {areaName}</h3>
        <h3>{slaString}</h3>
        <br></br>
        <h1>Menu:</h1>
        <ul>
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - Rs {item?.card?.info?.price / 100}/-
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
