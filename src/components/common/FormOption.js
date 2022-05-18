import React from "react";

function FormOption(props) {
  return (
    <>
      <p>{props.description}</p>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
        multiple={props.multiple}
      />
    </>
  );
}

export default FormOption;
