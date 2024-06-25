import { Link } from "react-router-dom";
import { assets } from "../admin_assets/assets.js";

const SideBar = () => {
  return (
    <div className="hidden md:block w-[18%] border-r-2 border-gray-400 h-screen">
      <div className=" mt-12 ml-12 flex flex-col gap-4">
        <Link to="/add" className=" active:bg-[#fff0ed] active:border-red-400  flex items-center gap-4 border-2 rounded-md border-gray-400 border-r-0 p-2">
          <img src={assets.add_icon} alt="add icons" />
          <p className="hidden lg:block">Add Items</p>
        </Link>

        <Link to="/list" className=" active:bg-[#fff0ed] active:border-red-400  flex items-center gap-4 border-2 rounded-md border-gray-400 border-r-0 p-2">
          <img src={assets.order_icon} alt="order icon" />
          <p className="hidden lg:block">List Items</p>
        </Link>
        <Link to="/orders" className=" active:bg-[#fff0ed] active:border-red-400  flex items-center gap-4 border-2 rounded-md border-gray-400 border-r-0 p-2">
          <img src={assets.order_icon} alt="order icon" />
          <p className="hidden lg:block">Orders</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
