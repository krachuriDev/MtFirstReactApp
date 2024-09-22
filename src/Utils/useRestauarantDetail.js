import { useEffect, useState } from "react";
import { RESTRO_API_URL } from "../Utils/constants";

const useRestuarantDetail = (resId) => {
  const [restroData, setRestroData] = useState(null);

  const abortController = new AbortController();

  //Need to fetch the data based on the input parameter and return the data.
  ///If there is no dependency array present, useEffect() gets called for every render.
  ///If there is a dependency array present, useEffect() gets called whenever there is a change in the dependency values and on the initial render.

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
    const data = await fetch(RESTRO_API_URL + resId, {
      signal: abortController.signal,
    });
    const resData = await data.json();
    setRestroData(resData);
  };

  return restroData;
};

export default useRestuarantDetail;
