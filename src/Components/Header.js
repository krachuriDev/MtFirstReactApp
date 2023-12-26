import { useContext, useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedinUser } = useContext(UserContext);

  //subscribe to the store using a selector.
  // Always subscribe to the small/sliced portion of the store.
  //const store= useSelector((store)=>store);
  // When we subscribe to the entire store, there will be a performance hit since any change happens in any sliced portion
  // it will affect the subcribed components for which the component might not use.
  // Eg:- Below we are subscribing to the cart portion of the store.
  const cartData = useSelector((store) => store.cart.items);
  console.info(cartData);

  return (
    <div className="flex justify-between">
      <div className="w-24">
        <img src={LOGO_URL} alt="Failed to load the Image"></img>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-1 m-2 font-semibold">
            Status:- {onlineStatus === true ? "✔" : "🔥"}
          </li>
          <li className="px-1 m-2 bg-teal-200 font-semibold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-1 m-2 bg-teal-200 font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-1 m-2 bg-teal-200 font-semibold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-1 m-2 bg-teal-200 font-semibold">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-1 m-2 bg-teal-200 font-semibold text-xl">
            <Link to="/cart">Cart:- ({cartData.length} Items)</Link>
          </li>
          <li className="px-1 m-2 bg-teal-200 font-semibold">
            <button
              className="btn-Login"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="font-bold p-2">{loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
