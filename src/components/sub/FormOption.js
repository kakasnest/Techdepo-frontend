import React from "react";

function FormOption({ type, name, value, onChange, description, placeholder }) {
  return (
    <div>
      <p>{description}:</p>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormOption;
