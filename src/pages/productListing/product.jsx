import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const { id, name, description, price, image_url } = props.data;
    const { addToCart,cartItems } = useContext(ShopContext);
  
    const cartItemCount = cartItems[id];
  
    return (
      <div className="product">
        <img src={image_url} alt="url not found"/>
        <div className="name"><h2>{name}</h2></div>
        <div className="description">
          {description}s
        </div>
        <div className="price">
         ${price}
        </div>
        <br></br>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
        <br></br>
      </div>
    );
  };