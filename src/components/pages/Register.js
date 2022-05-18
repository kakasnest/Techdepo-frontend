import { useState } from "react";
import axios from "axios";

import FormOption from "../common/FormOption";

function Register() {
  const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialForm);

  const formOptions = [
    {
      id: 1,
      type: "text",
      name: "firstName",
      placeholder: "John",
      value: formData.firstName,
      description: "First name",
    },
    {
      id: 2,
      type: "text",
      name: "lastName",
      placeholder: "Doe",
      value: formData.lastName,
      description: "Last name",
    },
    {
      id: 3,
      type: "email",
      name: "email",
      placeholder: "myemail@email.com",
      value: formData.email,
      description: "Email",
    },
    {
      id: 4,
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
        name: {
          firstName: formData.firstName,
          lastName: formData.lastName,
        },
        email: formData.email,
        password: formData.password,
      },
    };

    try {
      const {
        data: { message },
      } = await axios.post("/api/auth/register", dataToSend);
      setFormData(initialForm);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <p>Register</p>
      <form onSubmit={handleSubmit}>
        {formOptions.map((f) => (
          <FormOption {...f} onChange={handleChange} key={f.id} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;
