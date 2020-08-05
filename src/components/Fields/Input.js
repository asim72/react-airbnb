import React from "react";

const inputField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && <span style={{ color: "white" }}>{error}</span>}
    </div>
  </div>
);

export default inputField;
