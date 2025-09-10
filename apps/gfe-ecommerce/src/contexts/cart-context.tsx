import React, { createContext, useContext } from "react";


const CartContext = createContext({});

const CartContextProvider = ({
  children
}: {
  children: React.ReactNode
}) => {


  return <CartContext.Provider value={{}}>
    {children}
  </CartContext.Provider>
}

const useCartContext = () => useContext(CartContext);

export { CartContextProvider, useCartContext }