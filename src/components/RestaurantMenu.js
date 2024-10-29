import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return (
      <div className="menu-loading">
        <h1 >Loading...</h1>
      </div>
    )
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

      <div className="res-info-container">
        <h1 className="resName">{name}</h1>
        <h3 className="ratings">
          ⭐{avgRating}({totalRatingsString}) - {costForTwoMessage}
        </h3>
        <h3 className="menu-cuisines">{cuisines.join(", ")}</h3>
        <h3>Outlet: {areaName}</h3>
        <h3>{slaString}</h3>
      </div>

      <div className="menu-container">
      <h1>Menu:</h1>
        <ul>
          {itemCards?.map((item) => (
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
