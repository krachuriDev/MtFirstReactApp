import { useContext } from "react";
import { RESTRO_LOGO_URL } from "../Utils/constants";
import UserContext from "../Utils/UserContext";
import React from 'react';

const RestroCard = ({ response }) => {

  const { name, cuisines, avgRating, sla, cloudinaryImageId,costForTwo } = response;
  const { loggedinUser } = useContext(UserContext);

  return (
    <div className="w-56 px-3 py-2 hover:bg-slate-200" data-testid="resCard">
      <img
        className="rounded-lg"
        src={RESTRO_LOGO_URL + cloudinaryImageId}
        alt="Error in loading Image"
      ></img>
      <h3 className="truncate font-semibold font-sans">{name}</h3>
      <div className="font-semibold">
        <span>{avgRating + "*, "}</span>
        <span>{sla?.deliveryTime + " mins"}</span>
      </div>
      <h4 className="text-gray-500 truncate font-sans">
        {cuisines.join(", ")}
      </h4>
      <div>
        <span className="text-gray-500 truncate font-sans">{costForTwo}</span>
      </div>
      {/* <h4 className="font-bold font-sans">{loggedinUser}</h4> */}
    </div>
  );
};

///Higher Order Component -- which takes a component as input and returns a enhanced version of component

/// input - RestroCard=> EnhancedRestroCard

export const EnhancedRestroCard = (RestroCard) => {
  return (props) => {
    return (
      <React.Fragment>
        <label className="text-white bg-black m-2 rounded-lg absolute pl-1">
          Promoted
        </label>
        <RestroCard {...props} ></RestroCard>
      </React.Fragment >
    );
  };
};
export default RestroCard;
