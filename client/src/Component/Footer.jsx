import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" lg:grid grid-cols-[2fr_1fr_1fr] container mx-auto w-full bg-blue-600 lg:py-12 lg:px-24 text-white mb-0">
        <div className=" mr-24">
          <div className=" w-[100px] mb-4">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="logo"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dicta
            ipsum ab cupiditate hic, rerum provident iusto modi dolorum minus,
            quae assumenda porro delectus, fuga harum dignissimos architecto?
            Modi, fugit?
          </p>
          <ul className=" flex mt-4 items-center gap-4">
            <div className=" cursor-pointer rounded-full border-2 border-white p-2">
              <FaFacebookF />
            </div>
            <div className=" cursor-pointer rounded-full border-2 border-white p-2">
              <FaXTwitter />
            </div>
            <div className=" cursor-pointer rounded-full border-2 border-white p-2">
              <FaLinkedin />
            </div>
          </ul>
        </div>
        <div className=" flex items-start flex-col">
          <h1 className=" ml-5 font-bold text-2xl ">COMPANY</h1>

          <ul className=" mt-4 flex flex-col gap-2">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col  items-start">
          <h1 className=" font-bold text-2xl ">GET IN TOUCH</h1>
          <p className=" my-2">+91 4634297191</p>
          <p>contactwow@gmail.com</p>
        </div>
      </div>
      <hr />
      <div className=" bg-blue-600 text-center font-semibold p-2 text-white">
        <p>Copyright 2024 &copy; Zomato.com - All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
