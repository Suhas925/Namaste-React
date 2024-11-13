import {useSelector, useDispatch} from "react-redux";
import ItemList from "./ItemList";
import {clearCart} from "../utils/cartSlice";

const Cart = () => {

  // Subscribing to the Store
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="m-2 p-2">
      <h1 className="text-3xl text-center font-bold">Cart</h1>
      <div className="w-6/12 m-auto flex flex-col justify-center items-center">
        <ItemList items={cartItems}/>

      {cartItems.length !== 0 
        ? <button className="bg-red-500 text-white border-2 border-red-500 px-4 py-2 rounded-lg font-bold hover:bg-white hover:text-red-500 text-center" onClick={handleClearCart}>
            Clear Cart
          </button>
        : <h1 className="text-lg font-bold">Your Cart is Empty! Add Items to the Cart.</h1>
      }
      </div>
    </div>
  )
};
export default Cart;