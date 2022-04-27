import { Link } from "react-router-dom";

function Category({ name, _id }) {
  return (
    <Link className="category--card" to={`/categories/${_id}`}>
      <p className="category--name">{name}</p>
    </Link>
  );
}

export default Category;
