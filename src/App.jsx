import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router";
import CartPage from "./components/Cart/CartPage";
import ProductPage from "./components/Cart/ProductPage";
import { CartProvider } from "./core/context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <nav>
            <Link to="/">Products</Link>
            <Link to="/cart">Cart</Link>
          </nav>
          <Routes>
            <Route path="/" element={<ProductPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
