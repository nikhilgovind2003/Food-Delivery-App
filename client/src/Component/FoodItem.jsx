import { useContext } from "react";
import { IoAddOutline } from "react-icons/io5";
import { IoIosRemove } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, img, product, star, cash,desc }) => {
  
  const { cartItems, addToCart, removeFromCart, url } =
  useContext(StoreContext);
  return (
    <div
      key={id}
      className=" bg-white cursor-pointer p-2 rounded-lg hover:shadow-2xl"
      style={{ animation: "top 1s" }}
    >
      <div className=" relative w-[100%] h-[300px]">
        <img
          src={url + "/images/" + img}
          className=" w-full rounded-md h-full object-cover"
          alt={name}
        />
        <div className=" absolute bottom-3 right-3 ">
          {!cartItems[id] ? (
            <div
              onClick={() => addToCart(id)}
              className=" rounded-full p-2 bg-white"
            >
              <IoAddOutline />
            </div>
          ) : (
            <div className=" flex items-center gap-3 bg-white  rounded-full p-1 ">
              <div
                className=" rounded-full p-1 bg-green-400"
                onClick={() => removeFromCart(id)}
              >
                <IoIosRemove />
              </div>
              <p>{cartItems[id]}</p>
              <div className=" rounded-full p-1 bg-red-400">
                <IoAddOutline onClick={() => addToCart(id)} />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" flex flex-col gap-2 mt-4">
        <div className=" flex items-center justify-between w-full">
          <p className=" text-xl font-bold">{name}</p>
          <span className=" bg-green-500 gap-1 flex items-center text-white rounded-md px-4 py-[4px]">
            {star} <FaStar />
          </span>
        </div>
        <div className=" flex items-center justify-start w-full">
          <p>{product}</p>
          <span>{cash}$ only for one</span>
        </div>
          <p className=" w-full">{desc}</p>
      </div>
    </div>
  );
};

export default FoodItem;
