// src/contexts/OrderContext.js
import React, { createContext, useState, useEffect } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    // Retrieve orders data from localStorage on initial load
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    // Store orders data in localStorage whenever orders state changes
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order) => {
    setOrders((prevOrders) => {
      const existingOrder = prevOrders.find((o) => o.id === order.id);
      if (existingOrder) {
        return prevOrders.map((o) =>
          o.id === order.id
            ? { ...o, quantity: o.quantity + (order.quantity || 1) }
            : o
        );
      } else {
        return [...prevOrders, { ...order, quantity: order.quantity || 1 }];
      }
    });
  };

  const removeOrder = (index) => {
    setOrders((prevOrders) => prevOrders.filter((_, i) => i !== index));
  };

  const clearOrders = () => {
    setOrders([]);
    localStorage.removeItem('orders');
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, removeOrder, clearOrders }}>
      {children}
    </OrderContext.Provider>
  );
};
