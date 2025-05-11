import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import PropTypes from "prop-types";

// 1. Context oluştur
export const StoreContext = createContext(null);

// 2. Provider bileşeni
const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

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
  console.log("🔥 StoreContext çalıştı");
  // 5. Değişikliği izleme (yalnızca değiştiğinde loglasın)
  useEffect(() => {
    console.log("🛒 Güncel sepet durumu:", cartItems);
  }, [cartItems]);

  // 6. Context değeri
  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
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
