import { Router } from "express"
import { addToCart, getCart, removeFromCart } from "../controllers/cartController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"

const cartRouter = Router()

cartRouter.post("/add",authMiddleware, addToCart)
cartRouter.post("/remove", authMiddleware, removeFromCart)
cartRouter.get("/get", authMiddleware, getCart)

export default cartRouter   