// src/contexts/ordercontext.js
import React, { createContext, useState, useEffect } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // Add or Update Quantity
  const addOrder = (order) => {
    setOrders((prev) => {
      const existing = prev.find((o) => o.id === order.id);
      if (existing) {
        return prev.map((o) =>
          o.id === order.id
            ? { ...o, quantity: o.quantity + (order.quantity || 1) }
            : o
        );
      } else {
        return [...prev, { ...order, quantity: order.quantity || 1 }];
      }
    });
  };

  // Replace order list (e.g., from cart)
  const setBulkOrders = (orderList) => {
    setOrders(orderList.map((o) => ({ ...o, quantity: o.quantity || 1 })));
  };

  // Use for "Order Now"
  const placeOrderNow = (item) => {
    setOrders([{ ...item, quantity: item.quantity || 1 }]);
  };

  const removeOrder = (index) => {
    setOrders((prev) => prev.filter((_, i) => i !== index));
  };

  const clearOrders = () => {
    setOrders([]);
    localStorage.removeItem("orders");
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        setBulkOrders,
        placeOrderNow,
        removeOrder,
        clearOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
