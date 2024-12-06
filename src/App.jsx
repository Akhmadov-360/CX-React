import CartPage from "./components/Cart/Cart.Page";
import ProductCard from "./components/Cart/ProductCard";
import ThemeToggle from "./components/Theme/ThemeToggle";

function App() {
  const products = [
    {
      id: Math.random(),
      name: "Product 1",
      price: "18000",
    },
    {
      id: Math.random(),
      name: "Product 2",
      price: "20000",
    },
    {
      id: Math.random(),
      name: "Product 3",
      price: "40000",
    },
  ];
  return (
    <>
      <ThemeToggle />

      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
      <CartPage />
    </>
  );
}

export default App;
