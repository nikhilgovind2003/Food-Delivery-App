import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Extract token from 'Bearer <token>'

  if (!token) {
    return res.json({
      success: false,
      message: "No token provided",
    });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    req.body.userId = decodedToken.id;
    next();
  } catch (error) {
    console.log("Error message =>", error.message);
    res.json({
      success: false,
      error: error.message,
    });
  }
};