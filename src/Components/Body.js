import RestroCard, { EnhancedRestroCard } from "./RestroCard";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTRO_LIST_URL, AVG_RESTAUARANT_RATING } from "../Utils/constants";

const Body = () => {
  //Normal JS variable
  //const resData = restroList;

  // The below function will return a array of two values i.e stateValue(undefined) & function to update the state value.
  //console.info(useState());

  //Use state variable below to render the changes of data into UI.
  const [listOfRestuarants, SetlistOfRestuarants] = useState([]);
  const [filteredListOfRestuarants, SetfilteredListOfRestuarants] = useState(
    []
  );
  const [filterRestro, setFilterRestro] = useState("");

  const RestroCardPromoted = EnhancedRestroCard(RestroCard);

  //Whenever state variables update, React triggers reconciliation cycle/algorithm(re-renders the component.)

  useEffect(() => {
    //Need to call an API to fetch the data and bind it to the UI.
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RESTRO_LIST_URL);
      const resData = await response.json();
      SetlistOfRestuarants(
        resData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      SetfilteredListOfRestuarants(
        resData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error(err);
    }
  };

  //Conditional Rendering.
  return listOfRestuarants?.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="flex">
        <input
          className="border border-solid border-black px-2 mx-2 rounded-lg"
          type="text"
          placeholder="Search restuarant by name"
          value={filterRestro}
          onChange={(event) => {
            setFilterRestro(event.target.value);
            if (event.target.value === "") {
              SetfilteredListOfRestuarants(listOfRestuarants);
            }
          }}
        ></input>
        <input
          className="px-2 mx-2 bg-blue-500 text-white py-2 rounded-lg"
          type="button"
          value="Search"
          onClick={() => {
            if (filterRestro.length > 3) {
              const filteredRestuarants = listOfRestuarants.filter((res) =>
                res?.info?.name
                  .toLowerCase()
                  .includes(filterRestro.toLowerCase())
              );
              SetfilteredListOfRestuarants(filteredRestuarants);
            } else {
              alert("Please enter more than 3 characters to search");
            }
          }}
        ></input>
        <input
          className="px-2 mx-2 bg-blue-500 text-white py-2 rounded-lg"
          type="button"
          value="Top Rated"
          onClick={() => {
            const filteredTopRatedRestuarants = listOfRestuarants.filter(
              (res) => res?.info?.avgRating >= AVG_RESTAUARANT_RATING,
              {}
            );
            SetfilteredListOfRestuarants(filteredTopRatedRestuarants);
          }}
        ></input>
      </div>
      <div className="flex py-3 flex-wrap justify-center">
        {filteredListOfRestuarants.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            {res.info.avgRating >= 4 ? (
              <RestroCardPromoted response={res.info} />
            ) : (
              <RestroCard response={res.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
