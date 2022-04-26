import { useState } from "react";
import FormOption from "../components/elements/FormOption";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const formOptions = [
    {
      id: 1,
      type: "email",
      name: "email",
      value: formData.email,
    },
    {
      id: 2,
      type: "text",
      name: "password",
      value: formData.password,
    },
  ];

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setFormData((currentUserObject) => {
      return {
        ...currentUserObject,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <p>Register</p>
      <form>
        {formOptions.map((f) => (
          <FormOption {...f} onChange={handleChange} />
        ))}
      </form>
    </div>
  );
}

export default Register;
