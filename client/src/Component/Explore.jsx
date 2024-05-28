import { Foods } from "../Data/Foods";
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Explore = () => {


    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
      };

      
  return (
    <div className=" mt-12 w-[80%] mx-auto">
      <h1 className=" text-4xl font-bold mb-4">Explore Menu</h1>
      <p className=" text-gray-700">
        Explore curated lists of top restaurants, cafes, pubs, and bars in Agra,
        based on trends
      </p>
      <Slider {...settings} className=" flex mt-6 justify-center  gap-12 items-center">
        {Foods.map((food, id) => (
          <div key={id} className=" flex flex-col items-center justify-center gap-12">
            <img
              src={food.img}
              className=" rounded-full w-[150px] mx-auto"
              alt={food.name}
            />
            <p className=" text-center">{food.name}</p>
          </div>
        ))}
      </Slider>
      </div>
  );
};

export default Explore;
