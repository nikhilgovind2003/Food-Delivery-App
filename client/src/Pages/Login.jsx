import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
const Login = ({ setShowLogin }) => {
  const [currentState, setcurrentState] = useState("Sign-Up");

  return (
    <div className=" w-full h-full bg-[#00000090] grid z-20 fixed">
      <form
        action=""
        className=" p-6 lg:p-8 rounded-md lg:place-self-center w-full mx-auto bg-white text-[#808080] lg:w-[max(33vw)] "
      >
        <div className=" flex justify-between mb-4 items-center w-full">
          <h2 className=" text-center w-full text-2xl font-bold text-blue-400">
            {currentState}
          </h2>
          <RxCross1
            className=" cursor-pointer "
            size={30}
            onClick={() => setShowLogin(false)}
          />
        </div>

        <div className=" w-full flex items-center flex-col gap-4 mb-4">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              className="border-2 p-2 rounded-md  w-full"
              type="text"
              placeholder=" Enter Your Name"
              required
            />
          )}
          <input
            className="border-2 p-2 rounded-md w-full"
            type="email"
            placeholder=" Enter Your Email"
            required
          />
          <input
            className="border-2 p-2 rounded-md w-full"
            type="password"
            placeholder=" Enter Password"
            required
          />
        </div>
        <button className=" w-full bg-red-400 p-2 text-white font-bold rounded-md ">
          {currentState == "Login" ? "Login" : "Create new account"}
        </button>

        <div className=" flex w-full gap-4 my-4">
          <input
            className=" cursor-pointer"
            type="radio"
            name="terms-condition"
            id="terms-condition"
            required
          />
          <p className=" text-sm">I agree Terms and Conditions to Sign-up</p>
        </div>

        <div>
          {currentState == "Login" ? (
            <p>
              I have not account.{" "}
              <span
                className=" text-blue-500 cursor-pointer"
                onClick={() => setcurrentState("Sign-up")}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p>
              I have already account.{" "}
              <span
                className=" text-blue-500 cursor-pointer"
                onClick={() => setcurrentState("Login")}
              >
                Login
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
export default Login;
