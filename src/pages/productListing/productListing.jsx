import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "../productListing/product";
import "./productListing.css";

export const ProductListing = () => {
    return  (
            <div className="flex-container">
                <div className="productListing">
                <div className="Title"><h1>Product Listing</h1></div>
                <div className="products">
                {PRODUCTS.map((product) => (
                <Product data={product} />
                ))}
                </div>
            </div>
            </div>
            )
};