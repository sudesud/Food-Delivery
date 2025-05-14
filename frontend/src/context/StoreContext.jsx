import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// 1. Context oluştur
export const StoreContext = createContext(null);

// 2. Provider bileşeni
const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const url="http://localhost:4000"
  const [token,setToken]=useState("");
  const [food_list,setFoodList]=useState([])

  // 3. Sepete ekleme
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updated = {
        ...prev,
        [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
      };
      console.log("➕ Sepete eklendi:", updated);
      return updated;
    });
  };

  // 4. Sepetten çıkarma
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;
      const updated = {
        ...prev,
        [itemId]: prev[itemId] - 1,
      };
      console.log("➖ Sepetten çıkarıldı:", updated);
      return updated;
    });
  };
 const getTotalCartAmount=()=>{
  let totalAmount=0;
  for(const item in cartItems){
    if(cartItems[item]>0){
      let itemInfo=food_list.find((product)=>product._id===item);
      totalAmount+=itemInfo.price*cartItems[item];
    }
    
  }
    return totalAmount;
 }

 const fetchFoodList=async()=>{
  const response=await axios.get(url+"/api/food/list");
  setFoodList(response.data.data)
 }

 useEffect(()=>{
    
   async function loadData(){
    await fetchFoodList()
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
    }
   }
   loadData();

 },[])

  // 6. Context değeri
  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
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

// 7. PropTypes kontrolü
StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// 8. Export
export default StoreContextProvider;
