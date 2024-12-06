import React from "react";
import { useCart } from "../../core/context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div style={{ width: "200px", height: "auto", boxShadow: 10 }}>
      <h3>{product.name}</h3>
      <h5>Price {product.price}</h5>
      <button onClick={() => addToCart(product)}>Add</button>
    </div>
  );
};

export default ProductCard;
