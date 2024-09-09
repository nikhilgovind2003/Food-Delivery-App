import mongoose, { mongo } from "mongoose";

const userSchame = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cartData: {
    type: Object,
    default: {},
  },
},
{minimize: false}); // cartData  will create automatically


const UserModel = mongoose.model.User || mongoose.model("User", userSchame);
export default UserModel