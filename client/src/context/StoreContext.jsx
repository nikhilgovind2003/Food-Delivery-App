import { createContext, useEffect, useState } from "react";
import { food_list } from "../Data/Data";

export const StoreContext = createContext(null);

const StoreContextProvider = ({children}) => {
  const [cartItems, setcartItems] = useState({});
  const url = "http://localhost:4000"
  const [token, setToken] = useState("")

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setcartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getAmountCart = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product.id === cartItems[item]);
        totalAmount += itemInfo.cash * cartItems[item];
      }
    }
  return totalAmount  
  };

  useEffect(() => {}, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setcartItems,
    addToCart,
    removeFromCart,
    getAmountCart,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
