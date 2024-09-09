import UserModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// creating token
const createToken = (id) => {
  return jwt.sign({ id }, "uuffeiurof25521TQ3cmc29302ri");
};

// login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid password" });
    }

    const token = createToken(user._id);
    res.json({ success: true, message: "Login succesfull", token: token });
  } catch (error) {
    return res.json({ error: error.message, success: false });
  }
};

// register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exist = await UserModel.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "User already exists" });
    }

    //   checking email validation
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    //   checking is it strong password or not
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter strong password",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //   creating new user
    const newUser = await UserModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    // creating new user
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });


    
  } catch (error) {
    res.json({ error: error.message, message: "Error" });
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };
