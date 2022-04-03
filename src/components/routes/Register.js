import { useState } from "react";

function Register() {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setNewUser((currentUserObject) => {
      return {
        ...currentUserObject,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <label>Register</label>
      <form>
        <label>Email:</label>
        <input
          type="text"
          placeholder="example@mymail.com"
          name="email"
          value={newUser.email}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Register;
