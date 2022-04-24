import { Routes, Route } from "react-router-dom";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import ProductsByCategory from "./pages/ProductsByCategory";
import Product from "./elements/Product";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:categoryId" element={<ProductsByCategory />} />
      <Route path="/products/:productId" element={<Product />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default Main;
