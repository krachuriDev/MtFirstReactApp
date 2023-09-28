import { useEffect, useState } from "react";
import { RESTRO_API_URL } from "../Utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestuarantDetail = () => {
  const [restroData, setRestroData] = useState(null);

  ///If there is no dependency array present, useEffect() gets called for every render.
  ///If there is a dependency array present, useEffect() gets called whenever there is a change in the dependency values.

  useEffect(() => {
    fetchData();
  }, []);

  const { resId } = useParams();

  const fetchData = async () => {
    const data = await fetch(RESTRO_API_URL + resId);
    const resData = await data.json();
    setRestroData(resData);
  };

  if (restroData === null) return <Shimmer></Shimmer>;

  const { name, sla, costForTwoMessage, cuisines, avgRating, labels } =
    restroData?.data?.cards[0]?.card?.card?.info;

  return (
    <div className="restroScreen">
      <h2>{name}</h2>
      <br></br>
      <span>{labels[1].message}</span>
      <div>
        <span>{cuisines.join(", ")}</span>
      </div>
      <div>
        <span>{sla.deliveryTime + " mins"}</span>----
        <span>{costForTwoMessage}</span>
      </div>
      <div>
        <span>{avgRating + " *"}</span>
      </div>
      {/* <div>
        <h4>Recommended</h4>
        <img alt="Not able to load Image"></img>
        <h6>Name of the item - Price</h6>
      </div> */}
    </div>
  );
};

export default RestuarantDetail;
