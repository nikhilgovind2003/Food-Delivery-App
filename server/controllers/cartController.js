import UserModel from "./../models/userModel.js";

export const addToCart = async (req, res) => {
  try {
    const userId = req.body.userId;
    const userData = await UserModel.findOne({ _id: userId });
    let cartData = userData.cartData || {};
    if (!cartData[req.body.itemId]) cartData[req.body.itemId] = 1;
    else cartData[req.body.itemId] += 1;
    await UserModel.findByIdAndUpdate(userId, { cartData });
    res.status(200).json({
      success: true,
      message: "Added to cart",
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await UserModel.findById(userId);
    let cartData = userData.cartData;
    if (cartData[req.body.itemId]>0) cartData[req.body.itemId] -= 1;
    await UserModel.findByIdAndUpdate(userId, { cartData });
    res.status(200).json({
      success: true,
      message: "Removed from cart",
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};



export const getCart = async (req, res) => {
    try {
        
        const { userId } = req.body;

        const userData = await UserModel.findById(userId).populate('cartData')
        const cartData = userData

        res.json({
          success: true,
          cartData
        })
        

    } catch (error) {
        res.json({
            success: false,
            error: error.message,
          });
    }
};
