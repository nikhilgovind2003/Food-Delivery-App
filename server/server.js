import cors from "cors"
import express from "express"
import { dbConnect } from "./config/db.js"
import foodRouter from "./routes/foodRouter.js"

// api configuration
const app = express()
const port = 4000

// Middleware configuration
app.use(express.json())
app.use(cors())

// Mongodb
dbConnect()

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads"))

app.listen(port, () => {
    console.log(
        `Server started at ${port}`
    );
})


