import { useDispatch, useSelector } from "react-redux";
import RestuarantCategoryItems from "./RestuarantCategoryItems";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  //console.info(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  ///Need to install Redux Dev Tools and explore it.
  ///Explore callback functions in javascript.
  ///Difference between mutable & immutable state.
  ///Read the documentation about the RTK query in Redux official docs.

  return (
    <div className="text-center">
      <h1 className="p-4 m-4 font-semibold text-xl">Cart</h1>

      <button
        className="bg-black text-white rounded-lg my-2 py-2 mr-96 w-1/12"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && (
          <h1 className="font-semibold font-sans py-2 my-2 text-green-300 text-xl">
            Cart is empty. Please go ahead and add items to the cart
          </h1>
        )}
        <RestuarantCategoryItems items={cartItems}></RestuarantCategoryItems>
      </div>
    </div>
  );
};

export default Cart;
