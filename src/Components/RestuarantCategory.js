import { useState } from "react";
import RestuarantCategoryItems from "./RestuarantCategoryItems";

const RestuarantCategory = ({ card, showItems, showCategoryItems }) => {
  const itemCards = card?.card?.card?.itemCards;

  return (
    <div>
      <div className="w-6/12 p-3 shadow-lg bg-slate-100 mx-auto my-3">
        <div
          className="flex justify-between cursor-pointer"
          onClick={showCategoryItems}
        >
          <span className="font-bold text-lg">
            {card?.card?.card?.title} ({card?.card?.card?.itemCards?.length})
          </span>
          <span className="font-semibold">⬇</span>
        </div>

        {/*Lifting the state up-
         When we want two or more components to share the same state we need to remove the state from child components
         and assign it to the nearest parent component and pass the state as props */}

        {/* props drilling - 
         When we pass the props from parent component to multiple child components using the props,
         until it reaches the leaf component it's called props drilling.  */}

        {showItems && <RestuarantCategoryItems items={itemCards} />}
      </div>
    </div>
  );
};

export default RestuarantCategory;
