import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, name, description, price, image_url } = props.data;
  const { cartItems, addToCart, removeFromCart,updateCartItemCount} =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={image_url} />
      <div className="name"><h2>{name}</h2></div>
      <div className="description">
        <p>
          <b>{description}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};