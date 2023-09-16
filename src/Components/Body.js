import Restro from "../Components/Restro";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTRO_LIST_URL } from "../Utils/constants";

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
      const response = await fetch(RESTRO_LIST_URL);
      const resData = await response.json();
      console.log(resData);
      SetlistOfRestuarants(
        resData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      SetfilteredListOfRestuarants(
        resData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
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
            const filteredTopRatedRestuarants = listOfRestuarants.filter(
              (res) => res?.info?.avgRating >= 4,
              {}
            );
            SetfilteredListOfRestuarants(filteredTopRatedRestuarants);
          }}
        ></input>
      </div>
      <div className="restroContainer">
        {filteredListOfRestuarants.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            <Restro response={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
