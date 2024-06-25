import mongoose from "mongoose"

export const dbConnect = async () => {
    await mongoose.connect("mongodb+srv://govindnikhil508:9wMIbqFvXSKHRKLm@cluster0.gvqynui.mongodb.net/food-delivery")
        .then(() => console.log("Mongodb Connected successfully"))
        .catch(() => console.log("ERROR: Failed to connect"))
}