import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getAmountCart } =
    useContext(StoreContext);
  const navigate = useNavigate();
  
  return (
    <div className=" w-full lg:w-[80%] lg:mt-44 mx-auto">
      <div className=" mb-6">
        <div className="sm:text-sm grid grid-cols-6 mx-2 lg:mx-6 mt-12">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Qty.</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className=" w-full mb-2" />

        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={index}>
                <div className=" md:text-sm grid h-full grid-cols-6  m-2 lg:mx-4">
                  <img src={item.img} alt="" className=" my-auto w-[50px]" />
                  <p className=" my-auto h-full">{item.name}</p>
                  <p className=" my-auto">${item.cash}</p>
                  <p className=" my-auto">{cartItems[item.id]}</p>
                  <p className=" my-auto">{item.cash * cartItems[item.id]}</p>
                  <div className=" cursor-pointer w-full flex justify-center text-center"
                    onClick = {() => {
                      removeFromCart(item.id);
                    }}
                    >
                    <RxCross1 className=" h-full cursor-pointer" />
                  </div>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>

      <div className=" lg:grid lg:grid-cols-2 lg:my-24 flex mt-12 flex-col-reverse mx-6 mb-12">
        <div className=" lg:mr-24">
          <h1 className=" text-2xl font-bold mb-4">Cart Totals</h1>
          <div>
            <div className=" my-2 flex items-center justify-between">
              <p>Subtotal</p>
              <p>${getAmountCart()}</p>
            </div>
            <hr />
            <div className=" my-2 flex items-center justify-between">
              <p>Delivery Fee</p>
              <p>${ getAmountCart() === 0? 0:2}</p>
            </div>
            <hr />
            <div className=" my-2 flex items-center justify-between">
              <p>Total</p>
              <p>${getAmountCart()==0? 0: getAmountCart() + 2}</p>
            </div>
          </div>
          <div className=" flex justify-center lg:block">
            <button onClick={()=> navigate("/order")} className=" mx-auto bg-red-500 text-center w-1/2 rounded-md mt-2 text-white font-semibold py-2">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
        <div className=" lg:ml-24 sm:w-full">
          <p>If you have a promocode, Enter it here</p>
          <form action="" className="flex items-center my-4 gap-2">
            <input
              type="text"
              className="w-full h-8 bg-white text-[#808080] px-4"
            
              placeholder="Promocode"
            />
            <input
              type="submit"
              value="Submit"
              className=" text-center text-sm bg-black text-white px-8 h-8"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
