import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState({});
  const url = "http://localhost:4000";

  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  const addToCart = async (itemId) => {
        console.log(itemId);
        
    if (!cartItems[itemId]) {
      setcartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
      await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
    }
  };
  const removeFromCart = async(itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
    }
  };



  const getAmountCart = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => {
          return product.id === cartItems[item];
        });
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const fetchFoodLists = async () => {
    const res = await axios.get(`${url}/api/food/list`);
    setFoodList(res.data.data);
  };

  const loadCartData = async (token) => {
    console.log(token);
    
    const res = await axios.get(url + "/api/cart/get", {}, { headers: { token } })
      console.log(res.data);
      // setcartItems(res.data.cartData)
  }

  useEffect(() => {
    const loadData = async () => {
      await fetchFoodLists();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(storedToken)
      }
    };

    loadData();
  }, []);

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
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
