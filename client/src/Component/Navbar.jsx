import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";

const Navbar = () => {
  const [menu, setMenu] = useState("Menu");
  return (
    <div className=" flex items-center justify-around p-4">
      <div className=" w-[150px]">
        <img
          className=" w-full h-full"
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt=""
        />
      </div>

      <ul className=" flex items-center justify-center font-semibold text-xl ">
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? " border-b-4 border-gray-400 pb-1" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? " border-b-4 border-gray-400 pb-1" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("Mobile-App")}
          className={
            menu === "Mobile-App" ? " border-b-4 border-gray-400 pb-1" : ""
          }
        >
          Mobile-App
        </li>
        <li
          onClick={() => setMenu("Contact Us")}
          className={
            menu === "Contact Us" ? " border-b-4 border-gray-400 pb-1" : ""
          }
        >
          Conatct Us
        </li>
      </ul>

      <div className=" flex items-center gap-6">
        <CiSearch size={30} className=" cursor-pointer" />
        <div className=" relative">
          <SlBasket size={30} className=" cursor-pointer" />
          <div className=" absolute w-[10px] rounded-full h-[10px] top-[-2px] right-[-5px] bg-red-500"></div>
        </div>
        <button className=" border-2 rounded-full px-4 border-black py-2 text-black font-semibold">
          Sign-in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
