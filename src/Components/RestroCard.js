import { RESTRO_LOGO_URL } from "../Utils/constants";

const RestroCard = ({ response }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    response;
  return (
    <div className="restroCard">
      <img
        className="restroLogo"
        src={RESTRO_LOGO_URL + cloudinaryImageId}
        alt="Error in loading Image"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div className="restroDetails">
        <span>{avgRating + "*"}</span>
        <span>{costForTwo}</span>
        <span>{sla.deliveryTime + " mins"}</span>
      </div>
    </div>
  );
};

export default RestroCard;
