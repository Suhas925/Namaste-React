import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("items:", items);
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
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
            <span className="text-sm text-green-500">
              ⭐{item.card.info.ratings.aggregatedRating.rating}(
              {item.card.info.ratings.aggregatedRating.ratingCountV2})
            </span>
            <span className="text-sm">{item.card.info.description}</span>
          </div>

          {/*Item Image container */}
          <div className="p-2 relative aspect-[156/144]">
            <img
              className="w-40 rounded-2xl"
              src={CDN_URL + item.card.info.imageId}
            />
            <button
              className="text-green-500 bg-white px-8 py-1 text-lg font-bold rounded-2xl shadow-lg
          absolute bottom-1 left-10 hover:bg-gray-200 border border-gray-300"
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