'use client'

import { IApplyDiscount, ICartItem, ICartProduct, ICartUnit, IInventoryItem, IProduct } from "@/types";
import cloneDeep from "lodash/cloneDeep";
import React, { createContext, Dispatch, SetStateAction, useCallback, useContext, useEffect, useMemo, useState } from "react";

type AddToCartParams = { product: IProduct, inventory: IInventoryItem, quantity: number; imageUrl: string };

type CartContextType = {
  cartItems: ICartItem[];
  discount: IApplyDiscount | null;
  setDiscount: Dispatch<SetStateAction<IApplyDiscount | null>>;
  addToCart: (params: AddToCartParams) => void;
  removeFromCart: (sku: string) => void;
  decreaseQuantity: (sku: string) => void;
  increaseQuantity: (sku: string) => void;
  clearCart: () => void;
}
const CartContext = createContext<CartContextType>({} as CartContextType);

const LOCAL_KEY = 'cart'

const CartContextProvider = ({
  children
}: {
  children: React.ReactNode
}) => {

  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [discount, setDiscount] = useState<IApplyDiscount | null>(null);


  useEffect(() => {
    const localCartData = localStorage.getItem(LOCAL_KEY);
    if (localCartData) {
      setCartItems(JSON.parse(localCartData) as ICartItem[])
    }
  }, []);

  const updateCart = (cloneCartItems: ICartItem[]) => {
    setCartItems(cloneCartItems);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(cloneCartItems));
  };

  const clearCart = () => {
    console.log('cleat')
    setCartItems([]);
    setDiscount(null)
    localStorage.removeItem(LOCAL_KEY);
  }

  const addToCart = useCallback((params: AddToCartParams) => {
    const { inventory, product, imageUrl, quantity } = params;

    const productDetail: ICartProduct = {
      description: product.description,
      name: product.name,
      product_id: product.product_id
    };

    const unit: ICartUnit = {
      // ...inventory
      sku: inventory.sku,
      color: inventory.color,
      list_price: inventory.list_price,
      sale_price: inventory.sale_price,
      size: inventory.size,
      stock: inventory.stock,
      image_url: imageUrl
    };



    let cloneCartItems = cloneDeep(cartItems);
    const findExistCartItem = cartItems.findIndex((item) => item.unit.sku === inventory.sku);

    const cartItem: ICartItem = {
      product: productDetail,
      unit,
      created_at: new Date().toDateString(),
      quantity: quantity > inventory.stock ? inventory.stock : quantity,
      total_list_price: unit.list_price * quantity,
      total_sale_price: unit.sale_price * quantity
    }

    console.log({ findExistCartItem })

    if (findExistCartItem < 0) {
      console.log({ cartItem })
      cloneCartItems.push(cartItem)
    } else {
      cloneCartItems = cloneCartItems.map((item) => {
        const isCurrentUnit = item.unit.sku === inventory.sku
        if (!isCurrentUnit) return item;


        const adjustQuantity = item.quantity + cartItem.quantity > inventory.stock ? inventory.stock : item.quantity + cartItem.quantity;
        console.log(item.quantity, cartItem.quantity, inventory.stock, adjustQuantity)

        return {
          ...cartItem,
          quantity: adjustQuantity,
          total_list_price: unit.list_price * adjustQuantity,
          total_sale_price: unit.sale_price * adjustQuantity
        }
      })
    }
    console.log({ cloneCartItems })

    updateCart(cloneCartItems);

  }, [cartItems])

  const removeFromCart = useCallback((sku: string) => {
    let cloneCartItems = cloneDeep(cartItems);
    cloneCartItems = cloneCartItems.filter((item) => item.unit.sku !== sku);
    updateCart(cloneCartItems);
  }, [cartItems]);

  const increaseQuantity = useCallback((sku: string) => {
    let cloneCartItems = cloneDeep(cartItems);
    cloneCartItems = cloneCartItems.map((item) => {
      const isMatched = item.unit.sku === sku;
      if (!isMatched) return item;
      const adjustQuantity = item.quantity + 1 > item.unit.stock ? item.unit.stock : item.quantity + 1
      return ({
        ...item,
        quantity: adjustQuantity,
        total_list_price: item.unit.list_price * adjustQuantity,
        total_sale_price: item.unit.sale_price * adjustQuantity
      })
    });
    updateCart(cloneCartItems);
  }, [cartItems]);
  const decreaseQuantity = useCallback((sku: string) => {
    let cloneCartItems = cloneDeep(cartItems);
    cloneCartItems = cloneCartItems.map((item) => {
      const isMatched = item.unit.sku === sku;
      if (!isMatched) return item;
      const adjustQuantity = item.quantity - 1;
      // if (adjustQuantity <= 0) return null;
      return ({
        ...item,
        quantity: adjustQuantity,
        total_list_price: item.unit.list_price * adjustQuantity,
        total_sale_price: item.unit.sale_price * adjustQuantity
      })
    }).filter(item => item.quantity > 0);
    updateCart(cloneCartItems);
  }, [cartItems]);

  const contextValues = useMemo(() => {
    return {
      cartItems, discount, setDiscount, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart
    }
  }, [cartItems, discount, setDiscount, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart])




  return <CartContext.Provider value={contextValues}>
    {children}
  </CartContext.Provider>
}

const useCartContext = () => useContext(CartContext);

export { CartContextProvider, useCartContext };
