import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { FOOD_ITEM_CATEGORY, VEG_FILTER } from "../Utils/constants";
import { useState, useEffect } from "react";
import { RESTRO_API_URL } from "../Utils/constants";
import RestuarantCategory from "./RestuarantCategory";
import RestroDetailShimmer from "./RestroDetailShimmer";

const RestuarantDetail = () => {
  const { resId } = useParams();

  const [restroData, SetRestroData] = useState(null);
  const [menuItems, SetMenuItems] = useState([]);
  const [filteredMenuItems, SetFilteredMenuItems] = useState([]);

  const [showItems, setShowItems] = useState(0);

  // const showCategoryItems = (index) => {
  //   setShowItems(index);
  // };

  const abortController = new AbortController();

  //using the custom hook to fetch the restauarant data.
  //const resData = useRestuarantDetail(resId);

  useEffect(() => {
    fetchData();

    //The cleanup function gets called whenever the dependency array changes
    //OR when the component gets unmounted(when we navigate to a different component).
    return () => {
      console.info("Restauarant detail component gets re-rendered/unmounted");
      //cancelling the network request when the user navigates to a different component/re-rendering
      abortController.abort();
    };
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTRO_API_URL + resId, {
        signal: abortController.signal,
      });
      const resData = await data.json();
      SetRestroData(resData);
      SetMenuItems(
        resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (card) => card?.card?.card?.["@type"] == FOOD_ITEM_CATEGORY
        )
      );
      SetFilteredMenuItems(
        resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (card) => card?.card?.card?.["@type"] == FOOD_ITEM_CATEGORY
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  if (restroData === null) return <RestroDetailShimmer></RestroDetailShimmer>;

  const { name, sla, costForTwoMessage, cuisines, avgRating, labels } =
    restroData?.data?.cards[2]?.card?.card?.info;

  return (
    <div>
      <div className="p-2 m-2 w-4/12">
        <h2 className="font-semibold py-1">{name}</h2>
        <span className="font-sans text-gray-500">{labels[1].message}</span>
        <div className="font-sans text-gray-500">
          <span>{cuisines.join(", ")}</span>
          <span>{", " + avgRating + " *"}</span>
        </div>
        <div className="font-sans text-gray-500">
          <span>{sla?.deliveryTime + " mins, "}</span>
          <span>{costForTwoMessage}</span>
        </div>
      </div>
      {/* <div className="flex flex-wrap py-2 items-center">
        <label className="font-semibold font-sans px-3">VegOnly</label>
        <input
          className="px-2 rounded-lg"
          type="checkbox"
          onChange={(event) => {
            if (event.target.checked === true) {
              const filteredData = filteredMenuItems.filter(
                (item) =>
                  item.card.info.itemAttribute.vegClassifier === VEG_FILTER
              );
              SetFilteredMenuItems(filteredData);
            } else {
              SetFilteredMenuItems(menuItems);
            }
          }}
        ></input>
      </div> */}
      {menuItems.map((card, index) => (
        <RestuarantCategory
          key={card?.card?.card?.title}
          card={card}
          showItems={showItems === index}
          showCategoryItems={() => {
            showItems == index ? setShowItems(null) : setShowItems(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestuarantDetail;
