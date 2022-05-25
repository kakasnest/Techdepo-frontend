import { useState, useEffect } from "react";
import axios from "axios";
import FormOption from "../common/FormOption";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const initialForm = {
    name: "",
    brand: "",
    stock: 0,
    price: 0,
    images: [],
  };
  const [formData, setFormData] = useState(initialForm);

  const formOptions = [
    {
      id: 1,
      type: "text",
      name: "name",
      placeholder: "New Item",
      value: formData.name,
      description: "Name of the new item",
    },
    {
      id: 2,
      type: "text",
      name: "brand",
      placeholder: "A cool brand",
      value: formData.brand,
      description: "Brand name",
    },
    {
      id: 3,
      type: "number",
      name: "stock",
      value: formData.stock,
      description: "Stock",
    },
    {
      id: 4,
      type: "number",
      name: "price",
      value: formData.price,
      description: "Price",
    },
    {
      id: 5,
      type: "file",
      name: "images",
      description: "Images of the item",
      multiple: true,
    },
  ];

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleImages = (event) => {
    const {
      target: { files },
    } = event;

    setImages((prev) => {
      return [...prev, ...files];
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const product = new FormData();
    product.append("name", formData.name);
    product.append("description", formData.brand);
    product.append("price", formData.price);
    product.append("stock", formData.stock);
    categories.forEach((category) => {
      product.append("categories", category._id);
    });
    images.forEach((image) => {
      product.append("product_images", image);
    });

    try {
      const respForImageUpload = await axios.post("/api/products/", product);
      console.log(respForImageUpload);
      setFormData(initialForm);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get("/api/categories");
        setCategories(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getCategories();
  }, []);

  return (
    <div>
      <p>Add product (temp)</p>
      <form onSubmit={handleSubmit}>
        {formOptions.map((o) => {
          if (o.name === "images") {
            return <FormOption {...o} onChange={handleImages} key={o.id} />;
          }
          return <FormOption {...o} onChange={handleChange} key={o.id} />;
        })}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
