import React from "react";
import { useSelector } from "react-redux";
import { getCartItems, getCartTotal, getIsCartOpen } from "../store/selectors/cartSelectors";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const isCartOpen = useSelector(getIsCartOpen)
  const totalCart = useSelector(getCartTotal)
  const cartItems = useSelector(getCartItems)
  return (
    <>
      {isCartOpen &&
        <div className="absolute z-10 bg-green-50 right-0 top-20 border-4 border-gray-900 p-5">
          <h3 className="text-xl font-bold text-center">Mon panier</h3>
          {/* LISTE DES ITEMS */}
          {
            cartItems.length ?
              cartItems.map((item) => (
                <CartItem product={item} key={item.is} />
              )) : <p>Panier vide</p>
          }
          <p>Total du panier : {totalCart} $</p>
          <div className="flex justify-center">
            <button className="py-4 px-10 bg-green-500 text-green-50 shadow-sm shadow-black hover:bg-green-300 hover:text-gray-900">
              Passer au paiement
            </button>
          </div>
        </div>
      }
    </>
  );
};