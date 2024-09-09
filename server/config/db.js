import mongoose from "mongoose"

export const dbConnect = async () => {
    await mongoose.connect(process.env.DB_URL)
        .then(() => console.log("Mongodb Connected successfully"))
        .catch(() => console.log("ERROR: Failed to connect"))
}