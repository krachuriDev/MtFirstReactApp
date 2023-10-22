import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTRO_LOGO_URL } from "../Utils/constants";
import { useState, useEffect } from "react";
import { RESTRO_API_URL } from "../Utils/constants";

const RestuarantDetail = () => {
  const { resId } = useParams();

  const [restroData, SetRestroData] = useState(null);
  const [menuItems, SetMenuItems] = useState([]);
  const [filteredMenuItems, SetFilteredMenuItems] = useState([]);

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
        resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
          ?.card?.card.itemCards
      );
      SetFilteredMenuItems(
        resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
          ?.card?.card?.itemCards
      );
    } catch (err) {
      console.error(err);
    }
  };

  if (restroData === null) return <Shimmer></Shimmer>;

  const { name, sla, costForTwoMessage, cuisines, avgRating, labels } =
    restroData?.data?.cards[0]?.card?.card?.info;

  return (
    <div>
      <div className="restroScreen">
        <h2>{name}</h2>
        <br></br>
        <span>{labels[1].message}</span>
        <div>
          <span>{cuisines.join(", ")}</span>
        </div>
        <div>
          <span>{sla?.deliveryTime + " mins"}</span>----
          <span>{costForTwoMessage}</span>
        </div>
        <div>
          <span>{avgRating + " *"}</span>
        </div>
      </div>
      <div className="filterVegItems">
        <label>Veg Only </label>
        <input
          type="checkbox"
          onChange={(event) => {
            if (event.target.checked === true) {
              const filteredData = filteredMenuItems.filter(
                (item) => item.card.info.itemAttribute.vegClassifier === "VEG"
              );
              SetFilteredMenuItems(filteredData);
            } else {
              SetFilteredMenuItems(menuItems);
            }
          }}
        ></input>
      </div>
      <div className="menuItemsContainer">
        {filteredMenuItems.map((item) => (
          <div key={item?.card?.info?.id} className="menuItem">
            <h4>{item?.card?.info?.name}</h4>
            <img
              className="menuItemLogo"
              src={RESTRO_LOGO_URL + item?.card?.info?.imageId}
              alt="Error in loading Image"
            ></img>
            <br></br>
            <span>
              {item?.card?.info?.description
                ? item?.card?.info?.description + ", "
                : ""}
            </span>
            <span>{"$" + item?.card?.info?.price / 100}</span>
            <br></br>
            <span>
              ______________________________________________________________________________________
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestuarantDetail;
