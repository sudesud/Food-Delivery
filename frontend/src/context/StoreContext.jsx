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
   const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      // Eğer item daha önce eklenmemişse, sepete 1 ekliyoruz
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      // Eğer item zaten varsa, miktarını arttırıyoruz
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  };

  // 4. Sepetten çıkarma
  const removeFromCart = async (itemId) => {
    // Eğer item sepetteyse, miktarını azaltıyoruz
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
    if(token){
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
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
      // const loadCartData=async (token)=>{
      //   const response=await axios.post(url+"/api/cart/get",{},{headers:{token}});
      //   setCartItems(response.data.cartData);
      // }

 useEffect(()=>{
    
   async function loadData(){
    await fetchFoodList()
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"));
      // await loadCartData(localStorage.getItem("token"));
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
