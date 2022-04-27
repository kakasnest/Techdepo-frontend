import axios from "axios";
import { useState, useEffect } from "react";
import CategoryLink from "../components/elements/CategoryLink";
import "../styles/categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios.get("http://localhost:5000/api/categories/");
      setCategories(data);
    };
    getCategories();
  }, []);

  return (
    <div className="categories">
      {categories.map((c) => {
        return <CategoryLink key={c._id} {...c} />;
      })}
    </div>
  );
}

export default Categories;
