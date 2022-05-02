import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductLink from "../components/sub/ProductLink.js";
import "../styles/products.css";
import { useNavigate } from "react-router-dom";

function ProductsByCategory() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const toThePreviousPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/categories/${categoryId}`
      );
      setProducts(data);
    };

    getProducts();
  }, [categoryId]);

  return (
    <div>
      <button onClick={toThePreviousPage}>back</button>
      <div>
        {products.map((p) => {
          return <ProductLink key={p._id} {...p} />;
        })}
      </div>
    </div>
  );
}

export default ProductsByCategory;
