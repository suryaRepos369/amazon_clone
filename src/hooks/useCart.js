import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "./../Redux_Store/Cart/CartSlice";

const useCart = (data) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.cartTotal);

  const deleteItem = (id) => {
    console.log("id:", id);

    dispatch(cartActions.deleteItem(id));
  };

  function bulkAdd(data) {
    dispatch(cartActions.bulkAdd(data));
  }
  return { cartQuantity, cartItems, cartTotal, deleteItem, bulkAdd };
};

export default useCart;
