import React from "react";
import { useCart } from "../../core/context/CartContext";

const CartPage = () => {
  const { cart } = useCart();

  console.log(cart.length);

  return (
    <>
      <h2> You Cart {cart.length}</h2>
      {cart.length === 0 ? (
        <h4>Empty</h4>
      ) : (
        <ul>
          {cart.map((i, index) => (
            <li key={index}>
              {i.name} - ${i.price}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CartPage;
