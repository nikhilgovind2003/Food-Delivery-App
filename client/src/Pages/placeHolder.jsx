import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const PlaceHolder = () => {
  const navigate = useNavigate();
  const { getAmountCart } = useContext(StoreContext);
  return (
    <div className=" w-full mx-auto lg:w-[80%]">
      <form className=" flex items-start justify-between gap-[100px] my-24">
        <div className=" w-full max-w-[max(30%, 500px)]">
          {/* delivery information */}
          <h1 className="text-2xl mb-8 font-semibold">Delivery Information</h1>

          <div className=" w-full flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="text"
                required
                placeholder="First Name"
                className=" w-full border outline-none p-2 text-sm border-black rounded-sm  "
              />
              <input
                type="text"
                required
                placeholder="Last Name"
                className=" w-full border outline-none p-2 text-sm border-black rounded-sm  "
              />
            </div>
            <input
              type="email"
              required
              placeholder="Email Address"
              className=" w-full border outline-none p-2 text-sm border-black rounded-sm  "
            />
            <input
              type="text"
              required
              placeholder="Street"
              className="w-full border  outline-none p-2 text-sm border-black rounded-sm"
            />
            <div className="flex gap-2">
              <input
                type="text"
                required
                placeholder="City"
                className=" w-full border outline-none p-2 text-sm border-black rounded-sm  "
              />
              <input
                type="text"
                required
                placeholder="State"
                className=" w-full border outline-none p-2 text-sm border-black rounded-sm  "
              />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                required
                placeholder="Zip Code"
                className=" w-full border outline-none p-2 text-sm border-black rounded-sm  "
              />
              <input
                type="text"
                required
                placeholder="Country"
                className=" w-full border outline-none p-2 text-sm border-black rounded-sm  "
              />
            </div>
            <input
              type="number"
              required
              placeholder="Phone"
              className=" w-full border outline-none p-2 text-sm border-black rounded-sm  "
            />
          </div>
        </div>

        <div className=" w-full max-w-[max(40%, 500px)]">
          <h1 className=" text-2xl font-bold mb-4">Cart Totals</h1>
          <div>
            <div className=" my-2 flex items-center justify-between">
              <p>Subtotal</p>
              <p>${getAmountCart()}</p>
            </div>
            <hr />
            <div className=" my-2 flex items-center justify-between">
              <p>Delivery Fee</p>
              <p>${getAmountCart() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className=" my-2 flex items-center justify-between">
              <p>Total</p>
              <p>${getAmountCart() === 0 ? 0 : getAmountCart() + 20}</p>
            </div>
          </div>
          <div className=" flex justify-center lg:block">
            <button
              onClick={() => navigate("/order")}
              className=" mx-auto bg-red-500 text-center w-1/2 rounded-md mt-2 text-white font-semibold py-2"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceHolder;
