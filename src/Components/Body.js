import restroList from "../Utils/MockData";
import Restro from "../Components/Restro";
import { useState } from "react";

const Body = () => {
  //Normal JS variable
  //const resData = restroList;

  //Use state variable below to render the changes of data into UI.
  const [listOfRestuarants, SetlistOfRestuarants] = useState(restroList);

  return (
    <div className="body">
      <div className="searchRestro">
        {/* <input
          className="searchTxt"
          type="search"
          placeholder="Search restuarant by name"
        ></input>
        <input className="searchBtn" type="button" value="Search"></input> */}
        <input
          className="filter-btn"
          type="button"
          value="Top Rated"
          onClick={() => {
            const filteredRestuarants = listOfRestuarants.filter(
              (res) => res.info.avgRating > 4,
              {}
            );
            SetlistOfRestuarants(filteredRestuarants);
          }}
        ></input>
      </div>
      <div className="restroContainer">
        {listOfRestuarants.map((res) => {
          return <Restro key={res.info.id} response={res.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
