import { CDN_URL } from "../utils/constants";
import {useDispatch} from "react-redux";
import {addItems} from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItems(item));
    // Here, dispatch will create an object -> { payload:"Coffee"}
    // Now it will take the object and pass it as a second argument to the addItems reducer function.

  };

  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-center p-2 m-2 border-b-2 border-gray-200"
        >
          {/*Item Info container */}
          <div className="flex flex-col gap-1 mb-4 w-[600px]">
            <span className="text-lg font-bold">{item.card.info.name}</span>
            <span className="font-bold">
              ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}/-
            </span>
            <span className="text-sm text-green-500 font-bold">
              ⭐{item.card.info.ratings.aggregatedRating.rating}(
              {item.card.info.ratings.aggregatedRating.ratingCountV2})
            </span>
            <span className="text-sm">{item.card.info.description}</span>
          </div>

          {/*Item Image container */}
          <div className="w-44 p-2 relative ">
            <img
              className="rounded-2xl aspect-[156/144] object-cover"
              src={CDN_URL + item.card.info.imageId}
            />
            <button onClick={() => handleAddItem(item)}
              className="text-green-500 bg-white px-8 py-1 text-lg font-bold rounded-2xl shadow-lg shadow-gray-200
          absolute -bottom-1 left-9 hover:bg-gray-200 border border-solid border-gray-300"
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
