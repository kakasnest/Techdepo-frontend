import axios from "axios";
import { useState, useEffect } from "react";

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
    <ul>
      {categories.map((c) => {
        return <li key={c._id}>{c.name}</li>;
      })}
    </ul>
  );
}

export default Categories;
