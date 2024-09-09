import { useState } from "react";
import { assets } from "../admin_assets/assets.js";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);
  return (
    <>
      <div className=" flex justify-between bg-white items-center p-2 border-b-2 px-8 fixed top-0 z-10 w-full border-gray-400">
        <div className=" w-[150px]">
          <img src={assets.logo} alt="logo" />
        </div>
        <div onClick={()=> setMenuBar(!menuBar)} className=" md:hidden">
          {menuBar ? <IoMenu size={30} /> : <RxCross2 size={30} />}
        </div>
        <div className="hidden lg:block">
          <img src={assets.profile_image} alt="profile image" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
