const Header = () => {

  return (
    <div>
      <div
        className="md:mx-4 mx-auto lg:flex flex-col justify-center object-contain  text-white relative w-full lg:w-[80%] lg:mx-auto h-[500px] rounded-xl p-2 "
        style={{
          backgroundImage:
            "url(https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png)",
        }}
      >
        <div className=" p-12 absolute lg:w-[50vw] w-full" style={{
            animation: "fadeIn 3s"
        }}>
          <h1 className=" flex flex-col gap-8 lg:gap-4 text-6xl font-bold">
            <span>Order your</span> favourite food here
          </h1>
          <p className="hidden lg:block text-lg mt-2">
            From swanky upscale restaurants to the cosiest hidden gems serving
            the most incredible food, Zomato covers it all. Explore menus, and
            millions of restaurant photos and reviews from users just like you,
            to find your next great meal.
          </p>
          <button className=" mt-12 bg-white rounded-full px-4 py-2 text-xl text-black font-semibold  lg:mt-4">
            View Menu
          </button>
        </div>
      </div>

    </div>
  );
};

export default Header;
