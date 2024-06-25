import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import express from "express";
import multer from "multer";
// Food model
const foodRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  fileName: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname} `);
  },
});
const upload = multer({ storage: storage });

foodRouter.post("/add",upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
