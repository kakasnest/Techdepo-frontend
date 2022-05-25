import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import ProductLink from "../common/ProductLink.js";
import "../../styles/products.css";

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
        `/api/products/?categories=${categoryId}`
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
