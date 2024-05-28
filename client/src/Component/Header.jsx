import Explore from "./Explore";

const Header = () => {
  return (
    <div>
      <div
        className=" flex flex-col justify-center object-contain  text-white relative w-[80%] mx-auto h-[500px] rounded-xl p-2 "
        style={{
          backgroundImage:
            "url(https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png)",
        }}
      >
        <div className=" p-12 absolute w-[50vw]" style={{
            animation: "fadeIn 3s"
        }}>
          <h1 className=" flex flex-col gap-4 text-6xl font-bold">
            <span>Order your</span>
            favourite food here
          </h1>
          <p className=" text-lg mt-2">
            From swanky upscale restaurants to the cosiest hidden gems serving
            the most incredible food, Zomato covers it all. Explore menus, and
            millions of restaurant photos and reviews from users just like you,
            to find your next great meal.
          </p>
          <button className=" bg-white rounded-full px-4 py-2 text-black font-semibold  mt-4">
            View Menu
          </button>
        </div>
      </div>

        <Explore />
        <Explore />
        <Explore />
    </div>
  );
};

export default Header;
