// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const useCart = () => {
//   return useContext(CartContext);
// };

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, { ...item, price: item.price || 20.0 }]); // Default price or from item
//   };

//   const removeFromCart = (itemToRemove) => {
//     setCartItems(cartItems.filter(item => item.id !== itemToRemove.id));
//   };
//     // Function to calculate total cost
//     const calculateTotalCost = () => {
//         return cartItems.reduce((total, item) => total + item.cost, 0);
//       };
    

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, calculateTotalCost }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
