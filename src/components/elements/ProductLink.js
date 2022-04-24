import { Link } from "react-router-dom";

function ProductLink({ name, _id }) {
  return (
    <Link className="product--card" to={`/products/${_id}`}>
      <p className="product--name">{name}</p>
    </Link>
  );
}

export default ProductLink;
