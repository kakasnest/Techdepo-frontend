import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const toThePreviousPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/products/${productId}`
      );
      setProduct(data);
    };
    getProduct();
  }, [productId]);

  return (
    <div>
      <button onClick={toThePreviousPage}>back</button>
      <p>{product.name}</p>
    </div>
  );
}

export default Product;
