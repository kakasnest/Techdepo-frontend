import { useState } from "react";
import axios from "axios";

import FormOption from "../common/FormOption";

function Login() {
  const initialForm = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialForm);

  const formOptions = [
    {
      id: 1,
      type: "email",
      name: "email",
      placeholder: "myemail@email.com",
      value: formData.email,
      description: "Email",
    },
    {
      id: 2,
      type: "password",
      name: "password",
      placeholder: "password",
      value: formData.password,
      description: "Password",
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataToSend = {
      user: {
        email: formData.email,
        password: formData.password,
      },
    };

    try {
      const {
        data: { message },
      } = await axios.post("/api/auth/login", dataToSend);
      setFormData(initialForm);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        {formOptions.map((f) => (
          <FormOption {...f} onChange={handleChange} key={f.id} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
