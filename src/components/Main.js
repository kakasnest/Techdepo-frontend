import { Routes, Route } from "react-router-dom";
import Categories from "./routes/Categories";
import Products from "./routes/Products";
import Home from "./routes/Home";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="categories" element={<Categories />} />
      <Route path="products" element={<Products />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default Main;
