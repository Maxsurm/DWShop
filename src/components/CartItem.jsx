import React from "react";
import { useDispatch } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../store/actions/cartActions";

export const CartItem = ({ product, imgSize = 60 }) => {
  const dispatch = useDispatch()
  const removeProduct = () => {
    dispatch(removeProductFromCart(product))
  }
  const addProduct = () => {
    dispatch(addProductToCart(product))
  }
  return (
    <div className=" w-full flex justify-between items-center gap-6 my-3">
      <img
        src={product.image}
        alt={product.image}
        width={imgSize}
        height={imgSize}
      />
      <p>{product.title}</p>

      <div className="flex gap-2">
        <button
          onClick={removeProduct}
          className="font-bold text-green-500 text-lg">-</button>
        <p>x {product.quantity} </p>
        <button
          onClick={addProduct}
          className="font-bold text-green-500 text-lg">+</button>
      </div>

      <p>{product.price}$</p>
    </div>
  );
};