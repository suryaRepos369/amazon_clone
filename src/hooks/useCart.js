import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "./../Redux_Store/Cart/CartSlice";

const useCart = (data) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.cartTotal);

  // const add=()=>{
  //   dispatch(cartActions.add)
  // }
  return { cartQuantity, cartItems, cartTotal };
};

export default useCart;
