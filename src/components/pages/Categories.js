import axios from "axios";
import { useState, useEffect } from "react";
import Category from "../elements/Category";
import "../../styles/categories.css";

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
        return <Category key={c._id} {...c} />;
      })}
    </div>
  );
}

export default Categories;
