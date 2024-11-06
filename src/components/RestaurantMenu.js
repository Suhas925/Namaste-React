import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return (
      <div className="menu-loading flex justify-center">
        <h1 className="text-2xl font-bold" >Loading...</h1>
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


  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c?.["card"]?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log("Categories:", categories);


  return (
    <div className="main-menu flex justify-center items-center flex-col gap-4">

      <div className="res-info-container w-[900px] rounded-lg p-4 flex flex-col gap-2 shadow-lg shadow-slate-500">
        <h1 className="resName text-2xl font-bold">{name}</h1>
        <h3 className="ratings font-bold">
          ⭐{avgRating}({totalRatingsString}) - {costForTwoMessage}
        </h3>
        <h3 className="menu-cuisines text-orange-500 underline font-semibold cursor-pointer">{cuisines.join(", ")}</h3>
        <h3 className="font-semibold">Outlet - {areaName}</h3>
        <h3 className="font-semibold">{slaString}</h3>
      </div>

      {/* <div className="menu-container">
      <h1>Recommended :</h1>
        <ul>
          {itemCards?.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - Rs {(item?.card?.info?.price / 100) || (item?.card?.info?.defaultPrice / 100)}/-
            </li>
          ))}
        </ul>
      </div> */}

      <div className="categories-container w-[900px]">
        {categories.map((category) => <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>)}
      </div>
    </div>
  );
};

export default RestaurantMenu;
