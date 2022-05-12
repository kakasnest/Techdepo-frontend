import { Routes, Route } from "react-router-dom";
import {
  Categories,
  ProductsByCategory,
  Product,
  Register,
  Login,
  Home,
} from "./pages";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:categoryId" element={<ProductsByCategory />} />
      <Route path="/products/:productId" element={<Product />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default Main;
