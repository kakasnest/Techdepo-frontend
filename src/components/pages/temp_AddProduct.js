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
      placeholder: "0",
      value: formData.stock,
      description: "Stock",
    },
    {
      id: 4,
      type: "number",
      name: "price",
      placeholder: "0",
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

  const handleCategories = (event) => {
    const {
      target: { name },
    } = event;

    setCategories(
      categories.map((c) => {
        if (c.name === name) {
          return { ...c, checked: !c.checked };
        }
        return c;
      })
    );
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

    const imagesToUpload = new FormData();
    imagesToUpload.append("images", images);
    const filteredCategories = categories.filter((c) => {
      if (c.checked) return true;
      return false;
    });

    const dataToSend = {
      product: {
        name: formData.name,
        description: {
          brand: formData.brand,
        },
        price: formData.price,
        stock: formData.stock,
        categories: filteredCategories.map((c) => c._id),
        images: images.map((i) => "/api/images/" + i.name),
      },
    };

    try {
      const respForNewProduct = await axios.post("/api/products/", dataToSend);
      const respForImageUpload = await axios.post("/images/", imagesToUpload);
      console.log(respForNewProduct, respForImageUpload);
      setFormData(initialForm);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get("/api/categories");
        const categoriesArray = data.map((c) => {
          return {
            ...c,
            checked: false,
            type: "checkbox",
            description: c.name,
          };
        });
        setCategories(categoriesArray);
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
        {categories.map((c) => {
          return <FormOption {...c} onChange={handleCategories} key={c._id} />;
        })}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
