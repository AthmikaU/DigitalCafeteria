// Components/cartcontext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addToCart = (item) => {
    setCart(prevCart => {
      const existing = prevCart.find(i => i.name === item.name);
      if (existing) {
        return prevCart.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    // alert(`${item.name} added to cart!`);
  };

  const removeItemFromCart = (name) => {
    setCart(prevCart => prevCart.filter(i => i.name !== name));
  };

  const updateQuantity = (name, quantity) => {
    setCart(prevCart =>
      prevCart.map(i =>
        i.name === name ? { ...i, quantity: parseInt(quantity) || 1 } : i
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeItemFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};
