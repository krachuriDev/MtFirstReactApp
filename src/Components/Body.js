import Restro from "../Components/Restro";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Normal JS variable
  //const resData = restroList;

  //Use state variable below to render the changes of data into UI.
  const [listOfRestuarants, SetlistOfRestuarants] = useState([]);
  const [filteredListOfRestuarants, SetfilteredListOfRestuarants] = useState(
    []
  );

  const [filterRestro, setFilterRestro] = useState("");

  //Whenever state variables update, React triggers reconciliation cycle/algorithm(re-renders the component.)

  useEffect(() => {
    //Need to call a API to fetch the data and bind it to the UI.
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.491942&lng=78.318705&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const resData = await response.json();
      SetlistOfRestuarants(
        resData.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      SetfilteredListOfRestuarants(
        resData.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log(err);
    }
  };

  //Conditional Rendering.
  return listOfRestuarants?.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="searchRestro">
        <input
          className="searchTxt"
          type="search"
          placeholder="Search restuarant by name"
          value={filterRestro}
          onChange={(event) => {
            setFilterRestro(event.target.value);
          }}
        ></input>
        <input
          className="searchBtn"
          type="button"
          value="Search"
          onClick={() => {
            const filteredRestuarants = listOfRestuarants.filter((res) =>
              res?.info?.name.toLowerCase().includes(filterRestro.toLowerCase())
            );
            SetfilteredListOfRestuarants(filteredRestuarants);
          }}
        ></input>
        <input
          className="filter-btn"
          type="button"
          value="Top Rated"
          onClick={() => {
            const filteredRestuarants = listOfRestuarants.filter(
              (res) => res?.info?.avgRating >= 4,
              {}
            );
            SetfilteredListOfRestuarants(filteredRestuarants);
          }}
        ></input>
      </div>
      <div className="restroContainer">
        {filteredListOfRestuarants.map((res) => (
          <Restro key={res.info.id} response={res.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
