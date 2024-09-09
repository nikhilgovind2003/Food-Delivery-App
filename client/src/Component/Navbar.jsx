import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const NavbarLg = ({ setShowLogin }) => {
  const { getAmountCart } = useContext(StoreContext);
  const [menu, setMenu] = useState("Menu");
console.log(menu);


  return (
    <div className=" flex lg:flex items-center justify-between lg:justify-around p-4 mb-4">
      <Link to="/" className=" w-[150px]">
        <img
          className=" w-full h-full"
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt=""
        />
      </Link>

      <ul className="hidden lg:flex lg:items-center lg:justify-center lg:font-semibold lg:text-xl ">
        <li
          onClick={() => setMenu("Home")}
          className={
            menu === "Home"
              ? " border-b-4 border-gray-400 pb-1 text-red-400"
              : ""
          }
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setMenu("Menu")}
          className={
            menu === "Menu"
              ? " border-b-4 border-gray-400 pb-1 text-red-400"
              : ""
          }
        >
          <Link to="/menu">Menu</Link>
        </li>
        <li
          onClick={() => setMenu("Mobile-App")}
          className={
            menu === "Mobile-App"
              ? " border-b-4 border-gray-400 pb-1 text-red-400"
              : ""
          }
        >
          <Link to="mobile-app">Mobile-App</Link>
        </li>
        <li
          onClick={() => setMenu("Contact Us")}
          className={
            menu === "Contact Us"
              ? " border-b-4 border-gray-400 pb-1 text-red-400"
              : ""
          }
        >
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>

      <div className=" flex items-center gap-2 lg:gap-6">
        <CiSearch size={30} className=" cursor-pointer" />
        <Link to="/cart" className=" relative">
          <SlBasket size={30} className=" cursor-pointer" />
          {getAmountCart() === 0 ? (
            <></>
          ) : (
            <div className=" absolute w-[10px] rounded-full h-[10px] top-[-2px] right-[-5px] bg-red-500"></div>
          )}
        </Link>
        <Link
          onClick={() => setShowLogin(true)}
          className=" border-2 w-[90px] lg:w-[100px] text-center rounded-full px-4 hover:bg-orange-50 hover:border-gray-500 active:bg-orange-200 border-black py-2 text-black font-semibold"
        >
          Sign-in
        </Link>
      </div>
    </div>
  );
};

export default NavbarLg;
