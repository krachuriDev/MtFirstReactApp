import { useDispatch } from "react-redux";
import { RESTRO_LOGO_URL } from "../Utils/constants";
import { addItem } from "../Utils/cartSlice";

const RestuarantCategoryItems = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        const { id, name, price, imageId, description } = item?.card?.info;
        return (
          <div key={id} className="border-b-2 border-gray-300">
            <div className="flex justify-between py-2">
              <div className="w-9/12">
                <span className="font-semibold text-sm">{name}</span>
                <br />
                <span className="">{price ? "₹" + price / 100 : ""}</span>
                <div>
                  <p className="text-xs text-gray-500 py-2">
                    {description ? description : ""}
                  </p>
                </div>
              </div>
              <div className="w-3/12 p-4 relative">
                <div className="absolute top-6 -right-3">
                  <button
                    className="p-2 mx-16 mt-12 rounded-lg bg-white text-green-400 shadow-lg w-14 h-9"
                    onClick={() => handleAddItem(item)}
                  >
                    Add+
                  </button>
                </div>
                <img
                  className="rounded-lg w-full"
                  src={RESTRO_LOGO_URL + imageId}
                  alt="Error in loading Image"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestuarantCategoryItems;
