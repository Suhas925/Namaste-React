import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  }
  
  return (
    <div className="bg-gray-100 px-4 py-2">
      {/* Accordian Header */}
      <div className="mx-auto my-1 px-4 py-2 bg-white shadow-lg">
        <div className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="cursor-pointer">{!showItems ? "▼" : "▲"}</span>
        </div>
        {showItems &&
        <div>
          {/* Accordian Body */}
          <ItemList items={data.itemCards} />
        </div>}
        
      </div>
    </div>
  );
};
export default RestaurantCategory;
