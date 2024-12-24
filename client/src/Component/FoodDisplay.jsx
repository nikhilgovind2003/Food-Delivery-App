import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";
const FoodDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext);
  
  return (
    <div className="my-12 w-[95%] lg:w-[80%] mx-auto">
      <h1 className="text-4xl font-bold mb-4">Top dishes near you</h1>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {food_list.map((food, i) => {
          if (category === "All" || category === food.category) {
            return (
              <FoodItem
                key={i}
                id={food._id}
                name={food.name}
                img={food.image}
                product={food.product}
                desc = {food.description}
                star={food.star}
                cash={food.price}
                // min={food.min}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
