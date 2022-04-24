import React from "react";

function FormOption({ type, name, value, onChange }) {
  return (
    <div>
      <p>{name}:</p>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
}

export default FormOption;
