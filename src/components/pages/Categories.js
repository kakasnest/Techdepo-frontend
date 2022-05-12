import axios from "axios";
import { useState, useEffect } from "react";
import "../../styles/categories.css";

import { CategoryLink } from "../common/";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios.get("/api/categories/");
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
