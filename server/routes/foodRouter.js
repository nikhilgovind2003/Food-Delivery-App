import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import express from "express";
import path from "path";
import multer from "multer";


const foodRouter = express.Router();

// api configuration
const app = express()
// Image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});


const upload = multer({ storage: storage });


app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
