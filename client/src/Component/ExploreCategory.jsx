import { Foods } from "../Data/Foods";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ExploreCategory = (checked, setChecked) => {
    console.log(checked);
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      outline: "none"
    };
    return (
      <div className=" mt-12 w-[80%] mx-auto">
        <h1 className=" text-4xl font-bold mb-4">Explore Menu</h1>
        <p className=" text-gray-700">
          Explore curated lists of top restaurants, cafes, pubs, and bars in Agra,
          based on trends
        </p>
        <Slider
          {...settings}
          className="flex mt-6 justify-center  gap-12 items-center"
        >
          {Foods.map((food, id) => (
            <div
              key={id}
              onClick={() =>setChecked(food.name)
              }
              className="border-none outline-none flex flex-col items-center justify-center gap-12"
            >
              <img
                src={food.img}
                className=
                {
                  checked === food.name?
                  "border-4 border-red-400 p-1 rounded-full w-[150px] mx-auto":
                  "rounded-full w-[150px] mx-auto"
                }
                alt={food.name}
              />
              <p className=" text-center">{food.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
export default ExploreCategory