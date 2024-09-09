import foodModel from "../models/foodModel.js";
import fs from "fs"
// add food items
const addFood = async (req, res) => {
  
  const image_filename = `${req.file.filename}.png`;
  console.log(image_filename);
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "food added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// list all food
const listFood = async (req, res) => {
  try {
    const food = await foodModel.find({})
    
    res.json({ success: true, data: food })
  } catch (error) {
    console.log(error);
    res.json({success: false, messgae: error})
  }
}

const removeFood = async (req, res) => {
  try {
    const remFoodItmem = await foodModel.findById(req.body._id)
    fs.unlink(`uploads/${remFoodItmem.image}`, () => {})
    await foodModel.findByIdAndDelete(req.body._id)
    res.json({ success: true, message:"Deleted successfully" })
    
  } catch (error) {
    console.log(error);
    res.json({ success: false, messgae: error })
  }
}



export { addFood, listFood, removeFood };







// add food
// List all foods
//  remove food item
